<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_plugin_setup() {
	global $wp_version;
	$is_old_wp_version   = version_compare( $wp_version, '5.3', '<' );
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

	if ( ! defined( 'NOVABLOCKS_DEVELOPMENT_MODE' ) ) {
		define( 'NOVABLOCKS_DEVELOPMENT_MODE', false );
	}
}

// We will do this just after themes so we give them a chance to intervene.
add_action( 'after_setup_theme', 'novablocks_plugin_setup', 20 );

function novablocks_add_image_sizes() {
	add_image_size( 'novablocks_huge', 3840, 3840, false );
	add_image_size( 'novablocks_large', 1366, 1366, false );
	add_image_size( 'novablocks_medium', 1024, 1024, false );
	add_image_size( 'novablocks_small', 768, 768, false );
	add_image_size( 'novablocks_tiny', 480, 480, false );
}

add_action( 'after_setup_theme', 'novablocks_add_image_sizes', 20 );

if ( ! function_exists( 'novablocks_body_classes' ) ) {

	function novablocks_body_class( $classes ) {
		$position_indicators = get_post_meta( get_the_ID(), 'novablocks_hero_position_indicators', true );
		if ( ! empty( $position_indicators ) || ( defined( 'NOVABLOCKS_USE_POST_META_ATTRIBUTES' ) && ! NOVABLOCKS_USE_POST_META_ATTRIBUTES ) ) {
			$classes[] = 'novablocks-has-position-indicators';
		}

		return $classes;
	}

	add_filter( 'body_class', 'novablocks_body_class' );
}

if ( ! function_exists( 'novablocks_add_blocks_category' ) && class_exists( 'WP_Block_Editor_Context' ) ) {

	function novablocks_add_blocks_category( $block_categories, $editor_context ) {
		if ( ! empty( $editor_context->post ) ) {
			array_push(
				$block_categories,
				array(
					'slug'  => 'nova-blocks',
					'title' => 'Nova Blocks', // do not translate
					'icon'  => null,
				)
			);
		}

		return $block_categories;
	}

	add_filter( 'block_categories_all', 'novablocks_add_blocks_category', 10, 2 );
}
