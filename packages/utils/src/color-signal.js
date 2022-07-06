import { addClass } from './index';

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
};

export const getContentColorsSignalClassnames = ( attributes, supports ) => {

  const newAttributes = Object.assign( {}, attributes, {
    colorSignal: attributes.contentColorSignal,
    paletteVariation: attributes.contentPaletteVariation,
    useSourceColorAsReference: false,
  } );

  return getColorSignalClassnames( newAttributes, supports );
};

export const getPaletteConfig = ( paletteId ) => {
  const config = window.styleManager?.colorsConfig || [];

  return config.find( palette => `${ palette.id }` === `${ paletteId }` );
}

export const getSignals = ( paletteId ) => {
  const palette = getPaletteConfig( paletteId );
  const colors = palette?.colors.slice();

  if ( ! palette || ! palette?.variations ) {
    return getDefaultSignals();
  }

  const variations = palette.variations.slice();
  const signalsCount = Math.min( colors.length, 4 );
  const colorGroups = [];
  const chunk = colors.length / signalsCount;

  for ( let i = 0; i < signalsCount; i++ ) {
    const start = chunk * i;
    const end = chunk * ( i + 1 );
    colorGroups.push( colors.slice( start, end ) );
  }

  const signals = [];
  const backgrounds = variations.map( v => v.bg.toLowerCase() );

  colorGroups.forEach( group => {
    const firstColor = group[0];
    const lastColor = group[ group.length - 1 ];
    const start = backgrounds.indexOf( firstColor.toLowerCase() );
    const end = backgrounds.lastIndexOf( lastColor.toLowerCase() );
    const middle = Math.floor( start * 0.5 + end * 0.5 );

    signals.push( middle + 1 );
  } );

  return signals;
};

export const getDefaultSignals = () => {
  return [1, 3, 8, 11];
};

export const syncColorSignalClasses = ( from, to ) => {

  if ( to && from ) {

    to.classList.forEach( className => {
      if ( className.indexOf( 'sm-' ) > -1 ) {
        to.classList.remove( className );
      }
    } );

    from.classList.forEach( className => {
      if ( className.indexOf( 'sm-' ) > -1 ) {
        to.classList.add( className );
      }
    } );
  }
};
