<?php
/**
 * Pins `lib/abilities/blocks-abilities.php` — Nova Blocks' five `pixelgrade/*` WordPress
 * Abilities — against the agentic-stack contract (`docs/plans/agentic-stack/CONTRACT.md` v0.4.0
 * §4) and the W7 shared build spec: registration presence and shape (§10.1), annotations as data
 * (§10.2), private-by-default plus the single reviewed whitelist filter (§10.3), permission
 * callbacks that deny without `edit_posts` AND without the per-post `edit_post` meta-cap (§10.4),
 * the entitlement seam denying both ways (§10.8), and — the point of the whole lane — that each
 * ability and its WP-CLI callback route through the SAME shared core (§10.5).
 *
 * Standalone: run with `php tests/php/blocks-abilities-contract.php` (no WordPress, no real
 * WP-CLI, no Abilities API — all three are stubbed below), matching the `tests/php/*-contract.php`
 * convention picked up by `bin/run-fast-tests.cjs` / `npm test`.
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
	defined( 'MB_IN_BYTES' ) || define( 'MB_IN_BYTES', 1024 * 1024 );

	// The harness package is deliberately pointed somewhere that cannot exist, so every
	// harness-backed assertion below lands on the §3.11 graceful-absence path deterministically —
	// which is also the path an MCP client hits on a site that never installed the agent-tools
	// package, i.e. the common case worth pinning.
	define( 'PIXELGRADE_AGENT_HARNESS_PATH', '/nonexistent/pixelgrade-agent-harness' );

	// -----------------------------------------------------------------------------------
	// WP_CLI stub — only what the CLI surface touches while proving parity.
	// -----------------------------------------------------------------------------------

	class Novablocks_Abilities_Halt extends \Exception {
		public $exit_code;

		public function __construct( $exit_code ) {
			parent::__construct( 'halt:' . $exit_code );
			$this->exit_code = $exit_code;
		}
	}

	class WP_CLI {
		public static $log           = [];
		public static $printed_value = null;

		public static function reset() {
			self::$log           = [];
			self::$printed_value = null;
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
			throw new Novablocks_Abilities_Halt( 1 );
		}

		public static function print_value( $value, $assoc_args = [] ) {
			self::$printed_value = $value;
		}

		public static function halt( $exit_code ) {
			throw new Novablocks_Abilities_Halt( $exit_code );
		}
	}

	// -----------------------------------------------------------------------------------
	// Minimal WordPress surface.
	// -----------------------------------------------------------------------------------

	$GLOBALS['nba_caps']        = [ 'edit_posts' => true ];
	$GLOBALS['nba_meta_caps']   = [];
	$GLOBALS['nba_current_user'] = 1;
	$GLOBALS['nba_filters']     = [];
	$GLOBALS['nba_actions']     = [];
	$GLOBALS['nba_posts']       = [];
	$GLOBALS['nba_abilities']   = [];
	$GLOBALS['nba_categories']  = [];

	class WP_Error {
		private $code;
		private $message;
		private $data;

		public function __construct( $code = '', $message = '', $data = null ) {
			$this->code    = $code;
			$this->message = $message;
			$this->data    = $data;
		}

		public function get_error_code() {
			return $this->code;
		}

		public function get_error_message() {
			return $this->message;
		}

		public function get_error_data() {
			return $this->data;
		}
	}

	function is_wp_error( $value ) {
		return $value instanceof WP_Error;
	}

	class WP_Post {
		public $ID;
		public $post_type    = 'page';
		public $post_content = '';

		public function __construct( $id, $content, $type = 'page' ) {
			$this->ID           = (int) $id;
			$this->post_content = (string) $content;
			$this->post_type    = (string) $type;
		}
	}

	function get_post( $id ) {
		return $GLOBALS['nba_posts'][ (int) $id ] ?? null;
	}

	function get_current_user_id() {
		return $GLOBALS['nba_current_user'];
	}

	function current_user_can( $capability, ...$args ) {
		if ( ! empty( $args ) ) {
			$key = $capability . ':' . (int) $args[0];

			// A meta cap defaults to "allowed" so the interesting case has to be declared.
			return ! array_key_exists( $key, $GLOBALS['nba_meta_caps'] ) || (bool) $GLOBALS['nba_meta_caps'][ $key ];
		}

		return ! empty( $GLOBALS['nba_caps'][ $capability ] );
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
		$GLOBALS['nba_filters'][ $hook ][] = [ 'callback' => $callback, 'accepted_args' => $accepted_args ];
		return true;
	}

	function apply_filters( $hook, $value, ...$args ) {
		foreach ( $GLOBALS['nba_filters'][ $hook ] ?? [] as $entry ) {
			$call_args = array_slice( array_merge( [ $value ], $args ), 0, $entry['accepted_args'] );
			$value     = call_user_func_array( $entry['callback'], $call_args );
		}

		return $value;
	}

	function add_action( $hook, callable $callback, $priority = 10, $accepted_args = 1 ) {
		$GLOBALS['nba_actions'][ $hook ][] = $callback;
		return true;
	}

	function do_action( $hook, ...$args ) {
		foreach ( $GLOBALS['nba_actions'][ $hook ] ?? [] as $callback ) {
			call_user_func_array( $callback, $args );
		}
	}

	function get_option( $option, $default = false ) {
		return $default;
	}

	function update_option( $option, $value, $autoload = true ) {
		return true;
	}

	function get_posts( $args = [] ) {
		return [];
	}

	function get_stylesheet() {
		return 'anima-lt';
	}

	function get_template() {
		return 'anima-lt';
	}

	function sanitize_title( $value ) {
		return strtolower( preg_replace( '/[^a-z0-9]+/', '-', trim( (string) $value ) ) );
	}

	function sanitize_title_with_dashes( $value ) {
		return sanitize_title( $value );
	}

	function novablocks_get_plugin_path() {
		return dirname( __DIR__, 2 );
	}

	// -----------------------------------------------------------------------------------
	// Abilities API stub — captures registrations so they can be asserted as DATA.
	// -----------------------------------------------------------------------------------

	function wp_register_ability( $name, $args ) {
		$GLOBALS['nba_abilities'][ $name ] = $args;
		return true;
	}

	function wp_register_ability_category( $slug, $args ) {
		$GLOBALS['nba_categories'][ $slug ] = $args;
		return true;
	}

	function wp_has_ability_category( $slug ) {
		return array_key_exists( $slug, $GLOBALS['nba_categories'] );
	}

	// -----------------------------------------------------------------------------------
	// Block registry stubs for `list`, pattern registry stub for `patterns`.
	// -----------------------------------------------------------------------------------

	class WP_Block_Type {
		public $name;
		public $title;
		public $api_version;
		public $render_callback;
		public $render_template;
		public $attributes;
		public $supports;

		public function __construct( array $props ) {
			foreach ( $props as $key => $value ) {
				$this->$key = $value;
			}
		}
	}

	class WP_Block_Type_Registry {
		private static $instance;
		private $registered = [];

		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		public function register( $name, WP_Block_Type $block_type ) {
			$this->registered[ $name ] = $block_type;
		}

		public function is_registered( $name ) {
			return isset( $this->registered[ $name ] );
		}

		public function get_registered( $name ) {
			return $this->registered[ $name ] ?? null;
		}

		public function get_all_registered() {
			return $this->registered;
		}
	}

	// `describe` folds in the bundle enums via novablocks_get_block_editor_settings(). The real
	// function pulls in the whole theme-support/plus payload; stub it to just the enums describe
	// reads so the parity assertion below runs without that machinery.
	function novablocks_get_block_editor_settings(): array {
		return [
			'advancedGalleryPresetOptions' => [ [ 'label' => 'The Cloud Atlas', 'value' => 'the-cloud-atlas' ] ],
			'scrollingEffectOptions'       => [ [ 'label' => 'Static', 'value' => 'static' ] ],
			'motionPresetOptions'          => [ [ 'label' => 'Custom', 'value' => 'custom' ] ],
			'collectionLayoutRecipes'      => [],
			'modules'                      => [ 'spaceAndSizing' => [] ],
		];
	}

	class WP_Block_Patterns_Registry {
		private static $instance;
		private $registered = [];

		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		public function register( $name, array $properties ) {
			$properties['name']        = $name;
			$this->registered[ $name ] = $properties;
		}

		public function get_all_registered() {
			return $this->registered;
		}
	}

	// -----------------------------------------------------------------------------------
	// Load the code under test. Requiring the CLI subtree directly (rather than letting
	// novablocks_agent_blocks_bootstrap() do it) is what lets the parity assertions call the
	// WP-CLI callbacks and the ability callbacks side by side in one process.
	// -----------------------------------------------------------------------------------

	require_once __DIR__ . '/../../lib/cli/blocks-cli-envelope.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-list-command.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-describe-command.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-patterns-command.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-harness.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-validate-command.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-canonicalize-command.php';
	require_once __DIR__ . '/../../lib/abilities/blocks-abilities.php';

	// -----------------------------------------------------------------------------------
	// Assertions.
	// -----------------------------------------------------------------------------------

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

	/**
	 * Security review LOW-2 item 2: nothing an `edit_posts`-capable MCP client reads off an
	 * ability may carry the server's absolute filesystem layout. Recurses through arrays (so a
	 * whole `data` payload can be handed in directly) and, for every string found, refuses:
	 * `ABSPATH`'s own value, the `PIXELGRADE_AGENT_HARNESS_PATH` constant this file deliberately
	 * points at a distinctive absolute path, and — the general case a grep for the leak would
	 * use — any run of two-or-more `/segment` path components (`/var/…`, `/Users/…`, the plugin
	 * directory, or any other absolute path a future probe might embed).
	 *
	 * @param mixed  $value Summary string, or a `data` array (recursed).
	 * @param string $label Assertion label prefix.
	 */
	function nba_assert_no_absolute_path( $value, string $label ): void {
		if ( is_array( $value ) ) {
			foreach ( $value as $key => $item ) {
				nba_assert_no_absolute_path( $item, $label . '.' . $key );
			}

			return;
		}

		if ( ! is_string( $value ) ) {
			return;
		}

		assert_true( false === strpos( $value, ABSPATH ), $label . ': must not contain ABSPATH.' );
		assert_true(
			false === strpos( $value, PIXELGRADE_AGENT_HARNESS_PATH ),
			$label . ': must not contain the PIXELGRADE_AGENT_HARNESS_PATH constant value (the absolute harness directory).'
		);
		assert_true(
			1 !== preg_match( '#(?:^|[\s(:=])/(?:[A-Za-z0-9_.-]+/)+[A-Za-z0-9_.-]*#', $value ),
			$label . ': must not contain a leading-"/" filesystem path — found one in: ' . $value
		);
	}

	/**
	 * Compare payloads by their JSON encoding.
	 *
	 * `assert_same()` is strict, and the pinned payload carries `new stdClass()` for an empty
	 * attribute map (§2: `data` is an object, not a list) — two such instances are never `===`
	 * even when they describe the same thing. Encoding first compares the VALUES, which is what
	 * these parity assertions are about.
	 *
	 * @param mixed $value Payload.
	 *
	 * @return string
	 */
	function nba_json( $value ): string {
		return (string) json_encode( $value );
	}

	function nba_reset_registry() {
		$GLOBALS['nba_abilities'] = [];
	}

	function nba_register() {
		nba_reset_registry();
		do_action( 'wp_abilities_api_init' );
	}

	/**
	 * Run a WP-CLI callback, catching the halt() it always ends in.
	 *
	 * @return array `{ exit: int, envelope: array }`.
	 */
	function nba_run_cli( $callable, $args, $assoc_args ) {
		WP_CLI::reset();

		try {
			call_user_func( $callable, $args, $assoc_args );
		} catch ( Novablocks_Abilities_Halt $e ) {
			return [ 'exit' => $e->exit_code, 'envelope' => WP_CLI::$printed_value ];
		}

		throw new \RuntimeException( 'Command did not halt.' );
	}

	$ability_names = [
		'pixelgrade/list-blocks',
		'pixelgrade/describe-block',
		'pixelgrade/list-patterns',
		'pixelgrade/validate-post',
		'pixelgrade/canonicalize-post',
	];

	// =========================================================================================
	// §10.1 — registration presence and shape, on the right hooks, in the right category.
	// =========================================================================================

	assert_true( ! empty( $GLOBALS['nba_actions']['wp_abilities_api_categories_init'] ), 'the pixelgrade category registers on wp_abilities_api_categories_init.' );
	assert_true( ! empty( $GLOBALS['nba_actions']['wp_abilities_api_init'] ), 'abilities register on wp_abilities_api_init — wp_register_ability() hard-fails outside it.' );

	assert_same( [], $GLOBALS['nba_categories'], 'nothing is registered before the hooks fire.' );
	do_action( 'wp_abilities_api_categories_init' );
	assert_true( isset( $GLOBALS['nba_categories']['pixelgrade'] ), 'the shared "pixelgrade" category slug is registered.' );
	assert_same( 'Pixelgrade', $GLOBALS['nba_categories']['pixelgrade']['label'], 'category label matches SHARED-SPEC §2.' );

	// Idempotent + defensive: a second pass (another Pixelgrade plugin having registered it
	// already) must not re-register.
	$GLOBALS['nba_categories']['pixelgrade']['label'] = 'Someone else got here first';
	do_action( 'wp_abilities_api_categories_init' );
	assert_same( 'Someone else got here first', $GLOBALS['nba_categories']['pixelgrade']['label'], 'category registration is idempotent — it yields to whichever Pixelgrade plugin registered first.' );

	nba_register();

	assert_same( $ability_names, array_keys( $GLOBALS['nba_abilities'] ), 'exactly the five §4 abilities (W9 adds describe-block) register, under their exact contract names.' );

	foreach ( $ability_names as $name ) {
		$ability = $GLOBALS['nba_abilities'][ $name ];

		foreach ( [ 'label', 'description', 'category', 'input_schema', 'output_schema', 'execute_callback', 'permission_callback', 'meta' ] as $key ) {
			assert_true( isset( $ability[ $key ] ), $name . ': the "' . $key . '" key is present.' );
		}

		assert_same( 'pixelgrade', $ability['category'], $name . ': registers in the shared pixelgrade category.' );
		assert_true( is_callable( $ability['execute_callback'] ), $name . ': execute_callback is callable.' );
		assert_true( is_callable( $ability['permission_callback'] ), $name . ': permission_callback is callable.' );
		assert_same( 'object', $ability['input_schema']['type'], $name . ': input_schema is an object schema, so execute_callback always receives the validated input array.' );
		assert_true( ! empty( $ability['output_schema']['properties']['data'] ), $name . ': output_schema describes the envelope, data included.' );
		assert_true( strlen( (string) $ability['description'] ) > 200, $name . ': the description is written for a model — what it does, when to reach for it, and its consequences.' );
	}
	assert_true(
		isset( $GLOBALS['nba_abilities']['pixelgrade/describe-block']['output_schema']['properties']['data']['properties']['body_template_slots'] ),
		'describe-block: the output schema advertises the fillable template slot list.'
	);

	echo "registration shape contract OK\n";

	// =========================================================================================
	// §10.2 — annotations match §4's table, as DATA.
	// =========================================================================================

	$expected_annotations = [
		'pixelgrade/list-blocks'       => [ 'readonly' => true, 'destructive' => false, 'idempotent' => true ],
		'pixelgrade/describe-block'    => [ 'readonly' => true, 'destructive' => false, 'idempotent' => true ],
		'pixelgrade/list-patterns'     => [ 'readonly' => true, 'destructive' => false, 'idempotent' => true ],
		'pixelgrade/validate-post'     => [ 'readonly' => true, 'destructive' => false, 'idempotent' => true ],
		'pixelgrade/canonicalize-post' => [ 'readonly' => false, 'destructive' => true, 'idempotent' => true ],
	];

	foreach ( $expected_annotations as $name => $annotations ) {
		assert_same( $annotations, $GLOBALS['nba_abilities'][ $name ]['meta']['annotations'], $name . ': annotations match contract §4.' );
	}

	// §4 ‡ / §1.4 (v0.3.9): list-patterns is readonly under the cache carve-out but NOT
	// write-free, and its description MUST say so — an MCP client must never advertise the call
	// as touching nothing.
	$patterns_description = $GLOBALS['nba_abilities']['pixelgrade/list-patterns']['description'];
	assert_true( false !== strpos( $patterns_description, 'novablocks_cloud_block_patterns' ), 'list-patterns discloses the exact option pair a cloud cache miss writes.' );
	assert_true( false !== stripos( $patterns_description, 'not write-free' ), 'list-patterns states plainly that readonly does not mean write-free.' );

	// The harness precondition and the canonicalize refusal semantics are contract-named
	// disclosures too (SHARED-SPEC §8).
	foreach ( [ 'pixelgrade/validate-post', 'pixelgrade/canonicalize-post' ] as $name ) {
		assert_true( false !== strpos( $GLOBALS['nba_abilities'][ $name ]['description'], 'harness_unavailable' ), $name . ': discloses the separately-installed harness precondition.' );
	}

	$canon_description = $GLOBALS['nba_abilities']['pixelgrade/canonicalize-post']['description'];
	foreach ( [ '3 passes', 'not_yet_stable', 'content_altered', 'innerText' ] as $needle ) {
		assert_true( false !== strpos( $canon_description, $needle ), 'canonicalize-post discloses "' . $needle . '".' );
	}
	assert_true( false !== stripos( $canon_description, 'lab-only' ), 'canonicalize-post says the headless-Chrome fallback is lab-only and unreachable from here.' );
	assert_true( ! array_key_exists( 'via_editor', $GLOBALS['nba_abilities']['pixelgrade/canonicalize-post']['input_schema']['properties'] ), '§3.11: --via-editor has NO ability equivalent — the browser harness must not be reachable from an MCP client.' );
	assert_same( false, $GLOBALS['nba_abilities']['pixelgrade/canonicalize-post']['input_schema']['additionalProperties'], 'canonicalize-post refuses unknown inputs, so a via_editor-shaped parameter cannot sneak through.' );

	echo "annotation + disclosure contract OK\n";

	// =========================================================================================
	// §10.3 — private by default; the ONE reviewed whitelist filter is the only way to open one.
	// =========================================================================================

	foreach ( $ability_names as $name ) {
		assert_same( false, $GLOBALS['nba_abilities'][ $name ]['meta']['mcp']['public'], $name . ': private by default — with no whitelist filter, meta.mcp.public is false.' );
	}

	add_filter(
		'pixelgrade/mcp/public_abilities',
		static function ( $names ) {
			return array_merge( (array) $names, [ 'pixelgrade/list-blocks' ] );
		}
	);

	nba_register();

	assert_same( true, $GLOBALS['nba_abilities']['pixelgrade/list-blocks']['meta']['mcp']['public'], 'the whitelist filter flips exactly the named ability.' );
	foreach ( [ 'pixelgrade/list-patterns', 'pixelgrade/validate-post', 'pixelgrade/canonicalize-post' ] as $name ) {
		assert_same( false, $GLOBALS['nba_abilities'][ $name ]['meta']['mcp']['public'], $name . ': stays private when another ability is whitelisted.' );
	}

	$GLOBALS['nba_filters']['pixelgrade/mcp/public_abilities'] = [];
	nba_register();

	echo "privacy contract OK\n";

	// =========================================================================================
	// §10.4 — permission callbacks deny without the capability, and per-post for the two
	// post-scoped abilities (§1.4 v0.3.12: `validate` enforces the meta-cap too).
	// =========================================================================================

	$GLOBALS['nba_posts'][ 10 ] = new WP_Post( 10, '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' );
	$GLOBALS['nba_posts'][ 11 ] = new WP_Post( 11, '<!-- wp:paragraph --><p>b</p><!-- /wp:paragraph -->' );

	$permission = [];
	foreach ( $ability_names as $name ) {
		$permission[ $name ] = $GLOBALS['nba_abilities'][ $name ]['permission_callback'];
	}

	// Granted.
	assert_same( true, call_user_func( $permission['pixelgrade/list-blocks'], [] ), 'list-blocks: edit_posts is enough.' );
	assert_same( true, call_user_func( $permission['pixelgrade/validate-post'], [ 'post_ids' => [ 10, 11 ] ] ), 'validate-post: edit_posts + edit_post on every id passes.' );
	assert_same( true, call_user_func( $permission['pixelgrade/canonicalize-post'], [ 'post_ids' => [ 10 ] ] ), 'canonicalize-post: edit_posts + edit_post passes.' );

	// No edit_posts at all — every ability denies, none more permissive than its command (§4).
	$GLOBALS['nba_caps']['edit_posts'] = false;
	foreach ( $ability_names as $name ) {
		$denied = call_user_func( $permission[ $name ], [ 'post_ids' => [ 10 ] ] );
		assert_true( true !== $denied, $name . ': a user without edit_posts is denied (anything but exactly true denies).' );
		assert_same( 'permission_denied', $denied->get_error_code(), $name . ': the denial names the contract token.' );
	}
	$GLOBALS['nba_caps']['edit_posts'] = true;

	// edit_posts but NOT edit_post on ONE of the requested ids: both post-scoped abilities deny.
	$GLOBALS['nba_meta_caps']['edit_post:11'] = false;
	foreach ( [ 'pixelgrade/validate-post', 'pixelgrade/canonicalize-post' ] as $name ) {
		$denied = call_user_func( $permission[ $name ], [ 'post_ids' => [ 10, 11 ] ] );
		assert_true( true !== $denied, $name . ': a user who can edit_posts but not edit_post on ONE requested id is denied — the whole call, not a filtered subset.' );
		assert_same( 'permission_denied', $denied->get_error_code(), $name . ': per-post denial uses the permission_denied token.' );
		assert_true( false !== strpos( $denied->get_error_message(), '11' ), $name . ': the denial names the offending post id.' );
	}

	// The same restriction must not leak through `all_parts`, which expands the resolved set.
	$denied = call_user_func( $permission['pixelgrade/canonicalize-post'], [ 'post_ids' => [ 10 ], 'all_parts' => true ] );
	assert_same( true, $denied, 'the per-post gate runs over the RESOLVED set, template parts included — with none present, id 10 alone still passes.' );

	$GLOBALS['nba_meta_caps'] = [];

	// A resolution failure that is NOT a permission failure (an unknown id) passes the permission
	// gate on purpose, so execute answers with the honest invalid_params instead of a misleading
	// denial.
	assert_same( true, call_user_func( $permission['pixelgrade/validate-post'], [ 'post_ids' => [ 4242 ] ] ), 'an unknown post id is not a permission problem — it is invalid_params, answered by execute.' );

	echo "permission contract OK\n";

	// =========================================================================================
	// §10.5 — EXECUTE PARITY: the ability and the WP-CLI callback route through the same core.
	// The honest form: run the shared core directly, then assert both surfaces are nothing but
	// two shapings of that one result.
	// =========================================================================================

	WP_Block_Type_Registry::get_instance()->register(
		'novablocks/headline',
		new WP_Block_Type( [ 'name' => 'novablocks/headline', 'title' => 'Headline', 'api_version' => 3, 'attributes' => [ 'level' => [ 'type' => 'number' ] ], 'supports' => [ 'align' => true ] ] )
	);
	WP_Block_Type_Registry::get_instance()->register(
		'core/paragraph',
		new WP_Block_Type( [ 'name' => 'core/paragraph', 'title' => 'Paragraph', 'api_version' => 3, 'attributes' => [], 'supports' => [] ] )
	);

	$core     = novablocks_agent_blocks_list_core( [ 'namespace' => 'all', 'attributes' => true ] );
	$ability  = call_user_func( $GLOBALS['nba_abilities']['pixelgrade/list-blocks']['execute_callback'], [ 'namespace' => 'all', 'attributes' => true ] );
	$cli      = nba_run_cli( 'novablocks_cli_blocks_list', [], [ 'namespace' => 'all', 'attributes' => true, 'format' => 'json' ] );

	assert_same( 0, $core['exit'], 'list core: a good namespace exits 0.' );
	assert_same( 2, $core['data']['count'], 'list core: --namespace=all sees both registered blocks.' );

	assert_same(
		nba_json(
			[
				'ok'       => true,
				'code'     => $core['code'],
				'summary'  => $core['summary'],
				'data'     => $core['data'],
				'warnings' => [],
			]
		),
		nba_json( $ability ),
		'list-blocks: the ability returns the core result as the §2 envelope, verbatim — no second implementation.'
	);
	assert_same( 0, $cli['exit'], 'list CLI: same input, same exit code.' );
	assert_same( $core['code'], $cli['envelope']['code'], 'list: CLI and core agree on the machine token.' );
	assert_same( nba_json( $core['data'] ), nba_json( $cli['envelope']['data'] ), 'list: the CLI prints the SAME data object the ability returns — one core, two shapings.' );
	assert_same( nba_json( $ability['data'] ), nba_json( $cli['envelope']['data'] ), 'list: ability and command produce identical data for identical input (SHARED-SPEC §10.5).' );

	// The failure mapping is part of the parity: exit 1 becomes a WP_Error carrying the command's
	// closed machine token verbatim, never a generic schema rejection (which is exactly why the
	// enum is validated in the core and NOT declared as a JSON-Schema enum).
	$core    = novablocks_agent_blocks_list_core( [ 'namespace' => 'wat' ] );
	$ability = call_user_func( $GLOBALS['nba_abilities']['pixelgrade/list-blocks']['execute_callback'], [ 'namespace' => 'wat' ] );
	$cli     = nba_run_cli( 'novablocks_cli_blocks_list', [], [ 'namespace' => 'wat', 'format' => 'json' ] );

	assert_true( is_wp_error( $ability ), 'list-blocks: ok:false travels as a WP_Error (SHARED-SPEC §4).' );
	assert_same( 'invalid_params', $ability->get_error_code(), 'list-blocks: the WP_Error code IS the command token.' );
	assert_same( $core['summary'], $ability->get_error_message(), 'list-blocks: the error message is the core summary.' );
	assert_true( false !== strpos( $ability->get_error_message(), 'wat' ), 'list-blocks: an unknown enum value is named…' );
	assert_true( false !== strpos( $ability->get_error_message(), 'novablocks|core|all' ), '…alongside the accepted set — never a bare schema rejection.' );
	assert_same( 1, $cli['exit'], 'list CLI: the same bad value exits 1.' );
	assert_same( 'invalid_params', $cli['envelope']['code'], 'list: CLI and ability report the same failure token.' );

	// describe (W9): the schema+vocabulary merge lives in the core, so both surfaces agree.
	WP_Block_Type_Registry::get_instance()->register(
		'novablocks/hero',
		new WP_Block_Type( [ 'name' => 'novablocks/hero', 'title' => 'Hero', 'api_version' => 3, 'attributes' => [ 'emphasisArea' => [ 'type' => 'number', 'default' => 100 ], 'stylePreset' => [ 'type' => 'string', 'default' => 'the-cloud-atlas' ] ], 'supports' => [] ] )
	);
	$core    = novablocks_agent_blocks_describe_core( [ 'block' => 'hero' ] );
	$ability = call_user_func( $GLOBALS['nba_abilities']['pixelgrade/describe-block']['execute_callback'], [ 'block' => 'hero' ] );
	$cli     = nba_run_cli( 'novablocks_cli_blocks_describe', [ 'hero' ], [ 'format' => 'json' ] );

	assert_same( 0, $core['exit'], 'describe core: a short name resolves and exits 0.' );
	assert_same( 'novablocks/hero', $core['data']['block'], 'describe core: hero → novablocks/hero.' );
	assert_same( 'curated', $core['data']['attributes']['emphasisArea']['source'], 'describe core: emphasisArea is curated.' );
	assert_same( 'dynamic', $core['data']['save_body'], 'describe core: generated save-body metadata survives the shared core.' );
	assert_same( nba_json( $core['data'] ), nba_json( $ability['data'] ), 'describe-block: the ability returns the core payload verbatim.' );
	assert_same( nba_json( $core['data'] ), nba_json( $cli['envelope']['data'] ), 'describe: ability and command produce identical data for identical input (SHARED-SPEC §10.5).' );

	$core_bad    = novablocks_agent_blocks_describe_core( [ 'block' => 'nope-nope' ] );
	$ability_bad = call_user_func( $GLOBALS['nba_abilities']['pixelgrade/describe-block']['execute_callback'], [ 'block' => 'nope-nope' ] );
	assert_true( is_wp_error( $ability_bad ), 'describe-block: an unknown block travels as a WP_Error.' );
	assert_same( 'invalid_params', $ability_bad->get_error_code(), 'describe-block: the WP_Error code is the command token.' );
	assert_same( $core_bad['summary'], $ability_bad->get_error_message(), 'describe-block: the error message is the core summary.' );

	// patterns: the local-wins merge lives in the core, so both surfaces see one list.
	WP_Block_Patterns_Registry::get_instance()->register( 'pixelgrade/hero', [ 'title' => 'Hero', 'categories' => [ 'featured' ] ] );

	$core    = novablocks_agent_blocks_patterns_core( [ 'source' => 'local' ] );
	$ability = call_user_func( $GLOBALS['nba_abilities']['pixelgrade/list-patterns']['execute_callback'], [ 'source' => 'local' ] );
	$cli     = nba_run_cli( 'novablocks_cli_blocks_patterns', [], [ 'source' => 'local', 'format' => 'json' ] );

	assert_same( 'local', $core['data']['patterns'][0]['source'], 'patterns core: a locally-registered pattern is attributed to local.' );
	assert_same( nba_json( $core['data'] ), nba_json( $ability['data'] ), 'list-patterns: the ability returns the core payload verbatim.' );
	assert_same( nba_json( $core['data'] ), nba_json( $cli['envelope']['data'] ), 'patterns: ability and command produce identical data for identical input.' );

	// validate / canonicalize: with the harness absent, BOTH surfaces report the same §3.11
	// graceful-absence CODE — the machine contract — through the SAME shared core, which is what
	// proves there is no second hand-written near-miss. The human-facing summary/data are NOT
	// identical between the two surfaces (security review LOW-2 item 2, fixed here): the CLI keeps
	// its absolute-path operator guidance, and the ability gets install-step wording with no
	// filesystem path, because that summary is what an `edit_posts`-capable remote MCP client
	// reads off the whitelisted `validate-post`/`canonicalize-post` abilities.
	$core_cli = novablocks_agent_blocks_validate_core( [ 'post_ids' => [ 10 ] ] );
	$ability  = call_user_func( $GLOBALS['nba_abilities']['pixelgrade/validate-post']['execute_callback'], [ 'post_ids' => [ 10 ] ] );
	$cli      = nba_run_cli( 'novablocks_cli_blocks_validate', [ 10 ], [ 'format' => 'json' ] );

	assert_same( 'harness_unavailable', $core_cli['code'], 'validate core (cli surface): no harness installed → harness_unavailable.' );
	assert_true( is_wp_error( $ability ), 'validate-post: harness_unavailable is ok:false, so it travels as a WP_Error.' );
	assert_same( 'harness_unavailable', $ability->get_error_code(), 'validate-post: the ability reports the SAME machine token as the CLI (the shared core, the shared "code").' );
	assert_same( 1, $cli['exit'], 'validate CLI: harness_unavailable is exit 1.' );
	assert_same( $core_cli['summary'], $cli['envelope']['summary'], 'validate: the CLI callback and a core call defaulting to the cli surface name the same install step.' );
	assert_same( nba_json( $core_cli['data'] ), nba_json( $cli['envelope']['data'] ), 'validate: the CLI callback and a core call defaulting to the cli surface carry identical data.' );

	// The ability's summary/data must be produced by the SAME shared core called with the SAME
	// probe, just a different surface — proving one rule, two wordings, not a second copy.
	$core_ability = novablocks_agent_blocks_validate_core( [ 'post_ids' => [ 10 ], 'surface' => 'ability' ] );
	assert_same( $core_ability['summary'], $ability->get_error_message(), 'validate-post: the ability summary comes from the shared core called with surface "ability".' );
	assert_same( nba_json( $core_ability['data'] ), nba_json( $ability->get_error_data()['data'] ), 'validate-post: the WP_Error carries the ability-surface core data under "data".' );
	assert_same( 'harness_unavailable', $core_ability['code'], 'validate core (ability surface): the code is unaffected by surface — only wording differs.' );
	assert_same( $core_cli['code'], $core_ability['code'], 'validate: the machine "code" is IDENTICAL across surfaces; only summary/data wording differs.' );
	assert_same( $core_cli['data']['reason'], $core_ability['data']['reason'], 'validate: data.reason (also machine-readable) is identical across surfaces.' );

	// The actual LOW-2 item 2 regression check: nothing that reaches an MCP client through the
	// ability path may carry an absolute filesystem path — not the harness directory
	// (PIXELGRADE_AGENT_HARNESS_PATH above, deliberately set to a distinctive absolute path), not
	// ABSPATH, and no bare "/…" token anywhere in the summary or in any string value of `data`.
	nba_assert_no_absolute_path( $ability->get_error_message(), 'validate-post ability summary' );
	nba_assert_no_absolute_path( $ability->get_error_data()['data'], 'validate-post ability data' );
	// … while still naming the install step, so the ability caller is not left with nothing to act on.
	assert_true( false !== stripos( $ability->get_error_message(), 'npm ci' ), 'validate-post ability: the summary still names the install command.' );
	assert_true( false !== stripos( $ability->get_error_message(), 'agent-harness' ), 'validate-post ability: the summary still names the package.' );

	$core_cli = novablocks_agent_blocks_canonicalize_core( [ 'post_ids' => [ 10 ], 'dry_run' => true ] );
	$ability  = call_user_func( $GLOBALS['nba_abilities']['pixelgrade/canonicalize-post']['execute_callback'], [ 'post_ids' => [ 10 ], 'dry_run' => true ] );
	$cli      = nba_run_cli( 'novablocks_cli_blocks_canonicalize', [ 10 ], [ 'format' => 'json', 'dry-run' => true ] );

	assert_same( 'harness_unavailable', $core_cli['code'], 'canonicalize core (cli surface): no harness installed → harness_unavailable.' );
	assert_same( 'harness_unavailable', $ability->get_error_code(), 'canonicalize-post: same machine token through the ability.' );
	assert_same( $core_cli['summary'], $cli['envelope']['summary'], 'canonicalize: the CLI callback and a core call defaulting to the cli surface share the summary.' );

	$core_ability = novablocks_agent_blocks_canonicalize_core( [ 'post_ids' => [ 10 ], 'dry_run' => true, 'surface' => 'ability' ] );
	assert_same( $core_ability['summary'], $ability->get_error_message(), 'canonicalize-post: the ability summary comes from the shared core called with surface "ability".' );
	assert_same( $core_cli['code'], $core_ability['code'], 'canonicalize: the machine "code" is IDENTICAL across surfaces; only summary/data wording differs.' );

	nba_assert_no_absolute_path( $ability->get_error_message(), 'canonicalize-post ability summary' );
	nba_assert_no_absolute_path( $ability->get_error_data()['data'], 'canonicalize-post ability data' );
	assert_true( false !== stripos( $ability->get_error_message(), 'npm ci' ), 'canonicalize-post ability: the summary still names the install command.' );

	echo "execute parity contract OK\n";

	// =========================================================================================
	// §3.6 / SHARED-SPEC §5 — a destructive ability demands confirm:true; dry_run never does.
	// =========================================================================================

	$unconfirmed = call_user_func( $GLOBALS['nba_abilities']['pixelgrade/canonicalize-post']['execute_callback'], [ 'post_ids' => [ 10 ] ] );
	assert_true( is_wp_error( $unconfirmed ), 'canonicalize-post without confirm is ok:false.' );
	assert_same( 'confirmation_required', $unconfirmed->get_error_code(), 'canonicalize-post: the machine path demands an explicit confirm, exactly as --format=json demands --yes.' );

	// Resolution precedes the confirmation demand, so a typo'd id is reported as such rather than
	// hidden behind "you did not confirm" — the same ordering as the CLI callback.
	$typo = call_user_func( $GLOBALS['nba_abilities']['pixelgrade/canonicalize-post']['execute_callback'], [ 'post_ids' => [ 4242 ] ] );
	assert_same( 'invalid_params', $typo->get_error_code(), 'canonicalize-post: an unknown id is invalid_params, reported BEFORE the confirmation gate.' );

	// An unknown id on validate-post takes the same honest path (it has no confirmation gate).
	$typo = call_user_func( $GLOBALS['nba_abilities']['pixelgrade/validate-post']['execute_callback'], [ 'post_ids' => [ 4242 ] ] );
	assert_same( 'invalid_params', $typo->get_error_code(), 'validate-post: an unknown id is invalid_params.' );
	assert_true( false !== strpos( $typo->get_error_message(), '4242' ), 'validate-post: the offending id is named.' );

	echo "confirmation contract OK\n";

	// =========================================================================================
	// No content excerpts, contract-wide (§1.4 v0.3.12) — an MCP-exposed ability is exactly where
	// this bites. Nothing an ability returns may carry stored markup.
	// =========================================================================================

	$GLOBALS['nba_posts'][ 12 ] = new WP_Post( 12, '<!-- wp:paragraph --><p>SECRET-DRAFT-TEXT</p><!-- /wp:paragraph -->' );

	foreach ( [ 'pixelgrade/validate-post', 'pixelgrade/canonicalize-post' ] as $name ) {
		$result  = call_user_func( $GLOBALS['nba_abilities'][ $name ]['execute_callback'], [ 'post_ids' => [ 12 ], 'dry_run' => true ] );
		$encoded = is_wp_error( $result )
			? json_encode( [ $result->get_error_code(), $result->get_error_message(), $result->get_error_data() ] )
			: json_encode( $result );

		assert_true( false === strpos( $encoded, 'SECRET-DRAFT-TEXT' ), $name . ': no stored content reaches the caller — diagnostics carry post id, block name and index only.' );
	}

	echo "no-content-excerpts contract OK\n";

	// =========================================================================================
	// §10.8 — the entitlement seam denies BOTH ways. The shipped set declares none (§4: Plus
	// gating happens inside the write, as stripping), so the mechanism is proven against a
	// descriptor that does declare one.
	// =========================================================================================

	foreach ( novablocks_agent_blocks_ability_definitions() as $name => $definition ) {
		assert_true( ! isset( $definition['entitlement'] ), $name . ': ships with NO entitlement — §4 pins the gated set as deliberately empty.' );
	}

	$gated                = novablocks_agent_blocks_ability_definitions()['pixelgrade/list-blocks'];
	$gated['entitlement'] = 'plus';

	// Denied: absent from the registry entirely, not present-and-refusing.
	nba_reset_registry();
	novablocks_agent_blocks_register_abilities( [ 'pixelgrade/gated-probe' => $gated ] );
	assert_same( [], array_keys( $GLOBALS['nba_abilities'] ), 'entitlement seam: a denied entitlement keeps the ability OUT of the registry.' );

	// Granted at registration time…
	add_filter(
		'pixelgrade/has_entitlement',
		static function ( $has, $key ) {
			return 'plus' === $key ? ! empty( $GLOBALS['nba_entitled'] ) : $has;
		},
		10,
		2
	);
	$GLOBALS['nba_entitled'] = true;

	nba_reset_registry();
	novablocks_agent_blocks_register_abilities( [ 'pixelgrade/gated-probe' => $gated ] );
	assert_same( [ 'pixelgrade/gated-probe' ], array_keys( $GLOBALS['nba_abilities'] ), 'entitlement seam: a granted entitlement registers the ability.' );
	assert_same( true, call_user_func( $GLOBALS['nba_abilities']['pixelgrade/gated-probe']['permission_callback'], [] ), 'entitlement seam: granted + capable → allowed.' );

	// …and revoked afterwards. Registration happens at init while entitlement state can change
	// later (a license activated mid-request, dev mode toggled), so the permission callback
	// re-checks — a registration-time gate alone would be a gate with a hole in it (§4).
	$GLOBALS['nba_entitled'] = false;
	$denied                  = call_user_func( $GLOBALS['nba_abilities']['pixelgrade/gated-probe']['permission_callback'], [] );
	assert_true( true !== $denied, 'entitlement seam: revoking the entitlement after registration denies in the permission callback too.' );
	assert_same( 'permission_denied', $denied->get_error_code(), 'entitlement seam: the denial uses the permission_denied token.' );

	echo "entitlement seam contract OK\n";

	echo "All pixelgrade blocks abilities contract tests OK\n";
}
