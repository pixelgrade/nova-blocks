import { createHigherOrderComponent } from "@wordpress/compose";
import { dispatch, select, subscribe } from "@wordpress/data";
import { useEffect } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";

const withSupernovaUpdateChildren = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {

    const {
      name,
      attributes,
      clientId,
    } = props;

    const attributesBlacklist = [
      'contentSignal',
      'contentColorSignal',
      'defaultsGenerated',
      'images',
      'useSourceColorAsReference'
    ];

    const attributeKeys = Object.keys( attributes ).filter( key => {
      return ! attributesBlacklist.includes( key );
    } );

    useEffect( () => {

      if ( 'novablocks/supernova' !== name ) {
        return () => {};
      }

      const newAttributes = {};

      attributeKeys.forEach( key => {
        newAttributes[ key ] = attributes[ key ]
      } );

      newAttributes.colorSignal = attributes.contentColorSignal;

      const { getBlock } = select( 'core/block-editor' );
      const { updateBlockAttributes } = dispatch( 'core/block-editor' );
      const { innerBlocks } = getBlock( clientId );

      if ( Array.isArray( innerBlocks ) ) {
        innerBlocks.filter( block => block.name === 'novablocks/supernova-item' ).forEach( block => {
          updateBlockAttributes( block.clientId, newAttributes );
        } );
      }

    }, [ name, attributes, clientId ] );

    return (
      <BlockListBlock { ...props } />
    );

  }

}, 'withSupernovaUpdateChildren' );

addFilter( 'editor.BlockEdit', 'novablocks/with-supernova-update-children', withSupernovaUpdateChildren );
