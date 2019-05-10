<?php
/**
 * Plugin Name: Gutenberg - Pixelgrade Blocks
 * Plugin URI: https://github.com/WordPress/gutenberg
 * Description: Modern capabilities for Gutenberg's printer
 * Version: 0.0.1
 * Author: Razvan
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

include __DIR__ . '/lib/enqueue-scripts.php';
