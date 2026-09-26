/**
 * The editor-mount contract for color tiles (style-manager#210).
 *
 * Every active Color Signal block runs getUpdatedAttributes() once on mount
 * (packages/color-signal/src/index.js, withUpdatedAttributes). Whatever a tile
 * stores must already BE that function's output, or the editor rewrites the
 * block on the next load: the post turns dirty and the tile derives as Custom.
 * This runs the REAL getUpdatedAttributes() against each tile's resolved values
 * in a real parent context.
 *
 * Button declares `stickySourceColor: 'keep'`: the mount keeps an own-palette
 * source reference, so "Action" (v2) stores the REFERENCE and the button
 * follows the brand color when a palette change moves the source step.
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

const GROUP_SUPPORT = { novaBlocks: { colorSignal: { functionalColors: true } } };
const BUTTON_SUPPORT = { novaBlocks: { colorSignal: { activationAttribute: 'useColorSignal', minColorSignal: 1, inheritParentPalette: true, paletteInheritanceAttribute: 'useParentPalette', stickySourceColor: 'keep' } } };

const load = ( siteColorVariation, parentAbsoluteVariation, palettes = PALETTES ) => {
	let modules;

	jest.isolateModules( () => {
		window.styleManager = { colorsConfig: palettes, siteColorVariation };

		const { select } = require( '@wordpress/data' );
		const { getSupports } = require( '@novablocks/block-editor' );
		const tiles = require( './color-tiles' );
		const utils = require( '../utils' );
		const editorUtils = require( '../editor/utils' );

		const parent = {
			clientId: 'parent',
			name: 'core/group',
			attributes: {
				palette: '1',
				paletteVariation: utils.removeSiteVariationOffset( parentAbsoluteVariation ),
				useSourceColorAsReference: false,
			},
		};

		select.mockImplementation( () => ( {
			getBlockParents: ( clientId ) => ( 'child' === clientId ? [ 'parent' ] : [] ),
			getBlock: ( clientId ) => ( 'parent' === clientId ? parent : null ),
			getSelectedBlockClientId: () => 'child',
		} ) );
		getSupports.mockImplementation( ( name ) => ( 'core/button' === name ? BUTTON_SUPPORT : GROUP_SUPPORT ) );

		modules = { tiles, utils, engine: require( '../../../block-editor/src/preset-engine' ), getUpdatedAttributes: editorUtils.getUpdatedAttributes };
	} );

	return modules;
};

// Reference 4 is palette 1's own source color: Action must step off it.
const CONTEXTS = [];
[ 1, 3, 12 ].forEach( ( site ) => [ 1, 2, 4, 5, 8, 12 ].forEach( ( reference ) => CONTEXTS.push( [ site, reference ] ) ) );

describe( 'tiles store exactly what the editor settles on at mount', () => {
	test.each( CONTEXTS )( 'Action (site %i, parent %i): the mount is a no-op', ( site, reference ) => {
		const { tiles, getUpdatedAttributes } = load( site, reference );
		const family = tiles.getColorTileFamily( 'core/button' );
		const action = family.tiles.find( ( tile ) => 'button-action' === tile.id );
		const values = tiles.resolveColorTile( family, action, reference );
		const attributes = { contentColorSignal: 0, ...values };

		const settled = getUpdatedAttributes( attributes, 'child', {}, 'keep', false, false, false, 1 );

		[ 'palette', 'paletteVariation', 'colorSignal', 'useSourceColorAsReference', 'contentPaletteVariation' ].forEach( ( key ) => {
			expect( [ key, settled[ key ] ] ).toEqual( [ key, values[ key ] ] );
		} );
	} );

	test.each( CONTEXTS )( 'Row Surfaces (site %i, parent %i): signal and variation survive the mount', ( site, reference ) => {
		const { tiles, getUpdatedAttributes } = load( site, reference );
		const family = tiles.getColorTileFamily( 'core/group' );

		family.tiles.forEach( ( tile ) => {
			const values = tiles.resolveColorTile( family, tile, reference );
			const settled = getUpdatedAttributes( { contentColorSignal: 0, contentPaletteVariation: 1, ...values }, 'child', {}, true, false, false, false, 0 );

			expect( [ tile.id, settled.paletteVariation, settled.colorSignal, settled.useSourceColorAsReference ] )
				.toEqual( [ tile.id, values.paletteVariation, values.colorSignal, false ] );
			// The mount also mirrors the block variation into contentPaletteVariation
			// (content signal 0) — the server writer stores that too.
			expect( [ tile.id, settled.contentPaletteVariation ] ).toEqual( [ tile.id, values.paletteVariation ] );
		} );
	} );

	test( 'a v1 Action button (explicit source step) is left exactly as stored — no migration', () => {
		const { getUpdatedAttributes } = load( 1, 1 );
		const v1 = { useColorSignal: true, useParentPalette: false, palette: '1', paletteVariation: 4, colorSignal: 1, useSourceColorAsReference: false, contentColorSignal: 0, contentPaletteVariation: 4 };
		const settled = getUpdatedAttributes( v1, 'child', {}, 'keep', false, false, false, 1 );

		[ 'palette', 'paletteVariation', 'colorSignal', 'useSourceColorAsReference', 'contentPaletteVariation' ].forEach( ( key ) => {
			expect( [ key, settled[ key ] ] ).toEqual( [ key, v1[ key ] ] );
		} );
	} );
} );

// The same palette 1 with its source color moved from step 4 to step 8 (a darker brand color).
const MOVED = PALETTES.map( ( palette ) => ( `${ palette.id }` === '1' ? { ...palette, sourceIndex: 7 } : palette ) );
const BUTTON_DEFAULTS = {
	palette: '1', paletteVariation: 1, useSourceColorAsReference: true, colorSignal: 1, contentColorSignal: 0,
	contentPaletteVariation: 1, emphasisArea: 100, useColorSignal: false, useParentPalette: undefined,
};
const definitionsFor = ( tiles, reference ) => {
	const family = tiles.getColorTileFamily( 'core/button' );

	return tiles.buildColorTileOptions( family, reference ).map( ( option ) => ( { id: option.value, managedAttributes: family.managedAttributes, values: option.preset } ) );
};

describe( 'a palette change that moves the source step', () => {
	test.each( [ [ 1, 1 ], [ 1, 2 ], [ 3, 1 ], [ 1, 12 ] ] )( 'Action follows the brand color and stays Action (site %i, parent %i)', ( site, reference ) => {
		const before = load( site, reference );
		const family = before.tiles.getColorTileFamily( 'core/button' );
		const applied = {
			...BUTTON_DEFAULTS,
			...before.engine.getPresetApplyPatch( definitionsFor( before.tiles, reference )[ 1 ], BUTTON_DEFAULTS, BUTTON_DEFAULTS ),
		};

		expect( before.utils.getAbsoluteColorVariation( applied ) ).toBe( 4 );

		// Same stored attributes, new palette payload: the editor mount runs again.
		const after = load( site, reference, MOVED );
		const settled = { ...applied, ...after.getUpdatedAttributes( applied, 'child', {}, 'keep', false, false, false, family.minColorSignal ) };

		expect( after.utils.getAbsoluteColorVariation( settled ) ).toBe( 8 );
		expect( settled.useSourceColorAsReference ).toBe( true );
		expect( after.engine.deriveActivePresetId( definitionsFor( after.tiles, reference ), settled, BUTTON_DEFAULTS ) ).toBe( 'button-action' );
	} );

	test( 'a v1 Action button keeps its old step (the known v1 limit) and derives as Custom', () => {
		const after = load( 1, 1, MOVED );
		const v1 = { ...BUTTON_DEFAULTS, useColorSignal: true, useParentPalette: false, paletteVariation: 4, useSourceColorAsReference: false, contentPaletteVariation: 4 };
		const settled = { ...v1, ...after.getUpdatedAttributes( v1, 'child', {}, 'keep', false, false, false, 1 ) };

		expect( after.utils.getAbsoluteColorVariation( settled ) ).toBe( 4 );
		expect( after.engine.deriveActivePresetId( definitionsFor( after.tiles, 1 ), settled, BUTTON_DEFAULTS ) ).toBeNull();
	} );
} );
