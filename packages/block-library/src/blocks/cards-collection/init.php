<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_cards_collection_attributes() {

	return novablocks_merge_attributes_from_array( array(
		'packages/collection/src/collection-attributes.json',
		'packages/color-signal/src/attributes.json',
		'packages/block-editor/src/filters/with-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-card-details/attributes.json',
	) );

}

if ( ! function_exists( 'novablocks_render_cards_collection_block' ) ) {

	function novablocks_render_cards_collection_block( $attributes, $content ) {

		$attributes_config = novablocks_get_cards_collection_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		return novablocks_get_collection_output( $attributes, $content );
	}
}
