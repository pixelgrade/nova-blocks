import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import { useSupports } from "@novablocks/block-editor";

import Controls from "../controls";

const withDopplerControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const dopplerSupport = supports?.novaBlocks?.scrollingEffect;

    if ( dopplerSupport !== true && ! dopplerSupport?.controls ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
}, 'withDopplerControls' );

export default withDopplerControls;
