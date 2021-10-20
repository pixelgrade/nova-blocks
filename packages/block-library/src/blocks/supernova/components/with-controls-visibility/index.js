import { useEffect } from "@wordpress/element";

const withControlsVisibility = OriginalComponent => {

  return props => {

    const {
      attributes,
      setControlsVisibility
    } = props;

    useEffect( () => {

      const {
        cardLayout,
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
        'image-container-height': cardLayout !== 'stacked',
        'visual-balance' : layoutStyle !== 'parametric' && [ 'horizontal', 'horizontal-reverse' ].includes( cardLayout ),
        'content-to-media-spacing': cardLayout !== 'stacked',

        // Media Composition
        'media-composition-section': !! showMedia && sourceType !== 'content',

        // Shape Modeling
        'shape-modeling-section': cardLayout !== 'stacked',

        // Scrolling Effect
        'scrolling-effect-section': cardLayout === 'stacked',

        // Color Signal
        'emphasis-area': cardLayout !== 'stacked',

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
