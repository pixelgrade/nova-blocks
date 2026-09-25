<?php
/**
 * Post Content's authored reading measure (GitHub #650).
 *
 * Inside a Nova layout grid (e.g. a Sidecar content area beside a rail) Post
 * Content's children sit on the content track and Nova clears their
 * max-width, so WordPress's constrained-layout width never applied. An
 * authored `layout.contentSize` is carried here as `--nb-post-content-measure`
 * plus a marker class; the core stylesheet caps default-aligned children to it
 * and keeps them on the content start line, level with the title.
 *
 * @package NovaBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once dirname( __DIR__ ) . '/content-measure.php';

/**
 * The authored content width of a Post Content block, when it is its own.
 *
 * @see novablocks_get_authored_content_size()
 *
 * @param array $attributes Block attributes.
 * @return string Safe CSS size, or '' when none is authored.
 */
function novablocks_get_post_content_measure( array $attributes ): string {
	return novablocks_get_authored_content_size( $attributes );
}

/**
 * Add the measure class and custom property to Post Content's wrapper.
 *
 * @param string $block_content Rendered Post Content markup.
 * @param array  $block         Parsed block data.
 * @return string
 */
function novablocks_render_post_content_measure( string $block_content, array $block ): string {
	return novablocks_add_content_measure(
		$block_content,
		novablocks_get_post_content_measure( $block['attrs'] ?? [] ),
		'nb-post-content--measure',
		'--nb-post-content-measure'
	);
}
add_filter( 'render_block_core/post-content', 'novablocks_render_post_content_measure', 10, 2 );
