import { useEffect } from "@wordpress/element";

const withControlsVisibility = OriginalComponent => {

  return props => {

    const {
      attributes,
      setControlsVisibility
    } = props;

    useEffect( () => {

      setControlsVisibility( {
        'minimum-container-height': false,
      } );

    }, [ attributes ] );

    return <OriginalComponent { ...props } />
  }
}

export default withControlsVisibility;
