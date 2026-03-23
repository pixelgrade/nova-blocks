<?php
/**
 * Set up the NovaBlocks block editor settings array to be sent to the client-side.
 *
 * @since   2.0.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

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
		'scrollingEffectOptions'       => [
			[
				'label' => esc_html__( 'Static', '__plugin_txtd' ),
				'value' => 'static',
			],
			[
				'label' => esc_html__( 'Parallax', '__plugin_txtd' ),
				'value' => 'parallax',
			],
		],
		'separator'                    => [
			'markup' => '<hr />',
		],
		'theme_support'                => novablocks_get_theme_support(),
		'modules'                      => [],
	];

	$settings['modules']['spaceAndSizing'] = [
		'presetOptions'         => novablocks_get_space_and_sizing_presets(),
		'advancedPresetOptions' => novablocks_get_space_and_sizing_advanced_presets(),
	];

	$settings = apply_filters( 'novablocks/block_editor_initial_settings', $settings );
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

/**
 * Adds a minimal inline Nova header fallback for Site Editor previews.
 *
 * Template thumbnails render inside many iframes at once. When Chrome starts
 * dropping stylesheet requests under that load, the header-row and navigation
 * blocks lose the flex rules that keep previews readable. Gutenberg's shared
 * lazy-editor settings endpoint currently resolves under `core/edit-post`, even
 * when it serves Site Editor previews, so cover both editor contexts here.
 * Keep the fallback inline so previews do not depend on extra network requests.
 *
 * @param array                   $settings Default editor settings.
 * @param WP_Block_Editor_Context $context  Current block editor context.
 *
 * @return array
 */
function novablocks_add_site_editor_preview_fallback_styles( array $settings, WP_Block_Editor_Context $context ): array {
	if ( ! in_array( $context->name, [ 'core/edit-site', 'core/edit-post' ], true ) ) {
		return $settings;
	}

	$settings['styles']   = $settings['styles'] ?? [];
	$settings['styles'][] = [
		'css'            => novablocks_get_site_editor_preview_fallback_styles(),
		'id'             => 'novablocks-site-editor-preview-fallback',
		'__unstableType' => 'presets',
	];

	return $settings;
}
add_filter( 'block_editor_settings_all', 'novablocks_add_site_editor_preview_fallback_styles', 20, 2 );

/**
 * Gets the inline CSS used to keep Site Editor template previews readable.
 *
 * @return string
 */
function novablocks_get_site_editor_preview_fallback_styles(): string {
	return <<<'CSS'
@media only screen and (min-width:1024px) {
	.nb-header-row__inner-container[class] > .wp-block {
		display: flex;
		column-gap: var(--nb-navigation-item-spacing);
		align-items: center;
	}

	.nb-header-row__inner-container[class] > .wp-block > :first-child:not(:last-child),
	.nb-header-row__inner-container[class] > .wp-block > :last-child:not(:first-child) {
		flex: 1 1 50%;
	}

	.nb-header-row__inner-container[class] > .wp-block > :only-child,
	.nb-header-row__inner-container[class] > .wp-block > :not(:first-child):not(:last-child) {
		flex: 1 0 auto;
	}

	.nb-header-row__inner-container[class] > .wp-block > * {
		justify-content: var(--justify-content, center);
	}

	.nb-header-row__inner-container[class] > .wp-block > :first-child:not(:last-child) {
		--justify-content: flex-start;
	}

	.nb-header-row__inner-container[class] > .wp-block > :last-child:not(:first-child) {
		--justify-content: flex-end;
	}

	.nb-header-row__inner-container[class] > .wp-block > [class*='branding'][class][class][class] {
		flex-basis: auto;
	}

	.nb-header-row__inner-container[class] > .wp-block > [class*='nb-navigation'][class][class][class] {
		flex-grow: 1;
	}

	.nb-navigation {
		display: flex;
		justify-content: var(--justify-content, center);
	}

	.nb-navigation :is(ul.menu, .menu > ul) {
		display: flex;
		flex-wrap: wrap;
		column-gap: var(--nb-navigation-item-spacing);
		justify-content: var(--justify-content, center);
	}
}

.nb-navigation .menu > ul,
.nb-navigation ul.menu {
	list-style: none;
	padding-left: 0;
}

.nb-navigation .menu > ul a,
.nb-navigation ul.menu a {
	display: block;
	padding-top: var(--nb-navigation-item-padding-y);
	padding-bottom: var(--nb-navigation-item-padding-y);
	color: inherit;
	text-decoration: none;
}
CSS;
}

/**
 * Prunes heavy iframe assets from the Site Editor template list previews.
 *
 * In the current core/Gutenberg runtime, template thumbnails inherit iframe
 * assets from `__unstableResolvedAssets` in the editor settings rather than the
 * experimental `/wp-block-editor/v1/assets` response. Strip the WooCommerce
 * styles directly from that resolved HTML so the template list stops
 * exhausting Chrome's resource budget while leaving full editors and frontend
 * requests untouched.
 *
 * @param array                   $settings Editor settings.
 * @param WP_Block_Editor_Context $context  Current block editor context.
 *
 * @return array
 */
function novablocks_prune_template_list_preview_resolved_assets( array $settings, WP_Block_Editor_Context $context ): array {
	if ( 'core/edit-site' !== $context->name || ! novablocks_is_template_list_site_editor_request() ) {
		return $settings;
	}

	if ( ! isset( $settings['__unstableResolvedAssets']['styles'] ) || ! is_string( $settings['__unstableResolvedAssets']['styles'] ) ) {
		return $settings;
	}

	$settings['__unstableResolvedAssets']['styles'] = novablocks_remove_preview_woocommerce_style_tags(
		$settings['__unstableResolvedAssets']['styles']
	);

	return $settings;
}
add_filter( 'block_editor_settings_all', 'novablocks_prune_template_list_preview_resolved_assets', 25, 2 );

/**
 * Determines whether the current request is the Site Editor template list.
 *
 * @return bool
 */
function novablocks_is_template_list_site_editor_request(): bool {
	if ( ! is_admin() ) {
		return false;
	}

	global $pagenow;

	if ( 'site-editor.php' !== $pagenow ) {
		return false;
	}

	if ( empty( $_GET['p'] ) || ! is_string( $_GET['p'] ) ) {
		return false;
	}

	return '/template' === rawurldecode( sanitize_text_field( wp_unslash( $_GET['p'] ) ) );
}

/**
 * Dequeues WooCommerce styles before the template list prints parent styles.
 *
 * Gutenberg clones compatibility styles from the parent Site Editor document
 * into each preview iframe. Remove WooCommerce handles at print time so the
 * template grid does not multiply those editor-only assets across every card.
 *
 * @return void
 */
function novablocks_dequeue_template_list_preview_woocommerce_styles(): void {
	if ( ! novablocks_is_template_list_site_editor_request() ) {
		return;
	}

	$wp_styles = wp_styles();

	foreach ( $wp_styles->queue as $handle ) {
		if ( empty( $wp_styles->registered[ $handle ]->src ) ) {
			continue;
		}

		if ( ! novablocks_is_woocommerce_style_source( $wp_styles->registered[ $handle ]->src ) ) {
			continue;
		}

		wp_dequeue_style( $handle );
	}
}
add_action( 'admin_print_styles', 'novablocks_dequeue_template_list_preview_woocommerce_styles', 0 );
add_action( 'wp_print_styles', 'novablocks_dequeue_template_list_preview_woocommerce_styles', 0 );

/**
 * Determines whether a stylesheet source belongs to WooCommerce.
 *
 * @param string $src Registered stylesheet source.
 *
 * @return bool
 */
function novablocks_is_woocommerce_style_source( string $src ): bool {
	return false !== strpos( $src, '/wp-content/plugins/woocommerce/' );
}

/**
 * Removes WooCommerce stylesheet tags from resolved preview assets.
 *
 * @param string $styles_html HTML string generated by `_wp_get_iframed_editor_assets()`.
 *
 * @return string
 */
function novablocks_remove_preview_woocommerce_style_tags( string $styles_html ): string {
	return (string) preg_replace(
		'#<link\b[^>]*href=(["\'])[^"\']*/wp-content/plugins/woocommerce/[^"\']*\1[^>]*>\s*#i',
		'',
		$styles_html
	);
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
				'blockBottomSpacing'    => - 2,
				'emphasisTopSpacing'    => 2,
				'emphasisBottomSpacing' => - 2,
				'enableOverlapping'     => true,
				'verticalAlignment'     => 'top',
			],
		],
		[
			'label'  => esc_html__( 'Overlap Nearby Blocks / Centered', '__plugin_txtd' ),
			'value'  => 'overlap-nearby-1',
			'preset' => [
				'blockTopSpacing'       => - 2,
				'blockBottomSpacing'    => - 2,
				'emphasisTopSpacing'    => - 2,
				'emphasisBottomSpacing' => - 2,
				'enableOverlapping'     => true,
				'verticalAlignment'     => 'center',
			],
		],
		[
			'label'  => esc_html__( 'Overlap Nearby Blocks / Top', '__plugin_txtd' ),
			'value'  => 'overlap-nearby-3',
			'preset' => [
				'blockTopSpacing'       => - 2,
				'blockBottomSpacing'    => 0,
				'emphasisTopSpacing'    => - 2,
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
				'emphasisTopSpacing'    => - 2,
				'emphasisBottomSpacing' => - 2,
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
				'emphasisTopSpacing'    => - 2,
				'emphasisBottomSpacing' => - 2,
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
				'emphasisTopSpacing'    => - 2,
				'emphasisBottomSpacing' => - 2,
				'enableOverlapping'     => true,
				'verticalAlignment'     => 'bottom',
			],
		],
	];
}

// Removed: novablocks_disable_block_editor_layout() was globally disabling
// supportsLayout for ALL blocks. This conflicts with WP 7.0's layout system
// which relies on supportsLayout for core blocks (Group, Columns, Row).
// Nova Blocks blocks control their own layout via CSS custom properties and
// do not need this global override.

function novablocks_get_facets() {
	$facetwp_settings_option = get_option( 'facetwp_settings' );
	$facetwp_settings = ( false !== $facetwp_settings_option ) ? json_decode( $facetwp_settings_option, true ) : [];

	if ( ! isset( $facetwp_settings['facets'] ) ) {
		$facetwp_settings['facets'] = [];
	}

	return apply_filters( 'facetwp_facets', $facetwp_settings['facets'] );
}

function novablocks_settings_add_facetwp_facets( $novablocks_settings ) {
	$facets = novablocks_get_facets();

	if ( ! empty( $facets ) ) {
		$novablocks_settings[ 'facetwp_facets' ] = $facets;
	}

	return $novablocks_settings;
}
add_filter( 'novablocks_block_editor_settings', 'novablocks_settings_add_facetwp_facets' );
