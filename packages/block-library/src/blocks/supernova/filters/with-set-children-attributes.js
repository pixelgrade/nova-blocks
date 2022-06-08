import { useCallback } from "@wordpress/element";
import { useDispatch, useSelect } from "@wordpress/data";

import { getAlignFromMatrix } from "@novablocks/utils";
import { useInnerBlocks } from "@novablocks/block-editor";

import { getChildAttributes } from "../utils";

const withSetChildrenAttributes = OriginalComponent => {

  return props => {

    if ( props.name !== 'novablocks/supernova' ) {
      return <OriginalComponent { ...props } />
    }

    const { clientId } = props;
    const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
    const { getBlock } = useSelect( select => select( 'core/block-editor' ) );
    const innerBlocks = useInnerBlocks( clientId );

    const normalizeAttributes = useCallback( attributes => {
      const { cardLayout } = attributes;

      // if the card layout is being changed
      if ( typeof cardLayout !== "undefined" && cardLayout !== 'stacked' ) {
        attributes.minHeightFallback = 0;
      }

      if ( typeof cardLayout !== "undefined" && ! [ 'horizontal', 'horizontal-reverse' ].includes( cardLayout ) ) {
        attributes.emphasisArea = 100;
      }

      return attributes;
    }, [] );

    const setChildrenAttributes = useCallback( attributes => {
      const newAttributes = getChildAttributes( attributes );

      if ( Array.isArray( innerBlocks ) ) {
        innerBlocks.filter( block => block.name === 'novablocks/supernova-item' ).forEach( block => {
          updateBlockAttributes( block.clientId, newAttributes );

          if ( attributes.contentPosition ) {
            const contentBlocks = getBlock( block.clientId ).innerBlocks;
            const contentAlign = getAlignFromMatrix( attributes?.contentPosition );

            if ( Array.isArray( contentBlocks ) ) {

              contentBlocks.filter( block => block.name === 'novablocks/headline' ).forEach( block => {
                updateBlockAttributes( block.clientId, { textAlign: contentAlign[1] } );
              } )

              contentBlocks.filter( block => block.name === 'core/heading' ).forEach( block => {
                updateBlockAttributes( block.clientId, { textAlign: contentAlign[1] } );
              } )

              contentBlocks.filter( block => block.name === 'core/paragraph' ).forEach( block => {
                updateBlockAttributes( block.clientId, { align: contentAlign[1] } );
              } )

              contentBlocks.filter( block => block.name === 'core/buttons' ).forEach( block => {
                updateBlockAttributes( block.clientId, { layout: { ...block.attributes.layout, type: 'flex', justifyContent: contentAlign[1] } } );
              } )
            }
          }
        } );
      }
    }, [ innerBlocks ] );

    return (
      <OriginalComponent { ...props } setAttributes={ attributes => {
        const normalizedAttributes = normalizeAttributes( attributes );
        props.setAttributes( normalizedAttributes );
        setChildrenAttributes( normalizedAttributes );
      } } />
    )
  }
};

export default withSetChildrenAttributes;
