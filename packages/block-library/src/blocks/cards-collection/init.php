<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_cards_collection_attributes() {

	return novablocks_merge_attributes_from_array( array(
		'packages/block-library/src/blocks/cards-collection/attributes.json',

		'packages/color-signal/src/attributes.json',

		'packages/block-editor/src/filters/with-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-card-details/attributes.json',
		'packages/block-editor/src/filters/with-collection-layout/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',

		'packages/block-library/src/blocks/cards-collection/attributes-overwrite.json',
	) );

}

if ( ! function_exists( 'novablocks_render_cards_collection_block' ) ) {

	function novablocks_render_cards_collection_block( $attributes, $content ) {

		$attributes_config     = novablocks_get_cards_collection_attributes();
		$attributes            = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes       = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$cssProps = array_merge(
			novablocks_get_space_and_sizing_css( $attributes ),
			novablocks_get_collection_layout_css( $attributes ),
		);

		$align = preg_split( '/\b\s+/', $attributes['contentPosition'] );

		$classes = array(
			'alignfull',
			'supernova',
			'supernova--source-type-' . $attributes[ 'sourceType' ],
			'supernova--card-layout-' . $attributes[ 'cardLayout' ],
			'supernova--valign-' . $align[0],
			'supernova--halign-' . $align[1],
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
