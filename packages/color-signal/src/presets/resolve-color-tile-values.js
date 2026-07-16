/**
 * Context resolution for color-carrying preset tiles (Stage 3a Phase 3).
 *
 * Tile rosters ship `palette` + `variation` as data, where `variation` is the
 * ABSOLUTE (visual) index into the palette's `variations` payload — the value
 * George curated against in `.ai/playground/preset-tiles-curation.html`.
 * `colorSignal` is context-relative and stored `paletteVariation` is
 * site-offset-relative, so neither may be baked into a definition; this
 * resolver computes them for one block context using the exact helpers the
 * sidebar itself writes through (see the Gate 1 doc,
 * `.ai/design-customization/stage-3a-tiles-design.md` §1).
 *
 * The only editor-dependent input, `referenceVariation` (the closest
 * colorSignal ancestor's absolute variation — `getParentVariation()`), is
 * INJECTED so this module stays free of `wp.data` and unit-testable. The
 * roundtrip guarantee against `update-blocks.js` holds because
 * `computeColorSignal( reference, signal, palette, absolute )` short-circuits
 * when `getSignalRelativeToVariation( absolute, reference, palette )` equals
 * the stored signal — which is literally how the signal below is produced.
 */
import {
  getSignalRelativeToVariation,
  removeSiteVariationOffset,
} from '../utils';

/**
 * The Row Surfaces managed boundary — the color identity of a block. Spatial
 * attributes (`emphasisArea`) and the content-area pair (unsupported on
 * core/group) are deliberately outside it; see the Gate 1 doc §1.5.
 */
export const COLOR_TILE_MANAGED_ATTRIBUTES = [
  'palette',
  'paletteVariation',
  'colorSignal',
  'useSourceColorAsReference',
];

/**
 * Resolves a tile's color-identity values for one block context.
 *
 * `useSourceColorAsReference` is ALWAYS explicit false: the flag makes
 * `getAbsoluteColorVariation()` ignore the stored variation in favor of the
 * palette's shifted source index, which would override the tile's fixed
 * variation promise (Gate 1 doc §1.4 — decided).
 *
 * @param {{palette: string, variation: number}} tile Roster entry (absolute variation).
 * @param {number} referenceVariation The context's absolute reference variation.
 * @return {Object} The four color-identity attribute values, in stored form.
 */
export const resolveColorTileValues = ( tile, referenceVariation ) => {
  const { palette, variation } = tile;

  return {
    palette,
    paletteVariation: removeSiteVariationOffset( variation ),
    colorSignal: getSignalRelativeToVariation( variation, referenceVariation, palette ),
    useSourceColorAsReference: false,
  };
};
