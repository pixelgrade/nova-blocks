import { createHigherOrderComponent } from "@wordpress/compose";
import { useDispatch, useSelect } from "@wordpress/data";

const withMenuVisibilityAttributes = createHigherOrderComponent( BlockListBlock => {
  return ( props ) => {
    if ( 'novablocks/menu-food' === props.name ) {
      const { clientId, attributes } = props;
      const { getBlock } = useSelect( select => select( 'core/block-editor' ) );
      const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
      const menu = getBlock( clientId );
      const sections = menu?.innerBlocks;
      const newAttributes = (
        ( { showPrices, showDescription } ) => (
          { showPrices, showDescription }
        )
      )( attributes );

      if ( Array.isArray( sections ) ) {
        sections.forEach( block => {
          if ( Array.isArray( block.innerBlocks ) ) {
            block.innerBlocks.forEach( innerBlock => {
              updateBlockAttributes( innerBlock.clientId, newAttributes );
            } );
          }
        } );
      }
    }
    return <BlockListBlock { ...props } />
  };
}, 'withMenuVisibilityAttributes' );

export default withMenuVisibilityAttributes;
