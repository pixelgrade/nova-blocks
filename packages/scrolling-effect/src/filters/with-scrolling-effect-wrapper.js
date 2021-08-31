import { createHigherOrderComponent } from "@wordpress/compose";

import { useSupports } from "@novablocks/block-editor";

import withDoppler from "./with-scrolling-effect";

const withDopplerWrapper = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const WrappedComponent = withDoppler( OriginalComponent );

    if ( ! supports?.novaBlocks?.scrollingEffect || !! supports?.novaBlocks?.scrollingEffect.customWrapper ) {
      return <OriginalComponent { ...props } />
    }

    return <WrappedComponent { ...props } />
  };

}, 'withDopplerWrapper' );

export default withDopplerWrapper;
