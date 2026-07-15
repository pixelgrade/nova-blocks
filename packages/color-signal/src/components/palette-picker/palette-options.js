// Pure palette option helpers shared by the sidebar picker and the toolbar
// cycler. Keeping them runtime-free makes the exact option set and cycle order
// easy to verify without a WordPress environment.

export const isFunctionalPaletteOption = ( palette ) => {
  const id = `${ palette?.id }`;

  return id.charAt( 0 ) === '_';
};

export const getVisiblePalettes = ( palettes, showFunctionalColors = false ) => {
  const list = Array.isArray( palettes ) ? palettes : [];

  return list.filter( palette => isFunctionalPaletteOption( palette ) === !! showFunctionalColors );
};

export const getNextPalette = ( visiblePalettes, currentPaletteId ) => {
  const list = Array.isArray( visiblePalettes ) ? visiblePalettes : [];

  if ( ! list.length ) {
    return undefined;
  }

  const currentIndex = list.findIndex( palette => `${ palette.id }` === `${ currentPaletteId }` );

  return list[ ( currentIndex + 1 ) % list.length ];
};

export const getPaletteLabel = ( palette ) => {
  if ( ! palette ) {
    return '';
  }

  return palette.label || `Palette ${ palette.id }`;
};

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
