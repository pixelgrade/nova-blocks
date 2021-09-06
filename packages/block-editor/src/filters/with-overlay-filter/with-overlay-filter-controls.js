import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import { useSupports } from "../../hooks";
import Controls from "./controls";

const withOverlayFilterControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( supports?.novaBlocks?.overlayFilter !== true && supports?.novaBlocks?.overlayFilter?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <Controls { ...props } />
      </Fragment>
    )
  };
}, 'withOverlayFilterControls' );

export default withOverlayFilterControls;
