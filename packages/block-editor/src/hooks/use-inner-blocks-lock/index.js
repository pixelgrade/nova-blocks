import { useDispatch } from '@wordpress/data';
import isShallowEqual from '@wordpress/is-shallow-equal';
import { useEffect } from '@wordpress/element';

import { useInnerBlocks } from '../../hooks';

/**
 * Keeps the inner blocks' `lock` attribute in line with the parent's context
 * (e.g. Supernova items are locked inside a Query Loop).
 *
 * The lock is derived from where the block sits, is editor-only (it never
 * reaches the frontend markup) and is re-derived on every load, so writing it
 * is a normalization, not an edit: it goes out as ONE non-persistent change.
 * A persistent write dirtied every legacy page/template whose items were
 * saved without a lock the moment it opened (#543). The value still serializes
 * with the next genuine edit.
 */
const useInnerBlocksLock = ( clientId, lockSettings, attributes, innerBlockName = false ) => {
  const { updateBlockAttributes, __unstableMarkNextChangeAsNotPersistent } = useDispatch( 'core/block-editor' );
  const innerBlocks = useInnerBlocks( clientId );

  return useEffect( () => {
    const clientIdsToLock = innerBlocks
      // If we have been given an inner block name to look for, skip all others.
      .filter( innerBlock => ! innerBlockName || innerBlock.name === innerBlockName )
      .filter( innerBlock => ! isShallowEqual( innerBlock.attributes.lock, lockSettings ) )
      .map( innerBlock => innerBlock.clientId );

    if ( ! clientIdsToLock.length ) {
      return;
    }

    __unstableMarkNextChangeAsNotPersistent();
    updateBlockAttributes( clientIdsToLock, { lock: lockSettings } );
  }, [ attributes ] );
};

export default useInnerBlocksLock;
