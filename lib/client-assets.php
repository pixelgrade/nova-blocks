<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Determine if the current screen is a block editor screen.
 *
 * @return bool
 */
function novablocks_is_gutenberg(): bool {

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
			[ 'jquery', ]
		);

		wp_register_script(
			'novablocks-slick',
			novablocks_get_plugin_url() . '/dist/vendor/jquery.slick.js',
			[ 'jquery', ]
		);

		// Use the public CDN for better performance
		// (high likelihood the file is already cached in the browser from other sites).
		wp_register_script(
			'novablocks-velocity',
			'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js',
			[ 'jquery', ]
		);
		// Add the SRI (Subresource Integrity) hash data.
		// Generated with https://www.srihash.org/
		wp_script_add_data( 'novablocks-velocity', 'integrity', 'sha384-fcLDUAwcSMMfmpKMJ0dO2//SL2WJ5/kkyz/yvgtmLXBEp3GdqrQF9ahRerhdLXn+' );
		wp_script_add_data( 'novablocks-velocity', 'crossorigin', 'anonymous' );

		$google_maps_api_key = get_option( 'novablocks_google_maps_api_key', '' );
		wp_register_script(
			'google-maps',
			'//maps.googleapis.com/maps/api/js?key=' . $google_maps_api_key . '&libraries=places'
		);

		// Comments related.
		/** The Rich Text Editor from Basecamp - Trix.
		 * @see https://github.com/basecamp/trix#getting-started
		 *
		 * We use the core of the Trix rich text editor since we are not after old browsers.
		 */
		wp_register_script( 'trix', trailingslashit( novablocks_get_plugin_url() ) . 'dist/vendor/trix/trix-core-1-3-1.js', [], '', true );
		wp_register_style( 'trix', trailingslashit( novablocks_get_plugin_url() ) . 'dist/vendor/trix/trix-1-3-1.css', [], '' );
		wp_register_style( 'trix-custom', trailingslashit( novablocks_get_plugin_url() ) . 'build/block-library/blocks/post-comments/trix.css', [ 'trix', ], '' );
	}
}
add_action( 'init', 'novablocks_register_vendor_scripts', 10 );

/**
 * Registers all the Nova Blocks packages scripts that are in the standardized
 * `build/` location.
 */
if ( ! function_exists( 'novablocks_register_packages_scripts' ) ) {

	function novablocks_register_packages_scripts() {

		$blob_style_dependent_handles = [
			'novablocks-media-composition',
		];

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
			$asset_config_file_path = substr( $path, 0, - 3 ) . '.asset.php';
			$asset_config           = file_exists( $asset_config_file_path ) ? require( $asset_config_file_path ) : null;
			$dependencies           = $asset_config['dependencies'] ?? [];
			$version                = $asset_config['version'] ?? filemtime( $path );

			// Determine the package directory absolute path.
			$package_dir_absolute_path = trailingslashit( dirname( $path ) );

			// Determine the package directory relative path from the absolute path.
			// To be used in constructing URLs.
			$package_dir_relative_path = trailingslashit( substr( $package_dir_absolute_path, strlen( trailingslashit( novablocks_get_plugin_path() ) ) ) );

			// Determine the package directory URL.
			$package_dir_url = trailingslashit( novablocks_get_plugin_url() ) . $package_dir_relative_path;

			/**
			 * Filters the script dependencies list before registering a package block editor script.
			 *
			 * @param array  $dependencies The dependencies list.
			 * @param string $package      The Nova Blocks package name the registered script belongs to.
			 * @param string $handle       The registered script handle.
			 * @param string $src          The registered script src.
			 */
			$dependencies = apply_filters( 'novablocks_register_package_editor_script_dependencies', $dependencies, $package, $handle, $package_dir_url . 'index.js' );

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
				$asset_config_file_path = substr( $path, 0, - 8 ) . 'frontend.asset.php';
				$asset_config           = file_exists( $asset_config_file_path ) ? require( $asset_config_file_path ) : null;
				$dependencies           = $asset_config['dependencies'] ?? [];
				$version                = $asset_config['version'] ?? filemtime( $path );

				if ( in_array( $package, [ 'collection' ] ) ) {
					$dependencies[] = 'novablocks-velocity';
				}

				/**
				 * Filters the script dependencies list before registering a package frontend script.
				 *
				 * @param array  $dependencies The dependencies list.
				 * @param string $package      The Nova Blocks package name the registered script belongs to.
				 * @param string $handle       The registered script handle.
				 * @param string $src          The registered script src.
				 */

				$dependencies = apply_filters( 'novablocks_register_package_frontend_script_dependencies', $dependencies, $package, $handle . '/frontend', $package_dir_url . 'frontend.js' );

				wp_register_script(
					$handle . '/frontend',
					$package_dir_url . 'frontend.js',
					$dependencies,
					$version,
					true // It is quite important to be enqueued in the page footer.
				);
			}

			$style_dependencies = [];

			if ( in_array( $handle, $blob_style_dependent_handles ) ) {
				$style_dependencies[] = 'novablocks-shape-modeling-style';
			}

			// Register styles for the current package, if the files exist.
			$style_path = $package_dir_absolute_path . 'style.css';
			if ( file_exists( $style_path ) ) {
				/**
				 * Filters the stylesheet dependencies list before registering a package frontend stylesheet.
				 *
				 * @param array  $dependencies The dependencies list.
				 * @param string $package      The Nova Blocks package name the registered stylesheet belongs to.
				 * @param string $handle       The registered stylesheet handle.
				 * @param string $src          The registered stylesheet src.
				 */
				$style_dependencies = apply_filters( 'novablocks_register_package_frontend_stylesheet_dependencies', $style_dependencies, $package, $handle . '-style', $package_dir_url . 'style.css' );

				wp_register_style(
					$handle . '-style',
					$package_dir_url . 'style.css',
					$style_dependencies,
					$version,
					'screen'
				);

				// Allow the frontend style to be inlined by WP 5.8+
				// @see https://make.wordpress.org/core/2021/07/01/block-styles-loading-enhancements-in-wordpress-5-8/
				wp_style_add_data( $handle . '-style', 'path', $style_path );
			}

			$editor_styles_path = $package_dir_absolute_path . 'editor-styles.css';
			if ( file_exists( $editor_styles_path ) ) {
				/**
				 * Filters the stylesheet dependencies list before registering a package editor stylesheet.
				 *
				 * @param array  $dependencies The dependencies list.
				 * @param string $package      The Nova Blocks package name the registered stylesheet belongs to.
				 * @param string $handle       The registered stylesheet handle.
				 * @param string $src          The registered stylesheet src.
				 */
				$style_dependencies = apply_filters( 'novablocks_register_package_editor_stylesheet_dependencies', $style_dependencies, $package, $handle . '-editor_style', $package_dir_url . 'editor-styles.css' );

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
		$palettes          = json_decode( $sm_palettes_value );

		if ( empty( $palettes ) && function_exists( 'sm_get_fallback_palettes' ) ) {
			$palettes = sm_get_fallback_palettes();
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

		wp_localize_script( 'novablocks-core', 'novablocks_urls', [
			'novablocks_core_frontend_stylesheet'       => novablocks_get_plugin_url() . '/build/core/style.css',
			'novablocks_components_frontend_stylesheet' => novablocks_get_plugin_url() . '/build/components/style.css',
			'novablocks_opentable_frontend_stylesheet'  => novablocks_get_plugin_url() . '/build/block-library/blocks/opentable/style.css',
			'novablocks_opentable_editor_stylesheet'    => novablocks_get_plugin_url() . '/build/block-library/blocks/opentable/editor-styles.css',
			'novablocks_customizer_header_link'         => novablocks_get_customizer_link( false,
				[
					'autofocus[panel]'   => 'theme_options_panel',
					'autofocus[section]' => 'rosa2_options[header_section]',
				]
			),
		] );

		wp_set_script_translations( 'novablocks-core', '__plugin_txtd', novablocks_get_plugin_path() . 'languages' );
	}
}
add_action( 'init', 'novablocks_register_packages_scripts', 11 );

function novablocks_register_block_types() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// The block editor is not available.
		return;
	}

	$velocity_dependent_scripts = [
		'novablocks/slideshow/frontend',
		'novablocks/post-comments/frontend',
	];

	$slick_dependent_scripts = [
		'novablocks/slideshow/frontend',
		'novablocks/posts-collection/frontend',
		'novablocks/supernova/frontend',
	];

	$bully_dependent_scripts = [
		'novablocks/hero/frontend',
		'novablocks/slideshow/frontend',
		'novablocks/supernova/frontend',
	];

	$google_maps_api_dependent_scripts = [
		'novablocks/google-map/frontend',
	];

	$media_composition_style_dependent_blocks = [
		'advanced-gallery',
		'media',
		'supernova',
	];

	$collection_style_dependent_blocks = [
		'cards-collection',
		'posts-collection',
		'supernova',
	];

	/*
	 * @todo: This should be removed in the same way we did for scripts.
	 */
	$components_style_dependent_blocks = [
		'card',
		'cards-collection',
		'posts-collection',
	];

	// Loop through all folders inside block-library/blocks.
	foreach ( glob( novablocks_get_plugin_path() . 'build/block-library/blocks/*' ) as $blockpath ) {

		$block = basename( $blockpath );

		$block_dir_url = trailingslashit( trailingslashit( novablocks_get_plugin_url() ) . 'build/block-library/blocks/' . $block );

		// Possible script files to be registered for each block.
		$scripts = [
			'editor_script' => 'index.js',
			'view_script'   => 'frontend.js',
		];

		// Empty args array that will be programmatically generated for each block.
		$args = [];

		foreach ( $scripts as $key => $script ) {
			$script_path = trailingslashit( $blockpath ) . $script;

			if ( ! file_exists( $script_path ) ) {
				continue;
			}

			// Read dependencies file generated by the build task.
			$asset_config_file_path = substr( $script_path, 0, - 3 ) . '.asset.php';
			$asset_config           = file_exists( $asset_config_file_path ) ? require( $asset_config_file_path ) : null;
			$dependencies           = $asset_config['dependencies'] ?? [];
			$version                = $asset_config['version'] ?? filemtime( $script_path );

			// All editor scripts need the core scripts present.
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
			if ( $key === 'view_script' ) {
				$dependencies[] = 'novablocks-color-signal/frontend';
				$dependencies[] = 'novablocks-collection/frontend';
				$dependencies[] = 'novablocks-shape-modeling/frontend';
				$dependencies[] = 'novablocks-media-composition/frontend';
				$dependencies[] = 'novablocks-scrolling-effect/frontend';
			}

			// The basename is the script's filename without the extension.
			$basename = substr( $script, 0, - 3 );
			$handle   = 'novablocks/' . $block;
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

			if ( in_array( $handle, $google_maps_api_dependent_scripts ) ) {
				$google_maps_api_key = get_option( 'novablocks_google_maps_api_key', '' );
				if ( ! empty( $google_maps_api_key ) ) {
					$dependencies[] = 'google-maps';
				}
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
		$styles = [
			'editor_style' => 'editor-styles.css',
			'style'        => 'style.css',
		];

		foreach ( $styles as $key => $style ) {
			$style_path = trailingslashit( $blockpath ) . $style;

			if ( ! file_exists( $style_path ) ) {
				continue;
			}

			// Read the asset file generated by build for the correspondent script file.
			if ( $key === 'style' ) {
				// frontend.asset.php -> frontend.js -> style.css
				$asset_config_file = substr( $style_path, 0, - 1 * strlen( $style ) ) . 'frontend.asset.php';
			} else {
				// index.asset.php -> index.js -> editor-styles.css
				$asset_config_file = substr( $style_path, 0, - 1 * strlen( $style ) ) . 'index.asset.php';
			}

			$basename     = substr( $style, 0, - 4 );
			$handle       = 'novablocks/' . $block . '-' . $basename;
			$asset_config = file_exists( $asset_config_file ) ? require( $asset_config_file ) : [];

			// The same dependencies array used for the respective script file.
			$js_dependencies  = $asset_config['dependencies'] ?? [];
			$version          = $asset_config['version'] ?? filemtime( $style_path );
			$css_dependencies = [];

			if ( $key === 'editor_style' ) {
				$css_dependencies[] = 'novablocks-color-signal-' . $key;
			}

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

			/**
			 * @todo moving blocks to the block.json API would allow to add this dependency
			 * only when a block adds support for the colorSignal component
			 */
			if ( $key === 'style' ) {
				$css_dependencies[] = 'novablocks-collection-style';
				$css_dependencies[] = 'novablocks-media-composition-style';
				$css_dependencies[] = 'novablocks-shape-modeling-style';
			}

			// Finally, register the stylesheet.
			wp_register_style(
				$handle,
				$block_dir_url . $style,
				$css_dependencies,
				$version,
				'screen'
			);

			if ( $key === 'style' ) {
				// Allow the frontend style to be inlined by WP 5.8+
				// @see https://make.wordpress.org/core/2021/07/01/block-styles-loading-enhancements-in-wordpress-5-8/
				wp_style_add_data( $handle, 'path', $style_path );
			}

			$args[ $key ] = $handle;
		}

		// If the current block is supported by the theme, register it.
		if ( novablocks_is_block_supported( $block ) ) {
			// In development mode load the files from src to make for easier debugging.
			if ( NOVABLOCKS_DEVELOPMENT_MODE ) {
				$blockpath = str_replace( 'build/block-library/blocks', 'packages/block-library/src/blocks', $blockpath );
			}

			if ( file_exists( trailingslashit( $blockpath ) . 'init.php' ) ) {
				require_once trailingslashit( $blockpath ) . 'init.php';
			}

			// The render callback for this block should be present in the init.php file.
			$callback = 'novablocks_render_' . str_replace( '-', '_', $block ) . '_block';
			if ( function_exists( $callback ) ) {
				$args['render_callback'] = $callback;
			}

			// Call the get attributes callback for this block which should be present in the init.php file.
			$get_attributes = 'novablocks_get_' . str_replace( '-', '_', $block ) . '_attributes';
			if ( function_exists( $get_attributes ) ) {
				$args['attributes'] = call_user_func( $get_attributes );
			}

			if ( file_exists( trailingslashit( $blockpath ) . 'block.json' ) ) {
				register_block_type_from_metadata(
					$blockpath,
					$args
				);
			} else {
				register_block_type( 'novablocks/' . $block, array_merge( $args, [
					'uses_context' => [ 'postId', 'postType', ],
				] ) );
			}
		}
	}
}
add_action( 'init', 'novablocks_register_block_types', 20 );

if ( ! function_exists( 'novablocks_enqueue_packages_scripts' ) ) {

	function novablocks_enqueue_packages_scripts() {

		// For now, we will always enqueue the core scripts and styles.
		wp_enqueue_style( 'novablocks-core-style' );

		if ( novablocks_is_gutenberg() ) {
			wp_enqueue_script( 'novablocks-core' );
			wp_enqueue_style( 'novablocks-core-editor_style' );
		} else {
			wp_enqueue_script( 'novablocks-core/frontend' );
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

		if ( novablocks_block_area_has_blocks( 'header' ) && in_array( $block, [ 'announcement-bar', 'header', 'header-row', 'navigation', 'logo' ] ) ) {
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

/**
 * Filters a given script tag, possibly adding an `integrity` attribute.
 *
 * @see https://developer.wordpress.org/reference/hooks/script_loader_tag/
 *
 * @param string $tag    The `<script>` tag for the enqueued script.
 * @param string $handle The script's registered handle.
 * @param string $src    The script's source URL.
 *
 * @return string The original HTML tag or its augmented version.
 */
function novablocks_script_sri_attributes( string $tag, string $handle, string $src ): string {
	// Only do the thing if it makes sense to do so.
	// (It doesn't make sense for non-ssl pages or local resources on live sites,
	// but it always makes sense to do so in debug mode.)
	if ( ! WP_DEBUG && ( ! is_ssl() || novablocks_is_local_resource( $src ) ) ) {
		return $tag;
	}

	if ( $integrity_hash = wp_scripts()->get_data( $handle, 'integrity' ) ) {
		// Prevent adding attribute when already added.
		if ( ! preg_match( '#\sintegrity(=|>|\s)#', $tag ) ) {
			$tag = preg_replace( ':(?=></script>):', ' integrity="' . $integrity_hash . '"', $tag, 1 );
		}
	}

	if ( $crossorigin = wp_scripts()->get_data( $handle, 'crossorigin' ) ) {
		// Prevent adding attribute when already added.
		if ( ! preg_match( '#\scrossorigin(=|>|\s)#', $tag ) ) {
			$tag = preg_replace( ':(?=></script>):', ' crossorigin="' . $crossorigin . '"', $tag, 1 );
		}
	}

	return $tag;
}

add_filter( 'script_loader_tag', 'novablocks_script_sri_attributes', 999, 3 );

/**
 * Checks a URL to determine whether or not the resource is "remote"
 * (served by a third-party) or whether the resource is local (and
 * is being served by the same webserver as this plugin is run on.)
 *
 * @param string $uri The URI of the resource to inspect.
 *
 * @return bool True if the resource is local, false if the resource is remote.
 */
function novablocks_is_local_resource( string $uri ): bool {
	$resource_src_host = parse_url( $uri, PHP_URL_HOST );
	$site_host         = parse_url( get_site_url(), PHP_URL_HOST );

	return 0 === strpos( $resource_src_host, $site_host );
}
