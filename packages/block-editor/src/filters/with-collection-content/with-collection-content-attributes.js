import attributes from "./attributes.json";

const withCollectionContentAttributes = settings => {

  const supportsCollectionContent = settings?.supports?.novaBlocks?.collectionContent;

  if ( true !== supportsCollectionContent && true !== supportsCollectionContent?.attributes ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes,
    }
  };
};

export default withCollectionContentAttributes;
