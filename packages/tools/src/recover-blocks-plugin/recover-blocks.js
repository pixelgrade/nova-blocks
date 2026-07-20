import { store as blockEditorStore } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';

/**
 * Re-create every invalid block from its parsed attributes and inner blocks —
 * the same operation as core's per-block "Attempt recovery" button, applied to
 * the whole document.
 *
 * Works on the live block-editor store; the editor store's block list selector
 * must not be used here because on an unedited post it re-parses the content
 * into a detached tree whose clientIds make replaceBlock a silent no-op.
 *
 * @return {number} The number of blocks a recovery was attempted for.
 */
export const recoverAllBlocks = () => {
  const { getBlock, getClientIdsWithDescendants, isBlockValid } = select( blockEditorStore );
  const { replaceBlock } = dispatch( blockEditorStore );

  const invalidClientIds = getClientIdsWithDescendants().filter( clientId => ! isBlockValid( clientId ) );

  // Deepest blocks first, so replacing a parent cannot orphan a pending child replacement.
  invalidClientIds.slice().reverse().forEach( clientId => {
    const { name, attributes, innerBlocks } = getBlock( clientId );
    replaceBlock( clientId, createBlock( name, attributes, innerBlocks ) );
  } );

  return invalidClientIds.length;
};
