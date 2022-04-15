import { createHigherOrderComponent } from "@wordpress/compose";

import { useSupports } from "@novablocks/block-editor";

import withScrollingEffectProvider from "./with-scrolling-effect-provider";

const withScrollingEffectWrapper = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const WrappedComponent = withScrollingEffectProvider( OriginalComponent );

    if ( ! supports?.novaBlocks?.scrollingEffect || !! supports?.novaBlocks?.scrollingEffect.customWrapper ) {
      return <OriginalComponent { ...props } />
    }

    return <WrappedComponent { ...props } />
  };

}, 'withScrollingEffectWrapper' );

export default withScrollingEffectWrapper;
