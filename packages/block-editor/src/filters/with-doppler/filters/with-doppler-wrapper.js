import { createHigherOrderComponent } from "@wordpress/compose";
import { select } from "@wordpress/data";
import withDoppler from "./with-doppler";

const withDopplerWrapper = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.doppler || !! supports?.novaBlocks?.doppler.customWrapper ) {
      return <OriginalComponent { ...props } />
    }

    const WrappedComponent = withDoppler( OriginalComponent );

    return <WrappedComponent { ...props } />
  };

}, 'withDopplerWrapper' );

export default withDopplerWrapper;
