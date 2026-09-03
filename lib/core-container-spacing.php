<?php
/**
 * Design-system vertical spacing for the core container blocks (H12a).
 *
 * WHAT WAS ACTUALLY MISSING
 * -------------------------
 * `core/group` and `core/columns` have carried the Nova `spaceAndSizing` support
 * bundle in the EDITOR since 2022 (packages/core/src/blocks/core/group/index.js,
 * .../columns/index.js — `supports.novaBlocks.spaceAndSizing`). The JS filters in
 * packages/block-editor/src/filters/with-space-and-sizing/ register the attributes,
 * render the panel, and write the `--nb-*` custom properties into the SAVED markup.
 *
 * Two halves of that lever were nevertheless unreachable, and both bite exactly the
 * same author — an agent writing block markup headlessly:
 *
 *   1. DISCOVERY. The attributes are registered on the JS side only. PHP's
 *      WP_Block_Type_Registry entry for `core/group` therefore lists 16 core
 *      attributes and none of Nova's, so `wp pixelgrade blocks describe core/group`
 *      cannot name `blockTopSpacing` — an agent reading the registry concludes the
 *      block has no spacing lever and reaches for hard px in `style.spacing.*`.
 *
 *   2. EFFECT. The custom properties are emitted by a SAVE-time JS filter
 *      (with-space-and-sizing-save-custom-props.js). Markup that never passed
 *      through an editor save has no `--nb-*` properties at all, and
 *      detect-legacy-spacing.js then flags it `noSpacingMarkup: true`, which makes
 *      the save filter deliberately keep its hands off it forever. So
 *      `<!-- wp:group {"blockTopSpacing":2} -->` authored headlessly is INERT: the
 *      attribute is stored, and nothing on the page ever reads it.
 *
 * This file closes both halves on the server, without touching stored markup:
 *
 *   - `blocks describe` merges in the container-relevant slice of the
 *     space-and-sizing attribute schema, so it names the lever and resolves its
 *     curated vocabulary (the `'*'` bucket in
 *     lib/cli/blocks-describe-vocabulary.php already held the ranges; nothing
 *     there had a block to attach to). Deliberately NOT a
 *     `register_block_type_args` registration — see the long note on
 *     `novablocks_get_core_container_spacing_describe_attributes()` for the
 *     byte-identity reason.
 *
 *   - `render_block` injects the corresponding `--nb-*` custom properties into the
 *     rendered wrapper — and ONLY then. It is a strict no-op when every attribute
 *     sits at its default, and it stands down entirely when the saved markup
 *     already carries `--nb-block-top-spacing` (an editor save wrote the full
 *     property bundle; that markup stays authoritative and is never doubled).
 *
 * WHY RENDER-TIME AND NOT SAVE-TIME
 * ---------------------------------
 * Stored markup is the canonicalization fixed point the harness and
 * `wp pixelgrade blocks validate` referee (`not_canonical`). Emitting at render
 * time changes the HTML the browser gets and NOT one byte of what is stored, so
 * `serialize(parse(content)) === content` is untouched by this file, for content
 * with the attributes and content without them alike.
 *
 * WHICH ATTRIBUTES, AND WHY NOT ALL 19
 * ------------------------------------
 * `with-space-and-sizing/attributes.json` carries 19 attributes because the same
 * bundle serves Nova's card/media blocks. Only the seven below have a CSS consumer
 * on a bare container (packages/base-styles/mixins/_block-spacing.scss,
 * packages/core/src/scss/components/spacing/_style.scss, and the color-signal
 * padding rule in packages/core/src/blocks/core/group/style.scss). Registering the
 * media half on a Group would tell an agent that a Group has a thumbnail aspect
 * ratio, which is not true — the same honesty rule that already hides the dead
 * "Content Area Padding" control on these two blocks (commit 973824c4).
 *
 * SEMANTICS ARE THE HERO'S SEMANTICS
 * ----------------------------------
 * `--nb-block-top-spacing: N` means the same thing here as on a Nova Hero because
 * it feeds the same single expression, applied by the spacing-container mixin to
 * every direct child of every spacing container:
 *
 *   margin-top: calc( var(--nb-block-top-spacing)
 *                   * var(--nb-current-spacing)
 *                   * var(--nb-spacing-multiplier-override, 1) )
 *
 * with `--nb-current-spacing: calc( var(--nb-spacing) * var(--nb-spacing-current-multiplier) )`.
 * A step is therefore fluid with the viewport and scales with Style Manager's
 * spacing level for a Group exactly as it does for a Hero. This file adds an
 * authoring surface to that expression; it does not add a second scale.
 *
 * @since   2.6.7
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The core container blocks that receive the Nova spacing lever.
 *
 * Kept in step with `LEGACY_SPACE_BLOCKS` minus `core/separator`, which already
 * owns its spacing through a full render-time re-render
 * (packages/core/src/blocks/core/separator/init.php) and needs no augmentation.
 *
 * @return string[]
 */
function novablocks_get_core_container_spacing_blocks(): array {
	return [ 'core/group', 'core/columns' ];
}

/**
 * The container-relevant slice of the space-and-sizing attribute schema.
 *
 * Read from the SAME `attributes.json` the editor registers, so a type or default
 * can never drift between the two registrations.
 *
 * @return array<string, array> Attribute schema keyed by attribute name.
 */
function novablocks_get_core_container_spacing_attributes(): array {
	static $attributes = null;

	if ( null !== $attributes ) {
		return $attributes;
	}

	$schema = novablocks_get_attributes_from_json(
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json'
	);

	$container_keys = [
		'blockTopSpacing',
		'blockBottomSpacing',
		'emphasisTopSpacing',
		'emphasisBottomSpacing',
		'spacingModifier',
		'spacingMultiplierOverride',
	];

	$attributes = [];

	foreach ( $container_keys as $key ) {
		if ( isset( $schema[ $key ] ) && is_array( $schema[ $key ] ) ) {
			$attributes[ $key ] = $schema[ $key ];
		}
	}

	return $attributes;
}

/**
 * The spacing attributes `wp pixelgrade blocks describe` must surface for a core container.
 *
 * NOT a `register_block_type_args` registration, and the difference is load-bearing.
 *
 * Merging these into `WP_Block_Type_Registry` looks like the obvious move — it is what
 * `packages/core/src/blocks/core/post-terms/init.php` does for Color Signal — and it is a
 * BYTE-IDENTITY REGRESSION here. `get_block_editor_server_block_settings()` seeds the block
 * type the editor and the agent-harness build, and `serialize()` walks `blockType.attributes`
 * IN ORDER to emit the block comment's JSON. Server-registered attributes land immediately
 * after the block.json ones and BEFORE the supports-derived ones (`align`, `className`,
 * `style`, `layout`, …), whereas the editor's own `blocks.registerBlockType` filter appends
 * them at the very END. Measured in the harness on a lab site, registering the six moved them
 * from positions 29-39 to 4-9 in `core/group`'s attribute list, which flips the comment JSON
 * key order for any editor-saved Group carrying both a spacing attribute and a common one:
 *
 *   shipped canonical: <!-- wp:group {"align":"full","layout":{…},"blockTopSpacing":2,…} -->
 *   after registering: <!-- wp:group {"blockTopSpacing":2,…,"align":"full","layout":{…}} -->
 *
 * The first form then reports `not_canonical` / `not_a_fixed_point` — reproduced on a real
 * editor-shaped page before this function existed. Every ordering variant of a registry merge
 * has the same defect: the position is decided by WHEN a key enters the object, and the server
 * always enters before core's supports and the JS filters.
 *
 * So the registry is left exactly as it ships, and `describe` — which `ksort()`s its output and
 * therefore has no order to disturb — merges these in itself. The attributes are no less real
 * for it: the editor registers them, the editor's panel writes them, and
 * `novablocks_render_core_container_spacing()` below honours them on the frontend. What is
 * being reported is "what you may author on this block", which is the question describe exists
 * to answer.
 *
 * @param string $block_name Block name.
 * @return array<string, array> Attribute schema, or an empty array for any other block.
 */
function novablocks_get_core_container_spacing_describe_attributes( string $block_name ): array {

	if ( ! in_array( $block_name, novablocks_get_core_container_spacing_blocks(), true ) ) {
		return [];
	}

	return novablocks_get_core_container_spacing_attributes();
}

/**
 * Build the custom properties for a container's AUTHORED spacing.
 *
 * Only attributes that are explicitly present in the stored block attributes AND
 * differ from their registered default produce a property. An unauthored container
 * — every piece of content that exists today — yields an empty array, which is the
 * whole no-op guarantee.
 *
 * @param array $attrs Raw parsed block attributes (NOT default-filled).
 * @return array<string, string> Custom property name => value.
 */
function novablocks_get_core_container_spacing_props( array $attrs ): array {
	$schema = novablocks_get_core_container_spacing_attributes();
	$props  = [];

	$authored = static function ( string $key ) use ( $attrs, $schema ) {
		if ( ! array_key_exists( $key, $attrs ) || ! is_numeric( $attrs[ $key ] ) ) {
			return null;
		}

		$value   = (float) $attrs[ $key ];
		$default = isset( $schema[ $key ]['default'] ) ? (float) $schema[ $key ]['default'] : null;

		if ( null !== $default && abs( $value - $default ) < 0.0000001 ) {
			return null;
		}

		return $value;
	};

	$map = [
		'blockTopSpacing'           => '--nb-block-top-spacing',
		'blockBottomSpacing'        => '--nb-block-bottom-spacing',
		'emphasisTopSpacing'        => '--nb-emphasis-top-spacing',
		'emphasisBottomSpacing'     => '--nb-emphasis-bottom-spacing',
		'spacingModifier'           => '--nb-spacing-modifier',
		'spacingMultiplierOverride' => '--nb-spacing-multiplier-override',
	];

	foreach ( $map as $attribute => $property ) {
		$value = $authored( $attribute );

		if ( null === $value ) {
			continue;
		}

		$props[ $property ] = novablocks_format_core_container_spacing_number( $value );
	}

	// Overlap depth. Mirrors getSpacingCSSProps() in
	// packages/utils/src/space-and-sizing/index.js — a block pulled UP or the next
	// block pulled up over it has to win the stacking order, or the overlap paints
	// behind its neighbour. Emitted only when it is non-zero, so a container that
	// merely increases its spacing stays a pure two-property change.
	$top    = array_key_exists( 'blockTopSpacing', $attrs ) && is_numeric( $attrs['blockTopSpacing'] ) ? (float) $attrs['blockTopSpacing'] : null;
	$bottom = array_key_exists( 'blockBottomSpacing', $attrs ) && is_numeric( $attrs['blockBottomSpacing'] ) ? (float) $attrs['blockBottomSpacing'] : null;

	if ( ! empty( $props ) && ( null !== $top || null !== $bottom ) ) {
		$schema_top    = isset( $schema['blockTopSpacing']['default'] ) ? (float) $schema['blockTopSpacing']['default'] : 0.0;
		$schema_bottom = isset( $schema['blockBottomSpacing']['default'] ) ? (float) $schema['blockBottomSpacing']['default'] : 0.0;

		$z = max( 0.0, -1.0 * ( ( null !== $top ? $top : $schema_top ) + ( null !== $bottom ? $bottom : $schema_bottom ) ) );

		if ( $z > 0 ) {
			$props['--nb-block-zindex'] = novablocks_format_core_container_spacing_number( $z );
		}
	}

	return $props;
}

/**
 * Serialize a spacing number the way the JS side does: unitless, no trailing zeros.
 *
 * `2` and not `2.0`; `0.5` and not `0.50`. The values are multipliers inside a
 * `calc()`, so a unit here would produce length*length and invalidate the whole
 * declaration.
 *
 * @param float $value Numeric value.
 * @return string
 */
function novablocks_format_core_container_spacing_number( float $value ): string {
	if ( abs( $value - round( $value ) ) < 0.0000001 ) {
		return (string) (int) round( $value );
	}

	return rtrim( rtrim( number_format( $value, 4, '.', '' ), '0' ), '.' );
}

/**
 * Inject the authored spacing custom properties into a rendered container.
 *
 * @param string $block_content Rendered block markup.
 * @param array  $block         Parsed block data.
 * @return string
 */
function novablocks_render_core_container_spacing( $block_content, $block ) {

	if ( ! is_string( $block_content ) || '' === trim( $block_content ) ) {
		return $block_content;
	}

	$name = $block['blockName'] ?? '';

	if ( ! in_array( $name, novablocks_get_core_container_spacing_blocks(), true ) ) {
		return $block_content;
	}

	$attrs = isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : [];
	$props = novablocks_get_core_container_spacing_props( $attrs );

	if ( empty( $props ) ) {
		return $block_content;
	}

	$processor = new WP_HTML_Tag_Processor( $block_content );

	if ( ! $processor->next_tag() ) {
		return $block_content;
	}

	$style = trim( (string) $processor->get_attribute( 'style' ) );

	// An editor save already wrote the whole `--nb-*` bundle onto THIS WRAPPER
	// (with-space-and-sizing-save-custom-props.js). That markup is authoritative:
	// re-emitting here would duplicate declarations and, worse, would let a stale
	// attribute value in the comment delimiter override what the saved markup says.
	//
	// The test is the WRAPPER's own style attribute, never the block content. By
	// the time this filter runs, `$block_content` already contains every rendered
	// INNER block, so scanning the whole string would stand this filter down for a
	// headlessly-authored container merely because something nested inside it —
	// an editor-saved child Group, a Nova block, a Separator — emits the same
	// property. That container would then silently render none of its own spacing.
	if ( false !== strpos( $style, '--nb-block-top-spacing' ) ) {
		return $block_content;
	}

	if ( '' !== $style && ';' !== substr( $style, -1 ) ) {
		$style .= ';';
	}

	foreach ( $props as $property => $value ) {
		$style .= $property . ':' . $value . ';';
	}

	$processor->set_attribute( 'style', $style );

	return $processor->get_updated_html();
}
add_filter( 'render_block', 'novablocks_render_core_container_spacing', 10, 2 );
