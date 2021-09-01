import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import { useSupports } from "@novablocks/block-editor";

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
