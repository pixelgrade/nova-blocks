// Helper function to get current Palette Config,
// and generate a default, if a palette does not exist.
export const getCurrentPaletteConfig = ( props ) => {
  const { attributes, settings } = props;
  const { palette } = attributes;
  const { palettes } = settings;

  if ( ! Array.isArray( palettes ) || ! palettes.length ) {
    return { sourceIndex: 6 }
  }

  return palettes.find( paletteIterator => paletteIterator.id === palette ) || palettes[0];
}

/**
 *
 * @param attributes block's attributes
 * @param supports blockType's supports; it can be set to true to assume colorSignal support is fully enabled
 * @returns {string} utility classnames joined in a single string based on block attributes and support
 */
export const getColorSignalClassnames = ( attributes, supports ) => {
  const { palette, paletteVariation, useSourceColorAsReference, colorSignal } = attributes;
  const colorSignalSupport = supports?.novaBlocks?.colorSignal;
  const newClassnames = [];

  if ( supports === true || colorSignalSupport === true || colorSignalSupport?.paletteClassname ) {
    newClassnames.push( `sm-palette-${ palette }` );

    if ( useSourceColorAsReference ) {
      newClassnames.push( 'sm-palette--shifted' );
    }
  }

  if ( supports === true || colorSignalSupport === true || colorSignalSupport?.paletteVariationClassname ) {
    if ( colorSignal !== 0 ) {
      newClassnames.push( `sm-variation-${ paletteVariation }` );
    }
  }

  if ( supports === true || colorSignalSupport === true || colorSignalSupport?.colorSignalClassname ) {
    newClassnames.push( `sm-color-signal-${ colorSignal }` );
  }

  return newClassnames.join( " " );
}

export const mapPalettesToColorPalette = palette => {
  const { colors, sourceIndex } = palette;
  return {
    name: palette.label,
    color: colors[sourceIndex].value
  };
}

export const getSiteColorVariation = () => {
  return parseInt( window?.styleManager?.siteColorVariation || 1, 10 );
}

export const getPaletteConfig = ( palette ) => {
  const palettes = window?.styleManager?.palettes;

  if ( ! Array.isArray( palettes ) || ! palettes.length ) {
    return { sourceIndex: 6 }
  }

  return palettes.find( paletteIterator => paletteIterator.id === palette ) || palettes[0];
}

/**
 * For a given set of attributes, return the absolute variation value
 * which can differ from the actual paletteVariation attribute value
 * when the useSourceColorAsReference attribute is set to true or Palette Basis Offset is different than 1
 * @param attributes
 * @returns {*}
 */
export const getAbsoluteColorVariation = ( attributes ) => {
  const { palette, useSourceColorAsReference } = attributes;
  const paletteVariation = parseInt( attributes.paletteVariation, 10 );
  const sourceIndex = getSourceIndexFromPaletteId( palette );
  const absoluteVariation = useSourceColorAsReference ? sourceIndex + 1 : paletteVariation;

  return addSiteVariationOffset( absoluteVariation );
}

export const getVariationFromSignal = ( signal ) => {
  let variation = 1;

  if ( signal === 1 ) {
    variation = 3;
  }

  if ( signal === 2 ) {
    variation = 8;
  }

  if ( signal === 3 ) {
    variation = 11;
  }

  return removeSiteVariationOffset( variation );
}

/**
 * Calculate what's the colorSignal generated by a variation for a given reference variation
 * @param compared the paletteVariation to be used
 * @param reference the block's parent variation or any given reference variation for that matter
 * @returns {*}
 */
export const getSignalRelativeToVariation = ( compared, reference ) => {
  const variationOptions = getSignalOptionsFromVariation( reference );

  return variationOptions.reduce( ( prev, curr, index, arr ) => {
    return ( Math.abs(curr - compared ) < Math.abs( arr[prev] - compared ) ? index : prev );
  }, 0 );
}

/**
 * For a given reference value, returns an array containing the paletteVariation values generated
 * by every colorSignal value from 0 to 3
 * @param variation
 * @returns {*[]}
 */
export const getSignalOptionsFromVariation = ( variation ) => {
  const variationOptions = Array.from( Array( 4 ).keys() ).map( index => getVariationFromSignal( index ) );

  variationOptions.sort( ( variation1, variation2 ) => {
    return Math.abs( variation - variation1 ) < Math.abs( variation - variation2 ) ? -1 : 1;
  } );

  return variationOptions;
}

/**
 * Shorthand to calculate the colorSignal of child elements for blocks that have support for contentColorSignal
 * @param attributes
 * @returns {*}
 */
export const getContentVariationBySignal = ( attributes ) => {

  const {
    contentColorSignal,
    paletteVariation,
  } = attributes;

  return computeColorSignal( paletteVariation, contentColorSignal );
}

/**
 * For a given pair of a reference paletteVariation and a colorSignal value return a new paletteVariation value
 * If the signal between the reference and the current variation is the same as the passed colorSignal value
 * We return the current paletteVariation instead of calculating it again, since it's probably a value
 * intentionally chosen by the user.
 * @param reference the reference variation to compute the colorSignal on
 * @param colorSignal the desired colorSignal value
 * @param paletteVariation the block's current paletteVariation attribute's value
 * @returns {*}
 */
export const computeColorSignal = ( reference, colorSignal, paletteVariation ) => {
  const currentSignal = getSignalRelativeToVariation( paletteVariation, reference );
  const signalOptions = getSignalOptionsFromVariation( reference );

  if ( currentSignal === colorSignal ) {
    return paletteVariation;
  }

  return signalOptions[ colorSignal ];
}

/**
 * Returns a palette's source color position after it has been shifted with the Palette Basis Offset option
 * @param palette
 * @returns {number}
 */
export const getSourceIndexFromPaletteId = ( palette ) => {
  const paletteConfig = getPaletteConfig( palette );
  const siteVariation = getSiteColorVariation();
  const { sourceIndex } = paletteConfig;

  return ( sourceIndex - siteVariation + 1 + 12 ) % 12;
}

/**
 * Add the value of the Palette Basis Offset control to a variation to simplify calculations
 * @param variation
 * @returns {*}
 */
export const addSiteVariationOffset = ( variation ) => {
  const siteVariation = getSiteColorVariation();
  return normalizeVariationValue( variation + siteVariation - 1 );
}

/**
 * Remove the value of the Palette Basis Offset control, that was previously added to simplify calculations
 * @param variation
 * @returns {*}
 */
export const removeSiteVariationOffset = ( variation ) => {
  const siteVariation = getSiteColorVariation();
  return normalizeVariationValue( variation - siteVariation + 1 );
}

export const normalizeVariationValue = ( value ) => {
  return ( value + 11 ) % 12 + 1;
}
