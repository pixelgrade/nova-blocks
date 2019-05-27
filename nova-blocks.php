<?php
/**
 * Plugin Name: Nova Blocks by Pixelgrade
 * Plugin URI: https://github.com/WordPress/gutenberg
 * Description: Modern capabilities for Gutenberg's printer
 * Version: 0.0.1
 * Author: Pixelgrade
 * Text Domain: __plugin_txtd
 */

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

function gutenberg_hero_block_init() {

	register_meta( 'post', 'nova_hero_minimum_height', array(
		'type' => 'number',
		'single' => true,
		'show_in_rest' => true,
	) );

	register_meta( 'post', 'nova_hero_apply_minimum_height', array(
		'type' => 'string',
		'single' => true,
		'show_in_rest' => true,
	) );

	register_meta( 'post', 'nova_hero_scroll_indicator', array(
		'type' => 'boolean',
		'single' => true,
		'show_in_rest' => true,
	) );

	register_block_type( 'pixelgrade/hero', array(
		'render_callback' => 'pixelgrade_hero_render_callback'
	) );

}
add_action( 'init', 'gutenberg_hero_block_init' );

function nova_add_blocks_category( $categories, $post ) {
    return array_merge(
        array(
            array(
                'slug'  => 'nova-by-pixelgrade',
                'title' => 'Nova Blocks',
            ),
        ),
        $categories
    );
}
add_filter( 'block_categories', 'nova_add_blocks_category', 10, 2 );

function pixelgrade_hero_render_callback( $attributes, $content ) {
	return $content;
}

include __DIR__ . '/lib/enqueue-scripts.php';
