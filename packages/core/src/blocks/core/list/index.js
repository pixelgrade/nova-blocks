/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
const {addFilter} = wp.hooks;
const {Fragment} = wp.element;
const {createHigherOrderComponent} = wp.compose;

const allowedBlocks = ['core/list'];

import Inspector from './controls';

const alterSettings = ( settings ) => {

  if ( settings.name !== 'core/list' ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      listStyle: {
        type: 'string',
        default: 'list-bullet-style'
      },
      listConnection: {
        type: 'string',
        default: 'is-style-no-connection'
      },
    },
    supports: {
      ...settings.supports,
      novaBlocks: {
        colorSignal: {
          functionalColors: true,
          colorSignalClassname: true,
          paletteClassname: true
        },
      }
    }
  }
}

const withControls = createHigherOrderComponent( ( BlockEdit ) => {
  return ( props ) => {

    if ( 'core/list' !== props.name ) {
      return (
        <BlockEdit {...props}/>
      );
    }
    return (
      <Fragment>
        <BlockEdit {...props} />
        <Inspector {...props} />
      </Fragment>
    )
  }
} );

const addEditorBlockAttributes = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    const {name, attributes} = props
    const {listStyle, listConnection} = attributes;

    let wrapperProps = props.wrapperProps;
    let customData = {};

    if ( allowedBlocks.includes( name ) && listStyle && listConnection ) {
      customData = Object.assign( customData, {
        'data-novablocks-list-style': listStyle,
        'data-novablocks-connection-style': listConnection
      } )
    }

    wrapperProps = {
      ...wrapperProps,
      ...customData
    };

    return <BlockListBlock {...props} wrapperProps={wrapperProps}/>;
  };
}, 'addEditorBlockAttributes' );

function applyFrontEndClasses( extraProps, blockType, attributes ) {

  const { listStyle, listConnection, ordered } = attributes;

  if ( allowedBlocks.includes( blockType.name ) ) {

    if ( listStyle !== 'list-bullet-style' && !ordered ) {
      extraProps.className = classnames( extraProps.className, listStyle );
    }

    if ( listConnection !== 'is-style-no-connection' ) {
      extraProps.className = classnames( extraProps.className, listConnection );
    }
  }

  return extraProps;
}

addFilter( 'blocks.registerBlockType', 'novablocks/list/settings', alterSettings, 1 );
addFilter( 'editor.BlockEdit', 'novablocks/list/list-style', withControls, 1 );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/list/applyFrontEndClasses', applyFrontEndClasses, 1 );
addFilter( 'editor.BlockListBlock', 'novablocks/list/addEditorBlockAttributes', addEditorBlockAttributes, 1 )
