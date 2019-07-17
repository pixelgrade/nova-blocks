<?php

function novablocks_enqueue_block_editor_assets() {
	// Make paths variables so we don't write em twice ;)
	$block_path = '/assets/js/editor.blocks.js';
	$style_path = '/assets/css/blocks.editor.css';

	// Enqueue the bundled block JS file
	wp_enqueue_script(
		'nova-blocks-js',
		novablocks_get_plugin_url() . $block_path,
		array( 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' )
	);

	// Enqueue optional editor only styles
	wp_enqueue_style(
		'nova-blocks-editor-css',
		novablocks_get_plugin_url() . $style_path
	);
}
add_action( 'enqueue_block_editor_assets', 'novablocks_enqueue_block_editor_assets' );


function novablocks_enqueue_assets() {
	$style_path = '/assets/css/blocks.style.css';
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

	$rellax_path = '/assets/js/jquery.rellax.js';
	wp_register_script(
		'nova-blocks-rellax',
		novablocks_get_plugin_url() . $rellax_path,
		array( 'jquery' ),
		true
	);

	// @todo check if bully is needed or already used?
	// components handle: 'pixelgrade_multipage-scripts'
	$bully_path = '/assets/js/jquery.bully.js';
	wp_register_script(
		'nova-blocks-bully',
		novablocks_get_plugin_url() . $bully_path,
		array( 'jquery' ),
		true
	);

	$slick_path = '/assets/js/jquery.slick.js';
	wp_register_script(
		'nova-blocks-slick',
		novablocks_get_plugin_url() . $slick_path,
		array( 'jquery' ),
		true
	);

	$velocity_path = '/assets/js/jquery.velocity.js';
	wp_register_script(
		'nova-blocks-velocity',
		novablocks_get_plugin_url() . $velocity_path,
		array( 'jquery' ),
		true
	);

	$block_path = '/assets/js/frontend.blocks.js';
	wp_enqueue_script(
		'nova-blocks-frontend',
		novablocks_get_plugin_url() . $block_path,
		array( 'jquery', 'nova-blocks-rellax', 'nova-blocks-bully', 'nova-blocks-slick', 'nova-blocks-velocity', 'wp-data' ),
		false,
		true
	);
}
add_action( 'enqueue_block_assets', 'novablocks_enqueue_frontend_assets' );
