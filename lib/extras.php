<?php

/**
 * Determine if a certain block is supported by the current theme.
 *
 * This way you can current_theme_supports() with a second parameter like so:
 * current_theme_supports( 'novablocks', 'hero');
 * current_theme_supports( 'novablocks', array( 'hero', 'media' ) );
 *
 * @param bool $supports
 * @param string|array $args A single block or a list of blocks to search for.
 *                           When multiple, we use AND among them, so all need to be supported.
 * @param array|bool $theme_features The list of novablocks blocks (as strings) that the current theme supports.
 *
 * @return mixed
 */
function novablocks_handle_theme_supports( $supports, $args, $theme_features ) {
	if ( empty( $args ) || empty( $theme_features ) ) {
		return $supports;
	}

	if ( is_string( $args ) ) {
		$args = array( $args );
	}

	if ( is_array( $theme_features ) ) {
		$theme_features = reset( $theme_features );
	}
	if ( is_string( $theme_features ) ) {
		$theme_features = array( $theme_features );
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
		array(
			'type'              => 'string',
			'show_in_rest'      => true,
			'sanitize_callback' => 'sanitize_text_field',
		)
	);
}
add_action( 'admin_init', 'novablocks_register_settings' );
add_action( 'rest_api_init', 'novablocks_register_settings' );

function novablocks_register_meta() {

	if ( defined( 'NOVABLOCKS_USE_POST_META_ATTRIBUTES' ) && NOVABLOCKS_USE_POST_META_ATTRIBUTES ) {
		register_meta( 'post', 'novablocks_hero_scroll_indicator', array(
			'type'         => 'boolean',
			'single'       => true,
			'show_in_rest' => true,
		) );

		register_meta( 'post', 'novablocks_hero_position_indicators', array(
			'type'         => 'boolean',
			'single'       => true,
			'show_in_rest' => true,
		) );
	}
}
add_action( 'init', 'novablocks_register_meta' );

function novablocks_allowed_block_types( $allowed_block_types, $post ) {

	if ( $post->post_type === 'block_area' ) {

		if ( $post->post_name === 'header' ) {
			return array( 'novablocks/header' );
		}

		if ( $post->post_name === 'promo-bar' ) {
			return array( 'novablocks/announcement-bar', 'novablocks/openhours', 'core/paragraph' );
		}
	}

	return $allowed_block_types;
}
add_filter( 'allowed_block_types', 'novablocks_allowed_block_types', 10, 2 );

function novablocks_get_alignment_attributes() {
	return array(
		'horizontalAlignment' => array(
			'type'    => 'string',
			'default' => 'center',
		),
		'verticalAlignment'   => array(
			'type'    => 'string',
			'default' => 'center'
		),
	);
}

function novablocks_get_doppler_attributes() {
	return array(
		'focalPoint'             => array(
			'type'    => 'object',
			'default' => array(
				'x' => 0.5,
				'y' => 0.5
			),
		),
		'finalFocalPoint'        => array(
			'type'    => 'object',
			'default' => array(
				'x' => 0.5,
				'y' => 0.5
			),
		),
		'initialBackgroundScale' => array(
			'type'    => 'number',
			'default' => 1
		),
		'finalBackgroundScale'   => array(
			'type'    => 'number',
			'default' => 1
		),
		'scrollIndicatorBlock'   => array(
			'type'    => 'boolean',
			'default' => false
		),
		'scrollingEffect'        => array(
			'type'    => 'string',
			'default' => 'parallax',
		),
		'motionPreset'           => array(
			'type'    => 'string',
			'default' => 'standard-dynamic',
		),
		'followThroughStart'     => array(
			'type'    => 'boolean',
			'default' => true,
		),
		'followThroughEnd'       => array(
			'type'    => 'boolean',
			'default' => true,
		),
	);
}

function novablocks_get_block_extra_classes( $attributes ) {
	$classes = array();

	if ( ! empty( $attributes['verticalAlignment'] ) ) {
		$classes[] = 'novablocks-u-valign-' . $attributes['verticalAlignment'];
	}

	if ( ! empty( $attributes['horizontalAlignment'] ) ) {
		$classes[] = 'novablocks-u-halign-' . $attributes['horizontalAlignment'];
	}

	if ( ! empty( $attributes['contentPadding'] ) ) {
		$classes[] = 'novablocks-u-spacing-' . $attributes['contentPadding'];
	}

	if ( ! empty( $attributes['contentWidth'] ) ) {
		$classes[] = 'novablocks-u-content-width-' . $attributes['contentWidth'];
	}

	$classes[] = 'novablocks-u-background';
	if ( ! empty( $attributes['overlayFilterStyle'] ) ) {
		$classes[] = 'novablocks-u-background-' . $attributes['overlayFilterStyle'];
	}

	return $classes;
}

function novablocks_get_header_attributes() {
	return array(
		'align'  => array(
			'type'    => 'string',
			'default' => 'full',
		),
		'layout' => array(
			'type'    => 'string',
			'default' => 'logo-left',
		),
	);
}

function novablocks_get_posts_block_attributes() {
	return array(
		'displayFeaturedImage' => array(
			'type'    => 'boolean',
			'default' => true
		),
		'displayDate'          => array(
			'type'    => 'boolean',
			'default' => true
		),
		'displayContent'       => array(
			'type'    => 'boolean',
			'default' => true
		),
		'columnsNumber'        => array(
			'type'    => 'number',
			'default' => 2
		),
		'displayReadMore'      => array(
			'type'    => 'boolean',
			'default' => true
		),
		'numberOfPosts'        => array(
			'type'    => 'number',
			'default' => 4
		),
		'categories'           => array(
			'type' => 'string'
		),
		'postLink'             => array(
			'type'    => 'string',
			'default' => 'Read More'
		)
	);
}

function novablocks_get_collection_attributes() {
	return novablocks_get_attributes_from_json( 'packages/components/src/collection/attributes.json' );
}

function novablocks_get_attributes_with_defaults( $attributes, $attributes_config ) {

	foreach ( $attributes_config as $key => $value ) {

		if ( ! isset( $attributes[ $key ] ) ) {

			if ( isset( $attributes_config[ $key ]['source'] ) && $attributes_config[ $key ]['source'] === 'meta' ) {
				$attributes[ $key ] = get_post_meta( get_the_ID(), $attributes_config[ $key ]['meta'], true );
			} elseif ( isset( $attributes_config[ $key ]['default'] ) ) {
				$attributes[ $key ] = $attributes_config[ $key ]['default'];
			} else {
				// Put some value since some might use it. We should not get here, but do our best if we do.
				$attributes[ $key ] = '';
			}
		}
	}

	return $attributes;
}

function novablocks_get_focal_point_style( $focalPoint ) {
	$focalPointX = intval( $focalPoint['x'] * 10000 ) / 100 . '%';
	$focalPointY = intval( $focalPoint['y'] * 10000 ) / 100 . '%';

	return 'object-position: ' . $focalPointX . ' ' . $focalPointY . ';';
}

function novablocks_add_hero_settings( $settings ) {

	$hero_settings = array(
		'template'   => array(
			array(
				'core/heading',
				array(
					'content' => esc_html__( 'This is a catchy title', '__plugin_txtd' ),
					'align'   => 'center',
					'level'   => 1,
				),
			),
			array(
				'core/paragraph',
				array(
					'content' => esc_html__( 'A brilliant subtitle to explain its catchiness', '__plugin_txtd' ),
					'align'   => 'center',
				),
			),
			array(
				'core/buttons',
				array(
					'align' => 'center',
				),
				array(
					array(
						'core/button',
						array(
							'text'  => esc_html__( 'Discover more', '__plugin_txtd' ),
						),
					),
				),
			)
		),
	);

	$settings['hero'] = $hero_settings;

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_hero_settings', 0 );

function novablocks_get_media_spacing_atttributes() {
	return array(
		// general
		'layoutPreset' => array(
			'type' => 'string',
			'default' => 'stable',
		),
		// customize
		'emphasisBySpace' => array(
			'type' => 'number',
			'default' => 1,
		),
		'enableOverlapping' => array(
			'type' => 'boolean',
			'default' => false,
		),
		// settings
		'blockTopSpacing' => array(
			'type' => 'number',
			'default' => 1,
		),
		'blockBottomSpacing' => array(
			'type' => 'number',
			'default' => 1,
		),
		'emphasisTopSpacing' => array(
			'type' => 'number',
			'default' => 1,
		),
		'emphasisBottomSpacing' => array(
			'type' => 'number',
			'default' => 1,
		),
	);
}

function novablocks_add_media_settings( $settings ) {

	$media_settings = array(
		'template'           => array(
			array(
				'core/heading',
				array(
					'content' => esc_html__( 'Shoot for the moon, Even if You Miss it', '__plugin_txtd' ),
					'level'   => 4,
				),
			),
			array(
				'core/heading',
				array(
					'content' => esc_html__( 'Welcome to our planet, look and feel matters!', '__plugin_txtd' ),
					'level'   => 2,
				),
			),
			array(
				'core/paragraph',
				array(
					'content' => esc_html__( "We've always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to reach for the stars, to make the unknown known.", '__plugin_txtd' ),
				),
			),
			array(
				'core/buttons',
				array(
					'align' => 'center',
				),
				array(
					array(
						'core/button',
						array(
							'text' => esc_html__( 'Discover More', '__plugin_txtd' ),
						),
					),
				)
			),
		),
		'contentAreaOptions' => array(
			array(
				'label' => esc_html__( 'Basic', '__plugin_txtd' ),
				'value' => 'basic',
			),
			array(
				'label' => esc_html__( 'Moderate', '__plugin_txtd' ),
				'value' => 'moderate',
			),
			array(
				'label' => esc_html__( 'Highlighted', '__plugin_txtd' ),
				'value' => 'highlighted',
			),
		),
		'blockAreaOptions'   => array(
			array(
				'label' => esc_html__( 'Basic', '__plugin_txtd' ),
				'value' => 'basic',
			),
			array(
				'label' => esc_html__( 'Moderate', '__plugin_txtd' ),
				'value' => 'moderate',
			),
			array(
				'label' => esc_html__( 'Highlighted', '__plugin_txtd' ),
				'value' => 'highlighted',
			),
		),
		'spaceAndSizing' => array(
			'presetOptions' => array(
				array(
					'label'  => 'Default Block Spacing',
					'value'  => 'default',
					'preset' => array(
						'blockTopSpacing' => 0,
						'blockBottomSpacing' => 0,
						'emphasisTopSpacing' => 1,
						'emphasisBottomSpacing' => 1,
						'enableOverlapping' => false,
						'verticalAlignment' => 'center',
					),
				),
				array(
					'label'  => 'Overlap 1 / Top Anchoring',
					'value'  => 'overlap1',
					'preset' => array(
						'blockTopSpacing' => 0,
						'blockBottomSpacing' => 2,
						'emphasisTopSpacing' => -2,
						'emphasisBottomSpacing' => -2,
						'enableOverlapping' => true,
						'verticalAlignment' => 'top',
					),
				),
				array(
					'label'  => 'Overlap 2 / Centered',
					'value'  => 'overlap2',
					'preset' => array(
						'blockTopSpacing' => 1,
						'blockBottomSpacing' => 1,
						'emphasisTopSpacing' => -2,
						'emphasisBottomSpacing' => -2,
						'enableOverlapping' => true,
						'verticalAlignment' => 'center',
					),
				),
				array(
					'label'  => 'Overlap 3 / Bottom Anchoring',
					'value'  => 'overlap3',
					'preset' => array(
						'blockTopSpacing' => 2,
						'blockBottomSpacing' => 0,
						'emphasisTopSpacing' => -2,
						'emphasisBottomSpacing' => -2,
						'enableOverlapping' => true,
						'verticalAlignment' => 'bottom',
					),
				),
				array(
					'label'  => 'Overlap Nearby Blocks / Centered',
					'value'  => 'overlap-nearby-1',
					'preset' => array(
						'blockTopSpacing' => -2,
						'blockBottomSpacing' => -2,
						'emphasisTopSpacing' => -2,
						'emphasisBottomSpacing' => -2,
						'enableOverlapping' => true,
						'verticalAlignment' => 'center',
					),
				),
				array(
					'label'  => 'Overlap Nearby Blocks / Bottom',
					'value'  => 'overlap-nearby-2',
					'preset' => array(
						'blockTopSpacing' => 0,
						'blockBottomSpacing' => -2,
						'emphasisTopSpacing' => 2,
						'emphasisBottomSpacing' => -2,
						'enableOverlapping' => true,
						'verticalAlignment' => 'top',
					),
				),
				array(
					'label'  => 'Overlap Nearby Blocks / Top',
					'value'  => 'overlap-nearby-3',
					'preset' => array(
						'blockTopSpacing' => -2,
						'blockBottomSpacing' => 0,
						'emphasisTopSpacing' => -2,
						'emphasisBottomSpacing' => 2,
						'enableOverlapping' => true,
						'verticalAlignment' => 'bottom',
					),
				),
			)
		),
	);

	$settings['media'] = $media_settings;

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_media_settings', 0 );

function novablocks_add_slideshow_settings( $settings ) {

	$slideshow_settings = array(
		'minHeightOptions' => array(
			array(
				'label' => esc_html__( 'Auto', '__plugin_txtd' ),
				'value' => 0,
			),
			array(
				'label' => esc_html__( 'Half', '__plugin_txtd' ),
				'value' => 50,
			),
			array(
				'label' => esc_html__( 'Two Thirds', '__plugin_txtd' ),
				'value' => 66,
			),
			array(
				'label' => esc_html__( 'Three Quarters', '__plugin_txtd' ),
				'value' => 75,
			),
			array(
				'label' => esc_html__( 'Full Height', '__plugin_txtd' ),
				'value' => 100,
			),
		),
	);

	$settings['slideshow'] = $slideshow_settings;

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_slideshow_settings', 0 );

function novablocks_add_separator_settings( $settings ) {
	$separator_settings = array(
		'markup' => '<hr />'
	);

	$settings['separator'] = $separator_settings;

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_separator_settings', 0 );

function novablocks_get_block_editor_settings() {

	$settings = array(
		'debug'                        => defined( 'NOVABLOCKS_DEBUG' ) && NOVABLOCKS_DEBUG,
		'usePostMetaAttributes'        => defined( 'NOVABLOCKS_USE_POST_META_ATTRIBUTES' ) && NOVABLOCKS_USE_POST_META_ATTRIBUTES,
		'minimumHeightOptions'         => array(
			array(
				'label' => esc_html__( 'Half', '__plugin_txtd' ),
				'value' => 50,
			),
			array(
				'label' => esc_html__( 'Two Thirds', '__plugin_txtd' ),
				'value' => 66,
			),
			array(
				'label' => esc_html__( 'Three Quarters', '__plugin_txtd' ),
				'value' => 75,
			),
			array(
				'label' => esc_html__( 'Full', '__plugin_txtd' ),
				'value' => 100,
			),
		),
		'contentPaddingOptions'        => array(
			array(
				'label' => esc_html__( 'Small', '__plugin_txtd' ),
				'value' => 'small',
			),
			array(
				'label' => esc_html__( 'Medium', '__plugin_txtd' ),
				'value' => 'medium',
			),
			array(
				'label' => esc_html__( 'Large', '__plugin_txtd' ),
				'value' => 'large',
			),
			array(
				'label' => esc_html__( 'Custom', '__plugin_txtd' ),
				'value' => 'custom',
			),
		),
		'contentWidthOptions'          => array(
			array(
				'label' => esc_html__( 'Full', '__plugin_txtd' ),
				'value' => 'full',
			),
			array(
				'label' => esc_html__( 'Large', '__plugin_txtd' ),
				'value' => 'large',
			),
			array(
				'label' => esc_html__( 'Narrow', '__plugin_txtd' ),
				'value' => 'narrow',
			),
			array(
				'label' => esc_html__( 'Custom', '__plugin_txtd' ),
				'value' => 'custom',
			),
		),
		'motionPresetOptions'          => array(
			array(
				'label'  => 'Standard Dynamic',
				'value'  => 'standard-dynamic',
				'preset' => array(
					'focalPoint'             => array(
						'x' => 0.5,
						'y' => 0
					),
					'finalFocalPoint'        => array(
						'x' => 0.5,
						'y' => 1
					),
					'initialBackgroundScale' => 1.75,
					'finalBackgroundScale'   => 1,
					'followThroughStart'     => true,
					'followThroughEnd'       => true,
				),
			),
			array(
				'label'  => 'Pull Focus',
				'value'  => 'pull-focus',
				'preset' => array(
					'focalPoint'             => array(
						'x' => 0.5,
						'y' => 0.5
					),
					'finalFocalPoint'        => array(
						'x' => 0.5,
						'y' => 1
					),
					'initialBackgroundScale' => 1,
					'finalBackgroundScale'   => 1.75,
					'followThroughStart'     => true,
					'followThroughEnd'       => true,
				),
			),
			array(
				'label'  => 'Static Reveal',
				'value'  => 'static-reveal',
				'preset' => array(
					'focalPoint'             => array(
						'x' => 0.5,
						'y' => 0.5
					),
					'finalFocalPoint'        => array(
						'x' => 0.5,
						'y' => 0.5
					),
					'initialBackgroundScale' => 1.75,
					'finalBackgroundScale'   => 1,
					'followThroughStart'     => true,
					'followThroughEnd'       => true,
				),
			),
			array(
				'label' => 'Custom',
				'value' => 'custom',
			),
		),
		'advancedGalleryPresetOptions' => novablocks_get_advanced_gallery_presets(),
		'theme_support'                => novablocks_get_theme_support(),
	);

	$settings = apply_filters( 'novablocks_block_editor_initial_settings', $settings );
	$settings = apply_filters( 'novablocks_block_editor_settings', $settings );

	return $settings;
}

function novablocks_get_advanced_gallery_presets() {
	return array(
		array(
			'label'  => 'The Cloud Atlas',
			'value'  => 'the-cloud-atlas',
			'preset' => array(
				'sizeContrast'  => 0,
				'positionShift' => 0,
				'imageRotation' => 0,
				'elementsDistance' => 20,
				'placementVariation' => 25,
			),
		),
		array(
			'label'  => 'Pride and Prejudice',
			'value'  => 'pride-and-prejudice',
			'preset' => array(
				'sizeContrast'  => 60,
				'positionShift' => 70,
				'imageRotation' => 0,
				'elementsDistance' => 40,
				'placementVariation' => 0,
			),
		),
		array(
			'label'  => 'Brave New World',
			'value'  => 'brave-new-world',
			'preset' => array(
				'sizeContrast'  => 20,
				'positionShift' => 25,
				'imageRotation' => 0,
				'elementsDistance' => 20,
				'placementVariation' => 50,
			),
		),
		array(
			'label'  => 'A Walk to Remember',
			'value'  => 'a-walk-to-remember',
			'preset' => array(
				'sizeContrast'  => 100,
				'positionShift' => 50,
				'imageRotation' => 0,
				'elementsDistance' => 20,
				'placementVariation' => 25,
			),
		),
		array(
			'label'  => 'Racing in the Rain',
			'value'  => 'racing-in-the-rain',
			'preset' => array(
				'sizeContrast'  => 80,
				'positionShift' => 80,
				'imageRotation' => 0,
				'elementsDistance' => 40,
				'placementVariation' => 25,
			),
		),
		array(
			'label'  => 'The Sun Also Rises',
			'value'  => 'the-sun-also-rises',
			'preset' => array(
				'sizeContrast'  => 20,
				'positionShift' => 75,
				'imageRotation' => 40,
				'elementsDistance' => 20,
				'placementVariation' => 25,
			),
		),
		array(
			'label'  => 'Memoirs of a Geisha',
			'value'  => 'memoirs-of-a-geisha',
			'preset' => array(
				'sizeContrast'  => 80,
				'positionShift' => 0,
				'imageRotation' => 0,
				'elementsDistance' => 20,
				'placementVariation' => 50,
			),
		),
	);
}

function novablocks_add_scrolling_effect_options( $settings ) {

	$options = array(
		array(
			'label' => esc_html__( 'Static', '__plugin_txtd' ),
			'value' => 'static'
		),
		array(
			'label' => esc_html__( 'Parallax', '__plugin_txtd' ),
			'value' => 'parallax'
		),
	);

	$settings = array_merge( $settings, array(
		'scrollingEffectOptions' => $options,
	) );

	return $settings;
}
add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_scrolling_effect_options' );

function novablocks_get_theme_support() {
	$theme_support = get_theme_support( 'novablocks' );
	$theme_support = is_array( $theme_support ) ? $theme_support[0] : false;

	$default = array(
		'hero',
		'media',
		'slideshow',
	);

	if ( is_array( $theme_support ) ) {
		$theme_support = array_unique( array_merge( $default, $theme_support ), SORT_REGULAR );
	} else {
		$theme_support = $default;
	}

	return $theme_support;
}

function novablocks_get_attributes_from_json( $path ) {
	$plugin_path = novablocks_get_plugin_path();
	$filename = trailingslashit( $plugin_path ) . $path;
	$body = file_get_contents( $filename );

	return json_decode( $body, true );
}

function novablocks_render_advanced_gallery( $attributes ) {

	$images = array();

	if ( ! empty( $attributes['images'] ) ) {
		$images = $attributes['images'];
	}

	if ( ! empty( $attributes['gallery'] ) ) {
		$images = $attributes['gallery'];
	}

	$advanced_gallery_attributes = array(
		'sizeContrast',
		'positionShift',
		'elementsDistance',
		'placementVariation',
		'imageResizing',
		'objectPosition',
		'containerHeight',
		'imageRotation',
	);

	$data_attributes = array();

	foreach ( $advanced_gallery_attributes as $attribute ) {
		if ( empty( $attributes[ $attribute ] ) ) {
			$attributes[ $attribute ] = 0;
		}

		$data_attributes[] = 'data-' . $attribute . '="' . $attributes[ $attribute ] . '"';
	}

	if ( ! empty( $images ) && is_array( $images ) ) {

		echo '<div class="novablocks-advanced-gallery" ' . join( ' ', $data_attributes ) . '>';
		echo '<div class="novablocks-advanced-gallery__grid">';

		foreach ( $images as $image ) {

			if ( is_string( $image ) ) {
				$image = json_decode( $image );
			}

			if ( ! empty( $image ) ) {
				$image = ( array ) $image;
			}

			if ( is_numeric( $image['id'] ) && intval( $image['id'] ) > 0 ) {
				$attachment = get_post( $image['id'] );
				$attachment_src = wp_get_attachment_image_src( $image['id'], 'novablocks_large' );
			}

			$url = '';

			if ( ! empty( $attachment_src ) ) {
				$url = $attachment_src[0];
			}

			// fallback for import
			if ( empty( $url ) ) {
				$url = novablocks_get_image_url( $image, 'novablocks_large' );
			}

			if ( ! empty( $url ) ) {
				echo '<div class="novablocks-advanced-gallery__grid-item">';
				echo '<div class="novablocks-advanced-gallery__grid-item-media">';

				if ( $image['type'] === 'video' ) {
					echo '<video muted autoplay loop playsinline class="novablocks-advanced-gallery__image" src="' . esc_url( $image['url'] ) . '"/>';
				} else {
					echo '<img class="novablocks-advanced-gallery__image" src="' . $url . '" />';
				}

				echo '</div>';

				if ( ! empty( $image['caption'] ) || ! empty( $attachment->post_content ) ) {

					echo '<div class="novablocks-advanced-gallery__grid-item-info">';

					if ( ! empty( $image['caption'] ) ) {
						echo '<div class="novablocks-advanced-gallery__grid-item-caption">' . $image['caption'] . '</div>';
					}

					if ( ! empty( $attachment->post_content ) ) {
						echo '<div class="novablocks-advanced-gallery__grid-item-description">' . $attachment->post_content . '</div>';
					}

					echo '</div>';

				}

				echo '</div>';
			}
		}

		echo '</div>';
		echo '</div>';

	}
}

function novablocks_get_card_media_padding_top( $containerHeight ) {
	$containerHeight = $containerHeight / 50 - 1;

	if ( $containerHeight < 0 ) {
		$containerHeight *= 3;
	}

	$numerator = 1;
	$denominator = 1;

	$containerHeight = min( max( -3, $containerHeight ), 1 );

	if ( $containerHeight > 0 ) {
		$numerator = 1 + $containerHeight;
	}

	if ( $containerHeight < 0 ) {
		$denominator = 1 + abs( $containerHeight );
	}

	return ( $numerator * 100 / $denominator ) . '%';
}

function novablocks_get_color_classes( $attributes ) {

	$classes = array();

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

function novablocks_get_spacing_css( $attributes ) {

	if ( ! empty( $attributes['blockTopSpacing'] ) ) {
		$blockTopSpacing = $attributes['blockTopSpacing'];
	} else {
		$blockTopSpacing = 0;
	}

	if ( ! empty( $attributes['blockBottomSpacing'] ) ) {
		$blockBottomSpacing = $attributes['blockBottomSpacing'];
	} else {
		$blockBottomSpacing = 0;
	}

	if ( ! empty( $attributes['emphasisTopSpacing'] ) ) {
		$emphasisTopSpacing = $attributes['emphasisTopSpacing'];
	} else {
		$emphasisTopSpacing = 1;
	}

	if ( ! empty( $attributes['emphasisBottomSpacing'] ) ) {
		$emphasisBottomSpacing = $attributes['emphasisBottomSpacing'];
	} else {
		$emphasisBottomSpacing = 1;
	}

	return array(
		'--block-top-spacing: ' . $blockTopSpacing,
		'--block-bottom-spacing: ' . $blockBottomSpacing,
		'--emphasis-top-spacing: ' . $emphasisTopSpacing,
		'--emphasis-bottom-spacing: ' . $emphasisBottomSpacing,
	);
}

if ( ! function_exists( 'novablocks_get_collection_output' ) ) {

	function novablocks_get_collection_output( $attributes, $content ) {
		$classes = array( 'novablocks-collection' );
		$classes[] = 'novablocks-block';
		$classes[] = 'alignfull';
		$classes[] = 'novablocks-collection--align-' . $attributes[ 'contentAlign' ];

		if ( $attributes['thumbnailAspectRatioString'] !== 'auto' ) {
			$classes[] = 'novablocks-card--fixed-media-aspect-ratio';
		}

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$cssProps = array(
			'--card-media-padding: ' . $attributes['imagePadding'],
			'--card-media-padding-top: ' . novablocks_get_card_media_padding_top( $attributes['containerHeight'] ),
			'--card-media-object-fit: ' . ( $attributes['imageResizing'] === 'cropped' ? 'cover' : 'scale-down' ),
		);

		$cssProps = array_merge( $cssProps, novablocks_get_spacing_css( $attributes ) );
		$style = join( '; ', $cssProps );

		$classes = array_merge( $classes, novablocks_get_color_classes( $attributes ) );
		$className = join( ' ', $classes );

		ob_start(); ?>

		<div class="<?php echo $className; ?>" style="<?php echo $style; ?>">
			<div class="wp-block-group__inner-container">
				<?php echo novablocks_get_collection_header_output( $attributes ); ?>
				<div class="novablocks-collection__cards wp-block alignwide">
					<div class="novablocks-collection__layout">
						<?php echo $content; ?>
					</div>
				</div>
			</div>
		</div>

		<?php return ob_get_clean();
	}
}

function novablocks_get_collection_header_output( $attributes ) {
	$titleTag = 'h' . $attributes['collectionTitleLevel'];

	$output = '';

	if ( ! empty( $attributes['showCollectionTitle'] ) ) {

		$output .= '<' . $titleTag . ' class="novablocks-collection__title wp-block alignwide">';

		$output .= $attributes['title'];


		$output .= '</' . $titleTag . '>';
	}

	if ( ! empty( $attributes['showCollectionSubtitle'] ) ) {
		$output .= '<p class="novablocks-collection__subtitle wp-block is-style-lead alignwide">' . $attributes['subtitle'] . '</p>';
	}

	return $output;
}

function novablocks_get_card_media_markup( $url ) {

	ob_start(); ?>

	<div class="novablocks-card__media-wrap">
		<div class="novablocks-card__media">
			<?php if ( ! empty( $url ) ) { ?>
				<img class="novablocks-card__media-image" src="<?php echo $url ?>" />
			<?php } else { ?>
				<div class="novablocks-card__media-placeholder">
					<svg width="100" height="67" viewBox="0 0 100 67" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M96.722 0H3.279C1.229 0 0 1.229 0 3.279V63.115C0 65.164 1.229 66.393 3.279 66.393H96.721C98.771 66.393 99.999 65.164 99.999 63.115V3.279C100 1.229 98.771 0 96.722 0ZM4.918 6.558C4.918 5.533 5.532 4.918 6.557 4.918H93.443C94.468 4.918 95.082 5.533 95.082 6.558V59.836C95.082 60.08 95.045 60.3 94.978 60.495C88.865 54.214 68.521 33.606 64.755 33.606C60.757 33.606 39.42 56.811 35.172 61.475H31.447C33.415 59.153 36.274 55.808 39.525 52.107C34.42 47.976 29.403 44.263 27.87 44.263C25.059 44.263 11.092 56.738 5.979 61.391C5.309 61.196 4.919 60.648 4.919 59.836V6.558H4.918Z" fill="#323067"/>
						<path d="M38.119 16.629C42.731 16.629 46.471 20.366 46.471 24.978C46.471 29.59 42.731 33.328 38.119 33.328C33.508 33.328 29.768 29.59 29.768 24.978C29.769 20.367 33.508 16.629 38.119 16.629Z" fill="#323067"/>
					</svg>
				</div>
			<?php } ?>
		</div>
	</div>

	<?php return ob_get_clean();
}

function novablocks_build_articles_query( $attributes ) {
	global $novablocks_rendered_posts_ids;

	if ( ! $novablocks_rendered_posts_ids ) {
		$novablocks_rendered_posts_ids = array();
	}

	$authors                 = isset( $attributes['authors'] ) ? $attributes['authors'] : array();
	$categories              = isset( $attributes['categories'] ) ? $attributes['categories'] : array();
	$tags                    = isset( $attributes['tags'] ) ? $attributes['tags'] : array();
	$specific_posts          = isset( $attributes['specificPosts'] ) ? $attributes['specificPosts'] : array();
	$posts_to_show           = isset( $attributes['postsToShow'] ) ? intval( $attributes['postsToShow'] ) : 3;
	$manual_mode             = isset( $attributes['loadingMode'] ) && 'manual' === $attributes['loadingMode'];
	$prevent_duplicate_posts = isset( $attributes['preventDuplicatePosts'] ) && $attributes['preventDuplicatePosts'];

	$args           = array(
		'post_status'         => 'publish',
		'suppress_filters'    => false,
		'ignore_sticky_posts' => true,
	);

	if ( $prevent_duplicate_posts ) {
		$args[ 'post__not_in' ] = $novablocks_rendered_posts_ids;
	}

	if ( $manual_mode && $specific_posts ) {
		$args['post__in'] = $specific_posts;
		$args['orderby']  = 'post__in';
	} else {
		$args['posts_per_page'] = $posts_to_show;
		if ( $authors && count( $authors ) ) {
			$args['author__in'] = $authors;
		}
		if ( $categories && count( $categories ) ) {
			$args['category__in'] = novablocks_expand_categories_to_include_subcategories( $categories );
		}
		if ( $tags && count( $tags ) ) {
			$args['tag__in'] = $tags;
		}
	}
	return $args;
}

function novablocks_expand_categories_to_include_subcategories( $category_ids ) {
	$all_category_ids = $category_ids;

	foreach ( $category_ids as $category_id ) {
		$subcategories = get_terms( 'category', array(
			'child_of' => $category_id
		) );

		$subcategories_ids = array_map( 'novablocks_array_map_terms_to_ids', $subcategories );
		$all_category_ids = array_merge( $all_category_ids, $subcategories_ids );
	}

	return $all_category_ids;
}

function novablocks_array_map_terms_to_ids( $term ) {
	return $term->term_id;
}

function novablocks_get_image_url( $image, $size ) {

	if ( isset( $image['sizes'][ $size ][ 'url' ] ) ) {
		return $image['sizes'][ $size ][ 'url' ];
	}

	if ( isset( $image['url'] ) ) {
		return $image['url'];
	}

	return '';
}

function novablocks_get_media_title( $media ) {

	if ( ! empty( $media['title'] ) ) {

		if ( is_string( $media['title'] ) ) {
			return $media['title'];
		}

		if ( isset( $media['title']['rendered'] ) ) {
			return wp_filter_nohtml_kses( $media['title']['rendered'] );
		}

	}

	return '';
}

function novablocks_the_media_title( $media, $before = '', $after = '', $echo = true ) {
	$title = novablocks_get_media_title( $media );

	if ( strlen( $title ) == 0 ) {
		return '';
	}

	$title = $before . $title . $after;

	if ( $echo ) {
		echo $title;
	} else {
		return $title;
	}
}

function novablocks_get_media_caption( $media ) {

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

function novablocks_custom_image_sizes( $sizes ) {
	return array_merge( $sizes, array(
		'novablocks_huge' => __('Nova Blocks Huge'),
		'novablocks_large' => __('Nova Blocks Large'),
		'novablocks_medium' => __('Nova Blocks Medium'),
		'novablocks_small' => __('Nova Blocks Small'),
		'novablocks_tiny' => __('Nova Blocks Tiny'),
	) );
}

function novablocks_rest_prepare_attachment( $response, $post, $request ) {
	if ( ! empty( $response->data['description'] ) ) {
		$response->data['description']['raw'] = $post->post_content;
	}
	return $response;
}
add_filter( 'rest_prepare_attachment', 'novablocks_rest_prepare_attachment', 10, 3 );

function novablocks_get_categories_with_children( $request ) {

	$ids = array();

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
	register_rest_route( 'novablocks/v1', '/categories', array(
		'methods' => 'GET',
		'callback' => 'novablocks_get_categories_with_children',
	) );
}
add_action( 'rest_api_init', 'novablocks_register_api_endpoints' );
