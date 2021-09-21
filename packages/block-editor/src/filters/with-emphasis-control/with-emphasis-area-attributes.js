import attributes from "./attributes.json";

const withEmphasisAreaAttributes = (settings) => {

  const colorSignalSupport = settings?.supports?.novaBlocks?.colorSignal;

  if ( colorSignalSupport !== true && colorSignalSupport?.controls !== true ) {
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

export default withEmphasisAreaAttributes;
