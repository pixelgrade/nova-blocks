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
    newClassnames.push( `sm-variation-${ paletteVariation }` );
  }

  if ( supports === true || colorSignalSupport === true || colorSignalSupport?.colorSignalClassname ) {
    newClassnames.push( `sm-color-signal-${ colorSignal }` );
  }

  return newClassnames.join( " " );
}
