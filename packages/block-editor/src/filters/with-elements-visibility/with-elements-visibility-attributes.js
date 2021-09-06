import attributes from "./attributes.json";

const withElementsVisibilityAttributes = ( block ) => {

  const elementsVisbilitySupport = block?.supports?.novaBlocks?.elementsVisibility;

  if ( elementsVisbilitySupport !== true && elementsVisbilitySupport?.attributes !== true ) {
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

export default withElementsVisibilityAttributes;
