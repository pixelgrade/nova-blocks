import _ from 'lodash';

import { Fragment } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { select } from '@wordpress/data';

import { addFilter } from '@wordpress/hooks';

import InspectorControls from './inspector-controls';
import attributes from './attributes.json';
import altAttributes from './attributes-alt.json';

import classnames from 'classnames';

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

// Add Palette Classes in Edit
const withPaletteClassname = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.colorSignal?.paletteClassname ) {
      return <BlockListBlock { ...props } />
    }

    const blockProps = {
      ...props,
      className: `${ props.className } sm-palette-${ props.attributes.palette } ${ props.attributes.useSourceColorAsReference ? 'sm-palette--shifted' : '' }`
    } ;

    return (
      <BlockListBlock { ...blockProps } />
    )
  };
}, "withPaletteClassname" );
addFilter( 'editor.BlockListBlock', 'novablocks/with-palette-classname', withPaletteClassname );

// Add Palette Classes on Save
const applyPaletteFrontEndClasses = (extraProps, blockType, attributes) => {

  const { palette, useSourceColorAsReference } = attributes;

  const supports = select( 'core/blocks' ).getBlockType( blockType.name ).supports;

  if ( supports?.novaBlocks?.colorSignal?.paletteClassname ) {
    extraProps.className = classnames(extraProps.className, `sm-palette-${ palette } ${ useSourceColorAsReference ? 'sm-palette--shifted' : '' }`)
  }

  return extraProps;
}
addFilter('blocks.getSaveContent.extraProps', 'novablocks-with-palette-classname-frontend', applyPaletteFrontEndClasses, 1);

// Add Variation Classes on Edit
const withVariationClassname = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;
    const supportsVariationClassname = supports?.novaBlocks?.colorSignal?.variationClassname;

    if ( ! supportsVariationClassname || supportsVariationClassname && props.attributes.colorSignal < 1 ) {
      return <BlockListBlock { ...props } />
    }

    const blockProps = {
      ...props,
      className: `${ props.className } sm-variation-${ props.attributes.paletteVariation }`
    };

    return (
      <BlockListBlock { ...blockProps } />
    )
  }
}, "withVariationClassname" );

addFilter( 'editor.BlockListBlock', 'novablocks/with-variation-classname', withVariationClassname );

// Add Variation Classes on Save
const applyVariationFrontEndClasses = (extraProps, blockType, attributes) => {

  const { paletteVariation, colorSignal } = attributes;

  const supports = select( 'core/blocks' ).getBlockType( blockType.name ).supports;

  if ( supports?.novaBlocks?.colorSignal?.variationClassname && colorSignal > 0 ) {
    extraProps.className = classnames( extraProps.className, `sm-variation-${ paletteVariation }` )
  }

  return extraProps;
}
addFilter('blocks.getSaveContent.extraProps', 'novablocks-with-variation-classname-frontend', applyVariationFrontEndClasses, 1);

// Add Color Signal Classes
const withColorSignalClassname = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.colorSignal?.colorSignalClassname ) {
      return <BlockListBlock { ...props } />
    }

    const blockProps = {
      ...props,
      className: `${ props.className } sm-color-signal-${ props.attributes.colorSignal }`
    };

    return (
      <BlockListBlock { ...blockProps } />
    )
  }
}, "withColorSignalClassname" );

addFilter( 'editor.BlockListBlock', 'novablocks/with-color-signal-classname', withColorSignalClassname );

// Add Color Signal Classes on Save
const applyColorSignalFrontEndClasses = (extraProps, blockType, attributes) => {

  const { colorSignal } = attributes;

  const supports = select( 'core/blocks' ).getBlockType( blockType.name ).supports;

  if ( supports?.novaBlocks?.colorSignal?.colorSignalClassname ) {
    extraProps.className = classnames( extraProps.className, `sm-color-signal-${ colorSignal }` )
  }

  return extraProps;
}
addFilter('blocks.getSaveContent.extraProps', 'novablocks-with-color-signal-classname-frontend', applyColorSignalFrontEndClasses, 1);
