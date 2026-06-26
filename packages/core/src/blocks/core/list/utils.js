import classnames from "classnames";

export const getListClassname = ( attributes ) => {
  const { listStyle, listConnection } = attributes;

  return classnames(
    'nb-list',
    listStyle,
    listConnection
  )
};

export const getListStyle = ( attributes ) => {
  const { values, start, listItemsCount = 0 } = attributes;

  // Legacy lists keep their items in the `values` attribute as serialized
  // `<li>` markup. Modern lists (WP 7.0+) store items as inner core/list-item
  // blocks and leave `values` empty, so we fall back to `listItemsCount`, which
  // the editor keeps in sync with the number of inner list items.
  let listCount = listItemsCount;

  if ( values ) {
    const listDomElement = new DOMParser().parseFromString( values, 'text/html' );
    listCount = listDomElement.querySelectorAll( 'body > li' ).length;
  }

  const style = {};

  style[ '--nb-list-start-at' ] = `${ start - 1 }`;
  style[ '--nb-list-items-count' ] = `${ listCount + 1 }`;

  return style;
};
