<?php
/**
 * Plugin Name: Nova Blocks
 * Plugin URI: https://github.com/pixelgrade/nova-blocks/
 * Description: Nova Blocks is a collection of <strong>distinctive Gutenberg blocks</strong>, committed to making your site shine like a newborn star. It is taking a design-driven approach to help you made the right decisions and showcase your content in the best shape.
 * Version: 1.0.0
 * Author: Pixelgrade
 * Author URI: https://www.pixelgrade.com
 * Text Domain: __plugin_txtd
 * Tested up to: 5.2.2
 * Requires PHP: 5.4.0
 * License: GPLv2 or later
 *
 * Nova Blocks is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * You should have received a copy of the GNU General Public License
 * along with Nova Blocks. If not, see <http://www.gnu.org/licenses/gpl-2.0.html>.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Gets this plugin's URL.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function novablocks_get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

function novablocks_body_class( $classes ) {
	$bullets = get_post_meta( get_the_ID(), 'nova_hero_position_indicators', true );
    if ( $bullets ) {
		$classes[] = 'nova-hero-bullets';
	}

	return $classes;
}
add_filter( 'body_class', 'novablocks_body_class' );

function novablocks_add_blocks_category( $categories, $post ) {
	return array_merge(
		array(
			array(
				'slug'  => 'nova-blocks',
				'title' => 'Nova Blocks',
			),
		),
		$categories
	);
}
add_filter( 'block_categories', 'novablocks_add_blocks_category', 10, 2 );

require_once dirname( __FILE__ ) . '/lib/settings.php';
require_once dirname( __FILE__ ) . '/lib/enqueue-scripts.php';
require_once dirname( __FILE__ ) . '/lib/customify.php';

require_once dirname( __FILE__ ) . '/src/blocks/hero/init.php';
require_once dirname( __FILE__ ) . '/src/blocks/media/init.php';
require_once dirname( __FILE__ ) . '/src/blocks/slideshow/init.php';
