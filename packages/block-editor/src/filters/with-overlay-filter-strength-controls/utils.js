/**
 * Returns a Duotone Presets Array.
 * @param palettes
 * @param currentPalette
 * @param currentVariation
 * @returns {array}
 */
export const generateDuotoneFromPalettes = ( palettes, currentPalette, currentVariation ) => {

  let presets = []

  const activePalettes = palettes.filter( palette => typeof palette['id'] === 'number' ),
    selectedPalette = activePalettes[currentPalette - 1];

  // Generate Duotone Presets based on current background color
  // and another color from every palette, 6 position on the right,
  // or left depending on current background color position.

  activePalettes.forEach( userPalette => {

    let colors = userPalette['colors'],
      shadows,
      highlights = selectedPalette['colors'][currentVariation - 1]['value'];

    if ( currentVariation >= 6 ) {
      shadows = colors[currentVariation - 6]['value'];
      [highlights, shadows] = [shadows, highlights];
    } else {
      shadows = colors[currentVariation + 6]['value'];
    }

    let mixPaletteColors = [shadows, highlights];

    presets.push( {
        'name': `Color ${currentVariation} and Color ${currentVariation + 6}`,
        'colors': mixPaletteColors
      }
    );

  } )

  return presets;
}
