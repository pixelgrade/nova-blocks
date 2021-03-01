import _ from 'lodash';

import { Fragment } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';

import {
  colorSetAttributes,
  ColorSetControls
} from "../../components";

import { getClassNameWithPaletteHelpers } from "@novablocks/utils";

const enableColorSetControls = [
  'novablocks/announcement-bar',
  'novablocks/header',
  'novablocks/header-row',
  'novablocks/hero',
  'novablocks/slideshow',
  'novablocks/media',
  'novablocks/cards-collection',
  'novablocks/posts-collection',

  'core/group',
];

const enableColorSetControlsDeprecation = [
  'novablocks/hero',
  'novablocks/slideshow',
];

const enablePaletteClasses = [
  'core/group',
  'novablocks/announcement-bar'
];

const {
  addFilter
} = wp.hooks;

function withAttributes( settings, name ) {

  if ( ! enableColorSetControls.includes( name ) ) {
    return settings;
  }

  return Object.assign( {}, settings, {
    attributes: Object.assign( {}, settings.attributes, colorSetAttributes ),
  } )
}
addFilter( 'blocks.registerBlockType', 'nova-blocks/with-color-sets-attributes', withAttributes );

function withDeprecation( settings, name ) {

  if ( ! enableColorSetControlsDeprecation.includes( name ) ) {
    return settings;
  }

  return Object.assign( {}, settings, {
    attributes: _.omit( settings.attributes, [ 'contentColor', 'overlayFilterStyle' ] ),
    deprecated: [
      {
        attributes: settings.attributes,
        isEligible( attributes ) {
          return "undefined" === typeof attributes.paletteVariation;
        },
        migrate( attributes ) {
          const { contentColor, overlayFilterStyle } = attributes;
          const hadDarkText = !! contentColor && contentColor.search( '000' ) > -1;
          const hadLightBackground = !! overlayFilterStyle && overlayFilterStyle === 'light';
          const paletteVariation = hadDarkText || hadLightBackground ? '0' : '10';

          return {
            ...attributes,
            defaultsGenerated: true,
            paletteVariation: paletteVariation
          };
        },
        save: settings.save,
      }
    ].concat( settings.deprecated ),
  } );
}
addFilter( 'blocks.registerBlockType', 'nova-blocks/with-color-sets-deprecation', withDeprecation );

const withColorSetControls = createHigherOrderComponent(OriginalComponent => {

  return ( props ) => {

    if ( ! enableColorSetControls.includes( props.name ) ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <ColorSetControls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
});

addFilter( 'editor.BlockEdit', 'novablocks/with-color-sets-controls', withColorSetControls );

function withPaletteAttributes( settings, name ) {

  if ( name !== 'core/group' ) {
    return settings;
  }

  return Object.assign( {}, settings, {
    attributes: Object.assign( {}, settings.attributes, {
      palette: {
        type: "number",
        default: 1,
      },
      paletteVariation: {
        type: "number",
        default: 1,
      },
      useSourceColorAsReference: {
        type: "boolean",
        default: false,
      }
    } ),
  } );
}

addFilter( 'blocks.registerBlockType', 'novablocks/add-color-set-class-names-to-edit', withPaletteAttributes );

const withPaletteClassNames = createHigherOrderComponent( ( BlockEdit ) => {

  return ( props ) => {

    if ( ! enablePaletteClasses.includes( props.name ) ) {
      return <BlockEdit { ...props } />
    }

    const className = props?.attributes?.className || '';
    const newClassName = getClassNameWithPaletteHelpers( className, props.attributes );

    const newProps = Object.assign( {}, props, {
      attributes: Object.assign( {}, props.attributes, {
        className: newClassName
      } )
    } );

    return (
      <BlockEdit { ...newProps } />
    )
  };
}, "withPaletteClassNames" );

addFilter( 'editor.BlockEdit', 'novablocks/add-color-set-class-names-to-edit', withPaletteClassNames );
