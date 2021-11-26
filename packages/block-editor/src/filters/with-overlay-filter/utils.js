/**
 * Returns a Duotone Presets Array.
 * @param palettes
 * @returns {array}
 */
export const generateDuotonePresetsFromPalettes = ( palettes ) => {
  // First number is used for highlights.
  // Second number is used for shadows.
  // Since JavaScript arrays are zero-indexed,
  // Color Grades Indexes are  0 - 11.
  // Example:
  // [6,9] will be equivalent of [7,10].
  const duotones = [
    // Staff Picks
    [6, 9],
    [6, 10],
    [7, 10],
    [7, 11],
    [8, 11],
  ];

  const presets = [];

  duotones.forEach( ( [highlightIndex, shadowIndex] ) => {
    highlightIndex = clamp( highlightIndex, 0, 11 );
    shadowIndex = clamp( shadowIndex, 0, 11 );

    palettes.forEach( ( palette1 ) => {

      let colors1 = palette1.colors.slice();

      if ( Array.isArray( palette1.variations ) ) {
        colors1 = palette1.variations.map( variation => variation.background );
      }

      palettes.forEach( ( palette2 ) => {

        if ( palette2.id === palette1.id ) {
          return;
        }

        let colors2 = palette2.colors.slice();

        if ( Array.isArray( palette2.variations ) ) {
          colors2 = palette2.variations.map( variation => variation.background );
        }

        const highlightsColor = colors1[ highlightIndex ][ "value" ];
        const shadowsColor = colors2[ shadowIndex ][ "value" ];

        presets.push( {
          name: `${ palette2.label }(${ shadowIndex }) and ${ palette1.label }(${ highlightIndex })`,
          colors: [ shadowsColor, highlightsColor ],
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
  let colorItem = {};
  const colorPalette = [];

  palettes.forEach( ( palette, index ) => {
    let colors = palette.colors;
    let colorLabel = palette.label;

    colors.forEach( ( color, colorIndex ) => {
      colorItem = {
        color: color.value,
        name: `${colorLabel} - Color-${colorIndex}`,
        slug: `${colorLabel.toLowerCase().replace( /\s/g, "-" )}-color-${index}`,
      };

      colorPalette.push( colorItem );
    } );
  } );

  return colorPalette;
};

const clamp = ( number, min, max ) => {
  return Math.min( Math.max( min, number ), max );
};
