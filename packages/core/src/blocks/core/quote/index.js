import { registerBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';

registerBlockStyle( 'core/quote', {
  name: 'large',
  label: 'Grande',
} );

registerBlockStyle( 'core/quote', {
  name: 'editorial',
  label: 'Editorial',
} );

const addDeprecatedQuoteWithoutNormalFontSizeClass = ( settings, name ) => {
  if ( name !== 'core/quote' || typeof settings?.save !== 'function' ) {
    return settings;
  }

  const deprecated = Array.isArray( settings.deprecated )
    ? settings.deprecated
    : [];

  const deprecatedFontSize = {
    ...( settings.attributes?.fontSize || {} ),
  };
  delete deprecatedFontSize.default;

  const deprecatedAttributes = {
    ...settings.attributes,
    // Legacy quote markup did not serialize the default `normal` font size class.
    fontSize: deprecatedFontSize,
  };

  return {
    ...settings,
    deprecated: [
      {
        attributes: deprecatedAttributes,
        isEligible: ( attributes ) => {
          const className = attributes?.className || '';
          return ! className.includes( 'has-normal-font-size' );
        },
        save: settings.save,
      },
    ].concat( deprecated ),
  };
};

addFilter(
  'blocks.registerBlockType',
  'novablocks/deprecate-quote-without-normal-font-size-class',
  addDeprecatedQuoteWithoutNormalFontSizeClass
);
