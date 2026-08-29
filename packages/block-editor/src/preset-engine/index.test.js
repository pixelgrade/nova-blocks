/**
 * Contract tests for the managed-bundle preset engine — pins the semantics
 * from `.ai/design-customization/stage-3a-preset-semantics.md` (section 1):
 * apply = one complete patch (writes + clears, preserves the rest); derive
 * = normalize-through-defaults + strict compare + stable first-match order.
 */
import {
	getManagedAttributes,
	getPresetApplyPatch,
	deriveActivePresetId,
} from './index';

const DEFINITIONS = [
	{
		id: 'balanced',
		version: 1,
		managedAttributes: [ 'a', 'b', 'c' ],
		values: { a: 1, b: 2 }, // c intentionally omitted -> must clear
	},
	{
		id: 'wide',
		version: 1,
		managedAttributes: [ 'a', 'b', 'c' ],
		values: { a: 10, b: 20, c: 30 },
	},
	{
		id: 'default-equal',
		version: 1,
		managedAttributes: [ 'a', 'b', 'c' ],
		values: { a: 0, b: 0 }, // equal to registered defaults, c omitted
	},
];

const REGISTERED_DEFAULTS = { a: 0, b: 0, c: 0 };

describe( 'getManagedAttributes', () => {
	test( 'unions the managed attributes declared across all definitions', () => {
		const definitions = [
			{ id: 'x', managedAttributes: [ 'a', 'b' ] },
			{ id: 'y', managedAttributes: [ 'b', 'c' ] },
		];

		expect( getManagedAttributes( definitions ) ).toEqual( [ 'a', 'b', 'c' ] );
	} );

	test( 'preserves first-seen order and de-duplicates', () => {
		const definitions = [
			{ id: 'x', managedAttributes: [ 'c', 'a' ] },
			{ id: 'y', managedAttributes: [ 'a', 'b', 'c' ] },
		];

		expect( getManagedAttributes( definitions ) ).toEqual( [ 'c', 'a', 'b' ] );
	} );

	test( 'returns an empty array for an empty or invalid input', () => {
		expect( getManagedAttributes( [] ) ).toEqual( [] );
		expect( getManagedAttributes( undefined ) ).toEqual( [] );
	} );

	test( 'warns in dev when definitions disagree on their managed set', () => {
		const warn = jest.spyOn( console, 'warn' ).mockImplementation( () => {} );
		warn.mockClear();

		const definitions = [
			{ id: 'x', managedAttributes: [ 'a', 'b' ] },
			{ id: 'y', managedAttributes: [ 'a' ] },
		];

		getManagedAttributes( definitions );

		expect( warn ).toHaveBeenCalledTimes( 1 );
		expect( warn.mock.calls[ 0 ][ 0 ] ).toEqual( expect.stringContaining( 'disagree' ) );

		warn.mockRestore();
	} );

	test( 'does not warn when every definition declares the same set', () => {
		const warn = jest.spyOn( console, 'warn' ).mockImplementation( () => {} );
		warn.mockClear();

		getManagedAttributes( DEFINITIONS );

		expect( warn ).not.toHaveBeenCalled();

		warn.mockRestore();
	} );
} );

describe( 'getPresetApplyPatch', () => {
	test( 'writes every declared value', () => {
		const patch = getPresetApplyPatch( DEFINITIONS[ 1 ] ); // wide: a:10, b:20, c:30
		expect( patch ).toEqual( { a: 10, b: 20, c: 30 } );
	} );

	test( 'clears every managed attribute the definition omits', () => {
		const patch = getPresetApplyPatch( DEFINITIONS[ 0 ] ); // balanced: omits c
		expect( patch ).toEqual( { a: 1, b: 2, c: undefined } );
		expect( 'c' in patch ).toBe( true ); // explicit undefined, not just absent
	} );

	test( 'only touches attributes inside the managed set (preserves the rest)', () => {
		const patch = getPresetApplyPatch( DEFINITIONS[ 0 ] );
		expect( Object.keys( patch ).sort() ).toEqual( [ 'a', 'b', 'c' ] );
		expect( patch ).not.toHaveProperty( 'unrelatedAttribute' );
	} );

	test( 'undo-safety shape: a single plain object, no functions, no nested thunks', () => {
		const patch = getPresetApplyPatch( DEFINITIONS[ 1 ] );

		expect( patch ).toEqual( expect.any( Object ) );
		expect( typeof patch ).not.toBe( 'function' );
		Object.values( patch ).forEach( ( value ) => {
			expect( typeof value ).not.toBe( 'function' );
		} );
		// Exactly one patch object, containing exactly the managed keys once each.
		expect( Object.keys( patch ) ).toHaveLength( DEFINITIONS[ 1 ].managedAttributes.length );
	} );

	test( 'ignores unmanaged attributes on the definition\'s own values, if any leak in', () => {
		const definition = {
			id: 'leaky',
			managedAttributes: [ 'a' ],
			values: { a: 1, unmanaged: 999 },
		};

		const patch = getPresetApplyPatch( definition );
		expect( patch ).toEqual( { a: 1 } );
		expect( patch ).not.toHaveProperty( 'unmanaged' );
	} );

	test( 'current attributes do not change the computed patch (clears are unconditional)', () => {
		const withCurrent = getPresetApplyPatch( DEFINITIONS[ 0 ], { a: 1, b: 2, c: 999, d: 'untouched' } );
		const withoutCurrent = getPresetApplyPatch( DEFINITIONS[ 0 ] );

		expect( withCurrent ).toEqual( withoutCurrent );
	} );

	test( 'clears a managed attribute to its registered default when defaults are provided', () => {
		// balanced omits c; with a defaults map the clear must materialize the
		// registered default instead of a literal `undefined` (which the live
		// editor keeps as-is until a save + reparse).
		const patch = getPresetApplyPatch( DEFINITIONS[ 0 ], {}, REGISTERED_DEFAULTS );

		expect( patch ).toStrictEqual( { a: 1, b: 2, c: 0 } );
	} );

	test( 'a value the definition declares still wins over the registered default', () => {
		const patch = getPresetApplyPatch( DEFINITIONS[ 1 ], {}, REGISTERED_DEFAULTS );

		expect( patch ).toStrictEqual( { a: 10, b: 20, c: 30 } );
	} );

	test( 'an attribute with no registered default still clears to an explicit undefined', () => {
		const definition = {
			id: 'partial-defaults',
			managedAttributes: [ 'a', 'b', 'c' ],
			values: {},
		};

		const patch = getPresetApplyPatch( definition, {}, { a: 5, b: undefined } );

		expect( patch ).toStrictEqual( { a: 5, b: undefined, c: undefined } );
		expect( 'b' in patch ).toBe( true );
		expect( 'c' in patch ).toBe( true );
	} );

	test( 'deep-clones object and array registered defaults so the registry is never shared', () => {
		const registeredDefaults = {
			focalPoint: { x: 0.5, y: 0.5 },
			stops: [ { position: 0 }, { position: 100 } ],
		};

		const patch = getPresetApplyPatch(
			{ id: 'cloning', managedAttributes: [ 'focalPoint', 'stops' ], values: {} },
			{},
			registeredDefaults
		);

		expect( patch.focalPoint ).toEqual( registeredDefaults.focalPoint );
		expect( patch.focalPoint ).not.toBe( registeredDefaults.focalPoint );
		expect( patch.stops ).toEqual( registeredDefaults.stops );
		expect( patch.stops ).not.toBe( registeredDefaults.stops );
		expect( patch.stops[ 0 ] ).not.toBe( registeredDefaults.stops[ 0 ] );
	} );
} );

describe( 'deriveActivePresetId', () => {
	test( 'matches a definition whose values equal the current attributes exactly', () => {
		const attributes = { a: 10, b: 20, c: 30 };
		expect( deriveActivePresetId( DEFINITIONS, attributes, REGISTERED_DEFAULTS ) ).toBe( 'wide' );
	} );

	test( 'treats an omitted managed attribute as "must equal the registered default"', () => {
		// balanced omits c; current attributes must have c at its default (0) to match.
		const attributes = { a: 1, b: 2, c: 0 };
		expect( deriveActivePresetId( DEFINITIONS, attributes, REGISTERED_DEFAULTS ) ).toBe( 'balanced' );
	} );

	test( 'a non-default value for an omitted attribute breaks the match', () => {
		const attributes = { a: 1, b: 2, c: 5 };
		expect( deriveActivePresetId( DEFINITIONS, attributes, REGISTERED_DEFAULTS ) ).toBeNull();
	} );

	test( 'normalizes an explicit value equal to the registered default the same as an absent one', () => {
		// default-equal declares a:0, b:0 (== defaults), omits c (-> default 0 too).
		// Current attributes explicitly set a and b to the default value, and omit c.
		const explicit = { a: 0, b: 0 };
		const omitted = {};

		expect( deriveActivePresetId( DEFINITIONS, explicit, REGISTERED_DEFAULTS ) ).toBe( 'default-equal' );
		expect( deriveActivePresetId( DEFINITIONS, omitted, REGISTERED_DEFAULTS ) ).toBe( 'default-equal' );
	} );

	test( 'returns null (Custom) when any managed attribute deviates from every definition', () => {
		const attributes = { a: 999, b: 2, c: 0 };
		expect( deriveActivePresetId( DEFINITIONS, attributes, REGISTERED_DEFAULTS ) ).toBeNull();
	} );

	test( 'ignores changes to attributes outside the managed set', () => {
		const attributes = { a: 10, b: 20, c: 30, unrelatedAttribute: 'anything' };
		expect( deriveActivePresetId( DEFINITIONS, attributes, REGISTERED_DEFAULTS ) ).toBe( 'wide' );
	} );

	test( 'stable-order tiebreak: the first matching definition in array order wins', () => {
		const duplicate = { id: 'wide-duplicate', version: 1, managedAttributes: [ 'a', 'b', 'c' ], values: { a: 10, b: 20, c: 30 } };
		const definitions = [ ...DEFINITIONS, duplicate ];

		expect( deriveActivePresetId( definitions, { a: 10, b: 20, c: 30 }, REGISTERED_DEFAULTS ) ).toBe( 'wide' );
	} );

	test( 'strict structural equality: array/object values must match by content, not reference', () => {
		const definitions = [
			{ id: 'point', managedAttributes: [ 'focalPoint' ], values: { focalPoint: { x: 0.5, y: 0 } } },
		];

		expect(
			deriveActivePresetId( definitions, { focalPoint: { x: 0.5, y: 0 } }, {} )
		).toBe( 'point' );
		expect(
			deriveActivePresetId( definitions, { focalPoint: { x: 0.5, y: 1 } }, {} )
		).toBeNull();
	} );

	test( 'returns null for an empty or invalid definitions list', () => {
		expect( deriveActivePresetId( [], { a: 1 }, REGISTERED_DEFAULTS ) ).toBeNull();
		expect( deriveActivePresetId( undefined, { a: 1 }, REGISTERED_DEFAULTS ) ).toBeNull();
	} );
} );
