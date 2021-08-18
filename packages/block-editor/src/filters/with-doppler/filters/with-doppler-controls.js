import { createHigherOrderComponent } from "@wordpress/compose";
import { select } from "@wordpress/data";
import { Fragment } from "@wordpress/element";
import Controls from "../controls";

const withDopplerControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( !supports?.novaBlocks?.doppler && !supports?.novaBlocks?.doppler?.controls ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
} );

export default withDopplerControls;
