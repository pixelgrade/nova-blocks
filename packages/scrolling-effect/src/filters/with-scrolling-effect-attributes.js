import attributes from "../attributes.json";
import altAttributes from "../attributes-alt.json";

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
      ...( !! dopplerSupport?.altAttributes ? altAttributes : {} )
    }
  };
}

export default withDopplerAttributes;
