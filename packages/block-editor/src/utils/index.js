import { dispatch, select } from "@wordpress/data";

import {
  getAbsoluteColorVariation,
  getSiteColorVariation
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

/**
 * For a given block's clientId, return the container's paletteVariation to use as a reference for the block's color signal
 * The parent variation can be the closest parent with colorSignal support, or the actual webpage in which case
 * We return the Palette Basis Offset setting
 * @param clientId
 * @returns {number|*}
 */
export const getParentVariation = ( clientId ) => {
  const { getBlockParents, getBlock } = select( 'core/block-editor' );
  const parents = getBlockParents( clientId ).slice();

  // Loop through parents array until we find a block with Color Signal component enabled
  while ( parents.length ) {
    const parentClientId = parents.pop();
    const parentBlock = getBlock( parentClientId );
    const parentAttributes = parentBlock.attributes;
    const supports = getSupports( parentBlock.name );

    // if this parent supports colorSignal return it's absolute paletteVariation
    if ( supports?.novaBlocks?.colorSignal ) {
      return getAbsoluteColorVariation( parentAttributes );
    }
  }

  // return the Palette Basis Offset value
  return getSiteColorVariation();
}

export const getSupports = ( blockType ) => {
  return select( 'core/blocks' ).getBlockType( blockType ).supports;
}

