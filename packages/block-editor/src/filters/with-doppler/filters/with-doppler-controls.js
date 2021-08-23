import { createHigherOrderComponent } from "@wordpress/compose";
import { select } from "@wordpress/data";
import { Fragment } from "@wordpress/element";
import Controls from "../controls";
import { useSupports } from "../../../hooks";

const withDopplerControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const dopplerSupport = supports?.novaBlocks?.doppler;

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
