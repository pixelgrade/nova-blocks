import { createBlock } from '@wordpress/blocks';
import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect, useRef } from "@wordpress/element";

import { useInnerBlocks } from "../../hooks";

const useInnerBlocksCount = ( clientId, postsToShow, innerBlockName, innerBlockAttributes ) => {
  const itemsCount = useSelect( select => select( 'core/block-editor' ).getBlockCount( clientId ), [ clientId ] );
  const { replaceInnerBlocks, updateBlockAttributes } = useDispatch( 'core/block-editor' );
  const innerBlocks = useInnerBlocks( clientId );

  const innerBlocksCount = useRef( innerBlocks.length );
  const postsToShowValue = useRef( postsToShow );

  useEffect( () => {

    if ( innerBlocks.length !== postsToShow ) {

      if ( innerBlocks.length !== innerBlocksCount.current ) {
        // inner blocks changed
        innerBlocksCount.current = innerBlocks.length;
        postsToShowValue.current = innerBlocks.length;
        updateBlockAttributes( clientId, { postsToShow: innerBlocks.length } );
      } else {
        // postsToShow changed
        innerBlocksCount.current = postsToShow;
        postsToShowValue.current = postsToShow;

        const newInnerBlocks = innerBlocks.slice( 0, postsToShow );

        if ( postsToShow > itemsCount ) {
          for ( let i = 0; i < postsToShow - itemsCount; i++ ) {
            newInnerBlocks.push( createBlock( innerBlockName, innerBlockAttributes ) );
          }
        }

        replaceInnerBlocks( clientId, newInnerBlocks );
      }
    }

  }, [ postsToShow, innerBlocks ] );
};

export default useInnerBlocksCount;
