import { addFilter } from '@wordpress/hooks';

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

const toLegacyPx = ( value ) => {
  if ( typeof value === 'number' ) {
    return `${ value }px`;
  }

  if ( typeof value === 'string' ) {
    const trimmed = value.trim();

    if ( trimmed.endsWith( 'px' ) ) {
      return value;
    }

    const numericValue = Number( trimmed );
    if ( ! Number.isNaN( numericValue ) ) {
      return `${ numericValue }px`;
    }
  }

  return value;
};

function addDeprecatedGroup( settings, name ) {

  if ( name !== 'core/group' ) {
    return settings;
  }

  return Object.assign( {}, settings, {
    deprecated: [ {
      attributes: settings.attributes,
      isEligible: ( attributes ) => {
        return typeof attributes?.mediaContainerHeight !== 'undefined' &&
               typeof attributes?.emphasisArea !== 'undefined';
      },
      // Validate legacy content that serialized these custom props as pixel values.
      save( props ) {
        return settings.save( {
          ...props,
          attributes: {
            ...props.attributes,
            mediaContainerHeight: toLegacyPx( props.attributes?.mediaContainerHeight ),
            emphasisArea: toLegacyPx( props.attributes?.emphasisArea ),
          },
        } );
      },
    }, {
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
        } );

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
