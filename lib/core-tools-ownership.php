<?php
/**
 * Own the core design tools Nova Blocks' own controls functionally replace.
 *
 * Stage 1 ("Own the decisions") of the Design Customization ownership
 * project: switches OFF core Color/Spacing tools for the concerns Nova
 * Blocks actually replaces with a working control + CSS mechanism, via the
 * `wp_theme_json_data_theme` availability filter. This is deliberately a
 * narrow, evidence-backed list — see the binding spec for the full audit
 * trail behind every entry:
 *
 * - stage-0-review-addendum.md (binding — supersedes the matrix where they
 *   disagree; this is the Stage 1 "exit gate")
 * - stage-0-ownership-matrix.md (background detail, per-block audit)
 *
 * Both live in `.ai/design-customization/` in the companion research
 * checkout (private overlay, not shipped in this plugin).
 *
 * @since   2.2.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

/**
 * Pure function: the per-block core design-tools availability overrides
 * Nova Blocks owns as of Stage 1.
 *
 * Every entry here is backed by a confirmed, working Nova CSS/attribute
 * replacement (the addendum's "Final Stage 1 flag list"). Notably absent
 * by design, and must stay absent unless a future stage adds a real
 * replacement:
 *
 * - `padding` (group/columns): the "Content Area Padding" control
 *   (`contentPadding` -> `--nb-card-content-padding-multiplier`) is a
 *   confirmed no-op on group/columns — it's only consumed by supernova's
 *   `_card.scss` and contextual-post-card's `style.scss`. Horizontal
 *   padding additionally has no per-block Nova lever at all. Core stays
 *   the owner (addendum §3).
 * - `blockGap`, `typography`, `border`, `backgroundImage`, `gradients`:
 *   no Nova replacement exists for any of these on any of the
 *   augmented core blocks (addendum §3-4). Gradients are already
 *   suppressed by anima-lt's own theme.json (`defaultGradients:false`,
 *   `customGradient:false`); this file doesn't need to touch them, but see
 *   the Stage 1 contract test for an assertion that a theme change can't
 *   silently re-expose them.
 * - `core/list` `color.background`: see the doc-comment on the `core/list`
 *   entry below — this was the one PENDING cell in the addendum and it
 *   resolves to "stays core", not a Stage 1 override.
 *
 * @return array<string, array<string, array<string, bool>>> Per-block
 *         settings map, keyed exactly like a theme.json
 *         `settings.blocks.<block-name>` fragment (only `color` and
 *         `spacing` sub-keys are ever present).
 */
function novablocks_get_core_tools_availability_overrides(): array {
	$overrides = [
		// Color Signal (packages/color-signal) is a confirmed, working
		// replacement for group's block-level text/background/link color —
		// see with-color-signal-controls.js + the compiled Anima CSS driven
		// by the sm-palette-N / sm-variation-N / sm-color-signal-N classes.
		// spacing.margin is replaced by blockTopSpacing/blockBottomSpacing
		// (packages/base-styles/mixins/_block-spacing.scss), a real
		// margin-top/margin-bottom mechanism universally applied to
		// spacing-container children.
		'core/group'     => [
			'color'   => [
				'text'       => false,
				'background' => false,
				'link'       => false,
			],
			'spacing' => [
				'margin' => false,
			],
		],
		// core/columns has no `novaBlocks.colorSignal` support object at
		// all (color is entirely untouched by Nova on this block — stays
		// core), but it does opt into the full `spaceAndSizing: true`
		// bundle, so its spacing.margin gets the same real replacement as
		// group's.
		'core/columns'   => [
			'spacing' => [
				'margin' => false,
			],
		],
		// core/separator explicitly disables core's `color.text` at the
		// block.json level already (nothing to override there). Its
		// `color.background` is Color Signal-driven the same way as group's
		// (see the Separator Styling Architecture notes: all parts inherit
		// `color` from `.wp-block-separator`, driven by the signal classes).
		// spacing.margin: same real blockTopSpacing/blockBottomSpacing
		// replacement.
		'core/separator' => [
			'color'   => [
				'background' => false,
			],
			'spacing' => [
				'margin' => false,
			],
		],
		// core/button has no `spaceAndSizing` support (padding/margin stay
		// core), but does have full colorSignal attrs+controls
		// (functionalColors:true) for text and background.
		'core/button'    => [
			'color' => [
				'text'       => false,
				'background' => false,
			],
		],
		// core/list: colorSignal is present but with
		// `paletteVariationClassname: false` (see
		// packages/core/src/blocks/core/list/components/with-altered-settings.js)
		// and `functionalColors: false`. `color.text` is disabled here
		// because Color Signal's `sm-color-signal-N` classname (always
		// emitted — colorSignalClassname:true) is what Anima's compiled CSS
		// keys list text color off of.
		//
		// `color.background` is deliberately NOT included — this was the
		// addendum's one PENDING cell. Verification performed for Stage 1:
		// `getColorSignalClassnames()` (packages/utils/src/color-signal.js)
		// only emits the `sm-variation-{n}` class when
		// `colorSignal.paletteVariationClassname` is true OR the whole
		// `colorSignal` support is boolean `true`. core/list sets
		// `paletteVariationClassname: false` explicitly, so list markup
		// never carries an `sm-variation-*` class. A grep of the active
		// theme's compiled CSS
		// (anima-lt/dist/css/theme/components.css, the only file with any
		// `sm-variation` selectors at all) turned up zero `.wp-block-list`
		// rules of any kind — background or otherwise. There is no
		// SCSS in this plugin for `.wp-block-list` either (no
		// list-specific stylesheet exists under packages/). Conclusion:
		// Color Signal does not drive list background today. Core's
		// `color.background` isn't even registered on `core/list`
		// (`wp-includes/blocks/list/block.json` only sets it via the
		// `color` key's defaults, see the addendum correction #1) — but
		// since there is nothing to functionally replace, this file does
		// not add a `color.background` override for `core/list`. Flip this
		// only if/when Color Signal grows a real list-background CSS
		// consumer.
		'core/list'      => [
			'color' => [
				'text' => false,
			],
		],
		// Post Terms adopts wrapper-level Color Signal explicitly. Existing
		// text/background/link values continue to render until the first
		// Color Signal interaction clears them in the same attribute patch.
		'core/post-terms' => [
			'color' => [
				'text'       => false,
				'background' => false,
				'link'       => false,
			],
		],
	];

	/**
	 * Filters the per-block core design-tools availability overrides that
	 * Nova Blocks applies via `wp_theme_json_data_theme`.
	 *
	 * Shape matches theme.json's `settings.blocks.<block-name>` fragment —
	 * only ever `color.*` and `spacing.*` boolean leaves in Stage 1.
	 *
	 * @param array $overrides Per-block settings map. See
	 *                         novablocks_get_core_tools_availability_overrides()
	 *                         for the full Stage 1 rationale behind each entry.
	 */
	return apply_filters( 'novablocks/core_tools_availability', $overrides );
}

/**
 * Merge the core-tools availability overrides into the active theme's
 * theme.json data.
 *
 * Registered on `wp_theme_json_data_theme`, so it always applies on top of
 * whatever the active theme's own theme.json declares (e.g. anima-lt's
 * `appearanceTools: true`) — this filter must win, not the other way
 * around, per the project brief. Reconciling anima-lt's theme.json itself
 * is explicitly out of scope for Stage 1.
 *
 * @param WP_Theme_JSON_Data $theme_json
 *
 * @return WP_Theme_JSON_Data
 */
function novablocks_filter_core_tools_availability( $theme_json ) {
	if ( ! is_object( $theme_json ) || ! method_exists( $theme_json, 'update_with' ) ) {
		return $theme_json;
	}

	$overrides = novablocks_get_core_tools_availability_overrides();

	$blocks = [];
	foreach ( $overrides as $block_name => $block_settings ) {
		if ( ! is_string( $block_name ) || '' === $block_name || ! is_array( $block_settings ) ) {
			continue;
		}

		$blocks[ $block_name ] = $block_settings;
	}

	if ( empty( $blocks ) ) {
		return $theme_json;
	}

	return $theme_json->update_with( [
		'version'  => 3,
		'settings' => [
			'blocks' => $blocks,
		],
	] );
}

if ( class_exists( 'WP_Theme_JSON_Data' ) ) {
	add_filter( 'wp_theme_json_data_theme', 'novablocks_filter_core_tools_availability' );
}
