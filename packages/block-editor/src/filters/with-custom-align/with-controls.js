import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { Fragment } from "@wordpress/element";
import Controls from "./controls";

const withCustomAlignControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    )

  };
}, 'withCustomAlignmentControls' );

export default withCustomAlignControls;
