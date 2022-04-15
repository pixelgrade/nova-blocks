import attributes from "./attributes.json";

const withCardElementsStackingAttributes = ( block ) => {

  const cardElementsStackingSupports = block?.supports?.novaBlocks?.cardElementsStacking;

  if ( cardElementsStackingSupports !== true && cardElementsStackingSupports?.attributes !== true ) {
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

export default withCardElementsStackingAttributes;
