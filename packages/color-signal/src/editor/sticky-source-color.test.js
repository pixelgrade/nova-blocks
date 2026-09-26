/**
 * The `stickySourceColor` modes (style-manager#210 follow-up, 2026-09-26).
 *
 * - `true` (the default; Group and most blocks): an explicit source reference
 *   is kept, AND a block SNAPS into one when a signal/variation change lands on
 *   the palette source color. Unchanged.
 * - `false`: the source reference is never kept (the mount rewrites it into
 *   the source's explicit variation). Unchanged.
 * - `'keep'` (Button): an explicit source reference is KEPT — so an Action
 *   Button follows the brand color through palette changes — but nothing ever
 *   snaps into one, and the palette picker's same-palette toggle stays off.
 *   Every Button that is not source-referenced behaves exactly as with `false`.
 */
jest.mock( '@wordpress/data', () => ( {
	select: jest.fn(),
} ) );

jest.mock( '@novablocks/block-editor', () => ( {
	getSupports: jest.fn(),
} ) );

const PALETTES = require( '../../../../tests/fixtures/color-tiles-sm-palettes.json' );

window.matchMedia = window.matchMedia || ( () => ( {
	matches: false,
	addEventListener: () => {},
	removeEventListener: () => {},
	addListener: () => {},
	removeListener: () => {},
} ) );

// Parent Group at absolute variation `parentVariation`, palette 1.
const load = ( parentVariation = 1 ) => {
	let modules;

	jest.isolateModules( () => {
		window.styleManager = { colorsConfig: PALETTES, siteColorVariation: 1 };

		const { select } = require( '@wordpress/data' );
		const parent = {
			clientId: 'parent',
			name: 'core/group',
			attributes: { palette: '1', paletteVariation: parentVariation, useSourceColorAsReference: false },
		};

		select.mockImplementation( () => ( {
			getBlockParents: ( clientId ) => ( 'child' === clientId ? [ 'parent' ] : [] ),
			getBlock: ( clientId ) => ( 'parent' === clientId ? parent : null ),
			getSelectedBlockClientId: () => 'child',
		} ) );

		modules = require( './utils' );
	} );

	return modules;
};

// Fixture palette 1: sourceIndex 3 -> the source color is variation 4.
const SOURCE = 4;

describe( 'resolveStickySourceColor', () => {
	test.each( [
		[ undefined, true ],
		[ true, true ],
		[ {}, true ],
		[ { stickySourceColor: true }, true ],
		[ { stickySourceColor: false }, false ],
		[ { stickySourceColor: 'keep' }, 'keep' ],
	] )( '%j -> %j', ( support, expected ) => {
		const { resolveStickySourceColor } = load();

		expect( resolveStickySourceColor( support ) ).toBe( expected );
	} );
} );

describe( "getUpdatedAttributes with stickySourceColor: 'keep'", () => {
	test( 'keeps an own-palette source reference (the Action Button)', () => {
		const { getUpdatedAttributes } = load( 1 );
		const settled = getUpdatedAttributes(
			{ palette: '1', paletteVariation: 1, useSourceColorAsReference: true, colorSignal: 1, contentColorSignal: 0 },
			'child', {}, 'keep', false, false, false, 1
		);

		// The content mirror is the STORED variation (1): nothing palette-dependent is written.
		expect( settled ).toMatchObject( { paletteVariation: 1, useSourceColorAsReference: true, contentPaletteVariation: 1 } );
	} );

	test( '`true` (Group) still mirrors the source\'s absolute variation — unchanged', () => {
		const { getUpdatedAttributes } = load( 1 );
		const settled = getUpdatedAttributes(
			{ palette: '1', paletteVariation: 1, useSourceColorAsReference: true, colorSignal: 1, contentColorSignal: 0 },
			'child', {}, true, false, false, false, 0
		);

		expect( settled ).toMatchObject( { paletteVariation: 1, useSourceColorAsReference: true, contentPaletteVariation: SOURCE } );
	} );

	test( 'never snaps an explicit variation onto the source color (manual Button at the source step)', () => {
		const { getUpdatedAttributes } = load( 1 );
		const manual = { palette: '1', paletteVariation: SOURCE, useSourceColorAsReference: false, colorSignal: 1, contentColorSignal: 0 };

		[ [ false, false ], [ true, false ], [ false, true ], [ true, true ] ].forEach( ( [ sameVariation, sameSignal ] ) => {
			const settled = getUpdatedAttributes( manual, 'child', {}, 'keep', sameVariation, sameSignal, false, 1 );

			expect( [ sameVariation, sameSignal, settled.useSourceColorAsReference, settled.paletteVariation ] )
				.toEqual( [ sameVariation, sameSignal, false, SOURCE ] );
		} );
	} );

	test( 'an inheriting Button never becomes source-referenced', () => {
		const { getUpdatedAttributes } = load( 1 );
		const settled = getUpdatedAttributes(
			{ palette: '1', paletteVariation: SOURCE, useSourceColorAsReference: true, colorSignal: 1, contentColorSignal: 0 },
			'child', {}, 'keep', true, true, true, 1
		);

		expect( settled.useSourceColorAsReference ).toBe( false );
	} );

	test( "matches `false` for every Button that is not source-referenced", () => {
		const { getUpdatedAttributes } = load( 3 );

		for ( let variation = 1; variation <= 12; variation++ ) {
			for ( let signal = 1; signal <= 3; signal++ ) {
				const attributes = { palette: '1', paletteVariation: variation, useSourceColorAsReference: false, colorSignal: signal, contentColorSignal: 0 };

				expect( getUpdatedAttributes( attributes, 'child', { colorSignal: signal }, 'keep', true, true, false, 1 ) )
					.toEqual( getUpdatedAttributes( attributes, 'child', { colorSignal: signal }, false, true, true, false, 1 ) );
			}
		}
	} );

	test( '`true` (Group) still snaps onto the source color — unchanged', () => {
		const { getUpdatedAttributes } = load( 1 );
		const settled = getUpdatedAttributes(
			{ palette: '1', paletteVariation: SOURCE, useSourceColorAsReference: false, colorSignal: 1, contentColorSignal: 0 },
			'child', {}, true, true, false, false, 0
		);

		expect( settled.useSourceColorAsReference ).toBe( true );
	} );

	test( '`false` still rewrites a source reference into the explicit variation — unchanged', () => {
		const { getUpdatedAttributes } = load( 1 );
		const settled = getUpdatedAttributes(
			{ palette: '1', paletteVariation: 1, useSourceColorAsReference: true, colorSignal: 1, contentColorSignal: 0 },
			'child', {}, false, false, false, false, 1
		);

		expect( settled ).toMatchObject( { useSourceColorAsReference: false, paletteVariation: SOURCE } );
	} );
} );

describe( 'getPaletteChangeAttributes', () => {
	test( "'keep' does not turn re-picking the current palette into a source toggle", () => {
		const { getPaletteChangeAttributes } = load( 1 );

		expect( getPaletteChangeAttributes( { palette: '1', useSourceColorAsReference: false }, 'child', '1', 'keep' ) ).toEqual( { palette: '1' } );
	} );

	test( '`true` keeps the toggle', () => {
		const { getPaletteChangeAttributes } = load( 1 );

		expect( getPaletteChangeAttributes( { palette: '1', useSourceColorAsReference: false }, 'child', '1', true ) )
			.toMatchObject( { useSourceColorAsReference: true, paletteVariation: 1 } );
	} );
} );

describe( "getStickySourceColorForUpdate: 'keep' only keeps a reference the ACTIVE block already holds", () => {
	const BUTTON = { activationAttribute: 'useColorSignal', minColorSignal: 1, inheritParentPalette: true, paletteInheritanceAttribute: 'useParentPalette', stickySourceColor: 'keep' };
	// An untouched Button: the registered Button default of useSourceColorAsReference is TRUE.
	const UNTOUCHED = { useColorSignal: false, palette: '1', paletteVariation: 1, useSourceColorAsReference: true, colorSignal: 1, contentColorSignal: 0, contentPaletteVariation: 1 };

	test( 'an inactive Button being activated updates as `false` (the latent default never turns into a live reference)', () => {
		const { getStickySourceColorForUpdate } = load();

		expect( getStickySourceColorForUpdate( 'keep', BUTTON, UNTOUCHED ) ).toBe( false );
	} );

	test( 'an active Button keeps `keep`; other modes pass through', () => {
		const { getStickySourceColorForUpdate } = load();

		expect( getStickySourceColorForUpdate( 'keep', BUTTON, { ...UNTOUCHED, useColorSignal: true } ) ).toBe( 'keep' );
		expect( getStickySourceColorForUpdate( true, { functionalColors: true }, {} ) ).toBe( true );
		expect( getStickySourceColorForUpdate( false, BUTTON, UNTOUCHED ) ).toBe( false );
	} );

	test( 'picking a palette on an untouched Button lands where it does today (explicit variation, no reference)', () => {
		const { getUpdatedAttributes, getStickySourceColorForUpdate } = load( 1 );
		const requested = { palette: '2', useParentPalette: false, useColorSignal: true };
		const sticky = getStickySourceColorForUpdate( 'keep', BUTTON, UNTOUCHED );

		expect( getUpdatedAttributes( UNTOUCHED, 'child', requested, sticky, false, false, false, 1 ) )
			.toEqual( getUpdatedAttributes( UNTOUCHED, 'child', requested, false, false, false, false, 1 ) );
		expect( getUpdatedAttributes( UNTOUCHED, 'child', requested, sticky, false, false, false, 1 ).useSourceColorAsReference ).toBe( false );
	} );
} );

describe( 'wiring: both editor entry points resolve the mode through resolveStickySourceColor()', () => {
	const fs = require( 'fs' );
	const path = require( 'path' );
	const read = ( relative ) => fs.readFileSync( path.join( __dirname, relative ), 'utf8' );

	test( "the mount (withUpdatedAttributes) passes 'keep' through, not a boolean", () => {
		const mount = read( '../index.js' );

		expect( mount ).toMatch( /const stickySourceColor = resolveStickySourceColor\( colorSignalSupport \);/ );
		expect( mount ).toMatch( /getUpdatedAttributes\( attributes, clientId, \{\}, stickySourceColor,/ );
	} );

	test( 'user updates (withColorSignalProps) resolve the mode, then scope it per update', () => {
		const props = read( '../components/with-color-signal-props/index.js' );

		expect( props ).toMatch( /const stickySourceColor = resolveStickySourceColor\( colorSignalSupport \);/ );
		expect( props ).toMatch( /getStickySourceColorForUpdate\( stickySourceColor, colorSignalSupport, currentAttributes \)/ );
	} );
} );
