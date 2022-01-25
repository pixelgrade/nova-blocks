import attributes from "./attributes.json";

const withContentPositionAttributes = ( block ) => {

  const contentPositionSupport = block?.supports?.novaBlocks?.contentPosition;

  if ( contentPositionSupport !== true && contentPositionSupport?.attributes !== true ) {
    return block;
  }

  return {
    ...block,
    attributes: {
      ...block.attributes,
      ...attributes
    }
  }
};

export default withContentPositionAttributes;
