<?php

function pixelgrade_enqueue_block_editor_assets() {
	// Make paths variables so we don't write em twice ;)
	$block_path = '/assets/js/editor.blocks.js';
	$style_path = '/assets/css/blocks.editor.css';

	// Enqueue the bundled block JS file
	wp_enqueue_script(
		'pixelgrade-blocks-js',
		_get_plugin_url() . $block_path,
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( _get_plugin_directory() . $block_path )
	);

	// Enqueue optional editor only styles
	wp_enqueue_style(
		'pixelgrade-blocks-editor-css',
		_get_plugin_url() . $style_path,
		[ ],
		filemtime( _get_plugin_directory() . $style_path )
	);
}
add_action( 'enqueue_block_editor_assets', 'pixelgrade_enqueue_block_editor_assets' );


function pixelgrade_enqueue_assets() {
	$style_path = '/assets/css/blocks.style.css';
	wp_enqueue_style(
		'pixelgrade-blocks',
		_get_plugin_url() . $style_path,
		null,
		filemtime( _get_plugin_directory() . $style_path )
	);
}
add_action( 'enqueue_block_assets', 'pixelgrade_enqueue_assets' );


function pixelgrade_enqueue_frontend_assets() {

	// If in the backend, bail out.
	if ( is_admin() ) {
		return;
	}

	$rellax_path = '/assets/js/jquery.rellax.js';
	wp_register_script(
		'pixelgrade-blocks-rellax',
		_get_plugin_url() . $rellax_path,
		['jquery'],
		filemtime( _get_plugin_directory() . $rellax_path )
	);

	$slick_path = '/assets/js/jquery.slick.js';
	wp_register_script(
		'pixelgrade-blocks-slick',
		_get_plugin_url() . $slick_path,
		['jquery'],
		filemtime( _get_plugin_directory() . $slick_path )
	);

	$block_path = '/assets/js/frontend.blocks.js';
	wp_enqueue_script(
		'pixelgrade-blocks-frontend',
		_get_plugin_url() . $block_path,
		['jquery', 'pixelgrade-blocks-rellax', 'pixelgrade-blocks-slick'],
		filemtime( _get_plugin_directory() . $block_path ),
		true
	);
}
add_action( 'enqueue_block_assets', 'pixelgrade_enqueue_frontend_assets' );
