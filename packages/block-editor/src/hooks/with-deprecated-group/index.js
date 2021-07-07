import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

import { getClassNameWithPaletteHelpers } from '@novablocks/utils';

const deprecatedStyles = {
  'is-style-accent': {
    paletteVariation: 6,
    useSourceColorAsReference: true,
  },
  'is-style-dark': {
    paletteVariation: 9,
    useSourceColorAsReference: false,
  },
  'is-style-darker': {
    paletteVariation: 10,
    useSourceColorAsReference: false,
  },
};

function addDeprecatedGroup( settings, name ) {

  if ( name !== 'core/group' ) {
    return settings;
  }

  return Object.assign( {}, settings, {
    deprecated: [ {
      attributes: settings.attributes,
      migrate( attributes, innerBlocks ) {
        const classAttr = attributes.className;
        const classes = classAttr.split(/\b\s+/);
        let newAttributes = {};

        classes.some( className => {
          let isDeprecated = typeof deprecatedStyles[className] !== "undefined";

          if ( isDeprecated ) {
            newAttributes = deprecatedStyles[className];
            return true;
          }

          return false;
        } )

        return [
          Object.assign( {}, attributes, newAttributes ),
          innerBlocks
        ]
      },
      isEligible: ( attributes, innerBlocks ) => {
        const classAttr = attributes.className;

        if ( typeof classAttr !== "string" ) {
          return false;
        }

        const classes = classAttr.split(/\b\s+/);
        return classes.some( className => Object.keys( deprecatedStyles ).includes( className ) );
      },
      save: settings.save
    } ].concat( settings.deprecated ),
  } );
}
addFilter( 'blocks.registerBlockType', 'novablocks/deprecate-group', addDeprecatedGroup );
