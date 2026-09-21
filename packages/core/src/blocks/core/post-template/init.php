<?php
/**
 * Opt-in visual treatments for WordPress Post Template lists.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', function () {
	register_block_style( 'core/post-template', array(
		'name'  => 'numbered-index',
		'label' => __( 'Numbered Index', '__plugin_txtd' ),
	) );
}, 20 );
