<?php
/**
 * Handle the Media block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
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
