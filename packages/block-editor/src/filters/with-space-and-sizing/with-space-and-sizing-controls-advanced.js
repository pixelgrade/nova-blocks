import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";
import ControlsAdvanced from "./controls/space-and-sizing-advanced";
import { useSupports } from "../../hooks";

const withSpaceAndSizingControlsAdvanced = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.spaceAndSizing ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <ControlsAdvanced { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
}, 'withSpaceAndSizingControlsAdvanced' );

export default withSpaceAndSizingControlsAdvanced;
