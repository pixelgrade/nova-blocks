/**
 * Card Styles — the supernova managed-bundle tile family (Stage 3a Phase 3).
 *
 * Six George-approved tiles (labels final, mood-named per the hue-agnostic
 * naming rule), each one a COMPLETE decision over the family's 19-attribute
 * domain: color identity (context-resolved, shared with Row Surfaces via
 * `resolveColorTileValues`), elements stacking, media treatment (Overlay
 * Filter + Shape Modeling mask) and motion. Applying a tile clears every
 * managed attribute it omits — the "natural" treatment IS the clears (its
 * off-state is the registered defaults). Full design + per-tile clear lists:
 * `.ai/design-customization/stage-3a-tiles-design.md` §2.
 *
 * Deliberately OUTSIDE the managed set (do not add without re-review):
 * doppler frame attrs (`focalPoint` frames parallax too — clearing it would
 * destroy user framing), shape decoration geometry/displacement (kept inert
 * by the managed `blobsEnableDecoration`), `overlayFilterHoverBorderSize`,
 * `emphasisArea`.
 */
import { getSignals } from '@novablocks/utils';
import {
  COLOR_TILE_MANAGED_ATTRIBUTES,
  getPaletteConfig,
  resolveColorTileValues,
} from '@novablocks/color-signal';

export const CARD_STYLE_MANAGED_ATTRIBUTES = [
  ...COLOR_TILE_MANAGED_ATTRIBUTES,
  'contentColorSignal',
  'contentPaletteVariation',
  'cardLayout',
  'overlayFilterType',
  'overlayFilterStrength',
  'overlayFilterDuotoneConfig',
  'blobsEnableMask',
  'blobsEnableDecoration',
  'blobMaskSides',
  'blobMaskPatternSeed',
  'blobMaskComplexity',
  'blobMaskSmoothness',
  'blobMaskRotation',
  'scrollingEffect',
  'motionPreset',
];

export const CARD_STYLE_TILES = [
  { id: 'card-style-editorial', version: 1, label: 'Editorial', palette: '1', variation: 1, cardLayout: 'horizontal', treatment: 'natural', motion: 'static' },
  { id: 'card-style-overlap', version: 1, label: 'Overlap', palette: '1', variation: 3, cardLayout: 'horizontal-reverse', treatment: 'natural', motion: 'static' },
  { id: 'card-style-framed', version: 1, label: 'Framed', palette: '1', variation: 2, cardLayout: 'vertical', treatment: 'natural', motion: 'static' },
  { id: 'card-style-immersive', version: 1, label: 'Immersive', palette: '1', variation: 10, cardLayout: 'stacked', treatment: 'soft-overlay', motion: 'parallax' },
  { id: 'card-style-cinematic', version: 1, label: 'Cinematic', palette: '2', variation: 12, cardLayout: 'stacked', treatment: 'duotone-brand', motion: 'parallax' },
  { id: 'card-style-organic', version: 1, label: 'Organic', palette: '1', variation: 2, cardLayout: 'vertical', treatment: 'shape-mask', motion: 'static' },
];

/**
 * The "duotone-brand" config, resolved from the LIVE palettes payload at
 * render time: same-palette stops, darkest signal anchor -> variation 1
 * (George-approved). Exactly the `{ from, to: { paletteId, variationIndex,
 * hex } }` shape the sidebar's Highlights/Shadows pickers write, so
 * apply→derive strict equality holds against sidebar-authored state. A later
 * palette hue change moves the stored hex out from under the definition and
 * derives as Custom — accepted (value identity; re-click refreshes).
 *
 * @param {string} paletteId
 * @return {Object} The overlayFilterDuotoneConfig value.
 */
export const resolveBrandDuotoneConfig = ( paletteId ) => {
  const variations = getPaletteConfig( paletteId )?.variations || [];

  if ( ! variations.length ) {
    return {};
  }

  const darkestAnchor = Math.max( ...getSignals( paletteId ) );
  const stop = ( variationIndex ) => ( {
    paletteId,
    variationIndex,
    hex: variations[ variationIndex - 1 ]?.bg,
  } );

  return {
    from: stop( darkestAnchor ),
    to: stop( 1 ),
  };
};

/**
 * Media-treatment value bundles. "natural" writes nothing: the managed
 * clears reset overlay to unitone/0/{} and both shape enables to false —
 * off IS the registered default state. "shape-mask" is exactly the Shape
 * Modeling "Blob" preset's mask geometry (lib/block-editor-settings.php),
 * so the Shape Modeling family's own derivation reads "Blob" after Organic.
 */
const TREATMENT_VALUES = {
  natural: () => ( {} ),
  'soft-overlay': () => ( {
    overlayFilterType: 'unitone',
    overlayFilterStrength: 30,
  } ),
  'duotone-brand': ( paletteId ) => ( {
    overlayFilterType: 'duotone',
    overlayFilterDuotoneConfig: resolveBrandDuotoneConfig( paletteId ),
  } ),
  'shape-mask': () => ( {
    blobsEnableMask: true,
    blobsEnableDecoration: false,
    blobMaskSides: 7,
    blobMaskPatternSeed: 50,
    blobMaskComplexity: 100,
    blobMaskSmoothness: 100,
    blobMaskRotation: 0,
  } ),
};

/**
 * Builds the context-resolved PresetCardsControl options for the family.
 * Every tile writes the full color identity (content story mirrors
 * getUpdatedAttributes' signal-0 invariant: contentPaletteVariation follows
 * the block variation), its stacking and its motion; treatments add their
 * bundle. Everything else in CARD_STYLE_MANAGED_ATTRIBUTES clears on apply.
 *
 * @param {Array} tiles Roster entries.
 * @param {number} referenceVariation The block context's absolute reference.
 * @return {Array} Options consumable by PresetCardsControl managed mode.
 */
export const buildCardStyleOptions = ( tiles, referenceVariation ) => {
  return ( tiles || [] ).map( ( tile ) => {
    const colorValues = resolveColorTileValues( tile, referenceVariation );

    return {
      label: tile.label,
      value: tile.id,
      version: tile.version,
      palette: tile.palette,
      variation: tile.variation,
      cardLayout: tile.cardLayout,
      treatment: tile.treatment,
      preset: {
        ...colorValues,
        contentColorSignal: 0,
        contentPaletteVariation: colorValues.paletteVariation,
        cardLayout: tile.cardLayout,
        scrollingEffect: tile.motion,
        ...TREATMENT_VALUES[ tile.treatment ]( tile.palette ),
      },
    };
  } );
};
