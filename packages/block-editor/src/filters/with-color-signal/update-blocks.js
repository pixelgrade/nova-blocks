//
import { dispatch, select, subscribe } from "@wordpress/data";
import { getParentVariation, getSupports } from "../../utils";
import { computeColorSignal, getAbsoluteColorVariation, removeSiteVariationOffset } from "@novablocks/utils";

const getBlockList = () => select( 'core/editor' ).getBlocks();

let blockList = getBlockList();

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

const updateInnerBlocks = ( block ) => {

  if ( Array.isArray( block.innerBlocks ) ) {
    block.innerBlocks.forEach( innerBlock => {
      updateBlock( innerBlock );
    } )
  }
}

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

    if ( paletteVariation !== finalVariation ) {
      updateBlockAttributes( clientId, {
        paletteVariation: finalVariation,
      } );
    }
  }

  updateInnerBlocks( block );
}
