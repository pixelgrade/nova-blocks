<?php
/**
 * Contract for the Sidecar wrapper render: server-known rail-absence classes.
 *
 * The break system's cheapest layer (design doc "Break system", layer 1):
 * a rail that does not exist is known at render time, so PHP must emit
 * `nb-sidecar--no-left-rail` / `nb-sidecar--no-right-rail` and let CSS flip
 * that side's break vars with zero runtime JS.
 *
 * Run: "/Users/georgeolaru/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php" tests/php/sidecar-render-contract.php
 */

define( 'ABSPATH', __DIR__ );

class WP_Block {}

function novablocks_merge_attributes_from_array() {
	return [
		'sidebarPosition'  => [ 'type' => 'string', 'default' => 'none' ],
		'sidebarWidth'     => [ 'type' => 'string', 'default' => 'small' ],
		'lastItemIsSticky' => [ 'type' => 'boolean', 'default' => false ],
		'contentFontSize'  => [ 'type' => 'string', 'default' => 'normal' ],
		'sidebarFontSize'  => [ 'type' => 'string', 'default' => 'normal' ],
		'tagName'          => [ 'type' => 'string', 'default' => '' ],
		'anchor'           => [ 'type' => 'string', 'default' => '' ],
	];
}

function novablocks_get_attributes_with_defaults( $attributes, $config ) {
	foreach ( $config as $name => $definition ) {
		if ( ! array_key_exists( $name, $attributes ) ) {
			$attributes[ $name ] = $definition['default'];
		}
	}

	return $attributes;
}

function novablocks_maybe_enqueue_block_frontend_scripts() {}
function novablocks_get_space_and_sizing_css() { return []; }
function novablocks_get_color_signal_css() { return []; }
function novablocks_get_color_signal_classes() { return []; }
function novablocks_camel_case_to_kebab_case( $value ) { return $value; }
function novablocks_get_data_attributes() { return []; }
function esc_attr( $value ) { return htmlspecialchars( $value, ENT_QUOTES, 'UTF-8' ); }

require dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/sidecar/init.php';

/**
 * Renders a sidecar and returns the wrapper class list.
 */
function sidecar_contract_classes( array $attributes ): array {
	$output = novablocks_render_sidecar_block( $attributes, '<div class="inner"></div>', new WP_Block() );

	if ( ! preg_match( '/class="([^"]*)"/', $output, $matches ) ) {
		fwrite( STDERR, "Sidecar render contract failed: no class attribute in output.\n" );
		exit( 1 );
	}

	return preg_split( '/\s+/', trim( $matches[1] ) );
}

$failures = [];

function sidecar_contract_assert( $label, $classes, array $expected_present, array $expected_absent ) {
	global $failures;
	foreach ( $expected_present as $class ) {
		if ( ! in_array( $class, $classes, true ) ) {
			$failures[] = "$label: expected class \"$class\" missing (got: " . implode( ' ', $classes ) . ')';
		}
	}
	foreach ( $expected_absent as $class ) {
		if ( in_array( $class, $classes, true ) ) {
			$failures[] = "$label: class \"$class\" must NOT be present (got: " . implode( ' ', $classes ) . ')';
		}
	}
}

// sidebarPosition none (also the default): both rails are absent.
sidecar_contract_assert(
	'sidebarPosition:none',
	sidecar_contract_classes( [ 'sidebarPosition' => 'none' ] ),
	[ 'nb-sidecar', 'nb-sidecar--sidebar-none', 'nb-sidecar--no-left-rail', 'nb-sidecar--no-right-rail' ],
	[]
);

sidecar_contract_assert(
	'default attributes (missing sidebarPosition)',
	sidecar_contract_classes( [] ),
	[ 'nb-sidecar--no-left-rail', 'nb-sidecar--no-right-rail' ],
	[]
);

// sidebarPosition right: the LEFT rail is absent, the right one exists.
sidecar_contract_assert(
	'sidebarPosition:right',
	sidecar_contract_classes( [ 'sidebarPosition' => 'right' ] ),
	[ 'nb-sidecar--sidebar-right', 'nb-sidecar--no-left-rail' ],
	[ 'nb-sidecar--no-right-rail' ]
);

// sidebarPosition left: the RIGHT rail is absent, the left one exists.
sidecar_contract_assert(
	'sidebarPosition:left',
	sidecar_contract_classes( [ 'sidebarPosition' => 'left' ] ),
	[ 'nb-sidecar--sidebar-left', 'nb-sidecar--no-right-rail' ],
	[ 'nb-sidecar--no-left-rail' ]
);

if ( $failures ) {
	foreach ( $failures as $failure ) {
		fwrite( STDERR, "Sidecar render contract failed: $failure\n" );
	}
	exit( 1 );
}

echo "sidecar render contract ok\n";
