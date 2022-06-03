<?php
/**
 * Plugin Name: Nova Blocks
 * Plugin URI: https://github.com/pixelgrade/nova-blocks/
 * Description: Nova Blocks is a collection of <strong>distinctive Gutenberg blocks</strong>, committed to making your site shine like a newborn star. It is taking a design-driven approach to help you made the right decisions and showcase your content in the best shape.
 * Version: 2.1.0
 * Author: Pixelgrade
 * Author URI: https://www.pixelgrade.com
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: __plugin_txtd
 * Requires at least: 5.9
 * Tested up to: 6.0.0
 * Requires PHP: 7.1
 * GitHub Plugin URI: pixelgrade/nova-blocks
 * Release Asset: true
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

define( 'Pixelgrade\NovaBlocks\VERSION', '2.1.0' );

/**
 * Gets this plugin's directory file path.
 *
 * @since  1.0.0
 * @return string
 * @ignore
 * @access private
 *
 */
function novablocks_get_plugin_path(): string {
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
 * @return string
 * @ignore
 * @access private
 *
 */
function novablocks_get_plugin_url(): string {
	static $novablocks_plugin_url;

	if ( empty( $novablocks_plugin_url ) ) {
		$novablocks_plugin_url = plugins_url( null, __FILE__ );
	}

	return $novablocks_plugin_url;
}

require_once dirname( __FILE__ ) . '/lib/utils/ArrayHelpers.php';
require_once dirname( __FILE__ ) . '/lib/extras.php';
require_once dirname( __FILE__ ) . '/lib/setup.php';
require_once dirname( __FILE__ ) . '/lib/rest-api.php';
require_once dirname( __FILE__ ) . '/lib/theme-supports.php';
require_once dirname( __FILE__ ) . '/lib/block-editor-settings.php';
require_once dirname( __FILE__ ) . '/lib/block-patterns.php';
require_once dirname( __FILE__ ) . '/lib/block-rendering.php';
require_once dirname( __FILE__ ) . '/lib/client-assets.php';
require_once dirname( __FILE__ ) . '/lib/deprecated.php';

require_once dirname( __FILE__ ) . '/packages/core/src/blocks/init.php';

