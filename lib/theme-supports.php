<?php
/**
 * Handle theme supports.
 *
 * @since   2.0.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

/**
 * Determine if a certain block is supported by the current theme.
 *
 * This way you can use current_theme_supports() with a second parameter like so:
 * current_theme_supports( 'novablocks', 'hero');
 * current_theme_supports( 'novablocks', [ 'hero', 'media', ] );
 *
 * @param bool         $supports
 * @param string|array $args           A single block or a list of blocks to search for.
 *                                     When multiple, we use AND among them, so all need to be supported.
 * @param array|bool   $theme_features The list of novablocks blocks (as strings) that the current theme supports.
 *
 * @return bool
 */
function novablocks_handle_theme_supports( bool $supports, $args, $theme_features ): bool {
	if ( empty( $args ) || empty( $theme_features ) ) {
		return $supports;
	}

	if ( is_string( $args ) ) {
		$args = [ $args ];
	}

	if ( is_array( $theme_features ) ) {
		$theme_features = reset( $theme_features );
	}
	if ( is_string( $theme_features ) ) {
		$theme_features = [ $theme_features ];
	}
	if ( ! is_array( $theme_features ) ) {
		return $supports;
	}

	foreach ( $args as $arg ) {
		if ( ! in_array( $arg, $theme_features ) ) {
			return false;
		}
	}

	return true;
}

add_filter( 'current_theme_supports-novablocks', 'novablocks_handle_theme_supports', 10, 3 );

function novablocks_get_theme_support(): array {
	$theme_support = get_theme_support( 'novablocks' );
	$theme_support = is_array( $theme_support ) ? $theme_support[0] : false;
	$theme_support = novablocks_normalize_theme_support( $theme_support );

	$required = [
		'header-row'     => [
			'name'    => 'header-row',
			'enabled' => true,
		],
		'supernova'      => [
			'name'    => 'supernova',
			'enabled' => true,
		],
		'supernova-item' => [
			'name'    => 'supernova-item',
			'enabled' => true,
		],
	];

	$default = [
		'hero'      => [
			'name'    => 'hero',
			'enabled' => true,
		],
		'media'     => [
			'name'    => 'media',
			'enabled' => true,
		],
		'slideshow' => [
			'name'    => 'slideshow',
			'enabled' => true,
		],
	];

	if ( class_exists( 'PixelgradeCare_CPT_Metafields' )
	     && function_exists( 'pixcare_cpt_metafields_get_post_metafields' ) ) {

		$default['cpt-metafields'] = [
			'name'    => 'cpt-metafields',
			'enabled' => true,
		];
	}

	$default['facetwp-facet'] = [
		'name'    => 'facetwp-facet',
		'enabled' => true,
	];
	$default['facetwp-filter'] = [
		'name'    => 'facetwp-filter',
		'enabled' => true,
	];
	$default['facetwp-selections'] = [
		'name'    => 'facetwp-selections',
		'enabled' => true,
	];
	$default['facetwp-title'] = [
		'name'    => 'facetwp-title',
		'enabled' => true,
	];
	$default['facetwp-toggle'] = [
		'name'    => 'facetwp-toggle',
		'enabled' => true,
	];

	if ( is_array( $theme_support ) ) {
		$theme_support = novablocks_array_merge_recursive_distinct( $required, $default, $theme_support );
		ksort( $theme_support );
	} else {
		$theme_support = novablocks_array_merge_recursive_distinct( $required, $default );
	}

	return $theme_support;
}

/**
 * Makes sure that the theme support is in a standard format.
 *
 * We want block entries with string keys (usually the block name) and array value with at least the `name` entry with the block name.
 *
 * @param $theme_support
 *
 * @return array|mixed
 */
function novablocks_normalize_theme_support( $theme_support ) {
	if ( ! is_array( $theme_support ) ) {
		return $theme_support;
	}

	$standard_theme_support = [];
	foreach ( $theme_support as $key => $value ) {
		if ( is_string( $value ) ) {
			if ( ! isset( $standard_theme_support[ $value ] ) ) {
				$standard_theme_support[ $value ] = [
					'name'     => '',
					'enabled'  => false,
					'supports' => [],
				];
			}
			$standard_theme_support[ $value ]['name']    = $value;
			$standard_theme_support[ $value ]['enabled'] = true;
			continue;
		}

		if ( 'doppler' === $key && is_array( $value ) ) {
			// We have the old entry that defined what blocks support the Doppler effect.
			// Add the doppler effect as a supported feature for each block in the list.
			foreach ( $value as $doppler_block ) {
				// Remove the `novablocks` namespace.
				$doppler_block = str_replace( 'novablocks/', '', $doppler_block );
				if ( ! isset( $standard_theme_support[ $doppler_block ] ) ) {
					$standard_theme_support[ $doppler_block ] = [
						'name'     => '',
						'enabled'  => false,
						'supports' => [],
					];
				}

				$standard_theme_support[ $doppler_block ]['supports'][] = 'doppler';
				$standard_theme_support[ $doppler_block ]['supports']   = array_unique( $standard_theme_support[ $doppler_block ]['supports'] );
			}
			continue;
		}

		if ( 'blobs' === $key && is_array( $value ) ) {
			// We have the old entry that defined what blocks support the Blobs effect.
			// Add the blobs effect as a supported feature for each block in the list.
			foreach ( $value as $blobs_block ) {
				// Remove the `novablocks` namespace.
				$blobs_block = str_replace( 'novablocks/', '', $blobs_block );
				if ( ! isset( $standard_theme_support[ $blobs_block ] ) ) {
					$standard_theme_support[ $blobs_block ] = [
						'name'     => '',
						'enabled'  => false,
						'supports' => [],
					];
				}

				$standard_theme_support[ $blobs_block ]['supports'][] = 'blobs';
				$standard_theme_support[ $blobs_block ]['supports']   = array_unique( $standard_theme_support[ $blobs_block ]['supports'] );
			}
			continue;
		}

		$standard_theme_support[ $key ] = $value;
	}

	// Filter out any entry that doesn't have a name entry.
	$standard_theme_support = array_filter( $standard_theme_support, function ( $entry ) {
		if ( empty( $entry['name'] ) ) {
			return false;
		}

		return true;
	} );

	ksort( $standard_theme_support );

	return $standard_theme_support;
}

function novablocks_is_block_supported( string $block_name ): bool {
	$support = novablocks_get_theme_support();

	foreach ( $support as $supported_block ) {
		if ( ! empty( $supported_block['name'] )
		     && $block_name === $supported_block['name']
		     && ! empty( $supported_block['enabled'] ) ) {

			return true;
		}
	}

	return false;
}
