<?php
/**
 * Handle the Media block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_supernova_item_attributes() {

	return novablocks_merge_attributes_from_array( array(
		'packages/block-library/src/blocks/supernova-item/attributes.json',

		'packages/color-signal/src/attributes.json',
		'packages/media-composition/src/attributes.json',
		'packages/scrolling-effect/src/attributes.json',
		'packages/shape-modeling/src/attributes.json',

		'packages/block-editor/src/filters/with-card-details/attributes.json',
		'packages/block-editor/src/filters/with-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-cards-manager/attributes.json',
		'packages/block-editor/src/filters/with-content-position-matrix/attributes.json',
		'packages/block-editor/src/filters/with-latest-posts/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	) );

}

if ( ! function_exists( 'novablocks_render_supernova_item_block' ) ) {

	function novablocks_render_supernova_item_block( $attributes, $content ) {
		$attributes_config = novablocks_get_supernova_item_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$card_content = $content;
		$card_media = novablocks_get_media_composition_markup( $attributes );

		if ( 'fields' === $attributes[ 'sourceType' ] ) {
			$card_content = novablocks_get_card_contents( $attributes );
		}

		return novablocks_get_supernova_card_markup( $card_media, $card_content, $attributes );
	}
}
