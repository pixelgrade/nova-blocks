import { __ } from "@wordpress/i18n";
import { cloneBlock } from "@wordpress/blocks";
import { useDispatch, useSelect } from "@wordpress/data";
import { useCallback } from "@wordpress/element";
import { BlockControls } from "@wordpress/block-editor";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";

import { useInnerBlocks } from "@novablocks/block-editor";

const SupernovaItemBlockControls = ( props ) => {
  const { clientId, attributes } = props;
  const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
  const block = useSelect( select => select( 'core/block-editor' ).getBlock( clientId ), [ clientId ] );

  const parentClientId = useSelect( select => {
    const parents = select( 'core/block-editor' ).getBlockParents( clientId ).slice();

    if ( parents.length ) {
      return parents[ parents.length - 1 ];
    }

    return null;
  }, [ clientId ] );

  const innerBlocks = useInnerBlocks( clientId );
  const parentInnerBlocks = useInnerBlocks( parentClientId );

  const addNewCard = useCallback( () => {
    const newInnerBlocks = parentInnerBlocks.slice();
    const index = newInnerBlocks.findIndex( block => block.clientId === clientId );
    const newBlock = cloneBlock( block );
    newInnerBlocks.splice( index + 1, 0, newBlock );
    replaceInnerBlocks( parentClientId, newInnerBlocks );
  }, [ clientId, innerBlocks, parentClientId, attributes ] );

  return (
    <BlockControls>
      <ToolbarGroup label={ __( 'Cards', '__plugin_txtd' ) }>
        <ToolbarButton onClick={ addNewCard }>
          { __( 'Duplicate Card', '__plugin_txtd' ) }
        </ToolbarButton>
      </ToolbarGroup>
    </BlockControls>
  )
}

export default SupernovaItemBlockControls;
