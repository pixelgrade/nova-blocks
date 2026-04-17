import attributes from "./attributes.json";

const withCardDescriptionSizeAttributes = ( block ) => {

  const cardDescriptionSizeSupports = block?.supports?.novaBlocks?.cardDescriptionSize;

  if ( cardDescriptionSizeSupports !== true && cardDescriptionSizeSupports?.attributes !== true ) {
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

export default withCardDescriptionSizeAttributes;
