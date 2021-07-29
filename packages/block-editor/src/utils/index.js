import { dispatch, select } from "@wordpress/data";

import {
  getSiteColorVariation,
  normalizeVariationValue
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

export const getReferenceVariation = ( clientId ) => {
  const { getBlockParents, getBlock } = select( 'core/block-editor' );
  const block = getBlock( clientId );
  const { attributes } = block;
  const { palette, useSourceColorAsReference } = attributes;
  const currentPalette = getPaletteConfig( palette );
  const { sourceIndex } = currentPalette;

  if ( useSourceColorAsReference ) {
    return sourceIndex + 1;
  }

  const parents = getBlockParents( clientId ).slice();
  let currentVariation = 1;

  parents.forEach( ( parentId, index ) => {
    const parent = getBlock( parentId );
    const supports = getSupports( parent.name );

    if ( ! supports?.novaBlocks?.colorSignal ) {
      return;
    }

    const { attributes } = parent;
    const { paletteVariation, colorSignal } = attributes;

    currentVariation = getComputedVariation( currentVariation, colorSignal, paletteVariation );
  } );

  return currentVariation;
}

export const getComputedVariationFromParents = ( clientId ) => {
  const { getBlock } = select( 'core/block-editor' );
  const block = getBlock( clientId );
  const { attributes } = block;
  const { paletteVariation, colorSignal, useSourceColorAsReference } = attributes;
  const parentVariation = getReferenceVariation( clientId );
  const referenceVariation = useSourceColorAsReference ? 1 : parentVariation;

  return getComputedVariation( referenceVariation, colorSignal, paletteVariation );
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

  const {
    palette,
    paletteVariation,
    useSourceColorAsReference
  } = attributes;

  const currentPalette = getPaletteConfig( palette );
  const { sourceIndex } = currentPalette;
  const siteVariation = getSiteColorVariation();
  const variationOffset = useSourceColorAsReference ? sourceIndex : siteVariation - 1;
  const absoluteVariation = paletteVariation + variationOffset;

  return normalizeVariationValue( absoluteVariation );
}

export const getCurrentPaletteRelativeColorVariation = ( palette, paletteVariation, props ) => {
  const paletteConfig = getPaletteConfig( palette );
  return getRelativeColorVariation( paletteConfig, paletteVariation, props );
}

export const getVariationFromSignal = ( signal ) => {

  if ( signal === 1 ) {
    return 3;
  }

  if ( signal === 2 ) {
    return 8;
  }

  if ( signal === 3 ) {
    return 11;
  }

  return 1;
}

export const getSignalRelativeToVariation = ( compare, reference ) => {
  const variationOptions = getSignalOptionsFromVariation( reference );
  return variationOptions.reduce( ( prev, curr, index, arr ) => {
    return ( Math.abs(curr - compare ) < Math.abs( arr[prev] - compare ) ? index : prev );
  }, 0 );
}

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

  return getComputedVariation( paletteVariation, contentColorSignal );
}

export const getComputedVariation = ( referenceVariation, signal, paletteVariation ) => {
  referenceVariation = normalizeVariationValue( referenceVariation );
  const currentSignal = getSignalRelativeToVariation( paletteVariation, referenceVariation );

  if ( currentSignal === signal ) {
    return paletteVariation;
  }

  const signalOptions = getSignalOptionsFromVariation( referenceVariation );

  return signalOptions[ signal ];
}

export const getRelativeColorVariation = ( paletteConfig, paletteVariation, props ) => {

  const {
    attributes: {
      useSourceColorAsReference
    }
  } = props;

  const { sourceIndex } = paletteConfig;
  const siteVariation = getSiteColorVariation();
  const siteVariationOffset = useSourceColorAsReference ? 0 : ( siteVariation - 1 );
  const colorReferenceOffset = useSourceColorAsReference ? sourceIndex : 0;

  return normalizeVariationValue( paletteVariation - colorReferenceOffset - siteVariationOffset )
}

export const getSignalAttributes = ( signal, palette, sticky = false ) => {
  const { sourceIndex } = palette;
  const siteVariation = getSiteColorVariation();
  const variationOptions = getSignalOptionsFromVariation( siteVariation );
  const sourceSignal = getSignalRelativeToVariation( sourceIndex + 1, siteVariation );
  const nextVariation = normalizeVariationValue( variationOptions[ signal ] - siteVariation + 1 );

  if ( sticky ) {

    return {
      colorSignal: signal,
      palette: palette.id,
      paletteVariation: sourceSignal === signal ? 1 : nextVariation,
      useSourceColorAsReference: sourceSignal === signal,
    }

  } else {

    return {
      colorSignal: signal,
      palette: palette.id,
      paletteVariation: nextVariation
    }

  }
}
