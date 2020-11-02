<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers all the Nova Blocks packages scripts that are in the standardized
 * `build/` location.
 */

if ( ! function_exists( 'novablocks_register_packages_scripts' ) ) {

	function novablocks_register_packages_scripts() {

		foreach ( glob( novablocks_get_plugin_path() . 'build/*/index.js' ) as $path ) {

			if ( strpos( basename( dirname( $path ) ), 'block-library' ) !== false ) {
				continue;
			}

			$package = basename( dirname( $path ) );

			// Prefix `novablocks-` to package directory to get script handle.
			// For example, `…/build/components/index.js` becomes `novablocks-components`.
			$handle = 'novablocks-' . $package;

			// Replace `.js` extension with `.asset.php` to find the generated dependencies file.
			$asset_file   = substr( $path, 0, -3 ) . '.asset.php';
			$asset        = file_exists( $asset_file ) ? require( $asset_file ) : null;
			$dependencies = isset( $asset['dependencies'] ) ? $asset['dependencies'] : array();
			$version      = isset( $asset['version'] ) ? $asset['version'] : filemtime( $path );

			$package_path = substr( $path, strlen( novablocks_get_plugin_path() ) );

			wp_register_script(
				$handle,
				novablocks_get_plugin_url() . '/' . $package_path,
				$dependencies,
				$version,
				true
			);

			// register styles for each package
			$style = substr( $path, 0, -8 ) . 'style.css';
			$editor_styles = substr( $path, 0, -8 ) . 'editor-styles.css';
			$dir = trailingslashit( novablocks_get_plugin_url() . '/build/' . $package );

			if ( file_exists( $style ) ) {
				wp_register_style(
					$handle . '-style',
					$dir . 'style.css',
					array(),
					$version
				);
			}

			if ( file_exists( $editor_styles ) ) {
				wp_register_style(
					$handle . '-editor_style',
					$dir . 'editor-styles.css',
					array(),
					$version
				);
			}
		}

		$nova_editor_settings = novablocks_get_block_editor_settings();

		list( $color_palette, ) = (array) get_theme_support( 'editor-color-palette' );

		if ( false !== $color_palette ) {
			$nova_editor_settings['colors'] = $color_palette;
		}

		$js_script = '
    ( function() {
        wp.novaBlocks.settings = %s;
        wp.novaBlocks.initialize( wp.novaBlocks.settings );
    } )();
';

		wp_add_inline_script( 'novablocks-core', sprintf( $js_script, wp_json_encode( $nova_editor_settings ) ) );

		wp_localize_script( 'novablocks-core', 'novablocks_urls', array(
			'novablocks_core_frontend_stylesheet' => novablocks_get_plugin_url() . '/build/core/style.css',
			'novablocks_components_frontend_stylesheet' => novablocks_get_plugin_url() . '/build/components/style.css',
			'novablocks_opentable_frontend_stylesheet' => novablocks_get_plugin_url() . '/build/block-library/blocks/opentable/style.css',
			'novablocks_opentable_editor_stylesheet' => novablocks_get_plugin_url() . '/build/block-library/blocks/opentable/editor-styles.css'
		) );

		wp_set_script_translations( 'novablocks-core', '__plugin_txtd', novablocks_get_plugin_path() . 'languages' );

		foreach ( glob( novablocks_get_plugin_path() . 'build/*/index.js' ) as $path ) {
			$handle = 'novablocks-' . basename( dirname( $path ) );

			wp_enqueue_script( $handle );
			wp_enqueue_style( $handle . '-style' );

			if ( is_gutenberg() ) {
				wp_enqueue_style( $handle . '-editor_style' );
			}
		}
	}
}
add_action( 'enqueue_block_assets', 'novablocks_register_packages_scripts' );

function is_gutenberg() {

	if ( is_admin() ) {
		$current_screen = get_current_screen();

		if ( method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor() ) {
			return true;
		}
	}

	return false;
}

if ( ! function_exists( 'novablocks_register_vendor_scripts' ) ) {

	// register 3rd party scripts that will be used as dependencies
	function novablocks_register_vendor_scripts() {

		wp_register_script(
			'novablocks-bully',
			novablocks_get_plugin_url() . '/dist/vendor/jquery.bully.js',
			array( 'jquery' )
		);

		wp_register_script(
			'novablocks-slick',
			novablocks_get_plugin_url() . '/dist/vendor/jquery.slick.js',
			array( 'jquery' )
		);

		wp_register_script(
			'novablocks-velocity',
			novablocks_get_plugin_url() . '/dist/vendor/jquery.velocity.js',
			array( 'jquery' )
		);

		$google_maps_api_key = get_option( 'novablocks_google_maps_api_key', '' );

		wp_register_script(
			'google-maps',
			'//maps.googleapis.com/maps/api/js?key=' . $google_maps_api_key . '&libraries=places'
		);
	}
}
add_action( 'init', 'novablocks_register_vendor_scripts' );

function novablocks_register_block_types() {

	// loop through all folders inside block-library/blocks
	foreach ( glob( novablocks_get_plugin_path() . 'build/block-library/blocks/*' ) as $blockpath ) {

		$block = basename( $blockpath );
		$dir = trailingslashit( novablocks_get_plugin_url() . '/build/block-library/blocks/' . $block );

		if ( ! function_exists( 'register_block_type' ) ) {
			// Gutenberg is not active.
			return;
		}

		// possible script files to be registered for each block
		$scripts = array(
			'editor_script' => 'index.js',
			'script' => 'frontend.js',
		);

		// empty args array that will be programmatically generated for each block
		$args = array();

		foreach ( $scripts as $key => $script ) {
			$path = trailingslashit( $blockpath ) . $script;

			if ( ! file_exists( $path ) ) {
				continue;
			}

			// read dependencies file generated by the build task
			$asset_file     = substr( $path, 0, - 3 ) . '.asset.php';
			$asset          = file_exists( $asset_file ) ? require( $asset_file ) : null;
			$dependencies   = isset( $asset['dependencies'] ) ? $asset['dependencies'] : array();
			$version        = isset( $asset['version'] ) ? $asset['version'] : filemtime( $path );

			if ( $key === 'editor_script' ) {
				$dependencies[] = 'novablocks-core';
			}

			$basename       = substr( $script, 0, -3 );
			$handle         = 'novablocks/' . $block . '-' . $basename;

			// add the 3rd party scripts for each block to the dependencies array
			$velocity_dependent_scripts = array(
				'novablocks/hero-frontend',
				'novablocks/slideshow-frontend'
			);

			if ( in_array( $handle, $velocity_dependent_scripts ) ) {
				$dependencies[] = 'novablocks-velocity';
			}

			$slick_dependent_scripts = array(
				'novablocks/slideshow-frontend'
			);

			if ( in_array( $handle, $slick_dependent_scripts ) ) {
				$dependencies[] = 'novablocks-slick';
			}

			$bully_dependent_scripts = array(
				'novablocks/hero-frontend',
				'novablocks/slideshow-frontend'
			);

			if ( in_array( $handle, $bully_dependent_scripts ) ) {
				$dependencies[] = 'novablocks-bully';
			}

			$google_maps_api_dependent_scripts = array(
				'novablocks/google-map-frontend'
			);

			$google_maps_api_key = get_option( 'novablocks_google_maps_api_key', '' );

			if ( $google_maps_api_key !== '' && in_array( $handle, $google_maps_api_dependent_scripts ) ) {
				$dependencies[] = 'google-maps';
			}

			$advanced_gallery_dependent_scripts = array(
				'novablocks/media-frontend'
			);

			if ( in_array( $handle, $advanced_gallery_dependent_scripts ) ) {
				$dependencies[] = 'novablocks/advanced-gallery-frontend';
			}

			// actually register the script
			wp_register_script(
				$handle,
				$dir . $script,
				$dependencies,
				$version,
				true
			);

			$args[ $key ] = $handle;
		}

		// possible stylesheets to be registered for each block
		$styles = array(
			'editor_style' => 'editor-styles.css',
			'style' => 'style.css',
		);

		foreach ( $styles as $key => $style ) {
			$path = trailingslashit( $blockpath ) . $style;

			if ( ! file_exists( $path ) ) {
				continue;
			}

			// read the asset file generated by build for the correspondent script file
			if ( $key === 'style' ) {
				// frontend.asset.php -> frontend.js -> style.css
				$asset_file = substr( $path, 0, -1 * strlen( $style ) ) . 'frontend.asset.php';
			} else {
				// index.asset.php -> index.js -> editor-styles.css
				$asset_file = substr( $path, 0, -1 * strlen( $style ) ) . 'index.asset.php';
			}

			$basename         = substr( $style, 0, - 4 );
			$handle           = 'novablocks/' . $block . '-' . $basename;
			$asset            = file_exists( $asset_file ) ? require( $asset_file ) : null;

			// the same dependencies array used for the respective script file
			$js_dependencies  = isset( $asset['dependencies'] ) ? $asset['dependencies'] : array();
			$version          = isset( $asset['version'] ) ? $asset['version'] : filemtime( $path );
			$css_dependencies = array();

			foreach ( $js_dependencies as $js_dependency ) {
				// create a correspondent style dependency entry
				// only if the script dependency is a Nova Blocks package
				if ( false !== strpos( $js_dependency, 'novablocks-' ) ) {
					$dependency_handle = $js_dependency . '-' . $key;
					// if there is a stylesheet registered with this handle add it as a dependency
					// because not every package outputs a stylesheet for every script it generates
					if ( wp_style_is( $dependency_handle, 'registered' ) ) {
						$css_dependencies[] = $dependency_handle;
					}
				}
			}

			// finally register the stylesheet
			wp_register_style(
				$handle,
				$dir . $style,
				$css_dependencies,
				$version
			);

			$args[ $key ] = $handle;
		}

		$support = novablocks_get_theme_support();

		// if the current block is supported by the theme register it
		if ( in_array( $block, $support ) ) {

			$init = trailingslashit( $blockpath ) . 'init.php';

			if ( file_exists( $init ) ) {
				require_once $init;
			}

			// call the render callback for this block which should be present in the init.php file
			$callback = 'novablocks_render_' . str_replace( '-','_', $block ) . '_block';

			if ( function_exists( $callback ) ) {
				$args['render_callback'] = $callback;
			}

			$get_attributes = 'novablocks_get_' . str_replace( '-','_', $block ) . '_attributes';

			if ( function_exists( $get_attributes ) ) {
				$args['attributes'] = call_user_func( $get_attributes );
			}

			register_block_type( 'novablocks/' . $block, $args );
		}
	}
}
add_action( 'init', 'novablocks_register_block_types' );

// Dequeue frontend scripts and styles if they are not used
function novablocks_dequeue_unused_block_assets() {

	foreach ( glob( novablocks_get_plugin_path() . 'build/block-library/blocks/*' ) as $blockpath ) {
		$block = basename( $blockpath );

		if ( novablocks_block_area_has_blocks( 'header' ) && ($block === 'header' || $block === 'navigation') ) {
			continue;
		}

		if ( ! is_admin() && ! has_block( 'novablocks/' . $block ) ) {

			wp_dequeue_script( 'novablocks/' . $block . '-frontend' );
			wp_dequeue_style( 'novablocks/' . $block . '-style' );
		}
	}
}
add_action( 'enqueue_block_assets', 'novablocks_dequeue_unused_block_assets' );
