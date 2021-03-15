import { createHigherOrderComponent } from "@wordpress/compose";
import { setAttributesToInnerBlocks, getAlignFromMatrix } from "@novablocks/block-editor";

import { cardsManagerAttributes } from './utils';

const withSupernovaAttributesValues = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {

    if ( 'novablocks/supernova' === props.name ) {
      const { clientId, attributes } = props;

      const attributeKeys = Object.keys( cardsManagerAttributes ).concat( [
        'cardContentAlign',
        'cardLayout',
        'cardMediaOpacity',
        'sourceType',
        'preview'
      ] );

      const newAttributes = {};
      attributeKeys.forEach( key => { newAttributes[ key ] = attributes[ key ] } );
      newAttributes[ 'containerHeight' ] = attributes[ 'cardMediaAspectRatio' ];

      setAttributesToInnerBlocks( clientId, newAttributes );
    }

    if ( 'novablocks/supernova-item' === props.name ) {
      const { clientId, attributes } = props;
      const alignment = getAlignFromMatrix( attributes.cardContentAlign );

      setAttributesToInnerBlocks( clientId, {
        align: alignment[1]
      } );
    }

    return <BlockListBlock { ...props } />
  };
}, 'withSupernovaAttributesValues' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'novablocks/with-collection-visibility-attributes', withSupernovaAttributesValues );
