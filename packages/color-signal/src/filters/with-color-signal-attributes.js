import attributes from "../attributes.json";

const withColorSignalAttributes = ( settings ) => {

  const colorSignalSupport = settings?.supports?.novaBlocks?.colorSignal;

  if ( colorSignalSupport !== true && colorSignalSupport?.attributes !== true ) {
    return settings;
  }

  const activationAttribute = colorSignalSupport?.activationAttribute;
  const activationAttributes = activationAttribute ? {
    [ activationAttribute ]: {
      type: 'boolean',
      default: false,
    },
  } : {};
  const paletteInheritanceAttribute = colorSignalSupport?.paletteInheritanceAttribute;
  const paletteInheritanceAttributes = paletteInheritanceAttribute ? {
    [ paletteInheritanceAttribute ]: {
      type: 'boolean',
    },
  } : {};

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes,
      ...activationAttributes,
      ...paletteInheritanceAttributes,
    }
  };
};

export default withColorSignalAttributes;
