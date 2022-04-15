import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import { useSupports } from "@novablocks/block-editor";

import Controls from "./controls";

const withColorSignalControls = createHigherOrderComponent( OriginalComponent => {

  return props => {

    const supports = useSupports( props.name );
    const colorSignalSupport = supports?.novaBlocks?.colorSignal;

    if ( colorSignalSupport !== true && colorSignalSupport?.controls !== true ) {
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
