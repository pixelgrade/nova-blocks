import {createHigherOrderComponent} from "@wordpress/compose";
import { dispatch, select } from "@wordpress/data";

const withSupernovaAttributesValues = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if ( 'novablocks/supernova' === props.name ) {
      const { clientId, attributes } = props;
      const { getBlock } = select( 'core/block-editor' );
      const { updateBlockAttributes } = dispatch( 'core/block-editor' );
      const collection = getBlock( clientId );
      const cards = collection.innerBlocks;

      const newAttributes = ( ( { cardLayout } ) => {
        return { cardLayout };
      } )( attributes );

      newAttributes['containerHeight'] = attributes['cardMediaAspectRatio'];

      cards.forEach( block => {
        updateBlockAttributes( block.clientId, newAttributes );

//        if ( Array.isArray( block.innerBlocks ) ) {
//          block.innerBlocks.forEach( innerBlock => {
//            updateBlockAttributes( innerBlock.clientId, {
//              align: newAttributes.contentAlign
//            } );
//          } );
//        }
      } )
    }
    return <BlockListBlock { ...props } />
  };
}, 'withSupernovaAttributesValues' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'novablocks/with-collection-visibility-attributes', withSupernovaAttributesValues );
