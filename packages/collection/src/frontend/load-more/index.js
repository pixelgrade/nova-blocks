/**
 * Load More pagination for collections inside a Query Loop.
 *
 * Opt-in: add the `nb-load-more` class to the `core/query-pagination` block.
 * Clicking the pagination-next link fetches the next page, appends its
 * collection items to the current grid, and re-runs the layout engine.
 * Without JS the link degrades to a normal page load.
 */
import { getAttributes } from "@novablocks/utils";

import { handleClassicGrid } from "../grid/handle-classic-grid";
import { handleMasonryGrid } from "../grid/handle-masonry-grid";

import { extractLoadMorePayload } from './extract-payload';

const LOADING_CLASSNAME = 'is-loading';

const relayout = ( grid ) => {
  const block = grid.closest( '[data-layout-style]' );

  if ( ! block ) {
    return;
  }

  const attributes = getAttributes( block );

  if ( 'masonry' === attributes.layoutStyle ) {
    handleMasonryGrid( grid, block, attributes );
  } else if ( 'classic' === attributes.layoutStyle ) {
    handleClassicGrid( grid, block, attributes );
  }
};

export const initLoadMore = ( doc = document ) => {
  const navs = doc.querySelectorAll( '.wp-block-query-pagination.nb-load-more' );

  navs.forEach( ( nav ) => {
    const query = nav.closest( '.wp-block-query' );
    const grid = query ? query.querySelector( '.nb-collection__layout' ) : null;

    if ( ! query || ! grid ) {
      return;
    }

    const queryIndex = [ ...doc.querySelectorAll( '.wp-block-query' ) ].indexOf( query );

    // NOTE: promise chains, not async/await — the frontend bundles have no
    // regenerator runtime (webpack 4 era) and async functions crash at
    // definition time with "Cannot read properties of undefined ('mark')".
    nav.addEventListener( 'click', ( event ) => {
      const link = event.target instanceof Element
        ? event.target.closest( '.wp-block-query-pagination-next' )
        : null;

      if ( ! link || nav.classList.contains( LOADING_CLASSNAME ) ) {
        return;
      }

      event.preventDefault();
      nav.classList.add( LOADING_CLASSNAME );

      fetch( link.getAttribute( 'href' ), { credentials: 'same-origin' } )
        .then( ( response ) => response.text() )
        .then( ( html ) => {
          const { items, nextUrl } = extractLoadMorePayload( html, { queryIndex } );

          if ( items.length ) {
            // Existing cards keep their place in the reveal animation — only
            // the appended batch should animate in on the relayout.
            grid.querySelectorAll( '.nb-collection__layout-item' ).forEach( ( item ) => {
              item.classList.add( 'is-revealed' );
            } );

            const fragment = doc.createRange().createContextualFragment( items.join( '' ) );
            grid.appendChild( fragment );
            relayout( grid );
          }

          if ( nextUrl ) {
            link.setAttribute( 'href', nextUrl );
          } else {
            nav.remove();
          }
        } )
        .catch( ( error ) => {
          // Degrade to a normal page load on any failure.
          // eslint-disable-next-line no-console
          console.warn( '[novablocks] Load More failed, falling back to navigation:', error );
          window.location.assign( link.getAttribute( 'href' ) );
        } )
        .finally( () => {
          nav.classList.remove( LOADING_CLASSNAME );
        } );
    } );
  } );
};
