import { useCallback } from "@wordpress/element";
import { useDispatch, useSelect } from "@wordpress/data";

import { getChildAttributes } from "../utils";
import { getAlignFromMatrix } from "@novablocks/utils";

const withSetChildrenAttributes = OriginalComponent => {

  return props => {

    const { clientId } = props;
    const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
    const { getBlock } = useSelect( select => select( 'core/block-editor' ) );

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
    }, [] )

    const setChildrenAttributes = useCallback( attributes => {
      const { innerBlocks } = getBlock( clientId );
      const newAttributes = getChildAttributes( attributes );

      if ( Array.isArray( innerBlocks ) ) {
        innerBlocks.filter( block => block.name === 'novablocks/supernova-item' ).forEach( block => {
          updateBlockAttributes( block.clientId, newAttributes );

          const contentBlocks = getBlock( block.clientId ).innerBlocks;

          if ( Array.isArray( contentBlocks ) ) {
            contentBlocks.filter( block => block.name === 'novablocks/headline' ).forEach( block => {
              const contentAlign = getAlignFromMatrix( attributes?.contentPosition );

              updateBlockAttributes( block.clientId, { textAlign: contentAlign[1] } );
            } )
          }
        } );
      }
    }, [ clientId ] );

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
