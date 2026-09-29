<?php
/**
 * Server-printed classes for browsers without container style queries or
 * `:has()` (GitHub #685).
 *
 * Firefox 115 ESR, the last Firefox for Windows 7/8, has neither container
 * style queries (Firefox 128+) nor `:has()` (Firefox 121+). Where a Nova rule
 * depends on one of them and the server already knows the answer, the render
 * prints a class and the stylesheet selects on it too:
 *
 * - `nb-content-inset-explicit` on `<body>`: Style Manager emits the Content
 *   Inset signal `--sm-content-inset-explicit: 1` (read with a style query)
 *   from the same state; the layout's class twins read this class.
 * - `nb-image--has-caption` on a captioned core/image figure: the #681 caption
 *   fit, otherwise gated on `:has(> figcaption)`.
 *
 * The Sidecar's rail-content classes live in its render callback
 * (packages/block-library/src/blocks/sidecar/init.php).
 *
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Whether the front end renders Style Manager's Content Inset contract.
 *
 * True when Style Manager emits `--sm-content-inset-explicit: 1`. Never in a
 * Customizer preview (including a Site Editor Live Site preview): there the
 * setting can change without a reload and the style query alone decides, so
 * a stale class cannot hold the inset on.
 *
 * @return bool
 */
function novablocks_content_inset_is_explicit(): bool {
	if ( function_exists( 'is_customize_preview' ) && is_customize_preview() ) {
		return false;
	}

	return function_exists( 'style_manager_content_inset_is_explicit' ) && style_manager_content_inset_is_explicit();
}

/**
 * Add `nb-content-inset-explicit` to the body classes.
 *
 * @param string[] $classes Body classes.
 * @return string[]
 */
function novablocks_content_inset_body_class( $classes ) {
	if ( is_array( $classes ) && novablocks_content_inset_is_explicit() ) {
		$classes[] = 'nb-content-inset-explicit';
	}

	return $classes;
}
add_filter( 'body_class', 'novablocks_content_inset_body_class' );

/**
 * Add `nb-image--has-caption` to a core/image figure that renders a caption.
 *
 * @param string $block_content Rendered block.
 * @param array  $block         Parsed block.
 * @return string
 */
function novablocks_render_image_caption_class( $block_content, $block = [] ) {
	if ( ! is_string( $block_content ) || false === stripos( $block_content, '<figcaption' ) ) {
		return $block_content;
	}

	$processor = new WP_HTML_Tag_Processor( $block_content );
	if ( ! $processor->next_tag() || 'FIGURE' !== $processor->get_tag() || ! $processor->has_class( 'wp-block-image' ) ) {
		return $block_content;
	}

	$processor->add_class( 'nb-image--has-caption' );

	return $processor->get_updated_html();
}
add_filter( 'render_block_core/image', 'novablocks_render_image_caption_class', 10, 2 );
