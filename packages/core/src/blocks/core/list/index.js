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
          colorSignalClassname: true,
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

    const { name, attributes } = props
    const { listStyle, listConnection, ordered, start, reversed, values } = attributes;

    let wrapperProps = props.wrapperProps;
    let customData = {};
    let customStyle = {};

    const listDomElement = new DOMParser().parseFromString(values, 'text/html');
    const listCount = listDomElement.querySelectorAll('body > li').length;

    if ( allowedBlocks.includes( name )  ) {

      if ( listStyle && listConnection ) {
        customData = Object.assign( customData, {
          'data-list-style': listStyle,
          'data-connection-style': listConnection,
          'data-nb': 'list',
        } )
      }

      if ( ordered && start !== undefined ) {
        customStyle = Object.assign(customStyle, {
          '--nb-list-start-at': (start - 1) + ''
        })
      }

      if ( ordered && reversed ) {
        customStyle = Object.assign(customStyle, {
          '--nb-list-items-count': (listCount + 1) + ''
        })
      }

    }

    wrapperProps = {
      ...wrapperProps,
      ...customData,
      style: customStyle
    };

    return <BlockListBlock {...props} wrapperProps={wrapperProps}/>;
  };
}, 'addEditorBlockAttributes' );

function applyFrontEndClasses( extraProps, blockType, attributes ) {

  const { listStyle, listConnection, ordered, start, reversed, values } = attributes;

  let customStyle = {}

  if ( allowedBlocks.includes( blockType.name ) ) {

    extraProps.className = classnames( extraProps.className, 'nb-list' );
    extraProps.style = {}

    const listDomElement = new DOMParser().parseFromString(values, 'text/html');
    const listCount = listDomElement.querySelectorAll('body > li').length;

    if ( listStyle !== 'list-bullet-style' && !ordered ) {
      extraProps.className = classnames( extraProps.className, listStyle );
    }

    if ( listConnection !== 'is-style-no-connection' ) {
      extraProps.className = classnames( extraProps.className, listConnection );
    }

    if ( ordered ) {

      if ( start !== undefined ) {
        customStyle['--nb-list-start-at'] = (start - 1) + '' ;
      }

      if ( reversed ) {
        customStyle['--nb-list-items-count'] = (listCount + 1)  + '';
      }

      extraProps.style = Object.assign(extraProps.style, customStyle)
    }

  }

  return extraProps;
}

addFilter( 'blocks.registerBlockType', 'novablocks/list/settings', alterSettings, 1 );
addFilter( 'editor.BlockEdit', 'novablocks/list/list-style', withControls, 1 );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/list/applyFrontEndClasses', applyFrontEndClasses, 1 );
addFilter( 'editor.BlockListBlock', 'novablocks/list/addEditorBlockAttributes', addEditorBlockAttributes, 1 )
