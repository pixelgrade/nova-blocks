import { useSelect } from '@wordpress/data';

const useInnerBlocks = ( clientId ) => {
  return useSelect( select => select( 'core/block-editor' ).getBlock( clientId ).innerBlocks, [ clientId ] )
}

export default useInnerBlocks;
