import attributes from "../attributes.json";

const withColorSignalAttributes = ( settings ) => {

  const colorSignalSupport = settings?.supports?.novaBlocks?.colorSignal;

  if ( colorSignalSupport !== true && colorSignalSupport?.attributes !== true ) {
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

export default withColorSignalAttributes;
