import attributes from "../attributes.json";
import altAttributes from "../attributes-alt.json";

const withColorSignalAttributes = ( settings, name ) => {

  const colorSignalSupport = settings?.supports?.novaBlocks?.colorSignal;

  if ( colorSignalSupport !== true && colorSignalSupport?.attributes !== true ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes,
      ...( !! settings?.supports?.novaBlocks?.colorSignal?.altAttributes ? altAttributes : {} )
    }
  };
}

export default withColorSignalAttributes;
