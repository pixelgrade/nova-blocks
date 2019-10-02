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
		'wp-dom-ready',
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
		$script_dependencies,
		'1.1.1',
		true
	);

	wp_localize_script( 'nova-blocks-js', 'novablocks_urls', array(
		'frontend_blocks_stylesheet' => novablocks_get_plugin_url() . '/dist/css/blocks.style.css',
		'editor_blocks_stylesheet' => novablocks_get_plugin_url() . $style_path
	) );

	wp_set_script_translations( 'nova-blocks-js', '__plugin_txtd', novablocks_get_plugin_path() . 'languages' );

	// Enqueue optional editor only styles
	wp_register_style(
		'nova-blocks-editor-css',
		novablocks_get_plugin_url() . $style_path,
		array(),
		'1.1.1'
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
		array(),
		'1.1.1'
	);
}
add_action( 'enqueue_block_assets', 'novablocks_enqueue_assets' );

function novablocks_enqueue_frontend_assets() {

	// If in the backend, bail out.
	if ( is_admin() ) {
		return;
	}

	$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

	$rellax_path = '/dist/js/jquery.rellax' . $suffix . '.js';
	wp_register_script(
		'nova-blocks-rellax',
		novablocks_get_plugin_url() . $rellax_path,
		array( 'jquery' ),
		'1.0.0',
		true
	);

	$bully_path = '/dist/js/jquery.bully' . $suffix . '.js';
	wp_register_script(
		'nova-blocks-bully',
		novablocks_get_plugin_url() . $bully_path,
		array( 'jquery' ),
		'0.2.0',
		true
	);

	$slick_path = '/dist/js/jquery.slick' . $suffix . '.js';
	wp_register_script(
		'nova-blocks-slick',
		novablocks_get_plugin_url() . $slick_path,
		array( 'jquery' ),
		'1.8.1',
		true
	);

	$velocity_path = '/dist/js/jquery.velocity' . $suffix . '.js';
	wp_register_script(
		'nova-blocks-velocity',
		novablocks_get_plugin_url() . $velocity_path,
		array( 'jquery' ),
		'1.0.0',
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

	$position_indicators = get_post_meta( get_the_ID(), 'novablocks_hero_position_indicators', true );
	if ( ! empty( $position_indicators ) ) {
		$script_dependencies[] = 'nova-blocks-bully';
	}

	$google_maps_api_key = get_option( 'novablocks_google_maps_api_key', '' );
	if ( $google_maps_api_key !== '' ) {
		wp_register_script( 'google-maps', '//maps.googleapis.com/maps/api/js?key=' . $google_maps_api_key . '&libraries=places', array(), null );
		$script_dependencies[] = 'google-maps';
	}

	$block_path = '/dist/js/frontend.blocks.js';
	wp_enqueue_script(
		'nova-blocks-frontend',
		novablocks_get_plugin_url() . $block_path,
		$script_dependencies,
		'1.1.1',
		true
	);
}
add_action( 'enqueue_block_assets', 'novablocks_enqueue_frontend_assets' );
