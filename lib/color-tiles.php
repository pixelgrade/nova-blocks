<?php
/**
 * Server-side Color Signal preset tiles (style-manager#210).
 *
 * The PHP twin of `packages/color-signal/src/presets/color-tiles.js` for the agent/server writer
 * (`wp pixelgrade blocks apply-preset`, `pixelgrade/apply-block-preset`). The tile DATA is not
 * duplicated: both sides read `packages/color-signal/src/presets/color-tiles.json`. What is
 * mirrored here is the small amount of Color Signal math a tile needs to resolve its stored
 * attributes for one block context — the same functions the editor's `update-blocks.js` runs
 * after every load — so an agent-applied tile derives as the same active tile in the editor and
 * survives the editor's recompute without a rewrite. `tests/node/color-tiles-parity.test.cjs`
 * runs the JS and PHP resolvers side by side over a context matrix and fails on any difference.
 *
 * Everything here is pure: palettes, the site variation offset and the block-type lookups arrive
 * through a context array, so the contract test runs without WordPress.
 *
 * @since   2.6.8
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The shared tile data (`roles` + `families` keyed by block name).
 *
 * @return array
 */
function novablocks_color_tiles_data(): array {
	static $data = null;

	if ( null === $data ) {
		$path = dirname( __DIR__ ) . '/packages/color-signal/src/presets/color-tiles.json';
		$json = is_readable( $path ) ? json_decode( (string) file_get_contents( $path ), true ) : null;
		$data = is_array( $json ) ? $json : [ 'roles' => [], 'families' => [] ];
	}

	return $data;
}

/**
 * Resolve a tile id OR a role slug to its family and tile.
 *
 * @param string $reference `button-action`, `action`, `light-surface`, ….
 * @return array|null `{ block, family, tile, role }` or null.
 */
function novablocks_color_tiles_find( string $reference ): ?array {
	$data = novablocks_color_tiles_data();
	$role = null;

	if ( isset( $data['roles'][ $reference ] ) ) {
		$role      = $reference;
		$reference = (string) $data['roles'][ $reference ]['tile'];
	}

	foreach ( (array) $data['families'] as $block_name => $family ) {
		foreach ( (array) $family['tiles'] as $tile ) {
			if ( $tile['id'] === $reference ) {
				return [
					'block'  => (string) $block_name,
					'family' => $family,
					'tile'   => $tile,
					'role'   => $role,
				];
			}
		}
	}

	return null;
}

/**
 * Every applicable reference (tile ids and role slugs), for error messages and discovery.
 *
 * @return array `[ reference => block name ]`.
 */
function novablocks_color_tiles_catalog(): array {
	$data    = novablocks_color_tiles_data();
	$catalog = [];

	foreach ( (array) $data['roles'] as $slug => $role ) {
		$catalog[ $slug ] = (string) $role['block'];
	}
	foreach ( (array) $data['families'] as $block_name => $family ) {
		foreach ( (array) $family['tiles'] as $tile ) {
			$catalog[ (string) $tile['id'] ] = (string) $block_name;
		}
	}

	return $catalog;
}

// ---------------------------------------------------------------------------------------------
// Color Signal math — mirrors packages/utils/src/color-signal.js and
// packages/color-signal/src/utils/index.js function for function.
// ---------------------------------------------------------------------------------------------

/**
 * `normalizeVariationValue()`.
 *
 * @param int $value Variation.
 * @return int 1–12.
 */
function novablocks_color_tiles_normalize( int $value ): int {
	return ( ( $value + 11 ) % 12 + 12 ) % 12 + 1;
}

/**
 * `@novablocks/utils` `getPaletteConfig()` — exact id match, no fallback.
 *
 * @param array  $ctx     Context.
 * @param string $palette Palette id.
 * @return array|null
 */
function novablocks_color_tiles_find_palette( array $ctx, string $palette ): ?array {
	foreach ( (array) $ctx['palettes'] as $candidate ) {
		if ( (string) ( $candidate['id'] ?? '' ) === $palette ) {
			return $candidate;
		}
	}

	return null;
}

/**
 * Color Signal's own `getPaletteConfig()` — falls back to the first palette, then to
 * `{ sourceIndex: 6 }` when there are none.
 *
 * @param array  $ctx     Context.
 * @param string $palette Palette id.
 * @return array
 */
function novablocks_color_tiles_palette_config( array $ctx, string $palette ): array {
	if ( empty( $ctx['palettes'] ) ) {
		return [ 'sourceIndex' => 6 ];
	}

	return novablocks_color_tiles_find_palette( $ctx, $palette ) ?? array_values( $ctx['palettes'] )[0];
}

/**
 * `getSignals()` — the variation each of the (up to) four signals lands on.
 *
 * @param array  $ctx     Context.
 * @param string $palette Palette id.
 * @return int[]
 */
function novablocks_color_tiles_signals( array $ctx, string $palette ): array {
	$config  = novablocks_color_tiles_find_palette( $ctx, $palette );
	$default = [ 1, 3, 8, 11 ];

	if ( null === $config || empty( $config['variations'] ) || ! is_array( $config['variations'] ) ) {
		return $default;
	}

	$colors = [];
	if ( ! empty( $config['colors'] ) && is_array( $config['colors'] ) ) {
		foreach ( $config['colors'] as $color ) {
			$value = is_array( $color ) ? ( $color['value'] ?? '' ) : $color;
			if ( is_string( $value ) && '' !== $value ) {
				$colors[] = $value;
			}
		}
	} else {
		foreach ( $config['variations'] as $variation ) {
			if ( ! empty( $variation['bg'] ) ) {
				$colors[] = (string) $variation['bg'];
			}
		}
	}

	if ( empty( $colors ) ) {
		return $default;
	}

	$count       = min( count( $colors ), 4 );
	$chunk       = count( $colors ) / $count;
	$backgrounds = array_map(
		static function ( $variation ) {
			return strtolower( (string) ( $variation['bg'] ?? '' ) );
		},
		array_values( $config['variations'] )
	);
	$signals     = [];

	for ( $i = 0; $i < $count; $i++ ) {
		// Array.prototype.slice() truncates fractional bounds.
		$start_index = (int) ( $chunk * $i );
		$end_index   = (int) ( $chunk * ( $i + 1 ) );
		$group       = array_slice( $colors, $start_index, max( 0, $end_index - $start_index ) );
		$first       = strtolower( (string) $group[0] );
		$last        = strtolower( (string) $group[ count( $group ) - 1 ] );
		$start       = array_search( $first, $backgrounds, true );
		$start       = false === $start ? -1 : (int) $start;
		$end         = -1;
		foreach ( $backgrounds as $index => $background ) {
			if ( $background === $last ) {
				$end = (int) $index;
			}
		}
		$signals[] = (int) floor( $start * 0.5 + $end * 0.5 ) + 1;
	}

	return $signals;
}

/**
 * `getSignalOptionsFromVariation()`. V8 sorts with a stable binary-insertion sort for arrays
 * this short, and the comparator treats ties as "keep order", so a stable sort by distance
 * reproduces it exactly.
 *
 * @param array  $ctx       Context.
 * @param int    $variation Reference variation.
 * @param string $palette   Palette id.
 * @return int[]
 */
function novablocks_color_tiles_signal_options( array $ctx, int $variation, string $palette ): array {
	$options   = novablocks_color_tiles_signals( $ctx, $palette );
	$decorated = [];

	foreach ( $options as $index => $option ) {
		$decorated[] = [ abs( $variation - $option ), $index, $option ];
	}

	usort(
		$decorated,
		static function ( $a, $b ) {
			return $a[0] === $b[0] ? $a[1] <=> $b[1] : $a[0] <=> $b[0];
		}
	);

	$sorted    = array_column( $decorated, 2 );
	$sorted[0] = $variation;

	return $sorted;
}

/**
 * `getSignalRelativeToVariation()`.
 *
 * @param array  $ctx       Context.
 * @param int    $compared  Absolute variation to classify.
 * @param int    $reference Absolute reference variation.
 * @param string $palette   Palette id.
 * @return int
 */
function novablocks_color_tiles_signal_relative( array $ctx, int $compared, int $reference, string $palette ): int {
	$options = novablocks_color_tiles_signal_options( $ctx, $reference, $palette );
	$signal  = 0;

	foreach ( $options as $index => $option ) {
		if ( abs( $option - $compared ) < abs( $options[ $signal ] - $compared ) ) {
			$signal = $index;
		}
	}

	$config = novablocks_color_tiles_palette_config( $ctx, $palette );

	// JS `! palette.colors`: an empty array is truthy there, so test for falsy scalars only.
	if ( ! isset( $config['colors'] ) || in_array( $config['colors'], [ false, '', 0 ], true ) ) {
		return $signal;
	}

	$colors = $config['colors'];
	if ( isset( $config['variations'] ) && is_array( $config['variations'] ) ) {
		$colors = array_map(
			static function ( $variation ) {
				return $variation['bg'] ?? null;
			},
			array_values( $config['variations'] )
		);
	}

	$compared_color  = $colors[ $compared - 1 ] ?? null;
	$reference_color = $colors[ $reference - 1 ] ?? null;

	return $compared_color === $reference_color ? 0 : max( 1, $signal );
}

/**
 * `computeColorSignal()`: the variation a signal lands on from a reference, keeping the current
 * variation when it already produces that signal.
 *
 * @param array    $ctx        Context.
 * @param int      $reference  Absolute reference variation.
 * @param int      $signal     Desired signal.
 * @param string   $palette    Palette id.
 * @param int|null $variation  Current absolute variation, if any.
 * @return int Absolute variation.
 */
function novablocks_color_tiles_compute_signal( array $ctx, int $reference, int $signal, string $palette, ?int $variation = null ): int {
	$options = novablocks_color_tiles_signal_options( $ctx, $reference, $palette );

	if ( null !== $variation && novablocks_color_tiles_signal_relative( $ctx, $variation, $reference, $palette ) === $signal ) {
		return $variation;
	}

	return (int) $options[ min( count( $options ) - 1, $signal ) ];
}

/**
 * `addSiteVariationOffset()`.
 *
 * @param array $ctx       Context.
 * @param int   $variation Variation.
 * @return int
 */
function novablocks_color_tiles_add_offset( array $ctx, int $variation ): int {
	return novablocks_color_tiles_normalize( $variation + (int) $ctx['site_variation'] - 1 );
}

/**
 * `removeSiteVariationOffset()`.
 *
 * @param array $ctx       Context.
 * @param int   $variation Variation.
 * @return int
 */
function novablocks_color_tiles_remove_offset( array $ctx, int $variation ): int {
	return novablocks_color_tiles_normalize( $variation - (int) $ctx['site_variation'] + 1 );
}

/**
 * `getAbsoluteColorVariation()`.
 *
 * @param array $ctx        Context.
 * @param array $attributes Block attributes (defaults applied).
 * @return int
 */
function novablocks_color_tiles_absolute_variation( array $ctx, array $attributes ): int {
	$palette = (string) ( $attributes['palette'] ?? '1' );
	$config  = novablocks_color_tiles_palette_config( $ctx, $palette );
	$source  = ( (int) ( $config['sourceIndex'] ?? 6 ) - (int) $ctx['site_variation'] + 1 + 12 ) % 12;
	$value   = ! empty( $attributes['useSourceColorAsReference'] ) ? $source + 1 : (int) ( $attributes['paletteVariation'] ?? 1 );

	return novablocks_color_tiles_add_offset( $ctx, $value );
}

// ---------------------------------------------------------------------------------------------
// Tiles and the managed-bundle engine (packages/block-editor/src/preset-engine).
// ---------------------------------------------------------------------------------------------

/**
 * `resolveColorTile()`: a tile's stored values for one block context.
 *
 * @param array $ctx       Context.
 * @param array $family    Family.
 * @param array $tile      Tile.
 * @param int   $reference The context's absolute reference variation.
 * @return array
 */
function novablocks_color_tiles_resolve( array $ctx, array $family, array $tile, int $reference ): array {
	$kind = $tile['kind'] ?? 'variation';

	if ( 'default' === $kind ) {
		return [];
	}

	if ( 'source' === $kind ) {
		$palette  = (string) $tile['palette'];
		$source   = novablocks_color_tiles_absolute_variation(
			$ctx,
			[
				'palette'                   => $palette,
				'paletteVariation'          => 1,
				'useSourceColorAsReference' => true,
			]
		);
		$relative = novablocks_color_tiles_signal_relative( $ctx, $source, $reference, $palette );
		$signal   = max( (int) ( $family['minColorSignal'] ?? 0 ), $relative );

		if ( 0 !== $relative ) {
			// v2: a REFERENCE to the palette source color, the form the mount keeps for a Button
			// (stickySourceColor 'keep', which mirrors the stored variation 1 into the content
			// variation), so the button follows palette changes. See color-tiles.js.
			return [
				'useColorSignal'            => true,
				'useParentPalette'          => false,
				'palette'                   => $palette,
				'paletteVariation'          => 1,
				'colorSignal'               => $signal,
				'useSourceColorAsReference' => true,
				'contentPaletteVariation'   => 1,
			];
		}

		// The surface IS the source color: step off it as an explicit variation.
		$stored = novablocks_color_tiles_remove_offset( $ctx, novablocks_color_tiles_compute_signal( $ctx, $reference, $signal, $palette, $source ) );

		return [
			'useColorSignal'            => true,
			'useParentPalette'          => false,
			'palette'                   => $palette,
			'paletteVariation'          => $stored,
			'colorSignal'               => $signal,
			'useSourceColorAsReference' => false,
			'contentPaletteVariation'   => $stored,
		];
	}

	$variation = (int) $tile['variation'];

	return [
		'palette'                   => (string) $tile['palette'],
		'paletteVariation'          => novablocks_color_tiles_remove_offset( $ctx, $variation ),
		'colorSignal'               => novablocks_color_tiles_signal_relative( $ctx, $variation, $reference, (string) $tile['palette'] ),
		'useSourceColorAsReference' => false,
	];
}

/**
 * Apply a tile to a block's STORED attributes, the way the editor's one `setAttributes()` patch
 * followed by WordPress' serializer would leave them: every declared value is written, every
 * omitted managed attribute is cleared to its registered default, and — because the serializer
 * omits default-equal attributes — any managed attribute equal to its default (or without one)
 * is removed from the comment. Attributes outside the managed boundary are never touched.
 *
 * @param array $attributes Stored (comment) attributes.
 * @param array $managed    The family's managed attributes.
 * @param array $values     Resolved tile values.
 * @param array $defaults   Registered defaults (`name => default`; absent = no default).
 * @return array New stored attributes.
 */
function novablocks_color_tiles_apply( array $attributes, array $managed, array $values, array $defaults ): array {
	foreach ( $managed as $attribute ) {
		$has_default = array_key_exists( $attribute, $defaults );
		$value       = array_key_exists( $attribute, $values ) ? $values[ $attribute ] : ( $has_default ? $defaults[ $attribute ] : null );

		if ( null === $value || ( $has_default && $value === $defaults[ $attribute ] ) ) {
			unset( $attributes[ $attribute ] );
			continue;
		}

		$attributes[ $attribute ] = $value;
	}

	return $attributes;
}

/**
 * The one other write the editor makes on mount (`getUpdatedAttributes()` via
 * `withUpdatedAttributes`): with no content signal, `contentPaletteVariation` mirrors the block
 * variation. Applying it here makes the writer's output the state the editor settles on, so opening the
 * post does not turn it dirty. It is not part of the Row Surface boundary (those published
 * definitions stay as they are); it is the editor's own normalization, reproduced.
 *
 * @param array             $attributes Stored attributes after the tile patch.
 * @param array             $defaults   Registered defaults.
 * @param array|bool|null   $support    The block's Color Signal support.
 * @return array
 */
function novablocks_color_tiles_mount_normalize( array $attributes, array $defaults, $support ): array {
	$activation = is_array( $support ) ? (string) ( $support['activationAttribute'] ?? '' ) : '';

	if ( null === $support || false === $support || ( '' !== $activation && true !== ( $attributes[ $activation ] ?? $defaults[ $activation ] ?? false ) ) ) {
		return $attributes;
	}

	if ( 0 !== (int) ( $attributes['contentColorSignal'] ?? $defaults['contentColorSignal'] ?? 0 ) ) {
		return $attributes;
	}

	$variation = $attributes['paletteVariation'] ?? $defaults['paletteVariation'] ?? 1;

	if ( array_key_exists( 'contentPaletteVariation', $defaults ) && $variation === $defaults['contentPaletteVariation'] ) {
		unset( $attributes['contentPaletteVariation'] );
	} else {
		$attributes['contentPaletteVariation'] = $variation;
	}

	return $attributes;
}

/**
 * `deriveActivePresetId()` over a family resolved for one context.
 *
 * @param array $definitions `[ tile id => resolved values ]`, in family order.
 * @param array $managed     Managed attributes.
 * @param array $attributes  Stored attributes.
 * @param array $defaults    Registered defaults.
 * @return string|null Tile id, or null for Custom.
 */
function novablocks_color_tiles_derive( array $definitions, array $managed, array $attributes, array $defaults ): ?string {
	$normalize = static function ( $value, $attribute ) use ( $defaults ) {
		return null !== $value ? $value : ( $defaults[ $attribute ] ?? null );
	};

	foreach ( $definitions as $id => $values ) {
		$match = true;
		foreach ( $managed as $attribute ) {
			if ( $normalize( $attributes[ $attribute ] ?? null, $attribute ) !== $normalize( $values[ $attribute ] ?? null, $attribute ) ) {
				$match = false;
				break;
			}
		}
		if ( $match ) {
			return (string) $id;
		}
	}

	return null;
}

// ---------------------------------------------------------------------------------------------
// Block tree context (the editor's getParentColorContext() + the Presets-tab gate).
// ---------------------------------------------------------------------------------------------

/**
 * Locate a block in a parsed tree.
 *
 * `$selector` is a dotted index path over NAMED blocks (whitespace/freeform entries are skipped),
 * e.g. `0` for the first top-level block and `2.0.1` for a nested one; or `anchor:<id>`; or
 * `class:<name>` (first block whose `className` contains that class, document order).
 *
 * @param array  $blocks   `parse_blocks()` output.
 * @param string $selector Selector.
 * @return array|null `{ path: int[] (raw innerBlocks indices), ancestors: array[] (nearest last) }`.
 */
function novablocks_color_tiles_locate( array $blocks, string $selector ): ?array {
	$selector = trim( $selector );

	if ( preg_match( '/^\d+(\.\d+)*$/', $selector ) ) {
		$want      = array_map( 'intval', explode( '.', $selector ) );
		$path      = [];
		$ancestors = [];
		$level     = $blocks;

		foreach ( $want as $depth => $named_index ) {
			$seen  = -1;
			$found = null;
			foreach ( $level as $raw_index => $block ) {
				if ( empty( $block['blockName'] ) ) {
					continue;
				}
				++$seen;
				if ( $seen === $named_index ) {
					$found = $raw_index;
					break;
				}
			}
			if ( null === $found ) {
				return null;
			}
			$path[] = $found;
			if ( $depth < count( $want ) - 1 ) {
				$ancestors[] = $level[ $found ];
				$level       = (array) ( $level[ $found ]['innerBlocks'] ?? [] );
			}
		}

		return [
			'path'      => $path,
			'ancestors' => $ancestors,
		];
	}

	if ( ! preg_match( '/^(anchor|class):(.+)$/', $selector, $m ) ) {
		return null;
	}

	$walk = static function ( array $level, array $path, array $ancestors ) use ( &$walk, $m ) {
		foreach ( $level as $raw_index => $block ) {
			if ( empty( $block['blockName'] ) ) {
				continue;
			}
			$attributes = (array) ( $block['attrs'] ?? [] );
			$hit        = 'anchor' === $m[1]
				? ( (string) ( $attributes['anchor'] ?? '' ) === $m[2] )
				: in_array( $m[2], preg_split( '/\s+/', (string) ( $attributes['className'] ?? '' ) ), true );

			if ( $hit ) {
				return [
					'path'      => array_merge( $path, [ $raw_index ] ),
					'ancestors' => $ancestors,
				];
			}

			$inner = $walk( (array) ( $block['innerBlocks'] ?? [] ), array_merge( $path, [ $raw_index ] ), array_merge( $ancestors, [ $block ] ) );
			if ( null !== $inner ) {
				return $inner;
			}
		}

		return null;
	};

	return $walk( $blocks, [], [] );
}

/**
 * Read the block at a raw path.
 *
 * @param array $blocks Tree.
 * @param int[] $path   Raw path.
 * @return array
 */
function novablocks_color_tiles_get_block( array $blocks, array $path ): array {
	$block = [ 'innerBlocks' => $blocks ];
	foreach ( $path as $index ) {
		$block = $block['innerBlocks'][ $index ];
	}

	return $block;
}

/**
 * Whether a class token is Color Signal save output (`getColorSignalClassnames()`).
 *
 * @param string $token Class token.
 * @return bool
 */
function novablocks_color_tiles_is_output_class( string $token ): bool {
	return (bool) preg_match( '/^sm-(palette-[A-Za-z0-9_]+|palette--shifted|variation-\d+|color-signal-\d+)$/', $token );
}

/**
 * Remove Color Signal save-output classes from a block's root element and `className`.
 *
 * The writer re-serializes the block through the editor's save by letting the harness rebuild
 * it. That rebuild runs WordPress' custom-class-name parse, which folds every class present in
 * the stored root element but absent from the new save output into `className` — so the
 * PREVIOUS tile's `sm-variation-*` / `sm-color-signal-*` / `sm-palette-*` classes would survive
 * as "custom" classes and fight the new ones. The editor never hits this (it re-saves a valid
 * block from its attributes); stripping them first makes the writer land where the editor does.
 *
 * @param array $block Parsed block.
 * @return array Block.
 */
function novablocks_color_tiles_strip_output_classes( array $block ): array {
	$strip = static function ( string $classes ): string {
		$kept = array_filter(
			preg_split( '/\s+/', trim( $classes ) ),
			static function ( $token ) {
				return '' !== $token && ! novablocks_color_tiles_is_output_class( $token );
			}
		);

		return implode( ' ', $kept );
	};

	$strip_root = static function ( $html ) use ( $strip ) {
		if ( ! is_string( $html ) ) {
			return $html;
		}

		return preg_replace_callback(
			'/^(\s*<[a-zA-Z][^>]*?\sclass=")([^"]*)(")/',
			static function ( $m ) use ( $strip ) {
				return $m[1] . $strip( $m[2] ) . $m[3];
			},
			$html,
			1
		);
	};

	if ( isset( $block['innerContent'][0] ) ) {
		$block['innerContent'][0] = $strip_root( $block['innerContent'][0] );
	}
	if ( isset( $block['innerHTML'] ) ) {
		$block['innerHTML'] = $strip_root( $block['innerHTML'] );
	}
	if ( isset( $block['attrs']['className'] ) && is_string( $block['attrs']['className'] ) ) {
		$class_name = $strip( $block['attrs']['className'] );
		if ( '' === $class_name ) {
			unset( $block['attrs']['className'] );
		} else {
			$block['attrs']['className'] = $class_name;
		}
	}

	return $block;
}

/**
 * Replace the block at a raw path.
 *
 * @param array $blocks Tree.
 * @param int[] $path   Raw path.
 * @param array $block  Replacement.
 * @return array Tree.
 */
function novablocks_color_tiles_replace_block( array $blocks, array $path, array $block ): array {
	$index = array_shift( $path );

	if ( empty( $path ) ) {
		$blocks[ $index ] = $block;
	} else {
		$blocks[ $index ]['innerBlocks'] = novablocks_color_tiles_replace_block( (array) $blocks[ $index ]['innerBlocks'], $path, $block );
	}

	return $blocks;
}

/**
 * The editor's parent reference for a block: the nearest ancestor that provides a Color Signal
 * context and is active (an inactive opt-in wrapper is skipped), else the site variation.
 *
 * @param array $ctx       Context (`support` / `defaults` callables).
 * @param array $ancestors Ancestors, nearest LAST.
 * @return int Absolute reference variation.
 */
function novablocks_color_tiles_reference( array $ctx, array $ancestors ): int {
	foreach ( array_reverse( $ancestors ) as $ancestor ) {
		$name    = (string) ( $ancestor['blockName'] ?? '' );
		$support = '' === $name ? null : call_user_func( $ctx['support'], $name );

		if ( null === $support || false === $support ) {
			continue;
		}

		$provides = true === $support || ( is_array( $support ) && ( $support['providesContext'] ?? true ) !== false );
		if ( ! $provides ) {
			continue;
		}

		$attributes = array_merge( (array) call_user_func( $ctx['defaults'], $name ), (array) ( $ancestor['attrs'] ?? [] ) );
		$activation = is_array( $support ) ? ( $support['activationAttribute'] ?? '' ) : '';

		if ( '' !== $activation && true !== ( $attributes[ $activation ] ?? false ) && 'true' !== ( $attributes[ $activation ] ?? false ) ) {
			continue;
		}

		return novablocks_color_tiles_absolute_variation( $ctx, $attributes );
	}

	return (int) $ctx['site_variation'];
}

/**
 * The Presets-tab gate: a direct parent with `contentColorSignal` support force-syncs this
 * block's palette variation (update-blocks.js), so no tile promise can hold under it.
 *
 * @param array $ctx       Context.
 * @param array $ancestors Ancestors, nearest LAST.
 * @return bool
 */
function novablocks_color_tiles_parent_forces_sync( array $ctx, array $ancestors ): bool {
	if ( empty( $ancestors ) ) {
		return false;
	}

	$parent  = $ancestors[ count( $ancestors ) - 1 ];
	$support = call_user_func( $ctx['support'], (string) ( $parent['blockName'] ?? '' ) );

	return true === $support || ( is_array( $support ) && ! empty( $support['contentColorSignal'] ) );
}

/**
 * The live context: Style Manager palettes (the same payload the editor store receives), the
 * Palette Basis Offset, and block-type lookups for supports and registered defaults.
 *
 * @return array
 */
function novablocks_color_tiles_live_context(): array {
	$palettes = function_exists( 'novablocks_get_palette_settings_fragment' ) ? novablocks_get_palette_settings_fragment() : [];
	$palettes = json_decode( (string) wp_json_encode( $palettes['palettes'] ?? [] ), true );

	$site_variation = function_exists( '\Pixelgrade\StyleManager\get_option' )
		? \Pixelgrade\StyleManager\get_option( 'sm_site_color_variation', 1 )
		: get_option( 'sm_site_color_variation', 1 );

	return [
		'palettes'       => is_array( $palettes ) ? array_values( $palettes ) : [],
		'site_variation' => max( 1, min( 12, (int) $site_variation ) ),
		'support'        => 'novablocks_color_tiles_block_support',
		'defaults'       => 'novablocks_color_tiles_block_defaults',
	];
}

/**
 * Color Signal support for a block type, as the editor registers it.
 *
 * @param string $name Block name.
 * @return array|bool|null
 */
function novablocks_color_tiles_block_support( string $name ) {
	if ( function_exists( 'novablocks_get_core_color_signal_describe_support' ) ) {
		$core = novablocks_get_core_color_signal_describe_support( $name );
		if ( null !== $core ) {
			return $core;
		}
	}

	if ( 'core/post-terms' === $name ) {
		// Extended in the editor only (packages/core/src/blocks/core/post-terms/index.js).
		return [
			'contentColorSignal'          => true,
			'inheritParentPalette'        => true,
			'paletteInheritanceAttribute' => 'useParentPalette',
		];
	}

	$type = class_exists( 'WP_Block_Type_Registry' ) ? WP_Block_Type_Registry::get_instance()->get_registered( $name ) : null;

	return $type && isset( $type->supports['novaBlocks']['colorSignal'] ) ? $type->supports['novaBlocks']['colorSignal'] : null;
}

/**
 * Registered attribute defaults for a block type, as the editor registers them.
 *
 * @param string $name Block name.
 * @return array `name => default` (attributes without a default are absent).
 */
function novablocks_color_tiles_block_defaults( string $name ): array {
	$schemas = [];

	if ( function_exists( 'novablocks_get_core_color_signal_describe_attributes' ) ) {
		$schemas = novablocks_get_core_color_signal_describe_attributes( $name );
	}

	if ( empty( $schemas ) && function_exists( 'novablocks_get_attributes_from_json' ) ) {
		$schemas = (array) novablocks_get_attributes_from_json( 'packages/color-signal/src/attributes.json' );
		$type    = class_exists( 'WP_Block_Type_Registry' ) ? WP_Block_Type_Registry::get_instance()->get_registered( $name ) : null;
		if ( $type && is_array( $type->attributes ) ) {
			$schemas = array_merge( $schemas, $type->attributes );
		}
	}

	$defaults = [];
	foreach ( (array) $schemas as $attribute => $schema ) {
		if ( is_array( $schema ) && array_key_exists( 'default', $schema ) ) {
			$defaults[ $attribute ] = $schema['default'];
		}
	}

	return $defaults;
}
