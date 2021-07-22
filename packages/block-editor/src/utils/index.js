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

  const blocks = getBlockParents( clientId ).slice();
  let currentVariation = 1;

  blocks.forEach( ( blockId, index ) => {
    const block = getBlock( blockId );
    const supports = getSupports( block.name );

    if ( ! supports?.novaBlocks?.colorSignal ) {
      return;
    }

    const { attributes } = block;
    const { palette, colorSignal, useSourceColorAsReference } = attributes;

    currentVariation = useSourceColorAsReference ? 1 : currentVariation;
    currentVariation = getComputedVariation( palette, currentVariation, colorSignal );
  } );

  return currentVariation;
}

export const getComputedVariationFromParents = ( clientId ) => {
  const { getBlock } = select( 'core/block-editor' );
  const referenceVariation = getReferenceVariation( clientId );
  const block = getBlock( clientId );
  const { attributes } = block;
  const { palette, colorSignal } = attributes;

  return getComputedVariation( palette, referenceVariation, colorSignal );;
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

export const getAbsoluteColorVariation = ( props ) => {

  const {
    attributes: {
      palette,
      paletteVariation,
      useSourceColorAsReference
    }
  } = props;

  const currentPalette = getPaletteConfig( props );
  const { sourceIndex } = currentPalette;
  const siteVariation = getSiteColorVariation();
  const siteVariationOffset = siteVariation - 1;
  const colorReferenceOffset = useSourceColorAsReference ? sourceIndex : 0;

  return normalizeVariationValue( paletteVariation - colorReferenceOffset + siteVariationOffset );
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
    return 6;
  }

  if ( signal === 3 ) {
    return 10;
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

  if ( variation < 5 ) {
    return 1;
  }

  if ( variation < 9 ) {
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
      palette,
      paletteVariation,
    }
  } = props;

  return getComputedVariation( palette, paletteVariation, contentColorSignal );
}

export const getComputedVariation = ( palette, parentVariation, currentSignal ) => {
  const referenceVariation = normalizeVariationValue( parentVariation );
  const contentSignalOptions = getSignalOptionsFromVariation( referenceVariation );

  return normalizeVariationValue( contentSignalOptions[ currentSignal ] );
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
