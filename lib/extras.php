<?php

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

function novablocks_register_settings() {
	register_setting(
		'novablocks',
		'novablocks_google_maps_api_key',
		[
			'type'              => 'string',
			'show_in_rest'      => true,
			'sanitize_callback' => 'sanitize_text_field',
		]
	);
}

add_action( 'admin_init', 'novablocks_register_settings' );
add_action( 'rest_api_init', 'novablocks_register_settings' );

function novablocks_register_meta() {

	if ( defined( 'NOVABLOCKS_USE_POST_META_ATTRIBUTES' ) && NOVABLOCKS_USE_POST_META_ATTRIBUTES ) {
		register_meta( 'post', 'novablocks_hero_scroll_indicator', [
			'type'         => 'boolean',
			'single'       => true,
			'show_in_rest' => true,
		] );

		register_meta( 'post', 'novablocks_hero_position_indicators', [
			'type'         => 'boolean',
			'single'       => true,
			'show_in_rest' => true,
		] );
	}
}

add_action( 'init', 'novablocks_register_meta' );

/**
 * @param bool|array              $allowed_block_types  Array of block type slugs, or boolean to enable/disable all.
 *                                                      Default true (all registered block types supported).
 * @param WP_Block_Editor_Context $block_editor_context The current block editor context.
 *
 * @return bool|string[]
 */
function novablocks_allowed_block_types( $allowed_block_types, WP_Block_Editor_Context $block_editor_context ) {
	if ( ! empty( $block_editor_context->post ) ) {
		$post = $block_editor_context->post;
		if ( $post->post_type === 'block_area' ) {

			if ( $post->post_name === 'header' ) {
				return [ 'novablocks/header' ];
			}

			if ( $post->post_name === 'promo-bar' ) {
				return [ 'novablocks/announcement-bar', 'novablocks/openhours', 'core/paragraph' ];
			}
		}
	}

	return $allowed_block_types;
}

add_filter( 'allowed_block_types_all', 'novablocks_allowed_block_types', 10, 2 );

function novablocks_get_alignment( array $attributes ): array {

	if ( ! empty( $attributes['contentPosition'] ) ) {
		return explode( ' ', $attributes['contentPosition'] );
	}

	$verticalAlignment   = 'center';
	$horizontalAlignment = 'center';

	if ( isset( $attributes['verticalAlignment'] ) ) {
		$verticalAlignment = $attributes['verticalAlignment'];
	}

	if ( isset( $attributes['horizontalAlignment'] ) ) {
		$horizontalAlignment = $attributes['horizontalAlignment'];
	}

	return [
		$verticalAlignment,
		$horizontalAlignment,
	];
}

function novablocks_get_alignment_classes( array $attributes ): array {
	$classes = [];

	$alignment = novablocks_get_alignment( $attributes );

	$classes[] = 'novablocks-u-valign-' . $alignment[0];
	$classes[] = 'novablocks-u-halign-' . $alignment[1];

	return $classes;
}

function novablocks_get_block_extra_classes( array $attributes ): array {
	$classes = novablocks_get_alignment_classes( $attributes );

	if ( ! empty( $attributes['contentPadding'] ) ) {
		$classes[] = 'novablocks-u-spacing-' . $attributes['contentPadding'];
	}

	$classes[] = 'novablocks-u-background';
	if ( ! empty( $attributes['overlayFilterStyle'] ) ) {
		$classes[] = 'novablocks-u-background-' . $attributes['overlayFilterStyle'];
	}

	return $classes;
}

function novablocks_get_collection_attributes() {
	return novablocks_get_attributes_from_json( 'packages/collection/src/collection-attributes.json' );
}

function novablocks_get_attributes_with_defaults( array $attributes, array $attributes_config ): array {

	foreach ( $attributes_config as $key => $value ) {

		if ( ! isset( $attributes[ $key ] ) ) {

			if ( isset( $value['source'] ) && $value['source'] === 'meta' ) {
				$attributes[ $key ] = get_post_meta( get_the_ID(), $value['meta'], true );
			} elseif ( isset( $value['default'] ) ) {
				$attributes[ $key ] = $value['default'];
			} else {
				// Put some value since some might use it. We should not get here, but do our best if we do.
				$attributes[ $key ] = '';
			}
		}
	}

	return $attributes;
}

function novablocks_get_focal_point_style( array $focalPoint ): string {
	$focalPointX = intval( $focalPoint['x'] * 10000 ) / 100 . '%';
	$focalPointY = intval( $focalPoint['y'] * 10000 ) / 100 . '%';

	return 'object-position: ' . $focalPointX . ' ' . $focalPointY . ';';
}

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

	if ( is_array( $theme_support ) ) {
		$theme_support = novablocks_array_merge_recursive_distinct( $required, $default, $theme_support );
		ksort( $theme_support );
	} else {
		$theme_support = novablocks_array_merge_recursive_distinct( $required, $default );
	}

	return $theme_support;
}

/**
 * Merge arrays recursively and distinct
 *
 * Merges any number of arrays / parameters recursively, replacing
 * entries with string keys with values from latter arrays.
 * If the entry or the next value to be assigned is an array, then it
 * automagically treats both arguments as an array.
 * Numeric entries are appended, not replaced, but only if they are
 * unique
 *
 * An entry can be specifically removed if in the same key entry in the right-hand arrays has a value of  null|`null`.
 *
 * @link   http://www.php.net/manual/en/function.array-merge-recursive.php#96201
 *
 * @param array ...     Variable list of arrays to recursively merge.
 *
 * @param array $base Initial array to merge.
 *
 * @return array
 *
 * @author Mark Roduner <mark.roduner@gmail.com>
 */
function novablocks_array_merge_recursive_distinct(): array {
	$arrays = func_get_args();
	$base   = array_shift( $arrays );
	if ( ! is_array( $base ) ) {
		$base = empty( $base ) ? [] : [ $base ];
	}
	foreach ( $arrays as $append ) {
		if ( ! is_array( $append ) ) {
			$append = [ $append ];
		}
		foreach ( $append as $key => $value ) {
			if ( ! array_key_exists( $key, $base ) && ! is_numeric( $key ) ) {
				$base[ $key ] = $value;
				continue;
			}

			if ( array_key_exists( $key, $base ) && ( null === $value || 'null' === $value ) ) {
				unset( $base[ $key ] );
				continue;
			}

			if ( is_array( $value ) || ( array_key_exists( $key, $base ) && is_array( $base[ $key ] ) ) ) {
				if ( ! isset( $base[ $key ] ) ) {
					$base[ $key ] = [];
				}
				$base[ $key ] = novablocks_array_merge_recursive_distinct( $base[ $key ], $value );
			} else if ( is_numeric( $key ) ) {
				if ( ! in_array( $value, $base ) ) {
					$base[] = $value;
				}
			} else {
				$base[ $key ] = $value;
			}
		}
	}

	return $base;
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

function novablocks_get_attributes_from_json( $path ) {
	$plugin_path = novablocks_get_plugin_path();
	$filename    = trailingslashit( $plugin_path ) . $path;
	if ( ! file_exists( $filename ) ) {
		return [];
	}

	return json_decode( file_get_contents( $filename ), true );
}

function novablocks_camel_case_to_kebab_case( string $string ): string {
	return strtolower( preg_replace( '%([A-Z])([a-z])%', '-\1\2', $string ) );
}

function novablocks_kebab_case_to_camel_case( string $string ): string {
	$str = str_replace( '-', '', ucwords( $string, '-' ) );

	return lcfirst( $str );
}

function novablocks_get_data_attributes( array $data_attributes_array, array $attributes, array $blacklist = [] ): array {
	$data_attributes   = [];
	$default_blacklist = [ 'align' ];
	$blacklist         = array_merge( $default_blacklist, $blacklist );

	foreach ( $blacklist as $blacklistAttribute ) {

		if ( ( $key = array_search( $blacklistAttribute, $data_attributes_array ) ) !== false ) {
			unset( $data_attributes_array[ $key ] );
		}
	}

	foreach ( $data_attributes_array as $data_attribute ) {
		$attribute = novablocks_kebab_case_to_camel_case( $data_attribute );

		if ( ! isset( $attributes[ $attribute ] ) ) {
			continue;
		}

		$value = $attributes[ $attribute ];

		// The value may be an array, so we JSON encode everything since json_encode() won't do anything for singular values.
		if ( is_array( $value ) ) {
			$value = json_encode( $value );
		}

		if ( $value === false ) {
			continue;
		}

		$data_attributes[] = 'data-' . $data_attribute . "='" . esc_attr( $value ) . "'";
	}

	return $data_attributes;
}

function novablocks_render_media_composition( array $attributes ) {
	echo novablocks_get_media_composition_markup( $attributes );
}

function novablocks_get_media_composition_markup( array $attributes, array $context = [] ): string {

	$output = '';

	$images = [];
	if ( ! empty( $attributes['images'] ) ) {
		$images = $attributes['images'];
	}
	if ( ! empty( $attributes['gallery'] ) ) {
		$images = $attributes['gallery'];
	}

	if ( empty( $images ) || ! is_array( $images ) ) {
		return $output;
	}

	if ( count( $images ) === 1 ) {
		return novablocks_get_collection_card_media_markup( $images[0], $attributes, $context );
	}

	$attributes_config = novablocks_merge_attributes_from_array( [
		'packages/media-composition/src/attributes.json',
	] );

	$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes_config ) );
	$data_attributes       = novablocks_get_data_attributes( $data_attributes_array, $attributes, [ 'images' ] );

	$output .= '<div class="novablocks-media-composition novablocks-doppler__target" ' . join( ' ', $data_attributes ) . '>';
	$output .= '<div class="novablocks-media-composition__grid">';

	foreach ( $images as $index => $image ) {

		if ( is_string( $image ) ) {
			$image = json_decode( $image );
		}

		if ( ! empty( $image ) ) {
			$image = ( array ) $image;
		}

		$url             = '';
		$has_description = false;

		$attachment       = false;
		$attachment_image = false;
		if ( is_numeric( $image['id'] ) && intval( $image['id'] ) > 0 ) {
			$attachment = get_post( $image['id'] );

			if ( ! empty( $attachment ) && $attachment->post_type === 'attachment' ) {
				$attachment_image = wp_get_attachment_image_src( $image['id'], 'novablocks_big' );
				if ( ! empty( $attachment_image[0] ) ) {
					$url = $attachment_image[0];
				}

				if ( ! empty( $attachment->post_content ) ) {
					$has_description = true;
				}
			}
		}

		$has_caption = ! empty( $image['caption'] );

		// Fallback for import.
		if ( empty( $url ) ) {
			$url = novablocks_get_image_url( $image, 'novablocks_large' );
		}

		if ( ! empty( $url ) ) {
			$output .= '<div class="novablocks-media-composition__grid-item">';
			$output .= '<div class="novablocks-media-composition__grid-item-media">' . PHP_EOL;

			$data_attrs = 'data-shape-modeling-target data-shape-modeling-shape-offset="' . esc_attr( $index ) . '"';

			if ( isset( $image['type'] ) && $image['type'] === 'video' ) {
				$output .= '<video class="novablocks-media-composition__image" ' . $data_attrs . ' muted autoplay loop playsinline src="' . esc_url( $image['url'] ) . '"/>' . PHP_EOL;
			} else {
				if ( ! empty( $attachment ) && $attachment->post_type === 'attachment' ) {
					// Since we have an attachment, generate a WordPress-standard image with all the bells and whistles (like srcsets).
					// We use a bigger image size ('novablocks_big') since we rely on srcsets for the browser to load smaller images when that is the case.

					// Now try to determine some closer-to-reality sizes than the default ones (ie. full-width images).
					$sizes = [];
					if ( ! empty( $attachment_image ) && is_array( $attachment_image ) ) {
						list( $attachment_image_src, $attachment_image_width, $attachment_image_height ) = $attachment_image;

						// Construct the sizes list, starting with the smallest screen sizes.
						// Please remember that all this refers to sizes from the responsive-images mechanism's point-of-view.
						// For example, "full-width images" means that we `assume` images will occupy the entire screen width,
						// not that they will actually do so. Heuristics is everywhere here.

						// Next we will try to rely on the collection layout to do better than "everything is full-width".
						// 1. Classic layout -> we can rely on the number of columns to do some safe guesses.
						if ( ! empty( $attributes['layoutStyle'] )
						     && 'classic' === $attributes['layoutStyle']
						     && ! empty( $attributes['columns'] ) ) {

							// All images will be 100 divided by the number of columns, in vw.
							$column_ratio = round( 100 / $attributes['columns'] );

							// But, we need to account for taller layouts that feature the image as a background.
							if ( ! empty( $attributes['cardLayout'] ) && 'stacked' === $attributes['cardLayout'] ) {
								if ( ! empty( $attributes['minHeightFallback'] ) && $attributes['minHeightFallback'] >= 50 ) {
									if ( $attributes['minHeightFallback'] < 75 ) {
										// We increase the ratio of each column.
										$column_ratio = round( $column_ratio * 1.25 );
									} else {
										// This is a very tall image. Let it be since we don't want blurry images.
										$column_ratio = 100;
									}
								}
							} elseif ( ! empty( $context['companionContent'] )
							           && ( 'horizontal' === $attributes['cardLayout'] || 'horizontal-reverse' === $attributes['cardLayout'] ) ) {
								// If we have content horizontally next to the media (not over it since that it is covered above),
								// we can do better depending on the content width.
								$column_ratio = round( ( 100 - $attributes['contentAreaWidth'] ) / 100 * $column_ratio );
							} else {
								// We can reduce the ratio by the number of images involved in the composition.
								// The more images involved, the more likely they occupy a smaller space.
								$column_ratio = $column_ratio * ( 1 / count( $images ) * 1.5 );
							}

							if ( ! empty( $attributes['imageResizing'] ) && $attributes['imageResizing'] !== 'original' ) {
								// Increase the ratio for non-original image resizing setting (like stretch) to play it safe.
								$column_ratio *= 1.2;
							}

							// We have no use for 100vw as a hint for the browser to pick an image from the srcset.
							// (ie. it makes no sense).
							if ( $column_ratio < 100 ) {
								$sizes[] = intval( $column_ratio ) . 'vw';
							}
						}

						// 2. Carousel layout -> we can rely on the number of columns to do some safe guesses.
						if ( ! empty( $attributes['layoutStyle'] )
						     && 'carousel' === $attributes['layoutStyle']
						     && ! empty( $attributes['columns'] ) ) {

							// A safe bet is to consider the media composition images as occupying 60vw when there are no columns.
							if ( $attributes['columns'] === 1 ) {
								$column_ratio = 60;
							} else {
								// All images will be 100 divided by the number of columns, in vw.
								$column_ratio = round( 100 / $attributes['columns'] );
							}

							// But, we need to account for taller layouts that feature the image as a background.
							if ( ! empty( $attributes['cardLayout'] ) && 'stacked' === $attributes['cardLayout'] ) {
								if ( ! empty( $attributes['minHeightFallback'] ) && $attributes['minHeightFallback'] >= 50 ) {
									if ( $attributes['minHeightFallback'] < 75 ) {
										// We increase the ratio of each column.
										$column_ratio = round( $column_ratio * 1.25 );
									} else {
										// This is a very tall layout. Let it be since we don't want blurry images.
										$column_ratio = 100;
									}
								}
							} elseif ( ! empty( $context['companionContent'] )
							           && ( 'horizontal' === $attributes['cardLayout'] || 'horizontal-reverse' === $attributes['cardLayout'] ) ) {
								// If we have content horizontally next to the media (not over it since that it is covered above),
								// we can do better depending on the content width.
								$column_ratio = round( ( 100 - $attributes['contentAreaWidth'] ) / 100 * $column_ratio );
							} else {
								// We can reduce the ratio by the number of images involved in the composition.
								// The more images involved, the more likely they occupy a smaller space.
								$column_ratio = $column_ratio * ( 1 / count( $images ) * 1.5 );
							}

							if ( ! empty( $attributes['imageResizing'] ) && $attributes['imageResizing'] !== 'original' ) {
								// Increase the ratio for non-original image resizing setting (like stretch) to play it safe.
								$column_ratio *= 1.2;
							}

							// We have no use for 100vw as a hint for the browser to pick an image from the srcset.
							// (ie. it makes no sense).
							if ( $column_ratio < 100 ) {
								$sizes[] = intval( $column_ratio ) . 'vw';
							}
						}
					}

					// If we have determined some sizes, "wrap" them in some safety nets.
					// Otherwise, we will use some default ones.
					if ( ! empty( $sizes ) ) {
						// 768px or smaller -> Full-width images.
						// This is a safe bet due to our design choices.
						array_unshift( $sizes, '(max-width: 768px) 100vw' );
					} elseif ( ! empty( $attachment_image_width ) ) {
						$sizes = [
							'(max-width: ' . $attachment_image_width . 'px) 100vw',
							$attachment_image_width . 'px',
						];
					}

					// We use the smaller `novablocks_large` image size as a fallback
					// since we rely on srcsets that include all image sizes, even bigger ones.
					$output .= wp_get_attachment_image( $attachment->ID, 'novablocks_large', false, [
							'data-shape-modeling-target'       => '',
							'data-shape-modeling-shape-offset' => $index,
							'class'                            => 'novablocks-media-composition__image',
							'sizes'                            => ! empty( $sizes ) ? implode( ', ', $sizes ) : false,
						] ) . PHP_EOL;
				} else {
					$output .= '<img class="novablocks-media-composition__image" ' . $data_attrs . ' src="' . esc_url( $url ) . '" alt="' . ( ! empty( $image['alt'] ) ? esc_attr( $image['alt'] ) : '' ) . '" />' . PHP_EOL;
				}
			}

			$output .= '</div>' . PHP_EOL;

			if ( $has_caption || $has_description ) {
				$output .= '<div class="novablocks-media-composition__grid-item-info">';

				if ( $has_caption ) {
					$output .= '<div class="novablocks-media-composition__grid-item-caption">' . wptexturize( $image['caption'] ) . '</div>';
				}

				if ( $has_description ) {
					$output .= '<div class="novablocks-media-composition__grid-item-description">' . wptexturize( $attachment->post_content ) . '</div>';
				}

				$output .= '</div>';
			}

			$output .= '</div>';
		}
	}

	$output .= '</div>';
	$output .= '</div>';

	return $output;
}

function novablocks_get_card_media_padding_top( $containerHeight ) {
	$containerHeight = $containerHeight / 50 - 1;

	if ( $containerHeight < 0 ) {
		$containerHeight *= 3;
	}

	$numerator   = 1;
	$denominator = 1;

	$containerHeight = min( max( - 3, $containerHeight ), 1 );

	if ( $containerHeight > 0 ) {
		$numerator = 1 + $containerHeight;
	}

	if ( $containerHeight < 0 ) {
		$denominator = 1 + abs( $containerHeight );
	}

	return ( $numerator * 100 / $denominator );
}

function novablocks_get_color_classes( array $attributes ): array {

	$classes = [];

	if ( ! empty( $attributes['blockStyle'] ) ) {
		$classes[] = 'block-is-' . $attributes['blockStyle'];
	} else {
		$classes[] = 'block-is-basic';
	}

	if ( ! empty( $attributes['contentStyle'] ) ) {
		$classes[] = 'content-is-' . $attributes['contentStyle'];
	} else {
		$classes[] = 'content-is-basic';
	}

	return $classes;
}

function novablocks_get_space_and_sizing_css( array $attributes, $advanced = false ): array {

	$spacing_props = novablocks_get_spacing_css( $attributes );

	if ( $advanced ) {
		$spacing_props = novablocks_get_spacing_advanced_css( $attributes );
	}

	return array_merge(
		$spacing_props,
		novablocks_get_sizing_css( $attributes )
	);
}

function novablocks_get_media_composition_css( array $attributes ): array {
	return [
		'--nb-media-composition-gap: ' . $attributes['elementsDistance'] . 'px',
	];
}

function novablocks_get_color_signal_css( array $attributes ): array {
	return [
		'--nb-emphasis-area: ' . $attributes['emphasisArea'],
	];
}

function novablocks_get_overlay_filter_css( array $attributes ): array {
	return [
		'--nb-overlay-filter-strength: ' . $attributes['overlayFilterStrength'] / 100,
	];
}

function novablocks_get_sizing_css( array $attributes ): array {
	return [
		'--nb-card-layout-gap-modifier: ' . $attributes['layoutGutter'] / 100,
		'--nb-card-content-padding-multiplier: ' . $attributes['contentPadding'] / 100,
		'--nb-card-media-padding-multiplier: ' . $attributes['imagePadding'] / 100,
		'--nb-card-media-container-height: ' . $attributes['mediaContainerHeight'],
		'--nb-card-media-padding-top: ' . novablocks_get_card_media_padding_top( $attributes['thumbnailAspectRatio'] ) . '%',
		'--nb-card-media-object-fit: ' . ( $attributes['imageResizing'] === 'cropped' ? 'cover' : 'scale-down' ),
		'--nb-minimum-container-height: ' . $attributes['minHeightFallback'] . 'vh',
		'--nb-card-content-area-width: ' . $attributes['contentAreaWidth'] . '%',
		'--nb-spacing-modifier: ' . $attributes['spacingModifier'],
	];
}

function novablocks_get_collection_layout_css( array $attributes ): array {
	return [
		'--nb-collection-columns-count: ' . $attributes['columns'],
		'--nb-grid-spacing-modifier: ' . $attributes['gridGap'],
	];
}

function novablocks_get_spacing_css( array $attributes ): array {

	$blockTopSpacing       = $attributes['blockTopSpacing'];
	$blockBottomSpacing    = $attributes['blockBottomSpacing'];
	$emphasisTopSpacing    = $attributes['emphasisTopSpacing'] ?? 0;
	$emphasisBottomSpacing = $attributes['emphasisBottomSpacing'] ?? 0;

	return [
		'--nb-block-top-spacing: ' . $blockTopSpacing,
		'--nb-block-bottom-spacing: ' . $blockBottomSpacing,
		'--nb-emphasis-top-spacing: ' . $emphasisTopSpacing,
		'--nb-emphasis-bottom-spacing: ' . $emphasisBottomSpacing,
	];
}

function novablocks_get_spacing_advanced_css( array $attributes ): array {
	$verticalAlignment = $attributes['verticalAlignment'] ?? 'center';

	$blockTopSpacing       = $attributes['blockTopSpacing'];
	$blockBottomSpacing    = $attributes['blockBottomSpacing'];
	$emphasisTopSpacing    = $verticalAlignment === 'top' ? abs( $attributes['emphasisTopSpacing'] ) : $attributes['emphasisTopSpacing'];
	$emphasisBottomSpacing = $verticalAlignment === 'bottom' ? abs( $attributes['emphasisBottomSpacing'] ) : $attributes['emphasisBottomSpacing'];

	return [
		'--nb-block-top-spacing: ' . $blockTopSpacing,
		'--nb-block-bottom-spacing: ' . $blockBottomSpacing,
		'--nb-emphasis-top-spacing: ' . $emphasisTopSpacing,
		'--nb-emphasis-bottom-spacing: ' . $emphasisBottomSpacing,
	];
}

if ( ! function_exists( 'novablocks_get_collection_output' ) ) {

	function novablocks_get_collection_output( array $attributes, $content, $block ): string {

		if ( 'auto' === $attributes['contentType'] ) {
			$content = novablocks_get_posts_collection_cards_markup( $attributes, $content, $block );
		}

		$collection_header = novablocks_get_collection_header_output( $attributes );

		if ( empty( $collection_header ) && empty( $content ) ) {
			return '';
		}

		$layout_classes = [
			'nb-collection__layout',
			'nb-collection__layout--' . $attributes['layoutStyle'],
			'nb-collection__layout--' . $attributes['carouselLayout'] . '-width',
		];

		$collection_classes = [
			'nb-collection',
			'align' . $attributes['align'],
			'nb-block-spacing-container',
		];

		$output                  = '<div class="' . esc_attr( join( ' ', $collection_classes ) ) . '">';
		$collection_header_class = 'nb-collection__header';

		if ( ! empty( $attributes['showCollectionSubtitle'] ) && ! empty( $attributes['subtitle'] ) ) {
			$collection_header_class .= ' nb-collection__header--has-description';
		}

		if ( ! empty( $collection_header ) ) {
			$output .= '<div class="' . $collection_header_class . '">
				<div class="nb-collection__inner-container">
					' . $collection_header . '
				</div>
			</div>';
		}

		$output .= '<div class="nb-collection__body">
				<div class="' . esc_attr( join( ' ', $layout_classes ) ) . '">
					' . $content . '
				</div>
			</div>';
		$output .= '</div>';

		return $output;
	}
}

function novablocks_render_scroll_indicator( array $attributes ) {
	if ( empty( $attributes['scrollIndicatorBlock'] ) ) {
		return;
	}

	$scrollIndicatorClasses = [ 'nb-scroll-indicator', ];
	$blockHeight            =
		( ! empty( $attributes['scrollingEffect'] ) && $attributes['scrollingEffect'] === 'doppler' )
			? $attributes['minHeightFallback'] * 2
			: $attributes['minHeightFallback'];

	if ( $blockHeight > 100 ) {
		$scrollIndicatorClasses[] = 'nb-scroll-indicator--middle';
	}
	?>
	<div class="<?php echo esc_attr( join( ' ', $scrollIndicatorClasses ) ); ?>">
		<svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 50C55 50 45 0 80 0C115 0 105 50 160 50H0Z"/>
		</svg>
	</div>
	<?php
}

function novablocks_get_collection_header_output( array $attributes ): string {
	$titleTag         = 'h' . $attributes['collectionTitleLevel'];
	$fontSizeModifier = 'has-' . $attributes['collectionTitleFontSize'] . '-font-size';

	$output = '';

	if ( ! empty( $attributes['showCollectionTitle'] ) && ! empty( $attributes['title'] ) ) {
		$output .= '<' . $titleTag . ' class="nb-collection__title wp-block alignfull ' . $fontSizeModifier . '">';
		$output .= $attributes['title'];
		$output .= '</' . $titleTag . '>';
	}

	if ( ! empty( $attributes['showCollectionSubtitle'] ) && ! empty( $attributes['subtitle'] ) ) {
		$output .= '<p class="nb-collection__subtitle wp-block is-style-lead alignfull">' . $attributes['subtitle'] . '</p>';
	}

	return $output;
}

/**
 * @param array $media      Details about the actual media (image/video).
 * @param array $attributes The attributes of the block containing this media (probably supernova).
 *
 * @return string
 *
 */
function novablocks_get_collection_card_media_markup( array $media, array $attributes, array $context = [] ): string {

	$media = wp_parse_args( $media, [
		'type'  => 'image',
		'url'   => '',
		'alt'   => '',
		'sizes' => [],
		'id'    => false,
	] );

	$output = '';

	$url = '';

	$attachment       = false;
	$attachment_image = false;
	if ( is_numeric( $media['id'] ) && intval( $media['id'] ) > 0 ) {
		$attachment = get_post( $media['id'] );

		if ( ! empty( $attachment ) && $attachment->post_type === 'attachment' ) {
			$attachment_image = wp_get_attachment_image_src( $media['id'], 'novablocks_big' );
			if ( ! empty( $attachment_image[0] ) ) {
				$url = $attachment_image[0];
			}
		}
	}

	// Fallback for import.
	if ( empty( $url ) ) {
		$url = novablocks_get_image_url( $media, 'novablocks_medium' );
	}

	if ( ! empty( $url ) ) {
		if ( isset( $media['type'] ) && $media['type'] === 'video' ) {
			$output .= '<video class="supernova-item__media novablocks-doppler__target" data-shape-modeling-target muted autoplay loop playsinline src="' . esc_url( $media['url'] ) . '"></video>';
		} else {
			if ( ! empty( $attachment ) && $attachment->post_type === 'attachment' ) {
				// Since we have an attachment, generate a WordPress-standard image with all the bells and whistles (like srcsets).
				// We use a bigger image size ('novablocks_big') since we rely on srcsets for the browser to load smaller images when that is the case.

				// Now try to determine some closer-to-reality sizes than the default ones (ie. full-width images).
				$sizes = [];
				if ( ! empty( $attachment_image ) && is_array( $attachment_image ) ) {
					list( $attachment_image_src, $attachment_image_width, $attachment_image_height ) = $attachment_image;

					// Construct the sizes list, starting with the smallest screen sizes.
					// Please remember that all this refers to sizes from the responsive images mechanism's point-of-view.
					// For example, "full-width images" means that we `assume` images will occupy the entire screen width,
					// not that they will actually do so. Heuristics is everywhere here.

					// Next we will try to rely on the collection layout to do better than "everything is full-width".
					// 1. Classic layout -> we can rely on the number of columns to do some safe guesses.
					if ( ! empty( $attributes['layoutStyle'] )
					     && 'classic' === $attributes['layoutStyle']
					     && ! empty( $attributes['columns'] ) ) {

						// All images will be 100 divided by the number of columns, in vw.
						$column_ratio = 100 / $attributes['columns'];

						// But, we need to account for taller layouts that feature the image as a background.
						if ( ! empty( $attributes['cardLayout'] ) && 'stacked' === $attributes['cardLayout'] ) {
							if ( ! empty( $attributes['minHeightFallback'] ) && $attributes['minHeightFallback'] >= 50 ) {
								if ( $attributes['minHeightFallback'] < 75 ) {
									// We increase the ratio of each column.
									$column_ratio = $column_ratio * 1.25;
								} else {
									// This is a very tall image. Let it be since we don't want blurry images.
									$column_ratio = 100;
								}
							}
						} elseif ( ! empty( $context['companionContent'] )
						           && ( 'horizontal' === $attributes['cardLayout'] || 'horizontal-reverse' === $attributes['cardLayout'] ) ) {
							// If we have content horizontally next to the media (not over it since that it is covered above),
							// we can do better depending on the content width.
							$column_ratio = ( 100 - $attributes['contentAreaWidth'] ) / 100 * $column_ratio;
						}

						if ( ! empty( $attributes['imageResizing'] ) && $attributes['imageResizing'] !== 'original' ) {
							// Increase the ratio for non-original image resizing setting (like stretch) to play it safe.
							$column_ratio *= 1.2;
						}

						// We have no use for 100vw as a hint for the browser to pick an image from the srcset.
						// (ie. it makes no sense).
						if ( $column_ratio < 100 ) {
							$sizes[] = intval( round( $column_ratio ) ) . 'vw';
						}
					}

					// 2. Carousel layout -> we can rely on the number of columns to do some safe guesses.
					if ( ! empty( $attributes['layoutStyle'] )
					     && 'carousel' === $attributes['layoutStyle']
					     && ! empty( $attributes['columns'] ) ) {

						// All images will be 100 divided by the number of columns, in vw.
						$column_ratio = 100 / $attributes['columns'];

						// But, we need to account for taller layouts that feature the image as a background.
						if ( ! empty( $attributes['cardLayout'] ) && 'stacked' === $attributes['cardLayout'] ) {
							if ( ! empty( $attributes['minHeightFallback'] ) && $attributes['minHeightFallback'] >= 50 ) {
								if ( $attributes['minHeightFallback'] < 75 ) {
									// We increase the ratio of each column.
									$column_ratio = $column_ratio * 1.25;
								} else {
									// This is a very tall layout. Let it be since we don't want blurry images.
									$column_ratio = 100;
								}
							}
						} elseif ( ! empty( $context['companionContent'] )
						           && ( 'horizontal' === $attributes['cardLayout'] || 'horizontal-reverse' === $attributes['cardLayout'] ) ) {
							// If we have content horizontally next to the media (not over it since that it is covered above),
							// we can do better depending on the content width.
							$column_ratio = ( 100 - $attributes['contentAreaWidth'] ) / 100 * $column_ratio;
						}

						if ( ! empty( $attributes['imageResizing'] ) && $attributes['imageResizing'] !== 'original' ) {
							// Increase the ratio for non-original image resizing setting (like stretch) to play it safe.
							$column_ratio *= 1.2;
						}

						// We have no use for 100vw as a hint for the browser to pick an image from the srcset.
						// (ie. it makes no sense).
						if ( $column_ratio < 100 ) {
							$sizes[] = intval( round( $column_ratio ) ) . 'vw';
						}
					}

					// 3. Parametric layout -> we don't have much to rely on, but will give it a try.
					// We will divide the grid columns by 2 (assume each image takes 2 columns).
					if ( ! empty( $attributes['layoutStyle'] )
					     && 'parametric' === $attributes['layoutStyle']
					     && ! empty( $attributes['gridcolumns'] ) && ( $attributes['gridcolumns'] / 2 ) > 2 ) {

						// All images will be 100 divided by the number of columns/2, in vw.
						$column_ratio = 100 / ( $attributes['gridcolumns'] / 2 );

						// If the featured item is very large, we will increase the size.
						if ( ! empty( $attributes['featuresize'] ) && $attributes['featuresize'] > 2 ) {
							$column_ratio = 100 / ( $attributes['gridcolumns'] / $attributes['featuresize'] );
						} else {
							// We need to account for taller layouts that feature the image as a background.
							if ( ! empty( $attributes['cardLayout'] ) && 'stacked' === $attributes['cardLayout'] ) {
								if ( ! empty( $attributes['minHeightFallback'] ) && $attributes['minHeightFallback'] >= 50 ) {
									if ( $attributes['minHeightFallback'] < 75 ) {
										// We increase the ratio of each column.
										$column_ratio = $column_ratio * 1.25;
									} else {
										// This is a very tall layout. Let it be since we don't want blurry images.
										$column_ratio = 100;
									}
								}
							} else {
								// The other stacking layouts are much more forgiving in terms of image size.
								// We don't need to do anything right now.
							}
						}

						// We have no use for 100vw as a hint for the browser to pick an image from the srcset.
						// (ie. it makes no sense).
						if ( $column_ratio < 100 ) {
							$sizes[] = intval( round( $column_ratio ) ) . 'vw';
						}
					}
				}

				// If we have determined some sizes, "wrap" them in some safety nets.
				// Otherwise, we will use some default ones.
				if ( ! empty( $sizes ) ) {
					// 768px or smaller -> Full-width images.
					// This is a safe bet due to our design choices.
					array_unshift( $sizes, '(max-width: 768px) 100vw' );
				} elseif ( ! empty( $attachment_image_width ) ) {
					$sizes = [
						'(max-width: ' . $attachment_image_width . 'px) 100vw',
						$attachment_image_width . 'px',
					];
				}

				// We use the smaller `novablocks_large` image size as a fallback
				// since we rely on srcsets that include all image sizes, even bigger ones.
				$output .= wp_get_attachment_image( $attachment->ID, 'novablocks_large', false, [
						'data-shape-modeling-target' => '',
						'class'                      => 'supernova-item__media novablocks-doppler__target',
						'sizes'                      => ! empty( $sizes ) ? implode( ', ', $sizes ) : false,
					] ) . PHP_EOL;
			} else {
				$output .= '<img class="supernova-item__media novablocks-doppler__target" data-shape-modeling-target src="' . esc_url( $url ) . '" alt="' . ( ! empty( $media['alt'] ) ? esc_attr( $media['alt'] ) : '' ) . '" />' . PHP_EOL;
			}
		}
	} else {
		$output .= '<div class="supernova-item__media supernova-item__media--placeholder" data-shape-modeling-target></div>';
	}

	return $output;
}

/**
 * @param       $post
 * @param array $attributes
 *
 * @return string[]
 */
function novablocks_get_card_post_meta( $post, array $attributes ): array {
	$primaryMeta           = '<span class="nb-card__meta--primary">' . novablocks_get_post_card_meta( $post, $attributes['primaryMetadata'] ) . '</span>';
	$secondaryMeta         = '<span class="nb-card__meta--secondary">' . novablocks_get_post_card_meta( $post, $attributes['secondaryMetadata'] ) . '</span>';
	$metaSeparator         = '<span class="nb-card__meta-separator"></span>';
	$secondaryMetaIsOutput = $attributes['secondaryMetadata'] !== 'none';
	$aboveTitleMeta        = '';
	$belowTitleMeta        = '';

	if ( ! empty( $primaryMeta ) && ! empty( $secondaryMeta ) ) {
		$combinedMeta = $primaryMeta;

		if ( $secondaryMetaIsOutput ) {
			$combinedMeta .= $metaSeparator . $secondaryMeta;
		}

	} else {
		$combinedMeta = empty( $primaryMeta ) ? $secondaryMeta : $primaryMeta;
	}

	if ( 'above-title' === $attributes['metadataPosition'] ) {
		$aboveTitleMeta = $combinedMeta;
	}

	if ( 'below-title' === $attributes['metadataPosition'] ) {
		$belowTitleMeta = $combinedMeta;
	}

	if ( 'split' === $attributes['metadataPosition'] ) {
		$aboveTitleMeta = $primaryMeta;
		$belowTitleMeta = $secondaryMeta;
	}

	return [
		$aboveTitleMeta,
		$belowTitleMeta,
	];
}

function novablocks_build_articles_query( array $attributes, $block ): array {
	global $novablocks_rendered_posts_ids;

	if ( ! $novablocks_rendered_posts_ids ) {
		$novablocks_rendered_posts_ids = [];
	}

	$prevent_duplicate_posts = isset( $attributes['preventDuplicatePosts'] ) && $attributes['preventDuplicatePosts'];
	$authors                 = $attributes['authors'] ?? [];
	$categories              = $attributes['categories'] ?? [];
	$tags                    = $attributes['tags'] ?? [];
	$manual_mode             = isset( $attributes['loadingMode'] ) && 'manual' === $attributes['loadingMode'];
	$specific_posts          = $attributes['specificPosts'] ?? [];

	$query_args = [
		'post_status'         => 'publish',
		'suppress_filters'    => false,
		'ignore_sticky_posts' => true,
		'posts_per_page' => isset( $attributes['postsToShow'] ) ? intval( $attributes['postsToShow'] ) : 3,
	];

	if ( $prevent_duplicate_posts ) {
		$query_args['post__not_in'] = $novablocks_rendered_posts_ids;
	}

	if ( $manual_mode && $specific_posts ) {
		$query_args['post__in'] = $specific_posts;
		$query_args['orderby']  = 'post__in';
		unset( $query_args['posts_per_page'] );
	} else if ( ! $manual_mode ) {
		$page_key = isset( $block->context['queryId'] ) ? 'query-' . $block->context['queryId'] . '-page' : 'query-page';
		$page     = empty( $_GET[ $page_key ] ) ? 1 : (int) $_GET[ $page_key ];

		$query_args = array_merge( $query_args, build_query_vars_from_query_block( $block, $page ) );
		// Override the custom query with the global query if needed.
		$use_global_query = ( isset( $block->context['query']['inherit'] ) && $block->context['query']['inherit'] );
		if ( $use_global_query ) {
			global $wp_query;
			if ( $wp_query && isset( $wp_query->query_vars ) && is_array( $wp_query->query_vars ) ) {
				// Unset `offset` because if is set, $wp_query overrides/ignores the paged parameter and breaks pagination.
				unset( $query_args['offset'] );
				$query_args = wp_parse_args( $wp_query->query_vars, $query_args );

				if ( empty( $query_args['post_type'] ) && is_singular() ) {
					$query_args['post_type'] = get_post_type( get_the_ID() );
				}
			}
		}

		if ( $authors && count( $authors ) ) {
			$query_args['author__in'] = $authors;
		}
		if ( $categories && count( $categories ) ) {
			$query_args['category__in'] = novablocks_expand_categories_to_include_subcategories( $categories );
		}
		if ( $tags && count( $tags ) ) {
			$query_args['tag__in'] = $tags;
		}
	}

	return $query_args;
}

function novablocks_expand_categories_to_include_subcategories( $category_ids ) {
	$all_category_ids = $category_ids;

	foreach ( $category_ids as $category_id ) {
		$subcategories = get_terms( 'category', [
			'child_of' => $category_id,
		] );

		// Extract term IDs from subcategories.
		$subcategories_ids = array_map( function ( $term ) {
			return $term->term_id;
		}, $subcategories );

		$all_category_ids = array_merge( $all_category_ids, $subcategories_ids );
	}

	return $all_category_ids;
}

function novablocks_get_image_url( array $image, $size ): string {
	// First, search for the URL of the provided size.
	if ( isset( $image['sizes'][ $size ]['url'] ) ) {
		return $image['sizes'][ $size ]['url'];
	}

	// Fallback to the general URL, if available.
	if ( isset( $image['url'] ) ) {
		return $image['url'];
	}

	return '';
}

/**
 * @param array $media
 *
 * @return string
 */
function novablocks_get_media_title( array $media ): string {
	if ( empty( $media['title'] ) ) {
		return '';
	}

	if ( is_string( $media['title'] ) ) {
		return $media['title'];
	}

	if ( isset( $media['title']['rendered'] ) ) {
		return wp_filter_nohtml_kses( $media['title']['rendered'] );
	}

	return '';
}

function novablocks_the_media_title( $media, $before = '', $after = '', $echo = true ): string {
	$title = novablocks_get_media_title( $media );

	if ( strlen( $title ) == 0 ) {
		return '';
	}

	$title = $before . $title . $after;

	if ( $echo ) {
		echo $title;
	}

	return $title;
}

function novablocks_get_media_caption( $media ): string {

	if ( ! empty( $media['caption'] ) ) {
		return wp_kses_post( $media['caption'] );
	}

	return '';
}

function novablocks_the_media_caption( $media ) {
	$caption = novablocks_get_media_caption( $media );
	echo apply_filters( 'the_content', $caption );
}

add_filter( 'image_size_names_choose', 'novablocks_custom_image_sizes' );

function novablocks_custom_image_sizes( array $sizes ): array {
	return array_merge( $sizes, [
		'novablocks_huge'   => esc_html__( 'Nova Blocks Huge', '__plugin_txtd' ),
		'novablocks_large'  => esc_html__( 'Nova Blocks Large', '__plugin_txtd' ),
		'novablocks_medium' => esc_html__( 'Nova Blocks Medium', '__plugin_txtd' ),
		'novablocks_small'  => esc_html__( 'Nova Blocks Small', '__plugin_txtd' ),
		'novablocks_tiny'   => esc_html__( 'Nova Blocks Tiny', '__plugin_txtd' ),
	] );
}

function novablocks_rest_prepare_attachment( $response, $post, $request ) {
	if ( ! empty( $response->data['description'] ) ) {
		$response->data['description']['raw'] = $post->post_content;
	}

	return $response;
}

add_filter( 'rest_prepare_attachment', 'novablocks_rest_prepare_attachment', 10, 3 );

function novablocks_get_categories_with_children( $request ) {

	$ids = [];

	if ( isset( $request['ids'] ) ) {
		$ids = $request['ids'];
	}

	if ( ! empty( $ids ) && ! is_array( $ids ) ) {
		$ids = [ $ids ];
	}

	if ( is_array( $ids ) ) {
		$ids = novablocks_expand_categories_to_include_subcategories( $ids );
	}

	return $ids;
}

function novablocks_register_api_endpoints() {
	register_rest_route( 'novablocks/v1', '/categories', [
		'methods'             => 'GET',
		'callback'            => 'novablocks_get_categories_with_children',
		'permission_callback' => '__return_true',
	] );
}

add_action( 'rest_api_init', 'novablocks_register_api_endpoints' );

/**
 * Return the reading time in minutes for a post's content.
 *
 * @param WP_Post|int $post
 * @param int         $wpm The words per minute reading rate to take into account.
 *
 * @return int
 */
function novablocks_get_post_reading_time_in_minutes( $post, int $wpm = 250 ): int {
	$post = get_post( $post );

	if ( ! ( $post instanceof WP_Post ) ) {
		return 0;
	}

	// We don't need the whole content filters. Just the bare minimum.
	$content = do_blocks( $post->post_content );
	$content = wptexturize( $content );
	$content = wpautop( $content );
	$content = shortcode_unautop( $content );
	$content = do_shortcode( $content );

	$content = str_replace( ']]>', ']]&gt;', $content );

	// Allow others to have a say; like removing certain non-essential elements (avatars for example).
	$content = apply_filters( 'novablocks_post_content_before_reading_time_calc', $content, $post );

	return novablocks_get_reading_time_in_minutes( $content, $wpm );
}

/**
 * Calculate the reading time in minutes for a piece of content.
 *
 * @param string $content HTML post content.
 * @param int    $wpm     The words per minute reading rate to take into account.
 *
 * @return int
 */
function novablocks_get_reading_time_in_minutes( string $content, int $wpm = 250 ): int {
	// Calculate the time in seconds for the images in the content.
	$images_time = 0;
	if ( preg_match_all( '/<img\s[^>]+>/', $content, $matches ) ) {
		$num_images = count( $matches[0] );

		// The starting image weight (expressed in seconds of reading time).
		// This weight is decreasing one second with each image encountered, with a minium of 3 seconds.
		$img_weight = 12;
		for ( $i = 0; $i < $num_images; $i ++ ) {
			$images_time += $img_weight;

			if ( $img_weight > 3 ) {
				$img_weight --;
			}
		}
	}

	// Calculate the time in seconds for the videos in the content.
	$videos_time = 0;
	if ( preg_match_all( '/<iframe\s[^>]+>/', $content, $matches ) ) {
		// We will give one minute for every video (even if the video might be longer).
		$videos_time = count( $matches[0] ) * 60;
	}

	// Calculate the words reading time in seconds.
	$word_count = str_word_count( wp_strip_all_tags( $content ) );
	$words_time = ceil( $word_count / ( $wpm / 60 ) );

	// Convert the reading time to minutes.
	$minutes = (int) ceil( ( $words_time + $images_time + $videos_time ) / 60 );
	if ( $minutes < 1 ) {
		$minutes = 1;
	}

	return $minutes;
}

function novablocks_optimize_frontend_scripts_output() {
	// These are actually empty(ish) scripts without any effect.
	// We let them be so we can have a consistent dependency generation logic.
	// But we don't want them in the frontend since it would be wasteful.
	$scripts_to_remove = [
		'novablocks/media/frontend',
		'novablocks/media-composition/frontend',
		'novablocks/posts-collection/frontend',
	];

	foreach ( $scripts_to_remove as $handle ) {
		// If the current handle isn't enqueued, skip it.
		if ( ! wp_script_is( $handle, 'enqueued' ) ) {
			continue;
		}

		// Search for the current handle's dependencies.
		$wp_script = wp_scripts()->registered[ $handle ];
		$deps      = $wp_script->deps;

		// Remove the handle from the queue.
		wp_dequeue_script( $handle );

		// If it's dependencies aren't already enqueued, queue them up.
		foreach ( $deps as $dependency ) {
			if ( ! wp_script_is( $dependency, 'enqueued' ) ) {
				wp_enqueue_script( $dependency );
			}
		}
	}
}

/**
 * Handle the enqueue of frontend-only scripts since the core won't enqueue them for us for dynamic blocks.
 *
 * @see \WP_Block::render()
 *
 * @param WP_Block $block
 */
function novablocks_maybe_enqueue_block_frontend_scripts( WP_Block $block ) {
	if ( is_admin() || novablocks_is_gutenberg() ) {
		return;
	}

	if ( ! empty( $block->block_type->view_script ) ) {
		wp_enqueue_script( $block->block_type->view_script );
	}
}

// We need to cover both the head and the footer scripts
// since the block editor logic will enqueue the scripts again upon block render.
add_action( 'wp_head', 'novablocks_optimize_frontend_scripts_output', 8 );       // The wp_print_head_scripts() is hooked at 9.
add_action( 'login_head', 'novablocks_optimize_frontend_scripts_output', 8 );    // The wp_print_head_scripts() is hooked at 9.
add_action( 'embed_head', 'novablocks_optimize_frontend_scripts_output', 19 );   // The wp_print_head_scripts() is hooked at 20.
add_action( 'wp_footer', 'novablocks_optimize_frontend_scripts_output', 19 );    // The wp_print_footer_scripts() is hooked at 20.
add_action( 'login_footer', 'novablocks_optimize_frontend_scripts_output', 19 ); // The wp_print_footer_scripts() is hooked at 20.
add_action( 'embed_footer', 'novablocks_optimize_frontend_scripts_output', 19 ); // The wp_print_footer_scripts() is hooked at 20.

function novablocks_block_area_has_blocks( string $slug ): bool {
	$posts = get_posts( [
		'name'        => $slug,
		'post_type'   => 'block_area',
		'post_status' => 'publish',
		'numberposts' => 1,
		'fields'      => 'ids',
	] );

	if ( ! empty( $posts ) && has_blocks( reset( $posts ) ) ) {
		return true;
	}

	return false;
}

/**
 * Return a script for flexibly localizing data to a window property.
 *
 * Unlike wp_localize_script() that simply creates a variable and assigns it the value,
 * thus overwriting anything that may have been in that variable, we will output a script that
 * will test if the variable exists and only overwrite the first level nodes, not everything.
 *
 * @since 1.8.0
 *
 * @param string $object_name Name of the variable that will contain the data.
 * @param array  $l10n        Array of data to localize.
 *
 * @return string
 */

function novablocks_get_localize_to_window_script( string $object_name, array $l10n ): string {
	$script = "window.$object_name = window.$object_name || parent.$object_name || {};\n";

	foreach ( $l10n as $key => $value ) {
		if ( is_scalar( $value ) ) {
			$value = html_entity_decode( (string) $value, ENT_QUOTES, 'UTF-8' );
		}

		$script .= "$object_name.$key = " . wp_json_encode( $value ) . ";\n";
	}

	return $script;
}

function novablocks_get_color_signal_classes( array $attributes ): array {
	$classes = [];

	$classes[] = 'sm-palette-' . $attributes['palette'];
	$classes[] = 'sm-variation-' . $attributes['paletteVariation'];

	if ( ! empty( $attributes['useSourceColorAsReference'] ) ) {
		$classes[] = 'sm-palette--shifted';
	}

	return $classes;
}

function novablocks_get_color_signal_data_attributes( array $attributes ): string {

	$data_attributes = [
		'data-palette="' . $attributes['palette'] . '"',
		'data-palette-variation="' . $attributes['paletteVariation'] . '"',
		'data-color-signal="' . $attributes['colorSignal'] . '"',
		'data-use-source-color-as-reference="' . $attributes['useSourceColorAsReference'] . '"',
	];

	return join( ' ', $data_attributes );
}

function novablocks_normalize_variation_value( $variation ): int {
	return ( $variation + 11 ) % 12 + 1;
}

function novablocks_get_content_palette_classes( $attributes ): array {
	$contentVariation = novablocks_get_content_variation( $attributes );

	$classes = [
		'sm-palette-' . $attributes['palette'],
		'sm-variation-' . $contentVariation,
	];

	if ( ! empty( $attributes['useSourceColorAsReference'] ) ) {
		$classes[] = 'sm-palette--shifted';
	}

	return $classes;
}

function novablocks_get_content_variation( $attributes ): int {
	$palettes_output = get_option( 'sm_advanced_palette_output', '[]' );
	$palettes        = json_decode( $palettes_output );

	$current_palette = null;

	foreach ( $palettes as $palette ) {
		if ( $attributes['palette'] == $palette->id ) {
			$current_palette = $palette;
			break;
		}
	}

	if ( ! empty( $current_palette ) && property_exists( $current_palette, 'sourceIndex' ) ) {
		$sourceIndex = $current_palette->sourceIndex;
	} else {
		$sourceIndex = 6;
	}

	$siteVariation = get_option( 'sm_site_color_variation', 1 );
	$offset        = $siteVariation - 1;

	if ( $attributes['useSourceColorAsReference'] ) {
		$offset = $sourceIndex;
	}

	$referenceVariation   = novablocks_normalize_variation_value( $attributes['paletteVariation'] + $offset );
	$contentSignalOptions = novablocks_get_signal_options_from_variation( $referenceVariation );

	return novablocks_normalize_variation_value( $contentSignalOptions[ $attributes['contentColorSignal'] ] - $offset );
}

function novablocks_get_content_style_class( array $attributes ): string {
	$contentStyle = 'moderate';

	if ( ! empty( $attributes['contentStyle'] ) ) {
		$contentStyle = $attributes['contentStyle'];
	}

	if ( ! isset( $attributes['upgradedToModerate'] ) && $contentStyle === 'basic' ) {
		$contentStyle = 'moderate';
	}

	return 'content-is-' . $contentStyle;
}

function novablocks_get_customizer_link( $return_url = false, $extra_query_args = [] ): string {
	global $wp;


	if ( empty( $return_url ) ) {
		// Get the current frontend URL.
		$return_url = home_url( add_query_arg( [], $wp->request ) );
	}

	// Now get the Customizer URL.
	$link = wp_customize_url();

	$link = add_query_arg( 'return_url', rawurlencode( $return_url ), $link );

	if ( ! empty( $extra_query_args ) && is_array( $extra_query_args ) && ! wp_is_numeric_array( $extra_query_args ) ) {
		foreach ( $extra_query_args as $key => $value ) {
			$link = add_query_arg( rawurlencode( $key ), rawurlencode( utf8_uri_encode( $value ) ), $link );
		}
	}

	return $link;
}

function novablocks_merge_attributes_from_array( array $pathsArray ): array {
	$accumulator = [];

	foreach ( $pathsArray as $path ) {
		$attributes  = novablocks_get_attributes_from_json( $path );
		$accumulator = array_merge( $accumulator, $attributes );
	}

	return $accumulator;
}

function novablocks_get_grid_area_fallback_classnames( array $attributes ): array {
	if ( empty( $attributes['columns'] ) || $attributes['layoutStyle'] === 'parametric' ) {
		return [];
	}

	$classes = [];

	$cardLayout = 'portrait';
	if ( ! empty( $attributes['cardLayout'] )
	     && in_array( $attributes['cardLayout'], [ 'horizontal', 'horizontal-reverse' ] ) ) {

		$cardLayout = 'landscape';
	}

	$classes[] = 'nb-grid__area--' . $cardLayout;
	$classes[] = novablocks_get_area_classname_by_width_ratio( 1 / $attributes['columns'] );

	return $classes;
}

function novablocks_get_area_classname_by_width_ratio( $ratio ): string {
	if ( $ratio < 0.3 ) {
		return 'nb-grid__area--width-xs';
	}
	if ( $ratio < 0.5 ) {
		return 'nb-grid__area--width-s';
	}
	if ( $ratio < 0.66 ) {
		return 'nb-grid__area--width-m';
	}
	if ( $ratio < 0.8 ) {
		return 'nb-grid__area--width-l';
	}
	if ( $ratio < 0.95 ) {
		return 'nb-grid__area--width-xl';
	}

	return 'nb-grid__area--width-full';
}

function novablocks_get_collection_card_markup( string $media, string $content, array $attributes ): string {

	// Make sure that the defaults are in place.
	$attributes = wp_parse_args( $attributes, [
		'cardMediaOpacity' => 100,
	] );

	$cardClasses = [ 'supernova-item', ];

	if ( ! empty( $attributes['cardLayout'] ) ) {
		$cardClasses[] = 'supernova-item--layout-' . $attributes['cardLayout'];
	}

	if ( ! empty( $attributes['scrollingEffect'] ) ) {
		$cardClasses[] = 'supernova-item--scrolling-effect-' . $attributes['scrollingEffect'];
	}

	if ( ! empty( $attributes['thumbnailAspectRatioString'] ) ) {
		$cardClasses[] = 'supernova-item--aspect-ratio-' . $attributes['thumbnailAspectRatioString'];
	}

	$cardClasses = array_merge(
		$cardClasses,
		novablocks_get_color_signal_classes( $attributes )
	);

	$contentClasses = [ 'supernova-item__content', ];

	if ( ! empty( $attributes['contentPosition'] ) ) {
		$align = preg_split( '/\b\s+/', $attributes['contentPosition'] );

		if ( ! empty( $align[0] ) ) {
			$contentClasses[] = 'supernova-item__content--valign-' . $align[0];
		}

		if ( ! empty( $align[1] ) ) {
			$contentClasses[] = 'supernova-item__content--halign-' . $align[1];
		}
	}

	$data_attributes_array = [
		'palette',
		'palette-variation',
		'color-signal',
		'content-palette-variation',
		'content-color-signal',
		'use-source-color-as-reference',
	];

	if ( $attributes['columns'] === 1 &&
	     $attributes['cardLayout'] === 'stacked' &&
	     $attributes['layoutStyle'] !== 'carousel' ) {

		$data_attributes_array[] = 'position-indicators';
	}

	$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

	ob_start(); ?>

	<div class="nb-collection__layout-item">
		<div class="<?php echo esc_attr( join( ' ', $cardClasses ) ); ?>" <?php echo join( ' ', $data_attributes ); ?>>
			<?php if ( ! empty( $attributes['showMedia'] ) && ! empty( $media ) ) {
				echo $media;
			}
			if ( novablocks_show_card_contents( $attributes ) && ! empty( $content ) ) { ?>
				<div class="<?php echo esc_attr( join( ' ', $contentClasses ) ); ?>">
					<div class="supernova-item__inner-container">
						<?php
						echo $content;
						novablocks_render_scroll_indicator( $attributes );
						?>
					</div>
				</div>
			<?php } ?>
		</div>
	</div>

	<?php
	return ob_get_clean();
}

function novablocks_get_collection_card_markup_from_post( $post, array $attributes ): string {
	$card_content = novablocks_get_post_card_contents( $post, $attributes );

	$media_markup = novablocks_get_collection_card_media_markup( [
		'type' => 'image',
		'url'  => get_the_post_thumbnail_url( $post ),
		'id'   => get_post_thumbnail_id( $post ),
	], $attributes, [
		'companionContent' => ( novablocks_show_card_contents( $attributes ) && ! empty( $card_content ) ),
	] );

	$media_markup = novablocks_get_collection_card_media_markup_wrapped( $media_markup, get_permalink( $post ) );

	$attributes['colorSignal']               = $attributes['contentColorSignal'];
	$attributes['paletteVariation']          = $attributes['contentPaletteVariation'];
	$attributes['useSourceColorAsReference'] = false;

	return novablocks_get_collection_card_markup( $media_markup, $card_content, $attributes );
}

function novablocks_get_collection_card_media_markup_wrapped( $media, $link = false ): string {
	$output = '';

	if ( ! empty( $link ) ) {
		$output .= '<a class="supernova-item__media-wrapper" href="' . esc_url( $link ) . '">';
	} else {
		$output .= '<div class="supernova-item__media-wrapper">';
	}

	$output .= '<div class="supernova-item__media-aspect-ratio">
			<div class="novablocks-doppler__mask novablocks-doppler__wrapper">
				<div class="supernova-item__media-doppler"> ' . $media . '</div>
			</div>
		</div>';

	if ( ! empty( $link ) ) {
		$output .= '</a>';
	} else {
		$output .= '</div>';
	}

	return $output;
}

function novablocks_get_card_contents( array $attributes ): string {

	$output = '';

	$output .= novablocks_get_card_item_meta( $attributes['metaAboveTitle'], $attributes );
	$output .= novablocks_get_card_item_title( $attributes['title'], $attributes );
	$output .= novablocks_get_card_item_subtitle( $attributes['subtitle'], $attributes );
	$output .= novablocks_get_card_item_meta( $attributes['metaBelowTitle'], $attributes );
	$output .= novablocks_get_card_item_description( $attributes['description'], $attributes );
	$output .= novablocks_get_card_item_buttons( [
		[
			'text' => $attributes['buttonText'],
			'url'  => $attributes ['buttonUrl'],
		],
	], $attributes );

	return $output;
}

function novablocks_get_card_item_meta( $metaValue, array $attributes ): string {
	$metaValue = (string) $metaValue;
	if ( empty( $attributes['showMeta'] ) || ! strlen( $metaValue ) ) {
		return '';
	}

	return '<p class="nb-card__meta is-style-meta">' . $metaValue . '</p>';
}

function novablocks_get_card_item_title( string $title, array $attributes, $post = null ): string {
	// Bail if we don't have a title or we should not show it.
	if ( empty( $title ) || empty( $attributes['showTitle'] ) ) {
		return '';
	}

	$titleTag         = 'h' . $attributes['cardTitleLevel'];
	$fontSizeModifier = 'has-' . $attributes['cardTitleFontSize'] . '-font-size';

	// Default to the current, global post if not provided.
	if ( empty( $post ) ) {
		$post = get_post();
	}

	$output = '<' . $titleTag . ' class="nb-card__title ' . $fontSizeModifier . '">';
	$output .= novablocks_get_card_item_link( get_permalink( $post ), $attributes, 'open' );
	$output .= $title;
	$output .= novablocks_get_card_item_link( get_permalink( $post ), $attributes, 'close' );
	$output .= '</' . $titleTag . '>';

	return $output;
}

function novablocks_get_card_item_subtitle( string $subtitle, array $attributes ): string {
	if ( empty( $subtitle ) || empty( $attributes['showSubtitle'] ) ) {
		return '';
	}

	$subtitleTag = 'h' . ( ( int ) $attributes['cardTitleLevel'] + 1 );

	return '<' . $subtitleTag . ' class="nb-card__subtitle">' . $subtitle . '</' . $subtitleTag . '>';
}

function novablocks_get_card_item_description( string $description, array $attributes ): string {
	if ( empty( $description ) || empty( $attributes['showDescription'] ) ) {
		return '';
	}

	return '<p class="nb-card__description">' . $description . '</p>';
}

function novablocks_get_card_item_buttons( array $buttons, array $attributes ): string {
	if ( empty( $attributes['showButtons'] ) || empty( $buttons ) ) {
		return '';
	}

	$output = '';
	foreach ( $buttons as $button ) {
		if ( empty ( $button['text'] ) ) {
			continue;
		}

		$output .= '<div class="wp-block-button is-style-text">
			<a class="wp-block-button__link" href="' . esc_url( $button['url'] ) . '">' . $button['text'] . '</a>
		</div>';
	}

	$output = trim( $output );
	if ( empty( $output ) ) {
		return '';
	}

	// Wrap the buttons.
	return '<div class="nb-card__buttons">' . $output . '</div>';
}

/**
 * @param string $url
 * @param array  $attributes
 * @param 'open'|'close'|false $tag_direction
 *
 * @return string
 */
function novablocks_get_card_item_link( string $url, array $attributes, $tag_direction = false ): string {
	if ( empty( $attributes['contentType'] ) || 'auto' !== $attributes['contentType'] ) {
		return '';
	}

	$output = '';

	if ( ! $tag_direction ) {
		$output = '<a href="' . esc_url( $url ) . '" class="supernova-item__link"></a>';
	} else if ( $tag_direction == 'open' ) {
		$output = '<a href="' . esc_url( $url ) . '" class="supernova-item__link">';
	} else if ( $tag_direction == 'close' ) {
		$output = '</a>';
	}

	return $output;
}

/**
 * @param $variation
 *
 * @return array
 */
function novablocks_get_signal_options_from_variation( $variation ): array {
	$blockSignal = novablocks_get_signal_from_variation( $variation );

	$variationOptions = [];

	for ( $index = 0; $index < 4; $index ++ ) {
		if ( $index === $blockSignal ) {
			$variationOptions[] = $variation;
		} else {
			$variationOptions[] = novablocks_get_variation_from_signal( $index );
		}
	}

	usort( $variationOptions, function ( $variation1, $variation2 ) use ( $variation ) {
		return abs( $variation - $variation1 ) < abs( $variation - $variation2 ) ? - 1 : 1;
	} );

	return $variationOptions;
}

/**
 * @param int $variation
 *
 * @return int
 */
function novablocks_get_signal_from_variation( int $variation ): int {

	if ( $variation === 1 ) {
		return 0;
	}

	if ( $variation < 5 ) {
		return 1;
	}

	if ( $variation < 9 ) {
		return 2;
	}

	return 3;
}

/**
 * @param int $signal
 *
 * @return int
 */
function novablocks_get_variation_from_signal( int $signal ): int {

	if ( $signal === 1 ) {
		return 3;
	}

	if ( $signal === 2 ) {
		return 6;
	}

	if ( $signal === 3 ) {
		return 10;
	}

	return 1;
}

function novablocks_get_posts_collection_cards_markup( array $attributes, $content, $block ): string {
	global $novablocks_rendered_posts_ids;

	if ( ! $novablocks_rendered_posts_ids ) {
		$novablocks_rendered_posts_ids = [];
	}

	$output = '';

	if ( isset( $block->context['queryId'] ) ) {

		$page_key = isset( $block->context['queryId'] ) ? 'query-' . $block->context['queryId'] . '-page' : 'query-page';
		$page     = empty( $_GET[ $page_key ] ) ? 1 : (int) $_GET[ $page_key ];

		$query_args = build_query_vars_from_query_block( $block, $page );
		// Override the custom query with the global query if needed.
		$use_global_query = ( isset( $block->context['query']['inherit'] ) && $block->context['query']['inherit'] );
		if ( $use_global_query ) {
			global $wp_query;
			if ( $wp_query && isset( $wp_query->query_vars ) && is_array( $wp_query->query_vars ) ) {
				// Unset `offset` because if is set, $wp_query overrides/ignores the paged parameter and breaks pagination.
				unset( $query_args['offset'] );
				$query_args = wp_parse_args( $wp_query->query_vars, $query_args );

				if ( empty( $query_args['post_type'] ) && is_singular() ) {
					$query_args['post_type'] = get_post_type( get_the_ID() );
				}
			}
		}
	} else {
		$query_args = novablocks_build_articles_query( $attributes, $block );
	}

	$query = new WP_Query( $query_args );

	if ( ! $query->have_posts() ) {
		return $output;
	}

	while ( $query->have_posts() ) {
		$post = $query->next_post();

		$card_markup = novablocks_get_collection_card_markup_from_post( $post, $attributes );
		$markup      = apply_filters( 'novablocks_get_collection_card_markup', $card_markup, $post, $attributes );
		if ( ! empty( $markup ) ) {
			$output .= $markup;
			// Only remember posts that were actually rendered.
			array_push( $novablocks_rendered_posts_ids, $post->ID );
		}
	}

	wp_reset_postdata();

	return $output;
}

function novablocks_show_card_contents( array $attributes ): bool {
	$hide_hero_inner_content = $attributes['contentType'] === 'custom' &&
	                           empty( $attributes['displayInnerContent'] );

	return ! $hide_hero_inner_content &&
	       ( ! empty( $attributes['showMeta'] ) ||
	         ! empty( $attributes['showTitle'] ) ||
	         ! empty( $attributes['showSubtitle'] ) ||
	         ! empty( $attributes['showDescription'] ) ||
	         ! empty( $attributes['showButtons'] ) );
}

function novablocks_get_post_card_contents( $post, $attributes ): string {
	$output = '';

	// echo novablocks_get_card_item_link( get_permalink( $post ), $attributes );

	$title          = get_the_title( $post );
	$postMeta       = novablocks_get_card_post_meta( $post, $attributes );
	$aboveTitleMeta = $postMeta[0];
	$belowTitleMeta = $postMeta[1];
	$output         .= novablocks_get_card_item_meta( $aboveTitleMeta, $attributes );
	$output         .= novablocks_get_card_item_title( $title, $attributes, $post );
	$output         .= novablocks_get_card_item_meta( $belowTitleMeta, $attributes );

	$excerpt = get_the_excerpt( $post );
	$output  .= novablocks_get_card_item_description( $excerpt, $attributes );

	$output .= novablocks_get_card_item_buttons( [
		[
			'text' => esc_html__( 'Read More', '__plugin_txtd' ),
			'url'  => get_permalink( $post ),
		],
	], $attributes );

	return $output;
}

function novablocks_get_post_card_meta( $post, $meta ) {

	if ( $meta === 'author' ) {
		return get_the_author_meta( 'display_name', $post->post_author );
	}

	if ( $meta === 'category' ) {
		$categories = wp_get_post_categories( $post->ID );

		if ( ! empty( $categories ) && ! is_wp_error( $categories ) ) {
			$category_id = $categories[0];
			$category    = get_the_category_by_ID( $category_id );

			return $category;
		}
	}

	if ( $meta === 'comments' ) {
		$comments_number = absint( get_comments_number( $post->ID ) );

		if ( $comments_number === 0 ) {
			return esc_html__( 'No Comments', '__plugin_txtd' );
		}

		return esc_html(
			sprintf(
				_nx(
					'%1$s Comment',
					'%1$s Comments',
					$comments_number,
					'comments title',
					'__plugin_txtd'
				),
				number_format_i18n( $comments_number )
			)
		);
	}

	if ( $meta === 'date' ) {
		return esc_html( get_the_date( '', $post ) );
	}

	if ( $meta === 'tags' ) {
		$tags = get_the_tags( $post->ID );

		if ( ! empty( $tags ) && ! is_wp_error( $tags ) ) {
			$tag_names = array_map( 'novablocks_get_tag_name', $tags );

			return join( ', ', $tag_names );
		}
	}

	if ( $meta == 'reading-time' ) {
		return sprintf( __( '%s min read', '__plugin_txtd' ), novablocks_get_post_reading_time_in_minutes( $post ) );
	}

	return '';
}

function novablocks_get_tag_name( WP_Term $tag ): string {
	return $tag->name;
}
