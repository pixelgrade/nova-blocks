import { isUndefined } from "lodash";

import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import { select } from "@wordpress/data";
import { Fragment } from "@wordpress/element";

import attributes from "./attributes.json";
import Controls from "./controls";

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

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.overlayFilterStrength ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    )
  };
}, 'withOverlayFilterStrengthControls' );
addFilter( 'editor.BlockEdit', 'novablocks/with-overlay-filter-strength-controls', withOverlayFilterStrengthControls );
