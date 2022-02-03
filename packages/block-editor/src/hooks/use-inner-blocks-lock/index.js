import { useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

import { useInnerBlocks } from '../../hooks';

const useInnerBlocksLock = ( clientId, lockSettings, attributes, innerBlockName = false ) => {
  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
  const innerBlocks = useInnerBlocks( clientId );

  return useEffect( () => {
    innerBlocks.forEach( function ( innerBlock ) {
      // If we have been hive a inner block name to look for, skip all others.
      if ( innerBlockName && innerBlock.name !== innerBlockName ) {
        return;
      }

      updateBlockAttributes( innerBlock.clientId, { lock: lockSettings } );
    } );
  }, [ attributes ] );
};

export default useInnerBlocksLock;
