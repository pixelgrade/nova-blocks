import { createHigherOrderComponent } from "@wordpress/compose";

import { useSupports } from "@novablocks/block-editor";
import * as utils from "../utils";

const withColorSignal = createHigherOrderComponent( OriginalComponent => {

  return props => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.colorSignal ) {
      return <OriginalComponent { ...props } />
    }

    const colorSignal = {
      utils,
    };

    return (
      <OriginalComponent { ...props } colorSignal={ colorSignal }/>
    );
  }
}, 'withColorSignal' );

export default withColorSignal;
