import { useSelect } from "@wordpress/data";

const useSpacingIsZeroedByAncestor = ( clientId ) => {
  return useSelect( ( select ) => {
    const { getBlockParents, getBlock } = select( 'core/block-editor' );
    const { getBlockType } = select( 'core/blocks' );
    const parents = getBlockParents( clientId );

    for ( const parentId of parents ) {
      const parent = getBlock( parentId );
      if ( parent?.attributes?.spacingModifier === 0 ) {
        const blockType = getBlockType( parent.name );
        return blockType?.title || parent.name;
      }
    }

    return false;
  }, [ clientId ] );
};

export default useSpacingIsZeroedByAncestor;
