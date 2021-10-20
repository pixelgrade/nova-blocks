import { useEffect } from "@wordpress/element";

const withControlsVisibility = OriginalComponent => {

  return props => {

    const {
      attributes,
      setControlsVisibility
    } = props;

    useEffect( () => {
      const { cardLayout, layoutStyle, sourceType, showMeta } = attributes;

      setControlsVisibility( {
        'minimum-container-height': cardLayout === 'stacked',
        'image-container-height': cardLayout !== 'stacked',
        'visual-balance' : layoutStyle !== 'parametric' && [ 'horizontal', 'horizontal-reverse' ].includes( cardLayout ),
        'content-to-media-spacing': cardLayout !== 'stacked',
        'media-composition-section': cardLayout !== 'stacked' && sourceType !== 'content',
        'shape-modeling-section': cardLayout !== 'stacked',
        'scrolling-effect-section': cardLayout === 'stacked',
        'emphasis-area': cardLayout !== 'stacked',
        'metadata-source': showMeta === true,
        'metadata-position': showMeta === true,
      } );

    }, [ attributes ] );

    return <OriginalComponent { ...props } />
  }
}

export default withControlsVisibility;
