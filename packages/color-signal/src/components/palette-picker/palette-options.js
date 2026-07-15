// Pure palette option-set helpers, shared by the sidebar PalettePicker and
// the block toolbar palette cycler so the two surfaces can never disagree on
// which palettes are offered, in what order, or how each one is presented.
//
// Deliberately kept free of `@wordpress/*` / `@novablocks/*` imports so this
// logic stays unit-testable with a plain `require()` under jest, with no WP
// runtime needed (same convention as get-color-signal-levels.js).

// Keep in sync with `isFunctionalPalette` in `@novablocks/utils`
// (packages/utils/src/index.js): functional palettes are the ones whose id
// starts with an underscore. Inlined here (one line) instead of imported so
// this file stays runtime-free; the sidebar and toolbar both go through
// `getVisiblePalettes` below, so they cannot drift apart from each other.
export const isFunctionalPaletteOption = ( palette ) => {
  const id = `${ palette?.id }`;
  return id.charAt( 0 ) === '_';
};

/**
 * The palette list a block's picker should offer: the runtime payload
 * (`novablocksSettings.palettes`, via the `novablocks` store's getSettings())
 * filtered down to brand palettes by default, or functional palettes when the
 * user flipped the picker's functional-colors toggle. Order is preserved from
 * the payload — the toolbar cycler steps through this exact array.
 *
 * @param palettes the settings payload's palettes array
 * @param showFunctionalColors the picker's functional-colors toggle state
 * @returns {Array} the palettes to offer, in payload order
 */
export const getVisiblePalettes = ( palettes, showFunctionalColors = false ) => {
  const list = Array.isArray( palettes ) ? palettes : [];

  return list.filter( palette => isFunctionalPaletteOption( palette ) === !! showFunctionalColors );
};

/**
 * The palette that a cycle-on-click should advance to: the entry after the
 * current one in the visible list, wrapping past the end. When the current
 * palette is not in the list at all (e.g. the block holds a functional
 * palette while the brand list is shown), the cycle starts from the list's
 * first entry.
 *
 * @param visiblePalettes the list from getVisiblePalettes()
 * @param currentPaletteId the block's current `palette` attribute value
 * @returns {Object|undefined} the next palette, or undefined for an empty list
 */
export const getNextPalette = ( visiblePalettes, currentPaletteId ) => {
  const list = Array.isArray( visiblePalettes ) ? visiblePalettes : [];

  if ( ! list.length ) {
    return undefined;
  }

  const currentIndex = list.findIndex( palette => `${ palette.id }` === `${ currentPaletteId }` );

  // findIndex's -1 conveniently wraps to index 0 here.
  return list[ ( currentIndex + 1 ) % list.length ];
};

/**
 * A palette's human-readable label, falling back to "Palette {id}" for
 * unlabeled entries.
 */
export const getPaletteLabel = ( palette ) => {
  if ( ! palette ) {
    return '';
  }

  return palette.label || `Palette ${ palette.id }`;
};

/**
 * Resolve the single display color that represents a palette — the same color
 * the sidebar picker paints its swatch with.
 *
 * Payload shapes, in resolution order:
 * 1. `palette.source[0]` — the `novablocksSettings.palettes` shape the sidebar
 *    swatch grid uses (`colors: palette.source.slice(0, 1)`).
 * 2. `palette.colors[palette.sourceIndex].value` — the
 *    `styleManager.colorsConfig` shape (see `mapPalettesToColorPalette` /
 *    `getPaletteConfig` in ../../utils).
 * 3. `palette.variations[palette.sourceIndex].bg` — the variations-based
 *    config shape (see `getSignalRelativeToVariation`).
 *
 * @returns {string|null} a CSS color, or null when it cannot be resolved —
 *   callers should render a neutral currentColor fallback for null.
 */
export const getPaletteDisplayColor = ( palette ) => {
  if ( ! palette ) {
    return null;
  }

  if ( Array.isArray( palette.source ) && typeof palette.source[ 0 ] === 'string' && palette.source[ 0 ] ) {
    return palette.source[ 0 ];
  }

  const sourceIndex = Number.isInteger( palette.sourceIndex ) ? palette.sourceIndex : 0;

  const colorValue = palette.colors?.[ sourceIndex ]?.value;
  if ( typeof colorValue === 'string' && colorValue ) {
    return colorValue;
  }

  const variationBg = palette.variations?.[ sourceIndex ]?.bg;
  if ( typeof variationBg === 'string' && variationBg ) {
    return variationBg;
  }

  return null;
};
