/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;

const allowedBlocks = [ 'core/group' ];

import Inspector from './controls';
import {select} from "@wordpress/data";

const alterSettings = ( settings ) => {

  if ( settings.name !== 'core/group' ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      contentAlignment: {
        type: 'string',
        default: 'pull-none'
      },
    },
    supports: {
      ...settings.supports,
      novaBlocks: {
        colorSignal: {
          paletteClassname: true,
          variationClassname: true,
          functionalColors: true,
        },
        spaceAndSizing: true,
      }
    }
  };
}

const withControls = createHigherOrderComponent( ( BlockEdit ) => {

  return ( props ) => {

    if ( 'core/group' !== props.name ) {
      return (
        <BlockEdit { ...props } />
      );
    }

    return (
      <Fragment>
        <BlockEdit { ...props } />
        <Inspector { ...props } />
      </Fragment>
    )
  }
} )

const addEditorBlockAttributes = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {
    const { name, attributes } = props;
    const { contentAlignment } = attributes;

    let wrapperProps = props.wrapperProps;
    let customData = {};

    if ( allowedBlocks.includes( name ) && contentAlignment ) {
      customData = Object.assign( customData, {
        'data-novablocks-alignment': contentAlignment
      } )
    }

    wrapperProps = {
      ...wrapperProps,
      ...customData
    };

    return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />
  };

}, 'addEditorBlockAttributes' );

const applyFrontEndClasses = ( extraProps, blockType, attributes ) =>{

  const { contentAlignment } = attributes;

  if ( allowedBlocks.includes( blockType.name ) ) {

    if (contentAlignment !== 'pull-none' ) {
      extraProps.className = classnames( extraProps.className, contentAlignment );
    }

  }

  return extraProps;
}

function updateBlockTopSpacingAttribute( block ) {

  if ( ! block?.supports?.novaBlocks?.spaceAndSizing || ! allowedBlocks.includes( block.name ) ) {
    return block;
  }

  if ( typeof block.attributes !== 'undefined' ) {
    block.attributes.blockTopSpacing.default = 1;
  }

  return block;
}

addFilter( 'blocks.registerBlockType', 'novablocks/group/settings', alterSettings, 1 );
// addFilter( 'blocks.registerBlockType', 'novablocks/update-block-top-spacing-attribute', updateBlockTopSpacingAttribute, 11 );
addFilter( 'editor.BlockEdit', 'novablocks/group/content-alignment', withControls, 1 );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/group/frontend-classes', applyFrontEndClasses, 1 );
addFilter( 'editor.BlockListBlock', 'novablocks/group/addEditorBlockAttributes', addEditorBlockAttributes, 1 );
