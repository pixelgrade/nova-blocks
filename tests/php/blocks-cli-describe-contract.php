<?php
/**
 * Pins `wp pixelgrade blocks describe` (agentic-stack W9): the §2 envelope + §3.0 permission-first
 * rule it shares with the rest of the subtree, plus the two things unique to describe — the
 * schema+vocabulary MERGE (each attribute stamped bundle | curated | schema | none) and the HONESTY
 * rule (an uncurated attribute is vocabulary:null / source:"none", never an invented enum).
 *
 * Standalone: `php tests/php/blocks-cli-describe-contract.php` — WordPress, WP-CLI and the bundle
 * settings function are all stubbed below, matching the `tests/php/*-contract.php` convention picked
 * up by `bin/run-fast-tests.cjs` / `npm test`.
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

	class Novablocks_Describe_Test_Halt extends \Exception {
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
		public static function success( $m ) { self::$log[] = [ 'success', $m ]; }
		public static function warning( $m ) { self::$log[] = [ 'warning', $m ]; }
		public static function log( $m ) { self::$log[] = [ 'log', $m ]; }
		public static function error( $m ) { self::$log[] = [ 'error', $m ]; throw new Novablocks_Describe_Test_Halt( 1 ); }
		public static function print_value( $v, $a = [] ) { self::$printed_value = $v; }
		public static function halt( $c ) { throw new Novablocks_Describe_Test_Halt( $c ); }
	}

	$GLOBALS['nbd_denied_caps']  = [];
	$GLOBALS['nbd_current_user'] = 1;

	function get_current_user_id() { return $GLOBALS['nbd_current_user']; }
	function current_user_can( $cap ) { return empty( $GLOBALS['nbd_denied_caps'][ $cap ] ); }
	function __( $t, $d = 'default' ) { return $t; }
	function _n( $s, $p, $n, $d = 'default' ) { return 1 === (int) $n ? $s : $p; }
	function esc_html__( $t, $d = 'default' ) { return $t; }
	function esc_html( $t ) { return $t; }
	function wp_json_encode( $data, $options = 0, $depth = 512 ) { return json_encode( $data, $options, $depth ); }
	function add_filter() { return true; }
	function add_action() { return true; }
	function apply_filters( $hook, $value, ...$args ) { return $value; }

	// ---- WP_Block_Type / registry stubs. -------------------------------------------------

	class WP_Block_Type {
		public $name;
		public $title;
		public $attributes;
		public $supports;
		public $render_callback;
		public function __construct( array $p ) { foreach ( $p as $k => $v ) { $this->$k = $v; } }
	}

	class WP_Block_Type_Registry {
		private static $instance;
		private $registered = [];
		public static function get_instance() { return self::$instance ?? ( self::$instance = new self() ); }
		public function register( $name, WP_Block_Type $t ) { $this->registered[ $name ] = $t; }
		public function is_registered( $name ) { return isset( $this->registered[ $name ] ); }
		public function get_registered( $name ) { return $this->registered[ $name ] ?? null; }
		public function get_all_registered() { return $this->registered; }
		public function reset() { $this->registered = []; }
	}

	// ---- Bundle settings stub: only what the bundle-vocabulary map + data extras read. ----

	function novablocks_get_block_editor_settings(): array {
		return [
			'advancedGalleryPresetOptions' => [
				[ 'label' => 'The Cloud Atlas', 'value' => 'the-cloud-atlas', 'preset' => [ 'arrangement' => 'grid', 'sizeContrast' => 0 ] ],
				[ 'label' => 'Editorial Pair', 'value' => 'editorial-pair', 'preset' => [ 'arrangement' => 'chain' ] ],
			],
			'motionPresetOptions'          => [
				[ 'label' => 'Standard Dynamic', 'value' => 'standard-dynamic' ],
				[ 'label' => 'Custom', 'value' => 'custom' ],
			],
			'scrollingEffectOptions'       => [
				[ 'label' => 'Static', 'value' => 'static' ],
				[ 'label' => 'Parallax', 'value' => 'parallax' ],
			],
			'collectionLayoutRecipes'      => [],
			'minimumHeightOptions'         => [ [ 'label' => 'Full', 'value' => 100 ] ],
			'contentPaddingOptions'        => [ [ 'label' => 'Small', 'value' => 'small' ] ],
			'contentWidthOptions'          => [ [ 'label' => 'Full', 'value' => 'full' ] ],
			'blobPresetOptions'            => [ [ 'label' => 'Rectangle', 'value' => 'rectangle' ] ],
			'modules'                      => [ 'spaceAndSizing' => [ 'presetOptions' => [] ] ],
		];
	}

	require_once __DIR__ . '/../../lib/cli/blocks-cli-envelope.php';
	require_once __DIR__ . '/../../lib/cli/blocks-cli-describe-command.php';

	// ---- Helpers. ------------------------------------------------------------------------

	function nbd_reset() {
		WP_CLI::reset();
		$GLOBALS['nbd_denied_caps']  = [];
		$GLOBALS['nbd_current_user'] = 1;
		WP_Block_Type_Registry::get_instance()->reset();
	}

	function nbd_run( $callable, $args, $assoc_args ) {
		try {
			call_user_func( $callable, $args, $assoc_args );
		} catch ( Novablocks_Describe_Test_Halt $e ) {
			return $e->exit_code;
		}
		throw new \RuntimeException( 'Command did not halt.' );
	}

	function nbd_register( $name, array $attributes = [], $title = '', array $supports = [], $render_callback = null ) {
		WP_Block_Type_Registry::get_instance()->register(
			$name,
			new WP_Block_Type( [ 'name' => $name, 'title' => $title, 'attributes' => $attributes, 'supports' => $supports, 'render_callback' => $render_callback ] )
		);
	}

	function assert_same( $expected, $actual, $message ) {
		if ( $expected !== $actual ) {
			fwrite( STDERR, $message . PHP_EOL );
			fwrite( STDERR, 'Expected: ' . var_export( $expected, true ) . PHP_EOL );
			fwrite( STDERR, 'Actual:   ' . var_export( $actual, true ) . PHP_EOL );
			exit( 1 );
		}
	}

	function assert_true( $c, $m ) {
		if ( ! $c ) { fwrite( STDERR, $m . PHP_EOL ); exit( 1 ); }
	}

	// A hero-ish attribute set: the cross-cutting shared attrs + a bundle-governed one + a
	// registered enum + an uncurated one.
	function nbd_hero_attributes(): array {
		return [
			'colorSignal'   => [ 'type' => 'number', 'default' => 0 ],
			'emphasisArea'  => [ 'type' => 'number', 'default' => 100 ],
			'arrangement'   => [ 'type' => 'string', 'default' => 'grid' ],
			'stylePreset'   => [ 'type' => 'string', 'default' => 'the-cloud-atlas' ],
			'templateLock'  => [ 'type' => 'string', 'default' => false, 'enum' => [ 'all', 'insert', false ] ],
			'someWildThing' => [ 'type' => 'string', 'default' => 'x' ],
		];
	}

	// =========================================================================================
	// §3.0 — permission-first.
	// =========================================================================================

	nbd_reset();
	$GLOBALS['nbd_current_user'] = 0;
	nbd_register( 'novablocks/hero', nbd_hero_attributes() );
	$exit = nbd_run( 'novablocks_cli_blocks_describe', [ 'novablocks/hero' ], [ 'format' => 'json' ] );
	assert_same( 3, $exit, 'describe: no resolved user must exit 3.' );
	assert_same( 'permission_denied', WP_CLI::$printed_value['code'], 'describe: no-user code.' );
	assert_true( false !== strpos( WP_CLI::$printed_value['summary'], 'edit_posts' ), 'describe: summary names the capability.' );

	nbd_reset();
	$GLOBALS['nbd_denied_caps']['edit_posts'] = true;
	nbd_register( 'novablocks/hero', nbd_hero_attributes() );
	$exit = nbd_run( 'novablocks_cli_blocks_describe', [ 'novablocks/hero' ], [ 'format' => 'json' ] );
	assert_same( 3, $exit, 'describe: a user lacking edit_posts must exit 3.' );

	echo "permission-first contract OK\n";

	// =========================================================================================
	// The merge + honesty rule.
	// =========================================================================================

	nbd_reset();
	nbd_register( 'novablocks/hero', nbd_hero_attributes(), 'Hero' );
	$exit = nbd_run( 'novablocks_cli_blocks_describe', [ 'novablocks/hero' ], [ 'format' => 'json' ] );
	assert_same( 0, $exit, 'describe: a known block exits 0.' );
	$data = WP_CLI::$printed_value['data'];
	assert_same( 'novablocks/hero', $data['block'], 'describe: resolved block name.' );
	assert_same( 6, $data['attribute_count'], 'describe: attribute_count.' );
	$attrs = $data['attributes'];

	// Cross-cutting curated RANGE (emphasisArea 0-100/5).
	assert_same( 'curated', $attrs['emphasisArea']['source'], 'describe: emphasisArea source=curated.' );
	assert_same( [ 'min' => 0, 'max' => 100, 'step' => 5 ], $attrs['emphasisArea']['vocabulary']['range'], 'describe: emphasisArea range.' );

	// Cross-cutting curated ENUM (colorSignal 0-3 with labels).
	assert_same( 'curated', $attrs['colorSignal']['source'], 'describe: colorSignal source=curated.' );
	assert_same( [ 0, 1, 2, 3 ], $attrs['colorSignal']['vocabulary']['enum'], 'describe: colorSignal enum.' );
	assert_true( isset( $attrs['colorSignal']['vocabulary']['labels'] ), 'describe: colorSignal carries labels.' );

	// Cross-cutting curated ENUM (arrangement grid|chain).
	assert_same( [ 'grid', 'chain' ], $attrs['arrangement']['vocabulary']['enum'], 'describe: arrangement enum.' );

	// BUNDLE enum (stylePreset from the settings blob) + style_presets extra.
	assert_same( 'bundle', $attrs['stylePreset']['source'], 'describe: stylePreset source=bundle.' );
	assert_same( [ 'the-cloud-atlas', 'editorial-pair' ], $attrs['stylePreset']['vocabulary']['enum'], 'describe: stylePreset enum comes from the live bundle.' );
	assert_true( isset( $data['style_presets'] ), 'describe: style_presets expansion attached when stylePreset present.' );

	// Registered SCHEMA enum (templateLock) — authoritative, marked source=schema.
	assert_same( 'schema', $attrs['templateLock']['source'], 'describe: a registered enum is source=schema.' );
	assert_same( [ 'all', 'insert', false ], $attrs['templateLock']['vocabulary']['enum'], 'describe: schema enum surfaced verbatim.' );

	// HONESTY: an uncurated attribute is vocabulary:null / source:none — never invented.
	assert_same( 'none', $attrs['someWildThing']['source'], 'describe: an uncurated attribute is source=none.' );
	assert_same( null, $attrs['someWildThing']['vocabulary'], 'describe: an uncurated attribute has vocabulary=null (never a guessed enum).' );
	assert_true( '' !== $attrs['someWildThing']['note'], 'describe: the none case carries a note pointing at canonicalize/validate.' );

	// Coverage tallies add up.
	assert_same( 6, $data['coverage']['bundle'] + $data['coverage']['curated'] + $data['coverage']['none'] + 1, 'describe: coverage buckets (+1 schema attr) sum to the attribute count.' );

	// Unclamped block: colorSignal enum is the full 0-3 with parallel labels.
	assert_same( [ 'None', 'Low', 'Medium', 'High' ], $attrs['colorSignal']['vocabulary']['labels'], 'describe: unclamped colorSignal labels are a list parallel to the 0-3 enum.' );

	echo "merge + honesty contract OK\n";

	// =========================================================================================
	// W11 — save-body classification + harness-generated body templates.
	// =========================================================================================

	nbd_reset();
	nbd_register(
		'novablocks/headline',
		[
			'primary'   => [ 'type' => 'string', 'default' => 'Our Story' ],
			'secondary' => [ 'type' => 'string', 'default' => 'Discover' ],
			'level'     => [ 'type' => 'number', 'default' => 2 ],
			'align'     => [ 'type' => 'string', 'default' => 'none' ],
			'textAlign' => [ 'type' => 'string', 'default' => 'center' ],
		]
	);
	$exit = nbd_run( 'novablocks_cli_blocks_describe', [ 'headline' ], [ 'format' => 'json' ] );
	$data = WP_CLI::$printed_value['data'];
	assert_same( 0, $exit, 'describe: headline save-body probe exits 0.' );
	assert_same( 'static', $data['save_body'], 'describe: headline is a static-save block.' );
	assert_true( is_string( $data['body_template'] ) && '' !== $data['body_template'], 'describe: a static curated block ships a body template.' );
	assert_true( false !== strpos( $data['body_template'], 'c-headline__secondary' ), 'describe: headline skeleton comes from the real save markup.' );
	assert_true( false !== strpos( $data['body_template'], '{{secondary}}' ), 'describe: headline skeleton exposes a fillable secondary slot.' );
	assert_true( false !== strpos( $data['body_template'], '{{primary}}' ), 'describe: headline skeleton exposes a fillable primary slot.' );

	nbd_reset();
	nbd_register( 'novablocks/dynamic-probe', [], 'Dynamic probe', [], static function () {} );
	$exit = nbd_run( 'novablocks_cli_blocks_describe', [ 'novablocks/dynamic-probe' ], [ 'format' => 'json' ] );
	$data = WP_CLI::$printed_value['data'];
	assert_same( 0, $exit, 'describe: dynamic save-body probe exits 0.' );
	assert_same( 'dynamic', $data['save_body'], 'describe: a registered render callback is dynamic.' );
	assert_true( ! array_key_exists( 'body_template', $data ), 'describe: a dynamic block does not advertise a static body template.' );

	echo "save-body contract OK\n";

	// =========================================================================================
	// MEDIUM (W9 review): colorSignal is CLAMPED to the block's minColorSignal/maxColorSignal —
	// describe must never advertise 0/None where the block forbids it.
	// =========================================================================================

	// (a) Server-registered supports.novaBlocks.colorSignal.minColorSignal wins and clamps.
	nbd_reset();
	nbd_register(
		'novablocks/clamped',
		[ 'colorSignal' => [ 'type' => 'number', 'default' => 1 ] ],
		'Clamped',
		[ 'novaBlocks' => [ 'colorSignal' => [ 'minColorSignal' => 1 ] ] ]
	);
	$exit  = nbd_run( 'novablocks_cli_blocks_describe', [ 'novablocks/clamped' ], [ 'format' => 'json' ] );
	$attrs = WP_CLI::$printed_value['data']['attributes'];
	assert_same( [ 1, 2, 3 ], $attrs['colorSignal']['vocabulary']['enum'], 'describe: a minColorSignal:1 block omits 0 from colorSignal (server supports).' );
	assert_same( [ 'Low', 'Medium', 'High' ], $attrs['colorSignal']['vocabulary']['labels'], 'describe: clamped labels drop "None" and stay parallel to the enum.' );

	// (b) The JS-only curated clamp (core/button, core/separator declare minColorSignal:1 in JS,
	// never reaching the server registry) is applied from the curated map.
	nbd_reset();
	nbd_register( 'core/button', [ 'colorSignal' => [ 'type' => 'number', 'default' => 1 ] ] );
	$exit  = nbd_run( 'novablocks_cli_blocks_describe', [ 'core/button' ], [ 'format' => 'json' ] );
	$attrs = WP_CLI::$printed_value['data']['attributes'];
	assert_same( [ 1, 2, 3 ], $attrs['colorSignal']['vocabulary']['enum'], 'describe: core/button colorSignal omits 0 via the curated JS-clamp map (minColorSignal:1 is JS-only).' );

	echo "colorSignal clamp contract OK\n";

	// =========================================================================================
	// JS-drift CANARY (W9 review LOW): one curated JS-sourced row pinned to its expected values,
	// so a future edit to the control component that silently changes the range trips a test. The
	// file:line citations stay the re-audit path; this is the tripwire.
	// =========================================================================================

	nbd_reset();
	nbd_register( 'novablocks/canary', [ 'emphasisArea' => [ 'type' => 'number', 'default' => 100 ] ] );
	$exit  = nbd_run( 'novablocks_cli_blocks_describe', [ 'novablocks/canary' ], [ 'format' => 'json' ] );
	$attrs = WP_CLI::$printed_value['data']['attributes'];
	// emphasis-area-control/index.js:20-22 → min=0 max=100 step=5. If this fails, the JS changed.
	assert_same( [ 'min' => 0, 'max' => 100, 'step' => 5 ], $attrs['emphasisArea']['vocabulary']['range'], 'describe: emphasisArea range canary (emphasis-area-control/index.js:20-22).' );

	echo "js-drift canary contract OK\n";

	// =========================================================================================
	// Short-name resolution + unknown-name suggestions.
	// =========================================================================================

	nbd_reset();
	nbd_register( 'novablocks/hero', nbd_hero_attributes() );
	$exit = nbd_run( 'novablocks_cli_blocks_describe', [ 'hero' ], [ 'format' => 'json' ] );
	assert_same( 0, $exit, 'describe: a short name resolves to novablocks/<name>.' );
	assert_same( 'novablocks/hero', WP_CLI::$printed_value['data']['block'], 'describe: short "hero" → novablocks/hero.' );
	assert_same( 'hero', WP_CLI::$printed_value['data']['requested'], 'describe: the raw request is echoed back.' );

	nbd_reset();
	nbd_register( 'novablocks/hero' );
	nbd_register( 'novablocks/headline' );
	$exit = nbd_run( 'novablocks_cli_blocks_describe', [ 'novablocks/heroo' ], [ 'format' => 'json' ] );
	assert_same( 1, $exit, 'describe: an unknown block exits 1.' );
	assert_same( 'invalid_params', WP_CLI::$printed_value['code'], 'describe: unknown block code.' );
	assert_true( in_array( 'novablocks/hero', WP_CLI::$printed_value['data']['suggestions'], true ), 'describe: suggestions name the closest match.' );

	nbd_reset();
	nbd_register( 'novablocks/hero' );
	$exit = nbd_run( 'novablocks_cli_blocks_describe', [], [ 'format' => 'json' ] );
	assert_same( 1, $exit, 'describe: a missing block argument exits 1.' );
	assert_same( 'invalid_params', WP_CLI::$printed_value['code'], 'describe: missing arg code.' );

	echo "resolution contract OK\n";

	// =========================================================================================
	// A block with the shared spacing/media attrs (a supernova-shaped block) gets them all.
	// =========================================================================================

	nbd_reset();
	nbd_register(
		'novablocks/supernova',
		[
			'contentAreaWidth'   => [ 'type' => 'number', 'default' => 50 ],
			'blockTopSpacing'    => [ 'type' => 'number', 'default' => 1 ],
			'cardLayout'         => [ 'type' => 'string', 'default' => 'vertical' ],
			'layoutStyle'        => [ 'type' => 'string', 'default' => 'classic' ],
			'primaryMetadata'    => [ 'type' => 'string', 'default' => 'category' ],
		]
	);
	$exit  = nbd_run( 'novablocks_cli_blocks_describe', [ 'supernova' ], [ 'format' => 'json' ] );
	$attrs = WP_CLI::$printed_value['data']['attributes'];
	assert_same( [ 'min' => 30, 'max' => 90, 'step' => 5 ], $attrs['contentAreaWidth']['vocabulary']['range'], 'describe: contentAreaWidth range 30-90/5.' );
	assert_same( [ 'min' => -3, 'max' => 3, 'step' => 1 ], $attrs['blockTopSpacing']['vocabulary']['range'], 'describe: blockTopSpacing range -3..3.' );
	assert_same( [ 'vertical', 'stacked', 'horizontal', 'horizontal-reverse' ], $attrs['cardLayout']['vocabulary']['enum'], 'describe: supernova cardLayout enum.' );
	assert_same( 'curated', $attrs['layoutStyle']['source'], 'describe: supernova layoutStyle curated.' );
	assert_true( in_array( 'reading-time', $attrs['primaryMetadata']['vocabulary']['enum'], true ), 'describe: primaryMetadata enum.' );
	assert_true( isset( WP_CLI::$printed_value['data']['recipes'] ), 'describe: recipes attached for a layoutStyle-bearing block.' );

	echo "shared-attrs contract OK\n";

	echo "All wp pixelgrade blocks describe contract tests OK\n";
}
