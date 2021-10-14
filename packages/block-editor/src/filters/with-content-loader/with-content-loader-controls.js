import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import { useSupports } from "../../hooks";
import InspectorControls from "./inspector-controls";

const withContentLoaderControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.contentLoader ) {
      return (
        <OriginalComponent { ...props } />
      )
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <InspectorControls { ...props } />
      </Fragment>
    )
  }
}, 'withContentLoaderControls' );

export default withContentLoaderControls;
