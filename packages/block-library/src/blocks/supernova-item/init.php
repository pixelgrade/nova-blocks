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
		'packages/advanced-gallery/src/attributes.json',
		'packages/blob/src/attributes.json',
		'packages/collection/src/collection-attributes.json',
		'packages/collection/src/grid-generator-attributes.json',

		'packages/block-library/src/blocks/supernova-item/attributes.json',

		'packages/block-editor/src/hooks/with-card-details/attributes.json',
		'packages/block-editor/src/hooks/with-card-elements-display/attributes.json',
		'packages/block-editor/src/hooks/with-colors-sets/attributes.json',
		'packages/block-editor/src/hooks/with-doppler/attributes.json',
		'packages/block-editor/src/hooks/with-emphasis-area/attributes.json',
		'packages/block-editor/src/hooks/with-emphasis-level/attributes.json',
		'packages/block-editor/src/hooks/with-latest-posts/attributes.json',
		'packages/block-editor/src/hooks/with-space-and-sizing/attributes.json',
		'packages/block-editor/src/hooks/with-visual-balance/attributes.json',
	) );

}

if ( ! function_exists( 'novablocks_render_supernova_item_block' ) ) {

	function novablocks_render_supernova_item_block( $attributes, $content ) {
		$attributes_config = novablocks_get_supernova_item_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$card_content = $content;
		$card_media = novablocks_get_advanced_gallery( $attributes );

		if ( 'fields' === $attributes[ 'sourceType' ] ) {
			$card_content = novablocks_get_card_contents( $attributes );
		}

		return novablocks_get_supernova_card_markup( $card_media, $card_content, $attributes );
	}
}
