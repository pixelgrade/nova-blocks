import { createHigherOrderComponent } from "@wordpress/compose";
import { select } from "@wordpress/data";
import { setAttributesToInnerBlocks } from "@novablocks/block-editor";
import { getAlignFromMatrix } from "@novablocks/utils";

import AdvancedGallery from '@novablocks/advanced-gallery';

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
        'contentAreaWidth',
        'sourceType',
        'preview',

        'palette',
        'paletteVariation',
        'useSourceColorAsReference',

        'showTitle',
        'showSubtitle',
        'showDescription',
        'showMeta',
        'showButtons',

        'thumbnailAspectRatio',
        'thumbnailAspectRatioString',

        'contentStyle',
      ]
      .concat( Object.keys( _.omit( AdvancedGallery.attributes, [ 'images', 'defaultsGenerated' ] ) ) )

      const newAttributes = {};
      attributeKeys.forEach( key => { newAttributes[ key ] = attributes[ key ] } );

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
