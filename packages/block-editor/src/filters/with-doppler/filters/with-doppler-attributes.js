import attributes from "../attributes.json";
import altAttributes from "../attributes-alt.json";

const withDopplerAttributes = ( settings ) => {

  if ( ! settings?.supports?.novaBlocks?.doppler && ! settings?.supports?.novaBlocks?.doppler?.attributes ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes,
      ...( !! settings?.supports?.novaBlocks?.doppler?.altAttributes ? altAttributes : {} )
    }
  };
}

export default withDopplerAttributes;
