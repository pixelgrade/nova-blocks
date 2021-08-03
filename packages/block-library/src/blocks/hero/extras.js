const {addFilter} = wp.hooks;

import spacingAttributes from './attributes-spacing.json';

const alterAttributes = ( settings ) => {

  if ( settings.name !== 'novablocks/hero' ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...spacingAttributes
    },
  }
}

addFilter( 'blocks.registerBlockType', 'novablocks/hero/settings', alterAttributes );
