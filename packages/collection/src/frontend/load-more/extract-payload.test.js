/**
 * @jest-environment jsdom
 */
import { extractLoadMorePayload } from './extract-payload';

const page = ( { items = [], next = null, extraQuery = '' } = {} ) => `
<!doctype html><html><body>
<div class="wp-block-query">
  <div class="nb-supernova" data-layout-style="masonry">
    <div class="nb-collection__layout">
      <div class="nb-collection__layout-item nb-collection__layout-item--header-brick"><div>BRAND</div></div>
      ${ items.map( ( t ) => `<div class="nb-collection__layout-item"><article>${ t }</article></div>` ).join( '' ) }
    </div>
  </div>
  <nav class="wp-block-query-pagination">
    ${ next ? `<a class="wp-block-query-pagination-next" href="${ next }">Older Posts</a>` : '' }
  </nav>
</div>
${ extraQuery }
</body></html>`;

describe( 'extractLoadMorePayload', () => {
  test( 'returns card items (excluding leading bricks) and the next URL', () => {
    const html = page( { items: [ 'One', 'Two' ], next: '/page/3/' } );
    const { items, nextUrl } = extractLoadMorePayload( html );

    expect( items ).toHaveLength( 2 );
    expect( items[ 0 ] ).toContain( 'One' );
    expect( items[ 0 ] ).not.toContain( 'BRAND' );
    expect( nextUrl ).toBe( '/page/3/' );
  } );

  test( 'nextUrl is null on the last page', () => {
    const { items, nextUrl } = extractLoadMorePayload( page( { items: [ 'Last' ] } ) );

    expect( items ).toHaveLength( 1 );
    expect( nextUrl ).toBeNull();
  } );

  test( 'scopes extraction to the requested query index', () => {
    const second = '<div class="wp-block-query"><div class="nb-collection__layout"><div class="nb-collection__layout-item"><article>Other</article></div></div></div>';
    const html = page( { items: [ 'One' ], extraQuery: second } );

    expect( extractLoadMorePayload( html, { queryIndex: 1 } ).items[ 0 ] ).toContain( 'Other' );
    expect( extractLoadMorePayload( html, { queryIndex: 5 } ).items ).toHaveLength( 0 );
  } );
} );
