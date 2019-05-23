<?php

function nova_enqueue_block_editor_assets() {
	// Make paths variables so we don't write em twice ;)
	$block_path = '/assets/js/editor.blocks.js';
	$style_path = '/assets/css/blocks.editor.css';

	// Enqueue the bundled block JS file
	wp_enqueue_script(
		'nova-blocks-js',
		_get_plugin_url() . $block_path,
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( _get_plugin_directory() . $block_path )
	);

	// Enqueue optional editor only styles
	wp_enqueue_style(
		'nova-blocks-editor-css',
		_get_plugin_url() . $style_path,
		[ ],
		filemtime( _get_plugin_directory() . $style_path )
	);
}
add_action( 'enqueue_block_editor_assets', 'nova_enqueue_block_editor_assets' );


function nova_enqueue_assets() {
	$style_path = '/assets/css/blocks.style.css';
	wp_enqueue_style(
		'nova-blocks',
		_get_plugin_url() . $style_path,
		null,
		filemtime( _get_plugin_directory() . $style_path )
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
		_get_plugin_url() . $rellax_path,
		array( 'jquery' ),
		filemtime( _get_plugin_directory() . $rellax_path )
	);

	$slick_path = '/assets/js/jquery.slick.js';
	wp_register_script(
		'nova-blocks-slick',
		_get_plugin_url() . $slick_path,
		array( 'jquery' ),
		filemtime( _get_plugin_directory() . $slick_path )
	);

	wp_register_script(
		'nova-blocks-gsap',
		'//cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js',
		array()
	);

	$block_path = '/assets/js/frontend.blocks.js';
	wp_enqueue_script(
		'nova-blocks-frontend',
		_get_plugin_url() . $block_path,
		array( 'jquery', 'nova-blocks-rellax', 'nova-blocks-slick', 'nova-blocks-gsap' ),
		filemtime( _get_plugin_directory() . $block_path ),
		true
	);
}
add_action( 'enqueue_block_assets', 'nova_enqueue_frontend_assets' );
