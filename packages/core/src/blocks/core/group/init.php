<?php
/**
 * A Group's authored reading measure (GitHub #635).
 *
 * Nova caps every default-aligned Group child at `--nb-content-width` (and a
 * Group passed through the layout grid clears their max-width), which
 * overrode WordPress's constrained-layout rule for an authored
 * `layout.contentSize`: the row maximum and the reading measure could not
 * differ. An authored width is carried here as `--nb-group-measure` plus a
 * marker class; the group stylesheet caps default-aligned children to it.
 * Centring and `justifyContent` stay with core's layout rule.
 *
 * @package NovaBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once dirname( __DIR__ ) . '/content-measure.php';

/**
 * Add the measure class and custom property to a Group's wrapper.
 *
 * @param string $block_content Rendered Group markup.
 * @param array  $block         Parsed block data.
 * @return string
 */
function novablocks_render_group_measure( string $block_content, array $block ): string {
	return novablocks_add_content_measure(
		$block_content,
		novablocks_get_authored_content_size( $block['attrs'] ?? [] ),
		'nb-group--measure',
		'--nb-group-measure'
	);
}
add_filter( 'render_block_core/group', 'novablocks_render_group_measure', 10, 2 );

if ( ! function_exists( 'novablocks_group_fills_width' ) ) {
	/**
	 * Whether a Group lets its nested blocks fill it (GitHub #657).
	 *
	 * Core's "Inner blocks use content width" OFF writes `layout.type: default`
	 * and renders a flow layout. A legacy `inherit` or `contentSize` makes core
	 * render it constrained, and a Group with no layout at all (legacy flow)
	 * is left alone so it stays byte-identical. Mirrors `isGroupFill()` in
	 * fill.js.
	 *
	 * @param array $attributes Block attributes.
	 * @return bool
	 */
	function novablocks_group_fills_width( array $attributes ): bool {
		$layout = $attributes['layout'] ?? null;

		if ( ! is_array( $layout ) ) {
			return false;
		}

		return 'default' === ( $layout['type'] ?? null )
			&& empty( $layout['inherit'] )
			&& empty( $layout['contentSize'] );
	}
}

/**
 * Mark a Group whose nested blocks fill it (GitHub #657).
 *
 * Nova caps a Group's default-aligned children at the content width (inside
 * the layout grid, the content track), which overrode core's flow layout: a
 * Wide header Group capped its meta row short of its Wide title and image.
 * The group stylesheet lets the children of a marked Group follow its width.
 *
 * @param string $block_content Rendered Group markup.
 * @param array  $block         Parsed block data.
 * @return string
 */
function novablocks_render_group_fill( string $block_content, array $block ): string {
	if ( '' === $block_content || ! novablocks_group_fills_width( $block['attrs'] ?? [] ) ) {
		return $block_content;
	}

	$processor = new WP_HTML_Tag_Processor( $block_content );

	if ( ! $processor->next_tag() ) {
		return $block_content;
	}

	$processor->add_class( 'nb-group--fill' );

	return $processor->get_updated_html();
}
add_filter( 'render_block_core/group', 'novablocks_render_group_fill', 10, 2 );
