<?php
/**
 * Handle the Media block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_supernova_attributes(): array {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/supernova/attributes.json',

		'packages/color-signal/src/attributes.json',
		'packages/media-composition/src/attributes.json',
		'packages/scrolling-effect/src/attributes.json',
		'packages/shape-modeling/src/attributes.json',

		'packages/block-editor/src/filters/with-card-details/attributes.json',
		'packages/block-editor/src/filters/with-card-elements-stacking/attributes.json',
		'packages/block-editor/src/filters/with-collection-layout/attributes.json',
		'packages/block-editor/src/filters/with-collection-content/attributes.json',
		'packages/block-editor/src/filters/with-content-position-matrix/attributes.json',
		'packages/block-editor/src/filters/with-card-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-overlay-filter/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_supernova_block' ) ) {

	/**
	 * Entry point to render the Supernova block with the given attributes, content, and context.
	 *
	 * @see \WP_Block::render()
	 *
	 * @param array    $attributes
	 * @param string   $content
	 * @param WP_Block $block
	 *
	 * @return string
	 */
	function novablocks_render_supernova_block( array $attributes, string $content, WP_Block $block ): string {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config = novablocks_get_supernova_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );

		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		if (
			$attributes['columns'] === 1 &&
			$attributes['cardLayout'] === 'stacked' &&
			$attributes['layoutStyle'] === 'carousel'
		) {
			if ( get_post_meta( get_the_ID(), 'novablocks_hero_position_indicators', true ) ) {
				$data_attributes[] = 'data-position-indicators="1"';
			}
		}

		$align = preg_split( '/\b\s+/', $attributes['contentPosition'] );

		$classes = array_merge( [
			'nb-supernova',
			'nb-supernova--content-type-' . $attributes['contentType'],
			'nb-supernova--card-layout-' . $attributes['cardLayout'],
			'nb-supernova--layout-' . $attributes['layoutStyle'],
			'nb-supernova--' . $attributes['columns'] . '-columns',
			'nb-supernova--valign-' . $align[0],
			'nb-supernova--halign-' . $align[1],
			'nb-supernova--align-' . $attributes['align'],
			'alignfull',
		],
			novablocks_get_color_signal_classes( $attributes ),
			novablocks_get_grid_area_fallback_classnames( $attributes )
		);

		// Output the Additional CSS class(es) of the block
		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		// This refers to the carousel pagination, not the Query Loop pagination.
		if ( $attributes['showPagination'] ) {
			$classes[] = 'nb-supernova--show-pagination';
		}

		if ( $attributes['layoutStyle'] === 'carousel' ) {
			$classes[] = 'nb-supernova--carousel-layout-' . $attributes['carouselLayout'];
		}

		$cssProps = array_merge(
			novablocks_get_media_composition_css( $attributes ),
			novablocks_get_color_signal_css( $attributes ),
			novablocks_get_overlay_filter_css( $attributes ),
			novablocks_get_space_and_sizing_css( $attributes ),
			novablocks_get_collection_layout_css( $attributes )
		);

		// Output the HTML anchor (ID) of the block.
		$anchor = ' ';
		if ( ! empty( $attributes['anchor'] ) ) {
			$anchor = 'id="'. $attributes['anchor'] .'" ';
		}

		return '<div class="' . esc_attr( join( ' ', $classes ) ) . '" style="' . join( ';', $cssProps ) . '"
			' . $anchor . join( ' ', $data_attributes ) . '>
			' . novablocks_get_collection_output( $attributes, $content, $block ) . '
		</div>';
	}
}
