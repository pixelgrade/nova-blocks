import { dispatch, select, subscribe } from "@wordpress/data";

import { getSupports } from "@novablocks/block-editor";

import { getParentVariation } from "./editor/utils";
import {
  computeColorSignal,
  getAbsoluteColorVariation,
  getSignalRelativeToVariation,
  removeSiteVariationOffset,
} from "./utils";

( () => {

  const editor = select( 'core/block-editor' );

  if ( ! editor ) {
    return;
  }

  const getBlockList = () => editor.getBlocks();

  let blockList = getBlockList();

  /**
   * Subscribe to any changes to the block list in order to update each block's final palette variation value
   * based on their and their parent's colorSignal attribute value
   */
  subscribe( () => {
    const newBlockList = getBlockList();
    const blockListChanged = newBlockList !== blockList;
    blockList = newBlockList;

    // @todo create some sort of caching for blocks inside template parts
//    if ( blockListChanged ) {
      // You can trigger here any behavior when the block list in the post changes.
      blockList.forEach( ( block ) => {
        updateBlock( block );
      } );
//    }
  } );

} )();

/**
 * Update block's paletteVariation attribute value based on their and their parent's colorSignal attribute value
 * @param block props of the block that we intend to change the variation for
 */
const updateBlock = ( block ) => {

  const supports = getSupports( block.name );

  if ( supports?.novaBlocks?.colorSignal ) {
    const { updateBlockAttributes } = dispatch( 'core/block-editor' );
    const { attributes, clientId } = block;
    const { colorSignal, paletteVariation, useSourceColorAsReference } = attributes;

    const config = window?.styleManager?.colorsConfig;

    // make sure we're using an actual palette
    const palette = ( () => {
      const palette = config.find( palette => `${ palette.id }` === `${ attributes.palette }` );

      if ( ! palette ) {
        return 1;
      }

      return palette.id;
    } )();

    const { getBlockParents, getBlock } = select( 'core/block-editor' );
    const parents = getBlockParents( clientId ).slice();

    if ( typeof colorSignal === "undefined" || typeof paletteVariation === "undefined" ) {
      return false;
    }

    // @todo maybe find closest parent with colorSignal support
    if ( parents.length ) {
      const parentClientId = parents.pop();
      const parentBlock = getBlock( parentClientId );
      const parentSupports = getSupports( parentBlock.name );

      // @todo contentColorSignal should be part of the colorSignal config
      const parentColorSignalSupport = parentSupports?.novaBlocks?.colorSignal;

      if ( parentColorSignalSupport === true || parentColorSignalSupport?.contentColorSignal ) {
        const { contentColorSignal, contentPaletteVariation } = parentBlock.attributes;

        // @todo check if computed signal of contentPaletteVariation is the same as contentColorSignal
        if ( paletteVariation !== contentPaletteVariation ) {
          updateBlockAttributes( clientId, {
            colorSignal: contentColorSignal,
            paletteVariation: contentPaletteVariation,
            useSourceColorAsReference: false,
          } );
        }

        updateInnerBlocks( block );

        return false;
      }
    }

    const parentVariation = getParentVariation( clientId );
    const absoluteVariation = getAbsoluteColorVariation( attributes );
    const nextVariation = computeColorSignal( parentVariation, colorSignal, palette, absoluteVariation );

    const nextColorSignal = useSourceColorAsReference ? getSignalRelativeToVariation( absoluteVariation, parentVariation, palette ) : colorSignal;
    const finalVariation = useSourceColorAsReference ? 1 : removeSiteVariationOffset( nextVariation );

    // dispatch new attributes only if the new paletteVariation value differs from the current one
    if ( paletteVariation !== finalVariation || colorSignal !== nextColorSignal ) {
      updateBlockAttributes( clientId, {
        colorSignal: nextColorSignal,
        paletteVariation: finalVariation,
      } );
    }
  }

  updateInnerBlocks( block );
};

const updateBlocks = ( blocks ) => {
  if ( Array.isArray( blocks ) ) {
    blocks.forEach( block => {
      updateBlock( block );
    } );
  }
}

const updateInnerBlocks = ( block ) => {
  const { getBlocks } = select( 'core/block-editor' );

  // recursively update all innerBlocks
  updateBlocks( block.innerBlocks );

  if ( 'core/template-part' === block.name ) {
    updateBlocks( getBlocks( block.clientId ) );
  }
};
