import attributes from "./attributes.json";

const withCardElementsStackingAttributes = ( block ) => {

  const spacingSupports = block?.supports?.novaBlocks?.cardElementsStacking;

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
}

export default withCardElementsStackingAttributes;
