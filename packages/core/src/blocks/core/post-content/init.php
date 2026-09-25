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

/**
 * The authored content width of a Post Content block, when it is its own.
 *
 * Inherited layouts (and the legacy `inherit: true`, which core also lets win
 * over `contentSize`) have none: they keep the theme measure untouched.
 *
 * @param array $attributes Block attributes.
 * @return string Safe CSS size, or '' when none is authored.
 */
function novablocks_get_post_content_measure( array $attributes ): string {
	$layout = $attributes['layout'] ?? [];

	if ( ! is_array( $layout ) || ! empty( $layout['inherit'] ) ) {
		return '';
	}

	$size = trim( (string) ( $layout['contentSize'] ?? '' ) );

	// A length, a percentage, or a preset custom property; nothing that could
	// break out of the declaration.
	if ( '' === $size || ! preg_match( '/^[a-z0-9.%(),\s+*\/-]+$/i', $size ) ) {
		return '';
	}

	return $size;
}

/**
 * Add the measure class and custom property to Post Content's wrapper.
 *
 * @param string $block_content Rendered Post Content markup.
 * @param array  $block         Parsed block data.
 * @return string
 */
function novablocks_render_post_content_measure( string $block_content, array $block ): string {
	$measure = novablocks_get_post_content_measure( $block['attrs'] ?? [] );

	if ( '' === $measure || '' === $block_content ) {
		return $block_content;
	}

	$processor = new WP_HTML_Tag_Processor( $block_content );

	if ( ! $processor->next_tag() ) {
		return $block_content;
	}

	$class = trim( (string) $processor->get_attribute( 'class' ) );
	$processor->set_attribute( 'class', trim( $class . ' nb-post-content--measure' ) );

	$style = trim( (string) $processor->get_attribute( 'style' ) );
	if ( '' !== $style && ';' !== substr( $style, -1 ) ) {
		$style .= ';';
	}
	$processor->set_attribute( 'style', $style . '--nb-post-content-measure:' . $measure );

	return $processor->get_updated_html();
}
add_filter( 'render_block_core/post-content', 'novablocks_render_post_content_measure', 10, 2 );
