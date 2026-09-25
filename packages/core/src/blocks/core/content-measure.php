<?php
/**
 * A block's authored content width as its reading measure (GitHub #650, #635).
 *
 * Inside Nova's layouts a container's default-aligned children are sized by
 * Nova (the content track, or the `--nb-content-width` cap), which overrides
 * WordPress's constrained-layout rule for an authored `layout.contentSize`.
 * Blocks that honour their own width carry it as a custom property plus a
 * marker class on their wrapper; each block's stylesheet decides how its
 * children use it (Post Content starts level with the title, a Group centres
 * like core).
 *
 * @package NovaBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_get_authored_content_size' ) ) {
	/**
	 * The authored content width of a block, when it is its own.
	 *
	 * Inherited layouts (and the legacy `inherit: true`, which core also lets
	 * win over `contentSize`) have none: they keep the theme measure untouched.
	 *
	 * @param array $attributes Block attributes.
	 * @return string Safe CSS size, or '' when none is authored.
	 */
	function novablocks_get_authored_content_size( array $attributes ): string {
		$layout = $attributes['layout'] ?? [];

		if ( ! is_array( $layout ) || ! empty( $layout['inherit'] ) ) {
			return '';
		}

		$size = trim( (string) ( $layout['contentSize'] ?? '' ) );

		// A length, a percentage, or a preset custom property; nothing that
		// could break out of the declaration.
		if ( '' === $size || ! preg_match( '/^[a-z0-9.%(),\s+*\/-]+$/i', $size ) ) {
			return '';
		}

		return $size;
	}
}

if ( ! function_exists( 'novablocks_add_content_measure' ) ) {
	/**
	 * Add a measure marker class and custom property to a block's wrapper.
	 *
	 * @param string $block_content Rendered block markup.
	 * @param string $measure       Safe CSS size ('' leaves the markup as is).
	 * @param string $class_name    Marker class.
	 * @param string $property      Custom property carrying the measure.
	 * @return string
	 */
	function novablocks_add_content_measure( string $block_content, string $measure, string $class_name, string $property ): string {
		if ( '' === $measure || '' === $block_content ) {
			return $block_content;
		}

		$processor = new WP_HTML_Tag_Processor( $block_content );

		if ( ! $processor->next_tag() ) {
			return $block_content;
		}

		$class = trim( (string) $processor->get_attribute( 'class' ) );
		$processor->set_attribute( 'class', trim( $class . ' ' . $class_name ) );

		$style = trim( (string) $processor->get_attribute( 'style' ) );
		if ( '' !== $style && ';' !== substr( $style, -1 ) ) {
			$style .= ';';
		}
		$processor->set_attribute( 'style', $style . $property . ':' . $measure );

		return $processor->get_updated_html();
	}
}
