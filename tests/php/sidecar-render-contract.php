<?php
/**
 * Contract for the Sidecar + Sidecar Area render.
 *
 * Layer 1 of the break system (design doc "Break system"): a rail that does
 * not exist is known at render time, so PHP emits `nb-sidecar--no-left-rail` /
 * `nb-sidecar--no-right-rail` on the wrapper and CSS flips that side's break
 * vars with zero runtime JS.
 *
 * Task 4.1 (three-area block model): a `sidecar-area` gains explicit
 * `areaName` values `sidebar-left` | `sidebar-right` alongside the legacy
 * `content` | `sidebar`. The legacy `sidebar` name maps to a side at RUNTIME
 * from the parent Sidecar's `sidebarPosition` (block context). The Sidecar
 * accepts up to three areas (optional left rail, content, optional right
 * rail), and its rail-absence classes are derived from the ACTUAL areas, not
 * from `sidebarPosition` alone (so a three-area sidecar emits NEITHER absence
 * class). No saved-content migration ever.
 *
 * Run: "/Users/georgeolaru/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php" tests/php/sidecar-render-contract.php
 */

define( 'ABSPATH', __DIR__ );

class WP_Block {
	public $parsed_block = [ 'innerBlocks' => [] ];
	public $context = [];

	public function __construct( array $parsed_block = [ 'innerBlocks' => [] ], array $context = [] ) {
		$this->parsed_block = $parsed_block;
		$this->context      = $context;
	}
}

function novablocks_merge_attributes_from_array( $paths ) {
	$first = is_array( $paths ) ? ( isset( $paths[0] ) ? $paths[0] : '' ) : '';

	// The sidecar-area attribute set is just areaName.
	if ( false !== strpos( (string) $first, 'sidecar-area' ) ) {
		return [
			'areaName' => [ 'type' => 'string', 'default' => 'content' ],
		];
	}

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

// sidecar-area/init.php owns the area-side resolution used by both renders,
// so it must load first (mirrors production: all block init.php are required
// at init:20, before any render).
require dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/sidecar-area/init.php';
require dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/sidecar/init.php';

$failures = [];

function contract_assert( $label, $classes, array $expected_present, array $expected_absent ) {
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

function first_class_attr( $output ) {
	if ( ! preg_match( '/class="([^"]*)"/', $output, $matches ) ) {
		return null;
	}

	return preg_split( '/\s+/', trim( $matches[1] ) );
}

/**
 * Renders a Sidecar wrapper and returns its class list.
 *
 * @param array         $attributes  Sidecar attributes.
 * @param array<string> $area_names  Ordered areaName values for the direct
 *                                   sidecar-area children (drives rail
 *                                   presence). Null = no inner areas at all.
 */
function sidecar_contract_classes( array $attributes, $area_names = null ) {
	$inner = [];
	if ( is_array( $area_names ) ) {
		foreach ( $area_names as $area_name ) {
			$inner[] = [
				'blockName' => 'novablocks/sidecar-area',
				'attrs'     => [ 'areaName' => $area_name ],
			];
		}
	}

	$block  = new WP_Block( [ 'innerBlocks' => $inner ] );
	$output = novablocks_render_sidecar_block( $attributes, '<div class="inner"></div>', $block );
	$classes = first_class_attr( $output );

	if ( null === $classes ) {
		fwrite( STDERR, "Sidecar render contract failed: no class attribute in wrapper output.\n" );
		exit( 1 );
	}

	return $classes;
}

/**
 * Renders a Sidecar Area and returns its class list.
 *
 * @param string $area_name        The areaName attribute.
 * @param string $sidebar_position Parent Sidecar sidebarPosition (block
 *                                 context), for legacy `sidebar` resolution.
 */
function sidecar_area_contract_classes( $area_name, $sidebar_position = '' ) {
	$context = '' === $sidebar_position ? [] : [ 'novablocks/sidebarPosition' => $sidebar_position ];
	$block   = new WP_Block( [ 'innerBlocks' => [] ], $context );
	$output  = novablocks_render_sidecar_area_block( [ 'areaName' => $area_name ], '<div class="inner"></div>', $block );
	$classes = first_class_attr( $output );

	if ( null === $classes ) {
		fwrite( STDERR, "Sidecar Area render contract failed: no class attribute in output.\n" );
		exit( 1 );
	}

	return $classes;
}

/* -------------------------------------------------------------------------- *
 * A. Sidecar Area render — explicit + legacy area-side resolution.
 * -------------------------------------------------------------------------- */

contract_assert(
	'area content',
	sidecar_area_contract_classes( 'content' ),
	[ 'nb-sidecar-area', 'nb-sidecar-area--content', 'nb-content-layout-grid' ],
	[ 'nb-sidecar-area--sidebar', 'nb-sidecar-area--sidebar-left', 'nb-sidecar-area--sidebar-right' ]
);

// Legacy 'sidebar' + parent position RIGHT -> resolved right rail, keeping the
// legacy generic class alongside for CSS back-compat.
contract_assert(
	'legacy sidebar + position right',
	sidecar_area_contract_classes( 'sidebar', 'right' ),
	[ 'nb-sidecar-area', 'nb-sidecar-area--sidebar', 'nb-sidecar-area--sidebar-right' ],
	[ 'nb-sidecar-area--sidebar-left', 'nb-sidecar-area--content' ]
);

// Legacy 'sidebar' + parent position LEFT -> resolved left rail.
contract_assert(
	'legacy sidebar + position left',
	sidecar_area_contract_classes( 'sidebar', 'left' ),
	[ 'nb-sidecar-area', 'nb-sidecar-area--sidebar', 'nb-sidecar-area--sidebar-left' ],
	[ 'nb-sidecar-area--sidebar-right', 'nb-sidecar-area--content' ]
);

// Explicit per-side names resolve directly, regardless of parent position.
contract_assert(
	'explicit sidebar-left',
	sidecar_area_contract_classes( 'sidebar-left', 'right' ),
	[ 'nb-sidecar-area', 'nb-sidecar-area--sidebar', 'nb-sidecar-area--sidebar-left' ],
	[ 'nb-sidecar-area--sidebar-right' ]
);

contract_assert(
	'explicit sidebar-right',
	sidecar_area_contract_classes( 'sidebar-right', 'left' ),
	[ 'nb-sidecar-area', 'nb-sidecar-area--sidebar', 'nb-sidecar-area--sidebar-right' ],
	[ 'nb-sidecar-area--sidebar-left' ]
);

/* -------------------------------------------------------------------------- *
 * B. Sidecar wrapper — rail-absence classes for all area combinations.
 * -------------------------------------------------------------------------- */

// sidebarPosition none, content-only -> both rails absent (also the default).
contract_assert(
	'none / content-only',
	sidecar_contract_classes( [ 'sidebarPosition' => 'none' ], [ 'content' ] ),
	[ 'nb-sidecar', 'nb-sidecar--sidebar-none', 'nb-sidecar--no-left-rail', 'nb-sidecar--no-right-rail' ],
	[]
);

// Missing attributes + no inner areas -> legacy position fallback: both absent.
contract_assert(
	'default attributes (no areas)',
	sidecar_contract_classes( [], null ),
	[ 'nb-sidecar--no-left-rail', 'nb-sidecar--no-right-rail' ],
	[]
);

// Legacy two-area RIGHT: content + legacy sidebar -> left rail absent only.
contract_assert(
	'legacy right (content + sidebar)',
	sidecar_contract_classes( [ 'sidebarPosition' => 'right' ], [ 'content', 'sidebar' ] ),
	[ 'nb-sidecar--sidebar-right', 'nb-sidecar--no-left-rail' ],
	[ 'nb-sidecar--no-right-rail' ]
);

// Legacy two-area LEFT: content + legacy sidebar -> right rail absent only.
contract_assert(
	'legacy left (content + sidebar)',
	sidecar_contract_classes( [ 'sidebarPosition' => 'left' ], [ 'content', 'sidebar' ] ),
	[ 'nb-sidecar--sidebar-left', 'nb-sidecar--no-right-rail' ],
	[ 'nb-sidecar--no-left-rail' ]
);

// Explicit LEFT-only rail: sidebar-left + content -> right rail absent only.
contract_assert(
	'explicit left-only (sidebar-left + content)',
	sidecar_contract_classes( [ 'sidebarPosition' => 'none' ], [ 'sidebar-left', 'content' ] ),
	[ 'nb-sidecar--no-right-rail' ],
	[ 'nb-sidecar--no-left-rail' ]
);

// Explicit RIGHT-only rail: content + sidebar-right -> left rail absent only.
contract_assert(
	'explicit right-only (content + sidebar-right)',
	sidecar_contract_classes( [ 'sidebarPosition' => 'none' ], [ 'content', 'sidebar-right' ] ),
	[ 'nb-sidecar--no-left-rail' ],
	[ 'nb-sidecar--no-right-rail' ]
);

// THREE-AREA: sidebar-left + content + sidebar-right -> NEITHER absence class.
contract_assert(
	'three-area (both rails present)',
	sidecar_contract_classes( [ 'sidebarPosition' => 'none' ], [ 'sidebar-left', 'content', 'sidebar-right' ] ),
	[ 'nb-sidecar' ],
	[ 'nb-sidecar--no-left-rail', 'nb-sidecar--no-right-rail' ]
);

/* -------------------------------------------------------------------------- *
 * C. Integration — a full three-area Sidecar renders both rails + content.
 * -------------------------------------------------------------------------- */

$three_area_inner =
	novablocks_render_sidecar_area_block( [ 'areaName' => 'sidebar-left' ], '<p>L</p>', new WP_Block() )
	. novablocks_render_sidecar_area_block( [ 'areaName' => 'content' ], '<p>C</p>', new WP_Block() )
	. novablocks_render_sidecar_area_block( [ 'areaName' => 'sidebar-right' ], '<p>R</p>', new WP_Block() );

$three_area_block  = new WP_Block( [ 'innerBlocks' => [
	[ 'blockName' => 'novablocks/sidecar-area', 'attrs' => [ 'areaName' => 'sidebar-left' ] ],
	[ 'blockName' => 'novablocks/sidecar-area', 'attrs' => [ 'areaName' => 'content' ] ],
	[ 'blockName' => 'novablocks/sidecar-area', 'attrs' => [ 'areaName' => 'sidebar-right' ] ],
] ] );
$three_area_output = novablocks_render_sidecar_block( [ 'sidebarPosition' => 'none' ], $three_area_inner, $three_area_block );

foreach ( [ 'nb-sidecar-area--content', 'nb-sidecar-area--sidebar-left', 'nb-sidecar-area--sidebar-right' ] as $needle ) {
	if ( false === strpos( $three_area_output, $needle ) ) {
		$failures[] = "three-area integration: rendered output is missing \"$needle\"";
	}
}
if ( false !== strpos( $three_area_output, 'nb-sidecar--no-left-rail' ) || false !== strpos( $three_area_output, 'nb-sidecar--no-right-rail' ) ) {
	$failures[] = 'three-area integration: wrapper must not carry either rail-absence class';
}

if ( $failures ) {
	foreach ( $failures as $failure ) {
		fwrite( STDERR, "Sidecar render contract failed: $failure\n" );
	}
	exit( 1 );
}

echo "sidecar render contract ok\n";
