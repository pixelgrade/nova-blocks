import attributes from "./attributes.json";

function withBlobsAttributes( settings ) {

  if ( ! settings?.supports?.novaBlocks?.blobs ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes
    }
  };
}

export default withBlobsAttributes;
