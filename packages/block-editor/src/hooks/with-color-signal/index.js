import _ from 'lodash';

import { Fragment } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { select } from '@wordpress/data';

import { getClassNameWithPaletteHelpers } from "@novablocks/utils";
import { addFilter } from '@wordpress/hooks';

import InspectorControls from './inspector-controls';
import attributes from './attributes.json';
import altAttributes from './attributes-alt.json';

const withColorSignalAttributes = ( settings, name ) => {

  if ( ! settings?.supports?.novaBlocks?.colorSignal ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes,
      ...( !! settings?.supports?.novaBlocks?.colorSignal?.altAttributes ? altAttributes : {} )
    }
  };
}
addFilter( 'blocks.registerBlockType', 'nova-blocks/with-color-signal-attributes', withColorSignalAttributes );

const withColorSignalsDeprecation = ( settings, name ) => {

  if ( ! settings?.supports?.novaBlocks?.colorSignal?.addOverlayColorDeprecatedMethod ) {
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
addFilter( 'blocks.registerBlockType', 'nova-blocks/with-color-signal-deprecation', withColorSignalsDeprecation );

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

const withColorSignalsClassnames = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.colorSignal?.classNames ) {
      return <BlockListBlock { ...props } />
    }

    const className = props?.attributes?.className || '';
    const newClassName = getClassNameWithPaletteHelpers( className, props.attributes );
    const newProps = Object.assign( {}, props, {
      attributes: Object.assign( {}, props.attributes, {
        className: newClassName
      } )
    } );

    return (
      <BlockListBlock { ...newProps } />
    )
  };
}, "withColorSignalsClassnames" );

addFilter( 'editor.BlockListBlock', 'novablocks/add-color-signal-classnames-to-edit', withColorSignalsClassnames );
