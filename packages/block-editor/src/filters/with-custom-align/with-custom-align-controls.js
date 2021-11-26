import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { Fragment } from "@wordpress/element";
import Controls from "./controls";

const withCustomAlignControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.customAlign ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    )

  };
}, 'withCustomAlignmentControls' );

export default withCustomAlignControls;
