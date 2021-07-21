import { useSelect } from "@wordpress/data";

const useSupports = ( blockType ) => {
  return useSelect( ( select ) => select( 'core/blocks' ).getBlockType( blockType ).supports, [ blockType ] )
}

export default useSupports;
