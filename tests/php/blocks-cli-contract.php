<?php
/**
 * Pins the `wp pixelgrade blocks` CLI subtree: the §2 envelope shape, the §2 exit-code mapping,
 * the §3.0 permission-first rule, `list`'s namespace filter + --attributes/--supports payload, and
 * `patterns`'s source filter + cache/refresh + tier-filtering + cloud-fetch-failure behavior, per
 * docs/plans/agentic-stack/CONTRACT.md (v0.3.5) §1.4.
 *
 * Standalone: run with `php tests/php/blocks-cli-contract.php` (no WordPress, no real WP-CLI
 * needed — WP_CLI and the WP function surface the CLI code touches are stubbed below), matching
 * the `tests/php/*-contract.php` convention (see cloud-block-patterns-contract.php) picked up by
 * `bin/run-tests.sh` / `npm test`.
 *
 * @package NovaBlocks
 */

namespace WP_CLI\Utils {
	function get_flag_value( $assoc_args, $flag, $default = null ) {
		return array_key_exists( $flag, $assoc_args ) ? $assoc_args[ $flag ] : $default;
	}

	// Deliberately NOT defining format_items() here: the fallback tab-separated path in
	// novablocks_cli_render_rows() is exercised by every table-mode assertion below, proving
	// that fallback stays correct too.
}

namespace {

	define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );
	defined( 'HOUR_IN_SECONDS' ) || define( 'HOUR_IN_SECONDS', 3600 );
	defined( 'MINUTE_IN_SECONDS' ) || define( 'MINUTE_IN_SECONDS', 60 );

	// -----------------------------------------------------------------------------------
	// WP_CLI stub: captures halt()/success()/warning()/log()/print_value() calls so the
	// tests can assert on the envelope and exit code without a real WP-CLI runtime.
	// -----------------------------------------------------------------------------------

	class Novablocks_Cli_Test_Halt extends \Exception {
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
		public static $added_commands = [];

		public static function reset() {
			self::$log            = [];
			self::$printed_value  = null;
			self::$printed_format = null;
			self::$added_commands = [];
		}

		public static function add_command( $name, $callable ) {
			self::$added_commands[ $name ] = $callable;
		}

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
			throw new Novablocks_Cli_Test_Halt( 1 );
		}

		public static function print_value( $value, $assoc_args = [] ) {
			self::$printed_value  = $value;
			self::$printed_format = $assoc_args['format'] ?? null;
		}

		public static function halt( $exit_code ) {
			throw new Novablocks_Cli_Test_Halt( $exit_code );
		}
	}

	// -----------------------------------------------------------------------------------
	// Minimal WordPress function surface the CLI code (and lib/cloud-block-patterns.php,
	// which it requires) calls.
	// -----------------------------------------------------------------------------------

	$GLOBALS['nbc_denied_caps']  = [];
	$GLOBALS['nbc_current_user'] = 1;
	$GLOBALS['nbc_options']      = [];
	$GLOBALS['nbc_filters']      = [];
	$GLOBALS['nbc_remote_response']  = null;
	$GLOBALS['nbc_remote_requests']  = [];
	$GLOBALS['nbc_is_admin']     = false;
	$GLOBALS['nbc_doing_ajax']   = false;

	function get_current_user_id() {
		return $GLOBALS['nbc_current_user'];
	}

	function current_user_can( $capability ) {
		return empty( $GLOBALS['nbc_denied_caps'][ $capability ] );
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
		$GLOBALS['nbc_filters'][ $hook ][ $priority ][] = [ 'callback' => $callback, 'accepted_args' => $accepted_args ];
		return true;
	}

	function apply_filters( $hook, $value, ...$args ) {
		if ( empty( $GLOBALS['nbc_filters'][ $hook ] ) ) {
			return $value;
		}
		ksort( $GLOBALS['nbc_filters'][ $hook ] );
		foreach ( $GLOBALS['nbc_filters'][ $hook ] as $callbacks ) {
			foreach ( $callbacks as $cb ) {
				$call_args = array_slice( array_merge( [ $value ], $args ), 0, $cb['accepted_args'] );
				$value     = call_user_func_array( $cb['callback'], $call_args );
			}
		}
		return $value;
	}

	function add_action() {
		return true;
	}

	function get_option( $option, $default = false ) {
		return array_key_exists( $option, $GLOBALS['nbc_options'] ) ? $GLOBALS['nbc_options'][ $option ] : $default;
	}

	function update_option( $option, $value, $autoload = true ) {
		$GLOBALS['nbc_options'][ $option ]                = $value;
		$GLOBALS['nbc_options'][ $option . '__autoload' ] = $autoload;
		return true;
	}

	function is_admin() {
		return $GLOBALS['nbc_is_admin'];
	}

	function wp_doing_ajax() {
		return $GLOBALS['nbc_doing_ajax'];
	}

	function home_url( $path = '' ) {
		return 'https://example.test/' . ltrim( $path, '/' );
	}

	function get_template_directory() {
		return '/tmp/themes/anima-lt';
	}

	function get_template() {
		return 'anima-lt';
	}

	function get_stylesheet() {
		return 'anima-lt';
	}

	class Novablocks_Cli_Test_Theme {
		public function get( $header ) {
			return [ 'Name' => 'Anima LT', 'ThemeURI' => '', 'Version' => '1.0.0', 'TextDomain' => 'anima-lt' ][ $header ] ?? '';
		}
	}

	function wp_get_theme() {
		return new Novablocks_Cli_Test_Theme();
	}

	function is_ssl() {
		return true;
	}

	function get_bloginfo( $show = '' ) {
		return 'version' === $show ? '7.0-test' : 'Test Site';
	}

	function trailingslashit( $value ) {
		return rtrim( $value, '/' ) . '/';
	}

	function wp_remote_request( $url, $args ) {
		$GLOBALS['nbc_remote_requests'][] = [ 'url' => $url, 'args' => $args ];
		return $GLOBALS['nbc_remote_response'];
	}

	function is_wp_error( $value ) {
		return $value instanceof \Exception;
	}

	function wp_remote_retrieve_response_code( $response ) {
		return is_array( $response ) ? (int) ( $response['response']['code'] ?? 0 ) : 0;
	}

	function wp_remote_retrieve_body( $response ) {
		return is_array( $response ) ? (string) ( $response['body'] ?? '' ) : '';
	}

	function wp_parse_args( $args, array $defaults = [] ) {
		return array_merge( $defaults, is_array( $args ) ? $args : [] );
	}

	function wp_parse_list( $input ) {
		if ( is_array( $input ) ) {
			return $input;
		}
		return array_filter( array_map( 'trim', explode( ',', (string) $input ) ) );
	}

	function sanitize_title( $value ) {
		return strtolower( preg_replace( '/[^a-z0-9]+/', '-', trim( strip_tags( (string) $value ) ) ) );
	}

	function sanitize_key( $value ) {
		return strtolower( preg_replace( '/[^a-z0-9_\-]/', '', (string) $value ) );
	}

	function sanitize_title_with_dashes( $value ) {
		return sanitize_title( $value );
	}

	function wp_unslash( $value ) {
		return $value;
	}

	function wp_kses( $value, $allowed_html = [] ) {
		return strip_tags( (string) $value, '<strong><em><span><div><p><a><br><!-- -->' );
	}

	function wp_kses_allowed_html() {
		return [];
	}

	function esc_html( $value ) {
		return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' );
	}

	function absint( $value ) {
		return abs( (int) $value );
	}

	// -----------------------------------------------------------------------------------
	// WP_Block_Type / WP_Block_Type_Registry stubs for `blocks list`.
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

		public function get_all_registered() {
			return $this->registered;
		}

		public function reset() {
			$this->registered = [];
		}
	}

	// -----------------------------------------------------------------------------------
	// WP_Block_Patterns_Registry stub for `blocks patterns --source=local`.
	// -----------------------------------------------------------------------------------

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
			$properties['name']      = $name;
			$this->registered[ $name ] = $properties;
		}

		public function get_all_registered() {
			return $this->registered;
		}

		public function reset() {
			$this->registered = [];
		}
	}

	// -----------------------------------------------------------------------------------
	// Load the code under test.
	// -----------------------------------------------------------------------------------

	require_once __DIR__ . '/../../lib/cloud-block-patterns.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-envelope.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-list-command.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-patterns-command.php';

	// -----------------------------------------------------------------------------------
	// Test harness helpers.
	// -----------------------------------------------------------------------------------

	function nbc_reset() {
		WP_CLI::reset();
		$GLOBALS['nbc_denied_caps']     = [];
		$GLOBALS['nbc_current_user']    = 1;
		$GLOBALS['nbc_options']         = [];
		$GLOBALS['nbc_filters']         = [];
		$GLOBALS['nbc_remote_response'] = null;
		$GLOBALS['nbc_remote_requests'] = [];
		$GLOBALS['nbc_is_admin']        = false;
		$GLOBALS['nbc_doing_ajax']      = false;
		WP_Block_Type_Registry::get_instance()->reset();
		WP_Block_Patterns_Registry::get_instance()->reset();
	}

	/**
	 * Run a CLI command callback, catching the halt() it always ends in.
	 *
	 * @return int The exit code passed to WP_CLI::halt().
	 */
	function nbc_run( $callable, $args, $assoc_args ) {
		try {
			call_user_func( $callable, $args, $assoc_args );
		} catch ( Novablocks_Cli_Test_Halt $e ) {
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

	function nbc_register_block( $name, array $props = [] ) {
		WP_Block_Type_Registry::get_instance()->register(
			$name,
			new WP_Block_Type(
				array_merge(
					[
						'name'            => $name,
						'title'           => ucfirst( str_replace( [ 'novablocks/', 'core/' ], '', $name ) ),
						'api_version'     => 2,
						'render_callback' => null,
						'render_template' => null,
						'attributes'      => [],
						'supports'        => [],
					],
					$props
				)
			)
		);
	}

	function nbc_cloud_response( array $items ) {
		return [
			'response' => [ 'code' => 200 ],
			'body'     => wp_json_encode( [ 'code' => 'success', 'data' => [ 'items' => $items ] ] ),
		];
	}

	// =========================================================================================
	// §3.0 — permission-first, both commands.
	// =========================================================================================

	nbc_reset();
	$GLOBALS['nbc_current_user'] = 0;
	$exit = nbc_run( 'novablocks_cli_blocks_list', [], [ 'format' => 'json' ] );
	assert_same( 3, $exit, 'list: no resolved user must exit 3.' );
	assert_same( 'permission_denied', WP_CLI::$printed_value['code'], 'list: no-user code.' );
	assert_true( false !== strpos( WP_CLI::$printed_value['summary'], 'edit_posts' ), 'list: summary names the capability.' );
	assert_true( false !== strpos( WP_CLI::$printed_value['summary'], '--user' ), 'list: summary suggests --user.' );

	nbc_reset();
	$GLOBALS['nbc_denied_caps']['edit_posts'] = true;
	$exit = nbc_run( 'novablocks_cli_blocks_list', [], [ 'format' => 'json' ] );
	assert_same( 3, $exit, 'list: a resolved user lacking edit_posts must exit 3.' );

	nbc_reset();
	$GLOBALS['nbc_current_user'] = 0;
	$exit = nbc_run( 'novablocks_cli_blocks_patterns', [], [ 'format' => 'json', 'source' => 'local' ] );
	assert_same( 3, $exit, 'patterns: no resolved user must exit 3 (even for --source=local, no network attempted).' );
	assert_same( [], $GLOBALS['nbc_remote_requests'], 'patterns: a denied permission check must never touch the network.' );

	echo "permission-first contract OK\n";

	// =========================================================================================
	// `blocks list` — namespace filter, payload shape, --attributes/--supports.
	// =========================================================================================

	nbc_reset();
	nbc_register_block( 'novablocks/headline', [ 'attributes' => [ 'level' => [ 'type' => 'number', 'default' => 2 ] ], 'supports' => [ 'anchor' => true ], 'render_callback' => 'novablocks_render_headline_block' ] );
	nbc_register_block( 'novablocks/hero', [ 'attributes' => [ 'title' => [ 'type' => 'string' ], 'subtitle' => [ 'type' => 'string' ] ] ] );
	nbc_register_block( 'core/paragraph', [ 'attributes' => [ 'content' => [ 'type' => 'string' ] ] ] );
	nbc_register_block( 'core/heading' );
	nbc_register_block( 'some-other-plugin/thing' );

	$exit = nbc_run( 'novablocks_cli_blocks_list', [], [ 'format' => 'json' ] );
	assert_same( 0, $exit, 'list: default namespace succeeds, exit 0.' );
	assert_same( true, WP_CLI::$printed_value['ok'], 'list: default namespace ok:true.' );
	assert_same( 'ok', WP_CLI::$printed_value['code'], 'list: default namespace code.' );
	assert_same( 'novablocks', WP_CLI::$printed_value['data']['namespace'], 'list: default namespace is "novablocks".' );
	assert_same( 2, WP_CLI::$printed_value['data']['count'], 'list: default namespace only counts novablocks/* blocks.' );
	$names = array_column( WP_CLI::$printed_value['data']['blocks'], 'name' );
	sort( $names );
	assert_same( [ 'novablocks/headline', 'novablocks/hero' ], $names, 'list: default namespace block set.' );
	assert_true( ! isset( WP_CLI::$printed_value['data']['blocks'][0]['attributes'] ), 'list: attributes omitted by default.' );
	assert_true( ! isset( WP_CLI::$printed_value['data']['blocks'][0]['supports'] ), 'list: supports omitted by default.' );

	$headline = null;
	foreach ( WP_CLI::$printed_value['data']['blocks'] as $block ) {
		if ( 'novablocks/headline' === $block['name'] ) {
			$headline = $block;
		}
	}
	assert_true( null !== $headline, 'list: headline block present.' );
	assert_same( 1, $headline['attribute_count'], 'list: attribute_count reflects the real schema even when --attributes is omitted.' );
	assert_same( true, $headline['has_render_callback'], 'list: has_render_callback true when a render_callback is set.' );

	$hero = null;
	foreach ( WP_CLI::$printed_value['data']['blocks'] as $block ) {
		if ( 'novablocks/hero' === $block['name'] ) {
			$hero = $block;
		}
	}
	assert_same( false, $hero['has_render_callback'], 'list: has_render_callback false with no render_callback/render_template.' );

	nbc_reset();
	nbc_register_block( 'novablocks/headline', [ 'attributes' => [ 'level' => [ 'type' => 'number', 'default' => 2 ] ], 'supports' => [ 'anchor' => true ] ] );
	nbc_register_block( 'core/paragraph' );
	$exit = nbc_run( 'novablocks_cli_blocks_list', [], [ 'namespace' => 'core', 'format' => 'json' ] );
	assert_same( 0, $exit, 'list: --namespace=core succeeds.' );
	assert_same( 1, WP_CLI::$printed_value['data']['count'], 'list: --namespace=core only counts core/* blocks.' );
	assert_same( 'core/paragraph', WP_CLI::$printed_value['data']['blocks'][0]['name'], 'list: --namespace=core block set.' );

	$exit = nbc_run( 'novablocks_cli_blocks_list', [], [ 'namespace' => 'all', 'format' => 'json' ] );
	assert_same( 2, WP_CLI::$printed_value['data']['count'], 'list: --namespace=all counts every registered block.' );

	$exit = nbc_run( 'novablocks_cli_blocks_list', [], [ 'namespace' => 'all', 'attributes' => true, 'supports' => true, 'format' => 'json' ] );
	$headline = null;
	foreach ( WP_CLI::$printed_value['data']['blocks'] as $block ) {
		if ( 'novablocks/headline' === $block['name'] ) {
			$headline = $block;
		}
	}
	assert_same( [ 'level' => [ 'type' => 'number', 'default' => 2 ] ], $headline['attributes'], 'list: --attributes returns the full attribute schema.' );
	assert_same( [ 'anchor' => true ], $headline['supports'], 'list: --supports returns the full supports config.' );

	nbc_reset();
	nbc_register_block( 'novablocks/headline' );
	$exit = nbc_run( 'novablocks_cli_blocks_list', [], [ 'namespace' => 'bogus', 'format' => 'json' ] );
	assert_same( 1, $exit, 'list: an unknown --namespace value must exit 1.' );
	assert_same( 'invalid_params', WP_CLI::$printed_value['code'], 'list: unknown --namespace code.' );

	echo "blocks list contract OK\n";

	// =========================================================================================
	// `blocks patterns` — source filter, local registry, cloud fetch + cache + refresh + tier
	// filtering, cloud-fetch-failure retryable exit 1.
	// =========================================================================================

	nbc_reset();
	WP_Block_Patterns_Registry::get_instance()->register( 'core/query-standard-posts', [ 'title' => 'Standard', 'categories' => [ 'query' ] ] );
	$exit = nbc_run( 'novablocks_cli_blocks_patterns', [], [ 'source' => 'local', 'format' => 'json' ] );
	assert_same( 0, $exit, 'patterns: --source=local succeeds.' );
	assert_same( [], $GLOBALS['nbc_remote_requests'], 'patterns: --source=local never touches the network.' );
	assert_same( 1, WP_CLI::$printed_value['data']['count'], 'patterns: --source=local count.' );
	assert_same( 'local', WP_CLI::$printed_value['data']['patterns'][0]['source'], 'patterns: local record source tag.' );
	assert_same( null, WP_CLI::$printed_value['data']['patterns'][0]['tier'], 'patterns: local records carry no tier.' );

	nbc_reset();
	$GLOBALS['nbc_remote_response'] = nbc_cloud_response(
		[
			'pixelgrade/free-hero' => [
				'name'       => 'pixelgrade/free-hero',
				'properties' => [ 'title' => 'Free Hero', 'content' => '<!-- wp:paragraph --><p>x</p><!-- /wp:paragraph -->' ],
				'categories' => [ [ 'slug' => 'heroes', 'name' => 'Heroes' ] ],
			],
			'pixelgrade/pro-hero'  => [
				'name'       => 'pixelgrade/pro-hero',
				'tier'       => 'pro',
				'properties' => [ 'title' => 'Pro Hero', 'content' => '<!-- wp:paragraph --><p>y</p><!-- /wp:paragraph -->' ],
			],
		]
	);
	$exit = nbc_run( 'novablocks_cli_blocks_patterns', [], [ 'source' => 'cloud', 'format' => 'json' ] );
	assert_same( 0, $exit, 'patterns: --source=cloud with a healthy response succeeds.' );
	assert_same( 1, count( $GLOBALS['nbc_remote_requests'] ), 'patterns: a cold cache triggers exactly one fetch.' );
	assert_same( 1, WP_CLI::$printed_value['data']['count'], 'patterns: tier filtering drops the pro pattern by default.' );
	assert_same( 'pixelgrade/free-hero', WP_CLI::$printed_value['data']['patterns'][0]['name'], 'patterns: the free pattern is the one that survives.' );
	assert_same( 'cloud', WP_CLI::$printed_value['data']['patterns'][0]['source'], 'patterns: cloud record source tag.' );
	assert_same( 'free', WP_CLI::$printed_value['data']['patterns'][0]['tier'], 'patterns: cloud record tier.' );
	assert_same( [ 'heroes' ], WP_CLI::$printed_value['data']['patterns'][0]['categories'], 'patterns: cloud record categories.' );
	assert_true( isset( $GLOBALS['nbc_options']['novablocks_cloud_block_patterns'] ), 'patterns: a successful cloud fetch warms the real site cache.' );

	// Second call within the 6h window must NOT refetch (cache respected without --refresh).
	$before_requests = count( $GLOBALS['nbc_remote_requests'] );
	$exit             = nbc_run( 'novablocks_cli_blocks_patterns', [], [ 'source' => 'cloud', 'format' => 'json' ] );
	assert_same( 0, $exit, 'patterns: a warm-cache second call still succeeds.' );
	assert_same( $before_requests, count( $GLOBALS['nbc_remote_requests'] ), 'patterns: a fresh cache must not trigger a second cloud fetch.' );

	// --refresh forces a new fetch even though the cache is still fresh.
	$exit = nbc_run( 'novablocks_cli_blocks_patterns', [], [ 'source' => 'cloud', 'refresh' => true, 'format' => 'json' ] );
	assert_same( 0, $exit, 'patterns: --refresh succeeds.' );
	assert_same( $before_requests + 1, count( $GLOBALS['nbc_remote_requests'] ), 'patterns: --refresh bypasses a still-fresh cache and fetches again.' );

	// Trusted-tier integration widens what --source=cloud returns.
	nbc_reset();
	add_filter(
		'novablocks/cloud_block_patterns_allowed_tiers',
		function ( array $tiers ) {
			$tiers[] = 'pro';
			return $tiers;
		}
	);
	$GLOBALS['nbc_remote_response'] = nbc_cloud_response(
		[
			'pixelgrade/pro-hero' => [
				'name'       => 'pixelgrade/pro-hero',
				'tier'       => 'pro',
				'properties' => [ 'title' => 'Pro Hero', 'content' => '<!-- wp:paragraph --><p>y</p><!-- /wp:paragraph -->' ],
			],
		]
	);
	$exit = nbc_run( 'novablocks_cli_blocks_patterns', [], [ 'source' => 'cloud', 'format' => 'json' ] );
	assert_same( 1, WP_CLI::$printed_value['data']['count'], 'patterns: the pro pattern registers once the pro tier is allowed.' );
	assert_same( 'pro', WP_CLI::$printed_value['data']['patterns'][0]['tier'], 'patterns: reported tier for the widened case.' );

	// Cloud fetch failure -> exit 1, retryable:true, dedicated code.
	nbc_reset();
	$GLOBALS['nbc_remote_response'] = new \Exception( 'unreachable' );
	$exit                            = nbc_run( 'novablocks_cli_blocks_patterns', [], [ 'source' => 'cloud', 'format' => 'json' ] );
	assert_same( 1, $exit, 'patterns: a cloud fetch failure must exit 1.' );
	assert_same( false, WP_CLI::$printed_value['ok'], 'patterns: cloud fetch failure ok:false.' );
	assert_same( 'cloud_fetch_failed', WP_CLI::$printed_value['code'], 'patterns: cloud fetch failure code.' );
	assert_same( true, WP_CLI::$printed_value['retryable'], 'patterns: cloud fetch failure retryable:true.' );

	// --source=all must fail the whole command when the cloud leg fails, per the shared
	// 0/1/3 exit vocabulary (no partial-success exit 2 in this read-only subtree).
	nbc_reset();
	$GLOBALS['nbc_remote_response'] = new \Exception( 'unreachable' );
	$exit                            = nbc_run( 'novablocks_cli_blocks_patterns', [], [ 'source' => 'all', 'format' => 'json' ] );
	assert_same( 1, $exit, 'patterns: --source=all still exits 1 on a cloud fetch failure.' );

	// --source=all de-duplicates a pattern already registered locally (e.g. from a warm-cache
	// init@30 pass) with the richer, tier-carrying cloud record — never lists it twice.
	nbc_reset();
	WP_Block_Patterns_Registry::get_instance()->register( 'pixelgrade/free-hero', [ 'title' => 'Free Hero (registered)' ] );
	$GLOBALS['nbc_remote_response'] = nbc_cloud_response(
		[
			'pixelgrade/free-hero' => [
				'name'       => 'pixelgrade/free-hero',
				'properties' => [ 'title' => 'Free Hero', 'content' => '<!-- wp:paragraph --><p>x</p><!-- /wp:paragraph -->' ],
			],
		]
	);
	$exit = nbc_run( 'novablocks_cli_blocks_patterns', [], [ 'source' => 'all', 'format' => 'json' ] );
	assert_same( 0, $exit, 'patterns: --source=all succeeds.' );
	assert_same( 1, WP_CLI::$printed_value['data']['count'], 'patterns: --source=all reports each pattern exactly once.' );
	assert_same( 'cloud', WP_CLI::$printed_value['data']['patterns'][0]['source'], 'patterns: --source=all prefers the richer cloud record on a name collision.' );

	// Regression: a WARM cloud cache means the site's own init@30 hook has already registered
	// cloud-origin patterns into WP_Block_Patterns_Registry on this same request. A bare
	// --source=local (no --source=cloud/all in the SAME invocation) must still exclude them by
	// name via the cache, not just when the cloud branch happens to run in the same call —
	// otherwise a warm cache makes --source=local silently start reporting cloud patterns as
	// local (no tier, double-counted against --source=cloud).
	nbc_reset();
	WP_Block_Patterns_Registry::get_instance()->register( 'pixelgrade/warm-cache-hero', [ 'title' => 'Warm Cache Hero (already registered by init@30)' ] );
	WP_Block_Patterns_Registry::get_instance()->register( 'anima/genuinely-local', [ 'title' => 'Genuinely Local' ] );
	$GLOBALS['nbc_options']['novablocks_cloud_block_patterns'] = [
		'items' => [
			'pixelgrade/warm-cache-hero' => [
				'name'       => 'pixelgrade/warm-cache-hero',
				'properties' => [ 'title' => 'Warm Cache Hero', 'content' => '<!-- wp:paragraph --><p>x</p><!-- /wp:paragraph -->' ],
			],
		],
	];
	$GLOBALS['nbc_options']['novablocks_cloud_block_patterns_timestamp'] = time() + HOUR_IN_SECONDS; // fresh
	$exit = nbc_run( 'novablocks_cli_blocks_patterns', [], [ 'source' => 'local', 'format' => 'json' ] );
	assert_same( 0, $exit, 'patterns: --source=local with a warm cloud cache still succeeds.' );
	assert_same( [], $GLOBALS['nbc_remote_requests'], 'patterns: --source=local must never touch the network even with a warm cloud cache present.' );
	assert_same( 1, WP_CLI::$printed_value['data']['count'], 'patterns: --source=local excludes the cloud-origin registry entry by name, keeping only the genuinely local one.' );
	assert_same( 'anima/genuinely-local', WP_CLI::$printed_value['data']['patterns'][0]['name'], 'patterns: the surviving --source=local record is the genuinely local one.' );

	nbc_reset();
	$exit = nbc_run( 'novablocks_cli_blocks_patterns', [], [ 'source' => 'bogus', 'format' => 'json' ] );
	assert_same( 1, $exit, 'patterns: an unknown --source value must exit 1.' );
	assert_same( 'invalid_params', WP_CLI::$printed_value['code'], 'patterns: unknown --source code.' );

	echo "blocks patterns contract OK\n";

	// =========================================================================================
	// Table mode: default format, no TTY detection, exit code identical (contract §1 preamble).
	// =========================================================================================

	nbc_reset();
	nbc_register_block( 'novablocks/headline' );
	$exit = nbc_run( 'novablocks_cli_blocks_list', [], [] ); // no --format passed at all.
	assert_same( 0, $exit, 'list: default format (no --format passed) is table, still exits 0.' );
	$has_success = false;
	foreach ( WP_CLI::$log as $entry ) {
		if ( 'success' === $entry[0] ) {
			$has_success = true;
		}
	}
	assert_true( $has_success, 'list: table mode prints a WP_CLI::success() line.' );
	assert_true( null === WP_CLI::$printed_value, 'list: table mode never calls print_value() (STDOUT must stay envelope-only under json/yaml, and table mode uses its own renderer).' );

	echo "table-mode contract OK\n";

	echo "All wp pixelgrade blocks CLI contract tests OK\n";
}
