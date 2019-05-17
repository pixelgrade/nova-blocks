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

function output_post_meta() {
	ob_start(); ?>
	<style>
		.c-hero {
			min-height: <?php echo get_post_meta( get_the_ID(), 'nova_hero_minimum_height', true ) . 'vh'; ?>;
		}
	</style>
	<?php echo ob_get_clean();
}
add_action( 'wp_footer', 'output_post_meta' );

function pixelgrade_hero_render_callback( $attributes, $content ) {
	ob_start();
	echo '<pre>';
	print_r($attributes);
	echo '</pre>';
	return ob_get_clean() . ' ' . $content;
}

include __DIR__ . '/lib/enqueue-scripts.php';
