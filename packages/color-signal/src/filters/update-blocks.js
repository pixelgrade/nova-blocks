import { dispatch, select, subscribe } from "@wordpress/data";

import { getSupports } from "@novablocks/block-editor";

import { getParentVariation } from "../editor/utils";

import {
  computeColorSignal,
  getAbsoluteColorVariation,
  removeSiteVariationOffset
} from "../utils";

const getBlockList = () => select( 'core/editor' ).getBlocks();

let blockList = getBlockList();

/**
 * Subscribe to any changes to the block list in order to update each block's final palette variation value
 * based on their and their parent's colorSignal attribute value
 */
subscribe( () => {
  const newBlockList = getBlockList();
  const blockListChanged = newBlockList !== blockList;
  blockList = newBlockList;

  if ( blockListChanged ) {
    // You can trigger here any behavior when the block list in the post changes.
    blockList.forEach( ( block ) => {
      updateBlock( block );
    } );
  }
} );

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
    const parentVariation = getParentVariation( clientId );
    const absoluteVariation = getAbsoluteColorVariation( attributes );
    const nextVariation = computeColorSignal( parentVariation, colorSignal, absoluteVariation );
    const finalVariation = useSourceColorAsReference ? 1 : removeSiteVariationOffset( nextVariation );

    // dispatch new attributes only if the new paletteVariation value differs from the current one
    if ( paletteVariation !== finalVariation ) {
      updateBlockAttributes( clientId, {
        paletteVariation: finalVariation,
      } );
    }
  }

  // recursively update all innerBlocks
  if ( Array.isArray( block.innerBlocks ) ) {
    block.innerBlocks.forEach( innerBlock => {
      updateBlock( innerBlock );
    } )
  }
}
