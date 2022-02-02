import { addFilter } from "@wordpress/hooks";

export const withAlteredSettings = ( settings ) => {

  if ( settings.name !== 'core/media-text' ) {
    return settings;
  }

  return {
    ...settings,
    supports: {
      novaBlocks: {
        customAlign: true,
      }
    }
  }
};

addFilter( 'blocks.registerBlockType', 'novablocks/media-text/settings', withAlteredSettings, 20 );
