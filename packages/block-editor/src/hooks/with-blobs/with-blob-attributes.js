import { addFilter } from "@wordpress/hooks";

import attributes from "./attributes.json";
import { hasBlobSupport } from './utils'

function addBlobAttributes( props ) {

  if ( ! hasBlobSupport( props ) ) {
    return props;
  }

  return {
    ...props,
    attributes: {
      ...props.attributes,
      ...attributes
    }
  };
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addBlobAttributes );
