import { useEffect } from "@wordpress/element";

const withControlsVisibility = OriginalComponent => {

  return props => {

    const {
      attributes,
      setControlsVisibility
    } = props;

    useEffect( () => {

      setControlsVisibility( {
        'space-and-sizing-customize': false,
        'content-top-spacing': false,
        'content-bottom-spacing': false,
        'minimum-container-height': false,
        'image-container-height': false,
        'visual-balance': false,
        'content-padding': false,
        'media-padding': false,
        'content-to-media-spacing': false,
      } );

    }, [ attributes ] );

    return <OriginalComponent { ...props } />
  }
}

export default withControlsVisibility;
