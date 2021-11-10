import classnames from "classnames";

export const withSaveExtraProps = ( extraProps, blockType, attributes ) => {

  const { listStyle, listConnection, ordered, start, reversed, values } = attributes;

  let customStyle = {}

  if ( blockType.name !== 'core/list' ) {
    return extraProps;
  }

  extraProps.className = classnames( extraProps.className, 'nb-list' );
  extraProps.style = {}

  const listDomElement = new DOMParser().parseFromString( values, 'text/html' );
  const listCount = listDomElement.querySelectorAll( 'body > li' ).length;

  if ( listStyle !== 'list-bullet-style' && !ordered ) {
    extraProps.className = classnames( extraProps.className, listStyle );
  }

  if ( listConnection !== 'is-style-no-connection' ) {
    extraProps.className = classnames( extraProps.className, listConnection );
  }

  if ( ordered ) {

    if ( start !== undefined ) {
      customStyle[ '--nb-list-start-at' ] = ( start - 1 ) + '';
    }

    if ( reversed ) {
      customStyle[ '--nb-list-items-count' ] = ( listCount + 1 ) + '';
    }

    extraProps.style = Object.assign( extraProps.style, customStyle )
  }


  return extraProps;
}
