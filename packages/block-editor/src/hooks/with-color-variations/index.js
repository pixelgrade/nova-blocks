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

const {
  addFilter
} = wp.hooks;

function withAttributes( settings, name ) {

  if ( ! enableColorSetControls.includes( name ) ) {
    return settings;
  }

  return Object.assign( {}, settings, {
    attributes: Object.assign( {}, settings.attributes, {
      paletteVariation: {
        type: "string",
        default: "0"
      },
      palette: {
        type: "string",
        default: "1"
      }
    } ),
  } )
}
addFilter( 'blocks.registerBlockType', 'nova-blocks/with-color-sets-attributes', withAttributes );

function withDeprecation( settings, name ) {
  if ( ! enableColorSetControls.includes( name ) ) {
    return settings;
  }

  return Object.assign( {}, settings, {
    attributes: settings.attributes,
    deprecated: [
      {
        attributes: _.omit( settings.attributes, 'contentColor' ),
        isEligible( attributes ) {
          return "undefined" !== typeof attributes.contentColor;
        },
        migrate( attributes ) {
          let paletteVariation = '0';

          if ( attributes.contentColor.search( 'FFF' ) > -1 ) {
            paletteVariation = '10';
          }

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
