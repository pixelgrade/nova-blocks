import { createHigherOrderComponent } from "@wordpress/compose";
import { select } from "@wordpress/data";
import { setAttributesToInnerBlocks, blobAttributes } from "@novablocks/block-editor";
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

        'preview',
        'sourceType',
        'layoutStyle',

        'palette',
        'paletteVariation',
        'useSourceColorAsReference',

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
