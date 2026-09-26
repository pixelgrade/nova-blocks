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
 * Button declares `stickySourceColor: false`, so the mount turns a
 * source-referenced Button into its explicit variation — which is why "Action"
 * stores the source color as an explicit variation.
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
const BUTTON_SUPPORT = { novaBlocks: { colorSignal: { activationAttribute: 'useColorSignal', minColorSignal: 1, inheritParentPalette: true, paletteInheritanceAttribute: 'useParentPalette', stickySourceColor: false } } };

const load = ( siteColorVariation, parentAbsoluteVariation ) => {
	let modules;

	jest.isolateModules( () => {
		window.styleManager = { colorsConfig: PALETTES, siteColorVariation };

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

		modules = { tiles, getUpdatedAttributes: editorUtils.getUpdatedAttributes };
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

		const settled = getUpdatedAttributes( attributes, 'child', {}, false, false, false, false, 1 );

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
} );
