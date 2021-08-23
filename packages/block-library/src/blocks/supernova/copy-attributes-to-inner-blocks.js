import { createHigherOrderComponent } from "@wordpress/compose";
import { useEffect } from "@wordpress/element";
import { dispatch, select, subscribe } from "@wordpress/data";
import { blobAttributes } from "@novablocks/block-editor";

import AdvancedGallery from '@novablocks/advanced-gallery';

const attributeKeys = [
  'cardLayout',
  'cardMediaOpacity',
  'contentAreaWidth',
  'contentPosition',

  'preview',
  'sourceType',
  'layoutStyle',

  'showTitle',
  'showSubtitle',
  'showDescription',
  'showMeta',
  'showButtons',

  'scrollingEffect',

  'thumbnailAspectRatio',
  'thumbnailAspectRatioString',

  'contentStyle',
  ...Object.keys( blobAttributes )
]
.concat( Object.keys( _.omit( AdvancedGallery.attributes, [ 'images', 'defaultsGenerated' ] ) ) )

const withSupernovaUpdateChildren = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {

    const {
      name,
      attributes,
      clientId,
    } = props;

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

//wp.hooks.addFilter( 'editor.BlockEdit', 'novablocks/with-supernova-update-children', withSupernovaUpdateChildren );
