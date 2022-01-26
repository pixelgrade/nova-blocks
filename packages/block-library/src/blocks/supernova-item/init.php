<?php
/**
 * Handle the Media block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_supernova_item_attributes(): array {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/supernova-item/attributes.json',

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

if ( ! function_exists( 'novablocks_render_supernova_item_block' ) ) {

	function novablocks_render_supernova_item_block( array $attributes, string $card_content ): string {
		$attributes_config = novablocks_get_supernova_item_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		if ( ! empty( $attributes['sourceType'] ) && 'fields' === $attributes['sourceType'] ) {
			$card_content = novablocks_get_card_contents( $attributes );
		}

		$media   = novablocks_get_media_composition_markup( $attributes, [
			'companionContent' => ( novablocks_show_card_contents( $attributes ) && ! empty( $card_content ) )
		] );
		$media_markup = novablocks_get_collection_card_media_markup_wrapped( $media );

		return novablocks_get_collection_card_markup( $media_markup, $card_content, $attributes );
	}
}
