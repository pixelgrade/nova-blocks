import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import { Fragment } from "@wordpress/element";

import attributes from "./attributes.json";
import OverlayFilterControls from "./controls";
import { useSupports } from "../../hooks";

const withOverlayFilterStrengthAttributes = ( block ) => {

  if ( ! block?.supports?.novaBlocks?.overlayFilterStrength ) {
    return block;
  }

  return {
    ...block,
    attributes: {
      ...block.attributes,
      ...attributes
    }
  };
}
addFilter( 'blocks.registerBlockType', 'novablocks/with-overlay-filter-strength-attributes', withOverlayFilterStrengthAttributes );

const withOverlayFilterStrengthControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.overlayFilterStrength ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <OverlayFilterControls { ...props } />
      </Fragment>
    )
  };
}, 'withOverlayFilterStrengthControls' );
addFilter( 'editor.BlockEdit', 'novablocks/with-overlay-filter-strength-controls', withOverlayFilterStrengthControls );
