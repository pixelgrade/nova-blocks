import { addClass } from './index';

/**
 * Keep a signal inside the minimum declared by its block family.
 *
 * @param {number|string} colorSignal Requested signal.
 * @param {Object|boolean} colorSignalSupport Block color-signal support config.
 * @returns {number|string} The supported signal.
 */
export const clampColorSignal = ( colorSignal, colorSignalSupport = {} ) => {
  const minimum = parseInt( colorSignalSupport?.minColorSignal, 10 );

  return Number.isNaN( minimum ) ? colorSignal : Math.max( minimum, colorSignal );
};

/**
 * Find the closest ancestor that establishes a Color Signal context.
 * Callers pass ancestors from nearest to farthest so structural wrappers can
 * be skipped without coupling this utility to the block-editor data store.
 *
 * @param {Array} parents Parent blocks ordered nearest-first.
 * @param {Function} hasColorSignal Whether a block name owns Color Signal.
 * @param {Function} getVariation Resolve a block's absolute variation.
 * @returns {{palette: *, variation: *}|null} The nearest context, if any.
 */
export const getNearestColorSignalContext = ( parents = [], hasColorSignal, getVariation ) => {
  for ( const parent of parents ) {
    if ( ! parent?.name || ! parent?.attributes || ! hasColorSignal( parent.name ) ) {
      continue;
    }

    return {
      palette: parent.attributes.palette,
      variation: getVariation( parent.attributes ),
    };
  }

  return null;
};

/**
 * Resolve the palette inputs a color-signal block should use inside its
 * surrounding context.
 *
 * Most blocks own their selected palette. Small semantic controls such as
 * core/button instead inherit the nearest color-signal palette so their
 * signal stays relative to the surface they sit on.
 *
 * @param {Object} attributes Block color-signal attributes.
 * @param {Object} parentContext Nearest parent palette and variation.
 * @param {boolean} inheritParentPalette Whether the block inherits its palette.
 * @returns {{palette: *, parentVariation: *, useSourceColorAsReference: boolean}}
 */
export const resolveColorSignalContext = ( attributes = {}, parentContext = {}, inheritParentPalette = false ) => {
  const hasParentPalette = typeof parentContext.palette !== 'undefined' && parentContext.palette !== null;

  return {
    palette: inheritParentPalette && hasParentPalette ? `${ parentContext.palette }` : attributes.palette,
    parentVariation: parentContext.variation,
    useSourceColorAsReference: inheritParentPalette ? false : !! attributes.useSourceColorAsReference,
  };
};

/**
 * Resolve whether a block should inherit the nearest parent palette.
 *
 * Most contextual blocks always inherit. Blocks that historically allowed an
 * independent palette may declare a boolean ownership attribute. Until that
 * attribute is persisted, `legacyInheritedPalette` distinguishes untouched
 * default markup from an authored non-default palette.
 *
 * @param {Object|boolean} colorSignalSupport Block color-signal support config.
 * @param {Object} attributes Block attributes or a DOM dataset.
 * @returns {boolean} Whether the parent palette owns this block's context.
 */
export const shouldInheritParentPalette = ( colorSignalSupport, attributes = {} ) => {
  if ( colorSignalSupport?.inheritParentPalette !== true ) {
    return false;
  }

  const inheritanceAttribute = colorSignalSupport?.paletteInheritanceAttribute;

  if ( ! inheritanceAttribute ) {
    return true;
  }

  const explicitValue = attributes?.[ inheritanceAttribute ];

  if ( true === explicitValue || 'true' === explicitValue ) {
    return true;
  }

  if ( false === explicitValue || 'false' === explicitValue ) {
    return false;
  }

  if ( typeof colorSignalSupport?.legacyInheritedPalette !== 'undefined' ) {
    return `${ attributes?.palette }` === `${ colorSignalSupport.legacyInheritedPalette }`;
  }

  return true;
};

/**
 * Palette controls are a dead end when a block deliberately follows its
 * surrounding palette.
 *
 * @param {Object|boolean} colorSignalSupport Block color-signal support config.
 * @returns {boolean} Whether the block may select an independent palette.
 */
export const supportsPaletteSelection = ( colorSignalSupport ) => (
  colorSignalSupport?.inheritParentPalette !== true ||
  !! colorSignalSupport?.paletteInheritanceAttribute
);

/**
 * Resolve whether a Color Signal block is active.
 *
 * Existing block families are always active. Dynamic core adapters may name
 * an opt-in attribute so legacy markup stays untouched until the user makes
 * an explicit Color Signal change.
 *
 * @param {Object|boolean} colorSignalSupport Block color-signal support config.
 * @param {Object} attributes Block attributes or a DOM dataset.
 * @returns {boolean} Whether Color Signal owns the block's color output.
 */
export const isColorSignalActive = ( colorSignalSupport, attributes = {} ) => {
  const activationAttribute = colorSignalSupport?.activationAttribute;

  if ( ! activationAttribute ) {
    return true;
  }

  return true === attributes?.[ activationAttribute ] || 'true' === attributes?.[ activationAttribute ];
};

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

  if ( supports !== true && colorSignalSupport && ! isColorSignalActive( colorSignalSupport, attributes ) ) {
    return '';
  }

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

export const getColorPalettesConfig = () => {
  const runtimePalettes = window.styleManager?.colorsConfig;

  if ( Array.isArray( runtimePalettes ) && runtimePalettes.length ) {
    return runtimePalettes;
  }

  try {
    const editorPalettes = window.wp?.data?.select?.( 'novablocks' )?.getSettings?.()?.palettes;

    if ( Array.isArray( editorPalettes ) && editorPalettes.length ) {
      return editorPalettes;
    }
  } catch {
    // The novablocks store is editor-only and may not be registered yet.
  }

  return Array.isArray( runtimePalettes ) ? runtimePalettes : [];
};

export const resolveColorPaletteId = ( paletteId, fallbackPaletteId = '1' ) => {
  const palette = getColorPalettesConfig().find( candidate => `${ candidate.id }` === `${ paletteId }` );

  return palette ? `${ palette.id }` : `${ fallbackPaletteId }`;
};

export const getPaletteConfig = ( paletteId ) => {
  const config = getColorPalettesConfig();

  return config.find( palette => `${ palette.id }` === `${ paletteId }` );
}

const getPaletteSignalColors = ( palette ) => {
  if ( Array.isArray( palette?.colors ) && palette.colors.length ) {
    return palette.colors
      .map( color => typeof color === 'string' ? color : color?.value )
      .filter( Boolean );
  }

  if ( Array.isArray( palette?.variations ) && palette.variations.length ) {
    return palette.variations
      .map( variation => variation?.bg )
      .filter( Boolean );
  }

  return [];
};

export const getSignals = ( paletteId ) => {
  const palette = getPaletteConfig( paletteId );

  if ( ! palette || ! palette?.variations ) {
    return getDefaultSignals();
  }

  const colors = getPaletteSignalColors( palette );

  if ( ! colors.length ) {
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
