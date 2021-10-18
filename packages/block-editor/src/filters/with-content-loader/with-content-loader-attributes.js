import attributes from "./attributes.json";

const withContentLoaderAttributes = settings => {

  const contentLoaderSupports = settings?.supports?.novaBlocks?.contentLoader;

  if ( contentLoaderSupports !== true && contentLoaderSupports?.attributes !== true ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes,
    }
  };
}

export default withContentLoaderAttributes;
