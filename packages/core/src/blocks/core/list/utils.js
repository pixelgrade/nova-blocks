import classnames from "classnames";

export const getListClassname = ( attributes ) => {
  const { listStyle, listConnection } = attributes;

  return classnames(
    'nb-list',
    listStyle,
    listConnection
  )
}

export const getListStyle = ( attributes ) => {
  const { values, start } = attributes;

  const listDomElement = new DOMParser().parseFromString( values, 'text/html' );
  const listCount = listDomElement.querySelectorAll( 'body > li' ).length;
  const style = {};

  style[ '--nb-list-start-at' ] = `${ start - 1 }`;
  style[ '--nb-list-items-count' ] = `${ listCount + 1 }`;

  return style;
}
