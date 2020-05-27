<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_cards_collection_block_init' ) ) {

	function novablocks_cards_collection_block_init() {
		register_block_type( 'novablocks/cards-collection', array(
			'render_callback' => 'novablocks_render_cards_collection_block',
			'attributes' => novablocks_get_cards_collection_attributes(),
		) );
	}
}
add_action( 'init', 'novablocks_cards_collection_block_init' );

if ( ! function_exists( 'novablocks_render_cards_collection_block' ) ) {

	function novablocks_render_cards_collection_block( $attributes, $content ) {

		$attributes_config = novablocks_get_cards_collection_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		return novablocks_get_collection_output( $attributes, $content );
	}
}
