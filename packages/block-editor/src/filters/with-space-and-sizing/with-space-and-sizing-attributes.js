import attributes from "./attributes.json";

const withSpaceAndSizingAttributes = ( block ) => {

  const spacingSupports = block?.supports?.novaBlocks?.spaceAndSizing;

  if ( spacingSupports !== true && spacingSupports?.attributes !== true ) {
    return block;
  }

  return {
    ...block,
    attributes: {
      ...block.attributes,
      ...attributes
    }
  };
};

export default withSpaceAndSizingAttributes;
