<?php
/**
 * Handle the Sidecar block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_sidecar_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/sidecar/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_sidecar_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @see \WP_Block::render()
	 *
	 * @param array    $attributes
	 * @param string   $content
	 * @param WP_Block $block
	 *
	 * @return string
	 */
	function novablocks_render_sidecar_block( array $attributes, string $content, WP_Block $block ): string {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config = novablocks_get_sidecar_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = [
			'nb-sidecar',
			'nb-sidecar--sidebar-' . $attributes['sidebarPosition'],
			'nb-sidecar--sidebar-' . $attributes['sidebarWidth'],
			'nb-content-layout-grid',
		];

		if ( ! empty( $attributes['lastItemIsSticky'] ) ) {
			$classes[] = 'nb-sidecar--sticky-sidebar';
		}

		$tag = 'div';
		if ( ! empty( $attributes['tagName'] ) && in_array( $attributes['tagName'], ['header', 'main', 'section', 'article', 'aside', 'footer'] ) ) {
			$tag = esc_attr( $attributes['tagName'] );
		}

		$id = '';
		if ( ! empty( $attributes['anchor'] ) ) {
			$id = ' id="' .  esc_attr( $attributes['anchor'] ). '" ';
		}

		return '<' . $tag . $id . ' class="' . esc_attr( join( ' ', $classes ) ) . '">' . $content . '</' . $tag .'>';
	}
}
