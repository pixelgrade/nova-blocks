import attributes from "./attributes.json";
import altAttributes from "./attributes-alt.json";

const withColorSignalAttributes = ( settings, name ) => {

  if ( ! settings?.supports?.novaBlocks?.colorSignal ) {
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
