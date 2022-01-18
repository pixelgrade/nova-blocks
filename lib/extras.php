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
function novablocks_handle_theme_supports( $supports, $args, $theme_features ): bool {
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

function novablocks_get_alignment_attributes(): array {
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

function novablocks_get_doppler_attributes(): array {
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

function novablocks_add_hero_settings( array $settings ): array {

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

function novablocks_add_space_and_sizing_settings( array $settings ): array {

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

function novablocks_add_media_settings( array $settings ): array {

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

function novablocks_get_space_and_sizing_presets(): array {
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

function novablocks_get_space_and_sizing_advanced_presets(): array {
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

function novablocks_add_slideshow_settings( array $settings ): array {

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

function novablocks_add_separator_settings( array $settings ): array {
	$separator_settings = [
		'markup' => '<hr />',
	];

	$settings['separator'] = $separator_settings;

	return $settings;
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_separator_settings', 0 );

function novablocks_get_block_editor_settings(): array {

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

function novablocks_get_blob_presets(): array {
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

function novablocks_get_media_composition_markup_presets(): array {
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

function novablocks_add_scrolling_effect_options( array $settings ): array {

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

	return array_merge( $settings, [
		'scrollingEffectOptions' => $options,
	] );
}

add_filter( 'novablocks_block_editor_initial_settings', 'novablocks_add_scrolling_effect_options' );

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

function novablocks_get_media_composition_markup_component_attributes(): array {

	return novablocks_merge_attributes_from_array( [
		'packages/shape-modeling/src/attributes.json',
		'packages/media-composition/src/attributes.json',
	] );

}

function novablocks_render_media_composition( array $attributes ) {
	echo novablocks_get_media_composition_markup( $attributes );
}

function novablocks_get_media_composition_markup( array $attributes ): string {

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

	$attributes_config = novablocks_merge_attributes_from_array( [
		'packages/media-composition/src/attributes.json',
	] );

	$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes_config ) );
	$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

	$output .= '<div class="novablocks-media-composition" ' . join( ' ', $data_attributes ) . '>';
	$output .= '<div class="novablocks-media-composition__grid">';

	foreach ( $images as $index => $image ) {

		if ( is_string( $image ) ) {
			$image = json_decode( $image );
		}

		if ( ! empty( $image ) ) {
			$image = ( array ) $image;
		}

		$attachment = false;
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

		// Fallback for import.
		if ( empty( $url ) ) {
			$url = novablocks_get_image_url( $image, 'novablocks_large' );
		}

		if ( ! empty( $url ) ) {
			$output .= '<div class="novablocks-media-composition__grid-item">';
			$output .= '<div class="novablocks-media-composition__grid-item-media">';

			$data_attrs = 'data-shape-modeling-target data-shape-modeling-shape-offset="' . esc_attr( $index ) . '"';

			if ( isset( $image['type'] ) && $image['type'] === 'video' ) {
				$output .= '<video class="novablocks-media-composition__image" ' . $data_attrs . ' muted autoplay loop playsinline src="' . esc_url( $image['url'] ) . '"/>';
			} else {
				$output .= '<img class="novablocks-media-composition__image" ' . $data_attrs . ' src="' . $url . '" />';
			}

			$output .= '</div>';

			if ( $has_caption || $has_description ) {

				$output .= '<div class="novablocks-media-composition__grid-item-info">';

				if ( $has_caption ) {
					$output .= '<div class="novablocks-media-composition__grid-item-caption">' . $image['caption'] . '</div>';
				}

				if ( $has_description ) {
					$output .= '<div class="novablocks-media-composition__grid-item-description">' . $attachment->post_content . '</div>';
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
		'--nb-spacing-modifier: ' . $attributes['spacingModifier']
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
	$emphasisTopSpacing    = $attributes['emphasisTopSpacing'];
	$emphasisBottomSpacing = $attributes['emphasisBottomSpacing'];

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

	function novablocks_get_collection_output( array $attributes, $content ): string {

		if ( 'content' === $attributes['sourceType'] ) {
			$content = novablocks_get_posts_collection_cards_markup( $attributes );
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
			'nb-block-spacing-container'
		];

		$output = '<div class="' . esc_attr( join( ' ', $collection_classes ) ) .'">

			<div class="nb-collection__header">
				<div class="nb-collection__inner-container">
					' . $collection_header . '
				</div>
			</div>

			<div class="nb-collection__body">
				<div class="' . esc_attr( join( ' ', $layout_classes ) ) . '">
					' . $content . '
				</div>
			</div>

		</div>';

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
	$titleTag = 'h' . $attributes['collectionTitleLevel'];
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

function novablocks_get_collection_card_media_markup( array $media ): string {

	$media_args = [
		'type'  => 'image',
		'url'   => '',
		'alt'   => '',
		'sizes' => [],
	];
	$media      = wp_parse_args( $media, $media_args );

	$output = '';

	if ( ! empty( $media['url'] ) ) {
		if ( isset( $media['type'] ) && $media['type'] === 'video' ) {
			$output .= '<video class="supernova-item__media" data-shape-modeling-target muted autoplay loop playsinline src="' . esc_url( $media['url'] ) . '"></video>';
		} else {
			$output .= '<img class="supernova-item__media" data-shape-modeling-target src="' . esc_url( novablocks_get_image_url( $media, 'novablocks_medium' ) ) . '" alt="' . esc_attr( $media['alt'] ) . '" />';
		}
	} else { ?>
		$output .= '<div class="supernova-item__media supernova-item__media--placeholder" data-shape-modeling-target></div>';
	<?php }

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

function novablocks_build_articles_query( array $attributes ): array {
	global $novablocks_rendered_posts_ids;

	if ( ! $novablocks_rendered_posts_ids ) {
		$novablocks_rendered_posts_ids = [];
	}

	$authors                 = $attributes['authors'] ?? [];
	$categories              = $attributes['categories'] ?? [];
	$tags                    = $attributes['tags'] ?? [];
	$specific_posts          = $attributes['specificPosts'] ?? [];
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

function novablocks_get_image_url( array $image, $size ): string {

	if ( isset( $image['sizes'][ $size ]['url'] ) ) {
		return $image['sizes'][ $size ]['url'];
	}

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

function novablocks_get_grid_area_fallback_classnames( $attributes ): array {
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

function novablocks_get_collection_card_markup( $media, $content, array $attributes ): string {

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

function novablocks_get_collection_card_markup_from_post( $post, array $attributes ): string {
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

function novablocks_get_collection_card_media_markup_wrapped( $media, $link = false ): string {
	$output = '';

	if ( ! empty( $link ) ) {
		$output .= '<a class="supernova-item__media-wrapper" href="' . esc_url( $link ) . '">';
	} else {
		$output .= '<div class="supernova-item__media-wrapper">';
	}

	$output .= '<div class="supernova-item__media-aspect-ratio">
			<div class="novablocks-doppler__mask novablocks-doppler__wrapper">
				<div class="supernova-item__media-doppler novablocks-doppler__target"> ' . $media . '</div>
			</div>
		</div>';

	if ( ! empty( $link ) ) {
		echo '</a>';
	} else {
		echo '</div>';
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

	$titleTag = 'h' . $attributes['cardTitleLevel'];
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
			<a class="wp-block-button__link" href="' . esc_url( $button['url'] ) . '">' . $button['text'] .'</a>
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
	if ( empty( $attributes['sourceType'] ) || 'content' !== $attributes['sourceType'] ) {
		return '';
	}

	$output = '';

	if ( ! $tag_direction ) {
		$output = '<a href="' . esc_url( $url ) . '" class="supernova-item__link"></a>';
	} else if ( $tag_direction == 'open' ) {
		$output = '<a href="' . esc_url( $url ) .'" class="supernova-item__link">';
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

function novablocks_get_posts_collection_cards_markup( array $attributes ): string {
	global $novablocks_rendered_posts_ids;

	$output = '';

	$args  = novablocks_build_articles_query( $attributes );
	$posts = get_posts( $args );

	foreach ( $posts as $post ) {
		array_push( $novablocks_rendered_posts_ids, $post->ID );
		$card_markup = novablocks_get_collection_card_markup_from_post( $post, $attributes );
		$output .= apply_filters( 'novablocks_get_collection_card_markup', $card_markup, $post, $attributes );
	}

	return $output;
}

function novablocks_show_card_contents( array $attributes ): bool {
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

function novablocks_get_tag_name( WP_Term $tag ): string {
	return $tag->name;
}







/**
 * BLOCK PATTERNS
 *
 * #PRESENTATION — Visual storytelling
 * Headlines..............Hero banners, website intros, slideshows, CTAs, Media Cards → Hero, Image with text, Featuring
 * Features...............A list features for a service or product
 * Team...................Lists of team members
 * Testimonials...........Reviews
 * Gallery................Portfolio
 * Video..................Presentation blocks that include videos (Hero, one and two columns)
 *
 * Lists..................Various types of lists (eg. Features, Steps)
 *
 * #UTILITY
 * Location...............Maps, contact details → a section to show customers where your business is located
 * Food Menu..............Restaurants
 * FAQs...................Lists of questions and answers
 *
 *
 * #BLOG
 * Posts..................Blog articles
 *
 * #ECOMMERCE
 * Products.............Showcasing single or collection of products
 *
 */

function novablocks_register_block_patterns() {

	/*------------------------------------*\
	  PATTERN CATEGORIES
	\*------------------------------------*/

	register_block_pattern_category(
		'novablocks/features',
		array( 'label' => __( 'Features', '__plugin_txtd' ) )
	);

	register_block_pattern_category(
		'novablocks/headlines',
		array( 'label' => __( 'Headlines', '__plugin_txtd' ) )
	);

	register_block_pattern_category(
		'novablocks/testimonials',
		array( 'label' => __( 'Testimonials', '__plugin_txtd' ) )
	);

	register_block_pattern_category(
		'novablocks/team',
		array( 'label' => __( 'Team', '__plugin_txtd' ) )
	);

	register_block_pattern_category(
		'novablocks/location',
		array( 'label' => __( 'Location', '__plugin_txtd' ) )
	);

	register_block_pattern_category(
		'novablocks/posts',
		array( 'label' => __( 'Posts Collection', '__plugin_txtd' ) )
	);




	/*------------------------------------*\
	  HEADLINES
	\*------------------------------------*/

	register_block_pattern(
		'novablocks/headline-1',
		array(
			'title'       => __( 'Feature with Testimonial', '__plugin_txtd' ),
			'description' => _x( '...', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"media-card","sourceType":"blocks","postsToShow":1,"showCollectionTitle":false,"showCollectionSubtitle":false,"contentPosition":"center left","cardLayout":"horizontal-reverse","layoutStyle":"classic","thumbnailAspectRatio":40,"blockTopSpacing":0,"blockBottomSpacing":1,"emphasisBottomSpacing":1,"contentAreaWidth":45,"layoutGutter":100} -->
							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"sourceType":"blocks","postsToShow":1,"showCollectionTitle":false,"showCollectionSubtitle":false,"contentPosition":"center left","cardLayout":"horizontal-reverse","layoutStyle":"classic","thumbnailAspectRatio":40,"blockTopSpacing":0,"blockBottomSpacing":1,"emphasisBottomSpacing":1,"contentAreaWidth":45,"layoutGutter":100,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/nova-astronaut-150x150.jpg","orientation":"landscape"},"medium":{"height":238,"width":300,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/nova-astronaut-300x238.jpg","orientation":"landscape"},"large":{"height":811,"width":1024,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/nova-astronaut-1024x811.jpg","orientation":"landscape"},"novablocks_large":{"height":1082,"width":1366,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/nova-astronaut-1366x1082.jpg","orientation":"landscape"},"novablocks_medium":{"height":811,"width":1024,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/nova-astronaut-1024x811.jpg","orientation":"landscape"},"novablocks_small":{"height":608,"width":768,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/nova-astronaut-768x608.jpg","orientation":"landscape"},"novablocks_tiny":{"height":380,"width":480,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/nova-astronaut-480x380.jpg","orientation":"landscape"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/nova-astronaut.jpg","height":1419,"width":1791,"orientation":"landscape"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3795,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/nova-astronaut.jpg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/headlines/nova-astronaut/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":80,"positionShift":95,"elementsDistance":80,"placementVariation":50} -->
							<!-- wp:heading {"className":"has-larger-font-size","fontSize":"larger"} -->
							<h2 class="has-larger-font-size"><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-black-color">***</mark></h2>
							<!-- /wp:heading -->

							<!-- wp:heading {"level":1,"className":"has-smaller-font-size","fontSize":"smaller"} -->
							<h1 class="has-smaller-font-size" id="welcome-to-our-galaxy-we-ve-got-a-new-look">Welcome to our galaxy, we’ve got a new look!</h1>
							<!-- /wp:heading -->

							<!-- wp:paragraph {"className":"is-style-lead"} -->
							<p class="is-style-lead has-normal-font-size">We\'ve always defined ourselves by the ability to overcome the impossible. And we count these moments.</p>
							<!-- /wp:paragraph -->

							<!-- wp:buttons -->
							<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-primary"} -->
							<div class="wp-block-button is-style-primary"><a class="wp-block-button__link">Learn more</a></div>
							<!-- /wp:button --></div>
							<!-- /wp:buttons -->

							<!-- wp:separator {"className":"is-style-simple","blockTopSpacing":2,"blockBottomSpacing":1} -->
							<div class="wp-block-separator alignnone is-style-simple" style="--nb-emphasis-top-spacing:0;--nb-emphasis-bottom-spacing:0;--nb-block-top-spacing:2;--nb-block-bottom-spacing:1;--nb-block-zindex:0;--nb-card-content-area-width:50%;--nb-card-content-padding-multiplier:0;--nb-card-media-padding-top:100%;--nb-card-media-object-fit:cover;--nb-card-media-padding-multiplier:0;--nb-card-layout-gap-modifier:0;--nb-minimum-container-height:0vh;--nb-spacing-modifier:1">
							        <div class="c-separator">
							            <div class="c-separator__arrow c-separator__arrow--left"></div>
							            <div class="c-separator__line c-separator__line--left"></div>
							            <div class="c-separator__symbol">
							                <span><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7565 8.5753c1.3088-1.6632 2.3177-2.813 3.0266-3.4492.718-.6453 1.3315-.968 1.8405-.968.4181 0 .7817.1682 1.0907.5045.309.3363.4635.7362.4635 1.1997 0 .6726-.4453 1.2043-1.3361 1.5951-.8907.3908-2.5857.7635-5.0852 1.118zm-2.454-1.4315c-.518-1.2633-.918-2.3585-1.1997-3.2856-.2817-.927-.4226-1.6269-.4226-2.0995 0-.5544.1409-.9861.4226-1.2952C8.3846.1545 8.7754 0 9.2753 0c.518 0 .918.1545 1.1997.4635.2818.309.4226.7408.4226 1.2952 0 .4544-.1408 1.1543-.4226 2.0995-.2727.9362-.6635 2.0314-1.1724 3.2856zm2.454 4.2809c2.4995.3544 4.1945.7271 5.0852 1.1179.8908.3908 1.3361.918 1.3361 1.5815 0 .4726-.1545.877-.4635 1.2133-.309.3272-.6726.4908-1.0907.4908-.509 0-1.1225-.3181-1.8405-.9543-.7089-.6362-1.7178-1.786-3.0266-3.4492zm-.0545-1.4315c0 .6635-.2363 1.2315-.7089 1.7041-.4636.4727-1.027.709-1.6905.709-.6726 0-1.2452-.2318-1.7178-.6953-.4727-.4726-.709-1.0452-.709-1.7178 0-.6544.2363-1.218.709-1.6905.4726-.4727 1.036-.709 1.6905-.709.6635 0 1.2315.2363 1.7041.709.4817.4726.7226 1.036.7226 1.6905zM6.8213 8.5753c-2.4994-.3544-4.1945-.727-5.0852-1.1179C.8454 7.0666.4 6.5349.4 5.8623c0-.4635.1544-.8634.4635-1.1997.309-.3363.6725-.5045 1.0906-.5045.509 0 1.118.3227 1.8269.968.7089.6362 1.7223 1.786 3.0402 3.4492zm2.454 4.2672c.518 1.2725.918 2.3722 1.1997 3.2993.2818.927.4226 1.6269.4226 2.0995 0 .5544-.1408.9861-.4226 1.2952-.2817.309-.6726.4635-1.1724.4635-.5181 0-.918-.1545-1.1998-.4635-.2817-.3091-.4226-.7408-.4226-1.2952 0-.4635.1363-1.1588.409-2.0859.2727-.927.668-2.0313 1.186-3.3129zm-2.454-1.4178c-1.336 1.6996-2.354 2.8584-3.0539 3.4765-.6998.618-1.3042.927-1.8132.927a1.383 1.383 0 0 1-.709-.1908c-.218-.1364-.427-.35-.627-.6408-.0728-.1727-.1273-.3272-.1636-.4635a1.582 1.582 0 0 1-.0546-.409c0-.6635.4454-1.1907 1.336-1.5815.8908-.3908 2.5859-.7635 5.0853-1.1179z" fill="currentColor"/></svg>
							</span>
							            </div>
							            <div class="c-separator__line c-separator__line--right"></div>
							            <div class="c-separator__arrow c-separator__arrow--right"></div>
							        </div>
									</div>
							<!-- /wp:separator -->

							<!-- wp:pullquote -->
							<figure class="wp-block-pullquote has-normal-font-size"><blockquote><p>“As a visual person, I couldn’t resist Pixelgrade’s design oriented solutions. Their unique aesthetics make them really special and stand out from the crowd.”</p><cite>— Anne Marie, Journalist from Netherlands</cite></blockquote></figure>
							<!-- /wp:pullquote -->
							<!-- /wp:novablocks/supernova-item -->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/headlines' )
		)
	);

	register_block_pattern(
		'novablocks/headline-2',
		array(
			'title'       => __( 'Simple Feature', '__plugin_txtd' ),
			'description' => _x( '...', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"media-card","sourceType":"blocks","postsToShow":1,"showCollectionTitle":false,"showCollectionSubtitle":false,"contentPosition":"center left","cardLayout":"horizontal","layoutStyle":"classic","thumbnailAspectRatio":40,"contentPadding":50,"blockTopSpacing":0,"blockBottomSpacing":1,"emphasisBottomSpacing":1,"contentAreaWidth":45,"layoutGutter":100,"objectPosition":30} -->
						<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"sourceType":"blocks","postsToShow":1,"showCollectionTitle":false,"showCollectionSubtitle":false,"contentPosition":"center left","cardLayout":"horizontal","layoutStyle":"classic","thumbnailAspectRatio":40,"contentPadding":50,"blockTopSpacing":0,"blockBottomSpacing":1,"emphasisBottomSpacing":1,"contentAreaWidth":45,"layoutGutter":100,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-994012-unsplash-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":225,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-994012-unsplash-225x300.jpg","orientation":"portrait"},"large":{"height":1024,"width":767,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-994012-unsplash-767x1024.jpg","orientation":"portrait"},"novablocks_large":{"height":1366,"width":1024,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-994012-unsplash-1024x1366.jpg","orientation":"portrait"},"novablocks_medium":{"height":1024,"width":767,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-994012-unsplash-767x1024.jpg","orientation":"portrait"},"novablocks_small":{"height":768,"width":576,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-994012-unsplash-576x768.jpg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":360,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-994012-unsplash-360x480.jpg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-994012-unsplash.jpg","height":2000,"width":1499,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3819,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-994012-unsplash.jpg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/headlines/annie-spratt-994012-unsplash/","caption":"","description":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-973393-unsplash-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":192,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-973393-unsplash-192x300.jpg","orientation":"portrait"},"large":{"height":1024,"width":654,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-973393-unsplash-654x1024.jpg","orientation":"portrait"},"novablocks_large":{"height":1366,"width":873,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-973393-unsplash-873x1366.jpg","orientation":"portrait"},"novablocks_medium":{"height":1024,"width":654,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-973393-unsplash-654x1024.jpg","orientation":"portrait"},"novablocks_small":{"height":768,"width":491,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-973393-unsplash-491x768.jpg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":307,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-973393-unsplash-307x480.jpg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-973393-unsplash.jpg","height":2000,"width":1278,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3817,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/annie-spratt-973393-unsplash.jpg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/headlines/annie-spratt-973393-unsplash/","caption":"","description":""}],"stylePreset":"just-my-style","objectPosition":30} -->
						<!-- wp:heading {"level":4,"className":"has-smaller-font-size","fontSize":"smaller"} -->
						<h4 class="has-smaller-font-size" id="shoot-for-the-moon-even-if-you-miss">Shoot for the moon, Even if You Miss.</h4>
						<!-- /wp:heading -->

						<!-- wp:heading {"level":1,"className":"has-smaller-font-size","fontSize":"smaller"} -->
						<h1 class="has-smaller-font-size" id="welcome-to-our-galaxy-we-ve-got-a-new-look">Welcome to our planet, look and feel matters<em>!</em></h1>
						<!-- /wp:heading -->

						<!-- wp:paragraph {"className":"is-style-default"} -->
						<p class="is-style-default has-normal-font-size">If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon. I don\'t know what you could say about a day in which you have seen four beautiful sunsets.</p>
						<!-- /wp:paragraph -->

						<!-- wp:buttons -->
						<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-primary"} -->
						<div class="wp-block-button is-style-primary"><a class="wp-block-button__link">Discover more</a></div>
						<!-- /wp:button --></div>
						<!-- /wp:buttons -->
						<!-- /wp:novablocks/supernova-item -->
						<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/headlines' )
		)
	);

	register_block_pattern(
		'novablocks/headline-84',
		array(
			'title'       => __( 'Portfolio Intro', '__plugin_txtd' ),
			'description' => _x( '...', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"hero","align":"full","sourceType":"blocks","postsToShow":1,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"contentPosition":"top left","cardLayout":"stacked","layoutStyle":"classic","overlayFilterStrength":30,"contentPadding":100,"blockTopSpacing":0,"blockBottomSpacing":1,"emphasisTopSpacing":1,"emphasisBottomSpacing":1} -->
						<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"sourceType":"blocks","postsToShow":1,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"contentPosition":"top left","cardLayout":"stacked","layoutStyle":"classic","overlayFilterStrength":30,"contentPadding":100,"blockTopSpacing":0,"blockBottomSpacing":1,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"images":[{"id":"TIrXot28Znc","url":"https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OHwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM3NjU5NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":2291,"height":3450,"sizes":{"full":{"url":"https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OHwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM3NjU5NA\u0026ixlib=rb-1.2.1\u0026q=85","width":2291,"height":3450},"large":{"url":"https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OHwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM3NjU5NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OHwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM3NjU5NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OHwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM3NjU5NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OHwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM3NjU5NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OHwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM3NjU5NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OHwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM3NjU5NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OHwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM3NjU5NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":80,"positionShift":75,"elementsDistance":0,"placementVariation":100,"contentColorSignal":3,"contentPaletteVariation":12} -->
						<!-- wp:novablocks/sidecar {"sidebarPosition":"right","lastItemIsSticky":true} -->
						<!-- wp:novablocks/sidecar-area -->
						<!-- wp:group {"blockTopSpacing":0} -->
						<div class="wp-block-group sm-palette-1 sm-variation-1 sm-color-signal-0 alignundefined" style="--nb-emphasis-top-spacing:0;--nb-emphasis-bottom-spacing:0;--nb-block-top-spacing:0;--nb-block-bottom-spacing:0;--nb-block-zindex:0;--nb-card-content-area-width:50%;--nb-card-content-padding-multiplier:0;--nb-card-media-padding-top:100%;--nb-card-media-object-fit:cover;--nb-card-media-padding-multiplier:0;--nb-card-layout-gap-modifier:0;--nb-minimum-container-height:0vh;--nb-spacing-modifier:1;--nb-emphasis-area:100px" data-palette="1" data-palette-variation="1" data-color-signal="0"><!-- wp:heading {"level":1,"className":"has-largest-font-size","fontSize":"largest"} -->
						<h1 class="has-largest-font-size" id="work"><a href="#">Work</a></h1>
						<!-- /wp:heading -->

						<!-- wp:heading {"level":1,"className":"has-largest-font-size","fontSize":"largest"} -->
						<h1 class="has-largest-font-size" id="work"><a href="#">About</a></h1>
						<!-- /wp:heading -->

						<!-- wp:heading {"level":1,"className":"has-largest-font-size","fontSize":"largest"} -->
						<h1 class="has-largest-font-size" id="work"><a href="#">News</a></h1>
						<!-- /wp:heading --></div>
						<!-- /wp:group -->
						<!-- /wp:novablocks/sidecar-area -->

						<!-- wp:novablocks/sidecar-area {"areaName":"sidebar"} -->
						<!-- wp:group {"className":"reset-font-size-base","blockTopSpacing":0,"spacingModifier":0.5} -->
						<div class="wp-block-group sm-palette-1 sm-variation-1 sm-color-signal-0 reset-font-size-base alignundefined" style="--nb-emphasis-top-spacing:0;--nb-emphasis-bottom-spacing:0;--nb-block-top-spacing:0;--nb-block-bottom-spacing:0;--nb-block-zindex:0;--nb-card-content-area-width:50%;--nb-card-content-padding-multiplier:0;--nb-card-media-padding-top:100%;--nb-card-media-object-fit:cover;--nb-card-media-padding-multiplier:0;--nb-card-layout-gap-modifier:0;--nb-minimum-container-height:0vh;--nb-spacing-modifier:0.5;--nb-emphasis-area:100px" data-palette="1" data-palette-variation="1" data-color-signal="0"><!-- wp:paragraph -->
						<p class="has-normal-font-size">Our mission is to support people who want to make an impact in their communities.</p>
						<!-- /wp:paragraph -->

						<!-- wp:buttons {"layout":{"type":"flex","orientation":"vertical"}} -->
						<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-text"} -->
						<div class="wp-block-button is-style-text"><a class="wp-block-button__link">Let\'s talk</a></div>
						<!-- /wp:button --></div>
						<!-- /wp:buttons --></div>
						<!-- /wp:group -->
						<!-- /wp:novablocks/sidecar-area -->
						<!-- /wp:novablocks/sidecar -->
						<!-- /wp:novablocks/supernova-item -->
						<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/headlines' )
		)
	);



	/*------------------------------------*\
	  LOCATION
	\*------------------------------------*/

	register_block_pattern(
		'novablocks/location-1',
		array(
			'title'       => __( 'Multiple offices', '__plugin_txtd' ),
			'description' => _x( '...', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"cards-collection","title":"Locations","subtitle":"Mies Inc. \u0026amp; Co has agencies in London, New York and Berlin. Our team consists of experienced architects who develop the projects.","collectionTitleLevel":3,"level":3,"cardTitleLevel":4,"sourceType":"blocks","postsToShow":4,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showSubtitle":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25} -->
							<!-- wp:novablocks/supernova-item {"level":3,"title":"Nobel Center","subtitle":"Interior Designer – Partner","description":"Ryan Long\u003cbr\u003eJoseph Harper\u003cbr\u003eMarlon Huff\u003cbr\u003eKara Torres","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"blocks","postsToShow":4,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showSubtitle":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3759,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team1/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":80,"positionShift":45,"elementsDistance":80,"placementVariation":100} -->
							<!-- wp:heading {"level":4} -->
							<h4 class="has-normal-font-size" id="nobel-center">Nobel Center</h4>
							<!-- /wp:heading -->

							<!-- wp:paragraph -->
							<p class="has-normal-font-size">Balderton – 20 ST<br>88743 Upper Grosvenor<br>London, England</p>
							<!-- /wp:paragraph -->

							<!-- wp:paragraph -->
							<p class="has-normal-font-size">T +44 (2)0 79 25 85 85<br>F +44 (2)0 79 25 37 31</p>
							<!-- /wp:paragraph -->

							<!-- wp:buttons -->
							<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-text"} -->
							<div class="wp-block-button is-style-text"><a class="wp-block-button__link" href="" target="_blank" rel="noreferrer noopener">View on Map</a></div>
							<!-- /wp:button --></div>
							<!-- /wp:buttons -->
							<!-- /wp:novablocks/supernova-item -->

							<!-- wp:novablocks/supernova-item {"level":3,"title":"Strato Office","subtitle":"Architect Director – Partner","description":"Teresia Poston\u003cbr\u003eYolonda Wills\u003cbr\u003eZack Hurt\u003cbr\u003eHeather Gonzalez","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"blocks","postsToShow":4,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showSubtitle":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3760,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team2/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":100,"positionShift":70,"elementsDistance":0} -->
							<!-- wp:heading {"level":4} -->
							<h4 class="has-normal-font-size" id="nobel-center">Strato Office</h4>
							<!-- /wp:heading -->

							<!-- wp:paragraph -->
							<p class="has-normal-font-size">Broadway – NY 10004<br>73411 Pearl Street<br>New York, USA</p>
							<!-- /wp:paragraph -->

							<!-- wp:paragraph -->
							<p class="has-normal-font-size">T +12 (1)2 79 25 96 10<br>F +12 (2)2 79 25 86 14</p>
							<!-- /wp:paragraph -->

							<!-- wp:buttons -->
							<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-text"} -->
							<div class="wp-block-button is-style-text"><a class="wp-block-button__link" href="" target="_blank" rel="noreferrer noopener">View on Map</a></div>
							<!-- /wp:button --></div>
							<!-- /wp:buttons -->
							<!-- /wp:novablocks/supernova-item -->

							<!-- wp:novablocks/supernova-item {"level":3,"title":"East Side Gallery","subtitle":"Architect Manager – Partner","description":"Gerald Perry\u003cbr\u003eRonald Barnes\u003cbr\u003eNicholas Morgan\u003cbr\u003eJerry Powell","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"blocks","postsToShow":4,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showSubtitle":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3761,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team3/","caption":"","description":""}],"stylePreset":"just-my-style","positionShift":90,"elementsDistance":60,"placementVariation":75} -->
							<!-- wp:heading {"level":4} -->
							<h4 class="has-normal-font-size" id="nobel-center">East Side Gallery</h4>
							<!-- /wp:heading -->

							<!-- wp:paragraph -->
							<p class="has-normal-font-size">Mühletnstraße – BE 293<br>10243 Hauptstraße<br>Berlin, Germany</p>
							<!-- /wp:paragraph -->

							<!-- wp:paragraph -->
							<p class="has-normal-font-size">T +49 (3)0 78 45 27 40<br>F +49 (3)0 78 45 27 45</p>
							<!-- /wp:paragraph -->

							<!-- wp:buttons -->
							<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-text"} -->
							<div class="wp-block-button is-style-text"><a class="wp-block-button__link" href="" target="_blank" rel="noreferrer noopener">View on Map</a></div>
							<!-- /wp:button --></div>
							<!-- /wp:buttons -->
							<!-- /wp:novablocks/supernova-item -->

							<!-- wp:novablocks/supernova-item {"level":3,"title":"Hurlstone Tower","subtitle":"Interior Manager – Partner","description":"Emily Long, Business\u003cbr\u003eLouise Perez\u003cbr\u003eRyan Butler\u003cbr\u003eJeffrey Henderson","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"blocks","postsToShow":4,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showSubtitle":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3762,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team4/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":100,"positionShift":90,"elementsDistance":60,"placementVariation":100} -->
							<!-- wp:heading {"level":4} -->
							<h4 class="has-normal-font-size" id="nobel-center">Hurlstone Tower</h4>
							<!-- /wp:heading -->

							<!-- wp:paragraph -->
							<p class="has-normal-font-size">Chippendale – NSW 208<br>20434 Manning Road<br>Sydney, Australia</p>
							<!-- /wp:paragraph -->

							<!-- wp:paragraph -->
							<p class="has-normal-font-size">T +61 (2)4 51 94 37 30<br>F +61 (2)4 51 94 37 37</p>
							<!-- /wp:paragraph -->

							<!-- wp:buttons -->
							<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-text"} -->
							<div class="wp-block-button is-style-text"><a class="wp-block-button__link" href="" target="_blank" rel="noreferrer noopener">View on Map</a></div>
							<!-- /wp:button --></div>
							<!-- /wp:buttons -->
							<!-- /wp:novablocks/supernova-item -->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/location' )
		)
	);



	/*------------------------------------*\
	  FEATURES
	\*------------------------------------*/

	register_block_pattern(
		'novablocks/features-1',
		array(
			'title'       => __( 'Features 1', '__plugin_txtd' ),
			'description' => _x( 'Three features on one row.', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"posts-collection","title":"List of features","subtitle":"Description","style":{"color":{}},"cardTitleLevel":4,"sourceType":"fields","postsToShow":3,"loadingMode":"manual","specificPosts":["3212"],"preventDuplicatePosts":false,"showSubtitle":false,"showButtons":false,"layoutStyle":"classic","columns":3,"thumbnailAspectRatio":25,"imageResizing":"original","imagePadding":50,"contentPadding":50,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":50,"spacingModifier":0.5,"palette":1} -->
							<!-- wp:novablocks/supernova-item {"title":"Products made with love","description":"We value our customers\' opinions and their needs; therefore, we capture feedback and insights as much as we can.","buttonText":"Link","defaultsGenerated":true,"cardTitleLevel":4,"sourceType":"fields","postsToShow":3,"loadingMode":"manual","specificPosts":["3212"],"preventDuplicatePosts":false,"showSubtitle":false,"showButtons":false,"layoutStyle":"classic","columns":3,"thumbnailAspectRatio":25,"imageResizing":"original","imagePadding":50,"contentPadding":50,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":50,"spacingModifier":0.5,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-1-150x150.png","orientation":"landscape"},"medium":{"height":300,"width":285,"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-1-285x300.png","orientation":"portrait"},"full":{"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-1.png","height":344,"width":327,"orientation":"portrait"}},"mime":"image/png","type":"image","subtype":"png","id":2532,"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-1.png","alt":"","link":"http://nova.local/icon-feature-1/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":80,"positionShift":85,"elementsDistance":0,"placementVariation":100,"palette":1} /-->

							<!-- wp:novablocks/supernova-item {"title":"Organic ingredients that work","description":"Everything inside, including fragrances and colors, exclusively sourced from real plants and fruits","buttonText":"Link","defaultsGenerated":true,"cardTitleLevel":4,"sourceType":"fields","postsToShow":3,"loadingMode":"manual","specificPosts":["3212"],"preventDuplicatePosts":false,"showSubtitle":false,"showButtons":false,"layoutStyle":"classic","columns":3,"thumbnailAspectRatio":25,"imageResizing":"original","imagePadding":50,"contentPadding":50,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":50,"spacingModifier":0.5,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-2-150x150.png","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-2-300x300.png","orientation":"landscape"},"full":{"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-2.png","height":321,"width":322,"orientation":"landscape"}},"mime":"image/png","type":"image","subtype":"png","id":2533,"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-2.png","alt":"","link":"http://nova.local/icon-feature-2/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":20,"placementVariation":75,"palette":1} /-->

							<!-- wp:novablocks/supernova-item {"title":"Care for the Earth’s resources","description":"Products that have a low associated carbon footprint and packaged in materials that can be recycled.","buttonText":"Link","defaultsGenerated":true,"cardTitleLevel":4,"sourceType":"fields","postsToShow":3,"loadingMode":"manual","specificPosts":["3212"],"preventDuplicatePosts":false,"showSubtitle":false,"showButtons":false,"layoutStyle":"classic","columns":3,"thumbnailAspectRatio":25,"imageResizing":"original","imagePadding":50,"contentPadding":50,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":50,"spacingModifier":0.5,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-3-150x150.png","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-3-300x300.png","orientation":"landscape"},"full":{"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-3.png","height":324,"width":324,"orientation":"landscape"}},"mime":"image/png","type":"image","subtype":"png","id":2534,"url":"http://nova.local/wp-content/uploads/2021/10/icon-feature-3.png","alt":"","link":"http://nova.local/icon-feature-3/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":20,"positionShift":35,"palette":1} /-->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/features' )
		)
	);



	/*------------------------------------*\
	  TEAM
	\*------------------------------------*/

	register_block_pattern(
		'novablocks/team-1',
		array(
			'title'       => __( 'Meet the team', '__plugin_txtd' ),
			'description' => _x( '...', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"cards-collection","title":"Meet the team","subtitle":"Our team consists of experienced architects who develop the projects starting with a sketch and following it up to complete implementation of intended ideas.","collectionTitleLevel":3,"level":3,"cardTitleLevel":4,"sourceType":"fields","postsToShow":4,"showDescription":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"spacingModifier":0.5} -->
							<!-- wp:novablocks/supernova-item {"level":3,"title":"Kevin Bryan","subtitle":"Interior Designer – Partner","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"fields","postsToShow":4,"showDescription":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"spacingModifier":0.5,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3759,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team1/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":80,"positionShift":45,"elementsDistance":80,"placementVariation":100} /-->

							<!-- wp:novablocks/supernova-item {"level":3,"title":"Toby Scott","subtitle":"Architect Director – Partner","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"fields","postsToShow":4,"showDescription":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"spacingModifier":0.5,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3760,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team2/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":100,"positionShift":70,"elementsDistance":0} /-->

							<!-- wp:novablocks/supernova-item {"level":3,"title":"Muriel Moore","subtitle":"Architect Manager – Partner","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"fields","postsToShow":4,"showDescription":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"spacingModifier":0.5,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3761,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team3/","caption":"","description":""}],"stylePreset":"just-my-style","positionShift":90,"elementsDistance":60,"placementVariation":75} /-->

							<!-- wp:novablocks/supernova-item {"level":3,"title":"Pok Benjamin","subtitle":"Interior Manager – Partner","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"fields","postsToShow":4,"showDescription":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"spacingModifier":0.5,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3762,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team4/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":100,"positionShift":90,"elementsDistance":60,"placementVariation":100} /-->
							<!-- /wp:novablocks/supernova -->

							<!-- wp:separator {"align":"wide","className":"is-style-simple","blockBottomSpacing":1} -->
							<div class="wp-block-separator alignwide is-style-simple" style="--nb-emphasis-top-spacing:0;--nb-emphasis-bottom-spacing:0;--nb-block-top-spacing:1;--nb-block-bottom-spacing:1;--nb-block-zindex:0;--nb-card-content-area-width:50%;--nb-card-content-padding-multiplier:0;--nb-card-media-padding-top:100%;--nb-card-media-object-fit:cover;--nb-card-media-padding-multiplier:0;--nb-card-layout-gap-modifier:0;--nb-minimum-container-height:0vh;--nb-spacing-modifier:1">
							        <div class="c-separator">
							            <div class="c-separator__arrow c-separator__arrow--left"></div>
							            <div class="c-separator__line c-separator__line--left"></div>
							            <div class="c-separator__symbol">
							                <span><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7565 8.5753c1.3088-1.6632 2.3177-2.813 3.0266-3.4492.718-.6453 1.3315-.968 1.8405-.968.4181 0 .7817.1682 1.0907.5045.309.3363.4635.7362.4635 1.1997 0 .6726-.4453 1.2043-1.3361 1.5951-.8907.3908-2.5857.7635-5.0852 1.118zm-2.454-1.4315c-.518-1.2633-.918-2.3585-1.1997-3.2856-.2817-.927-.4226-1.6269-.4226-2.0995 0-.5544.1409-.9861.4226-1.2952C8.3846.1545 8.7754 0 9.2753 0c.518 0 .918.1545 1.1997.4635.2818.309.4226.7408.4226 1.2952 0 .4544-.1408 1.1543-.4226 2.0995-.2727.9362-.6635 2.0314-1.1724 3.2856zm2.454 4.2809c2.4995.3544 4.1945.7271 5.0852 1.1179.8908.3908 1.3361.918 1.3361 1.5815 0 .4726-.1545.877-.4635 1.2133-.309.3272-.6726.4908-1.0907.4908-.509 0-1.1225-.3181-1.8405-.9543-.7089-.6362-1.7178-1.786-3.0266-3.4492zm-.0545-1.4315c0 .6635-.2363 1.2315-.7089 1.7041-.4636.4727-1.027.709-1.6905.709-.6726 0-1.2452-.2318-1.7178-.6953-.4727-.4726-.709-1.0452-.709-1.7178 0-.6544.2363-1.218.709-1.6905.4726-.4727 1.036-.709 1.6905-.709.6635 0 1.2315.2363 1.7041.709.4817.4726.7226 1.036.7226 1.6905zM6.8213 8.5753c-2.4994-.3544-4.1945-.727-5.0852-1.1179C.8454 7.0666.4 6.5349.4 5.8623c0-.4635.1544-.8634.4635-1.1997.309-.3363.6725-.5045 1.0906-.5045.509 0 1.118.3227 1.8269.968.7089.6362 1.7223 1.786 3.0402 3.4492zm2.454 4.2672c.518 1.2725.918 2.3722 1.1997 3.2993.2818.927.4226 1.6269.4226 2.0995 0 .5544-.1408.9861-.4226 1.2952-.2817.309-.6726.4635-1.1724.4635-.5181 0-.918-.1545-1.1998-.4635-.2817-.3091-.4226-.7408-.4226-1.2952 0-.4635.1363-1.1588.409-2.0859.2727-.927.668-2.0313 1.186-3.3129zm-2.454-1.4178c-1.336 1.6996-2.354 2.8584-3.0539 3.4765-.6998.618-1.3042.927-1.8132.927a1.383 1.383 0 0 1-.709-.1908c-.218-.1364-.427-.35-.627-.6408-.0728-.1727-.1273-.3272-.1636-.4635a1.582 1.582 0 0 1-.0546-.409c0-.6635.4454-1.1907 1.336-1.5815.8908-.3908 2.5859-.7635 5.0853-1.1179z" fill="currentColor"/></svg>
							</span>
							            </div>
							            <div class="c-separator__line c-separator__line--right"></div>
							            <div class="c-separator__arrow c-separator__arrow--right"></div>
							        </div>
									</div>
							<!-- /wp:separator -->

							<!-- wp:novablocks/supernova {"variation":"cards-collection","title":"Meet the team","subtitle":"Our team consists of experienced architects who develop the projects starting with a sketch and following it up to complete implementation of intended ideas.","collectionTitleLevel":3,"level":3,"cardTitleLevel":4,"sourceType":"fields","postsToShow":4,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showSubtitle":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"spacingModifier":0.5} -->
							<!-- wp:novablocks/supernova-item {"level":3,"title":"Staff","subtitle":"Interior Designer – Partner","description":"Ryan Long\u003cbr\u003eJoseph Harper\u003cbr\u003eMarlon Huff\u003cbr\u003eKara Torres","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"fields","postsToShow":4,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showSubtitle":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"spacingModifier":0.5,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3759,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team1.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team1/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":80,"positionShift":45,"elementsDistance":80,"placementVariation":100} /-->

							<!-- wp:novablocks/supernova-item {"level":3,"title":"Architectural","subtitle":"Architect Director – Partner","description":"Teresia Poston\u003cbr\u003eYolonda Wills\u003cbr\u003eZack Hurt\u003cbr\u003eHeather Gonzalez","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"fields","postsToShow":4,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showSubtitle":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"spacingModifier":0.5,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3760,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team2.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team2/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":100,"positionShift":70,"elementsDistance":0} /-->

							<!-- wp:novablocks/supernova-item {"level":3,"title":"Marketing","subtitle":"Architect Manager – Partner","description":"Gerald Perry\u003cbr\u003eRonald Barnes\u003cbr\u003eNicholas Morgan\u003cbr\u003eJerry Powell","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"fields","postsToShow":4,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showSubtitle":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"spacingModifier":0.5,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3761,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team3.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team3/","caption":"","description":""}],"stylePreset":"just-my-style","positionShift":90,"elementsDistance":60,"placementVariation":75} /-->

							<!-- wp:novablocks/supernova-item {"level":3,"title":"Operations","subtitle":"Interior Manager – Partner","description":"Emily Long, Business\u003cbr\u003eLouise Perez\u003cbr\u003eRyan Butler\u003cbr\u003eJeffrey Henderson","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"fields","postsToShow":4,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showSubtitle":false,"showButtons":false,"contentPosition":"top left","layoutStyle":"classic","columns":4,"gridGap":80,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":65,"blockTopSpacing":0,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":25,"spacingModifier":0.5,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4-150x150.jpeg","orientation":"landscape"},"medium":{"height":300,"width":240,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4-240x300.jpeg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":384,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4-384x480.jpeg","orientation":"portrait"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4.jpeg","height":500,"width":400,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3762,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2022/01/team4.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/block-patterns/people/team4/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":100,"positionShift":90,"elementsDistance":60,"placementVariation":100} /-->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/team' )
		)
	);



	/*------------------------------------*\
	  POSTS
	\*------------------------------------*/

	register_block_pattern(
		'novablocks/posts-1',
		array(
			'title'       => __( 'Classic Grid', '__plugin_txtd' ),
			'description' => _x( '...', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"posts-collection","title":"Latest articles","postsToShow":3,"specificPosts":[],"preventDuplicatePosts":false,"showMeta":true,"contentPosition":"center left","layoutStyle":"classic","columns":3,"blockTopSpacing":0,"blockBottomSpacing":1,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":20} -->
							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"postsToShow":3,"specificPosts":[],"preventDuplicatePosts":false,"showMeta":true,"contentPosition":"center left","layoutStyle":"classic","columns":3,"blockTopSpacing":0,"blockBottomSpacing":1,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":20,"images":[{"id":"FPm5MGSqD3w","url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":4000,"height":6000,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=85","width":4000,"height":6000},"large":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":20,"placementVariation":75} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"postsToShow":3,"specificPosts":[],"preventDuplicatePosts":false,"showMeta":true,"contentPosition":"center left","layoutStyle":"classic","columns":3,"blockTopSpacing":0,"blockBottomSpacing":1,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":20,"images":[{"id":"2UpMepuEeak","url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":6000,"height":4000,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=85","width":6000,"height":4000},"large":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":20,"positionShift":50,"elementsDistance":0,"placementVariation":100} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"postsToShow":3,"specificPosts":[],"preventDuplicatePosts":false,"showMeta":true,"contentPosition":"center left","layoutStyle":"classic","columns":3,"blockTopSpacing":0,"blockBottomSpacing":1,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"layoutGutter":20,"images":[{"id":"2UpMepuEeak","url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":6000,"height":4000,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=85","width":6000,"height":4000},"large":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":80,"positionShift":20,"elementsDistance":80,"placementVariation":75} /-->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/posts' )
		)
	);

	register_block_pattern(
		'novablocks/posts-2',
		array(
			'title'       => __( 'Horizontal Cards', '__plugin_txtd' ),
			'description' => _x( '...', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"posts-collection","title":"Horizontal Cards","postsToShow":4,"specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","layoutStyle":"classic","columns":2,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":50} -->
							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"postsToShow":4,"specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","layoutStyle":"classic","columns":2,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":50,"images":[{"id":"FPm5MGSqD3w","url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":4000,"height":6000,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=85","width":4000,"height":6000},"large":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":20,"placementVariation":75} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"postsToShow":4,"specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","layoutStyle":"classic","columns":2,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":50,"images":[{"id":"2UpMepuEeak","url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":6000,"height":4000,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=85","width":6000,"height":4000},"large":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":20,"positionShift":50,"elementsDistance":0,"placementVariation":100} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"postsToShow":4,"specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","layoutStyle":"classic","columns":2,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":50,"images":[{"id":"n463SoeSiVY","url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":4030,"height":4038,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=85","width":4030,"height":4038},"large":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":60,"positionShift":70,"elementsDistance":100,"placementVariation":75} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"postsToShow":4,"specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","layoutStyle":"classic","columns":2,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":50,"images":[{"id":"Z3g8miECz9s","url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":5821,"height":3881,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=85","width":5821,"height":3881},"large":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":60,"positionShift":20,"elementsDistance":100,"placementVariation":100} /-->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/posts' )
		)
	);

	register_block_pattern(
		'novablocks/posts-3',
		array(
			'title'       => __( 'Overlay Cards', '__plugin_txtd' ),
			'description' => _x( '...', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"posts-collection","title":"Horizontal Cards","style":{"color":{"duotone":["#b5c0e8","#ffffff"]}},"secondaryMetadata":"none","postsToShow":3,"loadingMode":"manual","specificPosts":["2829","1819","3212"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showDescription":false,"showMeta":true,"cardLayout":"stacked","layoutStyle":"classic","columns":3,"gridGap":10,"overlayFilterType":"duotone","overlayFilterDuotoneConfig":{"name":"Brand Primary - 10 and Secondary - 7","from":{"paletteId":1,"variationIndex":11,"hex":"#1d293c"},"to":{"paletteId":2,"variationIndex":8,"hex":"#a24b35"}},"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"contentPadding":50,"blockTopSpacing":0,"blockBottomSpacing":1,"minHeightFallback":50,"contentAreaWidth":60,"layoutGutter":50,"contentColorSignal":3,"contentPaletteVariation":11} -->
							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"secondaryMetadata":"none","postsToShow":3,"loadingMode":"manual","specificPosts":["2829","1819","3212"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showDescription":false,"showMeta":true,"cardLayout":"stacked","layoutStyle":"classic","columns":3,"gridGap":10,"overlayFilterType":"duotone","overlayFilterDuotoneConfig":{"name":"Brand Primary - 10 and Secondary - 7","from":{"paletteId":1,"variationIndex":11,"hex":"#1d293c"},"to":{"paletteId":2,"variationIndex":8,"hex":"#a24b35"}},"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"contentPadding":50,"blockTopSpacing":0,"blockBottomSpacing":1,"minHeightFallback":50,"contentAreaWidth":60,"layoutGutter":50,"images":[{"id":"FPm5MGSqD3w","url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":4000,"height":6000,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=85","width":4000,"height":6000},"large":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":20,"placementVariation":75,"paletteVariation":11,"colorSignal":3} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"secondaryMetadata":"none","postsToShow":3,"loadingMode":"manual","specificPosts":["2829","1819","3212"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showDescription":false,"showMeta":true,"cardLayout":"stacked","layoutStyle":"classic","columns":3,"gridGap":10,"overlayFilterType":"duotone","overlayFilterDuotoneConfig":{"name":"Brand Primary - 10 and Secondary - 7","from":{"paletteId":1,"variationIndex":11,"hex":"#1d293c"},"to":{"paletteId":2,"variationIndex":8,"hex":"#a24b35"}},"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"contentPadding":50,"blockTopSpacing":0,"blockBottomSpacing":1,"minHeightFallback":50,"contentAreaWidth":60,"layoutGutter":50,"images":[{"id":"2UpMepuEeak","url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":6000,"height":4000,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=85","width":6000,"height":4000},"large":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":20,"positionShift":50,"elementsDistance":0,"placementVariation":100,"paletteVariation":11,"colorSignal":3} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"secondaryMetadata":"none","postsToShow":3,"loadingMode":"manual","specificPosts":["2829","1819","3212"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showDescription":false,"showMeta":true,"cardLayout":"stacked","layoutStyle":"classic","columns":3,"gridGap":10,"overlayFilterType":"duotone","overlayFilterDuotoneConfig":{"name":"Brand Primary - 10 and Secondary - 7","from":{"paletteId":1,"variationIndex":11,"hex":"#1d293c"},"to":{"paletteId":2,"variationIndex":8,"hex":"#a24b35"}},"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"contentPadding":50,"blockTopSpacing":0,"blockBottomSpacing":1,"minHeightFallback":50,"contentAreaWidth":60,"layoutGutter":50,"images":[{"id":"FPm5MGSqD3w","url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":4000,"height":6000,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=85","width":4000,"height":6000},"large":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":40,"positionShift":45,"elementsDistance":0,"placementVariation":50,"paletteVariation":11,"colorSignal":3} /-->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/posts' )
		)
	);

	register_block_pattern(
		'novablocks/posts-4',
		array(
			'title'       => __( 'Parametric Grid', '__plugin_txtd' ),
			'description' => _x( '...', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"posts-collection","headerPosition":1,"title":"Horizontal Cards","specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","columns":3,"gridcolumns":5,"gridrows":5,"featuresize":3,"fragmentation":0,"hierarchycrossing":28,"imageweightleft":4,"metadetailsleft":0,"metadetailsright":7,"balancemdandiw":true,"thumbnailAspectRatio":45,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":25,"containerHeight":45} -->
							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","columns":3,"gridcolumns":5,"gridrows":5,"featuresize":3,"fragmentation":0,"hierarchycrossing":28,"imageweightleft":4,"metadetailsleft":0,"metadetailsright":7,"balancemdandiw":true,"headerPosition":1,"thumbnailAspectRatio":45,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":25,"images":[{"id":"FPm5MGSqD3w","url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":4000,"height":6000,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=85","width":4000,"height":6000},"large":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1530171538432-05567b463984?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258N3wxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":20,"placementVariation":75,"containerHeight":45} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","columns":3,"gridcolumns":5,"gridrows":5,"featuresize":3,"fragmentation":0,"hierarchycrossing":28,"imageweightleft":4,"metadetailsleft":0,"metadetailsright":7,"balancemdandiw":true,"headerPosition":1,"thumbnailAspectRatio":45,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":25,"images":[{"id":"2UpMepuEeak","url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":6000,"height":4000,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=85","width":6000,"height":4000},"large":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1552688455-b6faba3c8631?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258OXwxMDYwNjAxNXx8fHx8Mnx8MTYzODE4MDg2Nw\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":20,"positionShift":50,"elementsDistance":0,"placementVariation":100,"containerHeight":45} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","columns":3,"gridcolumns":5,"gridrows":5,"featuresize":3,"fragmentation":0,"hierarchycrossing":28,"imageweightleft":4,"metadetailsleft":0,"metadetailsright":7,"balancemdandiw":true,"headerPosition":1,"thumbnailAspectRatio":45,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":25,"images":[{"id":"n463SoeSiVY","url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":4030,"height":4038,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=85","width":4030,"height":4038},"large":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258NXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":60,"positionShift":70,"elementsDistance":100,"placementVariation":75,"containerHeight":45} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","columns":3,"gridcolumns":5,"gridrows":5,"featuresize":3,"fragmentation":0,"hierarchycrossing":28,"imageweightleft":4,"metadetailsleft":0,"metadetailsright":7,"balancemdandiw":true,"headerPosition":1,"thumbnailAspectRatio":45,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":25,"images":[{"id":"Z3g8miECz9s","url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":5821,"height":3881,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=85","width":5821,"height":3881},"large":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4MTIzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":60,"positionShift":20,"elementsDistance":100,"placementVariation":100,"containerHeight":45} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","columns":3,"gridcolumns":5,"gridrows":5,"featuresize":3,"fragmentation":0,"hierarchycrossing":28,"imageweightleft":4,"metadetailsleft":0,"metadetailsright":7,"balancemdandiw":true,"headerPosition":1,"thumbnailAspectRatio":45,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":25,"images":[{"id":"1vKTnwLMdqs","url":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":7360,"height":4912,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=85","width":7360,"height":4912},"large":{"url":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MXwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":100,"positionShift":75,"elementsDistance":60,"placementVariation":100,"containerHeight":45} /-->

							<!-- wp:novablocks/supernova-item {"defaultsGenerated":true,"specificPosts":["2829","1819"],"preventDuplicatePosts":false,"showCollectionTitle":false,"showCollectionSubtitle":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","columns":3,"gridcolumns":5,"gridrows":5,"featuresize":3,"fragmentation":0,"hierarchycrossing":28,"imageweightleft":4,"metadetailsleft":0,"metadetailsright":7,"balancemdandiw":true,"headerPosition":1,"thumbnailAspectRatio":45,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":60,"layoutGutter":25,"images":[{"id":"Z3g8miECz9s","url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","type":"image","width":5821,"height":3881,"sizes":{"full":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=85","width":5821,"height":3881},"large":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"medium":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"thumbnail":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"novablocks_huge":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_large":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"},"novablocks_medium":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"},"novablocks_tiny":{"url":"https://images.unsplash.com/photo-1550353149-c124059ac8c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMzk4NzV8MHwxfGNvbGxlY3Rpb258MnwxMDYwNjAxNXx8fHx8Mnx8MTY0MTM4ODU2MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"}}}],"stylePreset":"just-my-style","sizeContrast":60,"positionShift":5,"elementsDistance":40,"placementVariation":75,"containerHeight":45} /-->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/posts' )
		)
	);


	/*------------------------------------*\
	  TESTIMONIALS
	\*------------------------------------*/

	register_block_pattern(
		'novablocks/testimonials-1',
		array(
			'title'       => __( 'Testimonials 1', '__plugin_txtd' ),
			'description' => _x( 'Three testimonials on one row.', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"media-card","title":"Find out why our customers think it’s better with us","collectionTitleLevel":3,"level":3,"cardTitleLevel":4,"sourceType":"blocks","postsToShow":3,"showCollectionSubtitle":false,"showMedia":false,"showTitle":false,"showSubtitle":false,"showButtons":false,"showMeta":true,"contentPosition":"top center","layoutStyle":"classic","columns":3,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"imagePadding":50,"contentPadding":50,"blockTopSpacing":0,"contentAreaWidth":70,"layoutGutter":50} -->
							<!-- wp:novablocks/supernova-item {"level":3,"description":"“I love helping other founders. Now I can write their first check and have a bigger stake in their success.”\u003cbr\u003eQuinn Slack · Sourcegraph","defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"blocks","postsToShow":3,"showCollectionSubtitle":false,"showMedia":false,"showTitle":false,"showSubtitle":false,"showButtons":false,"showMeta":true,"contentPosition":"top center","layoutStyle":"classic","columns":3,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"imagePadding":50,"contentPadding":50,"blockTopSpacing":0,"contentAreaWidth":70,"layoutGutter":50,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-3-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":239,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-3-239x300.jpg","orientation":"portrait"},"large":{"height":1024,"width":817,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-3-817x1024.jpg","orientation":"portrait"},"novablocks_large":{"height":1366,"width":1089,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-3-1089x1366.jpg","orientation":"portrait"},"novablocks_medium":{"height":1024,"width":817,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-3-817x1024.jpg","orientation":"portrait"},"novablocks_small":{"height":768,"width":612,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-3-612x768.jpg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":383,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-3-383x480.jpg","orientation":"portrait"},"full":{"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-3.jpg","height":1708,"width":1362,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":2541,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-3.jpg","alt":"","link":"http://nova.local/lena-team-3/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":40,"positionShift":30,"elementsDistance":40,"placementVariation":50} -->
							<!-- wp:pullquote -->
							<figure class="wp-block-pullquote has-normal-font-size"><blockquote><p><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-black-color">★★★★★</mark></p><p>“As a visual person, I couldn’t resist Pixelgrade’s design oriented products. Their <mark style="background-color:#abb8c3" class="has-inline-color">unique aesthetics</mark> make them really special and stand out from the crowd.”</p><cite>Linda Zadelaar, Architect from Netherlands</cite></blockquote></figure>
							<!-- /wp:pullquote -->
							<!-- /wp:novablocks/supernova-item -->

							<!-- wp:novablocks/supernova-item {"level":3,"defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"blocks","postsToShow":3,"showCollectionSubtitle":false,"showMedia":false,"showTitle":false,"showSubtitle":false,"showButtons":false,"showMeta":true,"contentPosition":"top center","layoutStyle":"classic","columns":3,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"imagePadding":50,"contentPadding":50,"blockTopSpacing":0,"contentAreaWidth":70,"layoutGutter":50,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-6-sm-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":239,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-6-sm-239x300.jpg","orientation":"portrait"},"novablocks_small":{"height":768,"width":612,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-6-sm-612x768.jpg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":383,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-6-sm-383x480.jpg","orientation":"portrait"},"full":{"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-6-sm.jpg","height":784,"width":625,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":2544,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-6-sm.jpg","alt":"","link":"http://nova.local/lena-team-6-sm/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":20,"positionShift":20,"elementsDistance":0} -->
							<!-- wp:pullquote -->
							<figure class="wp-block-pullquote has-normal-font-size"><blockquote><p><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-black-color">★★★★★</mark></p><p>"The products are well built, beautiful, easy to use and look professional. The <mark style="background-color:#abb8c3" class="has-inline-color">editing mode</mark> is very nice, there are so many options to choose, you can change everything as you want.”</p><cite>Alexander Krziwanie, Designer from Germany</cite></blockquote></figure>
							<!-- /wp:pullquote -->
							<!-- /wp:novablocks/supernova-item -->

							<!-- wp:novablocks/supernova-item {"level":3,"defaultsGenerated":true,"cardTitleLevel":4,"collectionTitleLevel":3,"sourceType":"blocks","postsToShow":3,"showCollectionSubtitle":false,"showMedia":false,"showTitle":false,"showSubtitle":false,"showButtons":false,"showMeta":true,"contentPosition":"top center","layoutStyle":"classic","columns":3,"thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":55,"imagePadding":50,"contentPadding":50,"blockTopSpacing":0,"contentAreaWidth":70,"layoutGutter":50,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-1-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":239,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-1-239x300.jpg","orientation":"portrait"},"large":{"height":1024,"width":817,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-1-817x1024.jpg","orientation":"portrait"},"novablocks_large":{"height":1366,"width":1089,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-1-1089x1366.jpg","orientation":"portrait"},"novablocks_medium":{"height":1024,"width":817,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-1-817x1024.jpg","orientation":"portrait"},"novablocks_small":{"height":768,"width":612,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-1-612x768.jpg","orientation":"portrait"},"novablocks_tiny":{"height":480,"width":383,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-1-383x480.jpg","orientation":"portrait"},"full":{"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-1.jpg","height":1708,"width":1362,"orientation":"portrait"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":2539,"url":"http://nova.local/wp-content/uploads/2021/10/lena-team-1.jpg","alt":"","link":"http://nova.local/lena-team-1/","caption":"","description":""}],"stylePreset":"just-my-style","positionShift":55,"elementsDistance":80,"placementVariation":100} -->
							<!-- wp:pullquote -->
							<figure class="wp-block-pullquote has-normal-font-size"><blockquote><p><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-black-color">★★★★★</mark></p><p>"I chose Pixelgrade because they have a&nbsp;<mark style="background-color:#abb8c3" class="has-inline-color">personal approach</mark>&nbsp;and warm attitude towards their customers, are modern, flexible and easy to communicate with.”</p><cite>Ekaterina Panova, Journalist from Bulgaria</cite></blockquote></figure>
							<!-- /wp:pullquote -->
							<!-- /wp:novablocks/supernova-item -->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/testimonials' )
		)
	);

	register_block_pattern(
		'novablocks/testimonials-2',
		array(
			'title'       => __( 'Single large testimonial', '__plugin_txtd' ),
			'description' => _x( '---', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"media-card","sourceType":"blocks","postsToShow":1,"showCollectionTitle":false,"showCollectionSubtitle":false,"showTitle":false,"showSubtitle":false,"showButtons":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal-reverse","layoutStyle":"classic","thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":60,"contentPadding":100,"blockTopSpacing":2,"blockBottomSpacing":2,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"contentAreaWidth":55,"layoutGutter":50,"spacingModifier":0,"blobMaskSides":7,"blobMaskPatternSeed":50,"blobMaskComplexity":100,"blobMaskSmoothness":100,"sizeContrast":100,"positionShift":40,"elementsDistance":40,"palette":1,"useSourceColorAsReference":true,"colorSignal":2,"contentPaletteVariation":9} -->
							<!-- wp:novablocks/supernova-item {"description":"“I love helping other founders. Now I can write their first check and have a bigger stake in their success.”\u003cbr\u003eQuinn Slack · Sourcegraph","defaultsGenerated":true,"sourceType":"blocks","postsToShow":1,"showCollectionTitle":false,"showCollectionSubtitle":false,"showTitle":false,"showSubtitle":false,"showButtons":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal-reverse","layoutStyle":"classic","thumbnailAspectRatioString":"portrait","thumbnailAspectRatio":60,"contentPadding":100,"blockTopSpacing":2,"blockBottomSpacing":2,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"contentAreaWidth":55,"layoutGutter":50,"spacingModifier":0,"blobMaskSides":7,"blobMaskPatternSeed":50,"blobMaskComplexity":100,"blobMaskSmoothness":100,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-1029-1600x1067-1-150x150.jpeg","orientation":"landscape"},"medium":{"height":200,"width":300,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-1029-1600x1067-1-300x200.jpeg","orientation":"landscape"},"large":{"height":683,"width":1024,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-1029-1600x1067-1-1024x683.jpeg","orientation":"landscape"},"novablocks_large":{"height":911,"width":1366,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-1029-1600x1067-1-1366x911.jpeg","orientation":"landscape"},"novablocks_medium":{"height":683,"width":1024,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-1029-1600x1067-1-1024x683.jpeg","orientation":"landscape"},"novablocks_small":{"height":512,"width":768,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-1029-1600x1067-1-768x512.jpeg","orientation":"landscape"},"novablocks_tiny":{"height":320,"width":480,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-1029-1600x1067-1-480x320.jpeg","orientation":"landscape"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-1029-1600x1067-1.jpeg","height":1067,"width":1600,"orientation":"landscape"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":2610,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-1029-1600x1067-1.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/layouts/article-with-two-sidebars/freunde-von-freunden-zoe-mowat-1029-1600x1067/","caption":"","description":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Saif-Faisal-1544-150x150.jpeg","orientation":"landscape"},"medium":{"height":200,"width":300,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Saif-Faisal-1544-300x200.jpeg","orientation":"landscape"},"large":{"height":683,"width":1024,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Saif-Faisal-1544-1024x683.jpeg","orientation":"landscape"},"novablocks_large":{"height":911,"width":1366,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Saif-Faisal-1544-1366x911.jpeg","orientation":"landscape"},"novablocks_medium":{"height":683,"width":1024,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Saif-Faisal-1544-1024x683.jpeg","orientation":"landscape"},"novablocks_small":{"height":512,"width":768,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Saif-Faisal-1544-768x512.jpeg","orientation":"landscape"},"novablocks_tiny":{"height":320,"width":480,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Saif-Faisal-1544-480x320.jpeg","orientation":"landscape"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Saif-Faisal-1544.jpeg","height":1000,"width":1500,"orientation":"landscape"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":2607,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Saif-Faisal-1544.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/layouts/article-with-two-sidebars/freunde-von-freunden-saif-faisal-1544/","caption":"","description":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-0752-1600x1067-1-150x150.jpeg","orientation":"landscape"},"medium":{"height":200,"width":300,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-0752-1600x1067-1-300x200.jpeg","orientation":"landscape"},"large":{"height":683,"width":1024,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-0752-1600x1067-1-1024x683.jpeg","orientation":"landscape"},"novablocks_large":{"height":911,"width":1366,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-0752-1600x1067-1-1366x911.jpeg","orientation":"landscape"},"novablocks_medium":{"height":683,"width":1024,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-0752-1600x1067-1-1024x683.jpeg","orientation":"landscape"},"novablocks_small":{"height":512,"width":768,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-0752-1600x1067-1-768x512.jpeg","orientation":"landscape"},"novablocks_tiny":{"height":320,"width":480,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-0752-1600x1067-1-480x320.jpeg","orientation":"landscape"},"full":{"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-0752-1600x1067-1.jpeg","height":1067,"width":1600,"orientation":"landscape"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":2609,"url":"https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/Freunde-von-Freunden-Zoe-Mowat-0752-1600x1067-1.jpeg","alt":"","link":"https://trial.pixelgrade.com/tosca/layouts/article-with-two-sidebars/freunde-von-freunden-zoe-mowat-0752-1600x1067/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":100,"positionShift":40,"elementsDistance":40,"palette":1,"paletteVariation":9} -->
							<!-- wp:quote {"className":"is-style-large has-larger-font-size","fontSize":"larger"} -->
							<blockquote class="wp-block-quote is-style-large has-larger-font-size"><p>“I chose Pixelgrade because they have a personal approach and warm attitude towards their customers, are modern, flexible and easy to communicate with.”</p><cite><strong><em>Anne Marie, Storyteller from Germany</em></strong></cite></blockquote>
							<!-- /wp:quote -->
							<!-- /wp:novablocks/supernova-item -->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/testimonials' )
		)
	);

	register_block_pattern(
		'novablocks/testimonials-3',
		array(
			'title'       => __( 'Single testimonial with logo', '__plugin_txtd' ),
			'description' => _x( '---', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"media-card","align":"none","sourceType":"blocks","postsToShow":1,"specificPosts":[],"authors":[],"categories":[],"tags":[],"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showTitle":false,"showSubtitle":false,"showButtons":false,"showMeta":true,"layoutStyle":"classic","overlayFilterDuotoneConfig":{},"thumbnailAspectRatio":0,"imageResizing":"original","blockTopSpacing":0,"blockBottomSpacing":1,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"contentAreaWidth":70,"layoutGutter":50,"images":[],"focalPoint":{"x":0.5,"y":0.5},"finalFocalPoint":{"x":0.5,"y":0.5}} -->
							<!-- wp:novablocks/supernova-item {"description":"“I love helping other founders. Now I can write their first check and have a bigger stake in their success.”\u003cbr\u003eQuinn Slack · Sourcegraph","defaultsGenerated":true,"sourceType":"blocks","postsToShow":1,"specificPosts":[],"authors":[],"categories":[],"tags":[],"showCollectionTitle":false,"showCollectionSubtitle":false,"showMedia":false,"showTitle":false,"showSubtitle":false,"showButtons":false,"showMeta":true,"layoutStyle":"classic","overlayFilterDuotoneConfig":{},"thumbnailAspectRatio":0,"imageResizing":"original","blockTopSpacing":0,"blockBottomSpacing":1,"emphasisTopSpacing":1,"emphasisBottomSpacing":1,"contentAreaWidth":70,"layoutGutter":50,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http://nova.local/wp-content/uploads/2021/12/IMG_0240-150x150.jpeg","orientation":"landscape"},"medium":{"height":237,"width":300,"url":"http://nova.local/wp-content/uploads/2021/12/IMG_0240-300x237.jpeg","orientation":"landscape"},"novablocks_tiny":{"height":379,"width":480,"url":"http://nova.local/wp-content/uploads/2021/12/IMG_0240-480x379.jpeg","orientation":"landscape"},"full":{"url":"http://nova.local/wp-content/uploads/2021/12/IMG_0240.jpeg","height":450,"width":570,"orientation":"landscape"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3278,"url":"http://nova.local/wp-content/uploads/2021/12/IMG_0240.jpeg","alt":"","link":"http://nova.local/article-media-on-top/img_0240/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":40,"positionShift":30,"elementsDistance":40,"placementVariation":50,"focalPoint":{"x":0.5,"y":0.5},"finalFocalPoint":{"x":0.5,"y":0.5}} -->
							<!-- wp:image {"align":"center","id":2580,"width":175,"sizeSlug":"full","linkDestination":"none"} -->
							<div class="wp-block-image"><figure class="aligncenter size-full is-resized"><img src="https://trial.pixelgrade.com/tosca/wp-content/uploads/sites/3/2021/10/logo-departures_500x.png" alt="" class="wp-image-2580" width="175"/></figure></div>
							<!-- /wp:image -->

							<!-- wp:quote {"className":"is-style-large"} -->
							<blockquote class="wp-block-quote is-style-large has-normal-font-size"><p>“As a visual person, I couldn’t resist Pixelgrade’s design oriented products. Their unique aesthetics make them really special and stand out from the crowd.”</p></blockquote>
							<!-- /wp:quote -->

							<!-- wp:paragraph -->
							<p class="has-normal-font-size"><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-black-color"><strong>Anne Marie</strong>, Journalist from Netherlands</mark></p>
							<!-- /wp:paragraph -->
							<!-- /wp:novablocks/supernova-item -->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/testimonials' )
		)
	);

	register_block_pattern(
		'novablocks/testimonials-4',
		array(
			'title'       => __( 'Horizontal testimonial with photo blob', '__plugin_txtd' ),
			'description' => _x( '---', 'Block pattern description', '__plugin_txtd' ),
			'content'     => '<!-- wp:novablocks/supernova {"variation":"media-card","align":"none","sourceType":"blocks","postsToShow":1,"showCollectionTitle":false,"showCollectionSubtitle":false,"showTitle":false,"showSubtitle":false,"showButtons":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","layoutStyle":"classic","contentPadding":50,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":75,"layoutGutter":50,"spacingModifier":0,"blobsEnableMask":true,"blobPatternSeed":50,"blobComplexity":100,"blobSmoothness":50,"blobRotation":40,"blobsEnableDecoration":true,"blobMaskSides":6,"blobMaskPatternSeed":10,"blobMaskComplexity":100,"blobMaskSmoothness":100,"blobMaskRotation":100,"blobsSizeBalance":45,"blobsHorizontalDisplacement":40,"blobsVerticalDisplacement":30} -->
							<!-- wp:novablocks/supernova-item {"description":"“I love helping other founders. Now I can write their first check and have a bigger stake in their success.”\u003cbr\u003eQuinn Slack · Sourcegraph","defaultsGenerated":true,"sourceType":"blocks","postsToShow":1,"showCollectionTitle":false,"showCollectionSubtitle":false,"showTitle":false,"showSubtitle":false,"showButtons":false,"showMeta":true,"contentPosition":"center left","cardLayout":"horizontal","layoutStyle":"classic","contentPadding":50,"blockTopSpacing":0,"blockBottomSpacing":1,"contentAreaWidth":75,"layoutGutter":50,"spacingModifier":0,"blobsEnableMask":true,"blobPatternSeed":50,"blobComplexity":100,"blobSmoothness":50,"blobRotation":40,"blobsEnableDecoration":true,"blobMaskSides":6,"blobMaskPatternSeed":10,"blobMaskComplexity":100,"blobMaskSmoothness":100,"blobMaskRotation":100,"blobsSizeBalance":45,"blobsHorizontalDisplacement":40,"blobsVerticalDisplacement":30,"images":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http://nova.local/wp-content/uploads/2021/12/IMG_0240-150x150.jpeg","orientation":"landscape"},"medium":{"height":237,"width":300,"url":"http://nova.local/wp-content/uploads/2021/12/IMG_0240-300x237.jpeg","orientation":"landscape"},"novablocks_tiny":{"height":379,"width":480,"url":"http://nova.local/wp-content/uploads/2021/12/IMG_0240-480x379.jpeg","orientation":"landscape"},"full":{"url":"http://nova.local/wp-content/uploads/2021/12/IMG_0240.jpeg","height":450,"width":570,"orientation":"landscape"}},"mime":"image/jpeg","type":"image","subtype":"jpeg","id":3278,"url":"http://nova.local/wp-content/uploads/2021/12/IMG_0240.jpeg","alt":"","link":"http://nova.local/article-media-on-top/img_0240/","caption":"","description":""}],"stylePreset":"just-my-style","sizeContrast":40,"positionShift":30,"elementsDistance":40,"placementVariation":50} -->
							<!-- wp:paragraph -->
							<p class="has-normal-font-size">“I love helping other founders. Now I can write their first check and have a bigger stake in their success.”</p>
							<!-- /wp:paragraph -->

							<!-- wp:paragraph -->
							<p class="has-normal-font-size"><strong>– <em>Celine Halioua, Sourcepoint</em></strong></p>
							<!-- /wp:paragraph -->
							<!-- /wp:novablocks/supernova-item -->
							<!-- /wp:novablocks/supernova -->',
			'categories'  => array( 'novablocks/testimonials' )
		)
	);
}

add_action( 'init', 'novablocks_register_block_patterns' );
