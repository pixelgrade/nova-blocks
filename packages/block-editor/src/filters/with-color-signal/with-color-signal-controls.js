import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { Fragment } from "@wordpress/element";
import InspectorControls from "./inspector-controls";

const withColorSignalControls = createHigherOrderComponent( OriginalComponent => {

  return props => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.colorSignal ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <InspectorControls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  }
} );

export default withColorSignalControls;
