import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";

const useSelectParent = ( props, condition ) => {
  const { clientId, isSelected } = props;
  const { selectBlock, clearSelectedBlock } = useDispatch( 'core/editor' );
  const parents = useSelect( select => select( 'core/block-editor' ).getBlockParents( clientId ).slice(), [ clientId ] );

  return useEffect( () => {

    if ( isSelected && parents.length ) {
      if ( typeof condition === "undefined" || !! condition ) {
        clearSelectedBlock().then( () => {
          selectBlock( parents[ parents.length - 1 ] );
        } );
      }
    }

  }, [ isSelected, condition ] );
};

export default useSelectParent;
