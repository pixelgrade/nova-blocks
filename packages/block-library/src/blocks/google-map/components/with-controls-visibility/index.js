import { useEffect } from "@wordpress/element";

const withControlsVisibility = Component => {

  return ( props ) => {

    const { setControlsVisibility } = props;

    useEffect( () => {
      setControlsVisibility( {
        'start-frame-panel': false,
      } );
    }, [] );

    return (
      <Component { ...props } />
    )
  }
}

export default withControlsVisibility;
