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

export const addGroupFilters = ( settings ) => {

  function addAttributes(settings) {
    if ( allowedBlocks.includes( settings.name ) ) {
      settings.attributes = Object.assign( settings.attributes, {
        contentAlignment: {
          type: 'string',
          default: 'full'
        },
      } );
    }

    return settings;
  }

  const withControls = createHigherOrderComponent((BlockEdit) => {
    return (props ) => {
      return(
        <Fragment>
          <BlockEdit {...props} />
          { props.isSelected && allowedBlocks.includes( props.name ) && <Inspector { ...{ ...props } } /> }
        </Fragment>
      )
    }
  })

  const addEditorBlockAttributes = createHigherOrderComponent( ( BlockListBlock ) => {

    return (props) => {
      const {name, attributes} = props;
      const {contentAlignment} = attributes;

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

      return <BlockListBlock {...props} wrapperProps={wrapperProps}/>;
    };

  }, 'addEditorBlockAttributes' );

  function applyFrontEndClasses( extraProps, blockType, attributes) {

    const { contentAlignment } = attributes;

    if ( allowedBlocks.includes( blockType.name ) && contentAlignment ) {
      extraProps.className = classnames( extraProps.className, 'align-' + contentAlignment );
    }

    return extraProps;

  }

  addFilter(
    'blocks.registerBlockType',
    'novablocks/group/attributes',
    addAttributes
  );

  addFilter(
    'editor.BlockEdit',
    'novablocks/content-alignment',
    withControls
  );

  addFilter(
    'blocks.getSaveContent.extraProps',
    'novablocks/group/applyFrontEndClasses',
    applyFrontEndClasses
  );

  addFilter(
    'editor.BlockListBlock',
    'novablocks/group/addEditorBlockAttributes',
    addEditorBlockAttributes
  );
}


