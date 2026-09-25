import { getQueryItemsCountSync, INITIAL_QUERY_ITEMS_COUNT_SYNC } from './query-items-count-sync';

describe( 'getQueryItemsCountSync', () => {
  test( 'opening saved content whose values agree writes nothing', () => {
    const result = getQueryItemsCountSync( INITIAL_QUERY_ITEMS_COUNT_SYNC, 6, 6 );

    expect( result.write ).toBe( null );
    expect( result.lastSynced ).toEqual( { postsToShow: 6, perPage: 6 } );
  } );

  test( 'opening saved content whose values disagree mirrors the Query perPage without a persistent write (#543)', () => {
    // Anima's home template: Query perPage 6, Supernova postsToShow left at its default 3.
    const result = getQueryItemsCountSync( INITIAL_QUERY_ITEMS_COUNT_SYNC, 3, 6 );

    expect( result.write ).toEqual( { attribute: 'postsToShow', value: 6, persistent: false } );
    expect( result.lastSynced ).toEqual( { postsToShow: 6, perPage: 6 } );
  } );

  test( 'a perPage change that follows the mirror is mirrored again without a persistent write', () => {
    // Core's Query edit normalizes an inherited Query's perPage to the Reading
    // setting through a non-persistent change; the mirror must stay non-persistent too.
    const result = getQueryItemsCountSync( { postsToShow: 6, perPage: 6 }, 6, 10 );

    expect( result.write ).toEqual( { attribute: 'postsToShow', value: 10, persistent: false } );
    expect( result.lastSynced ).toEqual( { postsToShow: 10, perPage: 10 } );
  } );

  test( 'an Items Count change writes the Query perPage as a real edit', () => {
    const result = getQueryItemsCountSync( { postsToShow: 6, perPage: 6 }, 4, 6 );

    expect( result.write ).toEqual( { attribute: 'perPage', value: 4, persistent: true } );
    expect( result.lastSynced ).toEqual( { postsToShow: 4, perPage: 4 } );
  } );

  test( 'Items Count wins when both sides moved after the first reconciliation', () => {
    const result = getQueryItemsCountSync( { postsToShow: 6, perPage: 6 }, 4, 9 );

    expect( result.write ).toEqual( { attribute: 'perPage', value: 4, persistent: true } );
  } );

  test( 'the settled pair after a write produces no further write', () => {
    const first = getQueryItemsCountSync( INITIAL_QUERY_ITEMS_COUNT_SYNC, 3, 6 );
    const second = getQueryItemsCountSync( first.lastSynced, 6, 6 );

    expect( second.write ).toBe( null );
    expect( second.lastSynced ).toEqual( { postsToShow: 6, perPage: 6 } );
  } );

  test( 'a missing perPage never writes', () => {
    const result = getQueryItemsCountSync( INITIAL_QUERY_ITEMS_COUNT_SYNC, 3, undefined );

    expect( result.write ).toBe( null );
  } );

  test( 'accepts string values the way block attributes and context can carry them', () => {
    const result = getQueryItemsCountSync( INITIAL_QUERY_ITEMS_COUNT_SYNC, '3', '6' );

    expect( result.write ).toEqual( { attribute: 'postsToShow', value: 6, persistent: false } );
  } );
} );
