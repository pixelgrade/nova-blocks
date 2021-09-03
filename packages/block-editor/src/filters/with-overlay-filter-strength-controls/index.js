import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import { Fragment } from "@wordpress/element";

import attributes from "./attributes.json";
import OverlayFilterControls from "./controls";
import { useSupports } from "../../hooks";

const withOverlayFilterAttributes = ( block ) => {

  if ( ! block?.supports?.novaBlocks?.overlayFilter ) {
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
addFilter( 'blocks.registerBlockType', 'novablocks/with-overlay-filter-attributes', withOverlayFilterAttributes );

const withOverlayFilter = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.overlayFilter ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <OverlayFilterControls { ...props } />
      </Fragment>
    )
  };
}, 'withOverlayFilter' );
addFilter( 'editor.BlockEdit', 'novablocks/with-overlay-filter-controls', withOverlayFilter );
