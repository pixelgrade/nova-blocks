<?php
/**
 * Contract: Sidecar divider rule between content and rail (GitHub #658),
 * built on the #668 rule model (primary / secondary rule roles).
 *
 * - PHP and JS emit the same classes and custom properties for the same
 *   attributes (shared fixture: sidecar/rule-cases.json, also read by
 *   rule-style.test.js).
 * - Off (no ruleRole) renders the wrapper byte-identically: no class, no
 *   custom property, no data attribute.
 * - The rule attributes never reach the data-* attributes, on or off.
 */

define( 'ABSPATH', __DIR__ );

$root = dirname( __DIR__, 2 );

class WP_Block {
	public $parsed_block = [ 'innerBlocks' => [] ];
	public $context = [];

	public function __construct( array $parsed_block = [ 'innerBlocks' => [] ], array $context = [] ) {
		$this->parsed_block = $parsed_block;
		$this->context      = $context;
	}
}

// The real sidecar attribute registry, so the render sees the registered
// rule attributes (and their lack of defaults) exactly as production does.
function novablocks_merge_attributes_from_array( $paths ) {
	$root = dirname( __DIR__, 2 );
	$first = is_array( $paths ) ? ( $paths[0] ?? '' ) : '';
	if ( false !== strpos( (string) $first, 'sidecar-area' ) ) {
		return [ 'areaName' => [ 'type' => 'string', 'default' => 'content' ] ];
	}

	return json_decode( file_get_contents( $root . '/packages/block-library/src/blocks/sidecar/attributes.json' ), true );
}

// Production behaviour: missing attributes without a default become ''.
function novablocks_get_attributes_with_defaults( $attributes, $config ) {
	foreach ( $config as $name => $definition ) {
		if ( ! isset( $attributes[ $name ] ) ) {
			$attributes[ $name ] = $definition['default'] ?? '';
		}
	}

	return $attributes;
}

function novablocks_maybe_enqueue_block_frontend_scripts() {}
function novablocks_get_space_and_sizing_css() { return []; }
function novablocks_get_color_signal_css() { return []; }
function novablocks_get_color_signal_classes() { return []; }
function novablocks_camel_case_to_kebab_case( $value ) {
	return strtolower( preg_replace( '/([a-z])([A-Z])/', '$1-$2', $value ) );
}

// Records what the render asks for, then mirrors the production output shape
// (blacklist removal, '' still emitted) so the byte-identity check is real.
$GLOBALS['nb_rule_data_calls'] = [];
function novablocks_get_data_attributes( array $keys, array $attributes, array $blacklist = [] ) {
	$GLOBALS['nb_rule_data_calls'][] = [ 'keys' => $keys, 'blacklist' => $blacklist ];
	$out = [];
	foreach ( $keys as $key ) {
		if ( in_array( $key, array_merge( [ 'align' ], $blacklist ), true ) ) {
			continue;
		}
		$camel = lcfirst( str_replace( ' ', '', ucwords( str_replace( '-', ' ', $key ) ) ) );
		if ( ! isset( $attributes[ $camel ] ) || false === $attributes[ $camel ] ) {
			continue;
		}
		$value = is_array( $attributes[ $camel ] ) ? json_encode( $attributes[ $camel ] ) : $attributes[ $camel ];
		$out[] = 'data-' . $key . "='" . esc_attr( (string) $value ) . "'";
	}
	return $out;
}
function esc_attr( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' ); }

function nb_rule_expect( $condition, $message ) {
	if ( ! $condition ) {
		fwrite( STDERR, "sidecar-rule-contract FAILED: $message\n" );
		exit( 1 );
	}
}

require_once $root . '/lib/rule-styles.php';
require $root . '/packages/block-library/src/blocks/sidecar-area/init.php';
require $root . '/packages/block-library/src/blocks/sidecar/init.php';

nb_rule_expect(
	function_exists( 'novablocks_get_sidecar_rule_classes' ) && function_exists( 'novablocks_get_sidecar_rule_style_properties' ),
	'The Sidecar must expose its rule classes and style properties to the render.'
);

// 1. Shared parity fixture.
$cases = json_decode( file_get_contents( $root . '/packages/block-library/src/blocks/sidecar/rule-cases.json' ), true );
nb_rule_expect( is_array( $cases ) && count( $cases ) >= 10, 'The shared parity fixture must load.' );
foreach ( $cases as $case ) {
	$classes = novablocks_get_sidecar_rule_classes( $case['attributes'] );
	$style   = novablocks_get_sidecar_rule_style_properties( $case['attributes'] );
	nb_rule_expect( $case['classes'] === $classes, sprintf( 'classes for "%s": got %s', $case['label'], json_encode( $classes ) ) );
	nb_rule_expect( $case['style'] === $style, sprintf( 'style for "%s": got %s', $case['label'], json_encode( $style ) ) );
}

// 2. Render: Off is byte-identical to a Sidecar that never had the feature.
function nb_rule_render( array $attributes ) {
	$block = new WP_Block( [
		'innerBlocks' => [
			[ 'blockName' => 'novablocks/sidecar-area', 'attrs' => [ 'areaName' => 'content' ] ],
			[ 'blockName' => 'novablocks/sidecar-area', 'attrs' => [ 'areaName' => 'sidebar-right' ] ],
		],
	] );
	return novablocks_render_sidecar_block( $attributes, '<div class="inner"></div>', $block );
}

$base = [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'medium' ];
$off  = nb_rule_render( $base );
// Captured from the render before #658 (origin/main 9b9796fa) with these mocks.
$expected_off = '<div class="nb-sidecar nb-sidecar--sidebar-right nb-sidecar--sidebar-medium nb-content-layout-grid alignfull nb-sidecar--no-left-rail"  '
	. "data-sidebar-position='right' data-sidebar-width='medium' data-tag-name='div' data-anchor='' data-template-lock='' data-content-font-size='normal' data-sidebar-font-size='normal' "
	. 'style="--nb-sidecar-content-font-size-base: var(--nb-font-size-normal); --nb-sidecar-sidebar-font-size-base: var(--nb-font-size-normal)"><div class="inner"></div></div>';
nb_rule_expect( $expected_off === $off, "Off must render the historical wrapper byte for byte. Got:\n$off" );
nb_rule_expect( $off === nb_rule_render( $base + [ 'ruleRole' => '' ] ), 'An empty role must render exactly like Off.' );
nb_rule_expect( $off === nb_rule_render( $base + [ 'ruleWeight' => 3 ] ), 'A weight without a role must render exactly like Off.' );

// 3. Render: On adds exactly the fixture classes and properties.
$on = nb_rule_render( $base + [ 'ruleRole' => 'secondary', 'ruleWeight' => 2 ] );
nb_rule_expect(
	false !== strpos( $on, 'class="nb-sidecar nb-sidecar--sidebar-right nb-sidecar--sidebar-medium nb-content-layout-grid alignfull nb-sidecar--no-left-rail nb-sidecar--has-rule nb-sidecar--rule-secondary"' ),
	"On must append the rule classes. Got:\n$on"
);
nb_rule_expect(
	false !== strpos( $on, '--nb-sidecar-rule-color: var(--nb-rule-secondary-color); --nb-sidecar-rule-weight: 2px' ),
	"On must write the rule properties into the wrapper style. Got:\n$on"
);

// 4. The rule attributes never become data attributes.
nb_rule_expect( false === strpos( $on, 'data-rule' ), "Rule attributes must not leak into data-* attributes. Got:\n$on" );
foreach ( $GLOBALS['nb_rule_data_calls'] as $call ) {
	nb_rule_expect(
		in_array( 'rule-role', $call['blacklist'], true ) && in_array( 'rule-weight', $call['blacklist'], true ),
		'The render must blacklist rule-role and rule-weight from the data attributes.'
	);
}

echo "sidecar-rule-contract: all assertions passed\n";
