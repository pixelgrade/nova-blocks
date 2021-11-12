import { useDispatch, useSelect } from "@wordpress/data";

const useSelectParent = ( props ) => {

  const {
    clientId,
    isSelected
  } = props;

  const parentClientId = useSelect( select => select( 'core/block-editor' ).getBlockRootClientId( clientId ), [ clientId ] );
  const { selectBlock, clearSelectedBlock } = useDispatch( 'core/editor' );

  if ( isSelected ) {
    clearSelectedBlock().then( () => {
      selectBlock( parentClientId );
    } );
  }
}

export default useSelectParent;
