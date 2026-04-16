<?php
/**
 * Format-specific collection card blueprints.
 *
 * @package Nova_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_post_format_card_blueprint_slug( array $profile ): string {
	$format = $profile['format'] ?? '';

	if ( 'quote' === $format ) {
		return 'card-quote';
	}

	if ( 'image' === $format ) {
		return 'card-image';
	}

	return '';
}

function novablocks_get_post_format_card_blueprint_format( string $slug ): string {
	if ( 'card-quote' === $slug ) {
		return 'quote';
	}

	if ( 'card-image' === $slug ) {
		return 'image';
	}

	return '';
}

function novablocks_get_post_format_card_blueprint( string $slug ): ?array {
	static $blueprint_cache = [];

	if ( '' === $slug ) {
		return null;
	}

	$template = get_block_template( get_stylesheet() . '//' . $slug, 'wp_template_part' );

	if ( ! $template instanceof WP_Block_Template || empty( $template->content ) ) {
		$cache_key = $slug . ':missing';

		if ( array_key_exists( $cache_key, $blueprint_cache ) ) {
			return $blueprint_cache[ $cache_key ];
		}

		$blueprint_cache[ $cache_key ] = null;

		return $blueprint_cache[ $cache_key ];
	}

	$cache_key = $slug . ':' . md5( $template->content );

	if ( array_key_exists( $cache_key, $blueprint_cache ) ) {
		return $blueprint_cache[ $cache_key ];
	}

	$blueprint_cache[ $cache_key ] = novablocks_parse_post_format_card_blueprint( $template );

	return $blueprint_cache[ $cache_key ];
}

function novablocks_parse_post_format_card_blueprint( WP_Block_Template $template ): ?array {
	$blocks      = parse_blocks( $template->content );
	$root_block  = novablocks_find_first_named_block( $blocks, 'novablocks/supernova' );
	$format      = novablocks_get_post_format_card_blueprint_format( $template->slug );

	if ( '' === $format ) {
		return null;
	}

	if ( empty( $root_block ) ) {
		return null;
	}

	$item_blocks = is_array( $root_block['innerBlocks'] ?? null ) ? $root_block['innerBlocks'] : [];
	$item_block  = novablocks_find_first_named_block( $item_blocks, 'novablocks/supernova-item' );

	if ( empty( $item_block ) ) {
		return null;
	}

	$root_attrs = is_array( $root_block['attrs'] ?? null ) ? $root_block['attrs'] : [];
	$item_attrs = is_array( $item_block['attrs'] ?? null ) ? $item_block['attrs'] : [];

	if ( function_exists( 'novablocks_get_attributes_with_defaults' ) ) {
		if ( function_exists( 'novablocks_get_supernova_attributes' ) ) {
			$root_attrs = novablocks_get_attributes_with_defaults( $root_attrs, novablocks_get_supernova_attributes() );
		}

		if ( function_exists( 'novablocks_get_supernova_item_attributes' ) ) {
			$item_attrs = novablocks_get_attributes_with_defaults( $item_attrs, novablocks_get_supernova_item_attributes() );
		}
	}

	$blueprint = [
		'format'     => $format,
		'slug'       => $template->slug,
		'root_block' => $root_block,
		'item_block' => $item_block,
		'root_attrs' => $root_attrs,
		'item_attrs' => $item_attrs,
	];

	if ( ! novablocks_validate_post_format_card_blueprint( $blueprint ) ) {
		return null;
	}

	return $blueprint;
}

function novablocks_validate_post_format_card_blueprint( array $blueprint ): bool {
	if ( empty( $blueprint['root_block'] ) || empty( $blueprint['item_block'] ) ) {
		return false;
	}

	$item_blocks = is_array( $blueprint['item_block']['innerBlocks'] ?? null ) ? $blueprint['item_block']['innerBlocks'] : [];
	$format      = $blueprint['format'] ?? '';

	if ( 'quote' === $format ) {
		return ! empty( novablocks_find_first_named_block( $item_blocks, 'core/quote' ) );
	}

	if ( 'image' === $format ) {
		return ! empty( novablocks_find_first_named_block( $item_blocks, 'core/heading' ) );
	}

	return false;
}

function novablocks_validate_post_format_card_quote_blueprint( array $blueprint ): bool {
	return novablocks_validate_post_format_card_blueprint( $blueprint );
}

function novablocks_find_first_named_block( array $blocks, string $block_name ): ?array {
	foreach ( $blocks as $block ) {
		if ( $block_name === ( $block['blockName'] ?? null ) ) {
			return $block;
		}

		if ( ! empty( $block['innerBlocks'] ) ) {
			$match = novablocks_find_first_named_block( $block['innerBlocks'], $block_name );

			if ( ! empty( $match ) ) {
				return $match;
			}
		}
	}

	return null;
}

function novablocks_replace_first_named_block( array $blocks, string $block_name, callable $replacement, bool &$replaced ): array {
	foreach ( $blocks as $index => $block ) {
		if ( $replaced ) {
			break;
		}

		if ( $block_name === ( $block['blockName'] ?? null ) ) {
			$blocks[ $index ] = $replacement( $block );
			$replaced         = true;
			break;
		}

		if ( ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
			$block['innerBlocks'] = novablocks_replace_first_named_block( $block['innerBlocks'], $block_name, $replacement, $replaced );
			$blocks[ $index ]     = $block;
		}
	}

	return $blocks;
}

function novablocks_maybe_get_post_format_blueprint_card_markup( WP_Post $post, array $attributes, array $profile ): ?string {
	$format = $profile['format'] ?? '';

	if ( ! in_array( $format, [ 'quote', 'image' ], true ) ) {
		return null;
	}

	if ( function_exists( 'novablocks_get_attributes_with_defaults' ) ) {
		if ( function_exists( 'novablocks_get_supernova_attributes' ) ) {
			$attributes = novablocks_get_attributes_with_defaults( $attributes, novablocks_get_supernova_attributes() );
		}

		if ( function_exists( 'novablocks_get_supernova_item_attributes' ) ) {
			$attributes = novablocks_get_attributes_with_defaults( $attributes, novablocks_get_supernova_item_attributes() );
		}
	}

	$slug      = novablocks_get_post_format_card_blueprint_slug( $profile );
	$blueprint = novablocks_get_post_format_card_blueprint( $slug );

	if ( empty( $blueprint ) ) {
		return null;
	}

	$root_attributes = novablocks_get_post_format_blueprint_root_attributes( $attributes, $blueprint );
	$item_attributes = novablocks_get_post_format_blueprint_item_attributes( $attributes, $blueprint );
	$content_markup  = '';

	if ( 'quote' === $format ) {
		$quote = trim( (string) ( $profile['extracts']['quote'] ?? '' ) );

		if ( '' === $quote ) {
			return null;
		}

		$content_markup = novablocks_get_quote_blueprint_content_markup( $post, $profile, $blueprint['item_block'] );
	}

	if ( 'image' === $format ) {
		$content_markup = novablocks_get_image_blueprint_content_markup( $post, $blueprint['item_block'] );
	}

	if ( '' === $content_markup ) {
		return null;
	}

	$media_markup = novablocks_get_post_format_blueprint_media_markup( $post, $item_attributes, $content_markup !== '' );
	$item_markup  = novablocks_get_collection_card_surface_markup( $media_markup, $content_markup, $item_attributes );

	return novablocks_get_post_format_blueprint_supernova_markup( $root_attributes, $item_markup, $format );
}

function novablocks_maybe_get_quote_blueprint_card_markup( WP_Post $post, array $attributes, array $profile ): ?string {
	return novablocks_maybe_get_post_format_blueprint_card_markup( $post, $attributes, $profile );
}

function novablocks_get_post_format_blueprint_media_context_attribute_keys(): array {
	return [
		'stylePreset',
		'sizeContrast',
		'positionShift',
		'elementsDistance',
		'placementVariation',
		'imageRotation',
		'imageResizing',
		'containerHeight',
		'objectPosition',
		'defaultsGenerated',
		'blobsEnableMask',
		'blobSides',
		'blobPatternSeed',
		'blobComplexity',
		'blobSmoothness',
		'blobRotation',
		'blobsEnableDecoration',
		'blobMaskSides',
		'blobMaskPatternSeed',
		'blobMaskComplexity',
		'blobMaskSmoothness',
		'blobMaskRotation',
		'blobsSizeBalance',
		'blobsHorizontalDisplacement',
		'blobsVerticalDisplacement',
	];
}

function novablocks_get_quote_blueprint_media_context_attribute_keys(): array {
	return novablocks_get_post_format_blueprint_media_context_attribute_keys();
}

function novablocks_get_post_format_blueprint_root_data_attribute_names(): array {
	return array_merge(
		[
			'palette',
			'palette-variation',
			'color-signal',
			'content-palette-variation',
			'content-color-signal',
			'use-source-color-as-reference',
			'emphasis-area',
			'card-layout',
			'content-position',
		],
		array_map( 'novablocks_camel_case_to_kebab_case', novablocks_get_post_format_blueprint_media_context_attribute_keys() )
	);
}

function novablocks_get_quote_blueprint_root_data_attribute_names(): array {
	return novablocks_get_post_format_blueprint_root_data_attribute_names();
}

function novablocks_get_post_format_blueprint_root_attributes( array $attributes, array $blueprint ): array {
	$root_attributes = $attributes;
	$blueprint_root  = $blueprint['root_attrs'] ?? [];
	$blueprint_item  = $blueprint['item_attrs'] ?? [];
	$authored_root   = is_array( $blueprint['root_block']['attrs'] ?? null ) ? $blueprint['root_block']['attrs'] : [];
	$authored_item   = is_array( $blueprint['item_block']['attrs'] ?? null ) ? $blueprint['item_block']['attrs'] : [];

	$root_override_keys = [
		'palette',
		'paletteVariation',
		'colorSignal',
		'contentPaletteVariation',
		'contentColorSignal',
		'useSourceColorAsReference',
		'emphasisArea',
		'contentPadding',
		'imagePadding',
		'className',
	];

	$root_override_keys = array_merge(
		$root_override_keys,
		novablocks_get_post_format_blueprint_media_context_attribute_keys()
	);

	foreach ( $root_override_keys as $key ) {
		if ( array_key_exists( $key, $authored_root ) ) {
			$root_attributes[ $key ] = $blueprint_root[ $key ];
		} elseif ( array_key_exists( $key, $authored_item ) ) {
			$root_attributes[ $key ] = $blueprint_item[ $key ];
		}
	}

	$root_attributes['contentType']     = 'custom';
	$root_attributes['showCollectionTitle']    = false;
	$root_attributes['showCollectionSubtitle'] = false;
	$root_attributes['title']                  = '';
	$root_attributes['subtitle']               = '';
	$root_attributes['cardLayout']      = $blueprint_item['cardLayout'] ?? ( $root_attributes['cardLayout'] ?? 'stacked' );
	$root_attributes['contentPosition'] = $blueprint_item['contentPosition'] ?? ( $root_attributes['contentPosition'] ?? 'center center' );

	if ( ! empty( $blueprint_root['className'] ) ) {
		$root_attributes['className'] = trim( ( $attributes['className'] ?? '' ) . ' ' . $blueprint_root['className'] );
	}

	return $root_attributes;
}

function novablocks_get_quote_blueprint_root_attributes( array $attributes, array $blueprint ): array {
	return novablocks_get_post_format_blueprint_root_attributes( $attributes, $blueprint );
}

function novablocks_get_post_format_blueprint_item_attributes( array $attributes, array $blueprint ): array {
	$item_attributes = $attributes;
	$blueprint_item  = $blueprint['item_attrs'] ?? [];

	$item_override_keys = [
		'cardLayout',
		'contentPosition',
		'contentPadding',
		'overlayFilterStrength',
		'minHeightFallback',
		'palette',
		'paletteVariation',
		'colorSignal',
		'contentPaletteVariation',
		'contentColorSignal',
		'useSourceColorAsReference',
		'thumbnailAspectRatioString',
		'thumbnailAspectRatio',
		'imageResizing',
		'layoutGutter',
		'imagePadding',
		'mediaContainerHeight',
		'contentAreaWidth',
		'spacingModifier',
		'spacingMultiplierOverride',
		'scrollingEffect',
		'emphasisArea',
		'className',
	];

	foreach ( $item_override_keys as $key ) {
		if ( array_key_exists( $key, $blueprint_item ) ) {
			$item_attributes[ $key ] = $blueprint_item[ $key ];
		}
	}

	if ( ! empty( $blueprint_item['className'] ) ) {
		$item_attributes['className'] = trim( ( $attributes['className'] ?? '' ) . ' ' . $blueprint_item['className'] );
	}

	// The blueprint root already establishes the card's signal context.
	// Keep the nested card surface neutral so frontend signal recomputation
	// doesn't apply the same signal twice.
	$item_attributes['colorSignal'] = 0;

	$item_attributes['surfaceStyleProps'] = novablocks_get_post_format_blueprint_item_style_props( $item_attributes );

	return $item_attributes;
}

function novablocks_get_quote_blueprint_item_attributes( array $attributes, array $blueprint ): array {
	return novablocks_get_post_format_blueprint_item_attributes( $attributes, $blueprint );
}

function novablocks_get_post_format_blueprint_item_style_props( array $attributes ): array {
	return array_merge(
		[
			'aspect-ratio: auto',
		],
		novablocks_get_media_composition_css( $attributes ),
		novablocks_get_color_signal_css( $attributes ),
		novablocks_get_overlay_filter_css( $attributes ),
		novablocks_get_space_and_sizing_css( $attributes ),
		novablocks_get_collection_layout_css( $attributes )
	);
}

function novablocks_get_quote_blueprint_item_style_props( array $attributes ): array {
	return novablocks_get_post_format_blueprint_item_style_props( $attributes );
}

function novablocks_get_quote_blueprint_content_markup( WP_Post $post, array $profile, array $item_block ): string {
	$quote    = trim( (string) ( $profile['extracts']['quote'] ?? '' ) );
	$citation = trim( (string) ( $profile['extracts']['quote_citation'] ?? '' ) );
	$blocks   = is_array( $item_block['innerBlocks'] ?? null ) ? $item_block['innerBlocks'] : [];

	if ( '' === $quote ) {
		return '';
	}

	$replaced = false;
	$blocks   = novablocks_replace_first_named_block(
		$blocks,
		'core/quote',
		static function ( array $block ) use ( $quote, $citation ): array {
			return novablocks_get_replacement_quote_block( $quote, $citation, $block );
		},
		$replaced
	);

	if ( ! $replaced ) {
		return '';
	}

	$markup = '';

	foreach ( $blocks as $block ) {
		$markup .= render_block( $block );
	}

	$markup .= novablocks_get_quote_blueprint_permalink_markup( $post );

	return $markup;
}

function novablocks_get_image_blueprint_content_markup( WP_Post $post, array $item_block ): string {
	$title  = trim( wp_strip_all_tags( get_the_title( $post ) ) );
	$blocks = is_array( $item_block['innerBlocks'] ?? null ) ? $item_block['innerBlocks'] : [];

	if ( '' === $title ) {
		return '';
	}

	$replaced = false;
	$blocks   = novablocks_replace_first_named_block(
		$blocks,
		'core/heading',
		static function ( array $block ) use ( $title ): array {
			return novablocks_get_replacement_heading_block( $title, $block );
		},
		$replaced
	);

	if ( ! $replaced ) {
		return '';
	}

	$markup = '';

	foreach ( $blocks as $block ) {
		$markup .= render_block( $block );
	}

	$markup .= novablocks_get_post_format_blueprint_permalink_markup( $post );

	return $markup;
}

function novablocks_get_replacement_quote_block( string $quote, string $citation, array $block ): array {
	$quote_attrs           = is_array( $block['attrs'] ?? null ) ? $block['attrs'] : [];
	$paragraph_attrs       = [];
	$existing_inner_blocks = is_array( $block['innerBlocks'] ?? null ) ? $block['innerBlocks'] : [];

	if ( ! empty( $existing_inner_blocks[0]['attrs'] ) && is_array( $existing_inner_blocks[0]['attrs'] ) ) {
		$paragraph_attrs = $existing_inner_blocks[0]['attrs'];
	}

	$quote_classes     = trim( 'wp-block-quote ' . ( $quote_attrs['className'] ?? '' ) );
	$paragraph_classes = trim( $paragraph_attrs['className'] ?? '' );
	$serialized_attrs  = '';

	if ( ! empty( $quote_attrs ) ) {
		$serialized_attrs = ' ' . wp_json_encode( $quote_attrs, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );
	}

	$paragraph_attr_markup = '';
	if ( ! empty( $paragraph_attrs ) ) {
		$paragraph_attr_markup = ' ' . wp_json_encode( $paragraph_attrs, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );
	}

	$paragraph_class_attr = '' !== $paragraph_classes ? ' class="' . esc_attr( $paragraph_classes ) . '"' : '';
	$citation_markup      = '' !== $citation ? '<cite>' . esc_html( $citation ) . '</cite>' : '';

	$blocks = parse_blocks(
		sprintf(
			'<!-- wp:quote%s --><blockquote class="%s"><!-- wp:paragraph%s --><p%s>%s</p><!-- /wp:paragraph -->%s</blockquote><!-- /wp:quote -->',
			$serialized_attrs,
			esc_attr( $quote_classes ),
			$paragraph_attr_markup,
			$paragraph_class_attr,
			esc_html( $quote ),
			$citation_markup
		)
	);

	return $blocks[0] ?? $block;
}

function novablocks_get_replacement_heading_block( string $title, array $block ): array {
	$heading_attrs      = is_array( $block['attrs'] ?? null ) ? $block['attrs'] : [];
	$heading_classes    = trim( 'wp-block-heading ' . ( $heading_attrs['className'] ?? '' ) );
	$heading_level      = max( 1, min( 6, absint( $heading_attrs['level'] ?? 2 ) ) );
	$serialized_attrs   = '';

	if ( ! empty( $heading_attrs ) ) {
		$serialized_attrs = ' ' . wp_json_encode( $heading_attrs, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );
	}

	$blocks = parse_blocks(
		sprintf(
			'<!-- wp:heading%s --><h%d class="%s">%s</h%d><!-- /wp:heading -->',
			$serialized_attrs,
			$heading_level,
			esc_attr( $heading_classes ),
			esc_html( $title ),
			$heading_level
		)
	);

	return $blocks[0] ?? $block;
}

function novablocks_get_post_format_blueprint_media_markup( WP_Post $post, array $attributes, bool $has_content ): string {
	if ( ! has_post_thumbnail( $post ) ) {
		return '';
	}

	$title   = get_the_title( $post );
	$dropcap = '';

	if ( preg_match( '/[a-z]/i', $title, $match ) ) {
		$dropcap = $match[0];
	}

	$media_markup = novablocks_get_collection_card_media_markup(
		[
			'type' => 'image',
			'url'  => get_the_post_thumbnail_url( $post ),
			'id'   => get_post_thumbnail_id( $post ),
		],
		$attributes,
		[
			'companionContent' => $has_content,
		]
	);

	if ( '' === $media_markup ) {
		return '';
	}

	return novablocks_get_collection_card_media_markup_wrapped( $media_markup, get_permalink( $post ), $dropcap );
}

function novablocks_get_quote_blueprint_media_markup( WP_Post $post, array $attributes, bool $has_content ): string {
	return novablocks_get_post_format_blueprint_media_markup( $post, $attributes, $has_content );
}

function novablocks_get_post_format_blueprint_permalink_markup( WP_Post $post ): string {
	$aria_label = get_the_title( $post );

	if ( '' === $aria_label ) {
		$aria_label = __( 'Open post', '__plugin_txtd' );
	}

	return sprintf(
		'<a class="nb-supernova-item__link" href="%1$s" aria-label="%2$s"></a>',
		esc_url( get_permalink( $post ) ),
		esc_attr( $aria_label )
	);
}

function novablocks_get_quote_blueprint_permalink_markup( WP_Post $post ): string {
	return novablocks_get_post_format_blueprint_permalink_markup( $post );
}

function novablocks_get_post_format_blueprint_supernova_markup( array $attributes, string $content, string $format ): string {
	$data_attributes = novablocks_get_data_attributes(
		novablocks_get_post_format_blueprint_root_data_attribute_names(),
		$attributes
	);
	$align                 = preg_split( '/\b\s+/', $attributes['contentPosition'] ?? 'center center' );

	$classes = array_merge(
		[
			'nb-supernova',
			'nb-post-format-card-blueprint',
			'nb-post-format-card-blueprint--' . sanitize_html_class( $format ),
			'nb-supernova--content-type-' . ( $attributes['contentType'] ?? 'custom' ),
			'nb-supernova--card-layout-' . ( $attributes['cardLayout'] ?? 'stacked' ),
			'nb-supernova--1-columns',
			'nb-supernova--valign-' . ( $align[0] ?? 'center' ),
			'nb-supernova--halign-' . ( $align[1] ?? 'center' ),
		],
		novablocks_get_color_signal_classes( $attributes )
	);

	if ( ! empty( $attributes['className'] ) ) {
		$custom_classes = array_map( 'sanitize_html_class', explode( ' ', $attributes['className'] ) );
		$classes        = array_merge( $classes, array_filter( $custom_classes ) );
	}

	$css_props = array_merge(
		novablocks_get_media_composition_css( $attributes ),
		novablocks_get_color_signal_css( $attributes ),
		novablocks_get_overlay_filter_css( $attributes ),
		novablocks_get_space_and_sizing_css( $attributes ),
		[
			'display: block',
		]
	);

	$anchor = ' ';
	if ( ! empty( $attributes['anchor'] ) ) {
		$anchor = 'id="' . esc_attr( $attributes['anchor'] ) . '" ';
	}

		return '<div class="nb-collection__layout-item"><div class="' . esc_attr( join( ' ', $classes ) ) . '" style="' . esc_attr( join( ';', $css_props ) ) . '" ' . $anchor . join( ' ', $data_attributes ) . '>' .
			$content .
		'</div></div>';
}

function novablocks_get_quote_blueprint_supernova_markup( array $attributes, string $content ): string {
	return novablocks_get_post_format_blueprint_supernova_markup( $attributes, $content, 'quote' );
}
