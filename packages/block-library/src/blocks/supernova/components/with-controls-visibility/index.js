import { useEffect } from "@wordpress/element";

const withControlsVisibility = OriginalComponent => {

  return props => {

    const {
      attributes,
      setSpaceAndSizingControlsVisibility
    } = props;

    useEffect( () => {
      const { cardLayout } = attributes;

      setSpaceAndSizingControlsVisibility( {
        minimumContainerHeight: cardLayout === 'stacked',
        imageContainerHeight: cardLayout !== 'stacked'
      } );

    }, [ attributes ] );

    return <OriginalComponent { ...props } />
  }
}

export default withControlsVisibility;
