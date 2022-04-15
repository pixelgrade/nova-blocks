<?php
/**
 * Handle the REST-API logic.
 *
 * @since   2.0.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

function novablocks_register_api_endpoints() {
	register_rest_route( 'novablocks/v1', '/categories', [
		'methods'             => 'GET',
		'callback'            => 'novablocks_get_categories_with_children',
		'permission_callback' => '__return_true',
	] );
}

add_action( 'rest_api_init', 'novablocks_register_api_endpoints' );

function novablocks_rest_prepare_attachment( $response, $post, $request ) {
	if ( ! empty( $response->data['description'] ) ) {
		$response->data['description']['raw'] = $post->post_content;
	}

	return $response;
}

add_filter( 'rest_prepare_attachment', 'novablocks_rest_prepare_attachment', 10, 3 );

function novablocks_get_categories_with_children( $request ) {

	$ids = [];

	if ( isset( $request['ids'] ) ) {
		$ids = $request['ids'];
	}

	if ( ! empty( $ids ) && ! is_array( $ids ) ) {
		$ids = [ $ids ];
	}

	if ( is_array( $ids ) ) {
		$ids = novablocks_expand_categories_to_include_subcategories( $ids );
	}

	return $ids;
}
