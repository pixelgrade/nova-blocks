<?php
/**
 * Contract: the core container spacing lever (lib/core-container-spacing.php, H12a).
 *
 * Pins the three properties the reviewer actually cares about:
 *
 *   1. REGISTRATION — the six container-relevant space-and-sizing attributes are
 *      merged into core/group and core/columns' SERVER registration (so
 *      `wp pixelgrade blocks describe core/group` can name them), read from the
 *      same attributes.json the editor registers, APPENDED so no existing
 *      attribute changes position (comment-JSON key order is byte-identity).
 *      core/column and every other block are untouched.
 *
 *   2. NO-OP — every container whose attributes sit at their defaults, and every
 *      container with no spacing attributes at all (i.e. all content that exists
 *      today), renders byte-identical markup. This is the fixed-point guarantee.
 *
 *   3. EMIT — an authored value produces exactly the `--nb-*` custom properties
 *      the SCSS consumes, unitless, and stands down when an editor save has
 *      already written the property bundle into the stored markup.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$GLOBALS['__novablocks_test_filters'] = [];

function add_filter( string $hook, callable $callback, int $priority = 10, int $accepted_args = 1 ) {
	$GLOBALS['__novablocks_test_filters'][ $hook ][] = $callback;
	return true;
}

function trailingslashit( string $string ): string {
	return rtrim( $string, '/\\' ) . '/';
}

function novablocks_get_plugin_path(): string {
	return dirname( __DIR__, 2 );
}

// The real helper from lib/extras.php, which the plugin loads first. Restated
// here rather than requiring extras.php, which drags in the whole WP surface.
function novablocks_get_attributes_from_json( $path ) {
	$filename = trailingslashit( novablocks_get_plugin_path() ) . $path;

	if ( ! file_exists( $filename ) ) {
		return [];
	}

	return json_decode( file_get_contents( $filename ), true );
}

require_once __DIR__ . '/../../lib/core-container-spacing.php';

function nb_ccs_assert( bool $condition, string $message ): void {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

function nb_ccs_assert_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		throw new RuntimeException(
			$message . ' Expected ' . var_export( $expected, true ) . ', got ' . var_export( $actual, true ) . '.'
		);
	}
}

// -----------------------------------------------------------------------------
// 1. The attribute slice.
// -----------------------------------------------------------------------------

$attributes = novablocks_get_core_container_spacing_attributes();

nb_ccs_assert_same(
	[
		'blockTopSpacing',
		'blockBottomSpacing',
		'emphasisTopSpacing',
		'emphasisBottomSpacing',
		'spacingModifier',
		'spacingMultiplierOverride',
	],
	array_keys( $attributes ),
	'The container slice must be exactly the six attributes with a CSS consumer on a bare container, in this order.'
);

// The defaults must be READ from attributes.json, never restated here — a drift
// between the editor registration and the server registration is the one bug
// this whole file exists to prevent.
$editor_schema = json_decode(
	file_get_contents(
		dirname( __DIR__, 2 ) . '/packages/block-editor/src/filters/with-space-and-sizing/attributes.json'
	),
	true
);

foreach ( $attributes as $name => $schema ) {
	nb_ccs_assert_same(
		$editor_schema[ $name ],
		$schema,
		sprintf( 'Attribute %s must be byte-equal to the editor schema entry.', $name )
	);
}

nb_ccs_assert_same( 1, $attributes['blockTopSpacing']['default'], 'blockTopSpacing default must be 1.' );
nb_ccs_assert_same( 0, $attributes['blockBottomSpacing']['default'], 'blockBottomSpacing default must be 0.' );

// The media half of the bundle must NOT leak onto a container.
foreach ( [ 'mediaContainerHeight', 'thumbnailAspectRatio', 'imageResizing', 'contentPadding', 'contentAreaWidth' ] as $absent ) {
	nb_ccs_assert(
		! array_key_exists( $absent, $attributes ),
		sprintf( 'A bare container has no CSS consumer for %s; registering it would lie to `blocks describe`.', $absent )
	);
}

// -----------------------------------------------------------------------------
// 2. register_block_type_args — scope and ORDER.
// -----------------------------------------------------------------------------

$core_group_args = [
	'attributes' => [
		'align'    => [ 'type' => 'string' ],
		'tagName'  => [ 'type' => 'string', 'default' => 'div' ],
		'layout'   => [ 'type' => 'object' ],
	],
];

$filtered = novablocks_register_core_container_spacing_attributes( $core_group_args, 'core/group' );
$keys     = array_keys( $filtered['attributes'] );

nb_ccs_assert_same(
	[ 'align', 'tagName', 'layout' ],
	array_slice( $keys, 0, 3 ),
	'Existing attributes must keep their exact positions — `serialize()` walks blockType.attributes IN ORDER to build the block comment JSON, so a reorder would turn canonical content into not_canonical.'
);

nb_ccs_assert_same(
	[
		'blockTopSpacing',
		'blockBottomSpacing',
		'emphasisTopSpacing',
		'emphasisBottomSpacing',
		'spacingModifier',
		'spacingMultiplierOverride',
	],
	array_slice( $keys, 3 ),
	'The spacing attributes must be APPENDED, in slice order.'
);

nb_ccs_assert_same(
	[ 'type' => 'string', 'default' => 'div' ],
	$filtered['attributes']['tagName'],
	'A core attribute must never be reshaped by this filter.'
);

// A same-named core attribute wins outright (defensive: none collide today).
$collision = novablocks_register_core_container_spacing_attributes(
	[ 'attributes' => [ 'blockTopSpacing' => [ 'type' => 'string', 'default' => 'core-wins' ] ] ],
	'core/columns'
);
nb_ccs_assert_same(
	[ 'type' => 'string', 'default' => 'core-wins' ],
	$collision['attributes']['blockTopSpacing'],
	'On a name collision core must win; a collision is a signal to rename ours, not to reshape the block.'
);

// Scope.
nb_ccs_assert_same(
	[ 'core/group', 'core/columns' ],
	novablocks_get_core_container_spacing_blocks(),
	'core/column is deliberately excluded (it receives no spaceAndSizing support in the editor either); core/separator already owns its spacing through a full render-time re-render.'
);

foreach ( [ 'core/column', 'core/paragraph', 'novablocks/hero', 'core/separator' ] as $untouched ) {
	$args = [ 'attributes' => [ 'anchor' => [ 'type' => 'string' ] ] ];
	nb_ccs_assert_same(
		$args,
		novablocks_register_core_container_spacing_attributes( $args, $untouched ),
		sprintf( '%s must be returned untouched.', $untouched )
	);
}

// A block registered with no attributes key at all must not fatal.
$bare = novablocks_register_core_container_spacing_attributes( [], 'core/group' );
nb_ccs_assert_same( 6, count( $bare['attributes'] ), 'A block registered without an attributes key still receives the slice.' );

// -----------------------------------------------------------------------------
// 3. The property builder — the no-op guarantee.
// -----------------------------------------------------------------------------

nb_ccs_assert_same( [], novablocks_get_core_container_spacing_props( [] ), 'No attributes at all → no properties. This is every group on every site today.' );

nb_ccs_assert_same(
	[],
	novablocks_get_core_container_spacing_props( [ 'layout' => [ 'type' => 'constrained' ], 'align' => 'full' ] ),
	'Unrelated attributes → no properties.'
);

nb_ccs_assert_same(
	[],
	novablocks_get_core_container_spacing_props( [
		'blockTopSpacing'           => 1,
		'blockBottomSpacing'        => 0,
		'emphasisTopSpacing'        => 0,
		'emphasisBottomSpacing'     => 0,
		'spacingModifier'           => 1,
		'spacingMultiplierOverride' => 1,
	] ),
	'Every attribute AT its default → no properties. A default-valued authoring pass must be a byte-identical no-op.'
);

nb_ccs_assert_same(
	[],
	novablocks_get_core_container_spacing_props( [ 'blockTopSpacing' => '1' ] ),
	'A numeric string at the default is still the default.'
);

nb_ccs_assert_same(
	[],
	novablocks_get_core_container_spacing_props( [ 'blockTopSpacing' => 'wide' ] ),
	'A non-numeric value is ignored rather than serialized into a broken calc().'
);

// -----------------------------------------------------------------------------
// 4. The property builder — the emit.
// -----------------------------------------------------------------------------

nb_ccs_assert_same(
	[ '--nb-block-top-spacing' => '2' ],
	novablocks_get_core_container_spacing_props( [ 'blockTopSpacing' => 2 ] ),
	'One authored step emits exactly one property, unitless (a unit here would make the calc() a length*length and invalidate it).'
);

nb_ccs_assert_same(
	[ '--nb-block-top-spacing' => '0' ],
	novablocks_get_core_container_spacing_props( [ 'blockTopSpacing' => 0 ] ),
	'Zero is an AUTHORED value on this attribute (default is 1) and must be emitted.'
);

nb_ccs_assert_same(
	[
		'--nb-block-top-spacing'    => '4',
		'--nb-emphasis-top-spacing' => '3',
	],
	novablocks_get_core_container_spacing_props( [
		'blockTopSpacing'       => 4,
		'blockBottomSpacing'    => 0,
		'emphasisTopSpacing'    => 3,
		'emphasisBottomSpacing' => 0,
	] ),
	'Only the attributes that differ from their default are emitted; the container mixin supplies the rest.'
);

nb_ccs_assert_same(
	[ '--nb-spacing-multiplier-override' => '2.5' ],
	novablocks_get_core_container_spacing_props( [ 'spacingMultiplierOverride' => 2.5 ] ),
	'A half-step multiplier keeps its fraction and loses nothing to formatting.'
);

nb_ccs_assert_same(
	[ '--nb-spacing-modifier' => '0.5' ],
	novablocks_get_core_container_spacing_props( [ 'spacingModifier' => 0.5 ] ),
	'spacingModifier both carries the value AND is the selector hook ([style*="--nb-spacing-modifier"]) that starts the child cascade.'
);

// Overlap: the z-index twin of getSpacingCSSProps().
nb_ccs_assert_same(
	[
		'--nb-block-top-spacing' => '-2',
		'--nb-block-zindex'      => '2',
	],
	novablocks_get_core_container_spacing_props( [ 'blockTopSpacing' => -2 ] ),
	'A negative step pulls the block over its neighbour and must win the stacking order.'
);

nb_ccs_assert_same(
	[ '--nb-block-top-spacing' => '3' ],
	novablocks_get_core_container_spacing_props( [ 'blockTopSpacing' => 3 ] ),
	'A positive step never emits --nb-block-zindex — an increase in spacing must stay a one-property change.'
);

// -----------------------------------------------------------------------------
// 5. Number formatting.
// -----------------------------------------------------------------------------

nb_ccs_assert_same( '2', novablocks_format_core_container_spacing_number( 2.0 ), 'Whole numbers serialize without a decimal tail.' );
nb_ccs_assert_same( '-3', novablocks_format_core_container_spacing_number( -3.0 ), 'Negative whole numbers keep their sign and lose their tail.' );
nb_ccs_assert_same( '0.5', novablocks_format_core_container_spacing_number( 0.5 ), 'Half steps survive.' );
nb_ccs_assert_same( '1.5', novablocks_format_core_container_spacing_number( 1.5 ), 'One-and-a-half steps survive.' );

echo "core container spacing contract ok\n";
