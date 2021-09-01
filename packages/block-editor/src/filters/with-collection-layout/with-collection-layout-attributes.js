import attributes from "./attributes.json";

const withCollectionLayoutAttributes = ( block ) => {

  const spacingSupports = block?.supports?.novaBlocks?.collectionLayout;

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

export default withCollectionLayoutAttributes;
