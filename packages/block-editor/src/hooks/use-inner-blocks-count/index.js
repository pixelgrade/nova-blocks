import { createBlock } from '@wordpress/blocks';
import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";

import { useInnerBlocks } from "../../hooks";

const useInnerBlocksCount = ( clientId, attributes, innerBlockName, innerBlockAttributes ) => {
  const itemsCount = useSelect( select => select( 'core/block-editor' ).getBlockCount( clientId ), [ clientId ] );
  const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
  const innerBlocks = useInnerBlocks( clientId );

  return useEffect( () => {
    const { postsToShow } = attributes;
    const newInnerBlocks = innerBlocks.slice( 0, postsToShow );

    if ( postsToShow > itemsCount ) {
      for ( let i = 0; i < postsToShow - itemsCount; i++ ) {
        newInnerBlocks.push( createBlock( innerBlockName, innerBlockAttributes ) );
      }
    }

    replaceInnerBlocks( clientId, newInnerBlocks );
  }, [ attributes ] );
};

export default useInnerBlocksCount;
