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

const allowedBlocks = [ 'core/list' ];

import Inspector from './controls';

export const addListFilters = ( settings ) => {

  function addAttributes(settings) {
    if (allowedBlocks.includes(settings.name)) {
      settings.attributes = Object.assign( settings.attributes, {
        listStyle: {
          type: 'string',
          default: 'list-bullet-style'
        },
        listConnection: {
          type: 'string',
          default: 'is-style-no-connection'
        }
      });
    }

    return settings;
  }

  const withControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
      return (
        <Fragment>
          <BlockEdit {...props} />
          { allowedBlocks.includes(props.name) && <Inspector { ...props} /> }
        </Fragment>
      )
    }
  })

  const addEditorBlockAttributes = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
      const { name, attributes } = props
      const { listStyle, listConnection } = attributes;

      let wrapperProps = props.wrapperProps;
      let customData = {};

      if ( allowedBlocks.includes(name) && listStyle && listConnection ) {
        customData = Object.assign( customData, {
          'data-novablocks-list-style': listStyle,
          'data-novablocks-connection-style': listConnection
        })
      }

      wrapperProps = {
        ...wrapperProps,
        ...customData
      };

      return <BlockListBlock {...props} wrapperProps = {wrapperProps} />;
    };
  }, 'addEditorBlockAttributes');

  function applyFontEndClasses ( extraProps, blockType, attributes ) {
    const { listStyle, listConnection, ordered } = attributes;

    if (allowedBlocks.includes(blockType.name) ) {

      if (listStyle !== 'list-bullet-style' && ! ordered ) {
        extraProps.className = classnames(extraProps.className, listStyle);
      }

      if (listConnection !== 'is-style-no-connection') {
        extraProps.className = classnames(extraProps.className, listConnection);
      }
    }

    return extraProps;
  }

  addFilter(
    'blocks.registerBlockType',
    'novablocks/list/attributes',
    addAttributes
  );

  addFilter(
    'editor.BlockEdit',
    'novablocks/list-style',
    withControls
  )

  addFilter(
    'blocks.getSaveContent.extraProps',
    'novablocks/list/applyFrontEndClasses',
    applyFontEndClasses
  );

  addFilter(
    'editor.BlockListBlock',
    'novablocks/list/addEditorBlockAttributes',
    addEditorBlockAttributes
  )
}
