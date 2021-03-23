import { createHigherOrderComponent } from "@wordpress/compose";
import { select } from "@wordpress/data";
import { setAttributesToInnerBlocks } from "@novablocks/block-editor";
import { getAlignFromMatrix } from "@novablocks/utils";

import AdvancedGallery from '@novablocks/advanced-gallery';
import Blob from '@novablocks/blob';

const withSupernovaAttributesValues = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {

    if ( 'novablocks/supernova' === props.name ) {
      const { clientId, attributes } = props;
      const { getBlock } = select( 'core/block-editor' );
      const block = getBlock( clientId );

      if ( ! block ) {
        return;
      }

      const { innerBlocks } = block;

      const attributeKeys = [
        'cardContentAlign',
        'cardLayout',
        'cardMediaOpacity',
        'sourceType',
        'preview',

        'palette',
        'paletteVariation',
        'useSourceColorAsReference',

        'showTitle',
        'showSubtitle',
        'showDescription',
        'showMeta',
        'showFooter',

        'contentStyle',
      ]
      .concat( Object.keys( _.omit( AdvancedGallery.attributes, [ 'images', 'defaultsGenerated' ] ) ) )
      .concat( Object.keys( Blob.attributes ) );

      const newAttributes = {};
      attributeKeys.forEach( key => { newAttributes[ key ] = attributes[ key ] } );
      newAttributes[ 'containerHeight' ] = attributes[ 'cardMediaAspectRatio' ];

      setAttributesToInnerBlocks( clientId, newAttributes );

      if ( Array.isArray( innerBlocks ) ) {
        innerBlocks.forEach( block => {
          const alignment = getAlignFromMatrix( attributes.cardContentAlign );
          setAttributesToInnerBlocks( block.clientId, { align: alignment[1] } );
        } );
      }
    }

    return <BlockListBlock { ...props } />
  };
}, 'withSupernovaAttributesValues' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'novablocks/with-collection-visibility-attributes', withSupernovaAttributesValues );
