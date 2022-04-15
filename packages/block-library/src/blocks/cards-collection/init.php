<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_cards_collection_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/cards-collection/attributes.json',

		'packages/color-signal/src/attributes.json',

		'packages/block-editor/src/filters/with-card-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-card-details/attributes.json',
		'packages/block-editor/src/filters/with-collection-layout/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',

		'packages/block-library/src/blocks/cards-collection/attributes-overwrite.json',
	] );

}

if ( ! function_exists( 'novablocks_render_cards_collection_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @see \WP_Block::render()
	 *
	 * @param array    $attributes
	 * @param string   $content
	 * @param WP_Block $block
	 *
	 * @return false|string
	 */
	function novablocks_render_cards_collection_block( array $attributes, string $content, WP_Block $block ) {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config     = novablocks_get_cards_collection_attributes();
		$attributes            = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$blacklist 			   = [];
		$data_attributes       = novablocks_get_data_attributes( $data_attributes_array, $attributes, $blacklist );

		$cssProps = array_merge(
			novablocks_get_space_and_sizing_css( $attributes ),
			novablocks_get_collection_layout_css( $attributes )
		);

		$align = preg_split( '/\b\s+/', $attributes['contentPosition'] );

		$classes = [
			'nb-supernova',
			'nb-supernova--content-type-' . $attributes['contentType'],
			'nb-supernova--card-layout-' . $attributes['cardLayout'],
			'nb-supernova--valign-' . $align[0],
			'nb-supernova--halign-' . $align[1],
			'nb-content-layout-grid',
			'alignfull',
		];

		$classes = array_merge(
			novablocks_get_grid_area_fallback_classnames( $attributes ),
			$classes
		);

		ob_start(); ?>

		<div
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo join( ';', $cssProps ); ?>"
			<?php echo join( ' ', $data_attributes ); ?>
		>
			<?php echo novablocks_get_collection_output( $attributes, $content, $block ); ?>
		</div>

		<?php return ob_get_clean();
	}
}
