/**
 * Pins the native collection helpers to the lodash `orderBy`/`groupBy`
 * behaviour they replace (#485). lodash is a dev dependency and serves only
 * as the oracle here.
 */
import { groupBy as lodashGroupBy, orderBy } from 'lodash';

import { groupBy, sortByKey } from './collections';

const ITEMS = [
	{ id: 'a', order: 20, group: 'x' },
	{ id: 'b', order: undefined, group: '' },
	{ id: 'c', order: 10, group: 'x' },
	{ id: 'd', order: 20, group: 'y' },
	{ id: 'e', order: 0, group: '' },
	{ id: 'f', order: 10, group: 'y' },
];

const ids = ( list ) => list.map( ( item ) => item.id );

describe( 'sortByKey', () => {
	test.each( [ 'asc', 'desc' ] )( 'matches lodash orderBy (%s), stable on ties', ( direction ) => {
		const iteratee = ( item ) => item.order || 100;

		expect( ids( sortByKey( ITEMS, iteratee, direction ) ) ).toEqual( ids( orderBy( ITEMS, iteratee, [ direction ] ) ) );
	} );

	test( 'matches lodash orderBy for the priority || 0 desc tabs case', () => {
		const iteratee = ( item ) => item.order || 0;

		expect( ids( sortByKey( ITEMS, iteratee, 'desc' ) ) ).toEqual( ids( orderBy( ITEMS, iteratee, [ 'desc' ] ) ) );
		expect( ids( sortByKey( ITEMS, iteratee, 'desc' ) ) ).toEqual( [ 'a', 'd', 'c', 'f', 'b', 'e' ] );
	} );

	test( 'does not mutate its input', () => {
		const input = [ ...ITEMS ];

		sortByKey( input, ( item ) => item.order || 100 );
		expect( input ).toEqual( ITEMS );
	} );
} );

describe( 'groupBy', () => {
	test( 'matches lodash groupBy, including key order and the empty-string group', () => {
		const iteratee = ( item ) => ( item.group ? item.group : '' );
		const groups = groupBy( ITEMS, iteratee );

		expect( groups ).toEqual( lodashGroupBy( ITEMS, iteratee ) );
		expect( Object.keys( groups ) ).toEqual( Object.keys( lodashGroupBy( ITEMS, iteratee ) ) );
	} );
} );
