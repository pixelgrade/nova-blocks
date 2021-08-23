import { createHigherOrderComponent } from "@wordpress/compose";
import { select } from "@wordpress/data";
import withDoppler from "./with-doppler";
import { useSupports } from "../../../hooks";

const withDopplerWrapper = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.doppler || !! supports?.novaBlocks?.doppler.customWrapper ) {
      return <OriginalComponent { ...props } />
    }

    const WrappedComponent = withDoppler( OriginalComponent );

    return <WrappedComponent { ...props } />
  };

}, 'withDopplerWrapper' );

export default withDopplerWrapper;
