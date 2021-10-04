import { useEffect } from "@wordpress/element";

const withControlsVisibility = OriginalComponent => {

  return props => {

    const {
      attributes,
      setControlsVisibility
    } = props;

    useEffect( () => {
      const { cardLayout } = attributes;

      setControlsVisibility( {
        'minimum-container-height': cardLayout === 'stacked',
        'image-container-height': cardLayout !== 'stacked',
        'visual-balance' : cardLayout === 'horizontal' || cardLayout ==='horizontal-reverse',
        'content-to-media-spacing': cardLayout !== 'stacked',
        'media-composition-section': cardLayout !== 'stacked',
        'shape-modeling-section': cardLayout !== 'stacked',
        'scrolling-effect-section': cardLayout === 'stacked',
        'emphasis-area': cardLayout !== 'stacked'
      } );

    }, [ attributes ] );

    return <OriginalComponent { ...props } />
  }
}

export default withControlsVisibility;
