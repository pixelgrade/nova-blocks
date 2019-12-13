<?php
/**
 * Plugin Name: Nova Blocks
 * Plugin URI: https://github.com/pixelgrade/nova-blocks/
 * Description: Nova Blocks is a collection of <strong>distinctive Gutenberg blocks</strong>, committed to making your site shine like a newborn star. It is taking a design-driven approach to help you made the right decisions and showcase your content in the best shape.
 * Version: 1.1.6
 * Author: Pixelgrade
 * Author URI: https://www.pixelgrade.com
 * Text Domain: __plugin_txtd
 * Tested up to: 5.3.0
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

function novablocks_plugin_setup() {
	global $wp_version;
	$is_old_wp_version = version_compare( $wp_version, '5.3', '<' );
	$is_post_meta_broken = defined( 'GUTENBERG_VERSION' ) &&
	                       version_compare( GUTENBERG_VERSION, '6.6.0', '>=' ) &&
	                       version_compare( GUTENBERG_VERSION, '6.7.0', '<=' );

	// Set up a constant that will tell the rest of the plugin whether to use post meta attributes or not.
	// This is needed since Gutenberg 6.6.0 introduced an issue with them causing a crash in the editor.
	if ( ! defined( 'NOVABLOCKS_USE_POST_META_ATTRIBUTES' ) ) {
		if ( $is_old_wp_version || $is_post_meta_broken ) {
			define( 'NOVABLOCKS_USE_POST_META_ATTRIBUTES', false );
		} else {
			define( 'NOVABLOCKS_USE_POST_META_ATTRIBUTES', true );
		}
	}
}
// We will do this just after themes so we give them a chance to intervene.
add_action( 'after_setup_theme', 'novablocks_plugin_setup', 20 );

/**
 * Gets this plugin's directory file path.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function novablocks_get_plugin_path() {
	static $novablocks_plugin_path;

	if ( empty( $novablocks_plugin_path ) ) {
		$novablocks_plugin_path = plugin_dir_path( __FILE__ );
	}

	return $novablocks_plugin_path;
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
	static $novablocks_plugin_url;

	if ( empty( $novablocks_plugin_url ) ) {
		$novablocks_plugin_url = plugins_url( null, __FILE__ );
	}

	return $novablocks_plugin_url;
}

function novablocks_body_class( $classes ) {
	$position_indicators = get_post_meta( get_the_ID(), 'novablocks_hero_position_indicators', true );
	if ( ! empty( $position_indicators ) || ( defined( 'NOVABLOCKS_USE_POST_META_ATTRIBUTES' ) && ! NOVABLOCKS_USE_POST_META_ATTRIBUTES ) ) {
		$classes[] = 'novablocks-has-position-indicators';
	}

	return $classes;
}
add_filter( 'body_class', 'novablocks_body_class' );

function novablocks_add_blocks_category( $categories, $post ) {
	return array_merge(
		array(
			array(
				'slug'  => 'nova-blocks',
				'title' => 'Nova Blocks', // do not translate
			),
		),
		$categories
	);
}
add_filter( 'block_categories', 'novablocks_add_blocks_category', 10, 2 );

require_once dirname( __FILE__ ) . '/lib/extras.php';
require_once dirname( __FILE__ ) . '/lib/settings.php';
require_once dirname( __FILE__ ) . '/lib/enqueue-scripts.php';

// register block types
require_once dirname( __FILE__ ) . '/src/blocks/init.php';

// load block areas functionality
require_once dirname( __FILE__ ) . '/lib/block-areas/block-areas.php';


