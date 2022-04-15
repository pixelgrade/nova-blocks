import { addFilter } from "@wordpress/hooks";
import attributes from "./attributes.json";

const addNovaBlocksSupport = ( settings ) => {

  if ( settings.name !== 'core/button' ) {
    return settings;
  }

  return {
    ...settings,
    supports: {
      ...settings.supports,
      novaBlocks: {
        colorSignal: {
          attributes: true,
          controls: true,
          functionalColors: true,
          paletteClassname: true,
          paletteVariationClassname: true,
          colorSignalClassname: true,
          minColorSignal: 1,
        }
      }
    },
  };
};
addFilter( 'blocks.registerBlockType', 'novablocks/button/alter-support', addNovaBlocksSupport, 1 );

const alterAttributes = ( settings ) => {

  if ( settings.name !== 'core/button' ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes
    }
  }
};

addFilter( 'blocks.registerBlockType', 'novablocks/button/alter-attributes', alterAttributes, 20 );
