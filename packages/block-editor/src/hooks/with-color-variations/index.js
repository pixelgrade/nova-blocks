import _ from 'lodash';

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';

import {
  ControlsSection,
  ControlsTab,
  ColorSetControls
} from "../../components";

const enableColorSetControls = [
  'novablocks/hero',
  'novablocks/slideshow',
  'novablocks/media',
  'novablocks/cards-collection',
  'novablocks/posts-collection',
];

const enableColorSetControlsDeprecation = [
  'novablocks/hero',
  'novablocks/slideshow',
];

const {
  addFilter
} = wp.hooks;

function withAttributes( settings, name ) {

  if ( ! enableColorSetControls.includes( name ) ) {
    return settings;
  }

  const novaSettings = wp.data.select('novablocks').getSettings();
  const { palettes } = novaSettings;
  const palette = palettes[0];
  const whiteIndex = palette.colors.findIndex( color => color.background.toUpperCase() === '#FFFFFF' );

  return Object.assign( {}, settings, {
    attributes: Object.assign( {}, settings.attributes, {
      palette: {
        type: "string",
        default: "0"
      },
      paletteVariation: {
        type: "string",
        default: `${ whiteIndex }`
      },
    } ),
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
        <ControlsSection label={ __( 'Color Contrast' ) }>
          <ControlsTab label={ __( 'Settings' ) }>
            <ColorSetControls { ...props } />
          </ControlsTab>
        </ControlsSection>
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
});
addFilter( 'editor.BlockEdit', 'novablocks/with-color-sets-controls', withColorSetControls );
