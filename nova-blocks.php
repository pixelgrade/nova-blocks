<?php
/**
 * Plugin Name: Nova Blocks by Pixelgrade
 * Plugin URI: https://github.com/pixelgrade/nova-blocks/
 * Description: Nova Blocks is a collection of <strong>distinctive Gutenberg blocks</strong>, committed to making your site shine like a newborn star. It is taking a design-driven approach to help you made the right decisions and showcase your content in the best shape.
 * Version: 0.0.1
 * Author: Pixelgrade
 * Author URI: https://www.pixelgrade.com
 * Text Domain: __plugin_txtd
 * Tested up to: 5.2
 *
 * Nova Blocks is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * You should have received a copy of the GNU General Public License
 * along with Nova Blocks. If not, see <http://www.gnu.org/licenses/>.
 *
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
function nova_get_plugin_directory() {
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
function nova_get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

function nova_body_class( $classes ) {
	$bullets = get_post_meta( get_the_ID(), 'nova_hero_position_indicators', true );
    if ( $bullets ) {
		$classes[] = 'nova-hero-bullets';
	}

	return $classes;
}
add_filter( 'body_class', 'nova_body_class' );

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

include __DIR__ . '/lib/enqueue-scripts.php';
include __DIR__ . '/lib/customify.php';

include __DIR__ . '/blocks/hero/index.php';
include __DIR__ . '/blocks/slideshow/index.php';
