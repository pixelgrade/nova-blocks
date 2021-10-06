<?php
/**
 * Handle the Media block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_supernova_attributes() {

	return novablocks_merge_attributes_from_array( array(
		'packages/block-library/src/blocks/supernova/attributes.json',

		'packages/media-composition/src/attributes.json',

		'packages/color-signal/src/attributes.json',
		'packages/color-signal/src/filters/with-emphasis-control/attributes.json',
		'packages/scrolling-effect/src/attributes.json',
		'packages/shape-modeling/src/attributes.json',

		'packages/block-editor/src/filters/with-card-details/attributes.json',
		'packages/block-editor/src/filters/with-card-elements-stacking/attributes.json',
		'packages/block-editor/src/filters/with-cards-manager/attributes.json',
		'packages/block-editor/src/filters/with-content-position-matrix/attributes.json',
		'packages/block-editor/src/filters/with-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-emphasis-control/attributes.json',
		'packages/block-editor/src/filters/with-latest-posts/attributes.json',
		'packages/block-editor/src/filters/with-overlay-filter/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
		'packages/block-editor/src/filters/with-collection-layout/attributes.json',
	) );

}

if ( ! function_exists( 'novablocks_render_supernova_block' ) ) {

	function novablocks_render_supernova_block( $attributes, $content ) {
		$attributes_config = novablocks_get_supernova_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes       = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$classes = array(
			'alignfull',
			'supernova',
			'supernova--source-type-' . $attributes['sourceType'],
			'supernova--card-layout-' . $attributes['cardLayout']
		);

		if ( $attributes['columns'] === 1 ) {
			$classes[] = 'supernova-layout-one-column';
		}

		if ( ! empty ( $attributes['align'] ) ) {
			$classes[] = 'block-is-' . $attributes['align'];
		}

		$blockPaletteClasses = novablocks_get_color_signal_classes( $attributes );
		$classes             = array_merge( $classes, $blockPaletteClasses );


		/*
		 * @todo: Find a solution for this.
		 * The CSS Props list is getting really big,
		 * We should break them in different functions.
		 */
		$cssProps = array_merge(
			array(
				/*
				 * Color Signal
				 */
				'--nb-collection-emphasis-area: ' . $attributes['emphasisArea'],

				/*
				 * Overlay Filter
				 */
				'--nb-overlay-filter-strength: ' . $attributes['overlayFilterStrength'] / 100,

				/*
				 * Media Composition
				 */
				'--nb-advanced-gallery-grid-gap: ' . $attributes['elementsDistance'] . 'px',
			)
		);

		if ( $attributes['minHeightFallback'] !== 0 ) {
			$classes[]  = 'supernova-has-minimum-height';
			$cssProps[] = '--nb-supernova-minimum-height: ' . $attributes['minHeightFallback'] . 'vh';
		}

		$cssProps = array_merge(
			$cssProps,
			novablocks_get_spacing_and_sizing_css( $attributes ),
			novablocks_get_collection_layout_css( $attributes ),
		);

		ob_start(); ?>

		<div
			class="<?php echo join( ' ', $classes ); ?>"
			style="<?php echo join( ';', $cssProps ); ?>"
			<?php echo join( " ", $data_attributes ); ?>
		>
			<?php echo novablocks_get_collection_output( $attributes, $content ); ?>
		</div>

		<?php return ob_get_clean();
	}
}
