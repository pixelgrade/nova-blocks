/**
 * Free layout presets — curated one-click bundles per composition, writing
 * ONLY free-tier attributes (pinned by free-presets.test.js), plus the gated
 * depth presets.
 *
 * Pure data (no JSX, no imports) so the contract test can consume it
 * directly; `thumb` descriptors are rendered by the Composition tab. Preset
 * labels are plain strings, matching the existing parametric presets list.
 *
 * Aspect bundles reuse the exact values the Items Aspect Ratio control
 * writes, so its preset detection keeps working.
 */

const LANDSCAPE = { thumbnailAspectRatio: 42, thumbnailAspectRatioString: 'landscape', imageResizing: 'cropped' };
const SQUARE = { thumbnailAspectRatio: 50, thumbnailAspectRatioString: 'square', imageResizing: 'cropped' };

export const CLASSIC_PRESETS = [
  {
    label: 'Three-Up Grid',
    sub: '3 columns',
    value: 'classic-three-up',
    thumb: { kind: 'classic', columns: 3, count: 6 },
    preset: {
      layoutStyle: 'classic',
      postsToShow: 6,
      columns: 3,
      gridGap: 50,
      verticalGapModifier: 1,
      ...LANDSCAPE,
    },
  },
  {
    label: 'Two-Up Editorial',
    sub: '2 columns, airy',
    value: 'classic-two-up',
    thumb: { kind: 'classic', columns: 2, count: 4 },
    preset: {
      layoutStyle: 'classic',
      postsToShow: 4,
      columns: 2,
      gridGap: 75,
      verticalGapModifier: 1.5,
      ...LANDSCAPE,
    },
  },
  {
    label: 'Square Gallery',
    sub: '4 columns, tight',
    value: 'classic-square-gallery',
    thumb: { kind: 'classic', columns: 4, count: 8 },
    preset: {
      layoutStyle: 'classic',
      postsToShow: 8,
      columns: 4,
      gridGap: 20,
      verticalGapModifier: 1,
      ...SQUARE,
    },
  },
  {
    // Promoted from the parametric list, where it was a classic preset all
    // along. The bundle stays IDENTICAL so existing content keeps matching.
    label: 'Dumas',
    sub: 'The original classic',
    value: 'tear0down3',
    thumb: { kind: 'classic', columns: 3, count: 6 },
    preset: {
      layoutStyle: 'classic',
      postsToShow: 6,
      columns: 3,
    },
  },
];

export const MASONRY_PRESETS = [
  {
    label: 'Masonry Flow',
    sub: '3 columns',
    value: 'masonry-flow',
    thumb: { kind: 'masonry', columns: 3 },
    preset: {
      layoutStyle: 'masonry',
      postsToShow: 9,
      columns: 3,
      gridGap: 40,
      verticalGapModifier: 1,
    },
  },
  {
    label: 'Tight Mosaic',
    sub: '4 columns, dense',
    value: 'masonry-tight-mosaic',
    thumb: { kind: 'masonry', columns: 4 },
    preset: {
      layoutStyle: 'masonry',
      postsToShow: 12,
      columns: 4,
      gridGap: 15,
      verticalGapModifier: 1,
    },
  },
  {
    label: 'Airy Columns',
    sub: '2 columns, spacious',
    value: 'masonry-airy-columns',
    thumb: { kind: 'masonry', columns: 2 },
    preset: {
      layoutStyle: 'masonry',
      postsToShow: 6,
      columns: 2,
      gridGap: 80,
      verticalGapModifier: 1.5,
    },
  },
  {
    label: 'Editorial Masonry',
    sub: '3 columns, airy',
    value: 'masonry-editorial',
    thumb: { kind: 'masonry', columns: 3 },
    preset: {
      layoutStyle: 'masonry',
      postsToShow: 9,
      columns: 3,
      gridGap: 60,
      verticalGapModifier: 1.5,
    },
  },
];

export const CAROUSEL_PRESETS = [
  {
    label: 'Showcase Carousel',
    sub: '3 visible slides',
    value: 'carousel-showcase',
    thumb: { kind: 'carousel', visible: 3 },
    preset: {
      layoutStyle: 'carousel',
      postsToShow: 6,
      columns: 3,
      gridGap: 30,
      carouselLayout: 'fixed',
    },
  },
  {
    label: 'Full Deck',
    sub: '4 visible slides',
    value: 'carousel-full-deck',
    thumb: { kind: 'carousel', visible: 4 },
    preset: {
      layoutStyle: 'carousel',
      postsToShow: 8,
      columns: 4,
      gridGap: 15,
      carouselLayout: 'fixed',
    },
  },
  {
    label: 'Spotlight',
    sub: '2 visible slides',
    value: 'carousel-spotlight',
    thumb: { kind: 'carousel', visible: 2 },
    preset: {
      layoutStyle: 'carousel',
      postsToShow: 4,
      columns: 2,
      gridGap: 60,
      carouselLayout: 'fixed',
    },
  },
  {
    label: 'Filmstrip',
    sub: 'Variable widths',
    value: 'carousel-filmstrip',
    thumb: { kind: 'carousel', variable: true },
    preset: {
      layoutStyle: 'carousel',
      postsToShow: 7,
      gridGap: 20,
      carouselLayout: 'variable',
    },
  },
];

/**
 * The stacked-depth look as a one-click preset per depth-capable composition
 * (gated: it writes Plus attributes — 3D Grid + grid parallax).
 * Deliberately not "Pile"-branded.
 */
export const DEPTH_PRESETS = {
  classic: [ {
    label: 'Layered Grid',
    sub: '3D depth + parallax',
    value: 'depth-layered-grid',
    thumb: { kind: 'depth' },
    preset: {
      layoutStyle: 'classic',
      postsToShow: 6,
      columns: 3,
      gridGap: 40,
      verticalGapModifier: 1,
      cardLayout: 'stacked',
      pile3dEffect: true,
      pile3dTarget: 'item',
      pile3dTargetRule: 'odd',
      pileParallaxAmount: 78,
    },
  } ],
  masonry: [ {
    label: 'Layered Flow',
    sub: '3D depth + parallax',
    value: 'depth-layered-flow',
    thumb: { kind: 'depth' },
    preset: {
      layoutStyle: 'masonry',
      postsToShow: 9,
      columns: 3,
      gridGap: 40,
      verticalGapModifier: 1,
      cardLayout: 'stacked',
      pile3dEffect: true,
      pile3dTarget: 'item',
      pile3dTargetRule: 'odd',
      pileParallaxAmount: 78,
    },
  } ],
};

/**
 * Applying any layout preset resets the stacked-depth attributes unless the
 * preset itself sets them — presets are whole bundles.
 */
export const LAYOUT_PRESET_RESETS = {
  pile3dEffect: false,
  pileParallaxAmount: 0,
};
