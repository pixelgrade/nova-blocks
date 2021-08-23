import { createHigherOrderComponent } from "@wordpress/compose";
import { select } from "@wordpress/data";
import { Fragment } from "@wordpress/element";
import Controls from "../controls";

const withDopplerControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;
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
