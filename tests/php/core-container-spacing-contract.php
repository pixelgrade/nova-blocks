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

// Minimal stand-in for WP's HTML API, matching the stub the site-tagline /
// site-title / post-terms render contracts already use in this directory.
class WP_HTML_Tag_Processor {
	private string $html;
	private array $attributes = [];
	private string $opening_tag = '';

	public function __construct( string $html ) {
		$this->html = $html;
	}

	public function next_tag(): bool {
		if ( ! preg_match( '/<([a-z][a-z0-9-]*)([^>]*)>/i', $this->html, $match ) ) {
			return false;
		}

		$this->opening_tag = $match[0];
		preg_match_all( '/([a-z0-9:-]+)=("|\')(.*?)\2/i', $match[2], $attributes, PREG_SET_ORDER );
		foreach ( $attributes as $attribute ) {
			$this->attributes[ strtolower( $attribute[1] ) ] = $attribute[3];
		}

		return true;
	}

	public function get_attribute( string $name ) {
		return $this->attributes[ strtolower( $name ) ] ?? null;
	}

	public function set_attribute( string $name, string $value ): void {
		$this->attributes[ strtolower( $name ) ] = $value;
	}

	public function get_updated_html(): string {
		preg_match( '/<([a-z][a-z0-9-]*)/i', $this->opening_tag, $match );
		$tag_name       = $match[1] ?? 'div';
		$attribute_html = '';
		foreach ( $this->attributes as $name => $value ) {
			$attribute_html .= sprintf( ' %s="%s"', $name, htmlspecialchars( $value, ENT_QUOTES, 'UTF-8' ) );
		}

		return preg_replace( '/<([a-z][a-z0-9-]*)([^>]*)>/i', '<' . $tag_name . $attribute_html . '>', $this->html, 1 );
	}
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
// 2. describe-level augmentation, and the registry left ALONE.
//
// The registry is deliberately untouched. Merging these six into
// WP_Block_Type_Registry moves them from positions 29-39 to 4-9 in core/group's
// attribute list (server-registered attributes seed the block type BEFORE core's
// supports-derived ones and before the JS filters append Nova's), and
// `serialize()` walks that list in order to build the block comment. Measured on
// a lab site, the shipped canonical form
//   <!-- wp:group {"align":"full","layout":{…},"blockTopSpacing":2,…} -->
// became `not_canonical` / `not_a_fixed_point` with a registry merge in place.
// describe ksort()s its output, so it has no order to disturb.
// -----------------------------------------------------------------------------

nb_ccs_assert(
	! function_exists( 'novablocks_register_core_container_spacing_attributes' ),
	'There must be no register_block_type_args registration for these attributes — it reorders the harness attribute list and flips the comment JSON key order of already-canonical editor-saved content.'
);

nb_ccs_assert(
	false === strpos( file_get_contents( dirname( __DIR__, 2 ) . '/lib/core-container-spacing.php' ), "add_filter( 'register_block_type_args'" ),
	'lib/core-container-spacing.php must not add a register_block_type_args filter.'
);

foreach ( [ 'core/group', 'core/columns' ] as $container ) {
	nb_ccs_assert_same(
		[
			'blockTopSpacing',
			'blockBottomSpacing',
			'emphasisTopSpacing',
			'emphasisBottomSpacing',
			'spacingModifier',
			'spacingMultiplierOverride',
		],
		array_keys( novablocks_get_core_container_spacing_describe_attributes( $container ) ),
		sprintf( '%s must expose the six attributes to describe.', $container )
	);
}

foreach ( [ 'core/column', 'core/paragraph', 'core/separator', 'novablocks/hero' ] as $other ) {
	nb_ccs_assert_same(
		[],
		novablocks_get_core_container_spacing_describe_attributes( $other ),
		sprintf( '%s must get nothing from this augmentation.', $other )
	);
}

nb_ccs_assert_same(
	[ 'core/group', 'core/columns' ],
	novablocks_get_core_container_spacing_blocks(),
	'core/column is deliberately excluded (it receives no spaceAndSizing support in the editor either); core/separator already owns its spacing through a full render-time re-render.'
);

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

// -----------------------------------------------------------------------------
// 6. The render filter — scope, no-op, and the WRAPPER-ONLY stand-down.
// -----------------------------------------------------------------------------

$plain_group = '<div class="wp-block-group is-layout-constrained"><p>Body</p></div>';

// Untouched blocks.
nb_ccs_assert_same(
	$plain_group,
	novablocks_render_core_container_spacing( $plain_group, [ 'blockName' => 'core/column', 'attrs' => [ 'blockTopSpacing' => 2 ] ] ),
	'A block outside the container list is never rewritten, whatever it carries.'
);

// No-op: this is every group on every site today.
nb_ccs_assert_same(
	$plain_group,
	novablocks_render_core_container_spacing( $plain_group, [ 'blockName' => 'core/group', 'attrs' => [] ] ),
	'A container with no spacing attributes renders byte-identical markup — no style attribute is introduced.'
);

nb_ccs_assert_same(
	$plain_group,
	novablocks_render_core_container_spacing( $plain_group, [ 'blockName' => 'core/group', 'attrs' => [ 'blockTopSpacing' => 1 ] ] ),
	'A container at the registered default renders byte-identical markup.'
);

// The emit.
$rendered = novablocks_render_core_container_spacing( $plain_group, [ 'blockName' => 'core/group', 'attrs' => [ 'blockTopSpacing' => 2 ] ] );
nb_ccs_assert(
	false !== strpos( $rendered, '--nb-block-top-spacing:2;' ),
	'An authored step must reach the wrapper style attribute. Got: ' . $rendered
);

// An existing wrapper style is preserved, not replaced.
$with_style = '<div class="wp-block-group" style="color:red"><p>Body</p></div>';
$rendered   = novablocks_render_core_container_spacing( $with_style, [ 'blockName' => 'core/group', 'attrs' => [ 'blockTopSpacing' => 2 ] ] );
nb_ccs_assert(
	false !== strpos( $rendered, 'color:red;' ) && false !== strpos( $rendered, '--nb-block-top-spacing:2;' ),
	'An existing inline style must be appended to, never clobbered. Got: ' . $rendered
);

// Stand-down: the WRAPPER already carries the editor-saved property bundle.
$editor_saved = '<div class="wp-block-group" style="--nb-emphasis-top-spacing:0;--nb-block-top-spacing:1;--nb-block-bottom-spacing:0"><p>Body</p></div>';
nb_ccs_assert_same(
	$editor_saved,
	novablocks_render_core_container_spacing( $editor_saved, [ 'blockName' => 'core/group', 'attrs' => [ 'blockTopSpacing' => 2 ] ] ),
	'When the wrapper already carries --nb-block-top-spacing an editor save is authoritative: never doubled, never overridden by a possibly stale comment attribute.'
);

// THE REGRESSION THIS SECTION EXISTS FOR: a headlessly-authored OUTER container
// whose rendered content happens to contain an INNER block carrying the property.
// Scanning $block_content instead of the wrapper's own style attribute made the
// outer container silently render none of its own spacing.
$nested = '<div class="wp-block-group is-layout-constrained">'
	. '<div class="wp-block-group" style="--nb-emphasis-top-spacing:0;--nb-block-top-spacing:3"><p>Inner, editor-saved</p></div>'
	. '</div>';

$rendered = novablocks_render_core_container_spacing( $nested, [ 'blockName' => 'core/group', 'attrs' => [ 'blockTopSpacing' => 2 ] ] );

nb_ccs_assert(
	false !== strpos( $rendered, '--nb-block-top-spacing:2;' ),
	'The OUTER wrapper must receive its own authored step even though an inner block already carries the property. Got: ' . $rendered
);

nb_ccs_assert(
	false !== strpos( $rendered, '<div class="wp-block-group" style="--nb-emphasis-top-spacing:0;--nb-block-top-spacing:3">' ),
	'The inner block must be returned byte-identical — this filter only ever rewrites the first tag. Got: ' . $rendered
);

nb_ccs_assert_same(
	2,
	substr_count( $rendered, '--nb-block-top-spacing' ),
	'Exactly two occurrences: the outer wrapper\'s new one and the inner block\'s untouched one.'
);

// The same trap via a Nova child rather than a Group child.
$nova_child = '<div class="wp-block-columns">'
	. '<div class="wp-block-separator" style="--nb-block-top-spacing: 3; --nb-block-bottom-spacing: 0; "></div>'
	. '</div>';
$rendered   = novablocks_render_core_container_spacing( $nova_child, [ 'blockName' => 'core/columns', 'attrs' => [ 'blockTopSpacing' => 2 ] ] );
nb_ccs_assert(
	false !== strpos( $rendered, '--nb-block-top-spacing:2;' ),
	'A Columns wrapping a Nova block that emits the property must still receive its own step. Got: ' . $rendered
);

// Degenerate inputs must not fatal.
foreach ( [ '', '   ', 'no tags at all' ] as $degenerate ) {
	nb_ccs_assert_same(
		$degenerate,
		novablocks_render_core_container_spacing( $degenerate, [ 'blockName' => 'core/group', 'attrs' => [ 'blockTopSpacing' => 2 ] ] ),
		'Empty or tagless content is returned untouched.'
	);
}

echo "core container spacing contract ok\n";
