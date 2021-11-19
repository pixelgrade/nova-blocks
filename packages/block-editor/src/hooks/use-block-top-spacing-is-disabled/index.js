import { useSelect } from "@wordpress/data";
import { useCallback } from "@wordpress/element";

const useBlockTopSpacingIsDisabled = ( clientId ) => {
  const { getBlockParents, getBlock, getClientIdsWithDescendants } = useSelect( 'core/block-editor' );
  const parents = getBlockParents( clientId ).slice();
  const rootBlocks = getClientIdsWithDescendants();

  return useCallback( () => {

    if ( parents.length ) {
      const { innerBlocks } = getBlock( parents[ parents.length - 1 ] );

      if ( innerBlocks.length && innerBlocks[0].clientId === clientId ) {
        return true;
      }
    }

    if ( clientId === rootBlocks[0] ) {
      return true;
    }

  }, [ clientId, rootBlocks ] );
}

export default useBlockTopSpacingIsDisabled;
