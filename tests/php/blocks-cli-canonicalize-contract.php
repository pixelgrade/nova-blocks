<?php
/**
 * Pins `wp pixelgrade blocks validate` and `wp pixelgrade blocks canonicalize` against
 * docs/plans/agentic-stack/CONTRACT.md v0.3.10 §1.4: the §2 envelope and its exit-code mapping,
 * §3.0 permission-first plus the per-post `edit_post` gate, §3.6's `--yes`/`--dry-run` rules,
 * §3.8's pass-through-and-warn preset rule, §3.11's `harness_unavailable` graceful absence, and
 * the mandatory re-parse proof (`invalid_before`/`invalid_after` + the innerText and nested-<p>
 * checks of §5 P3 rule (c)).
 *
 * Standalone: run with `php tests/php/blocks-cli-canonicalize-contract.php` (no WordPress, no real
 * WP-CLI), matching the `tests/php/*-contract.php` convention picked up by `bin/run-tests.sh`.
 *
 * The Node harness is NOT stubbed at the PHP function level: the tests point
 * `novablocks/node_binary` at a throwaway shell script and let the real `proc_open` +
 * `stream_select` pump run against it. That is deliberate — the pump is the part most likely to
 * deadlock on a large request, and a mocked-out invoker would prove nothing about it.
 *
 * @package NovaBlocks
 */

namespace WP_CLI\Utils {
	function get_flag_value( $assoc_args, $flag, $default = null ) {
		return array_key_exists( $flag, $assoc_args ) ? $assoc_args[ $flag ] : $default;
	}
}

namespace {

	define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

	// ---------------------------------------------------------------------------------------
	// WP_CLI stub.
	// ---------------------------------------------------------------------------------------

	class Novablocks_Canon_Halt extends \Exception {
		public $exit_code;

		public function __construct( $exit_code ) {
			parent::__construct( 'halt:' . $exit_code );
			$this->exit_code = $exit_code;
		}
	}

	class WP_CLI {
		public static $log            = [];
		public static $printed_value  = null;
		public static $printed_format = null;
		public static $confirmed      = 0;

		public static function reset() {
			self::$log            = [];
			self::$printed_value  = null;
			self::$printed_format = null;
			self::$confirmed      = 0;
		}

		public static function add_command( $name, $callable ) {}

		public static function success( $message ) {
			self::$log[] = [ 'success', $message ];
		}

		public static function warning( $message ) {
			self::$log[] = [ 'warning', $message ];
		}

		public static function log( $message ) {
			self::$log[] = [ 'log', $message ];
		}

		public static function error( $message ) {
			self::$log[] = [ 'error', $message ];
			throw new Novablocks_Canon_Halt( 1 );
		}

		public static function confirm( $question, $assoc_args = [] ) {
			self::$confirmed++;
		}

		public static function print_value( $value, $assoc_args = [] ) {
			self::$printed_value  = $value;
			self::$printed_format = $assoc_args['format'] ?? null;
		}

		public static function halt( $exit_code ) {
			throw new Novablocks_Canon_Halt( $exit_code );
		}
	}

	// ---------------------------------------------------------------------------------------
	// Minimal WordPress surface.
	// ---------------------------------------------------------------------------------------

	$GLOBALS['nbq_current_user']  = 1;
	$GLOBALS['nbq_denied_caps']   = [];
	$GLOBALS['nbq_denied_posts']  = [];
	$GLOBALS['nbq_posts']         = [];
	$GLOBALS['nbq_template_ids']  = [];
	$GLOBALS['nbq_updates']       = [];
	$GLOBALS['nbq_update_error']  = [];
	$GLOBALS['nbq_filters']       = [];

	class WP_Post {
		public $ID;
		public $post_type;
		public $post_content;

		public function __construct( $id, $type, $content ) {
			$this->ID           = $id;
			$this->post_type    = $type;
			$this->post_content = $content;
		}
	}

	class WP_Error {
		private $code;
		private $message;

		public function __construct( $code = '', $message = '' ) {
			$this->code    = $code;
			$this->message = $message;
		}

		public function get_error_code() {
			return $this->code;
		}

		public function get_error_message() {
			return $this->message;
		}
	}

	function is_wp_error( $thing ) {
		return $thing instanceof WP_Error;
	}

	function get_current_user_id() {
		return $GLOBALS['nbq_current_user'];
	}

	function current_user_can( $capability, $object_id = null ) {
		if ( ! empty( $GLOBALS['nbq_denied_caps'][ $capability ] ) ) {
			return false;
		}
		if ( null !== $object_id && ! empty( $GLOBALS['nbq_denied_posts'][ (int) $object_id ] ) ) {
			return false;
		}
		return true;
	}

	function __( $text, $domain = 'default' ) {
		return $text;
	}

	function _n( $single, $plural, $number, $domain = 'default' ) {
		return 1 === (int) $number ? $single : $plural;
	}

	function wp_json_encode( $data, $options = 0, $depth = 512 ) {
		return json_encode( $data, $options, $depth );
	}

	function add_filter( $hook, callable $callback, $priority = 10, $accepted_args = 1 ) {
		$GLOBALS['nbq_filters'][ $hook ][ $priority ][] = [ 'callback' => $callback, 'accepted_args' => $accepted_args ];
		return true;
	}

	function apply_filters( $hook, $value, ...$args ) {
		if ( empty( $GLOBALS['nbq_filters'][ $hook ] ) ) {
			return $value;
		}
		ksort( $GLOBALS['nbq_filters'][ $hook ] );
		foreach ( $GLOBALS['nbq_filters'][ $hook ] as $callbacks ) {
			foreach ( $callbacks as $cb ) {
				$call_args = array_slice( array_merge( [ $value ], $args ), 0, $cb['accepted_args'] );
				$value     = call_user_func_array( $cb['callback'], $call_args );
			}
		}
		return $value;
	}

	function get_post( $id ) {
		return $GLOBALS['nbq_posts'][ (int) $id ] ?? null;
	}

	function clean_post_cache( $id ) {}

	function wp_update_post( $data, $wp_error = false ) {
		$id = (int) $data['ID'];

		if ( isset( $GLOBALS['nbq_update_error'][ $id ] ) ) {
			return new WP_Error( 'db_update_error', $GLOBALS['nbq_update_error'][ $id ] );
		}

		$GLOBALS['nbq_updates'][] = $id;
		$GLOBALS['nbq_posts'][ $id ]->post_content = (string) $data['post_content'];

		return $id;
	}

	function get_posts( $args ) {
		$out = [];
		foreach ( $GLOBALS['nbq_template_ids'] as $id ) {
			$out[] = $GLOBALS['nbq_posts'][ $id ];
		}
		return $out;
	}

	function get_stylesheet() {
		return 'anima-lt';
	}

	function get_template() {
		return 'anima-lt';
	}

	function home_url( $path = '' ) {
		return 'https://example.test/' . ltrim( (string) $path, '/' );
	}

	function novablocks_get_plugin_path() {
		return dirname( __DIR__, 2 ) . '/';
	}

	function get_block_editor_server_block_settings() {
		return [ 'core/paragraph' => [ 'name' => 'core/paragraph' ] ];
	}

	function novablocks_get_block_editor_settings() {
		return [ 'separator' => [ 'markup' => '<svg/>' ] ];
	}

	// ---------------------------------------------------------------------------------------
	// Code under test.
	// ---------------------------------------------------------------------------------------

	require_once __DIR__ . '/../../lib/cli/blocks-cli-envelope.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-harness.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-validate-command.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-canonicalize-command.php';

	// ---------------------------------------------------------------------------------------
	// A throwaway "node" that speaks the real protocol, so proc_open/stream_select run for real.
	// ---------------------------------------------------------------------------------------

	$fake_dir = sys_get_temp_dir() . '/nb-w4-fake-harness-' . getmypid();
	@mkdir( $fake_dir, 0777, true );
	$fake_node = $fake_dir . '/fake-node';

	file_put_contents(
		$fake_node,
		"#!/bin/sh\n" .
		"DIR=\$(dirname \"\$0\")\n" .
		"if [ \"\$2\" = \"--selftest\" ]; then cat \"\$DIR/selftest.json\"; exit 0; fi\n" .
		"REQ=\$(cat)\n" .
		"printf '%s' \"\${#REQ}\" > \"\$DIR/last-request-bytes.txt\"\n" .
		"N=0\n" .
		"[ -f \"\$DIR/calls.txt\" ] && N=\$(cat \"\$DIR/calls.txt\")\n" .
		"N=\$((N+1))\n" .
		"printf '%s' \"\$N\" > \"\$DIR/calls.txt\"\n" .
		"cat \"\$DIR/response-\$N.json\"\n"
	);
	chmod( $fake_node, 0755 );

	function nbq_selftest_ok( $ok = true ) {
		file_put_contents(
			$GLOBALS['nbq_fake_dir'] . '/selftest.json',
			$ok ? '{"ok":true,"protocol":1,"selftest":true}' : '{"ok":false,"error":"runtime not installed"}'
		);
	}

	/**
	 * Stage the harness response for the Nth invocation of this command run.
	 *
	 * `validate` invokes the harness once. `canonicalize` iterates to a byte-stable fixed point —
	 * each pass feeding the previous pass's output back in, bounded at 3 — and then makes ONE more
	 * invocation in `validate` mode over what the database actually holds. So the stub dispatches
	 * on call order: calls 1..N are the canonicalization passes, call N+1 is the fresh re-parse.
	 * That ordering is also what lets a test make the verification disagree with the passes, which
	 * is the whole point of the §3.9 fresh-re-parse proof.
	 */
	function nbq_response( $call, array $documents ) {
		file_put_contents(
			$GLOBALS['nbq_fake_dir'] . '/response-' . (int) $call . '.json',
			json_encode( [ 'ok' => true, 'protocol' => 1, 'bootstrap' => [ 'registered_block_types' => 145 ], 'documents' => $documents ] )
		);
	}

	function nbq_harness_calls() {
		$file = $GLOBALS['nbq_fake_dir'] . '/calls.txt';
		return is_file( $file ) ? (int) file_get_contents( $file ) : 0;
	}

	function nbq_last_request_bytes() {
		$file = $GLOBALS['nbq_fake_dir'] . '/last-request-bytes.txt';
		return is_file( $file ) ? (int) file_get_contents( $file ) : 0;
	}

	$GLOBALS['nbq_fake_dir']  = $fake_dir;
	$GLOBALS['nbq_fake_node'] = $fake_node;

	add_filter( 'novablocks/node_binary', function () {
		return $GLOBALS['nbq_fake_node'];
	} );
	add_filter( 'novablocks/agent_harness_path', function () {
		return $GLOBALS['nbq_harness_path'] ?? $GLOBALS['nbq_fake_dir'];
	} );

	// The probe requires <path>/bin/harness.cjs to exist.
	@mkdir( $fake_dir . '/bin', 0777, true );
	file_put_contents( $fake_dir . '/bin/harness.cjs', '// fake' );

	register_shutdown_function( function () use ( $fake_dir ) {
		foreach ( glob( $fake_dir . '/{,bin/}*', GLOB_BRACE ) as $file ) {
			@unlink( $file );
		}
		@rmdir( $fake_dir . '/bin' );
		@rmdir( $fake_dir );
	} );

	// ---------------------------------------------------------------------------------------
	// Harness helpers.
	// ---------------------------------------------------------------------------------------

	function nbq_reset() {
		WP_CLI::reset();
		$GLOBALS['nbq_current_user'] = 1;
		$GLOBALS['nbq_denied_caps']  = [];
		$GLOBALS['nbq_denied_posts'] = [];
		$GLOBALS['nbq_posts']        = [];
		$GLOBALS['nbq_template_ids'] = [];
		$GLOBALS['nbq_updates']      = [];
		$GLOBALS['nbq_update_error'] = [];
		$GLOBALS['nbq_harness_path'] = $GLOBALS['nbq_fake_dir'];
		@unlink( $GLOBALS['nbq_fake_dir'] . '/last-request-bytes.txt' );
		@unlink( $GLOBALS['nbq_fake_dir'] . '/calls.txt' );
		foreach ( glob( $GLOBALS['nbq_fake_dir'] . '/response-*.json' ) as $stale ) {
			@unlink( $stale );
		}
		nbq_selftest_ok( true );
	}

	function nbq_post( $id, $content, $type = 'page' ) {
		$GLOBALS['nbq_posts'][ $id ] = new WP_Post( $id, $type, $content );
	}

	function nbq_run( $callable, $args, $assoc_args ) {
		try {
			call_user_func( $callable, $args, $assoc_args );
		} catch ( Novablocks_Canon_Halt $e ) {
			return $e->exit_code;
		}
		throw new \RuntimeException( 'Command did not halt.' );
	}

	function assert_same( $expected, $actual, $message ) {
		if ( $expected !== $actual ) {
			fwrite( STDERR, $message . PHP_EOL );
			fwrite( STDERR, 'Expected: ' . var_export( $expected, true ) . PHP_EOL );
			fwrite( STDERR, 'Actual:   ' . var_export( $actual, true ) . PHP_EOL );
			exit( 1 );
		}
	}

	function assert_true( $condition, $message ) {
		if ( ! $condition ) {
			fwrite( STDERR, $message . PHP_EOL );
			exit( 1 );
		}
	}

	function nbq_warning_codes() {
		return array_column( (array) WP_CLI::$printed_value['warnings'], 'code' );
	}

	// =======================================================================================
	// §3.0 — permission-first, and never before the harness is touched.
	// =======================================================================================

	nbq_reset();
	$GLOBALS['nbq_current_user'] = 0;
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 1 ], [ 'format' => 'json' ] );
	assert_same( 3, $exit, 'validate: no resolved user must exit 3.' );
	assert_same( 'permission_denied', WP_CLI::$printed_value['code'], 'validate: no-user code.' );
	assert_true( false !== strpos( WP_CLI::$printed_value['summary'], 'edit_posts' ), 'validate: summary names the capability.' );
	assert_true( false !== strpos( WP_CLI::$printed_value['summary'], '--user' ), 'validate: summary suggests --user.' );
	assert_same( 0, nbq_last_request_bytes(), 'validate: a denied permission check must never reach the harness.' );

	nbq_reset();
	$GLOBALS['nbq_denied_caps']['edit_posts'] = true;
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 1 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 3, $exit, 'canonicalize: a user lacking edit_posts must exit 3.' );
	assert_same( [], $GLOBALS['nbq_updates'], 'canonicalize: a denied permission check must never write.' );

	// Per-post `edit_post` (contract §1.4's "edit_posts PLUS edit_post per id").
	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	nbq_post( 11, '<!-- wp:paragraph --><p>b</p><!-- /wp:paragraph -->' );
	$GLOBALS['nbq_denied_posts'][11] = true;
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10, 11 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 3, $exit, 'canonicalize: a per-post edit_post denial must exit 3.' );
	assert_same( 'permission_denied', WP_CLI::$printed_value['code'], 'canonicalize: per-post denial code.' );
	assert_true( false !== strpos( WP_CLI::$printed_value['summary'], '11' ), 'canonicalize: the denial names the offending post.' );
	assert_same( [], $GLOBALS['nbq_updates'], 'canonicalize: one denied post blocks the WHOLE set — no partial write.' );

	// `validate` is a read; contract §1.4 gives it `edit_posts` only, with no per-post meta-cap.
	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	$GLOBALS['nbq_denied_posts'][10] = true;
	nbq_response( 1, [ [ 'id' => 10, 'invalid' => [], 'block_count' => 1, 'converged' => true ] ] );
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 10 ], [ 'format' => 'json' ] );
	assert_same( 0, $exit, 'validate: no per-post edit_post gate (contract §1.4 lists edit_posts only).' );

	echo "permission contract OK\n";

	// =======================================================================================
	// §3.11 — graceful absence: harness_unavailable, exit 1, summary NAMES the install step.
	// =======================================================================================

	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	$GLOBALS['nbq_harness_path'] = '/definitely/not/installed';
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 10 ], [ 'format' => 'json' ] );
	assert_same( 1, $exit, 'validate: a missing harness package must exit 1.' );
	assert_same( false, WP_CLI::$printed_value['ok'], 'validate: harness absence is ok:false.' );
	assert_same( 'harness_unavailable', WP_CLI::$printed_value['code'], 'validate: harness absence code.' );
	assert_same( 'package_missing', WP_CLI::$printed_value['data']['reason'], 'validate: harness absence reason.' );
	assert_true( false !== strpos( WP_CLI::$printed_value['summary'], 'npm ci' ), 'validate: the summary names the install step (§3.11).' );
	assert_true( ! empty( WP_CLI::$printed_value['data']['install_step'] ), 'validate: data carries the install step verbatim.' );

	// A package that is present but never `npm ci`-ed: the --selftest probe is what tells them
	// apart, and it must NOT be reported as "package missing".
	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	nbq_selftest_ok( false );
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 1, $exit, 'canonicalize: an uninstalled runtime must exit 1.' );
	assert_same( 'harness_unavailable', WP_CLI::$printed_value['code'], 'canonicalize: uninstalled-runtime code.' );
	assert_same( 'runtime_missing', WP_CLI::$printed_value['data']['reason'], 'canonicalize: uninstalled runtime is distinguished from an absent package.' );
	assert_same( [], $GLOBALS['nbq_updates'], 'canonicalize: an unavailable harness must never write (§3.11: never a partial write).' );

	// Binary discovery: an unresolvable command name yields null, never a bare guess.
	assert_same( null, novablocks_cli_which( 'definitely-not-a-real-binary-xyzzy' ), 'which(): an unresolvable binary is null.' );

	echo "harness_unavailable contract OK\n";

	// =======================================================================================
	// `validate` — exit 0 on zero invalid, exit 2 on any invalid, data.invalid[] shape.
	// =======================================================================================

	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	nbq_response( 1, [ [ 'id' => 10, 'invalid' => [], 'block_count' => 3, 'converged' => true ] ] );
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 10 ], [ 'format' => 'json' ] );
	assert_same( 0, $exit, 'validate: zero invalid must exit 0.' );
	assert_same( true, WP_CLI::$printed_value['ok'], 'validate: zero invalid ok:true.' );
	assert_same( 'ok', WP_CLI::$printed_value['code'], 'validate: zero invalid code.' );
	assert_same( [], WP_CLI::$printed_value['data']['invalid'], 'validate: zero invalid payload.' );
	assert_same( 3, WP_CLI::$printed_value['data']['posts'][0]['block_count'], 'validate: block_count is reported.' );
	assert_true( nbq_last_request_bytes() > 0, 'validate: the harness actually received a request.' );

	nbq_reset();
	nbq_post( 10, '<!-- wp:heading --><h2>a</h2><!-- /wp:heading -->' );
	nbq_response(
		1,
		[ [ 'id' => 10, 'block_count' => 2, 'converged' => false, 'invalid' => [ [ 'index' => 1, 'block_name' => 'core/heading', 'reason' => 'tag mismatch' ] ] ] ]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 10 ], [ 'format' => 'json' ] );
	assert_same( 2, $exit, 'validate: any invalid must exit 2.' );
	assert_same( true, WP_CLI::$printed_value['ok'], 'validate: exit 2 stays ok:true (§2 — ok is bound to the exit code; findings are not failures).' );
	assert_same( 'invalid_blocks', WP_CLI::$printed_value['code'], 'validate: invalid-blocks code.' );
	assert_same(
		[ 'post_id' => 10, 'index' => 1, 'block_name' => 'core/heading', 'reason' => 'tag mismatch' ],
		WP_CLI::$printed_value['data']['invalid'][0],
		'validate: data.invalid[] carries {post_id, index, block_name, reason} exactly (§1.4).'
	);

	// Table mode: same exit code, no print_value(), a rendered posts table.
	nbq_reset();
	nbq_post( 10, '<!-- wp:heading --><h2>a</h2><!-- /wp:heading -->' );
	nbq_response( 1, [ [ 'id' => 10, 'block_count' => 2, 'converged' => false, 'invalid' => [ [ 'index' => 1, 'block_name' => 'core/heading', 'reason' => 'x' ] ] ] ] );
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 10 ], [] );
	assert_same( 2, $exit, 'validate: table mode exit code is identical to json mode (§2).' );
	assert_true( null === WP_CLI::$printed_value, 'validate: table mode never calls print_value().' );

	echo "validate contract OK\n";

	// =======================================================================================
	// Target resolution — bad ids, unknown posts, --post-type, --all-parts.
	// =======================================================================================

	nbq_reset();
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 'twelve' ], [ 'format' => 'json' ] );
	assert_same( 1, $exit, 'validate: a non-numeric id is invalid_params, exit 1.' );
	assert_same( 'invalid_params', WP_CLI::$printed_value['code'], 'validate: non-numeric id code.' );

	nbq_reset();
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [], [ 'format' => 'json' ] );
	assert_same( 1, $exit, 'validate: no ids at all is invalid_params, exit 1.' );

	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 10, 99 ], [ 'format' => 'json' ] );
	assert_same( 1, $exit, 'validate: an unknown post id is invalid_params, exit 1 — all-or-nothing, never a partial read.' );
	assert_true( false !== strpos( WP_CLI::$printed_value['summary'], '99' ), 'validate: the error names the unknown id.' );

	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->', 'page' );
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 10 ], [ 'format' => 'json', 'post-type' => 'wp_template_part' ] );
	assert_same( 1, $exit, 'validate: a --post-type mismatch is invalid_params, exit 1.' );
	assert_true( false !== strpos( WP_CLI::$printed_value['summary'], 'wp_template_part' ), 'validate: the mismatch names the requested type.' );

	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->', 'page' );
	nbq_post( 20, '<!-- wp:paragraph --><p>footer</p><!-- /wp:paragraph -->', 'wp_template_part' );
	nbq_post( 21, '<!-- wp:paragraph --><p>tpl</p><!-- /wp:paragraph -->', 'wp_template' );
	$GLOBALS['nbq_template_ids'] = [ 20, 21 ];
	nbq_response(
		1,
		[
			[ 'id' => 10, 'invalid' => [], 'block_count' => 1 ],
			[ 'id' => 20, 'invalid' => [ [ 'index' => 0, 'block_name' => 'core/paragraph', 'reason' => 'x' ] ], 'block_count' => 1 ],
			[ 'id' => 21, 'invalid' => [], 'block_count' => 1 ],
		]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 10 ], [ 'format' => 'json', 'all-parts' => true ] );
	assert_same( 2, $exit, 'validate --all-parts: an invalid block in a template PART fails the run.' );
	assert_same( 3, count( WP_CLI::$printed_value['data']['posts'] ), '--all-parts: the page plus both chrome posts are checked (§1.4 — the recurring failure is a missed footer part).' );
	assert_same( 20, WP_CLI::$printed_value['data']['invalid'][0]['post_id'], '--all-parts: the finding is attributed to the part.' );
	$origins = array_column( WP_CLI::$printed_value['data']['posts'], 'origin' );
	assert_true( in_array( 'all-parts', $origins, true ), '--all-parts: chrome posts are tagged with their origin.' );

	// A part passed explicitly AND pulled in by --all-parts is processed exactly once.
	nbq_reset();
	nbq_post( 20, '<!-- wp:paragraph --><p>footer</p><!-- /wp:paragraph -->', 'wp_template_part' );
	$GLOBALS['nbq_template_ids'] = [ 20 ];
	nbq_response( 1, [ [ 'id' => 20, 'invalid' => [], 'block_count' => 1 ] ] );
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 20 ], [ 'format' => 'json', 'all-parts' => true ] );
	assert_same( 0, $exit, '--all-parts: an explicitly-named part still succeeds.' );
	assert_same( 1, count( WP_CLI::$printed_value['data']['posts'] ), '--all-parts: no duplicate when an id is both named and collected.' );
	assert_same( 'argument', WP_CLI::$printed_value['data']['posts'][0]['origin'], '--all-parts: an explicitly-named post keeps its "argument" origin.' );

	echo "target resolution contract OK\n";

	// =======================================================================================
	// Canonicalize helpers. The command iterates to a byte-stable fixed point (bounded at 3) and
	// then makes ONE verification call in `validate` mode, so a scenario stages N pass responses
	// followed by the verification response. A pass that returns the content it was given is what
	// ends the loop.
	// =======================================================================================

	/**
	 * Build one per-document canonicalize-pass result with sane defaults.
	 *
	 * The text gate reads DIGESTS, not the text: the command compares the first pass's `before`
	 * against the last pass's `after`, so a test expresses "text was lost" by handing back a
	 * different `inner_text_after_sha1`, and "text survived" by handing back the same one.
	 */
	function nbq_pass( $canonical_content, array $overrides = [] ) {
		return array_merge(
			[
				'id'                       => 10,
				'block_count'              => 1,
				'invalid'                  => [],
				'converged'                => true,
				'canonical_content'        => $canonical_content,
				'inner_text_before_sha1'   => 'TEXT',
				'inner_text_after_sha1'    => 'TEXT',
				'nested_paragraphs_before' => 0,
				'nested_paragraphs_after'  => 0,
			],
			$overrides
		);
	}

	/**
	 * Stage a whole canonicalize run: the ordered canonicalization passes, then the verification.
	 *
	 * @param array $passes One document-list per pass, in order.
	 * @param array $verify The `validate`-mode document list for the fresh re-parse.
	 */
	function nbq_stage_canonicalize( array $passes, array $verify ) {
		$call = 0;
		foreach ( $passes as $pass ) {
			nbq_response( ++$call, $pass );
		}
		nbq_response( ++$call, $verify );
	}

	// =======================================================================================
	// §3.6 — canonicalize is destructive: --yes, --dry-run, table-mode confirm.
	// =======================================================================================

	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json' ] );
	assert_same( 1, $exit, 'canonicalize: --format=json without --yes must exit 1.' );
	assert_same( 'confirmation_required', WP_CLI::$printed_value['code'], 'canonicalize: confirmation code.' );
	assert_same( [], $GLOBALS['nbq_updates'], 'canonicalize: an unconfirmed run writes nothing.' );
	assert_same( 0, WP_CLI::$confirmed, 'canonicalize: json mode must NEVER prompt — a prompt corrupts the machine contract.' );
	assert_same( 0, nbq_harness_calls(), 'canonicalize: an unconfirmed run must not even start the harness.' );

	nbq_reset();
	$already = '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->';
	nbq_post( 10, $already );
	nbq_stage_canonicalize( [ [ nbq_pass( $already ) ] ], [ [ 'id' => 10, 'invalid' => [], 'block_count' => 1 ] ] );
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [] ); // table mode, no --yes
	assert_same( 0, $exit, 'canonicalize: table mode accepts an interactive confirmation instead of --yes.' );
	assert_same( 1, WP_CLI::$confirmed, 'canonicalize: table mode prompts exactly once.' );

	// --dry-run: never prompts, never requires --yes, never writes.
	nbq_reset();
	$original = '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->';
	$fixed    = '<!-- wp:paragraph --><p>A</p><!-- /wp:paragraph -->';
	nbq_post( 10, $original );
	nbq_stage_canonicalize(
		[
			[ nbq_pass( $fixed, [ 'invalid' => [ [ 'index' => 0, 'block_name' => 'core/paragraph', 'reason' => 'x' ] ] ] ) ],
			[ nbq_pass( $fixed ) ],
		],
		[ [ 'id' => 10, 'invalid' => [] ] ]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'dry-run' => true ] );
	assert_same( 0, $exit, 'canonicalize --dry-run: no --yes needed, exit 0.' );
	assert_same( 0, WP_CLI::$confirmed, 'canonicalize --dry-run: never prompts.' );
	assert_same( [], $GLOBALS['nbq_updates'], 'canonicalize --dry-run: writes nothing.' );
	assert_same( true, WP_CLI::$printed_value['data']['dry_run'], 'canonicalize --dry-run: the envelope says so.' );
	assert_same( [ 10 ], WP_CLI::$printed_value['data']['updated'], 'canonicalize --dry-run: reports what WOULD change.' );
	assert_same( $original, $GLOBALS['nbq_posts'][10]->post_content, 'canonicalize --dry-run: stored content is byte-identical afterwards.' );

	echo "destructive-gate contract OK\n";

	// =======================================================================================
	// canonicalize — the write, the fresh re-parse proof, and the exit mapping.
	// =======================================================================================

	nbq_reset();
	nbq_post( 10, '<!-- wp:heading --><h2>a</h2><!-- /wp:heading -->' );
	$canonical = '<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">a</h2><!-- /wp:heading -->';
	nbq_stage_canonicalize(
		[
			[ nbq_pass( $canonical, [ 'invalid' => [ [ 'index' => 0, 'block_name' => 'core/heading', 'reason' => 'tag mismatch' ] ] ] ) ],
			[ nbq_pass( $canonical ) ],
		],
		[ [ 'id' => 10, 'invalid' => [], 'block_count' => 1 ] ]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 0, $exit, 'canonicalize: invalid_after == 0 and byte-stable exits 0.' );
	assert_same( 'ok', WP_CLI::$printed_value['code'], 'canonicalize: success code.' );
	assert_same( [ 10 ], $GLOBALS['nbq_updates'], 'canonicalize: exactly one write — the fixed point, not one write per pass.' );
	assert_same( $canonical, $GLOBALS['nbq_posts'][10]->post_content, 'canonicalize: the canonical content is what landed.' );
	assert_same( 1, count( WP_CLI::$printed_value['data']['invalid_before'] ), 'canonicalize: invalid_before is reported (§1.4 mandatory read-back).' );
	assert_same( 10, WP_CLI::$printed_value['data']['invalid_before'][0]['post_id'], 'canonicalize: invalid_before entries carry post_id.' );
	assert_same( [], WP_CLI::$printed_value['data']['invalid_after'], 'canonicalize: invalid_after is reported.' );
	assert_same( true, WP_CLI::$printed_value['data']['posts'][0]['inner_text_preserved'], 'canonicalize: the innerText check is per post (§5 P3 (c)).' );
	assert_same( true, WP_CLI::$printed_value['data']['posts'][0]['stable'], 'canonicalize: the post reached its fixed point.' );
	assert_same( 2, WP_CLI::$printed_value['data']['posts'][0]['passes'], 'canonicalize: data.posts[].passes keeps the multi-pass fact visible.' );
	assert_same( [ 10 ], WP_CLI::$printed_value['data']['updated'], 'canonicalize: updated list.' );

	// invalid_before comes from the FIRST pass only. A later pass finding nothing invalid must not
	// erase the finding that motivated the rewrite.
	assert_same( 'core/heading', WP_CLI::$printed_value['data']['invalid_before'][0]['block_name'], 'canonicalize: invalid_before describes the ORIGINAL document.' );

	// Idempotence (§3.5): a canonical post canonicalizes to itself on the first pass — no write,
	// code noop, exit 0, and the loop stops after one pass.
	nbq_reset();
	$canonical = '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->';
	nbq_post( 10, $canonical );
	nbq_stage_canonicalize( [ [ nbq_pass( $canonical ) ] ], [ [ 'id' => 10, 'invalid' => [], 'block_count' => 1 ] ] );
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 0, $exit, 'canonicalize: an idempotent second run exits 0.' );
	assert_same( 'noop', WP_CLI::$printed_value['code'], 'canonicalize: an idempotent second run is a noop (§3.5).' );
	assert_same( [], $GLOBALS['nbq_updates'], 'canonicalize: nothing is written when the bytes already match — no revision churn.' );
	assert_same( [ 10 ], WP_CLI::$printed_value['data']['unchanged'], 'canonicalize: the post is reported unchanged.' );
	assert_same( 1, WP_CLI::$printed_value['data']['posts'][0]['passes'], 'canonicalize: an already-canonical post costs exactly one pass.' );
	assert_same( 2, nbq_harness_calls(), 'canonicalize: one pass plus one verification.' );

	// A document still invalid on the fresh re-parse exits 2 (nova-blocks#610 class).
	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>x</p><!-- /wp:paragraph -->' );
	$drift = '<!-- wp:paragraph --><p>x </p><!-- /wp:paragraph -->';
	nbq_stage_canonicalize(
		[ [ nbq_pass( $drift, [ 'converged' => false ] ) ], [ nbq_pass( $drift, [ 'converged' => false ] ) ] ],
		[ [ 'id' => 10, 'invalid' => [ [ 'index' => 0, 'block_name' => 'core/paragraph', 'reason' => 'content mismatch' ] ] ] ]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 2, $exit, 'canonicalize: a document still invalid after the write exits 2 (nova-blocks#610 class).' );
	assert_same( true, WP_CLI::$printed_value['ok'], 'canonicalize: exit 2 stays ok:true.' );
	assert_same( 'invalid_blocks', WP_CLI::$printed_value['code'], 'canonicalize: non-convergence code.' );
	assert_same( [ 10 ], WP_CLI::$printed_value['data']['not_converged'], 'canonicalize: the non-converging post is named.' );
	assert_same( false, WP_CLI::$printed_value['data']['posts'][0]['converged'], 'canonicalize: per-post converged flag.' );
	assert_true( false !== strpos( WP_CLI::$printed_value['summary'], 'do not re-run' ), 'canonicalize: the summary says not to retry.' );
	assert_same( 0, WP_CLI::$printed_value['data']['posts'][0]['invalid_before'], 'canonicalize: #610 starts from zero invalid — that is the whole point of the case.' );

	// The proof is the verification pass over what get_post() returns, not over the string just
	// handed to wp_update_post(). A filter that mangles content on save must be caught.
	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	$fixed = '<!-- wp:paragraph --><p>A</p><!-- /wp:paragraph -->';
	nbq_stage_canonicalize(
		[ [ nbq_pass( $fixed ) ], [ nbq_pass( $fixed ) ] ],
		[ [ 'id' => 10, 'invalid' => [ [ 'index' => 0, 'block_name' => 'core/paragraph', 'reason' => 'mangled on save' ] ] ] ]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 2, $exit, 'canonicalize: the fresh re-parse governs the exit code, not the same-session verdict (§3.9).' );
	assert_same( 'mangled on save', WP_CLI::$printed_value['data']['invalid_after'][0]['reason'], 'canonicalize: invalid_after comes from the verification pass.' );

	// A failed write is surfaced, and does not get reported as a success.
	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	$GLOBALS['nbq_update_error'][10] = 'database is read-only';
	nbq_stage_canonicalize(
		[ [ nbq_pass( $fixed ) ], [ nbq_pass( $fixed ) ] ],
		[ [ 'id' => 10, 'invalid' => [] ] ]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_true( in_array( 'write_failed', nbq_warning_codes(), true ), 'canonicalize: a failed write raises a write_failed warning.' );
	assert_same( [], WP_CLI::$printed_value['data']['updated'], 'canonicalize: a failed write is not counted as updated.' );

	echo "canonicalize write + proof contract OK\n";

	// =======================================================================================
	// Bounded iteration to the fixed point (§1.4 as amended v0.3.11).
	// =======================================================================================

	// The real P3-a shape: authored -> A -> B -> B. Three passes, all valid, exit 0 in ONE run.
	nbq_reset();
	$authored = '<!-- wp:image {"id":20} --><figure class="wp-block-image aligncenter"></figure><!-- /wp:image -->';
	$passA    = '<!-- wp:image {"id":20} --><figure class="wp-block-image aligncenter"></figure><!-- /wp:image --> ';
	$passB    = '<!-- wp:image {"id":20,"className":"aligncenter"} --><figure class="wp-block-image aligncenter"></figure><!-- /wp:image -->';
	nbq_post( 10, $authored );
	nbq_stage_canonicalize(
		[ [ nbq_pass( $passA ) ], [ nbq_pass( $passB ) ], [ nbq_pass( $passB ) ] ],
		[ [ 'id' => 10, 'invalid' => [], 'block_count' => 1 ] ]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 0, $exit, 'canonicalize: a document needing three passes still exits 0 in ONE command run.' );
	assert_same( 'ok', WP_CLI::$printed_value['code'], 'canonicalize: three-pass convergence is a plain success.' );
	assert_same( 3, WP_CLI::$printed_value['data']['posts'][0]['passes'], 'canonicalize: passes > 1 is recorded, so the multi-pass fact never disappears.' );
	assert_same( true, WP_CLI::$printed_value['data']['posts'][0]['stable'], 'canonicalize: the document reached its fixed point.' );
	assert_same( [], WP_CLI::$printed_value['data']['not_yet_stable'], 'canonicalize: nothing is left unstable.' );
	assert_same(
		$passB,
		$GLOBALS['nbq_posts'][10]->post_content,
		'canonicalize: the FIXED POINT is written — not the first pass, and not once per pass.'
	);
	assert_same( [ 10 ], $GLOBALS['nbq_updates'], 'canonicalize: three passes still produce exactly one write.' );
	assert_same( 4, nbq_harness_calls(), 'canonicalize: three passes plus one verification.' );

	// Still moving after the budget: exit 2, code not_yet_stable. That is oscillation, not slow
	// convergence, so the command stops instead of iterating forever.
	nbq_reset();
	nbq_post( 10, 'v0' );
	nbq_stage_canonicalize(
		[ [ nbq_pass( 'v1' ) ], [ nbq_pass( 'v2' ) ], [ nbq_pass( 'v3' ) ] ],
		[ [ 'id' => 10, 'invalid' => [] ] ]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 2, $exit, 'canonicalize: a document still changing after the pass budget exits 2.' );
	assert_same( 'not_yet_stable', WP_CLI::$printed_value['code'], 'canonicalize: the unstable code.' );
	assert_same( [ 10 ], WP_CLI::$printed_value['data']['not_yet_stable'], 'canonicalize: data names the unstable post.' );
	assert_same( 3, WP_CLI::$printed_value['data']['posts'][0]['passes'], 'canonicalize: the budget is 3 passes, not more.' );
	assert_same( 4, nbq_harness_calls(), 'canonicalize: the loop is BOUNDED — three passes, never a fourth.' );
	assert_true( in_array( 'not_yet_stable', nbq_warning_codes(), true ), 'canonicalize: instability is also a warning.' );

	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	nbq_response( 1, [ [ 'id' => 10, 'invalid' => [], 'block_count' => 1 ] ] );
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 10 ], [ 'format' => 'json' ] );
	assert_same( 1, nbq_harness_calls(), 'validate: exactly one harness invocation — it writes nothing, so there is nothing to re-read.' );

	echo "bounded-iteration contract OK\n";

	// =======================================================================================
	// §5 P3 rule (c) as a CUMULATIVE pre-write gate, and §3.8's pass-through preset rule.
	// =======================================================================================

	// The text gate is cumulative: each pass is compared against the ORIGINAL, never against the
	// pass before it. This is the nova-blocks#610 shape — pass 1 preserves the text, pass 2 (which
	// rebuilds the double-wrapped paragraph) drops it. A per-pass check passes both passes
	// individually and still loses the content.
	nbq_reset();
	$original = '<!-- wp:paragraph --><p>hello</p><!-- /wp:paragraph -->';
	nbq_post( 10, $original );
	nbq_stage_canonicalize(
		[
			[ nbq_pass( '<!-- wp:paragraph --><p><p>hello</p></p><!-- /wp:paragraph -->', [ 'nested_paragraphs_after' => 0 ] ) ],
			[ nbq_pass( '<!-- wp:paragraph --><p></p><!-- /wp:paragraph -->', [ 'inner_text_after_sha1' => 'LOST' ] ) ],
		],
		[ [ 'id' => 10, 'invalid' => [] ] ]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 2, $exit, 'canonicalize: a text-losing rewrite exits 2 — never 0.' );
	assert_same( 'content_altered', WP_CLI::$printed_value['code'], 'canonicalize: text-loss code.' );
	assert_same( [], $GLOBALS['nbq_updates'], 'canonicalize: a text-losing rewrite is REFUSED, not written and then regretted.' );
	assert_same( $original, $GLOBALS['nbq_posts'][10]->post_content, 'canonicalize: the post is byte-identical after a refusal — the CUMULATIVE loss is caught even though pass 1 alone was safe.' );
	assert_same( [ 10 ], WP_CLI::$printed_value['data']['refused'], 'canonicalize: data.refused names the post.' );
	assert_true( in_array( 'content_altered', nbq_warning_codes(), true ), 'canonicalize: the refusal is surfaced as a warning too.' );
	assert_same( 3, nbq_harness_calls(), 'canonicalize: iteration stops as soon as the text is lost — no third pass on a doomed document.' );

	// Introducing a nested <p> is refused on the same grounds.
	nbq_reset();
	$original = '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->';
	nbq_post( 10, $original );
	nbq_stage_canonicalize(
		[ [ nbq_pass( '<!-- wp:paragraph --><p><p>a</p></p><!-- /wp:paragraph -->', [ 'nested_paragraphs_after' => 1 ] ) ] ],
		[ [ 'id' => 10, 'invalid' => [] ] ]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 2, $exit, 'canonicalize: introducing a nested <p> exits 2.' );
	assert_same( [], $GLOBALS['nbq_updates'], 'canonicalize: introducing a nested <p> is refused, not written.' );
	assert_same( $original, $GLOBALS['nbq_posts'][10]->post_content, 'canonicalize: the post is byte-identical after a nested-<p> refusal.' );

	// Removing a nested <p> is the fix, not a finding — it must not warn.
	nbq_reset();
	$repaired = '<!-- wp:paragraph --><p>a b</p><!-- /wp:paragraph -->';
	nbq_post( 10, '<!-- wp:paragraph --><p>a <p>b</p></p><!-- /wp:paragraph -->' );
	nbq_stage_canonicalize(
		[
			[ nbq_pass( $repaired, [ 'nested_paragraphs_before' => 1, 'nested_paragraphs_after' => 0 ] ) ],
			[ nbq_pass( $repaired, [ 'nested_paragraphs_before' => 0, 'nested_paragraphs_after' => 0 ] ) ],
		],
		[ [ 'id' => 10, 'invalid' => [] ] ]
	);
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 0, $exit, 'canonicalize: removing a nested <p> is a clean run.' );
	assert_true( ! in_array( 'nested_paragraph_introduced', nbq_warning_codes(), true ), 'canonicalize: removing a nested <p> must NOT warn — that is the repair.' );
	assert_same( $repaired, $GLOBALS['nbq_posts'][10]->post_content, 'canonicalize: the repair is written.' );

	// §3.8: existing presets are passed through untouched and warned about; the run still succeeds.
	nbq_reset();
	$with_preset = '<!-- wp:paragraph {"backgroundColor":"vivid-red"} --><p class="has-vivid-red-background-color">a</p><!-- /wp:paragraph -->';
	nbq_post( 10, $with_preset );
	nbq_stage_canonicalize( [ [ nbq_pass( $with_preset ) ] ], [ [ 'id' => 10, 'invalid' => [] ] ] );
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true ] );
	assert_same( 0, $exit, 'canonicalize: a preset-bearing legacy post still canonicalizes and exits normally (§3.8 scope limit).' );
	assert_true( in_array( 'preset_detected', nbq_warning_codes(), true ), 'canonicalize: presets are surfaced as a warning.' );
	assert_same( $with_preset, $GLOBALS['nbq_posts'][10]->post_content, 'canonicalize: presets are passed through, never rewritten.' );

	echo "text-preservation + preset contract OK\n";

	// =======================================================================================
	// --via-editor — lab-only, per §3.11 (absorbed into harness_unavailable in v0.3.7).
	// =======================================================================================

	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	$exit = nbq_run( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'yes' => true, 'via-editor' => true ] );
	assert_same( 1, $exit, '--via-editor must exit 1.' );
	assert_same( 'harness_unavailable', WP_CLI::$printed_value['code'], '--via-editor uses harness_unavailable (v0.3.7 absorbed editor_harness_unavailable).' );
	assert_true( false !== stripos( WP_CLI::$printed_value['summary'], 'lab' ), '--via-editor: the summary says the browser fallback is lab-only.' );
	assert_same( [], $GLOBALS['nbq_updates'], '--via-editor: nothing is written.' );

	echo "--via-editor contract OK\n";

	// =======================================================================================
	// The stdin pump: a request far larger than a pipe buffer must not deadlock.
	// =======================================================================================

	nbq_reset();
	nbq_post( 10, str_repeat( '<!-- wp:paragraph --><p>' . str_repeat( 'x', 200 ) . '</p><!-- /wp:paragraph -->', 2000 ) );
	nbq_response( 1, [ [ 'id' => 10, 'invalid' => [], 'block_count' => 2000 ] ] );
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 10 ], [ 'format' => 'json' ] );
	assert_same( 0, $exit, 'a multi-hundred-KB request completes (the pump writes stdin while draining stdout).' );
	assert_true( nbq_last_request_bytes() > 400000, 'the harness received the WHOLE request, not one pipe buffer of it. Got: ' . nbq_last_request_bytes() );

	echo "stdin pump contract OK\n";

	// =======================================================================================
	// Envelope invariants shared with W6's read-only verbs.
	// =======================================================================================

	nbq_reset();
	nbq_post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	nbq_response( 1, [ [ 'id' => 10, 'invalid' => [], 'block_count' => 1 ] ] );
	$exit = nbq_run( 'novablocks_cli_blocks_validate', [ 10 ], [ 'format' => 'json' ] );
	foreach ( [ 'ok', 'code', 'summary', 'data', 'warnings' ] as $key ) {
		assert_true( array_key_exists( $key, WP_CLI::$printed_value ), 'envelope carries "' . $key . '".' );
	}
	assert_same( 'json', WP_CLI::$printed_format, 'envelope is printed in the requested format.' );
	assert_true( is_string( WP_CLI::$printed_value['summary'] ) && '' !== WP_CLI::$printed_value['summary'], 'summary is always a non-empty human line.' );

	echo "envelope contract OK\n";

	echo "All wp pixelgrade blocks validate/canonicalize contract tests OK\n";
}
