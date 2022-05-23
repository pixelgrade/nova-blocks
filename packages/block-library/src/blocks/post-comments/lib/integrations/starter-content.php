<?php
/**
 * Post Comments integration with the Starter Content import in Pixelgrade Care.
 *
 * @since    2.0.5
 * @package  NovaBlocks
 * @author   Pixelgrade
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter( 'pixcare_sce_pre_postmeta', function( $meta, $key ) {
	// We are interested in the conversation starter user ID, only.
	if ( 'nb_conversation_starter_user_id' !== $key ) {
		return $meta;
	}

	// Since we do not import users at this point, make sure that the conversation starter is the current user.
	$meta = get_current_user_id();

	return $meta;
}, 10, 2 );
