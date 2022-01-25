import { useEffect } from "@wordpress/element";

const withControlsVisibility = OriginalComponent => {

  return props => {

    const {
      attributes,
      setControlsVisibility
    } = props;

    useEffect( () => {

      setControlsVisibility( {
        'content-top-spacing': false,
        'content-bottom-spacing': false,
      } );

    }, [ attributes ] );

    return <OriginalComponent { ...props } />
  }
};

export default withControlsVisibility;
