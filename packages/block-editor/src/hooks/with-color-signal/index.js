import _ from 'lodash';

import { Fragment } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { select } from '@wordpress/data';

import { getClassNameWithPaletteHelpers } from "@novablocks/utils";
import { addFilter } from '@wordpress/hooks';

import InspectorControls from './inspector-controls';
import attributes from './attributes.json';
import altAttributes from './attributes-alt.json';

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

const enableColorSetsDeprecation = [
  'novablocks/hero',
  'novablocks/slideshow',
];

const enableColorSetsClassnames = [
  'core/group',
  'novablocks/announcement-bar'
];

const withColorSetsAttributes = ( block, name ) => {

  if ( ! enableColorSetControls.includes( name ) && ! block?.supports?.novaBlocks?.colorsSets ) {
    return block;
  }

  return {
    ...block,
    attributes: {
      ...block.attributes,
      ...attributes
    }
  };
}
addFilter( 'blocks.registerBlockType', 'nova-blocks/with-color-sets-attributes', withColorSetsAttributes );

const withAltAttributes = [
  'novablocks/hero',
  'novablocks/slideshow',
];

const withColorSetsAltAttributes = ( block, name ) => {

  if ( ! withAltAttributes.includes( name ) ) {
    return block;
  }

  return {
    ...block,
    attributes: {
      ...block.attributes,
      ...altAttributes
    }
  };
}
addFilter( 'blocks.registerBlockType', 'nova-blocks/with-color-sets-alt-attributes', withColorSetsAltAttributes );

const withColorSetsDeprecation = ( settings, name ) => {

  if ( ! enableColorSetsDeprecation.includes( name ) ) {
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
addFilter( 'blocks.registerBlockType', 'nova-blocks/with-color-sets-deprecation', withColorSetsDeprecation );

const withColorSetsControls = createHigherOrderComponent( OriginalComponent => {

  return props => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! enableColorSetControls.includes( props.name ) && ! supports?.novaBlocks?.colorsSets ) {
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
addFilter( 'editor.BlockEdit', 'novablocks/with-color-sets-controls', withColorSetsControls );

const withColorSetsClassnames = createHigherOrderComponent( ( BlockEdit ) => {

  return ( props ) => {

    if ( ! enableColorSetsClassnames.includes( props.name ) ) {
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
addFilter( 'editor.BlockEdit', 'novablocks/add-color-set-class-names-to-edit', withColorSetsClassnames );
