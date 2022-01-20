import { useInnerBlocks } from "@novablocks/block-editor";
import { useEffect } from "@wordpress/element";

const withControlsVisibility = OriginalComponent => {

  return props => {

    const {
      attributes,
      setControlsVisibility,
      clientId
    } = props;

    const innerBlocks = useInnerBlocks( clientId );
    const hasMediaComposition = innerBlocks.some( block => block.attributes.images?.length > 1 );

    useEffect( () => {

      const {
        cardLayout,
        carouselLayout,
        layoutStyle,
        sourceType,
        showCollectionTitle,
        showTitle,
        showMedia,
        showMeta,
      } = attributes;

      setControlsVisibility( {
        // Space and Sizing
        'minimum-container-height': cardLayout === 'stacked',
        'media-container-height': carouselLayout === 'variable',
        'media-aspect-ratio': cardLayout !== 'stacked' && carouselLayout !== 'variable' && showMedia,
        'visual-balance' : layoutStyle !== 'parametric' && [ 'horizontal', 'horizontal-reverse' ].includes( cardLayout ),
        'content-padding': true,
        'media-padding': showMedia,
        'content-to-media-spacing': cardLayout !== 'stacked' && showMedia,

        // Media Composition
        'media-composition-section': hasMediaComposition && !! showMedia && sourceType !== 'content',

        // Shape Modeling
        'shape-modeling-section': cardLayout !== 'stacked',

        // Scrolling Effect
        'scrolling-effect-section': layoutStyle !== 'carousel',

        // Color Signal
        'emphasis-area': [ 'horizontal', 'horizontal-reverse' ].includes( cardLayout ),

        // Card Details
        'card-details': !! showCollectionTitle || !! showTitle || !! showMeta,
        'card-details-content': !! showCollectionTitle || !! showTitle,
        'collection-title-level': !! showCollectionTitle,
        'card-title-level': !! showTitle,
        'metadata-source': !! showMeta,
        'metadata-position': !! showMeta,
      } );

    }, [ attributes ] );

    return <OriginalComponent { ...props } />
  }
}

export default withControlsVisibility;
