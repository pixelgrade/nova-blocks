import attributes from "./attributes.json";

function withSpaceAndSizingAttributes( block ) {

  if ( ! block?.supports?.novaBlocks?.spaceAndSizing ) {
    return block;
  }

  if ( typeof block.attributes !== 'undefined' ) {
    Object.assign( block.attributes, attributes );
  }

  return block;
}

export default withSpaceAndSizingAttributes;
