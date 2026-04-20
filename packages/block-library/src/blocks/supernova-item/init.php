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
		'packages/block-editor/src/filters/with-collection-content/attributes.json',
		'packages/block-editor/src/filters/with-content-position-matrix/attributes.json',
		'packages/block-editor/src/filters/with-card-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-overlay-filter/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_supernova_item_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @see \WP_Block::render()
	 *
	 * @param array    $attributes
	 * @param string   $card_content
	 * @param WP_Block $block
	 *
	 * @return string
	 */
	function novablocks_render_supernova_item_block( array $attributes, string $card_content, WP_Block $block ): string {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config = novablocks_get_supernova_item_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$content_before_media = '';

		if ( ! empty( $attributes['contentType'] ) && 'fields' === $attributes['contentType'] ) {
			$order       = novablocks_get_visible_card_element_order( $attributes );
			$media_index = array_search( 'media', $order, true );

			// Split around media when it sits between two content halves. If
			// media is first (or absent) we render a single content block
			// after the media wrapper; if last, content renders before media.
			if ( $media_index !== false && $media_index > 0 && $media_index < count( $order ) - 1 ) {
				$before_ids           = array_slice( $order, 0, $media_index );
				$after_ids            = array_slice( $order, $media_index + 1 );
				$content_before_media = novablocks_get_card_items_markup( $before_ids, $attributes );
				$card_content         = novablocks_get_card_items_markup( $after_ids,  $attributes );
			} else {
				$content_ids  = array_values( array_filter( $order, function ( $id ) { return $id !== 'media'; } ) );
				$card_content = novablocks_get_card_items_markup( $content_ids, $attributes );

				// Media as the last element — slot it after the content block
				// by reusing the existing "before_media" slot as "after the
				// main content". The surface renderer places content_before_media
				// ahead of media, so feed everything there and clear
				// $card_content for the trailing-media case.
				if ( $media_index !== false && $media_index === count( $order ) - 1 && ! empty( $attributes['showMedia'] ) ) {
					$content_before_media = $card_content;
					$card_content         = '';
				}
			}
		}

		$has_any_content = ! empty( $card_content ) || ! empty( $content_before_media );
		$media   = novablocks_get_media_composition_markup( $attributes, [
			'companionContent' => ( novablocks_show_card_contents( $attributes ) && $has_any_content )
		] );
		$media_markup = novablocks_get_collection_card_media_markup_wrapped( $media );

		return novablocks_get_collection_card_markup( $media_markup, $card_content, $attributes, $content_before_media );
	}
}
