import { createHigherOrderComponent } from "@wordpress/compose";

export const withBlockEditProps = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {
    const { name, attributes } = props
    const { listStyle, listConnection, ordered, start, reversed, values } = attributes;

    let wrapperProps = props.wrapperProps;
    let customData = {};
    let customStyle = {};

    if ( name !== 'core/list' ) {
      return (
        <BlockListBlock { ...props } />
      )
    }

    const listDomElement = new DOMParser().parseFromString( values, 'text/html' );
    const listCount = listDomElement.querySelectorAll( 'body > li' ).length;

    if ( listStyle && listConnection ) {
      customData = Object.assign( customData, {
        'data-list-style': listStyle,
        'data-connection-style': listConnection,
        'data-nb': 'list',
      } )
    }

    if ( ordered && start !== undefined ) {
      customStyle = Object.assign( customStyle, {
        '--nb-list-start-at': ( start - 1 ) + ''
      } )
    }

    if ( ordered && reversed ) {
      customStyle = Object.assign( customStyle, {
        '--nb-list-items-count': ( listCount + 1 ) + ''
      } )
    }

    wrapperProps = {
      ...wrapperProps,
      ...customData,
      style: customStyle
    };

    return <BlockListBlock { ...props } wrapperProps={ wrapperProps }/>;
  };
}, 'withBlockEditProps' );
