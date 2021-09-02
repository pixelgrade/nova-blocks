/**
 * Returns a Duotone Presets Array.
 * @param palettes
 * @returns {array}
 */

export const generateDuotonePresetsFromPalettes = ( palettes ) => {

  // First number is used for highlights.
  // Second number is used for shadows.
  const duotones = [
    // Staff Picks
    [6, 9],
    [6, 10],
    [7, 10],
    [7, 11],
    [8, 11],
    // Separator
    [0, 0], 
    // Explorations
    [5, 8],
    [5, 9],
    [5, 10],
    [5, 11],
    [6, 8],
    [6, 9],
    [6, 10],
    [6, 11],
    [7, 8],
    [7, 9],
    [7, 10],
    [7, 11]
  ];

  let presets = [],
    highlightsColor,
    shadowsColor;

  duotones.forEach( ( [highlight, shadow] ) => {
    palettes.forEach( palette1 => {
      palettes.forEach( palette2 => {

        if ( palette2.id === palette1.id ) {
          return;
        }

        highlightsColor = palette1.colors[highlight]['value'];
        shadowsColor = palette2.colors[shadow]['value'];

        presets.push( {
          name: `${palette2.label}(${shadow}) and ${palette1.label}(${highlight})`,
          colors: [shadowsColor, highlightsColor]
        } )

      } );
    } );
  } )

  return presets;
}

/**
 * Returns all color from Palettes as array.
 * @param palettes
 * @returns {array}
 */

export const generateColorPalettes = ( palettes ) => {

  let colorItem = {}
  const colorPalette = []

  palettes.forEach( ( palette, index ) => {

    let colors = palette.colors;
    let colorLabel = palette.label;

    colors.forEach( (color, colorIndex) => {

      colorItem = {
        'color': color.value,
        'name': `${colorLabel} - Color-${colorIndex}`,
        'slug': `${colorLabel.toLowerCase().replace( /\s/g, '-' )}-color-${index}`
      }

      colorPalette.push( colorItem )
    } )
  } );

  return colorPalette;
}
