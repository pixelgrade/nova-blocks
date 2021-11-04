import attributes from "../attributes.json";

const withDopplerAttributes = ( settings ) => {

  const dopplerSupport = settings?.supports?.novaBlocks?.scrollingEffect;

  if ( dopplerSupport !== true && ! dopplerSupport?.attributes ) {
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

export default withDopplerAttributes;
