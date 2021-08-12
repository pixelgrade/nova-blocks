import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";
import Controls from "./controls";
import { useSupports } from "../../hooks";

const withSpaceAndSizingControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.spaceAndSizing ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <Controls { ...props } />
      </Fragment>
    )
  };
});

export default withSpaceAndSizingControls;
