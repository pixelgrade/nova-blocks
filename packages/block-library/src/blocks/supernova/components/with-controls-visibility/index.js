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

    useEffect( () => {

      const {
        cardLayout,
        carouselLayout,
        layoutStyle,
        contentType,
        showCollectionTitle,
        showTitle,
        showMedia,
        showMeta,
      } = attributes;

      const hasMediaComposition = innerBlocks.some( block => 1 < block.attributes.images?.length );

      setControlsVisibility( {
        // Space and Sizing
        'minimum-container-height': 'stacked' === cardLayout,
        'media-container-height': 'variable' === carouselLayout,
        'media-aspect-ratio': 'stacked' !== cardLayout && 'variable' !== carouselLayout && showMedia,
        'visual-balance' : 'parametric' !== layoutStyle && [ 'horizontal', 'horizontal-reverse' ].includes( cardLayout ),
        'content-padding': true,
        'media-padding': showMedia,
        'content-to-media-spacing': 'stacked' !== cardLayout && showMedia,

        // Media Composition
        'media-composition-section': hasMediaComposition && !! showMedia && 'auto' !== contentType,

        // Scrolling Effect
        'scrolling-effect-section': 'carousel' !== layoutStyle,

        // Color Signal
        'emphasis-area': [ 'horizontal', 'horizontal-reverse' ].includes( cardLayout ),

        // Card Details
        'card-details': !! showCollectionTitle || !! showTitle || !! showMeta,
        'card-details-content': !! showCollectionTitle || !! showTitle,
        'collection-title-level': !! showCollectionTitle,
        'card-title-level': !! showTitle,
        'metadata-source': !! showMeta,
        'metadata-position': !! showMeta,

        // Media Composition
        'media-composition-block-controls': 1 === innerBlocks.length && showMedia
      } );

    }, [ attributes, innerBlocks ] );

    return <OriginalComponent { ...props } />
  }
};

export default withControlsVisibility;
