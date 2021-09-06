import attributes from "./attributes.json";

const withOverlayFilterAttributes = ( settings ) => {

  const overlayFilterSupport = settings?.supports?.novaBlocks?.overlayFilter;

  if ( overlayFilterSupport !== true && overlayFilterSupport?.attributes !== true ) {
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

export default withOverlayFilterAttributes;
