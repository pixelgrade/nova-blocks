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
		'packages/block-editor/src/filters/with-content-loader/attributes.json',
		'packages/block-editor/src/filters/with-content-position-matrix/attributes.json',
		'packages/block-editor/src/filters/with-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-overlay-filter/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_supernova_block' ) ) {

	function novablocks_render_supernova_block( array $attributes, string $content ): string {
		$attributes_config     = novablocks_get_supernova_attributes();
		$attributes            = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$blacklist             = [ 'position-indicators' ];
		$data_attributes       = novablocks_get_data_attributes( $data_attributes_array, $attributes, $blacklist );

		$align = preg_split( '/\b\s+/', $attributes['contentPosition'] );

		$classes = array_merge( [
			'supernova',
			'supernova--source-type-' . $attributes['sourceType'],
			'supernova--card-layout-' . $attributes['cardLayout'],
			'supernova--' . $attributes['columns'] . '-columns',
			'supernova--valign-' . $align[0],
			'supernova--halign-' . $align[1],
			'alignfull',
			'nb-content-layout-grid',
		],
			novablocks_get_color_signal_classes( $attributes ),
			novablocks_get_grid_area_fallback_classnames( $attributes )
		);

		$cssProps = array_merge(
			novablocks_get_media_composition_css( $attributes ),
			novablocks_get_color_signal_css( $attributes ),
			novablocks_get_overlay_filter_css( $attributes ),
			novablocks_get_space_and_sizing_css( $attributes ),
			novablocks_get_collection_layout_css( $attributes )
		);

		ob_start(); ?>

		<div
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo join( ';', $cssProps ); ?>"
			<?php echo join( ' ', $data_attributes ); ?>
		>
			<?php echo novablocks_get_collection_output( $attributes, $content ); ?>
		</div>

		<?php
		return ob_get_clean();
	}
}
