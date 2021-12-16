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
 * @return mixed
 */
function novablocks_handle_theme_supports( $supports, $args, $theme_features ) {
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

function novablocks_allowed_block_types( $allowed_block_types, $post ) {

	if ( $post->post_type === 'block_area' ) {

		if ( $post->post_name === 'header' ) {
			return [ 'novablocks/header' ];
		}

		if ( $post->post_name === 'promo-bar' ) {
			return [ 'novablocks/announcement-bar', 'novablocks/openhours', 'core/paragraph' ];
		}
	}

	return $allowed_block_types;
}

add_filter( 'allowed_block_types', 'novablocks_allowed_block_types', 10, 2 );

function novablocks_get_alignment_attributes() {
	return [
		'horizontalAlignment' => [
			'type'    => 'string',
			'default' => 'center',
		],
		'verticalAlignment'   => [
			'type'    => 'string',
			'default' => 'center',
		],
	];
}

function novablocks_get_doppler_attributes() {
	return [
		'focalPoint'             => [
			'type'    => 'object',
			'default' => [
				'x' => 0.5,
				'y' => 0.5,
			],
		],
		'finalFocalPoint'        => [
			'type'    => 'object',
			'default' => [
				'x' => 0.5,
				'y' => 0.5,
			],
		],
		'initialBackgroundScale' => [
			'type'    => 'number',
			'default' => 1,
		],
		'finalBackgroundScale'   => [
			'type'    => 'number',
			'default' => 1,
		],
		'scrollIndicatorBlock'   => [
			'type'    => 'boolean',
			'default' => false,
		],
		'scrollingEffect'        => [
			'type'    => 'string',
			'default' => 'parallax',
		],
		'motionPreset'           => [
			'type'    => 'string',
			'default' => 'standard-dynamic',
		],
		'followThroughStart'     => [
			'type'    => 'boolean',
			'default' => true,
		],
		'followThroughEnd'       => [
			'type'    => 'boolean',
			'default' => true,
		],
	];
}

function novablocks_get_alignment( $attributes ) {

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

function novablocks_get_alignment_classes( $attributes ) {
	$classes = [];

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

	$hero_settings = [
		'template' => [
			[
				'core/group',
				[],
				[
					[
						'novablocks/headline',
						[
							'secondary' => esc_html__( 'This is a catchy', '__plugin_txtd' ),
							'primary'   => esc_html__( 'Headline', '__plugin_txtd' ),
							'align'     => 'center',
							'level'     => 1,
							'fontSize'  => 'larger',
							'className' => 'has-larger-font-size',
						],
					],
					[
						'core/paragraph',
						[
							'content'   => esc_html__( 'A brilliant subtitle to explain its catchiness', '__plugin_txtd' ),
							'align'     => 'center',
							'className' => 'is-style-lead',
						],
					],
					[
						'core/buttons',
						[
							'align'                => 'center',
							'contentJustification' => 'center',
						],
						[
							[
								'core/button',
								[
									'text' => esc_html__( 'Discover more', '__plugin_txtd' ),
								],
							],
						],
					],
				],
			],
		],
	];

	$settings['hero'] = $hero_settings;

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_hero_settings', 0 );

function novablocks_add_space_and_sizing_settings( $settings ) {

	if ( empty( $settings['modules'] ) ) {
		$settings['modules'] = [];
	}

	$settings['modules']['spaceAndSizing'] = [
		'presetOptions'         => novablocks_get_space_and_sizing_presets(),
		'advancedPresetOptions' => novablocks_get_space_and_sizing_advanced_presets(),
	];

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_space_and_sizing_settings', 0 );

function novablocks_add_media_settings( $settings ) {

	$media_settings = [
		'template' => [
			[
				'core/heading',
				[
					'content' => esc_html__( 'Shoot for the moon, Even if You Miss it', '__plugin_txtd' ),
					'level'   => 4,
				],
			],
			[
				'core/heading',
				[
					'content' => esc_html__( 'Welcome to our planet, look and feel matters!', '__plugin_txtd' ),
					'level'   => 2,
				],
			],
			[
				'core/paragraph',
				[
					'content' => esc_html__( "We've always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to reach for the stars, to make the unknown known.", '__plugin_txtd' ),
				],
			],
			[
				'core/buttons',
				[
					'align' => 'center',
				],
				[
					[
						'core/button',
						[
							'text' => esc_html__( 'Discover More', '__plugin_txtd' ),
						],
					],
				],
			],
		],
	];

	$settings['media'] = $media_settings;

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_media_settings', 0 );

function novablocks_get_space_and_sizing_presets() {
	return [
		[
			'label'  => esc_html__( 'Default Block Spacing', '__plugin_txtd' ),
			'value'  => 'default',
			'preset' => [
				'blockTopSpacing'       => 1,
				'blockBottomSpacing'    => 0,
				'emphasisTopSpacing'    => 0,
				'emphasisBottomSpacing' => 0,
				'enableOverlapping'     => false,
				'verticalAlignment'     => 'center',
			],
		],
		[
			'label'  => esc_html__( 'Overlap Nearby Blocks / Bottom', '__plugin_txtd' ),
			'value'  => 'overlap-nearby-2',
			'preset' => [
				'blockTopSpacing'       => 0,
				'blockBottomSpacing'    => -2,
				'emphasisTopSpacing'    => 2,
				'emphasisBottomSpacing' => -2,
				'enableOverlapping'     => true,
				'verticalAlignment'     => 'top',
			],
		],
		[
			'label'  => esc_html__( 'Overlap Nearby Blocks / Centered', '__plugin_txtd' ),
			'value'  => 'overlap-nearby-1',
			'preset' => [
				'blockTopSpacing'       => -2,
				'blockBottomSpacing'    => -2,
				'emphasisTopSpacing'    => -2,
				'emphasisBottomSpacing' => -2,
				'enableOverlapping'     => true,
				'verticalAlignment'     => 'center',
			],
		],
		[
			'label'  => esc_html__( 'Overlap Nearby Blocks / Top', '__plugin_txtd' ),
			'value'  => 'overlap-nearby-3',
			'preset' => [
				'blockTopSpacing'       => -2,
				'blockBottomSpacing'    => 0,
				'emphasisTopSpacing'    => -2,
				'emphasisBottomSpacing' => 2,
				'enableOverlapping'     => true,
				'verticalAlignment'     => 'bottom',
			],
		],
	];
}

function novablocks_get_space_and_sizing_advanced_presets() {
	return [
		[
			'label'  => esc_html__( 'Overlap 1 / Top Anchoring', '__plugin_txtd' ),
			'value'  => 'overlap1',
			'preset' => [
				'blockTopSpacing'       => 0,
				'blockBottomSpacing'    => 2,
				'emphasisTopSpacing'    => -2,
				'emphasisBottomSpacing' => -2,
				'enableOverlapping'     => true,
				'verticalAlignment'     => 'top',
			],
		],
		[
			'label'  => esc_html__( 'Overlap 2 / Centered', '__plugin_txtd' ),
			'value'  => 'overlap2',
			'preset' => [
				'blockTopSpacing'       => 1,
				'blockBottomSpacing'    => 1,
				'emphasisTopSpacing'    => -2,
				'emphasisBottomSpacing' => -2,
				'enableOverlapping'     => true,
				'verticalAlignment'     => 'center',
			],
		],
		[
			'label'  => esc_html__( 'Overlap 3 / Bottom Anchoring', '__plugin_txtd' ),
			'value'  => 'overlap3',
			'preset' => [
				'blockTopSpacing'       => 2,
				'blockBottomSpacing'    => 0,
				'emphasisTopSpacing'    => -2,
				'emphasisBottomSpacing' => -2,
				'enableOverlapping'     => true,
				'verticalAlignment'     => 'bottom',
			],
		],
	];
}

function novablocks_add_slideshow_settings( $settings ) {

	$slideshow_settings = [
		'minHeightOptions' => [
			[
				'label' => esc_html__( 'Auto', '__plugin_txtd' ),
				'value' => 0,
			],
			[
				'label' => esc_html__( 'Half', '__plugin_txtd' ),
				'value' => 50,
			],
			[
				'label' => esc_html__( 'Two Thirds', '__plugin_txtd' ),
				'value' => 66,
			],
			[
				'label' => esc_html__( 'Three Quarters', '__plugin_txtd' ),
				'value' => 75,
			],
			[
				'label' => esc_html__( 'Full Height', '__plugin_txtd' ),
				'value' => 100,
			],
		],
	];

	$settings['slideshow'] = $slideshow_settings;

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_slideshow_settings', 0 );

function novablocks_add_separator_settings( $settings ) {
	$separator_settings = [
		'markup' => '<hr />',
	];

	$settings['separator'] = $separator_settings;

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_separator_settings', 0 );

function novablocks_get_block_editor_settings() {

	$settings = [
		'debug'                        => defined( 'NOVABLOCKS_DEBUG' ) && NOVABLOCKS_DEBUG,
		'usePostMetaAttributes'        => defined( 'NOVABLOCKS_USE_POST_META_ATTRIBUTES' ) && NOVABLOCKS_USE_POST_META_ATTRIBUTES,
		'minimumHeightOptions'         => [
			[
				'label' => esc_html__( 'None', '__plugin_txtd' ),
				'value' => 0,
			],
			[
				'label' => esc_html__( 'Half', '__plugin_txtd' ),
				'value' => 50,
			],
			[
				'label' => esc_html__( 'Two Thirds', '__plugin_txtd' ),
				'value' => 66,
			],
			[
				'label' => esc_html__( 'Three Quarters', '__plugin_txtd' ),
				'value' => 75,
			],
			[
				'label' => esc_html__( 'Full', '__plugin_txtd' ),
				'value' => 100,
			],
		],
		'contentPaddingOptions'        => [
			[
				'label' => esc_html__( 'Small', '__plugin_txtd' ),
				'value' => 'small',
			],
			[
				'label' => esc_html__( 'Medium', '__plugin_txtd' ),
				'value' => 'medium',
			],
			[
				'label' => esc_html__( 'Large', '__plugin_txtd' ),
				'value' => 'large',
			],
			[
				'label' => esc_html__( 'Custom', '__plugin_txtd' ),
				'value' => 'custom',
			],
		],
		'contentWidthOptions'          => [
			[
				'label' => esc_html__( 'Full', '__plugin_txtd' ),
				'value' => 'full',
			],
			[
				'label' => esc_html__( 'Large', '__plugin_txtd' ),
				'value' => 'large',
			],
			[
				'label' => esc_html__( 'Narrow', '__plugin_txtd' ),
				'value' => 'narrow',
			],
			[
				'label' => esc_html__( 'Custom', '__plugin_txtd' ),
				'value' => 'custom',
			],
		],
		'motionPresetOptions'          => [
			[
				'label'  => 'Standard Dynamic',
				'value'  => 'standard-dynamic',
				'preset' => [
					'focalPoint'             => [
						'x' => 0.5,
						'y' => 0,
					],
					'finalFocalPoint'        => [
						'x' => 0.5,
						'y' => 1,
					],
					'initialBackgroundScale' => 1.75,
					'finalBackgroundScale'   => 1,
					'followThroughStart'     => true,
					'followThroughEnd'       => true,
				],
			],
			[
				'label'  => 'Pull Focus',
				'value'  => 'pull-focus',
				'preset' => [
					'focalPoint'             => [
						'x' => 0.5,
						'y' => 0.5,
					],
					'finalFocalPoint'        => [
						'x' => 0.5,
						'y' => 1,
					],
					'initialBackgroundScale' => 1,
					'finalBackgroundScale'   => 1.75,
					'followThroughStart'     => true,
					'followThroughEnd'       => true,
				],
			],
			[
				'label'  => 'Static Reveal',
				'value'  => 'static-reveal',
				'preset' => [
					'focalPoint'             => [
						'x' => 0.5,
						'y' => 0.5,
					],
					'finalFocalPoint'        => [
						'x' => 0.5,
						'y' => 0.5,
					],
					'initialBackgroundScale' => 1.75,
					'finalBackgroundScale'   => 1,
					'followThroughStart'     => true,
					'followThroughEnd'       => true,
				],
			],
			[
				'label' => 'Custom',
				'value' => 'custom',
			],
		],
		'advancedGalleryPresetOptions' => novablocks_get_media_composition_markup_presets(),
		'blobPresetOptions'            => novablocks_get_blob_presets(),
		'theme_support'                => novablocks_get_theme_support(),
	];

	$settings = apply_filters( 'novablocks_block_editor_initial_settings', $settings );
	$settings = apply_filters( 'novablocks_block_editor_settings', $settings );

	return $settings;
}

function novablocks_get_blob_presets() {
	return [
		[
			'label'  => 'Rectangle',
			'value'  => 'rectangle',
			'preset' => [
				'blobsEnableMask'       => false,
				'blobsEnableDecoration' => false,
			],
		],
		[
			'label'  => 'Ellipse',
			'value'  => 'ellipse',
			'preset' => [
				'blobsEnableMask'     => true,
				'blobMaskSides'       => 4,
				'blobMaskPatternSeed' => 1,
				'blobMaskComplexity'  => 0,
				'blobMaskSmoothness'  => 100,
				'blobMaskRotation'    => 0,

				'blobsEnableDecoration' => false,
			],
		],
		[
			'label'  => 'Diamond',
			'value'  => 'diamond',
			'preset' => [
				'blobsEnableMask'     => true,
				'blobMaskSides'       => 6,
				'blobMaskPatternSeed' => 1,
				'blobMaskComplexity'  => 0,
				'blobMaskSmoothness'  => 0,
				'blobMaskRotation'    => 0,

				'blobsEnableDecoration' => false,
			],
		],
		[
			'label'  => 'Seed',
			'value'  => 'seed',
			'preset' => [
				'blobsEnableMask'     => true,
				'blobMaskSides'       => 5,
				'blobMaskPatternSeed' => 70,
				'blobMaskComplexity'  => 100,
				'blobMaskSmoothness'  => 100,
				'blobMaskRotation'    => 0,

				'blobsEnableDecoration' => false,
			],
		],
		[
			'label'  => 'Blob',
			'value'  => 'blob',
			'preset' => [
				'blobsEnableMask'     => true,
				'blobMaskSides'       => 7,
				'blobMaskPatternSeed' => 50,
				'blobMaskComplexity'  => 100,
				'blobMaskSmoothness'  => 100,
				'blobMaskRotation'    => 0,

				'blobsEnableDecoration' => false,
			],
		],
		[
			'label'  => 'MX37: Stones',
			'value'  => 'stones-37',
			'preset' => [
				'blobsEnableMask'     => true,
				'blobMaskSides'       => 3,
				'blobMaskPatternSeed' => 30,
				'blobMaskComplexity'  => 100,
				'blobMaskSmoothness'  => 60,
				'blobMaskRotation'    => 70,

				'blobsEnableDecoration' => true,
				'blobSides'             => 4,
				'blobPatternSeed'       => 30,
				'blobComplexity'        => 90,
				'blobSmoothness'        => 100,
				'blobRotation'          => 70,

				'blobsHorizontalDisplacement' => 80,
				'blobsVerticalDisplacement'   => 60,
				'blobsSizeBalance'            => 60,
			],
		],
		[
			'label'  => 'MX19: Seeds',
			'value'  => 'seeds-19',
			'preset' => [
				'blobsEnableMask'     => true,
				'blobMaskSides'       => 5,
				'blobMaskPatternSeed' => 90,
				'blobMaskComplexity'  => 80,
				'blobMaskSmoothness'  => 100,
				'blobMaskRotation'    => 50,

				'blobsEnableDecoration' => true,
				'blobSides'             => 5,
				'blobPatternSeed'       => 40,
				'blobComplexity'        => 80,
				'blobSmoothness'        => 100,
				'blobRotation'          => 100,

				'blobsHorizontalDisplacement' => 30,
				'blobsVerticalDisplacement'   => 60,
				'blobsSizeBalance'            => 50,
			],
		],
		[
			'label'  => 'MX81: Ovoid',
			'value'  => 'ovoid-81',
			'preset' => [
				'blobsEnableMask'     => true,
				'blobMaskSides'       => 6,
				'blobMaskPatternSeed' => 10,
				'blobMaskComplexity'  => 100,
				'blobMaskSmoothness'  => 100,
				'blobMaskRotation'    => 100,

				'blobsEnableDecoration' => true,
				'blobSides'             => 3,
				'blobPatternSeed'       => 50,
				'blobComplexity'        => 100,
				'blobSmoothness'        => 50,
				'blobRotation'          => 40,

				'blobsHorizontalDisplacement' => 40,
				'blobsVerticalDisplacement'   => 30,
				'blobsSizeBalance'            => 45,
			],
		],
		[
			'label'  => 'MX76: Leaf',
			'value'  => 'leaf-76',
			'preset' => [
				'blobsEnableMask'     => true,
				'blobMaskSides'       => 3,
				'blobMaskPatternSeed' => 100,
				'blobMaskComplexity'  => 100,
				'blobMaskSmoothness'  => 60,
				'blobMaskRotation'    => 80,

				'blobsEnableDecoration' => true,
				'blobSides'             => 6,
				'blobPatternSeed'       => 70,
				'blobComplexity'        => 100,
				'blobSmoothness'        => 100,
				'blobRotation'          => 10,

				'blobsHorizontalDisplacement' => 40,
				'blobsVerticalDisplacement'   => 40,
				'blobsSizeBalance'            => 45,
			],
		],
		[
			'label'  => 'MX19: Ruby',
			'value'  => 'ruby-19',
			'preset' => [
				'blobsEnableMask'     => true,
				'blobMaskSides'       => 5,
				'blobMaskPatternSeed' => 0,
				'blobMaskComplexity'  => 0,
				'blobMaskSmoothness'  => 0,
				'blobMaskRotation'    => 10,

				'blobsEnableDecoration' => true,
				'blobSides'             => 5,
				'blobPatternSeed'       => 0,
				'blobComplexity'        => 0,
				'blobSmoothness'        => 0,
				'blobRotation'          => 40,

				'blobsHorizontalDisplacement' => 40,
				'blobsVerticalDisplacement'   => 30,
				'blobsSizeBalance'            => 50,
			],
		],
		[
			'label'  => 'MX41: Diagonal',
			'value'  => 'diagonal-41',
			'preset' => [
				'blobsEnableMask'     => true,
				'blobMaskSides'       => 8,
				'blobMaskPatternSeed' => 0,
				'blobMaskComplexity'  => 0,
				'blobMaskSmoothness'  => 0,
				'blobMaskRotation'    => 0,

				'blobsEnableDecoration' => true,
				'blobSides'             => 4,
				'blobPatternSeed'       => 60,
				'blobComplexity'        => 100,
				'blobSmoothness'        => 0,
				'blobRotation'          => 50,

				'blobsHorizontalDisplacement' => 55,
				'blobsVerticalDisplacement'   => 45,
				'blobsSizeBalance'            => 35,
			],
		],
	];
}

function novablocks_get_media_composition_markup_presets() {
	return [
		[
			'label'  => 'The Cloud Atlas',
			'value'  => 'the-cloud-atlas',
			'preset' => [
				'sizeContrast'       => 0,
				'positionShift'      => 0,
				'imageRotation'      => 0,
				'elementsDistance'   => 20,
				'placementVariation' => 25,
			],
		],
		[
			'label'  => 'Pride and Prejudice',
			'value'  => 'pride-and-prejudice',
			'preset' => [
				'sizeContrast'       => 60,
				'positionShift'      => 70,
				'imageRotation'      => 0,
				'elementsDistance'   => 40,
				'placementVariation' => 0,
			],
		],
		[
			'label'  => 'Brave New World',
			'value'  => 'brave-new-world',
			'preset' => [
				'sizeContrast'       => 20,
				'positionShift'      => 25,
				'imageRotation'      => 0,
				'elementsDistance'   => 20,
				'placementVariation' => 50,
			],
		],
		[
			'label'  => 'A Walk to Remember',
			'value'  => 'a-walk-to-remember',
			'preset' => [
				'sizeContrast'       => 100,
				'positionShift'      => 50,
				'imageRotation'      => 0,
				'elementsDistance'   => 20,
				'placementVariation' => 25,
			],
		],
		[
			'label'  => 'Racing in the Rain',
			'value'  => 'racing-in-the-rain',
			'preset' => [
				'sizeContrast'       => 80,
				'positionShift'      => 80,
				'imageRotation'      => 0,
				'elementsDistance'   => 40,
				'placementVariation' => 25,
			],
		],
		[
			'label'  => 'The Sun Also Rises',
			'value'  => 'the-sun-also-rises',
			'preset' => [
				'sizeContrast'       => 20,
				'positionShift'      => 75,
				'imageRotation'      => 40,
				'elementsDistance'   => 20,
				'placementVariation' => 25,
			],
		],
		[
			'label'  => 'Memoirs of a Geisha',
			'value'  => 'memoirs-of-a-geisha',
			'preset' => [
				'sizeContrast'       => 80,
				'positionShift'      => 0,
				'imageRotation'      => 0,
				'elementsDistance'   => 20,
				'placementVariation' => 50,
			],
		],
	];
}

function novablocks_add_scrolling_effect_options( $settings ) {

	$options = [
		[
			'label' => esc_html__( 'Static', '__plugin_txtd' ),
			'value' => 'static',
		],
		[
			'label' => esc_html__( 'Parallax', '__plugin_txtd' ),
			'value' => 'parallax',
		],
	];

	$settings = array_merge( $settings, [
		'scrollingEffectOptions' => $options,
	] );

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_scrolling_effect_options' );

function novablocks_get_theme_support() {
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
function novablocks_array_merge_recursive_distinct() {
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
				$base[ $key ] = novablocks_array_merge_recursive_distinct( $base[ $key ], $append[ $key ] );
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

function novablocks_is_block_supported( $block_name ) {
	$support = novablocks_get_theme_support();
	if ( ! is_array( $support ) ) {
		return false;
	}

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

function novablocks_camel_case_to_kebab_case( $string ) {
	return strtolower( preg_replace( '%([A-Z])([a-z])%', '-\1\2', $string ) );
}

function novablocks_kebab_case_to_camel_case( $string ) {
	$str = str_replace( '-', '', ucwords( $string, '-' ) );
	$str = lcfirst( $str );

	return $str;
}

function novablocks_get_data_attributes( $data_attributes_array, $attributes, $blacklist = [] ) {
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

function novablocks_get_media_composition_markup_component_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/shape-modeling/src/attributes.json',
		'packages/media-composition/src/attributes.json',
	] );

}

function novablocks_render_media_composition( $attributes ) {
	echo novablocks_get_media_composition_markup( $attributes );
}

function novablocks_get_media_composition_markup( $attributes ) {

	ob_start();

	$images = [];

	if ( ! empty( $attributes['images'] ) ) {
		$images = $attributes['images'];
	}

	if ( ! empty( $attributes['gallery'] ) ) {
		$images = $attributes['gallery'];
	}

	$attributes_config = novablocks_merge_attributes_from_array( [
		'packages/media-composition/src/attributes.json',
	] );

	$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes_config ) );
	$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

	if ( ! empty( $images ) && is_array( $images ) ) {

		echo '<div class="novablocks-media-composition" ' . join( ' ', $data_attributes ) . '>';
		echo '<div class="novablocks-media-composition__grid">';

		foreach ( $images as $index => $image ) {

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

			$has_caption     = ! empty( $image['caption'] );
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
				echo '<div class="novablocks-media-composition__grid-item">';
				echo '<div class="novablocks-media-composition__grid-item-media">';

				$data_attrs = 'data-shape-modeling-target data-shape-modeling-shape-offset="' . $index . '"';

				if ( isset( $image['type'] ) && $image['type'] === 'video' ) {
					echo '<video class="novablocks-media-composition__image" ' . $data_attrs . ' muted autoplay loop playsinline src="' . esc_url( $image['url'] ) . '"/>';
				} else {
					echo '<img class="novablocks-media-composition__image" ' . $data_attrs . ' src="' . $url . '" />';
				}

				echo '</div>';

				if ( $has_caption || $has_description ) {

					echo '<div class="novablocks-media-composition__grid-item-info">';

					if ( $has_caption ) {
						echo '<div class="novablocks-media-composition__grid-item-caption">' . $image['caption'] . '</div>';
					}

					if ( $has_description ) {
						echo '<div class="novablocks-media-composition__grid-item-description">' . $attachment->post_content . '</div>';
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

function novablocks_get_color_classes( $attributes ) {

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

function novablocks_get_space_and_sizing_css( $attributes, $advanced = false ) {

	$spacing_props = novablocks_get_spacing_css( $attributes );

	if ( $advanced ) {
		$spacing_props = novablocks_get_spacing_advanced_css( $attributes );
	}

	return array_merge(
		$spacing_props,
		novablocks_get_sizing_css( $attributes ),
	);
}

function novablocks_get_media_composition_css( $attributes ) {
	return [
		'--nb-media-composition-gap: ' . $attributes['elementsDistance'] . 'px',
	];
}

function novablocks_get_color_signal_css( $attributes ) {
	return [
		'--nb-emphasis-area: ' . $attributes['emphasisArea'],
	];
}

;

function novablocks_get_overlay_filter_css( $attributes ) {
	return [
		'--nb-overlay-filter-strength: ' . $attributes['overlayFilterStrength'] / 100,
	];
}

function novablocks_get_sizing_css( $attributes ) {
	return [
		'--nb-card-layout-gap-modifier: ' . $attributes['layoutGutter'] / 100,
		'--nb-card-content-padding-multiplier: ' . $attributes['contentPadding'] / 100,
		'--nb-card-media-padding-multiplier: ' . $attributes['imagePadding'] / 100,
		'--nb-card-media-padding-top: ' . novablocks_get_card_media_padding_top( $attributes['thumbnailAspectRatio'] ) . '%',
		'--nb-card-media-object-fit: ' . ( $attributes['imageResizing'] === 'cropped' ? 'cover' : 'scale-down' ),
		'--nb-minimum-container-height: ' . $attributes['minHeightFallback'] . 'vh',
		'--nb-card-content-area-width: ' . $attributes['contentAreaWidth'] . '%',
		'--nb-spacing-modifier: ' . $attributes['spacingModifier'] . ''
	];
}

function novablocks_get_collection_layout_css( $attributes ) {
	return [
		'--nb-collection-columns-count: ' . $attributes['columns'],
		'--nb-grid-spacing-modifier: ' . $attributes['gridGap'],
	];
}

function novablocks_get_spacing_css( $attributes ) {

	$blockTopSpacing       = $attributes['blockTopSpacing'];
	$blockBottomSpacing    = $attributes['blockBottomSpacing'];
	$emphasisTopSpacing    = $attributes['emphasisTopSpacing'];
	$emphasisBottomSpacing = $attributes['emphasisBottomSpacing'];

	return [
		'--nb-block-top-spacing: ' . $blockTopSpacing,
		'--nb-block-bottom-spacing: ' . $blockBottomSpacing,
		'--nb-emphasis-top-spacing: ' . $emphasisTopSpacing,
		'--nb-emphasis-bottom-spacing: ' . $emphasisBottomSpacing,
	];
}

function novablocks_get_spacing_advanced_css( $attributes ) {
	$verticalAlignment = isset( $attributes['verticalAlignment'] ) ? $attributes['verticalAlignment'] : 'center';

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

	function novablocks_get_collection_output( $attributes, $content ) {

		if ( 'content' === $attributes['sourceType'] ) {
			$content = novablocks_get_posts_collection_cards_markup( $attributes );
		}

		$collection_header = novablocks_get_collection_header_output( $attributes );

		$layout_classes = [
			'nb-collection__layout',
			'nb-collection__layout--' . $attributes['layoutStyle'],
			'nb-collection__layout--' . $attributes['carouselLayout'] . '-width',
		];

		if ( ! empty( $attributes['showCollectionSubtitle'] ) && ! empty( $attributes['subtitle'] ) ) {
			$header_classes[] = 'nb-collection__header--has-description';
		}

		if ( empty( $collection_header ) && empty( $content ) ) {
			return '';
		}

		$collection_classes = [
			'nb-collection',
			'align' . $attributes['align'],
			'nb-block-spacing-container'
		];

		ob_start(); ?>

		<div class="<?php echo join( " ", $collection_classes ); ?>">

			<?php if ( ! empty( $collection_header ) ) { ?>
				<div class="nb-collection__header">
					<div class="nb-collection__inner-container">
						<?php echo $collection_header ?>
					</div>
				</div>
			<?php } ?>

			<div class="nb-collection__body">
				<div class="<?php echo esc_attr( join( ' ', $layout_classes ) ); ?>">
					<?php echo $content; ?>
				</div>
			</div>

		</div>

		<?php return ob_get_clean();
	}
}

function novablocks_render_scroll_indicator( $attributes ) {
	$scrollIndicator        = ! empty( $attributes['scrollIndicatorBlock'] );
	$scrollIndicatorClasses = [ 'nb-scroll-indicator', ];
	$blockHeight            =
		( ! empty( $attributes['scrollingEffect'] ) && $attributes['scrollingEffect'] === 'doppler' )
			? $attributes['minHeightFallback'] * 2
			: $attributes['minHeightFallback'];

	if ( $blockHeight > 100 ) {
		$scrollIndicatorClasses[] = 'nb-scroll-indicator--middle';
	}

	$scrollIndicatorClass = join( ' ', $scrollIndicatorClasses );

	if ( $scrollIndicator ) { ?>
		<div class="<?php echo $scrollIndicatorClass; ?>">
			<svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 50C55 50 45 0 80 0C115 0 105 50 160 50H0Z"/>
			</svg>
		</div>
	<?php }
}

function novablocks_get_collection_header_output( $attributes ) {
	$titleTag = 'h' . $attributes['collectionTitleLevel'];

	$output = '';

	if ( ! empty( $attributes['showCollectionTitle'] ) && ! empty( $attributes['title'] ) ) {
		$output .= '<' . $titleTag . ' class="nb-collection__title wp-block alignfull">';
		$output .= $attributes['title'];
		$output .= '</' . $titleTag . '>';
	}

	if ( ! empty( $attributes['showCollectionSubtitle'] ) && ! empty( $attributes['subtitle'] ) ) {
		$output .= '<p class="nb-collection__subtitle wp-block is-style-lead alignfull">' . $attributes['subtitle'] . '</p>';
	}

	return $output;
}

function novablocks_get_collection_card_media_markup( $media ) {

	$media_args = [
		'type'  => 'image',
		'url'   => '',
		'alt'   => '',
		'sizes' => [],
	];
	$media      = wp_parse_args( $media, $media_args );

	ob_start();

	if ( ! empty( $media['url'] ) ) {
		if ( isset( $media['type'] ) && $media['type'] === 'video' ) {
			echo '<video class="supernova-item__media" data-shape-modeling-target muted autoplay loop playsinline src="' . esc_url( $media['url'] ) . '"></video>';
		} else {
			echo '<img class="supernova-item__media" data-shape-modeling-target src="' . esc_url( novablocks_get_image_url( $media, 'novablocks_medium' ) ) . '" alt="' . esc_attr( $media['alt'] ) . '" />';
		}
	} else { ?>
		<div class="supernova-item__media supernova-item__media--placeholder" data-shape-modeling-target></div>
	<?php }

	return ob_get_clean();
}

function novablocks_get_card_post_meta( $post, $attributes ) {
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

function novablocks_build_articles_query( $attributes ) {
	global $novablocks_rendered_posts_ids;

	if ( ! $novablocks_rendered_posts_ids ) {
		$novablocks_rendered_posts_ids = [];
	}

	$authors                 = isset( $attributes['authors'] ) ? $attributes['authors'] : [];
	$categories              = isset( $attributes['categories'] ) ? $attributes['categories'] : [];
	$tags                    = isset( $attributes['tags'] ) ? $attributes['tags'] : [];
	$specific_posts          = isset( $attributes['specificPosts'] ) ? $attributes['specificPosts'] : [];
	$posts_to_show           = isset( $attributes['postsToShow'] ) ? intval( $attributes['postsToShow'] ) : 3;
	$manual_mode             = isset( $attributes['loadingMode'] ) && 'manual' === $attributes['loadingMode'];
	$prevent_duplicate_posts = isset( $attributes['preventDuplicatePosts'] ) && $attributes['preventDuplicatePosts'];

	$args = [
		'post_status'         => 'publish',
		'suppress_filters'    => false,
		'ignore_sticky_posts' => true,
	];

	if ( $prevent_duplicate_posts ) {
		$args['post__not_in'] = $novablocks_rendered_posts_ids;
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
		$subcategories = get_terms( 'category', [
			'child_of' => $category_id,
		] );

		$subcategories_ids = array_map( 'novablocks_array_map_terms_to_ids', $subcategories );
		$all_category_ids  = array_merge( $all_category_ids, $subcategories_ids );
	}

	return $all_category_ids;
}

function novablocks_array_map_terms_to_ids( $term ) {
	return $term->term_id;
}

function novablocks_get_image_url( $image, $size ) {

	if ( isset( $image['sizes'][ $size ]['url'] ) ) {
		return $image['sizes'][ $size ]['url'];
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
 *
 * @param string $content HTML post content.
 * @param int    $wpm     The words per minute reading rate to take into account.
 *
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

// We need to cover both the head and the footer scripts
// since the block editor logic will enqueue the scripts again upon block render.
add_action( 'wp_head', 'novablocks_optimize_frontend_scripts_output', 8 );       // The wp_print_head_scripts() is hooked at 9.
add_action( 'login_head', 'novablocks_optimize_frontend_scripts_output', 8 );    // The wp_print_head_scripts() is hooked at 9.
add_action( 'embed_head', 'novablocks_optimize_frontend_scripts_output', 19 );   // The wp_print_head_scripts() is hooked at 20.
add_action( 'wp_footer', 'novablocks_optimize_frontend_scripts_output', 19 );    // The wp_print_footer_scripts() is hooked at 20.
add_action( 'login_footer', 'novablocks_optimize_frontend_scripts_output', 19 ); // The wp_print_footer_scripts() is hooked at 20.
add_action( 'embed_footer', 'novablocks_optimize_frontend_scripts_output', 19 ); // The wp_print_footer_scripts() is hooked at 20.

function novablocks_block_area_has_blocks( $slug ) {
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

function novablocks_get_color_signal_classes( $attributes, $outputSignal = false ) {
	$classes = [];

	$classes[] = 'sm-palette-' . $attributes['palette'];
	$classes[] = 'sm-variation-' . $attributes['paletteVariation'];

	if ( ! empty( $attributes['useSourceColorAsReference'] ) ) {
		$classes[] = 'sm-palette--shifted';
	}

	return $classes;
}

function novablocks_get_color_signal_data_attributes( $attributes ) {

	$data_attributes = [
		'data-palette="' . $attributes['palette'] . '"',
		'data-palette-variation="' . $attributes['paletteVariation'] . '"',
		'data-color-signal="' . $attributes['colorSignal'] . '"',
		'data-use-source-color-as-reference="' . $attributes['useSourceColorAsReference'] . '"',
	];

	return join( ' ', $data_attributes );
}

function novablocks_normalize_variation_value( $variation ) {
	return ( $variation + 11 ) % 12 + 1;
}

function novablocks_get_content_palette_classes( $attributes ) {
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

function novablocks_get_content_variation( $attributes ) {
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

function novablocks_get_customizer_link( $return_url = false, $extra_query_args = [] ) {
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

function novablocks_merge_attributes_from_array( $pathsArray ) {
	$accumulator = [];

	foreach ( $pathsArray as $path ) {
		$attributes  = novablocks_get_attributes_from_json( $path );
		$accumulator = array_merge( $accumulator, $attributes );
	}

	return $accumulator;
}

function novablocks_get_grid_area_fallback_classnames( $attributes ) {
	$classes = [];

	if ( ! empty( $attributes['columns'] ) && $attributes['layoutStyle'] !== 'parametric' ) {
		$cardLayout = 'portrait';

		if ( ! empty( $attributes['cardLayout'] )
		     && in_array( $attributes['cardLayout'], [ 'horizontal', 'horizontal-reverse' ] ) ) {

			$cardLayout = 'landscape';
		}

		$classes[] = 'nb-grid__area--' . $cardLayout;
		$classes[] = novablocks_get_area_classname_by_width_ratio( 1 / $attributes['columns'] );
	}

	return $classes;
}

function novablocks_get_area_classname_by_width_ratio( $ratio ) {
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

function novablocks_get_collection_card_markup( $media, $content, $attributes ) {

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

	$data_attributes_array = array(
		'palette',
		'palette-variation',
		'color-signal',
		'content-palette-variation',
		'content-color-signal',
		'use-source-color-as-reference',
	);

	if ( $attributes['columns'] === 1 &&
		 $attributes['cardLayout'] === 'stacked' &&
		 $attributes['layoutStyle'] !== 'carousel' ) {
		$data_attributes_array[] = 'position-indicators';
	}

	$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

	ob_start(); ?>

	<div class="nb-collection__layout-item">
		<div class="<?php echo esc_attr( join( ' ', $cardClasses ) ); ?>" <?php echo join( ' ', $data_attributes ); ?>>
			<?php if ( ! empty( $media ) && ! empty( $attributes['showMedia'] ) ) { ?>
				<?php echo $media; ?>
			<?php } ?>
			<?php if ( novablocks_show_card_contents( $attributes ) && ! empty( $content ) ) { ?>
				<div class="<?php echo esc_attr( join( ' ', $contentClasses ) ); ?>">
					<div class="supernova-item__inner-container">
						<?php echo $content; ?>
						<?php novablocks_render_scroll_indicator( $attributes ); ?>
					</div>
				</div>
			<?php } ?>
		</div>
	</div>

	<?php
	return ob_get_clean();
}

function novablocks_get_collection_card_markup_from_post( $post, $attributes ) {
	$media_url = get_the_post_thumbnail_url( $post );
	$media = novablocks_get_collection_card_media_markup( [
		'type' => 'image',
		'url'  => $media_url,
	] );

	$media_markup = novablocks_get_collection_card_media_markup_wrapped( $media, get_permalink( $post ) );

	$content = novablocks_get_post_card_contents( $post, $attributes );

	$attributes['colorSignal']               = $attributes['contentColorSignal'];
	$attributes['paletteVariation']          = $attributes['contentPaletteVariation'];
	$attributes['useSourceColorAsReference'] = false;

	return novablocks_get_collection_card_markup( $media_markup, $content, $attributes );
}

function novablocks_get_collection_card_media_markup_wrapped( $media, $link = false ) {
	ob_start();

	if ( ! empty( $link ) ) {
		echo '<a class="supernova-item__media-wrapper" href="' . esc_url( $link ) . '">';
	} else {
		echo '<div class="supernova-item__media-wrapper">';
	} ?>

		<div class="supernova-item__media-aspect-ratio">
			<div class="novablocks-doppler__mask novablocks-doppler__wrapper">
				<div class="supernova-item__media-doppler novablocks-doppler__target">
					<?php echo $media; ?>
				</div>
			</div>
		</div>

	<?php if ( ! empty( $link ) ) {
		echo '</a>';
	} else {
		echo '</div>';
	}

	return ob_get_clean();
}

function novablocks_get_card_contents( $attributes ) {

	ob_start();

	echo novablocks_get_card_item_meta( $attributes['metaAboveTitle'], $attributes );
	echo novablocks_get_card_item_title( $attributes['title'], $attributes, $post );
	echo novablocks_get_card_item_subtitle( $attributes['subtitle'], $attributes );
	echo novablocks_get_card_item_meta( $attributes['metaBelowTitle'], $attributes );
	echo novablocks_get_card_item_description( $attributes['description'], $attributes );
	echo novablocks_get_card_item_buttons( [
		[
			'text' => $attributes['buttonText'],
			'url'  => $attributes ['buttonUrl'],
		],
	], $attributes );

	return ob_get_clean();
}

function novablocks_get_card_item_meta( $metaValue, $attributes ) {
	ob_start();

	if ( ! empty( $attributes['showMeta'] ) && ! empty( $metaValue ) ) { ?>
		<p class="nb-card__meta is-style-meta">
			<?php echo $metaValue; ?>
		</p>
	<?php }

	return ob_get_clean();
}

function novablocks_get_card_item_title( $title, $attributes, $post ) {
	$titleTag = 'h' . $attributes['cardTitleLevel'];

	ob_start();

	if ( ! empty( $title ) && ! empty( $attributes['showTitle'] ) ) {
		echo '<' . $titleTag . ' class="nb-card__title">';
		echo novablocks_get_card_item_link( get_permalink( $post ), $attributes, 'open' );
		echo $title;
		echo novablocks_get_card_item_link( get_permalink( $post ), $attributes, 'close' );
		echo '</' . $titleTag . '>';
	}

	return ob_get_clean();
}

function novablocks_get_card_item_subtitle( $subtitle, $attributes ) {
	$subtitleTag = 'h' . ( ( int ) $attributes['cardTitleLevel'] + 1 );

	ob_start();

	if ( ! empty( $subtitle ) && ! empty( $attributes['showSubtitle'] ) ) {
		echo '<' . $subtitleTag . ' class="nb-card__subtitle">';
		echo $subtitle;
		echo '</' . $subtitleTag . '>';
	}

	return ob_get_clean();
}

function novablocks_get_card_item_description( $description, $attributes ) {
	ob_start();

	if ( ! empty( $description ) && ! empty( $attributes['showDescription'] ) ) { ?>
		<p class="nb-card__description">
			<?php echo $description; ?>
		</p>
	<?php }

	return ob_get_clean();
}

function novablocks_get_card_item_buttons( $buttons, $attributes ) {

	$buttons_markup = '';

	if ( ! empty( $buttons ) ) {
		ob_start();

		foreach ( $buttons as $button ) {
			if ( ! empty ( $button['text'] ) ) { ?>
				<div class="wp-block-button is-style-text">
					<a class="wp-block-button__link" href="<?php echo esc_url( $button['url'] ); ?>">
						<?php echo $button['text']; ?>
					</a>
				</div>
			<?php }
		}

		$buttons_markup = trim( ob_get_clean() );
	}

	ob_start();

	if ( ! empty( $attributes['showButtons'] ) && ! empty( $buttons_markup ) ) { ?>
		<div class="nb-card__buttons">
			<?php echo $buttons_markup; ?>
		</div>
	<?php }

	return ob_get_clean();
}

function novablocks_get_card_item_link( $url, $attributes, $tag_direction = false ) {
	ob_start();

	if ( ! empty( $attributes['sourceType'] ) && 'content' === $attributes['sourceType'] ) {
		if ( ! $tag_direction ) { ?>
			<a href="<?php echo esc_url( $url ); ?>" class="supernova-item__link"></a>
		<?php } else if ( $tag_direction == 'open' ) { ?>
			<a href="<?php echo esc_url( $url ); ?>" class="supernova-item__link">
		<?php } else if ( $tag_direction == 'close' ) { ?>
			</a>
		<?php }
	}

	return ob_get_clean();
}

function novablocks_get_signal_options_from_variation( $variation ) {
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

	$duotone_values = [
		'r' => [],
		'g' => [],
		'b' => [],
	];
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
		<?php echo $selectors_group; ?>
		{
			filter: url( <?php echo esc_url( '#' . $duotone_id ); ?> )
		;
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
				<feComponentTransfer color-interpolation-filters="sRGB">
					<feFuncR type="table"
					         tableValues="<?php echo esc_attr( implode( ' ', $duotone_values['r'] ) ); ?>"/>
					<feFuncG type="table"
					         tableValues="<?php echo esc_attr( implode( ' ', $duotone_values['g'] ) ); ?>"/>
					<feFuncB type="table"
					         tableValues="<?php echo esc_attr( implode( ' ', $duotone_values['b'] ) ); ?>"/>
				</feComponentTransfer>
			</filter>
		</defs>
	</svg>

	<?php

	$duotone = ob_get_clean();

	// Like the layout hook, this assumes the hook only applies to blocks with a single wrapper.
	$content = preg_replace(
		'/' . preg_quote( 'class="', '/' ) . '/',
		'class="' . esc_attr( $duotone_id ) . ' ',
		$block_content,
		1
	);

	return $content . $duotone;
}

add_filter( 'render_block', 'nova_blocks_alter_wp_render_duotone_support', 10, 2 );

function novablocks_get_posts_collection_cards_markup( $attributes ) {
	global $novablocks_rendered_posts_ids;

	ob_start();

	$args  = novablocks_build_articles_query( $attributes );
	$posts = get_posts( $args );

	foreach ( $posts as $post ) {
		array_push( $novablocks_rendered_posts_ids, $post->ID );
		$card_markup = novablocks_get_collection_card_markup_from_post( $post, $attributes );
		echo apply_filters( 'novablocks_get_collection_card_markup', $card_markup, $post, $attributes );
	}

	return ob_get_clean();
}

function novablocks_show_card_contents( $attributes ) {
	return ! empty( $attributes['showMeta'] ) ||
	       ! empty( $attributes['showTitle'] ) ||
	       ! empty( $attributes['showSubtitle'] ) ||
	       ! empty( $attributes['showDescription'] ) ||
	       ! empty( $attributes['showButtons'] );
}

function novablocks_get_post_card_contents( $post, $attributes ) {
	ob_start();

	// echo novablocks_get_card_item_link( get_permalink( $post ), $attributes );

	$title          = get_the_title( $post );
	$postMeta       = novablocks_get_card_post_meta( $post, $attributes );
	$aboveTitleMeta = $postMeta[0];
	$belowTitleMeta = $postMeta[1];
	echo novablocks_get_card_item_meta( $aboveTitleMeta, $attributes );
	echo novablocks_get_card_item_title( $title, $attributes, $post );
	echo novablocks_get_card_item_meta( $belowTitleMeta, $attributes );

	$excerpt = get_the_excerpt( $post );
	echo novablocks_get_card_item_description( $excerpt, $attributes );

	echo novablocks_get_card_item_buttons( [
		[
			'text' => esc_html__( 'Read More', '__plugin_txtd' ),
			'url'  => get_permalink( $post ),
		],
	], $attributes );


	return ob_get_clean();
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

function novablocks_get_tag_name( $tag ) {
	return $tag->name;
}
