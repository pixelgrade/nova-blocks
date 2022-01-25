import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";

const useSelectParent = ( props ) => {
  const { clientId, isSelected } = props;
  const { selectBlock, clearSelectedBlock } = useDispatch( 'core/editor' );
  const parents = useSelect( select => select( 'core/block-editor' ).getBlockParents( clientId ).slice(), [ clientId ] );

  return useEffect( () => {

    if ( isSelected && parents.length ) {
      clearSelectedBlock().then( () => {
        selectBlock( parents[ parents.length - 1 ] );
      } );
    }

  }, [ isSelected ] );
};

export default useSelectParent;
