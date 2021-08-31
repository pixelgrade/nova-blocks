<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Determine if the current screen is a block editor screen.
 *
 * @return bool
 */
function novablocks_is_gutenberg() {

	if ( is_admin() ) {
		$current_screen = get_current_screen();

		if ( method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor() ) {
			return true;
		}
	}

	return false;
}

if ( ! function_exists( 'novablocks_register_vendor_scripts' ) ) {

	/**
	 * Register 3rd party scripts that might be used as dependencies.
	 */
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

		// Comments related.
		/** The Rich Text Editor from Basecamp - Trix. @see https://github.com/basecamp/trix#getting-started */
		// We use the core of the Trix rich text editor since we are not after old browsers.
		wp_register_script( 'trix', trailingslashit( novablocks_get_plugin_url() )  . 'dist/vendor/trix/trix-core-1-3-1.js', [], '', true );
		wp_register_style( 'trix', trailingslashit( novablocks_get_plugin_url() ) . 'dist/vendor/trix/trix-1-3-1.css', [], '' );
		wp_register_style( 'trix-custom', trailingslashit( novablocks_get_plugin_url() ) . 'build/block-library/blocks/post-comments/trix.css', ['trix',], '' );
	}
}
add_action( 'init', 'novablocks_register_vendor_scripts', 10 );

/**
 * Registers all the Nova Blocks packages scripts that are in the standardized
 * `build/` location.
 */
if ( ! function_exists( 'novablocks_register_packages_scripts' ) ) {

	function novablocks_register_packages_scripts() {

		$blob_style_dependent_handles = array(
			'novablocks-advanced-gallery',
		);

		foreach ( glob( trailingslashit( novablocks_get_plugin_path() ) . 'build/*/index.js' ) as $path ) {

			// We want to skip the block-library directory.
			if ( strpos( basename( dirname( $path ) ), 'block-library' ) !== false ) {
				continue;
			}

			// Determine the current package name (its directory).
			$package = basename( dirname( $path ) );

			// Prefix `novablocks-` to package name to get script handle.
			// For example, `…/build/components/index.js` becomes `novablocks-components`.
			$handle = 'novablocks-' . $package;

			// Replace `.js` extension with `.asset.php` to find the generated asset config file.
			$asset_config_file_path   = substr( $path, 0, - 3 ) . '.asset.php';
			$asset_config = file_exists( $asset_config_file_path ) ? require( $asset_config_file_path ) : null;
			$dependencies = isset( $asset_config['dependencies'] ) ? $asset_config['dependencies'] : array();
			$version      = isset( $asset_config['version'] ) ? $asset_config['version'] : filemtime( $path );

			// Determine the package directory absolute path.
			$package_dir_absolute_path = trailingslashit( dirname( $path ) );

			// Determine the package directory relative path from the absolute path.
			// To be used in constructing URLs.
			$package_dir_relative_path = trailingslashit( substr( $package_dir_absolute_path, strlen( trailingslashit( novablocks_get_plugin_path() ) ) ) );

			// Determine the package directory URL.
			$package_dir_url = trailingslashit( novablocks_get_plugin_url() ) . $package_dir_relative_path;

			wp_register_script(
				$handle,
				$package_dir_url . 'index.js',
				$dependencies,
				$version,
				true
			);

			$frontend_script_path = $package_dir_absolute_path . 'frontend.js';

			if ( file_exists( $frontend_script_path ) ) {

				// Replace `.js` extension with `.asset.php` to find the generated asset config file.
				$asset_config_file_path   = substr( $path, 0, - 8 ) . 'frontend.asset.php';
				$asset_config = file_exists( $asset_config_file_path ) ? require( $asset_config_file_path ) : null;
				$dependencies = isset( $asset_config['dependencies'] ) ? $asset_config['dependencies'] : array();
				$version      = isset( $asset_config['version'] ) ? $asset_config['version'] : filemtime( $path );

				wp_register_script(
					'novablocks-' . $package . '/frontend',
					$package_dir_url . 'frontend.js',
					$dependencies,
					$version,
					true // It is quite important to be enqueued in the page footer.
				);
			}

			$style_dependencies = array();

			if ( in_array( $handle, $blob_style_dependent_handles ) ) {
				$style_dependencies[] = 'novablocks-blob-style';
			}

			// Register styles for the current package, if the files exist.
			$style_path = $package_dir_absolute_path . 'style.css';
			if ( file_exists( $style_path ) ) {
				wp_register_style(
					$handle . '-style',
					$package_dir_url . 'style.css',
					$style_dependencies,
					$version,
					'screen'
				);
			}

			$editor_styles_path = $package_dir_absolute_path . 'editor-styles.css';
			if ( file_exists( $editor_styles_path ) ) {
				wp_register_style(
					$handle . '-editor_style',
					$package_dir_url . 'editor-styles.css',
					$style_dependencies,
					$version
				);
			}
		}

		$nova_editor_settings = novablocks_get_block_editor_settings();

		$sm_palettes_value = get_option( 'sm_advanced_palette_output', '[]' );
		$palettes = json_decode( $sm_palettes_value );

		if ( empty( $palettes ) && function_exists( 'get_fallback_palettes' ) ) {
			$palettes = get_fallback_palettes();
		}

		if ( ! empty( $palettes ) ) {
			$nova_editor_settings['palettes'] = $palettes;
		}

		if ( function_exists( 'Pixelgrade\StyleManager\get_option_details_all' ) ) {
			$nova_editor_settings['customify_config'] = \Pixelgrade\StyleManager\get_option_details_all();
		} elseif ( class_exists( 'PixCustomifyPlugin' ) ) {
			$nova_editor_settings['customify_config'] = PixCustomifyPlugin()->get_options_configs();
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
			'novablocks_opentable_editor_stylesheet' => novablocks_get_plugin_url() . '/build/block-library/blocks/opentable/editor-styles.css',
			'novablocks_customizer_header_link' => novablocks_get_customizer_link(false,
				array(
					"autofocus[panel]" => "theme_options_panel",
					"autofocus[section]" => "rosa2_options[header_section]"
					)
			)
		) );

		wp_set_script_translations( 'novablocks-core', '__plugin_txtd', novablocks_get_plugin_path() . 'languages' );
	}
}
add_action( 'init', 'novablocks_register_packages_scripts', 11 );

function novablocks_register_block_types() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	$velocity_dependent_scripts = array(
		'novablocks/slideshow/frontend',
		'novablocks/post-comments/frontend'
	);

	$slick_dependent_scripts = array(
		'novablocks/slideshow/frontend',
		'novablocks/posts-collection/frontend',
		'novablocks/supernova/frontend',
	);

	$bully_dependent_scripts = array(
		'novablocks/hero/frontend',
		'novablocks/slideshow/frontend'
	);

	$google_maps_api_dependent_scripts = array(
		'novablocks/google-map/frontend'
	);

	$advanced_gallery_style_dependent_blocks = array(
		'advanced-gallery',
		'media',
		'supernova',
	);

	$collection_style_dependent_blocks = array(
		'cards-collection',
		'posts-collection',
		'supernova'
	);


	/*
	 * @todo: This should be removed in the same way we did for scripts.
	 */
	$components_style_dependent_blocks = array(
		'card',
		'cards-collection',
		'posts-collection'
	);

	// Loop through all folders inside block-library/blocks.
	foreach ( glob( novablocks_get_plugin_path() . 'build/block-library/blocks/*' ) as $blockpath ) {

		$block = basename( $blockpath );
		$block_dir_url = trailingslashit( trailingslashit( novablocks_get_plugin_url() ) . 'build/block-library/blocks/' . $block );

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

			// Read dependencies file generated by the build task.
			$asset_config_file_path = substr( $path, 0, - 3 ) . '.asset.php';
			$asset_config           = file_exists( $asset_config_file_path ) ? require( $asset_config_file_path ) : null;
			$dependencies           = isset( $asset_config['dependencies'] ) ? $asset_config['dependencies'] : array();
			$version                = isset( $asset_config['version'] ) ? $asset_config['version'] : filemtime( $path );

			// All editor scripts need the core script present.
			if ( $key === 'editor_script' ) {
				$dependencies[] = 'novablocks-core';
				$dependencies[] = 'novablocks-color-signal';
				$dependencies[] = 'novablocks-media-composition';
				$dependencies[] = 'novablocks-scrolling-effect';
				$dependencies[] = 'novablocks-shape-modeling';
			}

			/**
			 * @todo moving blocks to the block.json API would allow to add this dependency
			 * only when a block adds support for the colorSignal component
			 */
			if ( $key === 'script' ) {
				$dependencies[] = 'novablocks-color-signal/frontend';
				$dependencies[] = 'novablocks-media-composition/frontend';
				$dependencies[] = 'novablocks-scrolling-effect/frontend';
				$dependencies[] = 'novablocks-shape-modeling/frontend';
			}

			$basename = substr( $script, 0, - 3 );
			$handle = 'novablocks/' . $block;

			if ( 'frontend' === $basename ) {
				$handle = 'novablocks/' . $block . '/frontend';
			}

			// Add the 3rd party scripts for each block to the dependencies array.
			if ( in_array( $handle, $velocity_dependent_scripts ) ) {
				$dependencies[] = 'novablocks-velocity';
			}

			if ( in_array( $handle, $slick_dependent_scripts ) ) {
				$dependencies[] = 'novablocks-slick';
			}

			if ( in_array( $handle, $bully_dependent_scripts ) ) {
				$dependencies[] = 'novablocks-bully';
			}

			$google_maps_api_key = get_option( 'novablocks_google_maps_api_key', '' );

			if ( $google_maps_api_key !== '' && in_array( $handle, $google_maps_api_dependent_scripts ) ) {
				$dependencies[] = 'google-maps';
			}

			// Actually register the script.
			wp_register_script(
				$handle,
				$block_dir_url . $script,
				$dependencies,
				$version,
				true
			);

			$args[ $key ] = $handle;

		}

		// Possible stylesheets to be registered for each block.
		$styles = array(
			'editor_style' => 'editor-styles.css',
			'style' => 'style.css',
		);

		foreach ( $styles as $key => $style ) {
			$path = trailingslashit( $blockpath ) . $style;

			if ( ! file_exists( $path ) ) {
				continue;
			}

			// Read the asset file generated by build for the correspondent script file.
			if ( $key === 'style' ) {
				// frontend.asset.php -> frontend.js -> style.css
				$asset_config_file = substr( $path, 0, -1 * strlen( $style ) ) . 'frontend.asset.php';
			} else {
				// index.asset.php -> index.js -> editor-styles.css
				$asset_config_file = substr( $path, 0, -1 * strlen( $style ) ) . 'index.asset.php';
			}

			$basename         = substr( $style, 0, - 4 );
			$handle           = 'novablocks/' . $block . '-' . $basename;
			$asset_config            = file_exists( $asset_config_file ) ? require( $asset_config_file ) : array();

			// The same dependencies array used for the respective script file.
			$js_dependencies  = isset( $asset_config['dependencies'] ) ? $asset_config['dependencies'] : array();
			$version          = isset( $asset_config['version'] ) ? $asset_config['version'] : filemtime( $path );
			$css_dependencies = array();

			foreach ( $js_dependencies as $js_dependency ) {
				// Create a correspondent style dependency entry.
				// Only if the script dependency is a Nova Blocks package.
				if ( false !== strpos( $js_dependency, 'novablocks-' ) ) {
					$dependency_handle = $js_dependency . '-' . $key;
					// If there is a stylesheet registered with this handle add it as a dependency,
					// because not every package outputs a stylesheet for every script it generates.
					if ( wp_style_is( $dependency_handle, 'registered' ) ) {
						$css_dependencies[] = $dependency_handle;
					}
				}
			}

			if ( in_array( $block, $advanced_gallery_style_dependent_blocks ) ) {
				$css_dependencies[] = 'novablocks-advanced-gallery-' . $key;
			}

			if ( in_array( $block, $collection_style_dependent_blocks ) ) {
				$css_dependencies[] = 'novablocks-collection-' . $key;
			}

			if ( in_array( $block, $components_style_dependent_blocks ) ) {
				$css_dependencies[] = 'novablocks-components-' . $key;
			}

			// Finally, register the stylesheet.
			wp_register_style(
				$handle,
				$block_dir_url . $style,
				$css_dependencies,
				$version,
				'screen'
			);

			$args[ $key ] = $handle;
		}

		$support = novablocks_get_theme_support();

		// If the current block is supported by the theme, register it.
		if ( in_array( $block, $support ) || true ) {
			// In development mode load the PHP files from src to make for easier debugging.
			if ( NOVABLOCKS_DEVELOPMENT_MODE ) {
				$init = trailingslashit( str_replace( 'build/block-library/blocks', 'packages/block-library/src/blocks', $blockpath ) ) . 'init.php';
			} else {
				$init = trailingslashit( $blockpath ) . 'init.php';
			}

			if ( file_exists( $init ) ) {
				require_once $init;
			}

			// Call the render callback for this block which should be present in the init.php file.
			$callback = 'novablocks_render_' . str_replace( '-','_', $block ) . '_block';

			if ( function_exists( $callback ) ) {
				$args['render_callback'] = $callback;
			}

			$get_attributes = 'novablocks_get_' . str_replace( '-','_', $block ) . '_attributes';

			if ( function_exists( $get_attributes ) ) {
				$args['attributes'] = call_user_func( $get_attributes );
			}

			register_block_type( 'novablocks/' . $block, array_merge($args, array(
				'uses_context' => array( 'postId', 'postType' )
			) ) );
		}
	}
}
add_action( 'init', 'novablocks_register_block_types', 20 );

if ( ! function_exists( 'novablocks_enqueue_packages_scripts' ) ) {

	function novablocks_enqueue_packages_scripts() {

		// For now, we will always enqueue the core scripts and styles.
		wp_enqueue_style( 'novablocks-core-style' );

		if ( ! is_admin() ) {
			wp_enqueue_script( 'novablocks-core/frontend' );
		}

		if ( novablocks_is_gutenberg() ) {
			wp_enqueue_script( 'novablocks-core' );
			wp_enqueue_style( 'novablocks-core-editor_style' );
		}
	}
}
add_action( 'enqueue_block_assets', 'novablocks_enqueue_packages_scripts' );

/**
 * Dequeue frontend scripts and styles if they are not used.
 */
function novablocks_dequeue_unused_block_assets() {


	foreach ( glob( novablocks_get_plugin_path() . 'build/block-library/blocks/*' ) as $blockpath ) {
		$block = basename( $blockpath );

		if ( novablocks_block_area_has_blocks( 'header' ) && ($block === 'header' || $block === 'navigation') ) {
			continue;
		}

		// has_block() will only work for singular "views", since it will not look in inner blocks or work for loops of posts.
		if ( ! is_admin() && is_singular() && ! has_block( 'novablocks/' . $block ) ) {
			wp_dequeue_script( 'novablocks/' . $block . '/frontend' );
			wp_dequeue_style( 'novablocks/' . $block . '-style' );
		}
	}

	// Also dequeue the novablocks-core.
	$block_areas_have_blocks = novablocks_block_area_has_blocks( 'header' ) || novablocks_block_area_has_blocks( 'footer' ) || novablocks_block_area_has_blocks( 'promo-bar' );

	if ( ! is_admin() && is_singular() && ! has_blocks() && ! $block_areas_have_blocks ) {
		wp_dequeue_script( 'novablocks-core' );
		wp_dequeue_style( 'novablocks-core-style' );
	}
}
add_action( 'enqueue_block_assets', 'novablocks_dequeue_unused_block_assets', 99 );
