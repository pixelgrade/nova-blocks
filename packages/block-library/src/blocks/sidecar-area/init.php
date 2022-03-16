<?php
/**
 * Handle the Sidecar Area block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_sidecar_area_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/sidecar-area/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_sidecar_area_block' ) ) {

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
	function novablocks_render_sidecar_area_block( array $attributes, string $content, WP_Block $block ): string {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config = novablocks_get_sidecar_area_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = [
			'nb-sidecar-area',
			'nb-sidecar-area--' . $attributes['areaName'],
		];

		if ( $attributes['areaName'] === 'content' ) {
			$classes[] = 'nb-content-layout-grid';
		}

		return '<div class="' . esc_attr( join( ' ', $classes ) ) . '">' . $content . '</div>';
	}
}
