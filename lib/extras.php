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

function novablocks_get_alignment( $attributes ) {

	if ( ! empty( $attributes['contentPosition'] ) ) {
		return explode( ' ', $attributes['contentPosition'] );
	}

	$verticalAlignment = 'center';
	$horizontalAlignment = 'center';

	if ( isset( $attributes['verticalAlignment'] ) ) {
		$verticalAlignment = $attributes['verticalAlignment'];
	}

	if ( isset( $attributes['horizontalAlignment'] ) ) {
		$horizontalAlignment = $attributes['horizontalAlignment'];
	}

	return array(
		$verticalAlignment,
		$horizontalAlignment,
	);
}

function novablocks_get_alignment_classes( $attributes ) {
	$classes = array();

	$alignment = novablocks_get_alignment( $attributes );

	$classes[] = 'novablocks-u-valign-' . $alignment[0];
	$classes[] = 'novablocks-u-halign-' . $alignment[1];

	return $classes;
}

function novablocks_get_block_extra_classes( $attributes ) {
	$classes = novablocks_get_alignment_classes( $attributes );

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

function novablocks_get_collection_attributes() {
	return novablocks_get_attributes_from_json( 'packages/collection/src/collection-attributes.json' );
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
				'core/group',
				array(),
				array(
					array(
						'novablocks/headline',
						array(
							'secondary' => esc_html__( 'This is a catchy', '__theme_txtd' ),
							'primary'   => esc_html__( 'Headline', '__plugin_txtd' ),
							'align'     => 'center',
							'level'     => 1,
							'fontSize'     => 'larger',
							'className' => 'has-larger-font-size',
						),
					),
					array(
						'core/paragraph',
						array(
							'content' => esc_html__( 'A brilliant subtitle to explain its catchiness', '__plugin_txtd' ),
							'align'   => 'center',
							'className' => 'is-style-lead',
						),
					),
					array(
						'core/buttons',
						array(
							'align' => 'center',
							'contentJustification' => 'center'
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
				)
			),

		),
	);

	$settings['hero'] = $hero_settings;

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_hero_settings', 0 );

function novablocks_add_space_and_sizing_settings( $settings ) {

	if ( empty( $settings['modules'] ) ) {
		$settings['modules'] = array();
	}

	$settings['modules']['spaceAndSizing'] = array(
		'presetOptions' => novablocks_get_space_and_sizing_presets(),
		'advancedPresetOptions' => novablocks_get_space_and_sizing_advanced_presets()
	);

	return $settings;
}
add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_space_and_sizing_settings', 0 );

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
	);

	$settings['media'] = $media_settings;

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_media_settings', 0 );

function novablocks_get_space_and_sizing_presets() {
	return array(
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
	);
}

function novablocks_get_space_and_sizing_advanced_presets() {
	return array(
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
	);
}

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
				'label' => esc_html__( 'None', '__plugin_txtd' ),
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
		'blobPresetOptions'            => novablocks_get_blob_presets(),
		'theme_support'                => novablocks_get_theme_support(),
	);

	$settings = apply_filters( 'novablocks_block_editor_initial_settings', $settings );
	$settings = apply_filters( 'novablocks_block_editor_settings', $settings );

	return $settings;
}

function novablocks_get_blob_presets() {
	return array(
		array(
			'label'  => 'Rectangle',
			'value'  => 'rectangle',
			'preset' => array(
				'blobsEnableMask'             => false,
				'blobsEnableDecoration'       => false,
			),
		),
		array(
			'label'  => 'Ellipse',
			'value'  => 'ellipse',
			'preset' => array(
				'blobsEnableMask'             => true,
				'blobMaskSides'               => 4,
				'blobMaskPatternSeed'         => 1,
				'blobMaskComplexity'          => 0,
				'blobMaskSmoothness'          => 100,
				'blobMaskRotation'            => 0,

				'blobsEnableDecoration'       => false,
			),
		),
		array(
			'label'  => 'Diamond',
			'value'  => 'diamond',
			'preset' => array(
				'blobsEnableMask'             => true,
				'blobMaskSides'               => 6,
				'blobMaskPatternSeed'         => 1,
				'blobMaskComplexity'          => 0,
				'blobMaskSmoothness'          => 0,
				'blobMaskRotation'            => 0,

				'blobsEnableDecoration'       => false,
			),
		),
		array(
			'label'  => 'Seed',
			'value'  => 'seed',
			'preset' => array(
				'blobsEnableMask'             => true,
				'blobMaskSides'               => 5,
				'blobMaskPatternSeed'         => 70,
				'blobMaskComplexity'          => 100,
				'blobMaskSmoothness'          => 100,
				'blobMaskRotation'            => 0,

				'blobsEnableDecoration'       => false,
			),
		),
		array(
			'label'  => 'Blob',
			'value'  => 'blob',
			'preset' => array(
				'blobsEnableMask'             => true,
				'blobMaskSides'               => 7,
				'blobMaskPatternSeed'         => 50,
				'blobMaskComplexity'          => 100,
				'blobMaskSmoothness'          => 100,
				'blobMaskRotation'            => 0,

				'blobsEnableDecoration'       => false,
			),
		),
		array(
			'label'  => 'MX37: Stones',
			'value'  => 'stones-37',
			'preset' => array(
				'blobsEnableMask'             => true,
				'blobMaskSides'               => 3,
				'blobMaskPatternSeed'         => 30,
				'blobMaskComplexity'          => 100,
				'blobMaskSmoothness'          => 60,
				'blobMaskRotation'            => 70,

				'blobsEnableDecoration'       => true,
				'blobSides'                   => 4,
				'blobPatternSeed'             => 30,
				'blobComplexity'              => 90,
				'blobSmoothness'              => 100,
				'blobRotation'                => 70,

				'blobsHorizontalDisplacement' => 80,
				'blobsVerticalDisplacement'   => 60,
				'blobsSizeBalance'            => 60,
			),
		),
		array(
			'label'  => 'MX19: Seeds',
			'value'  => 'seeds-19',
			'preset' => array(
				'blobsEnableMask'             => true,
				'blobMaskSides'               => 5,
				'blobMaskPatternSeed'         => 90,
				'blobMaskComplexity'          => 80,
				'blobMaskSmoothness'          => 100,
				'blobMaskRotation'            => 50,

				'blobsEnableDecoration'       => true,
				'blobSides'                   => 5,
				'blobPatternSeed'             => 40,
				'blobComplexity'              => 80,
				'blobSmoothness'              => 100,
				'blobRotation'                => 100,

				'blobsHorizontalDisplacement' => 30,
				'blobsVerticalDisplacement'   => 60,
				'blobsSizeBalance'            => 50,
			),
		),
		array(
			'label'  => 'MX81: Ovoid',
			'value'  => 'ovoid-81',
			'preset' => array(
				'blobsEnableMask'             => true,
				'blobMaskSides'               => 6,
				'blobMaskPatternSeed'         => 10,
				'blobMaskComplexity'          => 100,
				'blobMaskSmoothness'          => 100,
				'blobMaskRotation'            => 100,

				'blobsEnableDecoration'       => true,
				'blobSides'                   => 3,
				'blobPatternSeed'             => 50,
				'blobComplexity'              => 100,
				'blobSmoothness'              => 50,
				'blobRotation'                => 40,

				'blobsHorizontalDisplacement' => 40,
				'blobsVerticalDisplacement'   => 30,
				'blobsSizeBalance'            => 45,
			),
		),
		array(
			'label'  => 'MX76: Leaf',
			'value'  => 'leaf-76',
			'preset' => array(
				'blobsEnableMask'             => true,
				'blobMaskSides'               => 3,
				'blobMaskPatternSeed'         => 100,
				'blobMaskComplexity'          => 100,
				'blobMaskSmoothness'          => 60,
				'blobMaskRotation'            => 80,

				'blobsEnableDecoration'       => true,
				'blobSides'                   => 6,
				'blobPatternSeed'             => 70,
				'blobComplexity'              => 100,
				'blobSmoothness'              => 100,
				'blobRotation'                => 10,

				'blobsHorizontalDisplacement' => 40,
				'blobsVerticalDisplacement'   => 40,
				'blobsSizeBalance'            => 45,
			),
		),
		array(
			'label'  => 'MX19: Ruby',
			'value'  => 'ruby-19',
			'preset' => array(
				'blobsEnableMask'             => true,
				'blobMaskSides'               => 5,
				'blobMaskPatternSeed'         => 0,
				'blobMaskComplexity'          => 0,
				'blobMaskSmoothness'          => 0,
				'blobMaskRotation'            => 10,

				'blobsEnableDecoration'       => true,
				'blobSides'                   => 5,
				'blobPatternSeed'             => 0,
				'blobComplexity'              => 0,
				'blobSmoothness'              => 0,
				'blobRotation'                => 40,

				'blobsHorizontalDisplacement' => 40,
				'blobsVerticalDisplacement'   => 30,
				'blobsSizeBalance'            => 50,
			),
		),
		array(
			'label'  => 'MX41: Diagonal',
			'value'  => 'diagonal-41',
			'preset' => array(
				'blobsEnableMask'             => true,
				'blobMaskSides'               => 8,
				'blobMaskPatternSeed'         => 0,
				'blobMaskComplexity'          => 0,
				'blobMaskSmoothness'          => 0,
				'blobMaskRotation'            => 0,

				'blobsEnableDecoration'       => true,
				'blobSides'                   => 4,
				'blobPatternSeed'             => 60,
				'blobComplexity'              => 100,
				'blobSmoothness'              => 0,
				'blobRotation'                => 50,

				'blobsHorizontalDisplacement' => 55,
				'blobsVerticalDisplacement'   => 45,
				'blobsSizeBalance'            => 35,
			),
		),
	);
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

	$required = array(
		'header-row',
		'supernova',
		'supernova-item',
	);

	$default = array(
		'hero',
		'media',
		'slideshow',
	);

	if ( is_array( $theme_support ) ) {
		$theme_support = array_unique( array_merge( $required, $default, $theme_support ), SORT_REGULAR );
	} else {
		$theme_support = $default;
	}

	return $theme_support;
}

function novablocks_get_attributes_from_json( $path ) {
	$plugin_path = novablocks_get_plugin_path();
	$filename = trailingslashit( $plugin_path ) . $path;
	if ( ! file_exists( $filename ) ) {
		return array();
	}

	return json_decode( file_get_contents( $filename ), true );
}

function novablocks_camel_case_to_kebab_case( $string ) {
	return strtolower( preg_replace( '%([A-Z])([a-z])%', '-\1\2', $string ) );
}

function novablocks_kebab_case_to_camel_case( $string ) {
	$str = str_replace( '-', '', ucwords( $string, '-' ) );
	$str = lcfirst( $str );
	return $str;
}

function novablocks_get_data_attributes( $data_attributes_array, $attributes, $blacklist = array() ) {
	$data_attributes = array();
	$default_blacklist = array( 'align' );
	$blacklist = array_merge( $default_blacklist, $blacklist );

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

		$data_attributes[] = 'data-' . $data_attribute . "='" . esc_attr( $value ) . "'";
	}

	return $data_attributes;
}

function novablocks_get_advanced_gallery_component_attributes() {

	return novablocks_merge_attributes_from_array( array(
		'packages/shape-modeling/src/attributes.json',
		'packages/media-composition/src/attributes.json'
	) );
	
}

function novablocks_render_advanced_gallery( $attributes ) {
	echo novablocks_get_advanced_gallery( $attributes );
}

function novablocks_get_advanced_gallery( $attributes ) {

	ob_start();

	$images = array();

	if ( ! empty( $attributes['images'] ) ) {
		$images = $attributes['images'];
	}

	if ( ! empty( $attributes['gallery'] ) ) {
		$images = $attributes['gallery'];
	}

	$attributes_config = novablocks_get_advanced_gallery_component_attributes();
	$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
	$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );

	// the images attribute outputs a lot of code which is not used in the frontend
	$blacklist = array( 'images', 'gallery' );

	foreach ( $blacklist as $attribute ) {
		if ( ( $key = array_search( $attribute, $data_attributes_array ) ) !== false ) {
			unset( $data_attributes_array[ $key ] );
		}
	}

	$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

	$cssProps = array(
		'--nb-advanced-gallery-aspect-ratio: ' . novablocks_get_card_media_padding_top( $attributes['containerHeight'] ) . '%'
	);

	$style = join( '; ', $cssProps );

	if ( ! empty( $images ) && is_array( $images ) ) {

		echo '<div class="novablocks-advanced-gallery" ' . join( ' ', $data_attributes ) . ' style="' . $style . '">';
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

				if ( ! empty( $attachment ) && $attachment->post_type === 'attachment' ) {
					$attachment_src = wp_get_attachment_image_src( $image['id'], 'novablocks_large' );
				}
			}

			$has_caption = ! empty( $image['caption'] );
			$has_description = ! empty( $attachment ) && $attachment->post_type === 'attachment' && ! empty( $attachment->post_content );

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

				if ( isset( $image['type'] ) && $image['type'] === 'video' ) {
					echo '<video muted autoplay loop playsinline class="novablocks-advanced-gallery__image" src="' . esc_url( $image['url'] ) . '"/>';
				} else {
					echo '<img class="novablocks-advanced-gallery__image" src="' . $url . '" />';
				}

				echo '</div>';

				if ( $has_caption || $has_description ) {

					echo '<div class="novablocks-advanced-gallery__grid-item-info">';

					if ( $has_caption ) {
						echo '<div class="novablocks-advanced-gallery__grid-item-caption">' . $image['caption'] . '</div>';
					}

					if ( $has_description ) {
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

	return ob_get_clean();
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

	return ( $numerator * 100 / $denominator );
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

	if ( ! isset( $attributes['blockTopSpacing'] ) ) {
		$blockTopSpacing = 0;
	} else {
		$blockTopSpacing = $attributes['blockTopSpacing'];
	}

	if ( ! isset( $attributes['blockBottomSpacing'] ) ) {
		$blockBottomSpacing = 0;
	} else {
		$blockBottomSpacing = $attributes['blockBottomSpacing'];
	}

	if ( ! isset( $attributes['emphasisTopSpacing'] ) ) {
		$emphasisTopSpacing = 1;
	} else {
		$emphasisTopSpacing = $attributes['emphasisTopSpacing'];
	}

	if ( ! isset( $attributes['emphasisBottomSpacing'] ) ) {
		$emphasisBottomSpacing = 1;
	} else {
		$emphasisBottomSpacing = $attributes['emphasisBottomSpacing'];
	}

	return array(
		'--nb-block-top-spacing: ' . $blockTopSpacing,
		'--nb-block-bottom-spacing: ' . $blockBottomSpacing,
		'--nb-emphasis-top-spacing: ' . $emphasisTopSpacing,
		'--nb-emphasis-bottom-spacing: ' . $emphasisBottomSpacing,
	);
}

if ( ! function_exists( 'novablocks_get_collection_output' ) ) {

	function novablocks_get_collection_output( $attributes, $content ) {
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$classes = array(
			'novablocks-block',
			'novablocks-block-spacing',
			'novablocks-collection',
			'novablocks-collection--align-' . $attributes[ 'contentAlign' ],
			'alignfull',
		);

		if ( $attributes['thumbnailAspectRatioString'] !== 'auto' ) {
			$classes[] = 'novablocks-card--fixed-media-aspect-ratio';
		}

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$cssProps = array(
			'--card-content-padding: ' . $attributes['contentPadding'],
			'--card-media-padding: ' . $attributes['imagePadding'],
			'--card-media-padding-top: ' . novablocks_get_card_media_padding_top( $attributes['containerHeight'] ) . '%',
			'--card-media-object-fit: ' . ( $attributes['imageResizing'] === 'cropped' ? 'cover' : 'scale-down' ),
		);

		$cssProps = array_merge( $cssProps, novablocks_get_spacing_css( $attributes ) );
		$style = join( '; ', $cssProps );

		$classes = array_merge( $classes, novablocks_get_color_classes( $attributes ) );

		$classes = array_merge( $classes, novablocks_get_color_signal_classes( $attributes ) );
		$className = join( ' ', $classes );

		ob_start(); ?>

		<div
			class="<?php echo $className; ?>"
			style="<?php echo $style; ?>"
			<?php echo join( " ", $data_attributes ); ?>
		>
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

	$align_class ='';

	if ( ! empty( $attributes['align']) ) {
		$align_class = 'align' . $attributes['align'];
	}

	if ( ! empty( $attributes['showCollectionTitle'] ) ) {

		$output .= '<' . $titleTag . ' class="novablocks-collection__title wp-block ' . $align_class . ' ">';

		$output .= $attributes['title'];


		$output .= '</' . $titleTag . '>';
	}

	if ( ! empty( $attributes['showCollectionSubtitle'] ) ) {
		$output .= '<p class="novablocks-collection__subtitle wp-block is-style-lead ' . $align_class . ' ">' . $attributes['subtitle'] . '</p>';
	}

	return $output;
}

function novablocks_get_card_media_markup( $media ) {

	$url = $media['url'];

	ob_start();

	if ( ! empty( $url ) ) {
		if ( isset( $media['type'] ) && $media['type'] === 'video' ) {
			echo '<video class="novablocks-card__media-image" muted autoplay loop playsinline src="' . esc_url( $url ) . '"/>';
		} else {
			$url = novablocks_get_image_url( $media, 'novablocks_medium' );
			echo '<img class="novablocks-card__media-image" src="' . $url . '" />';
		}
	} else { ?>
		<div class="novablocks-card__media-placeholder sm-variation-2">
			<svg width="100" height="67" viewBox="0 0 100 67" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M96.722 0H3.279C1.229 0 0 1.229 0 3.279V63.115C0 65.164 1.229 66.393 3.279 66.393H96.721C98.771 66.393 99.999 65.164 99.999 63.115V3.279C100 1.229 98.771 0 96.722 0ZM4.918 6.558C4.918 5.533 5.532 4.918 6.557 4.918H93.443C94.468 4.918 95.082 5.533 95.082 6.558V59.836C95.082 60.08 95.045 60.3 94.978 60.495C88.865 54.214 68.521 33.606 64.755 33.606C60.757 33.606 39.42 56.811 35.172 61.475H31.447C33.415 59.153 36.274 55.808 39.525 52.107C34.42 47.976 29.403 44.263 27.87 44.263C25.059 44.263 11.092 56.738 5.979 61.391C5.309 61.196 4.919 60.648 4.919 59.836V6.558H4.918Z" fill="currentColor"/>
				<path d="M38.119 16.629C42.731 16.629 46.471 20.366 46.471 24.978C46.471 29.59 42.731 33.328 38.119 33.328C33.508 33.328 29.768 29.59 29.768 24.978C29.769 20.367 33.508 16.629 38.119 16.629Z" fill="currentColor"/>
			</svg>
		</div>
	<?php }

	return ob_get_clean();
}

function novablocks_get_supernova_card_media_markup( $media ) {

	$url = $media['url'];

	ob_start();

	if ( ! empty( $url ) ) {
		if ( isset( $media['type'] ) && $media['type'] === 'video' ) {
			echo '<video class="supernova-card__media" muted autoplay loop playsinline src="' . esc_url( $url ) . '"/>';
		} else {
			$url = novablocks_get_image_url( $media, 'novablocks_medium' );
			echo '<img class="supernova-card__media" src="' . $url . '" />';
		}
	} else { ?>
		<div class="supernova-card__media supernova-card__media--placeholder">
			<svg width="100" height="67" viewBox="0 0 100 67" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M96.722 0H3.279C1.229 0 0 1.229 0 3.279V63.115C0 65.164 1.229 66.393 3.279 66.393H96.721C98.771 66.393 99.999 65.164 99.999 63.115V3.279C100 1.229 98.771 0 96.722 0ZM4.918 6.558C4.918 5.533 5.532 4.918 6.557 4.918H93.443C94.468 4.918 95.082 5.533 95.082 6.558V59.836C95.082 60.08 95.045 60.3 94.978 60.495C88.865 54.214 68.521 33.606 64.755 33.606C60.757 33.606 39.42 56.811 35.172 61.475H31.447C33.415 59.153 36.274 55.808 39.525 52.107C34.42 47.976 29.403 44.263 27.87 44.263C25.059 44.263 11.092 56.738 5.979 61.391C5.309 61.196 4.919 60.648 4.919 59.836V6.558H4.918Z" fill="currentColor"/>
				<path d="M38.119 16.629C42.731 16.629 46.471 20.366 46.471 24.978C46.471 29.59 42.731 33.328 38.119 33.328C33.508 33.328 29.768 29.59 29.768 24.978C29.769 20.367 33.508 16.629 38.119 16.629Z" fill="currentColor"/>
			</svg>
		</div>
	<?php }

	return ob_get_clean();
}

function novablocks_get_card_post_meta( $post, $attributes ) {
	$primaryMeta = novablocks_get_meta( $post, $attributes[ 'primaryMetadata' ] );
	$secondaryMeta = novablocks_get_meta( $post, $attributes[ 'secondaryMetadata' ] );
	$aboveTitleMeta = '';
	$belowTitleMeta = '';

	if ( ! empty( $primaryMeta ) && ! empty( $secondaryMeta ) ) {
		$combinedMeta = $primaryMeta . ' &mdash; ' . $secondaryMeta;
	} else {
		$combinedMeta = empty( $primaryMeta ) ? $secondaryMeta : $primaryMeta;
	}

	if ( 'above-title' === $attributes[ 'metadataPosition' ] ) {
		$aboveTitleMeta = $combinedMeta;
	}

	if ( 'below-title' === $attributes[ 'metadataPosition' ] ) {
		$belowTitleMeta = $combinedMeta;
	}

	if ( 'split' === $attributes[ 'metadataPosition' ] ) {
		$aboveTitleMeta = $primaryMeta;
		$belowTitleMeta = $secondaryMeta;
	}

	return array(
		$aboveTitleMeta,
		$belowTitleMeta
	);
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
	}

	return $title;
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
			'novablocks_huge'   => esc_html__( 'Nova Blocks Huge', '__plugin_txtd' ),
			'novablocks_large'  => esc_html__( 'Nova Blocks Large', '__plugin_txtd' ),
			'novablocks_medium' => esc_html__( 'Nova Blocks Medium', '__plugin_txtd' ),
			'novablocks_small'  => esc_html__( 'Nova Blocks Small', '__plugin_txtd' ),
			'novablocks_tiny'   => esc_html__( 'Nova Blocks Tiny', '__plugin_txtd' ),
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
		'permission_callback' => '__return_true',
	) );
}
add_action( 'rest_api_init', 'novablocks_register_api_endpoints' );

/**
 * Return the reading time in minutes for a post's content.
 * @param WP_Post|int $post
 * @param int $wpm The words per minute reading rate to take into account.
 * @return int
 */
function novablocks_get_post_reading_time_in_minutes( $post, $wpm = 250 ) {
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
 * @param string $content HTML post content.
 * @param int $wpm The words per minute reading rate to take into account.
 * @return int
 */
function novablocks_get_reading_time_in_minutes( $content, $wpm = 250 ) {
	// Calculate the time in seconds for the images in the content.
	$images_time = 0;
	if ( preg_match_all( '/<img\s[^>]+>/', $content, $matches ) ) {
		$num_images = count( $matches[0] );

		// The starting image weight (expressed in seconds of reading time).
		// This weight is decreasing one second with each image encountered, with a minium of 3 seconds.
		$img_weight = 12;
		for ( $i = 0; $i < $num_images; $i++ ) {
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
	$scripts_to_remove = array(
			'novablocks/media/frontend',
			'novablocks/advanced-gallery/frontend',
			'novablocks/posts-collection/frontend',
	);

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
// We need to cover both the head and the footer scripts
// since the block editor logic will enqueue the scripts again upon block render.
add_action( 'wp_head', 'novablocks_optimize_frontend_scripts_output', 8 ); // The wp_print_head_scripts() is hooked at 9.
add_action( 'login_head', 'novablocks_optimize_frontend_scripts_output', 8 ); // The wp_print_head_scripts() is hooked at 9.
add_action( 'embed_head', 'novablocks_optimize_frontend_scripts_output', 19 ); // The wp_print_head_scripts() is hooked at 20.
add_action( 'wp_footer', 'novablocks_optimize_frontend_scripts_output', 19 ); // The wp_print_footer_scripts() is hooked at 20.
add_action( 'login_footer', 'novablocks_optimize_frontend_scripts_output', 19 ); // The wp_print_footer_scripts() is hooked at 20.
add_action( 'embed_footer', 'novablocks_optimize_frontend_scripts_output', 19 ); // The wp_print_footer_scripts() is hooked at 20.

function novablocks_block_area_has_blocks( $slug ) {
	$posts = get_posts( array(
		'name'        => $slug,
		'post_type'   => 'block_area',
		'post_status' => 'publish',
		'numberposts' => 1,
		'fields' => 'ids',
	) );

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
 * @return bool True on success, false on failure.
 */

function novablocks_get_localize_to_window_script( $object_name, $l10n ) {
	$script = "window.$object_name = window.$object_name || parent.$object_name || {};\n";

	foreach ( (array) $l10n as $key => $value ) {
		if ( is_scalar( $value ) ) {
			$value = html_entity_decode( (string) $value, ENT_QUOTES, 'UTF-8' );
		}

		$script .= "$object_name.$key = " . wp_json_encode( $value ) . ";\n";
	}

	return $script;
}

function novablocks_get_color_signal_classes( $attributes ) {
	$classes = array();

	$classes[] = 'sm-palette-' . $attributes['palette'];

	if ( $attributes['colorSignal'] !== 0 ) {
		$classes[] = 'sm-variation-' . $attributes['paletteVariation'];
	}

	if ( ! empty( $attributes['useSourceColorAsReference'] ) ) {
		$classes[] = 'sm-palette--shifted';
	}

	return $classes;
}

function novablocks_get_color_signal_data_attributes( $attributes ) {

	$data_attributes = array(
		'data-palette="' . $attributes['palette'] . '"',
		'data-palette-variation="' . $attributes['paletteVariation'] . '"',
		'data-color-signal="' . $attributes['colorSignal'] . '"',
		'data-use-source-color-as-reference="' . $attributes['useSourceColorAsReference'] . '"',
	);

	return join( " ", $data_attributes );
}

function novablocks_normalize_variation_value( $variation ) {
	return ( $variation + 11 ) % 12 + 1;
}

function novablocks_get_content_palette_classes( $attributes ) {
	$contentVariation = novablocks_get_content_variation( $attributes );

	$classes = array(
		'sm-palette-' . $attributes['palette'],
		'sm-variation-' . $contentVariation
	);

	if ( ! empty( $attributes['useSourceColorAsReference'] ) ) {
		$classes[] = 'sm-palette--shifted';
	}

	return $classes;
}

function novablocks_get_content_variation( $attributes ) {
	$palettes_output = get_option( 'sm_advanced_palette_output', '[]' );
	$palettes = json_decode( $palettes_output );

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
	$offset = $siteVariation - 1;

	if ( $attributes[ 'useSourceColorAsReference' ] ) {
		$offset = $sourceIndex;
	}

	$referenceVariation = novablocks_normalize_variation_value( $attributes['paletteVariation'] + $offset );
	$contentSignalOptions = novablocks_get_signal_options_from_variation( $referenceVariation );
	return novablocks_normalize_variation_value( $contentSignalOptions[ $attributes['contentColorSignal'] ] - $offset );
}

function novablocks_get_content_style_class( $attributes ) {
	$contentStyle = 'moderate';

	if ( ! empty( $attributes['contentStyle'] ) ) {
		$contentStyle = $attributes['contentStyle'];
	}

	if ( ! isset( $attributes['upgradedToModerate'] ) && $contentStyle === 'basic' ) {
		$contentStyle = 'moderate';
	}

	return 'content-is-' . $contentStyle;
}

function novablocks_get_customizer_link( $return_url = false,  $extra_query_args = array() ) {
	global $wp;


	if ( empty( $return_url ) ) {
		// Get the current frontend URL.
		$return_url = home_url( add_query_arg( array(), $wp->request ) );
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

function novablocks_merge_attributes_from_array( $pathsArray ) {
	$accumulator = [];

	foreach ( $pathsArray as $path ) {
		$attributes = novablocks_get_attributes_from_json( $path );
		$accumulator = array_merge( $accumulator, $attributes );
	}

	return $accumulator;
}


function novablocks_get_supernova_card_markup( $media, $content, $attributes ) {

	$cardClasses = array(
		'novablocks-doppler',
		'supernova-card',
		'supernova-card--layout-' . $attributes[ 'cardLayout' ],
	);

	$cssProps = array(
		'--collection-card-media-opacity: ' . $attributes[ 'cardMediaOpacity' ] / 100,
		'--nb-card-media-padding-top: ' . novablocks_get_card_media_padding_top( $attributes[ 'containerHeight' ] ),
		'--collection-card-content-area-width: ' . $attributes[ 'contentAreaWidth' ] . '%',
	);

	$innerContainerClasses = array(
		'supernova-card__inner-container'
	);

	$contentPaletteClasses = novablocks_get_color_signal_classes( $attributes );
	$innerContainerClasses = array_merge( $innerContainerClasses, $contentPaletteClasses );

	$align = preg_split( '/\b\s+/', $attributes[ 'contentPosition' ] );

	$contentClasses = array(
		'supernova-card__content',
		'supernova-card__content--valign-' . $align[0],
		'supernova-card__content--halign-' . $align[1],
	);

	$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
	$blacklist = array( 'images' );
	$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes, $blacklist );

	ob_start(); ?>

	<div class="supernova-collection__layout-item">
		<div <?php echo join( ' ', $data_attributes ); ?>
			 class="<?php echo join( ' ', $cardClasses ); ?>"
			 style="<?php echo join( '; ', $cssProps ); ?>">
			<div class="supernova-card__media-wrapper <?php echo join( ' ', $contentPaletteClasses ); ?>" <?php echo novablocks_get_color_signal_data_attributes( $attributes ); ?>>
				<div class="supernova-card__media-aspect-ratio">
					<div class="novablocks-doppler__mask novablocks-doppler__wrapper">
						<div class="supernova-card__media-doppler novablocks-doppler__target">
							<?php echo $media; ?>
						</div>
					</div>
				</div>
			</div>
			<?php if ( novablocks_show_card_contents( $attributes ) ) { ?>
				<div class="<?php echo join( ' ', $contentClasses ); ?>">
					<div class="<?php echo join( ' ', $innerContainerClasses ); ?>" <?php echo novablocks_get_color_signal_data_attributes( $attributes ); ?>>
						<?php echo $content; ?>
					</div>
				</div>
			<?php } ?>
		</div>
	</div>
	<?php return ob_get_clean();
}

function novablocks_get_supernova_card_markup_from_post( $post, $attributes ) {
	$media_url = get_the_post_thumbnail_url( $post );

	$media_markup = novablocks_get_supernova_card_media_markup( array(
		'type' => 'image',
		'url'  => $media_url,
	) );

	$content_markup = novablocks_get_post_card_contents( $post, $attributes );

	return novablocks_get_supernova_card_markup( $media_markup, $content_markup, $attributes );

}



function novablocks_get_card_contents( $attributes ) {
	ob_start();

	echo novablocks_get_card_item_meta( $attributes['metaAboveTitle'], $attributes );
	echo novablocks_get_card_item_title( $attributes['title'], $attributes );
	echo novablocks_get_card_item_meta( $attributes['metaBelowTitle'], $attributes );
	echo novablocks_get_card_item_description( $attributes['description'], $attributes );
	echo novablocks_get_card_item_buttons( array(
		array(
			'text' => $attributes[ 'buttonText' ],
			'url' => $attributes ['buttonUrl' ],
		)
	), $attributes );

	return ob_get_clean();
}

function novablocks_get_card_item_meta( $metaValue, $attributes ) {
	ob_start(); ?>

	<?php if ( false !== $attributes['showMeta'] && ! empty( $metaValue ) ) { ?>
		<div class="novablocks-grid__item-meta novablocks-card__meta is-style-meta">
			<div class="novablocks-card__meta-size-modifier">
				<?php echo $metaValue; ?>
			</div>
		</div>
	<?php }

	return ob_get_clean();
}

function novablocks_get_card_item_title( $title, $attributes ) {
	$titleTag = 'h' . $attributes['cardTitleLevel'];

	ob_start();

	if ( ! empty( $title ) && ! empty( $attributes['showTitle'] ) ) {
		echo '<' . $titleTag . ' class="novablocks-grid__item-title novablocks-card__title">';
		echo '<div class="novablocks-card__title-size-modifier">';
		echo $title;
		echo '</div>';
		echo '</' . $titleTag . '>';
	}

	return ob_get_clean();
}

function novablocks_get_card_item_description( $description, $attributes ) {
	ob_start();

	if ( ! empty( $description ) && ! empty( $attributes['showDescription'] ) ) { ?>
		<div class="novablocks-grid__item-content novablocks-card__description">
			<div class="novablocks-card__content-size-modifier">
				<?php echo $description; ?>
			</div>
		</div>
	<?php }

	return ob_get_clean();
}

function novablocks_get_card_item_buttons( $buttons, $attributes ) {
	ob_start();

	if ( ! empty( $attributes['showButtons'] ) && ! empty( $buttons ) ) { ?>
		<div class="novablocks-grid__item-buttons novablocks-card__buttons">
			<div class="wp-block-buttons alignleft">
				<?php foreach ( $buttons as $button ) { ?>
					<div class="wp-block-button is-style-text">
						<a class="wp-block-button__link" href="<?php echo $button['url'] ?>">
							<span class="novablocks-buttons-size-modifier"><?php echo $button['text']; ?></span>
						</a>
					</div>
				<?php } ?>
			</div>
		</div>
	<?php }

	return ob_get_clean();
}

function novablocks_get_signal_options_from_variation( $variation ) {
	$blockSignal = novablocks_get_signal_from_variation( $variation );

	$variationOptions = array();

	for ( $index = 0; $index < 4; $index++ ) {
		if ( $index === $blockSignal ) {
			$variationOptions[] = $variation;
		} else {
			$variationOptions[] = novablocks_get_variation_from_signal( $index );
		}
	}

	usort( $variationOptions, function( $variation1, $variation2 ) use ( $variation ) {
		return abs( $variation - $variation1 ) < abs( $variation - $variation2 ) ? - 1 : 1;
	} );

	return $variationOptions;
}

function novablocks_get_signal_from_variation( $variation ) {

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

function novablocks_get_variation_from_signal( $signal ) {

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

/**
 * Render out the duotone stylesheet and SVG.
 *
 *
 * @param string $block_content Rendered block content.
 * @param array  $block         Block object.
 *
 * @return string Filtered block content.
 */
function nova_blocks_alter_wp_render_duotone_support( $block_content, $block ) {

	$duotone_support = false;

	if ( $block['blockName'] === 'novablocks/supernova' ) {
		$duotone_support = 'img';
	}

	$has_duotone_attribute = isset( $block['attrs']['style']['color']['duotone'] );

	if (
		! $duotone_support ||
		! $has_duotone_attribute
	) {
		return $block_content;
	}

	$duotone_colors = $block['attrs']['style']['color']['duotone'];

	$duotone_values = array(
		'r' => array(),
		'g' => array(),
		'b' => array(),
	);
	foreach ( $duotone_colors as $color_str ) {
		$color = wp_tinycolor_string_to_rgb( $color_str );

		$duotone_values['r'][] = $color['r'] / 255;
		$duotone_values['g'][] = $color['g'] / 255;
		$duotone_values['b'][] = $color['b'] / 255;
	}

	$duotone_id = 'wp-duotone-filter-' . uniqid();

	$selectors        = explode( ',', $duotone_support );
	$selectors_scoped = array_map(
		function ( $selector ) use ( $duotone_id ) {
			return '.' . $duotone_id . ' ' . trim( $selector );
		},
		$selectors
	);
	$selectors_group  = implode( ', ', $selectors_scoped );

	ob_start();

	?>

	<style>
		<?php echo $selectors_group; ?> {
			filter: url( <?php echo esc_url( '#' . $duotone_id ); ?> );
		}
	</style>

	<svg
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 0 0"
		width="0"
		height="0"
		focusable="false"
		role="none"
		style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"
	>
		<defs>
			<filter id="<?php echo esc_attr( $duotone_id ); ?>">
				<feColorMatrix
					type="matrix"
					<?php // phpcs:disable Generic.WhiteSpace.DisallowSpaceIndent ?>
					values=".299 .587 .114 0 0
							.299 .587 .114 0 0
							.299 .587 .114 0 0
							0 0 0 1 0"
					<?php // phpcs:enable Generic.WhiteSpace.DisallowSpaceIndent ?>
				/>
				<feComponentTransfer color-interpolation-filters="sRGB" >
					<feFuncR type="table" tableValues="<?php echo esc_attr( implode( ' ', $duotone_values['r'] ) ); ?>" />
					<feFuncG type="table" tableValues="<?php echo esc_attr( implode( ' ', $duotone_values['g'] ) ); ?>" />
					<feFuncB type="table" tableValues="<?php echo esc_attr( implode( ' ', $duotone_values['b'] ) ); ?>" />
				</feComponentTransfer>
			</filter>
		</defs>
	</svg>

	<?php

	$duotone = ob_get_clean();

	// Like the layout hook, this assumes the hook only applies to blocks with a single wrapper.
	$content = preg_replace(
		'/' . preg_quote( 'class="', '/' ) . '/',
		'class="' . $duotone_id . ' ',
		$block_content,
		1
	);

	return $content . $duotone;
}

add_filter( 'render_block', 'nova_blocks_alter_wp_render_duotone_support', 10, 2 );
