import { createHigherOrderComponent } from "@wordpress/compose";
import withDoppler from "./with-doppler";
import { useSupports } from "../../../hooks";

const withDopplerWrapper = createHigherOrderComponent( OriginalComponent => {


  return ( props ) => {

    const supports = useSupports( props.name );
    const WrappedComponent = withDoppler( OriginalComponent );

    if ( ! supports?.novaBlocks?.doppler || !! supports?.novaBlocks?.doppler.customWrapper ) {
      return <OriginalComponent { ...props } />
    }

    return <WrappedComponent { ...props } />
  };

}, 'withDopplerWrapper' );

export default withDopplerWrapper;
