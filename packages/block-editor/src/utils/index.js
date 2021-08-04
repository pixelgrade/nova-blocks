import { dispatch, select } from "@wordpress/data";

import {
  getSiteColorVariation,
  normalizeVariationValue,
} from "@novablocks/utils";

export const setAttributesToInnerBlocks = ( clientId, attributes ) => {
  const { getBlock } = select( 'core/block-editor' );
  const { updateBlockAttributes } = dispatch( 'core/block-editor' );
  const { innerBlocks } = getBlock( clientId );

  innerBlocks.forEach( block => {
    updateBlockAttributes( block.clientId, attributes );
  } );
}

export const getEditorScrollContainer = () => {
  return document.querySelector( '.edit-post-layout__content' ) ||
         document.querySelector( '.edit-post-editor-regions__content' ) ||
         document.querySelector( '.block-editor-editor-skeleton__content' ) ||
         document.querySelector( '.interface-interface-skeleton__content' );
}

export const getParentVariation = ( clientId ) => {
  const { getBlockParents, getBlock } = select( 'core/block-editor' );
  const parents = getBlockParents( clientId ).slice();
  const siteVariation = getSiteColorVariation();

  // Loop through parents array until we find a block with Color Signal component enabled
  while ( parents.length ) {
    const parentClientId = parents.pop();
    const parentBlock = getBlock( parentClientId );
    const parentAttributes = parentBlock.attributes;
    const supports = getSupports( parentBlock.name );

    if ( supports?.novaBlocks?.colorSignal ) {
      return getAbsoluteColorVariation( parentAttributes );
    }
  }

  return 1;
}

export const getPaletteConfig = ( palette ) => {
  const settings = select( 'novablocks' ).getSettings();
  const { palettes } = settings;

  if ( ! Array.isArray( palettes ) || ! palettes.length ) {
    return { sourceIndex: 6 }
  }

  return palettes.find( paletteIterator => paletteIterator.id === palette ) || palettes[0];
}

export const getSupports = ( blockType ) => {
  return select( 'core/blocks' ).getBlockType( blockType ).supports;
}

export const getAbsoluteColorVariation = ( attributes ) => {
  const { palette, paletteVariation, useSourceColorAsReference } = attributes;
  const sourceIndex = getSourceIndexFromPaletteId( palette );

  return useSourceColorAsReference ? sourceIndex + 1 : paletteVariation;
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

export const getSignalRelativeToVariation = ( compare, reference ) => {
  const variationOptions = getSignalOptionsFromVariation( reference );

  return variationOptions.reduce( ( prev, curr, index, arr ) => {
    return ( Math.abs(curr - compare ) < Math.abs( arr[prev] - compare ) ? index : prev );
  }, 0 );
}

export const getSignalBetweenShiftedVariations = ( compare, reference ) => {
  const variationOptions = getSignalOptionsFromVariation( reference );

  return variationOptions.reduce( ( prev, curr, index, arr ) => {
    return ( Math.abs(curr - compare ) < Math.abs( arr[prev] - compare ) ? index : prev );
  }, 0 );
}

//
export const getSignalFromVariation = ( variation ) => {

  if ( variation === 1 ) {
    return 0;
  }

  if ( variation < 6 ) {
    return 1;
  }

  if ( variation < 10 ) {
    return 2;
  }

  return 3;
}

export const getSignalOptionsFromVariation = ( variation ) => {
  const blockSignal = getSignalFromVariation( variation );

  const variationOptions = Array.from( Array( 4 ).keys() ).map( index => {
    return index === blockSignal ? variation : getVariationFromSignal( index );
  } );

  variationOptions.sort( ( variation1, variation2 ) => {
    return Math.abs( variation - variation1 ) < Math.abs( variation - variation2 ) ? -1 : 1;
  } );

  return variationOptions;
}

export const getContentVariationBySignal = ( props ) => {

  const {
    attributes: {
      contentColorSignal,
      paletteVariation,
    }
  } = props;

  return computeColorSignal( paletteVariation, contentColorSignal );
}

export const computeColorSignal = ( reference, signal, current ) => {
  console.log( reference, current );
  const currentSignal = getSignalRelativeToVariation( current, reference );

  if ( currentSignal === signal ) {
    return current;
  }

  const signalOptions = getSignalOptionsFromVariation( reference );

  console.log( reference, signal, signalOptions );

  return signalOptions[ signal ];
}

export const getSourceIndexFromPaletteId = ( palette ) => {
  const paletteConfig = getPaletteConfig( palette );
  const siteVariation = getSiteColorVariation();
  const { sourceIndex } = paletteConfig;

  return ( sourceIndex - siteVariation + 1 + 12 ) % 12;
}

export const addSiteVariationOffset = ( variation ) => {
  const siteVariation = getSiteColorVariation();
  return normalizeVariationValue( variation + siteVariation - 1 );
}

export const removeSiteVariationOffset = ( variation ) => {
  const siteVariation = getSiteColorVariation();
  return normalizeVariationValue( variation - siteVariation + 1 );
}
