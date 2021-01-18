import { addFilter } from '@wordpress/hooks';

const deprecatedStyles = {
  'is-style-accent': '6',
  'is-style-dark': '9',
  'is-style-darker': '10',
};

function addDeprecatedGroup( settings, name ) {

  if ( name !== 'core/group' ) {
    return settings;
  }

  return Object.assign( {}, settings, {
    attributes: Object.assign( {}, settings.attributes, {
      paletteVariation: {
        type: "string"
      }
    } ),
    deprecated: [ {
      attributes: settings.attributes,
      migrate( attributes, innerBlocks ) {
        const classAttr = attributes.className;
        const classes = classAttr.split(/\b\s+/);
        let paletteVariation = '0';

        const newClasses = classes.filter( className => {
          let isDeprecated = typeof deprecatedStyles[className] !== "undefined";

          if ( isDeprecated ) {
            paletteVariation = deprecatedStyles[className];
            return false;
          }

          return true;
        } )

        newClasses.push( `sm-variation-${ paletteVariation }` );

        return [
          Object.assign( {}, attributes, {
            paletteVariation,
            className: newClasses.join( " " )
          } ),
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
addFilter( 'blocks.registerBlockType', 'nova-blocks/deprecate-group', addDeprecatedGroup );
