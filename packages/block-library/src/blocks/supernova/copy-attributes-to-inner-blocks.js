import { createHigherOrderComponent } from "@wordpress/compose";
import { setAttributesToInnerBlocks, getAlignFromMatrix } from "@novablocks/block-editor";

const withSupernovaAttributesValues = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {

    if ( 'novablocks/supernova' === props.name ) {
      const { clientId, attributes } = props;

      const newAttributes = ( ( { cardContentAlign, cardLayout, cardMediaOpacity, sourceType, preview } ) => {
        return { cardContentAlign, cardLayout, cardMediaOpacity, sourceType, preview };
      } )( attributes );

      newAttributes['containerHeight'] = attributes['cardMediaAspectRatio'];

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
