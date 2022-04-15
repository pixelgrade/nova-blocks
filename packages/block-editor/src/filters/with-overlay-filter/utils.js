import { getSignals } from "@novablocks/utils";

/**
 * Returns a Duotone Presets Array.
 * @param palettes
 * @returns {array}
 */
export const generateDuotonePresetsFromPalettes = ( palettes ) => {
  const presets = [];

  if ( ! palettes.length || ! Array.isArray( palettes[0].variations ) ) {
    return presets;
  }

  palettes.forEach( palette1 => {
    const signals1 = getSignals( palette1.id );

    palettes.filter( palette2 => palette1.id !== palette2.id ).forEach( palette2 => {
      const signals2 = getSignals( palette2.id );

      signals1.forEach( ( signal1, index1 ) => {
        signals2.forEach( ( signal2, index2 ) => {

          const color1 = palette1.variations[ signal1 - 1 ].bg;
          const color2 = palette2.variations[ signal2 - 1 ].bg;

          if ( color1 !== color2 &&
               index1 > index2 &&
               Math.abs( index1 - index2 ) > 0 ) {

            presets.push( {
              name: `${ palette1.label } - ${ signal1 - 1 } and ${ palette2.label } - ${ signal2 - 1 }`,
              from: {
                paletteId: palette1.id,
                variationIndex: signal1,
                hex: color1
              },
              to: {
                paletteId: palette2.id,
                variationIndex: signal2,
                hex: color2
              },
            } );
          }
        } );
      } );
    } );
  } );

  return presets;
};

/**
 * Returns all color from Palettes as array.
 * @param palettes
 * @returns {array}
 */

export const generateColorPalettes = ( palettes ) => {
  const colorPalette = [];

  if ( ! palettes.length || ! Array.isArray( palettes[0].variations ) ) {
    return colorPalette;
  }

  palettes.forEach( palette => {
    const signals = getSignals( palette.id );
    const label = palette.label;

    signals.forEach( ( signal, index ) => {
      const color = palette.variations[ signal - 1 ].bg;

      colorPalette.push( {
        paletteId: palette.id,
        variationIndex: signal,
        hex: color,
      } );
    } );
  } );

  return colorPalette;
};

const clamp = ( number, min, max ) => {
  return Math.min( Math.max( min, number ), max );
};
