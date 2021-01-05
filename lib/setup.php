<?php

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

	if ( ! defined('NOVABLOCKS_DEVELOPMENT_MODE' ) ) {
		define( 'NOVABLOCKS_DEVELOPMENT_MODE', false );
	}
}
// We will do this just after themes so we give them a chance to intervene.
add_action( 'after_setup_theme', 'novablocks_plugin_setup', 20 );

function novablocks_filter_color_ids( $color_id ) {
	return strpos( $color_id, 'sm_color_' ) !== false;
}

function novablocks_spanac() {
	ob_start();

	if ( class_exists( 'PixCustomifyPlugin' ) && class_exists( 'Customify_Color_Palettes' ) ) {
		$options_details = PixCustomifyPlugin()->get_options_configs();
		$master_color_control_ids = Customify_Color_Palettes::instance()->get_all_master_color_controls_ids();
		$color_control_ids = array_filter( $master_color_control_ids, "novablocks_filter_color_ids" );

		echo ':root {' . PHP_EOL;

		$dark = get_option( 'sm_dark_primary_final' );
		$text_color = get_option( 'sm_dark_secondary_final' );
		$lighter = get_option( 'sm_light_primary_final' );
		$light = get_option( 'sm_light_tertiary_final' );

		foreach ( $color_control_ids as $control_id ) {

			if ( empty( $options_details[ $control_id ] ) ) {
				continue;
			}

			$label = str_replace( 'sm_color_', '', $control_id );
			$value = get_option( $control_id . '_final' );

			if ( empty( $value ) ) {
				$value = $options_details[ $control_id ][ 'default' ];
			}

			echo '--' . $label . '-color-0: ' . $lighter . ';' . PHP_EOL;
			echo '--' . $label . '-color-1: ' . $light . ';' . PHP_EOL;
			echo '--' . $label . '-color-2: ' . $light . ';' . PHP_EOL;
			echo '--' . $label . '-color-3: ' . $light . ';' . PHP_EOL;

			echo '--' . $label . '-color-4: ' . $value . ';' . PHP_EOL;
			echo '--' . $label . '-color-5: ' . $value . ';' . PHP_EOL;
			echo '--' . $label . '-color-6: ' . $value . ';' . PHP_EOL;
			echo '--' . $label . '-color-7: ' . $value . ';' . PHP_EOL;

			echo '--' . $label . '-color-8: ' . $dark . ';' . PHP_EOL;
			echo '--' . $label . '-color-9: ' . $dark . ';' . PHP_EOL;
			echo '--' . $label . '-color-10: ' . $dark . ';' . PHP_EOL;
			echo '--' . $label . '-color-11: #000000;' . PHP_EOL;

			echo '--' . $label . '-text-color-1: '. $text_color . ';' . PHP_EOL;
			echo '--' . $label . '-text-color-2: '. $text_color . ';' . PHP_EOL;
		}

		echo '}' . PHP_EOL;
	} ?>

	<?php $css = ob_get_clean();

	wp_add_inline_style( 'novablocks-core-style', $css );
}
add_action( 'enqueue_block_assets', 'novablocks_spanac' );

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

if ( ! function_exists( 'novablocks_add_blocks_category' ) ) {

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
}
