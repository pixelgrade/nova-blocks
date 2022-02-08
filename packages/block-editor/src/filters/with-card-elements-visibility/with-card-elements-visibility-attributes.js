import attributes from "./attributes.json";

const withCardElementsVisibilityAttributes = ( block ) => {

  const cardElementsVisibilitySupport = block?.supports?.novaBlocks?.cardElementsVisibility;

  if ( true !== cardElementsVisibilitySupport && true !== cardElementsVisibilitySupport?.attributes ) {
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

export default withCardElementsVisibilityAttributes;
