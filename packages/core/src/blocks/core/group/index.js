/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { select } from "@wordpress/data";
import { addFilter } from "@wordpress/hooks";
import { Fragment } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";

import { withControlsVisibility } from './components';

const allowedBlocks = [ 'core/group' ];

import Inspector from './controls';

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
          attributes: true,
          controls: true,
          functionalColors: true,
          paletteClassname: true,
          paletteVariationClassname: true,
          colorSignalClassname: true,
        },
        spaceAndSizing: true,
      }
    }
  };
}

const withControls = createHigherOrderComponent( ( BlockEdit ) => {

  const NewBlockEdit = withControlsVisibility( BlockEdit );

  return ( props ) => {

    if ( 'core/group' !== props.name ) {
      return (
        <BlockEdit { ...props } />
      );
    }

    return (
      <Fragment>
        <NewBlockEdit { ...props } />
        <Inspector { ...props } />
      </Fragment>
    )
  }
} );

const addEditorBlockAttributes = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {
    const { name, attributes } = props;
    const { contentAlignment } = attributes;

    let wrapperProps = props.wrapperProps;
    let customData = {};

    if ( allowedBlocks.includes( name ) && contentAlignment ) {
      customData = Object.assign( customData, {
        'data-nb-align': contentAlignment
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

addFilter( 'blocks.registerBlockType', 'novablocks/group/settings', alterSettings, 1 );
addFilter( 'editor.BlockEdit', 'novablocks/group/content-alignment', withControls, 1 );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/group/frontend-classes', applyFrontEndClasses, 1 );
addFilter( 'editor.BlockListBlock', 'novablocks/group/addEditorBlockAttributes', addEditorBlockAttributes, 1 );
