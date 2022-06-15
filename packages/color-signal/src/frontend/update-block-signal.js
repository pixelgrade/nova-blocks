import { colord, extend as colordExtend } from 'colord';
import colordA11yPlugin from 'colord/plugins/a11y';

import { addClass, removeClass, toggleClass } from "@novablocks/utils";

import {
  addSiteVariationOffset,
  computeColorSignal,
  getAbsoluteColorVariation,
  getColorSignalClassnames,
  getSourceIndexFromPaletteId,
  removeSiteVariationOffset
} from "../utils";

const COLOR_SIGNAL_SELECTOR = '[data-color-signal]';

/**
 * @param block current element
 * @param parentVariation reference color variation
 */
export const updateBlockSignal = ( block, parentVariation ) => {
  const attributes = block.dataset;
  const { palette, useSourceColorAsReference } = attributes;
  const colorSignal = parseInt( attributes?.colorSignal, 10 );
  const innerBlocks = Array.from( block.children );

  if ( ! attributes?.colorSignal ) {
    innerBlocks.forEach( innerBlock => {
      updateBlockSignal( innerBlock, parentVariation );
    } );
    return;
  }

  const absoluteVariation = getAbsoluteColorVariation( attributes );
  const nextVariation = computeColorSignal( parentVariation, colorSignal, palette, absoluteVariation );
  const finalVariation = useSourceColorAsReference ? 1 : removeSiteVariationOffset( nextVariation );
  const sourceIndex = getSourceIndexFromPaletteId( palette );
  const finalAbsoluteVariation = useSourceColorAsReference ? addSiteVariationOffset( sourceIndex + 1 ) : addSiteVariationOffset( finalVariation );

  const classes = Array.from( block.classList );
  const paletteClassname = classes.find( classname => classname.indexOf( 'sm-palette-' ) > -1 );
  const paletteVariationClassname = classes.find( classname => classname.indexOf( 'sm-variation-' ) > -1 );

  removeClass( block, `${ paletteClassname } ${ paletteVariationClassname } sm-palette--shifted` );

  const newClassnames = getColorSignalClassnames( {
    palette,
    paletteVariation: finalVariation,
    useSourceColorAsReference,
    colorSignal,
  }, true );

  const isLight = isLightVariation( palette, finalAbsoluteVariation );

  addClass( block, newClassnames );
  toggleClass( block, 'sm-light', isLight );
  toggleClass( block, 'sm-dark', ! isLight );

  innerBlocks.forEach( innerBlock => {
    updateBlockSignal( innerBlock, finalAbsoluteVariation );
  } );
};

const isLightVariation = ( palette, variation ) => {
  colordExtend( [ colordA11yPlugin ] );

  if ( !Array.isArray( window?.styleManager?.colorsConfig ) ) {
    return;
  }

  const currentPaletteConfig = window.styleManager.colorsConfig.find( thisPalette => {
    return `${ thisPalette.id }` === `${ palette }`;
  } );

  if ( ! currentPaletteConfig ) {
    return true;
  }

  const variationIndex = parseInt( variation, 10 ) - 1;
  const fg1 = currentPaletteConfig.variations ? currentPaletteConfig.variations[variationIndex].fg1 : currentPaletteConfig.colors[variationIndex].value;

  return colord( '#FFFFFF' ).contrast( fg1 ) > Math.sqrt( 21 );
}

/**
 *  * If the Palette Basis Offset value has been changed after the content has been created
 * the changes are that the colorSignal attribute and the output paletteVariation aren't synced anymore.
 * That's why on page load, we compute from top to bottom the colorSignal for each block and regenerate
 * the color signal utility classes
 * @param siteVariation the top most reference variation
 */
export const updateAllBlocksSignal = ( siteVariation ) => {

  // finding all top level blocks with color signal data
  const blocks = Array.from( document.querySelectorAll( COLOR_SIGNAL_SELECTOR ) ).filter( node => {
    const hasParentsWithSignal = node.parentNode && node.parentNode.closest( COLOR_SIGNAL_SELECTOR );
    return ! hasParentsWithSignal;
  } );

  // recursively update each blocks and its descendants
  blocks.forEach( block => {
    updateBlockSignal( block, siteVariation );
  } );

};
