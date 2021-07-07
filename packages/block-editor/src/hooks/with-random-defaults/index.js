import { addFilter } from '@wordpress/hooks';

const withDefaultsGeneratedDeprecated = ( settings ) => {

  if ( ! settings?.supports?.novaBlocks?.customDefaults ) {
    return settings;
  }

  const newDeprecated = [
    {
      attributes: settings.attributes,
      isEligible( attributes ) {
        return "undefined" === typeof attributes.defaultsGenerated;
      },
      migrate( attributes ) {
        return {
          ...attributes,
          defaultsGenerated: true
        };
      },
      save: settings.save,
    }
  ];

  const deprecated = Array.isArray( settings.deprecated ) ? settings.deprecated.concat( newDeprecated ) : newDeprecated;

  return {
    ...settings,
    deprecated
  }
}
addFilter( 'blocks.registerBlockType', 'novablocks/hero-defaults-generated-deprecated', withDefaultsGeneratedDeprecated );
