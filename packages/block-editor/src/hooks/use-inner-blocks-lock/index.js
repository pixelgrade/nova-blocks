import { useDispatch } from '@wordpress/data';
import isShallowEqual from '@wordpress/is-shallow-equal';
import { useEffect } from '@wordpress/element';

import { useInnerBlocks } from '../../hooks';

const useInnerBlocksLock = ( clientId, lockSettings, attributes, innerBlockName = false ) => {
  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
  const innerBlocks = useInnerBlocks( clientId );

  return useEffect( () => {
    innerBlocks.forEach( function ( innerBlock ) {
      // If we have been given an inner block name to look for, skip all others.
      if ( innerBlockName && innerBlock.name !== innerBlockName ) {
        return;
      }

      if ( ! isShallowEqual( innerBlock.attributes.lock, lockSettings ) ) {
        updateBlockAttributes( innerBlock.clientId, { lock: lockSettings } );
      }
    } );
  }, [ attributes ] );
};

export default useInnerBlocksLock;
