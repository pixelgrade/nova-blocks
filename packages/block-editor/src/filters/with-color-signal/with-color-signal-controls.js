import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { Fragment } from "@wordpress/element";
import Controls from "./controls";

const withColorSignalControls = createHigherOrderComponent( OriginalComponent => {

  return props => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.colorSignal ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  }
}, 'withColorSignalControls' );

export default withColorSignalControls;
