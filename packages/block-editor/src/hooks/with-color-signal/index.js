import _ from 'lodash';

import { Fragment } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { select } from '@wordpress/data';

import { getClassNameWithPaletteHelpers } from "@novablocks/utils";
import { addFilter } from '@wordpress/hooks';

import InspectorControls from './inspector-controls';
import attributes from './attributes.json';
import altAttributes from './attributes-alt.json';

const enableColorSignalControls = [
  'novablocks/announcement-bar',
  'novablocks/cards-collection',
  'novablocks/header',
  'novablocks/header-row',
  'novablocks/hero',
  'novablocks/media',
  'novablocks/posts-collection',
  'novablocks/slideshow',

  'core/group',
];

const withAltAttributes = [
  'novablocks/hero',
  'novablocks/slideshow',
];

const enableColorSignalDeprecation = [
  'novablocks/hero',
  'novablocks/slideshow',
];

const enableColorSignalClassnames = [
  'core/group',
  'novablocks/announcement-bar'
];

const withColorSetsAttributes = ( block, name ) => {

  if ( ! block?.supports?.novaBlocks?.colorSignal ) {
    return block;
  }

  return {
    ...block,
    attributes: {
      ...block.attributes,
      ...attributes,
      ...( withAltAttributes.includes( name ) ? altAttributes : {} )
    }
  };
}
addFilter( 'blocks.registerBlockType', 'nova-blocks/with-color-sets-attributes', withColorSetsAttributes );

const withColorSetsDeprecation = ( settings, name ) => {

  if ( ! enableColorSignalDeprecation.includes( name ) ) {
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
          const paletteVariation = hadDarkText || hadLightBackground ? '0' : '12';
          const colorSignal = hadDarkText || hadLightBackground ? 0 : 3;

          return {
            ...attributes,
            defaultsGenerated: true,
            paletteVariation,
            colorSignal,
          };
        },
        save: settings.save,
      }
    ].concat( settings.deprecated ),
  } );
}
addFilter( 'blocks.registerBlockType', 'nova-blocks/with-color-signal-deprecation', withColorSetsDeprecation );

const withColorSignalControls = createHigherOrderComponent( OriginalComponent => {

  return props => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.colorSignal ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <InspectorControls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  }
} );
addFilter( 'editor.BlockEdit', 'novablocks/with-color-signal-controls', withColorSignalControls );

const withColorSetsClassnames = createHigherOrderComponent( ( BlockEdit ) => {

  return ( props ) => {

    if ( ! enableColorSignalClassnames.includes( props.name ) ) {
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
}, "withColorSetsClassnames" );

addFilter( 'editor.BlockEdit', 'novablocks/add-color-signal-classnames-to-edit', withColorSetsClassnames );
