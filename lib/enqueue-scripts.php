<?php

function nova_enqueue_block_editor_assets() {
	// Make paths variables so we don't write em twice ;)
	$block_path = '/assets/js/editor.blocks.js';
	$style_path = '/assets/css/blocks.editor.css';

	// Enqueue the bundled block JS file
	wp_enqueue_script(
		'nova-blocks-js',
		nova_get_plugin_url() . $block_path,
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( nova_get_plugin_directory() . $block_path )
	);

	global $content_width;
	wp_localize_script('nova-blocks-js', 'nova-blocks', array(
		'contentWidth' => isset( $content_width ) ? $content_width : 1100,
	));

	// Enqueue optional editor only styles
	wp_enqueue_style(
		'nova-blocks-editor-css',
		nova_get_plugin_url() . $style_path,
		[ ],
		filemtime( nova_get_plugin_directory() . $style_path )
	);
}
add_action( 'enqueue_block_editor_assets', 'nova_enqueue_block_editor_assets' );


function nova_enqueue_assets() {
	$style_path = '/assets/css/blocks.style.css';
	wp_enqueue_style(
		'nova-blocks',
		nova_get_plugin_url() . $style_path,
		null,
		filemtime( nova_get_plugin_directory() . $style_path )
	);
}
add_action( 'enqueue_block_assets', 'nova_enqueue_assets' );


function nova_enqueue_frontend_assets() {

	// If in the backend, bail out.
	if ( is_admin() ) {
		return;
	}

	$rellax_path = '/assets/js/jquery.rellax.js';
	wp_register_script(
		'nova-blocks-rellax',
		nova_get_plugin_url() . $rellax_path,
		array( 'jquery' ),
		filemtime( nova_get_plugin_directory() . $rellax_path )
	);

	$slick_path = '/assets/js/jquery.slick.js';
	wp_register_script(
		'nova-blocks-slick',
		nova_get_plugin_url() . $slick_path,
		array( 'jquery' ),
		filemtime( nova_get_plugin_directory() . $slick_path )
	);

	$velocity_path = '/assets/js/jquery.velocity.js';
	wp_register_script(
		'nova-blocks-velocity',
		nova_get_plugin_url() . $velocity_path,
		array( 'jquery' ),
		filemtime( nova_get_plugin_directory() . $slick_path )
	);

	$block_path = '/assets/js/frontend.blocks.js';
	wp_enqueue_script(
		'nova-blocks-frontend',
		nova_get_plugin_url() . $block_path,
		array( 'jquery', 'nova-blocks-rellax', 'nova-blocks-slick', 'nova-blocks-velocity', 'wp-data' ),
		filemtime( nova_get_plugin_directory() . $block_path ),
		true
	);
}
add_action( 'enqueue_block_assets', 'nova_enqueue_frontend_assets' );
