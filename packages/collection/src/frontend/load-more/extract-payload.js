/**
 * Parse a fetched pagination page and extract the pieces the load-more
 * runtime appends: the next batch of collection layout items and the URL of
 * the page after that (null when the stream ends).
 *
 * `queryIndex` scopes extraction to the Nth `.wp-block-query` in the
 * document, so multiple queries on a page stay independent.
 */
export const LEADING_ITEM_CLASSNAMES = [
  'nb-collection__layout-item--header-brick',
  'nb-collection__layout-item--archive-title-brick',
];

export const extractLoadMorePayload = ( htmlText, { queryIndex = 0 } = {} ) => {
  const doc = new DOMParser().parseFromString( htmlText, 'text/html' );
  const queries = doc.querySelectorAll( '.wp-block-query' );
  const query = queries[ queryIndex ];

  if ( ! query ) {
    return { items: [], nextUrl: null };
  }

  const items = [ ...query.querySelectorAll( '.nb-collection__layout-item' ) ]
    .filter( item => ! item.hasAttribute( 'data-nb-external-participant' ) )
    .filter( item => ! item.hasAttribute( 'data-nb-collection-item-role' ) )
    .filter( item => ! LEADING_ITEM_CLASSNAMES.some( className => item.classList.contains( className ) ) )
    .map( item => item.outerHTML );

  const nextLink = query.querySelector( '.wp-block-query-pagination-next' );

  return {
    items,
    nextUrl: nextLink ? nextLink.getAttribute( 'href' ) : null,
  };
};
