/**
 * Returns a Duotone Presets Array.
 * @param palettes
 * @param currentPalette
 * @param currentVariation
 * @returns {array}
 */

import { isFunctionalPalette } from "@novablocks/utils";

export const generateDuotonePresetsFromPalettes = ( palettes ) => {

  const userPalettes = palettes.filter( palette => ! isFunctionalPalette( palette ) );

  // First number is used for highlights.
  // Second number is used for shadows.
  const duotones = [
    [2, 8],
    [4, 10]
  ];

  let presets = [],
    highlightsColor,
    shadowsColor;

  duotones.forEach( ( [highlight, shadow] ) => {
    userPalettes.forEach( palette1 => {
      userPalettes.forEach( palette2 => {

        if ( palette2.id === palette1.id ) {
          return;
        }

        highlightsColor = palette1.colors[highlight]['value'];
        shadowsColor = palette2.colors[shadow]['value'];

        presets.push( {
          colors: [shadowsColor, highlightsColor]
        } )

      } );
    } );
  } )

  return presets;
}
