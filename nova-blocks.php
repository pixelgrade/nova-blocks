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

function register_custom_nav_menus() {
	register_nav_menus( array(
		'novablocks_dummy_menu' => 'Dummy Menu Location',
	) );
}
add_action( 'after_setup_theme', 'register_custom_nav_menus' );

require_once dirname( __FILE__ ) . '/lib/enqueue-scripts.php';
require_once dirname( __FILE__ ) . '/lib/customify.php';

require_once dirname( __FILE__ ) . '/src/blocks/header/init.php';
require_once dirname( __FILE__ ) . '/src/blocks/hero/init.php';
require_once dirname( __FILE__ ) . '/src/blocks/logo/init.php';
require_once dirname( __FILE__ ) . '/src/blocks/media/init.php';
require_once dirname( __FILE__ ) . '/src/blocks/navigation/init.php';
require_once dirname( __FILE__ ) . '/src/blocks/slideshow/init.php';

function my_test_allowed_block_types( $allowed_block_types, $post ) {
	if ( $post->post_type === 'block_area' ) {
		return array( 'novablocks/header' );
	} else {
//		$allowed_block_types = array_keys( WP_Block_Type_Registry::get_instance()->get_all_registered() );
//		$key = array_search( 'novablocks/header', $allowed_block_types );
//
//		if ( $key !== false ) {
//			unset( $allowed_block_types[ 'novablocks/header' ] );
//		}

		return $allowed_block_types;
	}
}

add_filter( 'allowed_block_types', 'my_test_allowed_block_types', 10, 2 );

