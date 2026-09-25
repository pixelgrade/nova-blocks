/**
 * Pins `deepEqual`/`deepClone` to lodash `isEqual`/`cloneDeep` semantics for the JSON-shaped values
 * block attributes and preset definitions carry (#485). lodash stays a dev
 * dependency, so it serves as the oracle here; shipped source never imports it.
 */
import { cloneDeep, isEqual } from 'lodash';

import { deepClone, deepEqual } from './deep-values';
import { deriveActivePresetId } from './index';

const PAIRS = [
	// Primitives.
	[ 1, 1 ],
	[ 1, 2 ],
	[ 1, '1' ],
	[ 'a', 'a' ],
	[ true, true ],
	[ true, 1 ],
	[ null, null ],
	[ null, undefined ],
	[ undefined, undefined ],
	[ 0, -0 ],
	[ NaN, NaN ],
	[ '', 0 ],
	[ 0, false ],
	// Arrays.
	[ [], [] ],
	[ [ 1, 2 ], [ 1, 2 ] ],
	[ [ 1, 2 ], [ 2, 1 ] ],
	[ [ 1, 2 ], [ 1, 2, 3 ] ],
	[ [ undefined ], [] ],
	[ [], {} ],
	[ [ { x: 1 } ], [ { x: 1 } ] ],
	// Plain objects.
	[ {}, {} ],
	[ { a: 1, b: 2 }, { b: 2, a: 1 } ],
	[ { a: 1 }, { a: 2 } ],
	[ { a: undefined }, {} ],
	[ {}, { a: undefined } ],
	[ { a: undefined }, { b: undefined } ],
	[ { a: undefined }, { a: undefined } ],
	[ { a: null }, { a: undefined } ],
	[ { a: 1 }, { a: 1, b: 2 } ],
	[ {}, null ],
	[ { length: 0 }, [] ],
	// Nested, shaped like real attributes.
	[ { x: 0.5, y: 0.5 }, { x: 0.5, y: 0.5 } ],
	[ { x: 0.5, y: 0.5 }, { x: 0.5, y: 0.25 } ],
	[
		{ stops: [ { color: '#fff', position: 0 }, { color: '#000', position: 1 } ] },
		{ stops: [ { color: '#fff', position: 0 }, { color: '#000', position: 1 } ] },
	],
	[
		{ stops: [ { color: '#fff', position: 0 } ] },
		{ stops: [ { color: '#fff', position: '0' } ] },
	],
	[ { a: { b: { c: [ 1, { d: undefined } ] } } }, { a: { b: { c: [ 1, {} ] } } } ],
	[ { a: { b: { c: [ 1, { d: 2 } ] } } }, { a: { b: { c: [ 1, { d: 2 } ] } } } ],
	[ new Date( 0 ), new Date( 0 ) ],
	[ new Date( 0 ), new Date( 1 ) ],
];

describe( 'deepEqual', () => {
	test.each( PAIRS )( 'matches lodash isEqual for %p vs %p', ( a, b ) => {
		expect( deepEqual( a, b ) ).toBe( isEqual( a, b ) );
		expect( deepEqual( b, a ) ).toBe( isEqual( b, a ) );
	} );

	test( 'a key holding undefined differs from a missing key (lodash semantics)', () => {
		expect( deepEqual( { a: undefined }, {} ) ).toBe( false );
	} );

	test( 'preset derivation still normalizes undefined through registered defaults', () => {
		const definitions = [
			{ id: 'point', version: 1, managedAttributes: [ 'focalPoint' ], values: { focalPoint: { x: 0.5, y: 0.5 } } },
		];
		const defaults = { focalPoint: { x: 0.5, y: 0.5 } };

		expect( deriveActivePresetId( definitions, {}, defaults ) ).toBe( 'point' );
		expect( deriveActivePresetId( definitions, { focalPoint: { x: 0.5, y: 0.5 } }, defaults ) ).toBe( 'point' );
		expect( deriveActivePresetId( definitions, { focalPoint: { x: 0.5, y: 0.4 } }, defaults ) ).toBe( null );
	} );
} );

describe( 'deepClone', () => {
	const VALUES = [
		1, 'a', null, undefined, true, NaN,
		[], {}, [ 1, [ 2, [ 3 ] ] ],
		{ x: 0.5, y: 0.5 },
		{ stops: [ { color: '#fff', position: 0 }, { color: '#000', position: 1 } ] },
		{ a: undefined, b: { c: [ { d: null } ] } },
	];

	test.each( VALUES )( 'produces the same value as lodash cloneDeep for %p', ( value ) => {
		expect( isEqual( deepClone( value ), cloneDeep( value ) ) ).toBe( true );
		expect( deepEqual( deepClone( value ), value ) ).toBe( true );
	} );

	test( 'shares no nested array or object references', () => {
		const value = { stops: [ { color: '#fff' } ], point: { x: 1 } };
		const copy = deepClone( value );

		expect( copy ).not.toBe( value );
		expect( copy.stops ).not.toBe( value.stops );
		expect( copy.stops[ 0 ] ).not.toBe( value.stops[ 0 ] );
		expect( copy.point ).not.toBe( value.point );
		expect( 'a' in deepClone( { a: undefined } ) ).toBe( true );
	} );
} );
