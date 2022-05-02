import { addFilter } from "@wordpress/hooks";

const addNovaBlocksSupport = ( settings ) => {

  if ( settings.name !== 'core/columns' ) {
    return settings;
  }

  return {
    ...settings,
    supports: {
      ...settings.supports,
      novaBlocks: {
        spaceAndSizing: true,
      }
    },
  };
};
addFilter( 'blocks.registerBlockType', 'novablocks/columns/settings-add-nb-support', addNovaBlocksSupport, 1 );
