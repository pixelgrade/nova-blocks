<?php
/**
 * Curated value-vocabulary for `wp pixelgrade blocks describe` (agentic-stack W9).
 *
 * `blocks list --attributes` reports only each attribute's `type` + `default` (801 attributes,
 * 1 enum) — enough to know an attribute EXISTS, never enough to know its valid VALUES. The value
 * vocabulary (stylePreset ids, arrangement grid|chain, emphasisArea 0-100/5, spacing ranges, the
 * collection layout recipes …) lives in the editor UI and in George's private gene-migration
 * reference, not in any server-readable registry. `describe` closes that gap, and this file is its
 * curated half.
 *
 * TWO vocabulary sources feed `describe` (gap report `nova-blocks-options-coverage.md` §4):
 *
 *   (a) BUNDLE — free, PHP-only: `novablocks_get_block_editor_settings()` already carries the
 *       bundle-level enums (style presets, motion presets, scrolling effects) and the collection
 *       layout recipes. `novablocks_blocks_describe_bundle_vocabulary()` maps those onto the
 *       attributes they govern. Source token: "bundle".
 *
 *   (b) CURATED — the harder half: ~12 JS control components hold plain enums and RangeControl
 *       min/max/step as inline literals, with NO aggregating registry. They are hand-harvested
 *       here into a static, reviewable table, each entry citing the control file:line it was read
 *       from so a reviewer can re-verify it against source. Cross-checked against the existing
 *       gene-migration reference (`~/.claude/skills/gene-migration/references/block-reference/`),
 *       which is the ground truth for what gene-migration authoring needs. Source token: "curated".
 *
 * HONESTY RULE (contract discipline): an attribute with no bundle and no curated entry gets
 * `vocabulary: null`, `source: "none"` — describe never invents an enum it did not verify. When
 * these JS literals change, this table drifts silently (there is no test that pins a JS RangeControl
 * to a PHP row); the citations exist precisely so the drift is cheap to re-audit.
 *
 * @since   2.6.4
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The curated JS-control vocabulary, keyed by block name then attribute, with a `'*'` bucket for
 * the cross-cutting shared attribute sets (Color Signal, Media Composition, Space & Sizing) that
 * `init.php` merges into many blocks. Resolution precedence (see the resolver below) is
 * block-specific → cross-cutting → bundle → none, so a block may override a shared default.
 *
 * Each entry is one of:
 *   [ 'enum'  => [values…], 'labels' => [value=>label], 'note' => '…' ]
 *   [ 'range' => [ 'min'=>n, 'max'=>n, 'step'=>n ], 'note' => '…' ]
 * `note` and `labels` are optional. Ranges without an explicit `step` in source omit `step`.
 *
 * @return array
 */
function novablocks_blocks_describe_curated_vocabulary(): array {
	return [
		// -----------------------------------------------------------------------------------
		// Cross-cutting shared attribute sets — merged into any block whose supports opt in.
		// -----------------------------------------------------------------------------------
		'*' => [
			// Color Signal (packages/color-signal). Values verified against
			// get-color-signal-levels.js:6-12 (COLOR_SIGNAL_LEVEL_LABELS) and the
			// gene-migration color-signal.md attribute table.
			'colorSignal'               => [
				// block-color-signal-control/index.js: max = getMaxSignal( palette ),
				// utils/index.js:202-206 → getSignals(palette).length - 1; the default
				// palette yields 4 signals, so 0..3. A palette with more grades can raise
				// the max, which is why this is an "enum of the default set" with a note.
				'enum'   => [ 0, 1, 2, 3 ],
				'labels' => [ 0 => 'None', 1 => 'Low', 2 => 'Medium', 3 => 'High' ],
				'note'   => 'Contextual color intent relative to the parent. Default anchors map signal→variation 0→1, 1→3, 2→8, 3→11. Max is getMaxSignal(palette) (default 3); a block may clamp via supports minColorSignal/maxColorSignal.',
			],
			'contentColorSignal'        => [
				// Same signal machinery, for the block's content area (Supernova hosts).
				'enum'   => [ 0, 1, 2, 3 ],
				'labels' => [ 0 => 'None', 1 => 'Low', 2 => 'Medium', 3 => 'High' ],
				'note'   => 'Color signal of the block\'s content area (hosts with contentColorSignal support, e.g. Supernova).',
			],
			'paletteVariation'          => [
				// color-signal attributes.json / color-signal.md: integer 1-12, wrapped by
				// (v + 11) % 12 + 1. 1 = lightest grade, 12 = darkest.
				'range' => [ 'min' => 1, 'max' => 12, 'step' => 1 ],
				'note'  => 'Which palette grade paints the block background → sm-variation-{n}. 1 = lightest, 12 = darkest. Normally kept in sync with colorSignal automatically; set it directly only to pin a grade.',
			],
			'contentPaletteVariation'   => [
				'range' => [ 'min' => 1, 'max' => 12, 'step' => 1 ],
				'note'  => 'Resolved grade of the content area; keep consistent with contentColorSignal.',
			],
			'emphasisArea'              => [
				// emphasis-area-control/index.js:20-22 → min=0 max=100 step=5.
				'range' => [ 'min' => 0, 'max' => 100, 'step' => 5 ],
				'note'  => 'Percentage of block width covered by the colored background. Only meaningful on horizontal Supernova cards (cardLayout horizontal / horizontal-reverse).',
			],

			// Media Composition (packages/media-composition/src/controls/media-composition-section.js).
			'arrangement'               => [
				// media-composition-section.js:75-78 → RadioControl grid|chain.
				'enum' => [ 'grid', 'chain' ],
				'note' => 'grid = classic 2-column placement math; chain = corner-chain / staircase (the Editorial Pair preset).',
			],
			'sizeContrast'              => [
				// media-composition-section.js:83-87 → min=0 max=100 step=20.
				'range' => [ 'min' => 0, 'max' => 100, 'step' => 20 ],
			],
			'positionShift'             => [
				// media-composition-section.js:91-96 → min=0 max=100 step=5.
				'range' => [ 'min' => 0, 'max' => 100, 'step' => 5 ],
			],
			'elementsDistance'          => [
				// media-composition-section.js:100-105 → min=0 max=100 step=20.
				'range' => [ 'min' => 0, 'max' => 100, 'step' => 20 ],
			],
			'placementVariation'        => [
				// media-composition-section.js:109-114 → min=25 max=100 step=25.
				// (Presets also emit 0 and 50; see media-composition.md.)
				'range' => [ 'min' => 25, 'max' => 100, 'step' => 25 ],
				'note'  => 'Mirrors the arrangement: 25 as-is, 50 flipped horizontally, 75 flipped both, 100 flipped vertically. Presets also emit 0 and 50.',
			],
			'imageRotation'             => [
				// media-composition-section.js:118-123 → min=0 max=100 step=10.
				'range' => [ 'min' => 0, 'max' => 100, 'step' => 10 ],
			],
			'objectPosition'            => [
				// media-composition-section.js:129-135 → min=0 max=100 step=10.
				'range' => [ 'min' => 0, 'max' => 100, 'step' => 10 ],
			],
			'imageResizing'             => [
				// media-composition-section.js:171-174 → RadioControl cropped|original.
				'enum' => [ 'cropped', 'original' ],
				'note' => 'cropped → object-fit: cover; original → object-fit: scale-down (no crop).',
			],

			// Space & Sizing (packages/block-editor/src/filters/with-space-and-sizing/controls/).
			'contentAreaWidth'          => [
				// visual-balance.js:26-28 with visual-balance-constants.js (MIN 30, MAX 90), step 5.
				'range' => [ 'min' => 30, 'max' => 90, 'step' => 5 ],
				'note'  => 'Content column width as a % of the media area, on split (media + content) layouts.',
			],
			'blockTopSpacing'           => [
				// card-spacing-settings.js:14-17 (blockSpacingMin -3 / blockSpacingMax 3).
				'range' => [ 'min' => -3, 'max' => 3, 'step' => 1 ],
				'note'  => 'Vertical spacing step above the block (negative overlaps the previous block).',
			],
			'blockBottomSpacing'        => [
				'range' => [ 'min' => -3, 'max' => 3, 'step' => 1 ],
				'note'  => 'Vertical spacing step below the block (negative overlaps the next block).',
			],
			'emphasisTopSpacing'        => [
				// card-spacing-settings.js:15-16 → contentSpacingMax 3; contentSpacingMin is
				// -3 only when supports novaBlocks.spaceAndSizing.advancedSpacing, else 0.
				'range' => [ 'min' => -3, 'max' => 3, 'step' => 1 ],
				'note'  => 'Content-area top spacing. Min is -3 only when the block supports advancedSpacing, otherwise 0.',
			],
			'emphasisBottomSpacing'     => [
				'range' => [ 'min' => -3, 'max' => 3, 'step' => 1 ],
				'note'  => 'Content-area bottom spacing. Min is -3 only when the block supports advancedSpacing, otherwise 0.',
			],
			'spacingMultiplierOverride' => [
				// with-space-and-sizing/controls/index.js:100-102 → min=0 max=4 step=0.5.
				'range' => [ 'min' => 0, 'max' => 4, 'step' => 0.5 ],
				'note'  => 'Overrides the block\'s own vertical spacing scale.',
			],
			'spacingModifier'           => [
				// with-space-and-sizing/controls/index.js:117-119 → min=0 max=2 step=0.5.
				'range' => [ 'min' => 0, 'max' => 2, 'step' => 0.5 ],
				'note'  => 'Spacing scale applied to inside/child elements. 0 zeroes descendants\' spacing controls.',
			],
			'mediaContainerHeight'      => [
				// with-space-and-sizing/controls/index.js:83-85 → min=0 max=100 step=5.
				'range' => [ 'min' => 0, 'max' => 100, 'step' => 5 ],
			],
			'contentPadding'            => [
				// content-padding.js:42-44 → min=0 max=100 step=10.
				'range' => [ 'min' => 0, 'max' => 100, 'step' => 10 ],
			],
			'imagePadding'              => [
				// media-padding.js:25-27 → min=0 max=100 step=25.
				'range' => [ 'min' => 0, 'max' => 100, 'step' => 25 ],
			],
			'layoutGutter'              => [
				// content-to-media-spacing.js:20-22 → min=0 max=100 step=25.
				'range' => [ 'min' => 0, 'max' => 100, 'step' => 25 ],
				'note'  => 'Gutter between the content and media columns.',
			],
			'minHeightFallback'         => [
				// image-container-height-settings.js:44-46 → min=0 max=100 step=5.
				'range' => [ 'min' => 0, 'max' => 100, 'step' => 5 ],
			],

			// Card metadata (with-card-details/components/metadata-source.js:21-30).
			'primaryMetadata'           => [
				'enum' => [ 'none', 'author', 'author-date', 'category', 'comments', 'date', 'tags', 'reading-time' ],
			],
			'secondaryMetadata'         => [
				'enum' => [ 'none', 'author', 'author-date', 'category', 'comments', 'date', 'tags', 'reading-time' ],
			],
		],

		// -----------------------------------------------------------------------------------
		// Supernova + Supernova Item — the real hero/card/collection host blocks.
		// -----------------------------------------------------------------------------------
		'novablocks/supernova'      => novablocks_blocks_describe_supernova_vocabulary(),
		'novablocks/supernova-item' => novablocks_blocks_describe_supernova_vocabulary(),

		// -----------------------------------------------------------------------------------
		// Sidecar — two-column layout container (packages/block-library/src/blocks/sidecar/).
		// -----------------------------------------------------------------------------------
		'novablocks/sidecar'        => [
			'sidebarPosition'  => [
				// variations.js:10/22/38 (left/right/none) + block-controls.js rail toggle.
				'enum' => [ 'left', 'right', 'none' ],
				'note' => 'none = a plain centered content wrapper (no sidebar). Visual side is set here, not by DOM order.',
			],
			'sidebarWidth'     => [
				// inspector-controls.js:89-91 → RadioControl small|medium|large.
				'enum'   => [ 'small', 'medium', 'large' ],
				'labels' => [ 'small' => 'Small', 'medium' => 'Medium', 'large' => 'Large' ],
			],
			'contentFontSize'  => [
				// inspector-controls.js:146-150 → SelectControl.
				'enum' => [ 'smallest', 'smaller', 'normal', 'larger', 'largest' ],
				'note' => 'Multipliers: smallest 0.82, smaller 0.93, normal 1, larger 1.12, largest 1.18.',
			],
			'sidebarFontSize'  => [
				'enum' => [ 'smallest', 'smaller', 'normal', 'larger', 'largest' ],
			],
			'lastItemIsSticky' => [
				// inspector-controls.js:99-108 → ToggleControl.
				'enum' => [ true, false ],
				'note' => 'When true, only the LAST direct child of the sidebar area is position:sticky. Wrap the sidebar in one core/group to make it all sticky.',
			],
			'tagName'          => [
				// inspector-controls.js:120-128 → SelectControl.
				'enum' => [ 'div', 'header', 'main', 'section', 'article', 'aside', 'footer' ],
			],
		],
		'novablocks/sidecar-area'   => [
			'areaName' => [
				// sidecar-area attributes.json / sidecar.md — only content|sidebar used anywhere.
				'enum' => [ 'content', 'sidebar' ],
				'note' => 'content = main column; sidebar = the (optionally sticky) aside. In serialized markup content comes first, sidebar second, regardless of visual side.',
			],
		],

		// -----------------------------------------------------------------------------------
		// Headline (packages/block-library/src/blocks/headline/).
		// -----------------------------------------------------------------------------------
		'novablocks/headline'       => [
			'level'     => [
				// edit.js:33 → HeadingToolbar minLevel=1 maxLevel=6.
				'range' => [ 'min' => 1, 'max' => 6, 'step' => 1 ],
				'note'  => 'Heading level → h1..h6.',
			],
			'textAlign' => [
				'enum' => [ 'left', 'center', 'right' ],
			],
			'align'     => [
				// block.json supports.align → wide|full (plus the default "none").
				'enum' => [ 'none', 'wide', 'full' ],
			],
		],
	];
}

/**
 * Supernova / Supernova Item block-specific enums, beyond the cross-cutting sets.
 *
 * @return array
 */
function novablocks_blocks_describe_supernova_vocabulary(): array {
	return [
		'cardLayout'  => [
			// Verified across supernova variations/*/index.js and card-styles/definitions.js:
			// the four cardLayout values written anywhere in the block are these.
			'enum' => [ 'vertical', 'stacked', 'horizontal', 'horizontal-reverse' ],
			'note' => 'horizontal / horizontal-reverse split the card into media + content columns (the layouts where emphasisArea applies).',
		],
		'layoutStyle' => [
			// Verified across supernova cards-collection / query-loop variations. `masonry` is
			// reachable only through a theme-registered collection layout recipe (baseLayout).
			'enum' => [ 'classic', 'carousel', 'parametric' ],
			'note' => 'Base collection layout. masonry is available only via a theme-registered collection layout recipe (see data.recipes).',
		],
		'contentType' => [
			// Verified across supernova query-loop/cards-collection variations.
			'enum' => [ 'auto', 'custom', 'fields' ],
		],
	];
}

/**
 * Bundle vocabulary — the enums `novablocks_get_block_editor_settings()` already ships, mapped onto
 * the attributes they govern. Free: no new runtime, and it stays in lock-step with the editor
 * because it reads the exact array the editor is handed.
 *
 * Only attributes whose governing bundle enum is unambiguous are mapped here; the rest of the
 * bundle option lists (blob shapes, min-height / content-width preset menus, spacing presets) are
 * surfaced wholesale under `data.bundle_options` by the command rather than guessed onto an
 * attribute name.
 *
 * @param array $settings The result of `novablocks_get_block_editor_settings()`.
 *
 * @return array attribute-name → vocabulary entry (same shape as the curated table).
 */
function novablocks_blocks_describe_bundle_vocabulary( array $settings ): array {
	$map = [];

	$style_presets = novablocks_blocks_describe_option_values( $settings['advancedGalleryPresetOptions'] ?? [] );
	if ( ! empty( $style_presets ) ) {
		$map['stylePreset'] = [
			'enum' => $style_presets,
			'note' => 'A bundle-identity LABEL only — the layout engine never reads it. Picking a preset writes the numeric attrs (arrangement, sizeContrast, positionShift, elementsDistance, placementVariation); set THOSE to control layout. Each preset\'s numeric expansion is in data.style_presets. ("just-my-style" is the randomizer and is the one value written by the Surprise-me action.)',
		];
	}

	$motion_presets = novablocks_blocks_describe_option_values( $settings['motionPresetOptions'] ?? [] );
	if ( ! empty( $motion_presets ) ) {
		$map['motionPreset'] = [
			'enum' => $motion_presets,
			'note' => 'Curated Doppler motion bundle. "custom" leaves the individual motion attributes free.',
		];
	}

	$scrolling = novablocks_blocks_describe_option_values( $settings['scrollingEffectOptions'] ?? [] );
	if ( ! empty( $scrolling ) ) {
		$map['scrollingEffect'] = [
			'enum' => $scrolling,
			'note' => 'A third value "doppler" is offered too, but only on blocks whose supports declare Doppler and only with the Plus entitlement (scrolling-effect/src/controls/media-tab.js:34-35).',
		];
	}

	return $map;
}

/**
 * Pull the `value` list out of a `[ { label, value, preset? }, … ]` option array.
 *
 * @param mixed $options Candidate option array.
 *
 * @return array List of scalar values, order preserved.
 */
function novablocks_blocks_describe_option_values( $options ): array {
	if ( ! is_array( $options ) ) {
		return [];
	}

	$values = [];
	foreach ( $options as $option ) {
		if ( is_array( $option ) && array_key_exists( 'value', $option ) && is_scalar( $option['value'] ) ) {
			$values[] = $option['value'];
		}
	}

	return $values;
}

/**
 * Resolve one attribute's vocabulary, applying the precedence
 * block-specific curated → cross-cutting curated → bundle → none.
 *
 * @param string $block_name     Fully-qualified block name.
 * @param string $attribute      Attribute name.
 * @param array  $curated        The curated table (`novablocks_blocks_describe_curated_vocabulary()`).
 * @param array  $bundle_vocab   The bundle map (`novablocks_blocks_describe_bundle_vocabulary()`).
 *
 * @return array `{ vocabulary: array|null, source: 'curated'|'bundle'|'none', note: string }`.
 */
function novablocks_blocks_describe_resolve_vocabulary( string $block_name, string $attribute, array $curated, array $bundle_vocab ): array {
	if ( isset( $curated[ $block_name ][ $attribute ] ) ) {
		return novablocks_blocks_describe_normalize_entry( $curated[ $block_name ][ $attribute ], 'curated' );
	}

	if ( isset( $curated['*'][ $attribute ] ) ) {
		return novablocks_blocks_describe_normalize_entry( $curated['*'][ $attribute ], 'curated' );
	}

	if ( isset( $bundle_vocab[ $attribute ] ) ) {
		return novablocks_blocks_describe_normalize_entry( $bundle_vocab[ $attribute ], 'bundle' );
	}

	return [
		'vocabulary' => null,
		'source'     => 'none',
		'note'       => 'No curated vocabulary for this attribute — type and default only. Author a value and prove it with `wp pixelgrade blocks canonicalize` / `validate`.',
	];
}

/**
 * Normalize a curated/bundle table entry into the output shape
 * `{ vocabulary: {enum|range, labels?}, source, note }`.
 *
 * @param array  $entry  A table entry (`{enum|range, labels?, note?}`).
 * @param string $source 'curated' or 'bundle'.
 *
 * @return array
 */
function novablocks_blocks_describe_normalize_entry( array $entry, string $source ): array {
	$vocabulary = [];

	if ( array_key_exists( 'enum', $entry ) ) {
		$vocabulary['enum'] = array_values( (array) $entry['enum'] );
		if ( ! empty( $entry['labels'] ) && is_array( $entry['labels'] ) ) {
			$vocabulary['labels'] = $entry['labels'];
		}
	} elseif ( array_key_exists( 'range', $entry ) ) {
		$vocabulary['range'] = $entry['range'];
	}

	return [
		'vocabulary' => empty( $vocabulary ) ? null : $vocabulary,
		'source'     => empty( $vocabulary ) ? 'none' : $source,
		'note'       => isset( $entry['note'] ) ? (string) $entry['note'] : '',
	];
}
