<?php
/**
 * Handle the scripts enqueue.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_admin_init() {
	// Make paths variables so we don't write em twice ;)
	$style_path = '/dist/css/blocks.editor.css';
	$block_path = '/dist/js/editor.blocks.js';

	$script_dependencies = array(
		'wp-i18n',
		'wp-api',
		'wp-blocks',
		'wp-components',
		'wp-dom',
		'wp-editor',
		'wp-element',
	);

	$google_maps_api_key = get_option( 'novablocks_google_maps_api_key', '' );
	wp_register_script( 'google-maps', '//maps.googleapis.com/maps/api/js?key=' . $google_maps_api_key . '&libraries=places' );
	if ( $google_maps_api_key !== '' ) {
		$script_dependencies[] = 'google-maps';
	}

	// Enqueue the bundled block JS file
	wp_register_script(
		'nova-blocks-js',
		novablocks_get_plugin_url() . $block_path,
		$script_dependencies
	);

	wp_set_script_translations( 'nova-blocks-js', '__plugin_txtd' );

	// Enqueue optional editor only styles
	wp_register_style(
		'nova-blocks-editor-css',
		novablocks_get_plugin_url() . $style_path
	);
}
add_action( 'admin_init', 'novablocks_admin_init' );

function novablocks_enqueue_block_editor_assets() {
	wp_enqueue_script( 'nova-blocks-js' );
	wp_enqueue_style( 'nova-blocks-editor-css' );
}
add_action( 'enqueue_block_editor_assets', 'novablocks_enqueue_block_editor_assets' );


function novablocks_enqueue_assets() {
	$style_path = '/dist/css/blocks.style.css';
	wp_enqueue_style(
		'nova-blocks',
		novablocks_get_plugin_url() . $style_path,
		array()
	);
}
add_action( 'enqueue_block_assets', 'novablocks_enqueue_assets' );

function novablocks_enqueue_frontend_assets() {

	// If in the backend, bail out.
	if ( is_admin() ) {
		return;
	}

	$rellax_path = '/dist/js/jquery.rellax.js';
	wp_register_script(
		'nova-blocks-rellax',
		novablocks_get_plugin_url() . $rellax_path,
		array( 'jquery' ),
		true
	);

	$slick_path = '/dist/js/jquery.slick.js';
	wp_register_script(
		'nova-blocks-slick',
		novablocks_get_plugin_url() . $slick_path,
		array( 'jquery' ),
		true
	);

	$velocity_path = '/dist/js/jquery.velocity.js';
	wp_register_script(
		'nova-blocks-velocity',
		novablocks_get_plugin_url() . $velocity_path,
		array( 'jquery' ),
		true
	);

	$script_dependencies = array(
		'jquery',
		'imagesloaded',
		'nova-blocks-rellax',
		'nova-blocks-slick',
		'nova-blocks-velocity',
		'wp-element'
	);

	$google_maps_api_key = get_option( 'novablocks_google_maps_api_key', '' );
	wp_register_script( 'google-maps', '//maps.googleapis.com/maps/api/js?key=' . $google_maps_api_key . '&libraries=places' );
	if ( $google_maps_api_key !== '' ) {
		$script_dependencies[] = 'google-maps';
	}

	$block_path = '/dist/js/frontend.blocks.js';
	wp_enqueue_script(
		'nova-blocks-frontend',
		novablocks_get_plugin_url() . $block_path,
		$script_dependencies,
		false,
		true
	);
}
add_action( 'enqueue_block_assets', 'novablocks_enqueue_frontend_assets' );
