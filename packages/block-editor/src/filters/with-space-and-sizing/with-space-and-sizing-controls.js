import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";
import Controls from "./controls";
import { useSupports } from "../../hooks";

const withSpaceAndSizingControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( supports?.novaBlocks?.spaceAndSizing !== true && supports?.novaBlocks?.spaceAndSizing?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    )
  };
}, 'withSpaceAndSizingControls' );

export default withSpaceAndSizingControls;
