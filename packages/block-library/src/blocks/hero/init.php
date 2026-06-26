<?php
/**
 * Legacy Hero block compatibility.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_hero_attributes(): array {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/hero/attributes.json',

		'packages/color-signal/src/attributes.json',
		'packages/media-composition/src/attributes.json',
		'packages/scrolling-effect/src/attributes.json',
		'packages/shape-modeling/src/attributes.json',

		'packages/block-editor/src/filters/with-content-position-matrix/attributes.json',
		'packages/block-editor/src/filters/with-overlay-filter/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
		'packages/block-editor/src/filters/with-card-elements-visibility/attributes.json',
	] );
}

function novablocks_require_legacy_hero_supernova_renderers() {
	$block_library_path = defined( 'NOVABLOCKS_DEVELOPMENT_MODE' ) && NOVABLOCKS_DEVELOPMENT_MODE
		? 'packages/block-library/src/blocks/'
		: 'build/block-library/blocks/';

	if ( ! function_exists( 'novablocks_get_supernova_attributes' ) ) {
		require_once novablocks_get_plugin_path() . $block_library_path . 'supernova/init.php';
	}

	if ( ! function_exists( 'novablocks_get_supernova_item_attributes' ) ) {
		require_once novablocks_get_plugin_path() . $block_library_path . 'supernova-item/init.php';
	}
}

function novablocks_get_legacy_hero_images( array $attributes ): array {
	if ( empty( $attributes['media'] ) || ! is_array( $attributes['media'] ) || empty( $attributes['media']['url'] ) ) {
		return [];
	}

	$image = $attributes['media'];
	unset( $image['caption'], $image['title'] );

	return [ $image ];
}

function novablocks_get_legacy_hero_supernova_attributes( array $attributes ): array {
	$attributes        = novablocks_get_attributes_with_defaults( $attributes, novablocks_get_hero_attributes() );
	$color_signal      = $attributes['colorSignal'] ?? 3;
	$palette_variation = $attributes['paletteVariation'] ?? 12;

	unset(
		$attributes['media'],
		$attributes['scrollIndicatorBlock'],
		$attributes['templateInserted']
	);

	return array_merge(
		$attributes,
		[
			'variation'                  => 'novablocks-card-hero',
			'showCollectionTitle'        => false,
			'showCollectionSubtitle'     => false,
			'contentType'                => 'custom',
			'layoutStyle'                => 'classic',
			'contentPadding'             => $attributes['contentPadding'] ?? 100,
			'cardLayout'                 => 'stacked',
			'postsToShow'                => 1,
			'columns'                    => 1,
			'contentPosition'            => $attributes['contentPosition'] ?? 'center center',
			'minHeightFallback'          => $attributes['minHeightFallback'] ?? 66,
			'contentColorSignal'         => $color_signal,
			'contentPaletteVariation'    => $palette_variation,
			'overlayFilterStrength'      => $attributes['overlayFilterStrength'] ?? 30,
			'align'                      => $attributes['align'] ?? 'full',
			'blockTopSpacing'            => $attributes['blockTopSpacing'] ?? 0,
			'blockBottomSpacing'         => $attributes['blockBottomSpacing'] ?? 1,
			'emphasisTopSpacing'         => $attributes['emphasisTopSpacing'] ?? 0,
			'emphasisBottomSpacing'      => $attributes['emphasisBottomSpacing'] ?? 0,
			'scrollingEffect'            => $attributes['scrollingEffect'] ?? 'parallax',
			'defaultsGenerated'          => false,
		]
	);
}

function novablocks_get_legacy_hero_supernova_item_attributes( array $attributes ): array {
	$supernova_attributes = novablocks_get_legacy_hero_supernova_attributes( $attributes );

	return array_merge(
		$supernova_attributes,
		[
			'images'                    => novablocks_get_legacy_hero_images( $attributes ),
			'colorSignal'               => $attributes['colorSignal'] ?? 3,
			'paletteVariation'          => $attributes['paletteVariation'] ?? 12,
			'scrollIndicatorBlock'      => $attributes['scrollIndicatorBlock'] ?? false,
			'useSourceColorAsReference' => false,
		]
	);
}

function novablocks_enqueue_legacy_hero_supernova_assets() {
	if ( is_admin() || novablocks_is_gutenberg() ) {
		return;
	}

	wp_enqueue_style( 'novablocks/supernova-style' );
	wp_enqueue_style( 'novablocks/supernova-item-style' );
	wp_enqueue_script( 'novablocks/supernova/frontend' );
}

if ( ! function_exists( 'novablocks_render_hero_block' ) ) {

	/**
	 * Render legacy Hero blocks through the current Supernova Hero Card markup.
	 *
	 * @param array    $attributes
	 * @param string   $content
	 * @param WP_Block $block
	 *
	 * @return string
	 */
	function novablocks_render_hero_block( array $attributes, string $content, WP_Block $block ): string {
		novablocks_require_legacy_hero_supernova_renderers();
		novablocks_enqueue_legacy_hero_supernova_assets();

		$supernova_attributes      = novablocks_get_legacy_hero_supernova_attributes( $attributes );
		$supernova_item_attributes = novablocks_get_legacy_hero_supernova_item_attributes( $attributes );
		$card_markup               = novablocks_render_supernova_item_block( $supernova_item_attributes, $content, $block );

		return novablocks_render_supernova_block( $supernova_attributes, $card_markup, $block );
	}
}
