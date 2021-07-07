import { addFilter } from '@wordpress/hooks';
import attributes from "./collection-attributes.json";

const enableGridGeneratorControls = [
  'novablocks/posts-collection',
  'novablocks/supernova',
];

function addGridGeneratorAttributes( block ) {

  if ( ! enableGridGeneratorControls.includes( block.name ) ) {
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
addFilter( 'blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addGridGeneratorAttributes );
