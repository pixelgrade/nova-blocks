<?php
/**
 * Block rendering logic and helpers.
 *
 * @since   2.0.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

require_once __DIR__ . '/collection-layout-recipes.php';

/**
 * Fix duplicate CSS classes in block innerContent that break WordPress layout system.
 *
 * When blocks are saved with duplicate classes (e.g. "alignwide" appearing twice),
 * WordPress's wp_render_layout_support_flag() fails to match the inner block wrapper
 * because rendered HTML deduplicates classes while innerContent retains duplicates.
 * This causes layout classes like is-layout-flex to not be applied, breaking gallery
 * columns and other flex layouts.
 *
 * @param array $parsed_block The parsed block data.
 *
 * @return array
 */
function novablocks_fix_duplicate_classes_in_inner_content( $parsed_block ) {
	if ( empty( $parsed_block['innerContent'] ) || ! is_array( $parsed_block['innerContent'] ) ) {
		return $parsed_block;
	}

	foreach ( $parsed_block['innerContent'] as $index => $chunk ) {
		if ( ! is_string( $chunk ) ) {
			continue;
		}

		// Find class attributes with duplicate values and deduplicate them.
		$parsed_block['innerContent'][ $index ] = preg_replace_callback(
			'/\bclass="([^"]*)"/',
			function ( $matches ) {
				$classes = preg_split( '/\s+/', trim( $matches[1] ) );
				$unique  = array_unique( $classes );
				if ( count( $unique ) === count( $classes ) ) {
					return $matches[0]; // No duplicates, return unchanged.
				}

				return 'class="' . implode( ' ', $unique ) . '"';
			},
			$chunk
		);
	}

	return $parsed_block;
}
add_filter( 'render_block_data', 'novablocks_fix_duplicate_classes_in_inner_content', 5 );

/**
 * Pass a marked Query Loop's filter opt-in through to its child blocks.
 *
 * @param array         $parsed_block Parsed block data.
 * @param array|null    $source_block Unfiltered block data.
 * @param WP_Block|null $parent_block Parent block instance.
 * @return array Filtered block data.
 */
function novablocks_mark_facetwp_query_loop_context( $parsed_block, $source_block = null, $parent_block = null ) {
	// WordPress calls this filter for every nested block. Traverse only once,
	// from the top-level block, so nested trees are not repeatedly rescanned.
	if ( null !== $parent_block ) {
		return $parsed_block;
	}

	// Keep Nova-only sites entirely outside this integration, including the
	// subtree traversal and the internal query-context attribute.
	if ( ! function_exists( 'FWP' ) ) {
		return $parsed_block;
	}

	if ( ( $parsed_block['blockName'] ?? '' ) === 'core/query' ) {
		$class_name  = $parsed_block['attrs']['className'] ?? '';
		$class_names = is_string( $class_name ) ? preg_split( '/\s+/', trim( $class_name ) ) : [];

		if ( in_array( 'facetwp-template', $class_names, true ) ) {
			$parsed_block['attrs']['query']['facetwp'] = true;
		}
	}

	if ( ! empty( $parsed_block['innerBlocks'] ) && is_array( $parsed_block['innerBlocks'] ) ) {
		foreach ( $parsed_block['innerBlocks'] as $index => $inner_block ) {
			$parsed_block['innerBlocks'][ $index ] = novablocks_mark_facetwp_query_loop_context( $inner_block );
		}
	}

	return $parsed_block;
}
add_filter( 'render_block_data', 'novablocks_mark_facetwp_query_loop_context', 10, 3 );

/**
 * Opt a marked Query Loop into FacetWP's custom-query detection.
 *
 * FacetWP ignores secondary queries on singular pages unless the query carries
 * its explicit opt-in flag. The `render_block_data` marker above makes the
 * parent Query block's author-controlled class available to its listing child.
 *
 * @param array    $query Query arguments built by the Query Loop block.
 * @param WP_Block $block Query Loop child block instance.
 * @param int      $page  Current Query Loop page.
 * @return array Filtered query arguments.
 */
function novablocks_enable_facetwp_query_loop( array $query, $block, int $page ): array {
	if ( ! function_exists( 'FWP' ) || empty( $block->context['query']['facetwp'] ) ) {
		return $query;
	}

	$query['facetwp'] = true;

	return $query;
}
add_filter( 'query_loop_block_query_vars', 'novablocks_enable_facetwp_query_loop', 10, 3 );

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

/**
 * Returns Supernova attribute names that have meaningful frontend state.
 *
 * New recipe attributes are intentionally absent from legacy Collection roots
 * while they retain their inactive defaults. This keeps existing frontend DOM
 * byte-compatible instead of manufacturing new data-* attributes after an
 * upgrade.
 *
 * @param array $attributes Supernova attributes with defaults applied.
 * @return array Attribute names to serialize as data-* attributes.
 */
function novablocks_get_supernova_data_attribute_names( array $attributes ): array {
	$names         = array_keys( $attributes );
	$active_recipe = novablocks_get_active_collection_layout_recipe( $attributes );
	$is_lattice    = null !== $active_recipe && 'lattice' === ( $active_recipe['layoutStrategy'] ?? '' );
	$conditional   = [
		'layoutRecipe'             => null !== $active_recipe,
		'headerIntegration'        => null !== $active_recipe
			&& ! empty( $active_recipe['capabilities']['headerIntegration'] )
			&& 'grid-item' === ( $attributes['headerIntegration'] ?? 'standard' ),
		'columnsFitMinWidth'       => (float) ( $attributes['columnsFitMinWidth'] ?? 0 ) > 0,
		'cardHoverEffect'          => 'none' !== ( $attributes['cardHoverEffect'] ?? 'none' ),
		'cardMetadataStyle'        => 'inherit' !== ( $attributes['cardMetadataStyle'] ?? 'inherit' ),
		'latticeModuleShape'       => $is_lattice,
		'latticeLandscapeSpan'     => $is_lattice,
		'latticePortraitSpan'      => $is_lattice,
		'latticeTextPlateSpan'     => $is_lattice,
		'latticeQuoteSpan'         => $is_lattice,
		'latticePackingWindow'     => false,
		'latticeStickyFeatureSize' => false,
		'latticeTallMediaSpan'     => false,
		'latticePanoramaSpan'      => false,
	];

	return array_values(
		array_filter(
			$names,
			static function ( string $name ) use ( $conditional ): bool {
				return ! array_key_exists( $name, $conditional ) || $conditional[ $name ];
			}
		)
	);
}

function novablocks_render_media_composition( array $attributes ) {
	echo novablocks_get_media_composition_markup( $attributes );
}

function novablocks_get_local_placeholder_definitions(): array {
	return [
		[ 'id' => 'horizon', 'name' => 'Horizon' ],
		[ 'id' => 'ridge', 'name' => 'Rainbow Ridge' ],
		[ 'id' => 'diagonal', 'name' => 'Diagonal Field' ],
		[ 'id' => 'bars', 'name' => 'Vertical Rhythm' ],
		[ 'id' => 'ridges', 'name' => 'Layered Ridges' ],
		[ 'id' => 'bauhaus', 'name' => 'Bauhaus Cross' ],
		[ 'id' => 'venn', 'name' => 'Soft Overlap' ],
		[ 'id' => 'arch', 'name' => 'Portal' ],
		[ 'id' => 'sunburst', 'name' => 'Sunburst' ],
		[ 'id' => 'field3', 'name' => 'Colour Field' ],
	];
}

function novablocks_local_placeholder_fallback_colors(): array {
	return [
		'bg'     => '#f0f0f1',
		'accent' => '#2271b1',
		'fg1'    => '#1d2327',
		'fg2'    => '#72aee6',
	];
}

function novablocks_placeholder_to_array( $value ): array {
	if ( is_array( $value ) ) {
		return $value;
	}

	if ( is_object( $value ) ) {
		$encoded = json_encode( $value );
		$decoded = is_string( $encoded ) ? json_decode( $encoded, true ) : null;

		return is_array( $decoded ) ? $decoded : [];
	}

	return [];
}

function novablocks_normalize_placeholder_color_value( $value ): string {
	if ( is_array( $value ) || is_object( $value ) ) {
		$value = novablocks_placeholder_to_array( $value );
		$value = $value['value'] ?? $value['color'] ?? $value['bg'] ?? '';
	}

	return strtolower( trim( (string) $value ) );
}

function novablocks_is_white_placeholder_color( $value ): bool {
	$color = str_replace( ' ', '', novablocks_normalize_placeholder_color_value( $value ) );

	return in_array( $color, [ '#fff', '#ffffff', 'rgb(255,255,255)', 'rgba(255,255,255,1)' ], true );
}

function novablocks_is_usable_placeholder_color( $value ): bool {
	$color = novablocks_normalize_placeholder_color_value( $value );

	return '' !== $color && false === strpos( $color, 'var(' ) && false === strpos( $color, 'undefined' );
}

function novablocks_is_usable_placeholder_background( $value ): bool {
	return novablocks_is_usable_placeholder_color( $value ) && ! novablocks_is_white_placeholder_color( $value );
}

function novablocks_get_placeholder_rgb_components( $value ): ?array {
	$color = novablocks_normalize_placeholder_color_value( $value );

	if ( preg_match( '/^#([0-9a-f]{3}|[0-9a-f]{6})$/i', $color, $matches ) ) {
		$hex = $matches[1];
		if ( 3 === strlen( $hex ) ) {
			$hex = $hex[0] . $hex[0] . $hex[1] . $hex[1] . $hex[2] . $hex[2];
		}

		return [ hexdec( substr( $hex, 0, 2 ) ), hexdec( substr( $hex, 2, 2 ) ), hexdec( substr( $hex, 4, 2 ) ) ];
	}

	if ( preg_match( '/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i', $color, $matches ) ) {
		return [ min( 255, (float) $matches[1] ), min( 255, (float) $matches[2] ), min( 255, (float) $matches[3] ) ];
	}

	return null;
}

function novablocks_get_placeholder_relative_luminance( $value ): ?float {
	$components = novablocks_get_placeholder_rgb_components( $value );

	if ( null === $components ) {
		return null;
	}

	$channels = array_map(
		function ( $component ): float {
			$channel = $component / 255;

			return $channel <= 0.04045 ? $channel / 12.92 : pow( ( $channel + 0.055 ) / 1.055, 2.4 );
		},
		$components
	);

	return 0.2126 * $channels[0] + 0.7152 * $channels[1] + 0.0722 * $channels[2];
}

function novablocks_get_placeholder_color_contrast( $first_color, $second_color ): float {
	$first_luminance  = novablocks_get_placeholder_relative_luminance( $first_color );
	$second_luminance = novablocks_get_placeholder_relative_luminance( $second_color );

	if ( null === $first_luminance || null === $second_luminance ) {
		return 0;
	}

	return ( max( $first_luminance, $second_luminance ) + 0.05 ) / ( min( $first_luminance, $second_luminance ) + 0.05 );
}

function novablocks_get_placeholder_canvas_candidates( array $candidates, string $surface_color, bool $allow_white_looking = false ): array {
	$normalized_candidates = [];

	foreach ( $candidates as $candidate ) {
		$candidate = novablocks_normalize_placeholder_color_value( $candidate );
		$luminance = novablocks_get_placeholder_relative_luminance( $candidate );

		if ( ! novablocks_is_usable_placeholder_background( $candidate ) || $candidate === $surface_color || in_array( $candidate, $normalized_candidates, true ) ) {
			continue;
		}

		if ( ! $allow_white_looking && null !== $luminance && $luminance >= 0.9 ) {
			continue;
		}

		$normalized_candidates[] = $candidate;
	}

	return $normalized_candidates;
}

function novablocks_get_placeholder_composition_color_tokens( array $colors ): array {
	$surface_color             = novablocks_normalize_placeholder_color_value( $colors['bg'] ?? '' );
	$primary_candidate_values  = array_merge( [ $colors['fg1'] ?? '', $colors['accent'] ?? '', $colors['fg2'] ?? '' ], $colors['canvas_candidates'] ?? [] );
	$fallback_candidate_values = $colors['fallback_canvas_candidates'] ?? [];
	$canvas_candidates         = novablocks_get_placeholder_canvas_candidates( $primary_candidate_values, $surface_color );

	if ( empty( $canvas_candidates ) ) {
		$canvas_candidates = novablocks_get_placeholder_canvas_candidates( $fallback_candidate_values, $surface_color );
	}

	if ( empty( $canvas_candidates ) ) {
		$canvas_candidates = novablocks_get_placeholder_canvas_candidates( array_merge( $primary_candidate_values, $fallback_candidate_values ), $surface_color, true );
	}

	if ( empty( $canvas_candidates ) ) {
		return $colors;
	}

	$canvas_color = $canvas_candidates[0];
	foreach ( array_slice( $canvas_candidates, 1 ) as $candidate ) {
		if ( novablocks_get_placeholder_color_contrast( $candidate, $surface_color ) > novablocks_get_placeholder_color_contrast( $canvas_color, $surface_color ) ) {
			$canvas_color = $candidate;
		}
	}

	$shape_candidate_values = array_merge(
		[ $colors['accent'] ?? '', $colors['fg2'] ?? '' ],
		$colors['canvas_candidates'] ?? [],
		$colors['fallback_canvas_candidates'] ?? [],
		[ $colors['fg1'] ?? '' ],
		array_values( novablocks_local_placeholder_fallback_colors() )
	);
	$shape_colors = array_values(
		array_filter(
			novablocks_get_placeholder_canvas_candidates( $shape_candidate_values, $surface_color ),
			function ( $shape_color ) use ( $canvas_color ) {
				return $shape_color !== $canvas_color;
			}
		)
	);

	$first_shape_color = $shape_colors[0] ?? $canvas_color;

	return [
		'bg'     => $canvas_color,
		'accent' => $first_shape_color,
		'fg1'    => $shape_colors[1] ?? $first_shape_color,
		'fg2'    => $shape_colors[2] ?? $shape_colors[1] ?? $first_shape_color,
	];
}

function novablocks_normalize_placeholder_color_tokens( array $colors ): ?array {
	$fallback = novablocks_local_placeholder_fallback_colors();
	$bg       = novablocks_normalize_placeholder_color_value( $colors['bg'] ?? '' );

	if ( ! novablocks_is_usable_placeholder_background( $bg ) ) {
		return null;
	}

	return [
		'bg'                         => $bg,
		'accent'                     => novablocks_normalize_placeholder_color_value( $colors['accent'] ?? '' ) ?: $fallback['accent'],
		'fg1'                        => novablocks_normalize_placeholder_color_value( $colors['fg1'] ?? '' ) ?: $fallback['fg1'],
		'fg2'                        => novablocks_normalize_placeholder_color_value( $colors['fg2'] ?? '' ) ?: $fallback['fg2'],
		'canvas_candidates'          => array_values( array_filter( array_map( 'novablocks_normalize_placeholder_color_value', $colors['canvas_candidates'] ?? [] ) ) ),
		'fallback_canvas_candidates' => array_values( array_filter( array_map( 'novablocks_normalize_placeholder_color_value', $colors['fallback_canvas_candidates'] ?? [] ) ) ),
	];
}

function novablocks_get_placeholder_palette_source_color( array $palette, int $index, int $fallback_index = 0 ): string {
	$source    = isset( $palette['source'] ) && is_array( $palette['source'] ) ? $palette['source'] : [];
	$colors    = isset( $palette['colors'] ) && is_array( $palette['colors'] ) ? $palette['colors'] : $source;
	$preferred = novablocks_normalize_placeholder_color_value( $colors[ $index ] ?? $source[ $index ] ?? '' );

	if ( '' !== $preferred ) {
		return $preferred;
	}

	return novablocks_normalize_placeholder_color_value( $colors[ $fallback_index ] ?? $source[ $fallback_index ] ?? '' );
}

function novablocks_get_placeholder_variation_background( array $variation, string $fallback = '' ): string {
	foreach ( [ 'bg', 'accent', 'accent2', 'fg2', 'fg1' ] as $key ) {
		if ( novablocks_is_usable_placeholder_background( $variation[ $key ] ?? '' ) ) {
			return novablocks_normalize_placeholder_color_value( $variation[ $key ] );
		}
	}

	return novablocks_is_usable_placeholder_background( $fallback ) ? novablocks_normalize_placeholder_color_value( $fallback ) : '';
}

function novablocks_get_placeholder_palette_variation_index( array $palette, array $attributes ): int {
	$attribute_variation = isset( $attributes['paletteVariation'] ) ? (int) $attributes['paletteVariation'] : 0;

	if ( $attribute_variation > 0 ) {
		return $attribute_variation - 1;
	}

	return isset( $palette['sourceIndex'] ) ? max( 0, (int) $palette['sourceIndex'] ) : 0;
}

function novablocks_get_placeholder_color_tokens_from_palette( array $palette, array $attributes = [] ): ?array {
	$variations      = isset( $palette['variations'] ) && is_array( $palette['variations'] ) ? array_map( 'novablocks_placeholder_to_array', $palette['variations'] ) : [];
	$variation_index = novablocks_get_placeholder_palette_variation_index( $palette, $attributes );
	$preferred       = $variations[ $variation_index ] ?? null;
	$non_white       = null;

	foreach ( $variations as $variation ) {
		if ( novablocks_is_usable_placeholder_background( $variation['bg'] ?? '' ) ) {
			$non_white = $variation;
			break;
		}
	}

	$variation = $preferred ?: $non_white;

	if ( is_array( $variation ) ) {
		return novablocks_normalize_placeholder_color_tokens( [
			'bg'                         => novablocks_get_placeholder_variation_background( $variation, $non_white['bg'] ?? '' ),
			'accent'                     => $variation['accent'] ?? $variation['accent2'] ?? novablocks_get_placeholder_palette_source_color( $palette, 0 ),
			'fg1'                        => $variation['fg1'] ?? novablocks_get_placeholder_palette_source_color( $palette, 1, 0 ),
			'fg2'                        => $variation['fg2'] ?? novablocks_get_placeholder_palette_source_color( $palette, 2, 0 ),
			'canvas_candidates'          => array_merge( $palette['source'] ?? [], $palette['colors'] ?? [] ),
			'fallback_canvas_candidates' => array_map(
				function ( array $candidate_variation ) {
					return $candidate_variation['bg'] ?? '';
				},
				$variations
			),
		] );
	}

	$source_background = novablocks_get_placeholder_palette_source_color( $palette, $variation_index, 0 );
	$source            = isset( $palette['source'] ) && is_array( $palette['source'] ) ? array_map( 'novablocks_normalize_placeholder_color_value', $palette['source'] ) : [];
	$colors            = isset( $palette['colors'] ) && is_array( $palette['colors'] ) ? array_map( 'novablocks_normalize_placeholder_color_value', $palette['colors'] ) : [];
	$background        = novablocks_is_usable_placeholder_background( $source_background ) ? $source_background : '';

	if ( '' === $background ) {
		foreach ( array_merge( $source, $colors ) as $color ) {
			if ( novablocks_is_usable_placeholder_background( $color ) ) {
				$background = $color;
				break;
			}
		}
	}

	return novablocks_normalize_placeholder_color_tokens( [
		'bg'                => $background,
		'accent'            => $source[0] ?? $colors[0] ?? '',
		'fg1'               => $source[1] ?? $colors[1] ?? '',
		'fg2'               => $source[2] ?? $colors[2] ?? '',
		'canvas_candidates' => array_merge( $source, $colors ),
	] );
}

function novablocks_get_placeholder_palettes(): array {
	if ( function_exists( 'sm_get_palette_runtime_payload' ) ) {
		$runtime_payload = sm_get_palette_runtime_payload();
		$palettes        = is_array( $runtime_payload['palettes'] ?? null ) ? $runtime_payload['palettes'] : [];
	} elseif ( function_exists( 'sm_get_palettes_for_current_request' ) ) {
		$palettes = sm_get_palettes_for_current_request();
	} else {
		$palettes = json_decode( get_option( 'sm_advanced_palette_output', '[]' ), true );
	}

	if ( empty( $palettes ) && function_exists( 'sm_get_fallback_palettes' ) ) {
		$palettes = sm_get_fallback_palettes();
	}

	return is_array( $palettes ) ? array_map( 'novablocks_placeholder_to_array', $palettes ) : [];
}

function novablocks_get_placeholder_palette_from_attributes( array $palettes, array $attributes ): ?array {
	if ( empty( $palettes ) ) {
		return null;
	}

	if ( isset( $attributes['palette'] ) && '' !== (string) $attributes['palette'] ) {
		foreach ( $palettes as $palette ) {
			if ( (string) ( $palette['id'] ?? '' ) === (string) $attributes['palette'] ) {
				return $palette;
			}
		}
	}

	return $palettes[0];
}

function novablocks_get_local_placeholder_color_tokens( array $attributes = [] ): array {
	$palette = novablocks_get_placeholder_palette_from_attributes( novablocks_get_placeholder_palettes(), $attributes );
	$colors  = $palette ? novablocks_get_placeholder_color_tokens_from_palette( $palette, $attributes ) : null;

	return $colors ?: novablocks_local_placeholder_fallback_colors();
}

function novablocks_get_local_placeholder_identifier( array $media ): string {
	$id     = isset( $media['id'] ) ? (string) $media['id'] : '';
	$prefix = 'local-placeholder-';

	if ( 0 !== strpos( $id, $prefix ) ) {
		return '';
	}

	return substr( $id, strlen( $prefix ) );
}

function novablocks_get_local_placeholder_definition( array $media ): ?array {
	$identifier  = novablocks_get_local_placeholder_identifier( $media );
	$definitions = novablocks_get_local_placeholder_definitions();

	if ( '' === $identifier ) {
		return null;
	}

	foreach ( $definitions as $definition ) {
		if ( $definition['id'] === $identifier ) {
			return $definition;
		}
	}

	if ( ctype_digit( $identifier ) ) {
		$index = ( (int) $identifier - 1 ) % count( $definitions );

		return $definitions[ $index ];
	}

	return null;
}

function novablocks_render_local_placeholder_shape( string $id, array $c ): string {
	switch ( $id ) {
		case 'ridge':
			return '<circle cx="800" cy="1010" r="540" fill="' . $c['fg2'] . '"/><circle cx="800" cy="1010" r="410" fill="' . $c['accent'] . '"/><circle cx="800" cy="1010" r="285" fill="' . $c['fg1'] . '"/><circle cx="800" cy="1010" r="150" fill="' . $c['bg'] . '"/>';
		case 'diagonal':
			return '<polygon points="0,0 1600,0 0,1000" fill="' . $c['accent'] . '"/><polygon points="1600,1000 1600,560 940,1000" fill="' . $c['fg1'] . '"/><circle cx="800" cy="500" r="175" fill="' . $c['fg2'] . '"/>';
		case 'bars':
			$output      = '';
			$colors      = [ $c['fg1'], $c['accent'], $c['fg2'], $c['accent'], $c['fg1'], $c['fg2'] ];
			$x_positions = [ 70, 300, 470, 770, 1030, 1320 ];
			$widths      = [ 150, 110, 220, 180, 220, 190 ];
			foreach ( $x_positions as $index => $x_position ) {
				$output .= '<rect x="' . $x_position . '" y="0" width="' . $widths[ $index ] . '" height="1000" fill="' . $colors[ $index ] . '"/>';
			}
			return $output;
		case 'ridges':
			return '<circle cx="1240" cy="300" r="90" fill="' . $c['fg2'] . '"/><path d="M0 720 C 300 640 520 780 800 705 S 1300 620 1600 720 L1600 1000 L0 1000Z" fill="' . $c['fg2'] . '"/><path d="M0 802 C 360 742 560 862 860 802 S 1280 742 1600 812 L1600 1000 L0 1000Z" fill="' . $c['accent'] . '"/><path d="M0 884 C 300 844 620 924 900 884 S 1320 844 1600 892 L1600 1000 L0 1000Z" fill="' . $c['fg1'] . '"/>';
		case 'bauhaus':
			return '<rect x="0" y="440" width="1600" height="120" fill="' . $c['fg1'] . '"/><rect x="720" y="0" width="64" height="1000" fill="' . $c['fg2'] . '"/><circle cx="800" cy="500" r="230" fill="' . $c['accent'] . '"/>';
		case 'venn':
			return '<circle cx="662" cy="452" r="258" fill="' . $c['accent'] . '" opacity="0.85"/><circle cx="938" cy="452" r="258" fill="' . $c['fg1'] . '" opacity="0.85"/><circle cx="800" cy="672" r="258" fill="' . $c['fg2'] . '" opacity="0.85"/>';
		case 'arch':
			return '<path d="M560 1000 L560 500 A240 240 0 0 1 1040 500 L1040 1000 Z" fill="' . $c['accent'] . '"/><path d="M668 1000 L668 520 A132 132 0 0 1 932 520 L932 1000 Z" fill="' . $c['fg2'] . '"/><rect x="470" y="958" width="660" height="42" fill="' . $c['fg1'] . '"/>';
		case 'sunburst':
			$output = '';
			for ( $angle = 0; $angle < 360; $angle += 30 ) {
				$angle_start = $angle * pi() / 180;
				$angle_end   = ( $angle + 15 ) * pi() / 180;
				$x_start     = 800 + 1300 * cos( $angle_start );
				$y_start     = 500 + 1300 * sin( $angle_start );
				$x_end       = 800 + 1300 * cos( $angle_end );
				$y_end       = 500 + 1300 * sin( $angle_end );
				$output     .= '<polygon points="800,500 ' . round( $x_start ) . ',' . round( $y_start ) . ' ' . round( $x_end ) . ',' . round( $y_end ) . '" fill="' . $c['fg1'] . '"/>';
			}
			return $output . '<circle cx="800" cy="500" r="150" fill="' . $c['accent'] . '"/><circle cx="800" cy="500" r="150" fill="none" stroke="' . $c['fg2'] . '" stroke-width="10"/>';
		case 'field3':
			return '<rect x="0" y="376" width="1600" height="368" fill="' . $c['accent'] . '"/><rect x="0" y="744" width="1600" height="256" fill="' . $c['fg1'] . '"/><rect x="0" y="368" width="1600" height="8" fill="' . $c['fg2'] . '"/><circle cx="1150" cy="230" r="120" fill="' . $c['fg2'] . '"/>';
		case 'horizon':
		default:
			return '<circle cx="800" cy="590" r="220" fill="' . $c['accent'] . '"/><rect x="0" y="640" width="1600" height="360" fill="' . $c['fg1'] . '"/><rect x="0" y="632" width="1600" height="12" fill="' . $c['fg2'] . '"/>';
	}
}

function novablocks_make_local_placeholder_media( array $definition, array $attributes = [], array $original_media = [] ): array {
	$width  = 1600;
	$height = 1000;
	$colors = novablocks_get_placeholder_composition_color_tokens( novablocks_get_local_placeholder_color_tokens( $attributes ) );
	$svg    = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' . $width . ' ' . $height . '" width="' . $width . '" height="' . $height . '" preserveAspectRatio="xMidYMid slice"><rect width="' . $width . '" height="' . $height . '" fill="' . $colors['bg'] . '"/>' . novablocks_render_local_placeholder_shape( $definition['id'], $colors ) . '</svg>';
	$url    = 'data:image/svg+xml;charset=UTF-8,' . rawurlencode( $svg );

	return array_merge( $original_media, [
		'id'     => $original_media['id'] ?? 'local-placeholder-' . $definition['id'],
		'url'    => $url,
		'type'   => 'image',
		'width'  => $width,
		'height' => $height,
		'alt'    => $original_media['alt'] ?? '',
		'title'  => $definition['name'],
		'sizes'  => [
			'full'              => [ 'url' => $url, 'width' => $width, 'height' => $height ],
			'large'             => [ 'url' => $url, 'width' => $width, 'height' => $height ],
			'medium'            => [ 'url' => $url, 'width' => 800, 'height' => 500 ],
			'thumbnail'         => [ 'url' => $url, 'width' => 400, 'height' => 250 ],
			'novablocks_huge'   => [ 'url' => $url, 'width' => $width, 'height' => $height ],
			'novablocks_large'  => [ 'url' => $url, 'width' => $width, 'height' => $height ],
			'novablocks_medium' => [ 'url' => $url, 'width' => 800, 'height' => 500 ],
			'novablocks_tiny'   => [ 'url' => $url, 'width' => 400, 'height' => 250 ],
		],
	] );
}

function novablocks_resolve_local_placeholder_media( array $media, array $attributes = [] ): array {
	$definition = novablocks_get_local_placeholder_definition( $media );

	if ( ! $definition ) {
		return $media;
	}

	return novablocks_make_local_placeholder_media( $definition, $attributes, $media );
}

function novablocks_escape_media_src( string $url ): string {
	if ( 0 === strpos( $url, 'data:image/svg+xml;charset=UTF-8,' ) ) {
		return esc_attr( $url );
	}

	return esc_url( $url );
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

		$image = novablocks_resolve_local_placeholder_media( $image, $attributes );

		$url             = '';
		$has_description = false;

		$attachment       = false;
		$attachment_image = false;
		if ( isset( $image['id'] ) && is_numeric( $image['id'] ) && intval( $image['id'] ) > 0 ) {
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
					$output .= '<img class="novablocks-media-composition__image" ' . $data_attrs . ' src="' . novablocks_escape_media_src( $url ) . '" alt="' . ( ! empty( $image['alt'] ) ? esc_attr( $image['alt'] ) : '' ) . '" />' . PHP_EOL;
				}
			}

			$output .= '</div>' . PHP_EOL;

			if ( ! empty( $attributes['showDescription'] ) && ( $has_caption || $has_description ) ) {
				$output .= '<div class="novablocks-media-composition__grid-item-info">';

				if ( $has_caption ) {
					$output .= '<div class="novablocks-media-composition__grid-item-caption">' . wp_kses_post( wptexturize( $image['caption'] ) ) . '</div>';
				}

				if ( $has_description ) {
					$output .= '<div class="novablocks-media-composition__grid-item-description">' . wp_kses_post( wptexturize( $attachment->post_content ) ) . '</div>';
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

function novablocks_get_card_media_padding_top( $thumbnailAspectRatio ) {
	$containerHeight = $thumbnailAspectRatio / 50 - 1;

	if ( $containerHeight < 0 ) {
		// Keep this conversion synchronized with getCardMediaPaddingTop() in packages/utils/src/index.js.
		$containerHeight *= 2;
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
	// In the "chain" arrangement `elementsDistance` is the diagonal corner gap
	// handled in grid-item.js, so the uniform CSS grid gap is pinned to 0 to
	// keep the chain's corners meeting. Twin of the JS
	// getMediaCompositionCSSProps().
	$gap = ( isset( $attributes['arrangement'] ) && 'chain' === $attributes['arrangement'] )
		? 0
		: $attributes['elementsDistance'];

	return [
		'--nb-media-composition-gap: ' . $gap . 'px',
	];
}

function novablocks_get_color_signal_css( array $attributes ): array {
	return [
		'--nb-emphasis-area: ' . $attributes['emphasisArea'],
	];
}

function novablocks_get_overlay_filter_css( array $attributes ): array {
	$overlay_filter_strength = ! empty( $attributes['overlayFilterType'] ) && $attributes['overlayFilterType'] === 'duotone'
		? 0
		: ( $attributes['overlayFilterStrength'] ?? 0 ) / 100;

	$props = [
		'--nb-overlay-filter-strength: ' . $overlay_filter_strength,
	];

	if ( isset( $attributes['overlayFilterHoverBorderSize'] ) && $attributes['overlayFilterHoverBorderSize'] !== '' ) {
		$props[] = '--nb-overlay-filter-hover-border-size: ' . $attributes['overlayFilterHoverBorderSize'] . 'px';
	}

	return $props;
}

function novablocks_get_sizing_css( array $attributes ): array {

	$props = [];

	if ( isset( $attributes['layoutGutter'] ) ) {
		$props[] = '--nb-card-layout-gap-modifier: ' . $attributes['layoutGutter'] / 100;
	}

	if ( isset( $attributes['contentPadding'] ) ) {
		$props[] = '--nb-card-content-padding-multiplier: ' . $attributes['contentPadding'] / 100;
	}

	if ( isset( $attributes['imagePadding'] ) ) {
		$props[] = '--nb-card-media-padding-multiplier: ' . $attributes['imagePadding'] / 100;
	}

	if ( isset( $attributes['mediaContainerHeight'] ) ) {
		$props[] = '--nb-card-media-container-height: ' . $attributes['mediaContainerHeight'];
	}

	$is_original_aspect_ratio = ! empty( $attributes['thumbnailAspectRatioString'] ) && $attributes['thumbnailAspectRatioString'] === 'original';

	if ( isset( $attributes['thumbnailAspectRatio'] ) && ! $is_original_aspect_ratio ) {
		$padding_top = novablocks_get_card_media_padding_top( $attributes['thumbnailAspectRatio'] );
		$props[] = '--nb-card-media-padding-top: ' . $padding_top . '%';
		// Unitless aspect-ratio for stacked cards (width / height).
		$props[] = '--nb-card-media-aspect-ratio: ' . ( 100 / $padding_top );
	}

	if ( $is_original_aspect_ratio ) {
		$props[] = '--nb-card-media-object-fit: contain';
	} elseif ( isset( $attributes['imageResizing'] ) ) {
		$props[] = '--nb-card-media-object-fit: ' . ( $attributes['imageResizing'] === 'cropped' ? 'cover' : 'scale-down' );
	}

	if ( isset( $attributes['minHeightFallback'] ) ) {
		$props[] = '--nb-minimum-container-height: ' . $attributes['minHeightFallback'] . 'vh';
	}

	if ( isset( $attributes['contentAreaWidth'] ) ) {
		$props[] = '--nb-card-content-area-width: ' . $attributes['contentAreaWidth'] . '%';
	}

	if ( isset( $attributes['spacingModifier'] ) ) {
		$props[] = '--nb-spacing-modifier: ' . $attributes['spacingModifier'];
	}

	if ( isset( $attributes['spacingMultiplierOverride'] ) ) {
		$props[] = '--nb-spacing-multiplier-override: ' . $attributes['spacingMultiplierOverride'];
	}

	return $props;
}

function novablocks_supports_pile_3d_effect( array $attributes ): bool {
	return novablocks_collection_layout_recipe_allows( $attributes, 'pile3d' )
	       && ! empty( $attributes['pile3dEffect'] )
	       && in_array( $attributes['layoutStyle'] ?? '', [ 'classic', 'masonry' ], true )
	       && ( $attributes['cardLayout'] ?? '' ) === 'stacked';
}

function novablocks_supports_pile_parallax( array $attributes ): bool {
	return novablocks_collection_layout_recipe_allows( $attributes, 'pile3d' )
	       && ! empty( $attributes['pileParallaxAmount'] )
	       && $attributes['pileParallaxAmount'] > 0;
}

function novablocks_get_collection_layout_css( array $attributes ): array {
	$supports_pile_3d_effect = novablocks_supports_pile_3d_effect( $attributes );

	return [
		'--nb-collection-columns-count: ' . $attributes['columns'],
		'--nb-grid-spacing-modifier: ' . $attributes['gridGap'],
		'--nb-grid-spacing-multiplier: ' . ( $supports_pile_3d_effect ? 2 : 1 ),
		'--nb-grid-row-spacing-multiplier: ' . ( $attributes['verticalGapModifier'] ?? 1 ),
		'--nb-pile-3d-scale: ' . ( $supports_pile_3d_effect ? '0.82' : '1' ),
	];
}

function novablocks_get_collection_layout_classes( array $attributes ): array {
	if ( ! novablocks_supports_pile_3d_effect( $attributes ) ) {
		return [];
	}

	return [
		'nb-supernova--pile-3d',
		'nb-supernova--pile-3d-target-' . sanitize_html_class( $attributes['pile3dTarget'] ?? 'item' ),
		'nb-supernova--pile-3d-rule-' . sanitize_html_class( $attributes['pile3dTargetRule'] ?? 'odd' ),
	];
}

/**
 * Returns the class for a theme-registered collection layout recipe.
 *
 * The recipe is an independent presentation axis. The existing layoutStyle
 * attribute remains the placement engine, so Masonry behavior and modifiers
 * keep their normal contracts.
 *
 * @param array $attributes Collection attributes.
 * @return array Recipe class names.
 */
function novablocks_get_collection_layout_recipe_classes( array $attributes ): array {
	$layout_recipe = novablocks_get_active_collection_layout_recipe( $attributes );

	if ( null === $layout_recipe ) {
		return [];
	}

	return [ 'nb-supernova--layout-recipe-' . $layout_recipe['id'] ];
}

/**
 * Resolve the effective card metadata presentation class.
 *
 * Themes may supply a site-wide default while each collection can explicitly
 * choose Plain or Accent Label. Unknown values safely render as Plain.
 *
 * @param array $attributes Collection attributes.
 * @return array Card metadata presentation class names.
 */
function novablocks_get_card_metadata_style_classes( array $attributes ): array {
	$metadata_style = sanitize_key( (string) ( $attributes['cardMetadataStyle'] ?? 'inherit' ) );

	if ( 'inherit' === $metadata_style ) {
		// Existing Collections predate this attribute and must remain Plain.
		// Theme defaults are a recipe presentation concern unless a collection
		// explicitly opts into a metadata style of its own.
		if ( null === novablocks_get_active_collection_layout_recipe( $attributes ) ) {
			return [];
		}

		/**
		 * Filters the site-wide card metadata presentation default.
		 *
		 * @param string $metadata_style Default style slug.
		 * @param array  $attributes     Collection attributes.
		 */
		$metadata_style = sanitize_key( (string) apply_filters( 'novablocks/card_metadata_style_default', 'plain', $attributes ) );
	}

	if ( 'accent-label' !== $metadata_style ) {
		return [];
	}

	return [ 'nb-supernova--card-metadata-style-accent-label' ];
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

/**
 * Normalize trusted theme/plugin collection-leading-item descriptors.
 *
 * The `markup` field is rendered verbatim in PHP and Gutenberg RawHTML. It is
 * therefore a trusted-provider contract: providers must escape dynamic values
 * before returning a descriptor.
 */
function novablocks_normalize_collection_leading_items( array $items, array $attributes, string $layout_style ): array {
	$flow_layouts       = [ 'masonry', 'classic' ];
	$collection_classes = [];
	$normalized_items   = [];
	$seen_ids           = [];

	if ( isset( $attributes['className'] ) && is_string( $attributes['className'] ) && '' !== trim( $attributes['className'] ) ) {
		$collection_classes = array_filter(
			array_map( 'sanitize_html_class', preg_split( '/\s+/', trim( $attributes['className'] ) ) ),
			function ( $class_name ) {
				return '' !== $class_name;
			}
		);
	}

	foreach ( $items as $item ) {
		if ( ! is_array( $item )
			|| ! isset( $item['id'] )
			|| ! is_string( $item['id'] )
			|| ! is_string( $item['markup'] )
			|| '' === $item['markup'] ) {
			continue;
		}

		$id   = sanitize_html_class( $item['id'] );
		$role = isset( $item['role'] ) && is_string( $item['role'] )
			? sanitize_html_class( $item['role'] )
			: $id;

		if ( '' === $id || '' === $role || isset( $seen_ids[ $id ] ) ) {
			continue;
		}

		$supported_layouts = $item['supportedLayouts'] ?? $flow_layouts;
		if ( ! is_array( $supported_layouts ) || ! in_array( $layout_style, $supported_layouts, true ) ) {
			continue;
		}

		$required_collection_class = '';
		if ( array_key_exists( 'requiredCollectionClassName', $item ) ) {
			if ( ! is_string( $item['requiredCollectionClassName'] ) ) {
				continue;
			}

			$required_collection_class = sanitize_html_class( $item['requiredCollectionClassName'] );
			if ( '' === $required_collection_class || ! in_array( $required_collection_class, $collection_classes, true ) ) {
				continue;
			}
		}

		$provider_classes = [];
		if ( isset( $item['className'] ) && is_string( $item['className'] ) && '' !== trim( $item['className'] ) ) {
			$provider_classes = array_values(
				array_filter(
					array_map( 'sanitize_html_class', preg_split( '/\s+/', trim( $item['className'] ) ) ),
					function ( $class_name ) {
						return '' !== $class_name;
					}
				)
			);
		}

		$seen_ids[ $id ]    = true;
		$normalized_items[] = [
			'id'                          => $id,
			'role'                        => $role,
			'className'                   => implode( ' ', $provider_classes ),
			'markup'                      => $item['markup'],
			'supportedLayouts'            => $supported_layouts,
			'requiredCollectionClassName' => $required_collection_class,
			'editorPreview'               => $item['editorPreview'] ?? true,
		];
	}

	return $normalized_items;
}

/**
 * Render theme-provided collection leading items through a semantic contract.
 *
 * Leading items are deliberately limited to layouts that preserve direct
 * children as flow items. Parametric rebuilds its children as post cards and
 * Carousel turns every child into a slide, so both require future explicit
 * placement strategies rather than silently treating site chrome as content.
 */
function novablocks_get_collection_leading_items_markup( array $attributes, $block ): string {
	$layout_style          = $attributes['layoutStyle'] ?? '';
	$flow_layouts          = [ 'masonry', 'classic' ];
	$structured_items_html = '';
	$legacy_markup         = apply_filters( 'novablocks/collection_leading_items_markup', '', $attributes, $block );

	if ( ! is_string( $legacy_markup ) ) {
		$legacy_markup = '';
	}

	if ( ! in_array( $layout_style, $flow_layouts, true ) ) {
		return $legacy_markup;
	}

	$structured_items = apply_filters( 'novablocks/collection_leading_items', [], $attributes, $block );

	if ( is_array( $structured_items ) ) {
		foreach ( novablocks_normalize_collection_leading_items( $structured_items, $attributes, $layout_style ) as $item ) {
			$classes = [
				'nb-collection__layout-item',
				'nb-collection__layout-item--leading',
			];

			if ( '' !== $item['className'] ) {
				$classes = array_merge( $classes, preg_split( '/\s+/', $item['className'] ) );
			}

			$structured_items_html .= '<div class="' . esc_attr( implode( ' ', $classes ) ) . '"'
				. ' data-nb-collection-item-role="' . esc_attr( $item['role'] ) . '"'
				. ' data-nb-collection-item-id="' . esc_attr( $item['id'] ) . '">'
				. $item['markup']
				. '</div>';
		}
	}

	return $structured_items_html . $legacy_markup;
}

/**
 * Render an empty layout proxy for an external site Header Template Part.
 *
 * The actual Header remains in its standard semantic location. A theme may
 * measure and visually associate it with this proxy without copying, moving,
 * or replacing any Header markup.
 *
 * @param array $attributes Collection attributes.
 * @return string Empty proxy markup, or an empty string when not integrated.
 */
function novablocks_get_collection_external_participant_markup( array $attributes ): string {
	if ( 'masonry' !== ( $attributes['layoutStyle'] ?? '' )
		|| 'grid-item' !== ( $attributes['headerIntegration'] ?? 'standard' )
		|| ! novablocks_collection_layout_recipe_supports( $attributes, 'headerIntegration' ) ) {
		return '';
	}

	return '<div class="nb-collection__layout-item nb-collection__layout-item--external"'
		. ' data-nb-collection-item-role="site-header-proxy"'
		. ' data-nb-external-participant="site-header"'
		. ' hidden'
		. ' aria-hidden="true"'
		. ' style="height: var(--nb-external-participant-height, 0px)"></div>';
}

if ( ! function_exists( 'novablocks_get_collection_output' ) ) {

	function novablocks_get_collection_output( array $attributes, $content, $block ): string {

		if ( isset( $attributes['contentType'] ) && 'auto' === $attributes['contentType'] ) {
			$content = novablocks_get_posts_collection_cards_markup( $attributes, $content, $block );
		}

		$collection_header = novablocks_get_collection_header_output( $attributes );
		$external_participant = novablocks_get_collection_external_participant_markup( $attributes );
		$leading_items     = novablocks_get_collection_leading_items_markup( $attributes, $block );

		if ( empty( $collection_header ) && empty( $external_participant ) && empty( $leading_items ) && empty( $content ) ) {
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

		/**
		 * Let themes prepend non-card bricks inside the layout container,
		 * BEFORE the card items — e.g. a site-header brick that the masonry
		 * engine packs like any other item (the Patch-style header-in-grid).
		 * Markup must be one or more `.nb-collection__layout-item` elements.
		 */
		$output .= '<div class="nb-collection__body">
				<div class="' . esc_attr( join( ' ', $layout_classes ) ) . '">
					' . $external_participant . $leading_items . $content . '
				</div>
			</div>';
		$output .= '</div>';

		return $output;
	}
}

function novablocks_resolve_current_item_post( $block ) {
	$post_id = 0;

	if ( $block instanceof WP_Block && ! empty( $block->context['postId'] ) ) {
		$post_id = absint( $block->context['postId'] );
	}

	if ( $post_id ) {
		$post = get_post( $post_id );
		return $post instanceof WP_Post ? $post : null;
	}

	$post = get_post();

	return $post instanceof WP_Post ? $post : null;
}

function novablocks_get_current_item_featured_image_media( $block ): array {
	$post = novablocks_resolve_current_item_post( $block );

	if ( ! $post instanceof WP_Post ) {
		return [];
	}

	$thumbnail_id = get_post_thumbnail_id( $post );
	if ( empty( $thumbnail_id ) ) {
		return [];
	}

	$url = wp_get_attachment_image_url( $thumbnail_id, 'novablocks_large' );
	if ( empty( $url ) ) {
		$url = wp_get_attachment_url( $thumbnail_id );
	}

	if ( empty( $url ) ) {
		return [];
	}

	return [
		'type' => 'image',
		'id'   => $thumbnail_id,
		'url'  => $url,
		'alt'  => get_post_meta( $thumbnail_id, '_wp_attachment_image_alt', true ),
	];
}

function novablocks_get_card_media_source_attributes( array $attributes, $block ): array {
	if ( ( $attributes['mediaSource'] ?? 'manual' ) !== 'current-item-featured-image' ) {
		return $attributes;
	}

	$current_item_media = novablocks_get_current_item_featured_image_media( $block );

	$attributes['images'] = empty( $current_item_media ) ? [] : [ $current_item_media ];

	return $attributes;
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
	$allowed_levels   = array( 1, 2, 3, 4, 5, 6 );
	$level            = in_array( (int) $attributes['collectionTitleLevel'], $allowed_levels, true )
		? (int) $attributes['collectionTitleLevel'] : 2;
	$titleTag         = 'h' . $level;
	$fontSizeModifier = 'has-' . sanitize_html_class( $attributes['collectionTitleFontSize'] ) . '-font-size';

	$output = '';

	if ( ! empty( $attributes['showCollectionTitle'] ) && ! empty( $attributes['title'] ) ) {
		$output .= '<' . $titleTag . ' class="nb-collection__title wp-block alignfull ' . esc_attr( $fontSizeModifier ) . '">';
		$output .= wp_kses_post( $attributes['title'] );
		$output .= '</' . $titleTag . '>';
	}

	if ( ! empty( $attributes['showCollectionSubtitle'] ) && ! empty( $attributes['subtitle'] ) ) {
		$output .= '<p class="nb-collection__subtitle wp-block is-style-lead alignfull">' . esc_html( $attributes['subtitle'] ) . '</p>';
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
	$media = novablocks_resolve_local_placeholder_media( $media, $attributes );

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
			$output .= '<video class="nb-supernova-item__media novablocks-doppler__target" data-shape-modeling-target muted autoplay loop playsinline src="' . esc_url( $media['url'] ) . '"></video>';
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

				// If we have a "stacked" card layout and the parallax scrolling effect,
				// the images will be zoomed in to some degree;
				// to maintain sharpness, we will reduce the width descriptor of each image in the srcset list
				// by a small percent.
				if ( ( ! empty( $attributes['cardLayout'] ) && 'stacked' === $attributes['cardLayout'] )
				     && ( ! empty( $attributes['scrollingEffect'] ) && 'parallax' === $attributes['scrollingEffect'] ) ) {

					add_filter( 'wp_calculate_image_srcset', 'novablocks_reduce_srcset_width_descriptor', 10, 1 );

					// Make sure the sizes attribute reflects the reduction.
					if ( ! empty( $attachment_image_width ) ) {
						$attachment_image_width = (int) round( $attachment_image_width * 0.9 );
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
						'class'                      => 'nb-supernova-item__media novablocks-doppler__target',
						'sizes'                      => ! empty( $sizes ) ? implode( ', ', $sizes ) : false,
					] ) . PHP_EOL;

				// Remove the filter.
				if ( ( ! empty( $attributes['cardLayout'] ) && 'stacked' === $attributes['cardLayout'] )
				     && ( ! empty( $attributes['scrollingEffect'] ) && 'parallax' === $attributes['scrollingEffect'] ) ) {

					remove_filter( 'wp_calculate_image_srcset', 'novablocks_reduce_srcset_width_descriptor', 10 );
				}
			} else {
				$output .= '<img class="nb-supernova-item__media novablocks-doppler__target" data-shape-modeling-target src="' . novablocks_escape_media_src( $url ) . '" alt="' . ( ! empty( $media['alt'] ) ? esc_attr( $media['alt'] ) : '' ) . '" />' . PHP_EOL;
			}
		}
	}

	return $output;
}

/**
 * We will reduce the width descriptor of each image in the srcset list by a small percent.
 *
 * @param array  $sources {
 *     One or more arrays of source data to include in the 'srcset'.
 *
 *     @type array $width {
 *         @type string $url        The URL of an image source.
 *         @type string $descriptor The descriptor type used in the image candidate string,
 *                                  either 'w' or 'x'.
 *         @type int    $value      The source width if paired with a 'w' descriptor, or a
 *                                  pixel density value if paired with an 'x' descriptor.
 *     }
 * }
 *
 * @return array
 */
function novablocks_reduce_srcset_width_descriptor( $sources ) {
	// We will multiply each width descriptor value with the factor.
	$reduction_factor = 0.9;

	foreach ( $sources as $width => $source ) {
		if ( empty( $source['descriptor'] ) || 'w' !== $source['descriptor'] || empty( $source['value'] ) ) {
			continue;
		}

		$sources[ $width ]['value'] = (int) round( $source['value'] * $reduction_factor );
	}

	return $sources;
}

/**
 * @param       $post
 * @param array $attributes
 *
 * @return string[]
 */
function novablocks_get_card_post_meta( $post, array $attributes ): array {
	$primaryMeta           = '<span class="nb-card__meta--primary">' . novablocks_get_post_card_meta( $post, $attributes['primaryMetadata'], $attributes ) . '</span>';
	$secondaryMeta         = '<span class="nb-card__meta--secondary">' . novablocks_get_post_card_meta( $post, $attributes['secondaryMetadata'], $attributes ) . '</span>';
	$metaSeparator         = '<span class="nb-card__meta-separator"></span>';
	$secondaryMetaIsOutput = $attributes['secondaryMetadata'] !== 'none';
	$aboveTitleMeta        = '';
	$belowTitleMeta        = '';
	$belowContentMeta      = '';

	if ( ! empty( $primaryMeta ) && ! empty( $secondaryMeta ) ) {
		$combinedMeta = $primaryMeta;

		if ( $secondaryMetaIsOutput ) {
			$combinedMeta .= $metaSeparator . $secondaryMeta;
		}
	} else {
		$combinedMeta = empty( $primaryMeta ) ? $secondaryMeta : $primaryMeta;
	}

	switch ( $attributes['metadataPosition'] ) {
		case 'above-title':
			$aboveTitleMeta = $combinedMeta;
			break;
		case 'below-title':
			$belowTitleMeta = $combinedMeta;
			break;
		case 'below-content':
			$belowContentMeta = $combinedMeta;
			break;
		case 'split':
			$aboveTitleMeta = $primaryMeta;
			$belowContentMeta = $secondaryMeta;
			break;
		default:
			break;
	}

	return [
		$aboveTitleMeta,
		$belowTitleMeta,
		$belowContentMeta,
	];
}

function novablocks_get_facetwp_paged_query_var(): int {
	if ( ! function_exists( 'FWP' ) ) {
		return 0;
	}

	try {
		if ( ! empty( FWP()->request->url_vars['paged'] ) ) {
			return max( 1, absint( FWP()->request->url_vars['paged'] ) );
		}
	} catch ( Throwable $exception ) {
		// FacetWP may not have initialized its request object yet.
	}

	$prefix = '_';
	try {
		$facetwp_prefix = FWP()->helper->get_setting( 'prefix' );
		if ( is_string( $facetwp_prefix ) && '' !== $facetwp_prefix ) {
			$prefix = $facetwp_prefix;
		}
	} catch ( Throwable $exception ) {
		// Keep the FacetWP default URL prefix.
	}

	$page_key = $prefix . 'paged';
	if ( isset( $_GET[ $page_key ] ) && '' !== $_GET[ $page_key ] ) {
		return max( 1, absint( wp_unslash( $_GET[ $page_key ] ) ) );
	}

	if ( isset( $_POST['data'] ) && is_array( $_POST['data'] ) && ! empty( $_POST['data']['paged'] ) ) {
		return max( 1, absint( wp_unslash( $_POST['data']['paged'] ) ) );
	}

	return 0;
}

function novablocks_get_query_loop_page( $block ): int {
	$facetwp_page = novablocks_get_facetwp_paged_query_var();
	if ( $facetwp_page > 0 ) {
		return $facetwp_page;
	}

	$page_key = isset( $block->context['queryId'] ) ? 'query-' . $block->context['queryId'] . '-page' : 'query-page';

	return empty( $_GET[ $page_key ] ) ? 1 : max( 1, absint( wp_unslash( $_GET[ $page_key ] ) ) );
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
		} else {
			$page = novablocks_get_query_loop_page( $block );

			if ( function_exists( 'gutenberg_build_query_vars_from_query_block' ) ) {
				$block_query_args = gutenberg_build_query_vars_from_query_block( $block, $page );
			} else {
				$block_query_args = build_query_vars_from_query_block( $block, $page );
			}

			$query_args = array_merge( $query_args, $block_query_args );

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
	}

	return $query_args;
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
		echo wp_kses_post( $title );
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

	// Rendering a Post Meta block calculates this same reading time. Short-circuit
	// nested Post Meta blocks so a post containing the block cannot recurse until
	// PHP exhausts its memory limit.
	$skip_post_meta = static function ( $pre_render, array $parsed_block ) {
		if ( 'novablocks/post-meta' === ( $parsed_block['blockName'] ?? '' ) ) {
			return '';
		}

		return $pre_render;
	};

	add_filter( 'pre_render_block', $skip_post_meta, 10, 2 );

	try {
		// We don't need the whole content filters. Just the bare minimum.
		$content = do_blocks( $post->post_content );
	} finally {
		remove_filter( 'pre_render_block', $skip_post_meta, 10 );
	}

	$content = wptexturize( $content );
	$content = wpautop( $content );
	$content = shortcode_unautop( $content );
	$content = do_shortcode( $content );

	$content = str_replace( ']]>', ']]&gt;', $content );

	// Allow others to have a say; like removing certain non-essential elements (avatars for example).
	$content = apply_filters( 'novablocks/post_content_before_reading_time_calc', $content, $post );

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
		'data-palette="' . esc_attr( $attributes['palette'] ) . '"',
		'data-palette-variation="' . esc_attr( $attributes['paletteVariation'] ) . '"',
		'data-color-signal="' . esc_attr( $attributes['colorSignal'] ) . '"',
	];

	if ( ! empty( $attributes['useSourceColorAsReference'] ) ) {
		$data_attributes[] = 'data-use-source-color-as-reference';
	}

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

function novablocks_get_collection_card_surface_markup( string $media, string $content, array $attributes, string $content_before_media = '', array $content_regions = [] ): string {

	// Make sure that the defaults are in place.
	$attributes = wp_parse_args( $attributes, [
		'cardMediaOpacity' => 100,
	] );

	$cardClasses = [ 'nb-supernova-item', ];
	$content_region_placements = array_values( array_filter( array_map( function ( $region ) {
		return is_array( $region ) ? ( $region['placement'] ?? null ) : null;
	}, $content_regions ) ) );

	if ( in_array( 'before-media', $content_region_placements, true )
		&& in_array( 'after-media', $content_region_placements, true ) ) {
		$cardClasses[] = 'nb-supernova-item--split-content';
	}

	if ( ! empty( $attributes['cardLayout'] ) ) {
		$cardClasses[] = 'nb-supernova-item--layout-' . $attributes['cardLayout'];
	}

	if ( ! empty( $attributes['scrollingEffect'] ) ) {
		$cardClasses[] = 'nb-supernova-item--scrolling-effect-' . $attributes['scrollingEffect'];
	}

	if ( ! empty( $attributes['thumbnailAspectRatioString'] ) ) {
		$cardClasses[] = 'nb-supernova-item--aspect-ratio-' . $attributes['thumbnailAspectRatioString'];
	}

	// Output the Additional CSS class(es) of the block
	if ( ! empty( $attributes['className'] ) ) {
		$custom_classes = array_map( 'sanitize_html_class', explode( ' ', $attributes['className'] ) );
		$cardClasses    = array_merge( $cardClasses, array_filter( $custom_classes ) );
	}

	$cardClasses = array_merge(
		$cardClasses,
		novablocks_get_color_signal_classes( $attributes )
	);

	$contentClasses = [ 'nb-supernova-item__content', ];
	$surface_style_props = [];
	$regions_by_placement = [];

	foreach ( $content_regions as $region ) {
		if ( is_array( $region ) && ! empty( $region['placement'] ) ) {
			$regions_by_placement[ $region['placement'] ] = $region;
		}
	}

	$get_region_classes = function ( string $placement ) use ( $regions_by_placement ): array {
		$region = $regions_by_placement[ $placement ] ?? [];
		return ! empty( $region['classNames'] ) && is_array( $region['classNames'] )
			? array_values( array_filter( array_map( 'sanitize_html_class', $region['classNames'] ) ) )
			: [];
	};

	if ( ! empty( $attributes['surfaceStyleProps'] ) && is_array( $attributes['surfaceStyleProps'] ) ) {
		$surface_style_props = array_values( array_filter( $attributes['surfaceStyleProps'] ) );
	}

	if ( ! empty( $attributes['contentPosition'] ) ) {
		$align = preg_split( '/\b\s+/', $attributes['contentPosition'] );

		if ( ! empty( $align[0] ) ) {
			$contentClasses[] = 'nb-supernova-item__content--valign-' . $align[0];
		}

		if ( ! empty( $align[1] ) ) {
			$contentClasses[] = 'nb-supernova-item__content--halign-' . $align[1];
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

	$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

	if ( ( isset( $attributes['columns'] ) && $attributes['columns'] === 1 ) &&
	     ( isset( $attributes['cardLayout']) && $attributes['cardLayout'] === 'stacked' ) &&
	     ( isset( $attributes['layoutStyle'] ) && $attributes['layoutStyle'] !== 'carousel' ) ) {

		if ( get_post_meta( get_the_ID(), 'novablocks_hero_position_indicators', true ) ) {
			$data_attributes[] = 'data-position-indicators="1"';
		}
	}

	// Output the HTML anchor (ID) of the block.
	$id = '';
	if ( ! empty( $attributes['anchor'] ) ) {
		$id = 'id="' . esc_attr( $attributes['anchor'] ) . '" ';
	}

	ob_start(); ?>

		<div class="<?php echo esc_attr( join( ' ', $cardClasses ) ); ?>" <?php echo $id; ?><?php if ( ! empty( $surface_style_props ) ) { ?>style="<?php echo esc_attr( join( ';', $surface_style_props ) ); ?>" <?php } ?><?php echo join( ' ', $data_attributes ); ?>>
			<?php if ( ( $attributes['cardLayout'] ?? '' ) === 'stacked' ) { ?>
			<div class="nb-supernova-item__frame">
			<?php } ?>
			<?php if ( novablocks_show_card_contents( $attributes ) && ! empty( $content_before_media ) ) { ?>
				<?php
				$before_classes = $get_region_classes( 'before-media' );
				if ( empty( $before_classes ) ) {
					$before_classes[] = 'nb-supernova-item__content--before-media';
				}
				?>
				<div class="<?php echo esc_attr( join( ' ', array_merge( $contentClasses, $before_classes ) ) ); ?>">
					<div class="nb-supernova-item__inner-container">
						<?php echo $content_before_media; ?>
					</div>
				</div>
			<?php } ?>
			<?php if ( ! empty( $attributes['showMedia'] ) && ! empty( $media ) ) {
				echo $media;
			}
			if ( novablocks_show_card_contents( $attributes ) && ! empty( $content ) ) { ?>
				<?php
				$main_classes = $get_region_classes( 'after-media' );
				if ( empty( $main_classes ) ) {
					$main_classes = $get_region_classes( 'content-only' );
				}
				if ( empty( $main_classes ) && ! empty( $content_before_media ) ) {
					$main_classes[] = 'nb-supernova-item__content--after-media';
				}
				?>
				<div class="<?php echo esc_attr( join( ' ', array_merge( $contentClasses, $main_classes ) ) ); ?>">
					<div class="nb-supernova-item__inner-container">
						<?php
						echo $content;
						novablocks_render_scroll_indicator( $attributes );
						?>
					</div>
				</div>
			<?php } ?>
			<?php if ( ( $attributes['cardLayout'] ?? '' ) === 'stacked' ) { ?>
			</div>
			<?php } ?>
		</div>

	<?php
	return ob_get_clean();
}

function novablocks_get_collection_card_markup( string $media, string $content, array $attributes, string $content_before_media = '', array $content_regions = [] ): string {
	$surface_markup = novablocks_get_collection_card_surface_markup( $media, $content, $attributes, $content_before_media, $content_regions );

	ob_start(); ?>

		<div class="nb-collection__layout-item">
			<?php echo $surface_markup; ?>
		</div>

	<?php
	return ob_get_clean();
}

/**
 * Decide whether the card should render content in split slots
 * (pre-media title block + post-media remainder) for "after-title" media
 * position. Only applies to vertical cards with fields content and media.
 *
 * @deprecated since elementOrder was introduced. The split/no-split decision
 * now derives from Media's position in the resolved element order. Kept for
 * any external callers that may rely on it.
 */
function novablocks_card_should_split_content( array $attributes ): bool {
	return ! empty( $attributes['showMedia'] )
		&& ( $attributes['mediaPosition'] ?? 'before-title' ) === 'after-title'
		&& ( $attributes['cardLayout'] ?? '' ) === 'vertical'
		&& ( $attributes['contentType'] ?? 'fields' ) === 'fields';
}

/**
 * Valid card element identifiers that can appear in the `elementOrder`
 * attribute. Mirrors the ELEMENT constants exported from the JS
 * `element-order-utils` module — keep them in sync.
 */
function novablocks_card_element_ids(): array {
	return [ 'media', 'meta-primary', 'meta-secondary', 'title', 'subtitle', 'description', 'buttons' ];
}

/**
 * Canonical default element order used when `elementOrder` has not been set.
 * Mirrors the JS `DEFAULT_ORDER` so editor and frontend stay aligned.
 */
function novablocks_default_card_element_order(): array {
	return [ 'media', 'meta-primary', 'meta-secondary', 'title', 'subtitle', 'description', 'buttons' ];
}

/**
 * Resolve the effective element order.
 *
 * - If a non-empty `elementOrder` attribute is saved, use it verbatim (after
 *   sanitising: known ids only, deduplicated, with any missing defaults
 *   appended so newly introduced elements surface automatically).
 * - Otherwise derive a legacy order from `mediaPosition` + `metadataPosition`
 *   that matches the pre-elementOrder rendering.
 */
function novablocks_resolve_card_element_order( array $attributes ): array {
	$order = $attributes['elementOrder'] ?? [];

	if ( is_array( $order ) && ! empty( $order ) ) {
		$valid  = novablocks_card_element_ids();
		$seen   = [];
		$clean  = [];
		foreach ( $order as $id ) {
			if ( is_string( $id ) && in_array( $id, $valid, true ) && ! in_array( $id, $seen, true ) ) {
				$clean[] = $id;
				$seen[]  = $id;
			}
		}
		foreach ( novablocks_default_card_element_order() as $id ) {
			if ( ! in_array( $id, $seen, true ) ) $clean[] = $id;
		}
		return $clean;
	}

	return novablocks_derive_legacy_card_element_order( $attributes );
}

function novablocks_derive_legacy_card_element_order( array $attributes ): array {
	$mediaPosition    = $attributes['mediaPosition']    ?? 'before-title';
	$metadataPosition = $attributes['metadataPosition'] ?? 'above-title';

	$items = [];

	if ( $mediaPosition === 'before-title' ) $items[] = 'media';

	if ( $metadataPosition === 'above-title' ) {
		$items[] = 'meta-primary';
		$items[] = 'meta-secondary';
	} elseif ( $metadataPosition === 'split' ) {
		$items[] = 'meta-primary';
	}

	$items[] = 'title';

	if ( $mediaPosition === 'after-title' ) $items[] = 'media';

	$items[] = 'subtitle';

	if ( $metadataPosition === 'below-title' ) {
		$items[] = 'meta-primary';
		$items[] = 'meta-secondary';
	}

	$items[] = 'description';

	if ( $metadataPosition === 'below-content' ) {
		$items[] = 'meta-primary';
		$items[] = 'meta-secondary';
	} elseif ( $metadataPosition === 'split' ) {
		$items[] = 'meta-secondary';
	}

	$items[] = 'buttons';

	return $items;
}

function novablocks_is_card_element_visible( string $id, array $attributes ): bool {
	switch ( $id ) {
		case 'media':          return ! empty( $attributes['showMedia'] );
		case 'meta-primary':
		case 'meta-secondary': return ! empty( $attributes['showMeta'] );
		case 'title':          return ! isset( $attributes['showTitle'] )       || $attributes['showTitle']       !== false;
		case 'subtitle':       return ! isset( $attributes['showSubtitle'] )    || $attributes['showSubtitle']    !== false;
		case 'description':    return ! isset( $attributes['showDescription'] ) || $attributes['showDescription'] !== false;
		case 'buttons':        return ! empty( $attributes['showButtons'] );
		default:               return false;
	}
}

/**
 * Return the effective order filtered to items that would actually render
 * (visibility flags honoured). This is what both the editor list and the
 * card render walk.
 */
function novablocks_get_visible_card_element_order( array $attributes ): array {
	return array_values( array_filter(
		novablocks_resolve_card_element_order( $attributes ),
		function ( $id ) use ( $attributes ) {
			return novablocks_is_card_element_visible( $id, $attributes );
		}
	) );
}

/**
 * Split a resolved visible card order into stable semantic content regions.
 *
 * This mirrors the editor's getCardContentRegions() helper. Themes may consume
 * the emitted classes, but must not infer card anatomy from wrapper position.
 * `$has_media` means Media actually renders; a missing featured image collapses
 * into one content-only region even when `media` remains in elementOrder.
 */
function novablocks_get_card_content_regions( array $order, bool $has_media = true ): array {
	$valid_ids      = novablocks_card_element_ids();
	$resolved_order = array_values( array_filter( $order, function ( $id ) use ( $valid_ids ) {
		return is_string( $id ) && in_array( $id, $valid_ids, true );
	} ) );
	$media_index    = $has_media ? array_search( 'media', $resolved_order, true ) : false;
	$boundary_order = false !== $media_index
		? $resolved_order
		: array_values( array_filter( $resolved_order, function ( $id ) { return 'media' !== $id; } ) );
	$leading_item   = $boundary_order[0] ?? null;
	$trailing_item  = ! empty( $boundary_order ) ? $boundary_order[ count( $boundary_order ) - 1 ] : null;
	$detail_ids     = [ 'meta-primary', 'meta-secondary', 'buttons' ];

	$create_region = function ( array $items, string $placement ) use ( $leading_item, $trailing_item, $detail_ids ) {
		if ( empty( $items ) ) {
			return null;
		}

		$class_names = [ 'nb-supernova-item__content--' . $placement ];

		if ( in_array( 'title', $items, true ) ) {
			$class_names[] = 'nb-supernova-item__content--contains-title';
		}

		if ( empty( array_diff( $items, $detail_ids ) ) ) {
			$class_names[] = 'nb-supernova-item__content--details-only';
		}

		if ( null !== $leading_item && in_array( $leading_item, $items, true ) ) {
			$class_names[] = 'nb-supernova-item__content--leading-boundary';
		}

		if ( null !== $trailing_item && in_array( $trailing_item, $items, true ) ) {
			$class_names[] = 'nb-supernova-item__content--trailing-boundary';
		}

		return [
			'placement'  => $placement,
			'items'      => $items,
			'classNames' => $class_names,
		];
	};

	if ( false !== $media_index ) {
		$before_items = array_values( array_filter(
			array_slice( $resolved_order, 0, $media_index ),
			function ( $id ) { return 'media' !== $id; }
		) );
		$after_items = array_values( array_filter(
			array_slice( $resolved_order, $media_index + 1 ),
			function ( $id ) { return 'media' !== $id; }
		) );

		return array_values( array_filter( [
			$create_region( $before_items, 'before-media' ),
			$create_region( $after_items, 'after-media' ),
		] ) );
	}

	$content_items  = array_values( array_filter( $resolved_order, function ( $id ) { return 'media' !== $id; } ) );
	$content_region = $create_region( $content_items, 'content-only' );

	return null !== $content_region ? [ $content_region ] : [];
}

/**
 * Render a list of card element ids into content markup. Media is not handled
 * here — it's rendered by the surface function as a sibling of the content
 * wrapper, so callers must exclude 'media' from the ids list.
 *
 * When meta-primary and meta-secondary appear adjacent, they collapse into a
 * single <p> tag — matching the editor's visual grouping and the user's
 * expectation that "nearby metadatas show on the same line".
 */
function novablocks_get_card_items_markup( array $item_ids, array $attributes ): string {
	$output           = '';
	$metaAboveTitle   = $attributes['metaAboveTitle']   ?? '';
	$metaBelowContent = $attributes['metaBelowContent'] ?? '';
	$count            = count( $item_ids );

	for ( $i = 0; $i < $count; $i++ ) {
		$id   = $item_ids[ $i ];
		$next = $item_ids[ $i + 1 ] ?? null;

		$is_meta_pair = (
			( $id === 'meta-primary'   && $next === 'meta-secondary' ) ||
			( $id === 'meta-secondary' && $next === 'meta-primary'   )
		);

		if ( $is_meta_pair ) {
			$primary_first = $id === 'meta-primary';
			$first  = $primary_first ? $metaAboveTitle   : $metaBelowContent;
			$second = $primary_first ? $metaBelowContent : $metaAboveTitle;
			$output .= novablocks_get_card_item_combined_meta(
				$first,
				$second,
				$attributes,
				$primary_first ? 'primary' : 'secondary',
				$primary_first ? 'secondary' : 'primary'
			);
			$i++; // consume the paired sibling
			continue;
		}

		switch ( $id ) {
			case 'meta-primary':
				$output .= novablocks_get_card_item_meta( $metaAboveTitle, $attributes, 'primary' );
				break;
			case 'meta-secondary':
				$output .= novablocks_get_card_item_meta( $metaBelowContent, $attributes, 'secondary' );
				break;
			case 'title':
				$output .= novablocks_get_card_item_title( $attributes['title'] ?? '', $attributes );
				break;
			case 'subtitle':
				$output .= novablocks_get_card_item_subtitle( $attributes['subtitle'] ?? '', $attributes );
				break;
			case 'description':
				$output .= novablocks_get_card_item_description( $attributes['description'] ?? '', $attributes );
				break;
			case 'buttons':
				$output .= novablocks_get_card_item_buttons( [
					[
						'text'          => $attributes['buttonText'] ?? '',
						'url'           => $attributes['buttonUrl']  ?? '',
						'opensInNewTab' => ! empty( $attributes['buttonOpensInNewTab'] ),
					],
				], $attributes );
				break;
		}
	}

	return $output;
}

/**
 * Render two meta strings as a single combined paragraph so nearby metadatas
 * appear on one card line (matching how the current "above / below" slot
 * renders when both sources share a position).
 */
function novablocks_get_card_item_combined_meta( string $first, string $second, array $attributes, string $first_role = 'primary', string $second_role = 'secondary' ): string {
	if ( empty( $attributes['showMeta'] ) ) {
		return '';
	}

	$first  = (string) $first;
	$second = (string) $second;
	$first_len  = strlen( $first );
	$second_len = strlen( $second );

	if ( ! $first_len && ! $second_len ) {
		return '';
	}

	// Fall back to the regular single-slot render when only one side has
	// content — no need for an inline separator.
	if ( ! $first_len )  return novablocks_get_card_item_meta( $second, $attributes, $second_role );
	if ( ! $second_len ) return novablocks_get_card_item_meta( $first, $attributes, $first_role );

	$semantic_roles = novablocks_collection_layout_recipe_supports( $attributes, 'linkedPostMetadata' );
	$first_role     = in_array( $first_role, [ 'primary', 'secondary' ], true ) ? $first_role : 'primary';
	$second_role    = in_array( $second_role, [ 'primary', 'secondary' ], true ) ? $second_role : 'secondary';
	$first_class    = $semantic_roles ? ' class="nb-card__meta--' . esc_attr( $first_role ) . '"' : '';
	$second_class   = $semantic_roles ? ' class="nb-card__meta--' . esc_attr( $second_role ) . '"' : '';

	return '<p class="nb-card__meta is-style-meta nb-card__meta-combined">'
		. '<span' . $first_class . '>' . wp_kses_post( $first ) . '</span>'
		. '<span class="nb-card__meta-separator" aria-hidden="true"></span>'
		. '<span' . $second_class . '>' . wp_kses_post( $second ) . '</span>'
		. '</p>';
}

/**
 * Card expression classes: expose a post card's media orientation and content
 * length as card-level modifier classes so themes can build ratio-adaptive
 * card designs (collage/masonry grids). Thresholds mirror the legacy Patch
 * theme contract and are filterable via `novablocks/card_expression_thresholds`.
 */
function novablocks_get_card_expression_thresholds(): array {
	$defaults = [
		'media'       => [ 'tall' => 0.5625, 'portrait' => 0.75, 'square' => 1.34, 'landscape' => 1.78 ],
		'title'       => [ 'short' => 30, 'medium' => 60 ],
		'description' => [ 'short' => 100, 'medium' => 200 ],
		'recency'     => [ 'fresh_days' => 30 ],
	];

	$thresholds = apply_filters( 'novablocks/card_expression_thresholds', $defaults );

	return is_array( $thresholds ) ? array_replace_recursive( $defaults, $thresholds ) : $defaults;
}

function novablocks_classify_card_media_ratio( $ratio, ?array $thresholds = null ): string {
	if ( null === $thresholds ) {
		$all        = novablocks_get_card_expression_thresholds();
		$thresholds = $all['media'];
	}

	$ratio = (float) $ratio;

	if ( $ratio <= 0 ) {
		return 'landscape';
	}

	if ( $ratio < $thresholds['tall'] ) {
		return 'tall';
	}

	if ( $ratio < $thresholds['portrait'] ) {
		return 'portrait';
	}

	if ( $ratio <= $thresholds['square'] ) {
		return 'square';
	}

	if ( $ratio <= $thresholds['landscape'] ) {
		return 'landscape';
	}

	return 'wide';
}

function novablocks_classify_card_text_length( $text, array $thresholds ): string {
	$text = trim( strip_tags( (string) $text ) );

	if ( '' === $text ) {
		return 'none';
	}

	$length = function_exists( 'mb_strlen' ) ? mb_strlen( $text ) : strlen( $text );

	if ( $length < $thresholds['short'] ) {
		return 'short';
	}

	if ( $length < $thresholds['medium'] ) {
		return 'medium';
	}

	return 'long';
}

function novablocks_get_card_expression_classes_from_values( array $values ): array {
	$thresholds = novablocks_get_card_expression_thresholds();
	$classes    = [];

	$width  = isset( $values['media_width'] ) ? (float) $values['media_width'] : 0;
	$height = isset( $values['media_height'] ) ? (float) $values['media_height'] : 0;

	if ( $width > 0 && $height > 0 ) {
		$classes[] = 'nb-card--media-' . novablocks_classify_card_media_ratio( $width / $height, $thresholds['media'] );
	} else {
		$classes[] = 'nb-card--no-media';
	}

	$classes[] = 'nb-card--title-' . novablocks_classify_card_text_length( $values['title'] ?? '', $thresholds['title'] );
	$classes[] = 'nb-card--description-' . novablocks_classify_card_text_length( $values['description'] ?? '', $thresholds['description'] );

	// Recency is anchored to the newest post in the same rendered collection
	// (never the wall clock) so the class set stays deterministic per content
	// set and page-cache-stable. Both timestamps are UNIX seconds.
	$post_timestamp   = isset( $values['post_timestamp'] ) ? (int) $values['post_timestamp'] : 0;
	$newest_timestamp = isset( $values['newest_timestamp'] ) ? (int) $values['newest_timestamp'] : 0;

	if ( $post_timestamp > 0 && $newest_timestamp > 0
	     && ( $newest_timestamp - $post_timestamp ) <= $thresholds['recency']['fresh_days'] * 86400 ) {
		$classes[] = 'nb-card--fresh';
	}

	return $classes;
}

function novablocks_get_post_card_expression_classes( $post, array $attributes ): array {
	$width      = 0;
	$height     = 0;
	$show_media = ! isset( $attributes['showMedia'] ) || ! empty( $attributes['showMedia'] );

	if ( $show_media ) {
		$thumbnail_id = get_post_thumbnail_id( $post );

		if ( $thumbnail_id ) {
			$metadata = wp_get_attachment_metadata( $thumbnail_id );

			if ( is_array( $metadata ) ) {
				$width  = $metadata['width'] ?? 0;
				$height = $metadata['height'] ?? 0;
			}
		}
	}

	return novablocks_get_card_expression_classes_from_values( [
		'media_width'      => $width,
		'media_height'     => $height,
		'title'            => get_the_title( $post ),
		'description'      => get_the_excerpt( $post ),
		'post_timestamp'   => isset( $post->post_date_gmt ) ? (int) strtotime( (string) $post->post_date_gmt ) : 0,
		'newest_timestamp' => isset( $attributes['_collectionNewestPostTimestamp'] ) ? (int) $attributes['_collectionNewestPostTimestamp'] : 0,
	] );
}

function novablocks_get_collection_card_markup_from_post( $post, array $attributes ): string {

	// Resolve the effective element order (elementOrder attribute or legacy
	// derivation) and split content around Media the same way the fields-mode
	// render does, so Query Loop cards honour the Content Details reorder UI.
	$order                = novablocks_get_visible_card_element_order( $attributes );
	$has_renderable_media = ! empty( $attributes['showMedia'] ) && ! empty( get_post_thumbnail_id( $post ) );
	$content_regions      = novablocks_get_card_content_regions( $order, $has_renderable_media );
	$content_before_media = '';
	$card_content         = '';

	foreach ( $content_regions as $region ) {
		$region_markup = novablocks_get_post_card_items_markup( $post, $region['items'], $attributes );

		if ( 'before-media' === $region['placement'] ) {
			$content_before_media = $region_markup;
		} else {
			$card_content = $region_markup;
		}
	}

	$title = get_the_title( $post );
	$dropcap = '';
	if ( preg_match( '/[a-z]/i', $title, $match ) ) {
		$dropcap = $match[0];
	}

	$has_any_content = ! empty( $card_content ) || ! empty( $content_before_media );
	$media_markup    = novablocks_get_collection_card_media_markup( [
		'type' => 'image',
		'url'  => get_the_post_thumbnail_url( $post ),
		'id'   => get_post_thumbnail_id( $post ),
	], $attributes, [
		'companionContent' => ( novablocks_show_card_contents( $attributes ) && $has_any_content ),
	] );

	$media_markup = novablocks_get_collection_card_media_markup_wrapped( $media_markup, get_permalink( $post ), $dropcap, $title, $attributes );

	$attributes['colorSignal']               = $attributes['contentColorSignal'];
	$attributes['paletteVariation']          = $attributes['contentPaletteVariation'];
	$attributes['useSourceColorAsReference'] = false;

	$profile = apply_filters( 'novablocks/post_card_profile', [], $post, $attributes );

	$render_data = [
		'card_classes'         => novablocks_get_post_card_expression_classes( $post, $attributes ),
		'card_attributes'      => $attributes,
		'media_markup'         => $media_markup,
		'content_markup'       => $card_content,
		'content_before_media' => $content_before_media,
		'content_regions'      => $content_regions,
	];

	$render_data = apply_filters( 'novablocks/post_card_render_data', $render_data, $post, $attributes, $profile );

	if ( ! empty( $render_data['card_classes'] ) && is_array( $render_data['card_classes'] ) ) {
		$extra_classes = implode( ' ', array_map( 'sanitize_html_class', $render_data['card_classes'] ) );
		$existing_classes = $render_data['card_attributes']['className'] ?? '';
		$render_data['card_attributes']['className'] = trim( $existing_classes . ' ' . $extra_classes );
	}

	$blueprint_markup = novablocks_maybe_get_post_format_blueprint_card_markup(
		get_post( $post ),
		$render_data['card_attributes'],
		$profile,
		$render_data['content_before_media'] ?? '',
		$render_data['content_regions'] ?? []
	);

	if ( is_string( $blueprint_markup ) && '' !== $blueprint_markup ) {
		return $blueprint_markup;
	}

	return novablocks_get_collection_card_markup(
		$render_data['media_markup'],
		$render_data['content_markup'],
		$render_data['card_attributes'],
		$render_data['content_before_media'] ?? '',
		$render_data['content_regions'] ?? []
	);
}

function novablocks_get_collection_card_media_markup_wrapped( $media, $link = false, $dropcap = '', $link_context = '', array $attributes = [] ): string {
	$output = '';

	if ( empty( $media ) ) {
		return $output;
	}

	if ( ! empty( $link ) ) {
		$output .= '<a class="nb-supernova-item__media-wrapper" href="' . esc_url( $link ) . '">';
	} else {
		$output .= '<div class="nb-supernova-item__media-wrapper">';
	}

	$output .= '<div class="nb-supernova-item__media-aspect-ratio">';

	if ( ! empty( $dropcap ) ) {
		$has_read_more_affordance = novablocks_collection_layout_recipe_supports( $attributes, 'readMoreAffordance' );
		$read_more_class          = $has_read_more_affordance
			? 'nb-card__read-more nb-supernova-item__dropcap-more'
			: 'nb-supernova-item__dropcap-more';
		$read_more_context        = $has_read_more_affordance && '' !== $link_context
			? '<span class="screen-reader-text">: ' . esc_html( $link_context ) . '</span>'
			: '';
		$read_more_text           = $has_read_more_affordance
			? esc_html__( 'Read More', '__plugin_txtd' )
			: __( 'Read More', '__plugin_txtd' );

		$output .= '<div class="nb-supernova-item__dropcap-wrapper sm-variation-11">
						<div class="nb-supernova-item__dropcap-line  nb-supernova-item__dropcap-line--top"></div>
						<span class="nb-supernova-item__dropcap">' . $dropcap . '</span>
						<span class="' . esc_attr( $read_more_class ) . '">' . $read_more_text
						. $read_more_context . '</span>
						<div class="nb-supernova-item__dropcap-line  nb-supernova-item__dropcap-line--bottom"></div>
					</div>';
	}

	$output .= '<div class="novablocks-doppler__mask novablocks-doppler__wrapper">
					<div class="nb-supernova-item__media-doppler"> ' . $media . '</div>
				</div>
			</div>';

	if ( ! empty( $link ) ) {
		$output .= '</a>';
	} else {
		$output .= '</div>';
	}

	return $output;
}

function novablocks_get_card_contents( array $attributes, string $slot = 'full' ): string {

	$output = '';

	$render_before = in_array( $slot, [ 'full', 'before-media' ], true );
	$render_after  = in_array( $slot, [ 'full', 'after-media' ], true );

	if ( $render_before ) {
		$output .= novablocks_get_card_item_meta( $attributes['metaAboveTitle'], $attributes );
		$output .= novablocks_get_card_item_title( $attributes['title'], $attributes );
	}

	if ( $render_after ) {
		$output .= novablocks_get_card_item_subtitle( $attributes['subtitle'], $attributes );
		$output .= novablocks_get_card_item_meta( $attributes['metaBelowTitle'], $attributes );
		$output .= novablocks_get_card_item_description( $attributes['description'], $attributes );
		$output .= novablocks_get_card_item_meta( $attributes['metaBelowContent'] ?? '', $attributes );
		$output .= novablocks_get_card_item_buttons( [
			[
				'text'          => $attributes['buttonText'],
				'url'           => $attributes ['buttonUrl'],
				'opensInNewTab' => ! empty( $attributes['buttonOpensInNewTab'] ),
			],
		], $attributes );
	}

	return $output;
}

function novablocks_get_card_item_meta( $metaValue, array $attributes, string $role = '' ): string {
	$metaValue = (string) $metaValue;
	if ( empty( $attributes['showMeta'] ) || ! strlen( $metaValue ) ) {
		return '';
	}

	if ( novablocks_collection_layout_recipe_supports( $attributes, 'linkedPostMetadata' )
		&& in_array( $role, [ 'primary', 'secondary' ], true ) ) {
		return '<p class="nb-card__meta is-style-meta"><span class="nb-card__meta--' . esc_attr( $role ) . '">' . wp_kses_post( $metaValue ) . '</span></p>';
	}

	return '<p class="nb-card__meta is-style-meta">' . wp_kses_post( $metaValue ) . '</p>';
}

function novablocks_get_card_item_title( string $title, array $attributes, $post = null ): string {
	// Bail if we don't have a title or we should not show it.
	if ( empty( $title ) || empty( $attributes['showTitle'] ) ) {
		return '';
	}

	$allowed_levels   = array( 1, 2, 3, 4, 5, 6 );
	$card_level       = in_array( (int) $attributes['cardTitleLevel'], $allowed_levels, true )
		? (int) $attributes['cardTitleLevel'] : 3;
	$titleTag         = 'h' . $card_level;
	$fontSizeModifier = 'has-' . sanitize_html_class( $attributes['cardTitleFontSize'] ) . '-font-size';

	// Default to the current, global post if not provided.
	if ( empty( $post ) ) {
		$post = get_post();
	}

	$output = '<' . $titleTag . ' class="nb-card__title ' . esc_attr( $fontSizeModifier ) . '">';
	$output .= novablocks_get_card_item_link( get_permalink( $post ), $attributes, 'open' );
	$output .= esc_html( $title );
	$output .= novablocks_get_card_item_link( get_permalink( $post ), $attributes, 'close' );
	$output .= '</' . $titleTag . '>';

	return $output;
}

function novablocks_get_card_item_subtitle( string $subtitle, array $attributes ): string {
	if ( empty( $subtitle ) || empty( $attributes['showSubtitle'] ) ) {
		return '';
	}

	$allowed_levels  = array( 1, 2, 3, 4, 5, 6 );
	$card_level      = in_array( (int) $attributes['cardTitleLevel'], $allowed_levels, true )
		? (int) $attributes['cardTitleLevel'] : 3;
	$subtitle_level  = min( $card_level + 1, 6 );
	$subtitleTag     = 'h' . $subtitle_level;

	return '<' . $subtitleTag . ' class="nb-card__subtitle">' . esc_html( $subtitle ) . '</' . $subtitleTag . '>';
}

function novablocks_get_card_item_description( string $description, array $attributes ): string {
	if ( empty( $description ) || empty( $attributes['showDescription'] ) ) {
		return '';
	}

	// Query Loop callers pass get_the_excerpt() output, which WP runs through
	// wpautop and returns wrapped in <p>…</p>. Nesting that inside our own
	// <p class="nb-card__description"> produces invalid markup; browsers
	// parse the inner <p> by auto-closing the outer, yielding an empty
	// .nb-card__description followed by an orphan <p> carrying the actual
	// text. That orphan escapes any styling scoped to .nb-card__description —
	// including the collection-level "Description Size" override. Strip the
	// outermost paragraph wrap so the excerpt merges cleanly into ours.
	$description = trim( $description );
	$description = preg_replace( '#^<p(?:\s[^>]*)?>(.*)</p>\s*$#is', '$1', $description );

	return '<p class="nb-card__description">' . wp_kses_post( $description ) . '</p>';
}

function novablocks_get_card_item_buttons( array $buttons, array $attributes ): string {
	if ( empty( $attributes['showButtons'] ) || empty( $buttons ) ) {
		return '';
	}

	$align = preg_split( '/\b\s+/', $attributes['contentPosition'] );

	$justify_content = 'center';

	if ( $align[1] === 'left' ) {
		$justify_content = 'flex-start';
	}

	if ( $align[1] === 'right' ) {
		$justify_content = 'flex-end';
	}

	$output = '';
	foreach ( $buttons as $button ) {
		// Button labels are plain text; strip any imported markup before escaping.
		$button_text = trim( wp_strip_all_tags( wp_specialchars_decode( (string) ( $button['text'] ?? '' ), ENT_QUOTES ) ) );
		if ( '' === $button_text ) {
			continue;
		}

		$target_attr = ! empty( $button['opensInNewTab'] ) ? ' target="_blank" rel="noopener noreferrer"' : '';

	$output .= '<div class="wp-block-buttons" style="justify-content: ' . esc_attr( $justify_content ) . '">
      <div
        class="wp-block-button is-style-' . esc_attr( $attributes['buttonsStyle'] ) . ' sm-color-signal-1 sm-palette-1 sm-palette--shifted sm-variation-1 sm-light"
        data-palette="1" data-palette-variation="1" data-color-signal="1" data-use-source-color-as-reference="true">
        <a class="wp-block-button__link" href="' . esc_url( $button['url'] ) . '"' . $target_attr . '>' . esc_html( $button_text ) . '</a>
      </div>
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
		$output = '<a href="' . esc_url( $url ) . '" class="nb-supernova-item__link"></a>';
	} else if ( $tag_direction == 'open' ) {
		$output = '<a href="' . esc_url( $url ) . '" class="nb-supernova-item__link">';
	} else if ( $tag_direction == 'close' ) {
		$output = '</a>';
	}

	return $output;
}

function novablocks_get_posts_collection_cards_markup( array $attributes, $content, $block ): string {
	global $novablocks_rendered_posts_ids;

	if ( ! $novablocks_rendered_posts_ids ) {
		$novablocks_rendered_posts_ids = [];
	}

	$output = '';

	$page = novablocks_get_query_loop_page( $block );

	// Use global query if needed.
	$use_global_query = ( isset( $block->context['query']['inherit'] ) && $block->context['query']['inherit'] );
	if ( $use_global_query ) {
		global $wp_query;
		$query = clone $wp_query;

		$prevent_duplicate_posts = get_post_meta( get_the_ID(), 'supernova_prevent_duplicate', true );
		if ( $prevent_duplicate_posts ) {
			$query->set( 'post__not_in', array_unique( array_merge( $query->get( 'post__not_in', [] ), $novablocks_rendered_posts_ids ) ) );
			$query->get_posts();
		}
	} else {
		if ( isset( $block->context['queryId'] ) ) {
			if ( function_exists( 'gutenberg_build_query_vars_from_query_block' ) ) {
				$query_args = gutenberg_build_query_vars_from_query_block( $block, $page );
			} else {
				$query_args = build_query_vars_from_query_block( $block, $page );
			}

			$prevent_duplicate_posts = get_post_meta( get_the_ID(), 'supernova_prevent_duplicate', true );
			if ( $prevent_duplicate_posts ) {
				$query_args['post__not_in'] = $novablocks_rendered_posts_ids;
			}
		} else {
			$query_args = novablocks_build_articles_query( $attributes, $block );
		}

		$query = new WP_Query( $query_args );
	}

	if ( ! $query->have_posts() ) {
		return $output;
	}

	// The recency card-expression class is anchored to the newest post of the
	// WHOLE query, not the current page's batch — otherwise page 2 / Load More
	// batches would re-anchor to their own newest and mark old posts fresh. A
	// one-post date-ordered probe keeps that anchor stable across pagination.
	// The underscore key never reaches markup — root data-* attributes were
	// already emitted from the block's own attributes.
	$newest_timestamp = 0;
	$anchor_vars      = array_merge( $query->query_vars, [
		'posts_per_page'         => 1,
		'paged'                  => 1,
		'offset'                 => 0,
		'orderby'                => 'date',
		'order'                  => 'DESC',
		'ignore_sticky_posts'    => true,
		'no_found_rows'          => true,
		'update_post_meta_cache' => false,
		'update_post_term_cache' => false,
	] );
	$anchor_query     = new WP_Query( $anchor_vars );

	if ( ! empty( $anchor_query->posts[0]->post_date_gmt ) ) {
		$newest_timestamp = (int) strtotime( (string) $anchor_query->posts[0]->post_date_gmt );
	}

	$attributes['_collectionNewestPostTimestamp'] = $newest_timestamp;

	while ( $query->have_posts() ) {
		$post = $query->next_post();

		$card_markup = novablocks_get_collection_card_markup_from_post( $post, $attributes );
		$markup      = apply_filters( 'novablocks/get_collection_card_markup', $card_markup, $post, $attributes );
		if ( ! empty( $markup ) ) {
			$output .= $markup;
			// Only remember posts that were actually rendered.
			$novablocks_rendered_posts_ids[] = $post->ID;
		}
	}

	wp_reset_postdata();

	return $output;
}

function novablocks_show_card_contents( array $attributes ): bool {
	$hide_hero_inner_content = isset( $attributes['contentType'] ) && $attributes['contentType'] === 'custom' &&
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
	$belowContentMeta = $postMeta[2];
	$output         .= novablocks_get_card_item_meta( $aboveTitleMeta, $attributes );
	$output         .= novablocks_get_card_item_title( $title, $attributes, $post );
	$output         .= novablocks_get_card_item_meta( $belowTitleMeta, $attributes );

	$excerpt = get_the_excerpt( $post );
	$output  .= novablocks_get_card_item_description( $excerpt, $attributes );
	$output  .= novablocks_get_card_item_meta( $belowContentMeta, $attributes );

	$output .= novablocks_get_card_item_buttons( [
		[
			'text' => esc_html__( 'Read More', '__plugin_txtd' ),
			'url'  => get_permalink( $post ),
		],
	], $attributes );

	return $output;
}

/**
 * Render a list of card element ids into content markup using post-derived
 * data (title, excerpt, Primary/Secondary meta sources). Mirrors
 * novablocks_get_card_items_markup but pulls content from the post.
 *
 * Media is rendered separately by the caller and must be excluded from $item_ids.
 */
function novablocks_get_post_card_items_markup( $post, array $item_ids, array $attributes ): string {

	$output       = '';
	$primarySrc   = $attributes['primaryMetadata']   ?? 'none';
	$secondarySrc = $attributes['secondaryMetadata'] ?? 'none';

	$primaryMeta   = '<span class="nb-card__meta--primary">' .
		novablocks_get_post_card_meta( $post, $primarySrc, $attributes ) . '</span>';
	$secondaryMeta = '<span class="nb-card__meta--secondary">' .
		novablocks_get_post_card_meta( $post, $secondarySrc, $attributes ) . '</span>';

	$primaryIsOutput   = $primarySrc   !== 'none';
	$secondaryIsOutput = $secondarySrc !== 'none';

	$title     = get_the_title( $post );
	$excerpt   = get_the_excerpt( $post );
	$permalink = get_permalink( $post );

	$count = count( $item_ids );
	for ( $i = 0; $i < $count; $i++ ) {
		$id   = $item_ids[ $i ];
		$next = $item_ids[ $i + 1 ] ?? null;

		// Combine adjacent Primary + Secondary into one <p> (same line).
		$is_meta_pair = (
			( $id === 'meta-primary'   && $next === 'meta-secondary' ) ||
			( $id === 'meta-secondary' && $next === 'meta-primary'   )
		);

		if ( $is_meta_pair && ! empty( $attributes['showMeta'] ) && ( $primaryIsOutput || $secondaryIsOutput ) ) {
			$first_meta  = $id === 'meta-primary' ? $primaryMeta  : $secondaryMeta;
			$second_meta = $id === 'meta-primary' ? $secondaryMeta : $primaryMeta;
			$first_on    = $id === 'meta-primary' ? $primaryIsOutput  : $secondaryIsOutput;
			$second_on   = $id === 'meta-primary' ? $secondaryIsOutput : $primaryIsOutput;

			if ( $first_on && $second_on ) {
				$output .= '<p class="nb-card__meta is-style-meta nb-card__meta-combined">'
					. $first_meta
					. '<span class="nb-card__meta-separator" aria-hidden="true"></span>'
					. $second_meta
					. '</p>';
			} elseif ( $first_on ) {
				$output .= '<p class="nb-card__meta is-style-meta">' . $first_meta . '</p>';
			} elseif ( $second_on ) {
				$output .= '<p class="nb-card__meta is-style-meta">' . $second_meta . '</p>';
			}
			$i++; // consume the paired sibling
			continue;
		}

		switch ( $id ) {
			case 'meta-primary':
				if ( ! empty( $attributes['showMeta'] ) && $primaryIsOutput ) {
					$output .= '<p class="nb-card__meta is-style-meta">' . $primaryMeta . '</p>';
				}
				break;
			case 'meta-secondary':
				if ( ! empty( $attributes['showMeta'] ) && $secondaryIsOutput ) {
					$output .= '<p class="nb-card__meta is-style-meta">' . $secondaryMeta . '</p>';
				}
				break;
			case 'title':
				$output .= novablocks_get_card_item_title( $title, $attributes, $post );
				break;
			case 'subtitle':
				// Post-driven cards do not expose a separate subtitle — skip.
				break;
			case 'description':
				$output .= novablocks_get_card_item_description( $excerpt, $attributes );
				break;
			case 'buttons':
				$output .= novablocks_get_card_item_buttons( [
					[
						'text' => esc_html__( 'Read More', '__plugin_txtd' ),
						'url'  => $permalink,
					],
				], $attributes );
				break;
		}
	}

	return $output;
}

/**
 * @param WP_Post $post
 * @param string $meta
 *
 * @return string|WP_Error
 */
function novablocks_get_post_card_meta( $post, $meta, array $attributes = [] ) {
	$linked_metadata = novablocks_collection_layout_recipe_supports( $attributes, 'linkedPostMetadata' );

	if ( $meta === 'author' ) {
		$author_name = get_the_author_meta( 'display_name', $post->post_author );

		if ( ! $linked_metadata ) {
			return esc_html( $author_name );
		}

		$author_url  = get_author_posts_url( $post->post_author );

		return '<a class="nb-card__meta-link nb-card__meta-link--author" href="' . esc_url( $author_url ) . '">'
			. esc_html( $author_name ) . '</a>';
	}

	if ( $meta === 'category' ) {
		// Map the meta according to the post type.
		switch ( $post->post_type ) {
			case 'product':
				$categories = get_the_terms( $post->ID, 'product_cat' );
				break;
			case 'portfolio':
				// This is the CPT possibly registered by Pixelgrade Care.
				$categories = get_the_terms( $post->ID, 'portfolio_type' );
				break;
			case 'gallery':
				// This is the CPT possibly registered by Pixelgrade Care.
				$categories = get_the_terms( $post->ID, 'gallery_type' );
				break;
			case 'testimonial':
				// This is the CPT possibly registered by Pixelgrade Care.
				// Testimonials don't have categories.
				return '';
			default:
				$categories = get_the_category( $post->ID );
				break;
		}

		if ( ! empty( $categories ) && ! is_wp_error( $categories ) ) {
			// Return only the first one.
			if ( ! $linked_metadata ) {
				return esc_html( $categories[0]->name );
			}

			$category_url = get_term_link( $categories[0] );
			if ( is_wp_error( $category_url ) ) {
				return esc_html( $categories[0]->name );
			}

			return '<a class="nb-card__meta-link nb-card__meta-link--category" href="' . esc_url( $category_url ) . '">'
				. esc_html( $categories[0]->name ) . '</a>';
		} else {
			return '';
		}
	}

	if ( $meta === 'comments' ) {
		$comments_number = absint( get_comments_number( $post->ID ) );

		if ( $comments_number === 0 ) {
			return esc_html__( 'No Comments', '__plugin_txtd' );
		}

		return esc_html(
			sprintf(
				/* translators: %s: The number of comments. */
				_nx(
					'%s Comment',
					'%s Comments',
					$comments_number,
					'comments title',
					'__plugin_txtd'
				),
				number_format_i18n( $comments_number )
			)
		);
	}

	if ( $meta === 'date' ) {
		if ( ! $linked_metadata ) {
			return esc_html( get_the_date( '', $post ) );
		}

		$date_url = get_day_link(
			(int) get_post_time( 'Y', false, $post ),
			(int) get_post_time( 'm', false, $post ),
			(int) get_post_time( 'd', false, $post )
		);

		return '<a class="nb-card__meta-link nb-card__meta-link--date" href="' . esc_url( $date_url ) . '">'
			. '<time datetime="' . esc_attr( get_the_date( 'c', $post ) ) . '">' . esc_html( get_the_date( '', $post ) ) . '</time>'
			. '</a>';
	}

	if ( $meta === 'author-date' ) {
		$author = novablocks_get_post_card_meta( $post, 'author', $attributes );
		$date   = novablocks_get_post_card_meta( $post, 'date', $attributes );

		return sprintf(
			/* translators: 1: author display name, 2: post date. */
			esc_html_x( 'By %1$s / %2$s', 'card author and date meta', '__plugin_txtd' ),
			$author,
			$date
		);
	}

	if ( $meta === 'tags' ) {
		// Map the meta according to the post type.
		switch ( $post->post_type ) {
			case 'product':
				$tags = get_the_terms( $post->ID, 'product_tag' );
				break;
			case 'portfolio':
				// This is the CPT possibly registered by Pixelgrade Care.
				$tags = get_the_terms( $post->ID, 'portfolio_tag' );
				break;
			case 'gallery':
				// This is the CPT possibly registered by Pixelgrade Care.
				$tags = get_the_terms( $post->ID, 'gallery_tag' );
				break;
			case 'testimonial':
				// This is the CPT possibly registered by Pixelgrade Care.
				// Testimonials don't have categories.
				return '';
			default:
				$tags = get_the_tags( $post->ID );
				break;
		}

		if ( ! empty( $tags ) && ! is_wp_error( $tags ) ) {
			$tag_names = array_map( 'novablocks_get_tag_name', $tags );

			return esc_html( join( ', ', $tag_names ) );
		} else {
			return '';
		}
	}

	if ( $meta == 'reading-time' ) {
		/* translators: %s: The post reading time in minutes. */
		return esc_html( sprintf( __( '%s min read', '__plugin_txtd' ), novablocks_get_post_reading_time_in_minutes( $post ) ) );
	}

	return '';
}

function novablocks_get_tag_name( WP_Term $tag ): string {
	return $tag->name;
}
