/**
 * Contracts for the color-tile family registry (style-manager#210):
 *
 * - the "Action" role is a Button tile (palette source color, pinned palette),
 *   the "Light surface" role is a Row Surface tile — both resolved through the
 *   same Color Signal math the editor's update-blocks recompute uses;
 * - every definition in a family declares the same managed boundary;
 * - Action survives the update-blocks recompute untouched in every context
 *   (so the active tile still derives after a reload);
 * - Default ↔ Action roundtrips restore the untouched Button exactly: every
 *   managed attribute returns to its registered default (serializes nothing).
 *
 * Same fresh-registry pattern as resolve-color-tile-values.test.js:
 * getSiteColorVariation() caches the site variation at module load.
 */

const PALETTES = [
	{ id: '1', label: 'Brand', sourceIndex: 3, variations: [
		{ bg: '#ffffff', fg1: '#292115', accent: '#b48a4f' }, { bg: '#fbf5ec', fg1: '#292115', accent: '#b48a4f' },
		{ bg: '#f2dfc3', fg1: '#2a2114', accent: '#88693c' }, { bg: '#dfae68', fg1: '#2a2114', accent: '#88693c' },
		{ bg: '#b48a4f', fg1: '#ffffff', accent: '#ffffff' }, { bg: '#88693c', fg1: '#ffffff', accent: '#ffffff' },
		{ bg: '#705631', fg1: '#ffffff', accent: '#ddaa61' }, { bg: '#5a4528', fg1: '#ffffff', accent: '#ddaa61' },
		{ bg: '#45351e', fg1: '#ffffff', accent: '#ddaa61' }, { bg: '#312616', fg1: '#ffffff', accent: '#ddaa61' },
		{ bg: '#1c160c', fg1: '#ffffff', accent: '#ddaa61' }, { bg: '#000000', fg1: '#ffffff', accent: '#ddaa61' },
	] },
	{ id: '2', label: 'Secondary', sourceIndex: 7, variations: [
		{ bg: '#ffffff', fg1: '#1e222f', accent: '#39497C' }, { bg: '#f4f5f8', fg1: '#1e222f', accent: '#39497C' },
		{ bg: '#dee1e9', fg1: '#1e222f', accent: '#39497C' }, { bg: '#afb6ca', fg1: '#1e222f', accent: '#39497C' },
		{ bg: '#8791b0', fg1: '#ffffff', accent: '#39497C' }, { bg: '#606d96', fg1: '#ffffff', accent: '#ffffff' },
		{ bg: '#4a5987', fg1: '#ffffff', accent: '#ffffff' }, { bg: '#374778', fg1: '#ffffff', accent: '#ffffff' },
		{ bg: '#2a365c', fg1: '#ffffff', accent: '#ffffff' }, { bg: '#1e2641', fg1: '#ffffff', accent: '#ffffff' },
		{ bg: '#111625', fg1: '#ffffff', accent: '#ffffff' }, { bg: '#000000', fg1: '#ffffff', accent: '#ffffff' },
	] },
];

// core/button's registered defaults: color-signal attributes.json, the
// button overrides (packages/core/src/blocks/core/button/attributes.json),
// the activation attribute, and the default-less inheritance attribute.
const BUTTON_DEFAULTS = {
	palette: '1',
	paletteVariation: 1,
	useSourceColorAsReference: true,
	colorSignal: 1,
	contentColorSignal: 0,
	contentPaletteVariation: 1,
	emphasisArea: 100,
	useColorSignal: false,
	useParentPalette: undefined,
};

window.matchMedia = window.matchMedia || ( () => ( {
	matches: false,
	addEventListener: () => {},
	removeEventListener: () => {},
	addListener: () => {},
	removeListener: () => {},
} ) );

const loadModules = ( siteColorVariation = 1 ) => {
	let modules;

	jest.isolateModules( () => {
		window.styleManager = { colorsConfig: PALETTES, siteColorVariation };

		modules = {
			tiles: require( './color-tiles' ),
			rowSurfaces: require( './row-surfaces' ),
			utils: require( '../utils' ),
			engine: require( '../../../block-editor/src/preset-engine' ),
		};
	} );

	return modules;
};

const definitionsFor = ( tiles, blockName, reference ) => {
	const family = tiles.getColorTileFamily( blockName );

	return tiles.buildColorTileOptions( family, reference ).map( ( option ) => ( {
		id: option.value,
		managedAttributes: family.managedAttributes,
		values: option.preset,
	} ) );
};

// What WordPress' serializer keeps in the block comment: attributes that
// differ from their registered default.
const serializedAttributes = ( attributes, defaults ) => Object.keys( attributes ).reduce( ( kept, key ) => {
	if ( undefined !== attributes[ key ] && attributes[ key ] !== defaults[ key ] ) {
		kept[ key ] = attributes[ key ];
	}
	return kept;
}, {} );

describe( 'family registry', () => {
	test( 'serves core/group (Row Surfaces) and core/button (Button roles) only', () => {
		const { tiles, rowSurfaces } = loadModules( 1 );

		expect( tiles.getColorTileFamily( 'core/group' ).id ).toBe( 'row-surfaces' );
		expect( tiles.getColorTileFamily( 'core/group' ).tiles ).toEqual( rowSurfaces.ROW_SURFACE_TILES );
		expect( tiles.getColorTileFamily( 'core/group' ).managedAttributes ).toEqual( rowSurfaces.COLOR_TILE_MANAGED_ATTRIBUTES );
		expect( tiles.getColorTileFamily( 'core/button' ).id ).toBe( 'button-roles' );
		expect( tiles.getColorTileFamily( 'core/columns' ) ).toBeNull();
		expect( tiles.getColorTileFamily( 'novablocks/supernova' ) ).toBeNull();
	} );

	test( 'the Button family ships Default v1 + Action v2 (source reference), one managed boundary', () => {
		const { tiles } = loadModules( 1 );
		const family = tiles.getColorTileFamily( 'core/button' );

		expect( family.tiles.map( ( tile ) => [ tile.id, tile.version, tile.label ] ) ).toEqual( [
			[ 'button-default', 1, 'Default' ],
			[ 'button-action', 2, 'Action' ],
		] );
		expect( family.managedAttributes ).toEqual( [
			'useColorSignal', 'useParentPalette', 'palette', 'paletteVariation', 'colorSignal', 'useSourceColorAsReference', 'contentPaletteVariation',
		] );
	} );

	test( 'roles point at existing tiles of the right block family', () => {
		const { tiles } = loadModules( 1 );

		expect( tiles.resolveColorTileRole( 'action' ) ).toEqual( { block: 'core/button', tile: 'button-action', label: 'Action' } );
		expect( tiles.resolveColorTileRole( 'light-surface' ) ).toEqual( { block: 'core/group', tile: 'row-surface-whisper', label: 'Light surface' } );
		expect( tiles.resolveColorTileRole( 'nope' ) ).toBeNull();

		Object.keys( tiles.COLOR_TILE_ROLES ).forEach( ( role ) => {
			const { block, tile } = tiles.COLOR_TILE_ROLES[ role ];
			expect( tiles.getColorTileFamily( block ).tiles.map( ( entry ) => entry.id ) ).toContain( tile );
		} );
	} );

	test( 'a role labels its tile as a sub-caption', () => {
		const { tiles } = loadModules( 1 );
		const options = tiles.buildColorTileOptions( tiles.getColorTileFamily( 'core/group' ), 1 );

		expect( options.find( ( option ) => option.value === 'row-surface-whisper' ).sub ).toBe( 'Light surface' );
		expect( options.find( ( option ) => option.value === 'row-surface-plain' ).sub ).toBeUndefined();
	} );
} );

describe( 'Action (Button, palette source color)', () => {
	test( 'v2 stores a REFERENCE to the palette source color, not its current step', () => {
		const { tiles, utils } = loadModules( 1 );
		const action = definitionsFor( tiles, 'core/button', 1 ).find( ( definition ) => definition.id === 'button-action' );

		// Nothing palette-dependent is stored: variation 1 + the reference (mirrored into
		// contentPaletteVariation). The source color itself (fixture: variation 4) is
		// looked up at render time.
		expect( action.values ).toEqual( {
			useColorSignal: true,
			useParentPalette: false,
			palette: '1',
			paletteVariation: 1,
			colorSignal: 1,
			useSourceColorAsReference: true,
			contentPaletteVariation: 1,
		} );
		expect( utils.getAbsoluteColorVariation( action.values ) ).toBe( 4 );
	} );

	test( 'the reference is offset-independent (site 3 still stores variation 1 + the reference)', () => {
		const { tiles } = loadModules( 3 );
		const action = definitionsFor( tiles, 'core/button', 1 ).find( ( definition ) => definition.id === 'button-action' );

		expect( [ action.values.paletteVariation, action.values.useSourceColorAsReference, action.values.contentPaletteVariation ] ).toEqual( [ 1, true, 1 ] );
	} );

	test( 'on a surface that IS the source color, Action steps off it as an explicit variation (v1 form)', () => {
		const { tiles } = loadModules( 1 );
		const action = definitionsFor( tiles, 'core/button', 4 ).find( ( definition ) => definition.id === 'button-action' );

		expect( action.values.useSourceColorAsReference ).toBe( false );
		expect( action.values.paletteVariation ).not.toBe( 4 );
		expect( action.values.colorSignal ).toBeGreaterThanOrEqual( 1 );
	} );

	test( 'a v1-applied Action button (explicit source step) derives as Custom under v2', () => {
		const { tiles, engine } = loadModules( 1 );
		const definitions = definitionsFor( tiles, 'core/button', 1 );
		const v1 = { useColorSignal: true, useParentPalette: false, palette: '1', paletteVariation: 4, colorSignal: 1, useSourceColorAsReference: false, contentPaletteVariation: 4 };

		expect( engine.deriveActivePresetId( definitions, v1, BUTTON_DEFAULTS ) ).toBeNull();
	} );

	test.each( [
		[ 1, 1 ], [ 1, 3 ], [ 5, 1 ], [ 8, 1 ], [ 12, 1 ], [ 4, 1 ], [ 3, 3 ], [ 12, 7 ],
	] )( 'survives the update-blocks recompute untouched (reference %i, site %i)', ( reference, siteVariation ) => {
		const { tiles, utils } = loadModules( siteVariation );
		const action = definitionsFor( tiles, 'core/button', reference ).find( ( definition ) => definition.id === 'button-action' );
		const values = action.values;

		// update-blocks.js: the source-reference branch, else the explicit-variation branch.
		const absolute = utils.getAbsoluteColorVariation( values );
		const signal = utils.clampColorSignal( values.colorSignal, { minColorSignal: 1 } );
		const next = utils.computeColorSignal( reference, signal, values.palette, absolute );
		const nextSignal = utils.clampColorSignal(
			values.useSourceColorAsReference ? utils.getSignalRelativeToVariation( absolute, reference, values.palette ) : signal,
			{ minColorSignal: 1 }
		);
		const finalVariation = values.useSourceColorAsReference ? 1 : utils.removeSiteVariationOffset( next );

		expect( finalVariation ).toBe( values.paletteVariation );
		expect( nextSignal ).toBe( values.colorSignal );
		expect( values.colorSignal ).toBeGreaterThanOrEqual( 1 );
	} );

	test( 'the thumbnail paints the palette source variation', () => {
		const { tiles } = loadModules( 5 );
		const options = tiles.buildColorTileOptions( tiles.getColorTileFamily( 'core/button' ), 1 );
		const action = options.find( ( option ) => option.value === 'button-action' );

		// sourceIndex 3 -> variations[3] -> visual variation 4, independent of the site offset.
		expect( action.variation ).toBe( 4 );
		expect( action.palette ).toBe( '1' );
	} );
} );

describe( 'Button apply/derive through the real engine', () => {
	test.each( [ 1, 5, 12 ] )( 'Default ↔ Action roundtrip under reference %i', ( reference ) => {
		const { tiles, engine } = loadModules( 1 );
		const definitions = definitionsFor( tiles, 'core/button', reference );
		const [ defaultTile, action ] = definitions;
		const untouched = { text: 'Buy', className: 'is-style-fill' };

		// An untouched Button derives as Default.
		expect( engine.deriveActivePresetId( definitions, untouched, BUTTON_DEFAULTS ) ).toBe( 'button-default' );

		const withAction = { ...untouched, ...engine.getPresetApplyPatch( action, untouched, BUTTON_DEFAULTS ) };
		expect( engine.deriveActivePresetId( definitions, withAction, BUTTON_DEFAULTS ) ).toBe( 'button-action' );
		expect( withAction.text ).toBe( 'Buy' );

		const backToDefault = { ...withAction, ...engine.getPresetApplyPatch( defaultTile, withAction, BUTTON_DEFAULTS ) };
		expect( engine.deriveActivePresetId( definitions, backToDefault, BUTTON_DEFAULTS ) ).toBe( 'button-default' );
		// Byte-identity: nothing Color Signal is left to serialize.
		expect( serializedAttributes( backToDefault, BUTTON_DEFAULTS ) ).toEqual( untouched );
	} );

	test( 'a fine-tuned Button (Customize tab) derives as Custom', () => {
		const { tiles, engine } = loadModules( 1 );
		const definitions = definitionsFor( tiles, 'core/button', 1 );
		const tuned = { useColorSignal: true, useParentPalette: false, palette: '1', paletteVariation: 6, colorSignal: 2, useSourceColorAsReference: false, contentPaletteVariation: 6 };

		expect( engine.deriveActivePresetId( definitions, tuned, BUTTON_DEFAULTS ) ).toBeNull();
	} );

	test( 'Action serializes only the activation and ownership (the reference, variation 1 and signal 1 ARE Button defaults)', () => {
		const { tiles, engine } = loadModules( 1 );
		const action = definitionsFor( tiles, 'core/button', 1 )[ 1 ];

		expect( serializedAttributes( engine.getPresetApplyPatch( action, {}, BUTTON_DEFAULTS ), BUTTON_DEFAULTS ) ).toEqual( {
			useColorSignal: true,
			useParentPalette: false,
		} );
	} );
} );

describe( 'managed boundary', () => {
	test.each( [ 'core/group', 'core/button' ] )( '%s tiles all resolve to values inside the family boundary', ( blockName ) => {
		const { tiles } = loadModules( 1 );
		const family = tiles.getColorTileFamily( blockName );

		tiles.buildColorTileOptions( family, 1 ).forEach( ( option ) => {
			Object.keys( option.preset ).forEach( ( attribute ) => expect( family.managedAttributes ).toContain( attribute ) );
		} );
	} );
} );

describe( 'getColorTileMountPatch (the editor mount, folded into the one patch)', () => {
	const GROUP = { functionalColors: true };
	const BUTTON = { activationAttribute: 'useColorSignal' };

	test( 'a Row Surface patch carries the content variation the mount would write', () => {
		const { tiles } = loadModules( 1 );
		const patch = { palette: '1', paletteVariation: 2, colorSignal: 1, useSourceColorAsReference: false };

		expect( tiles.getColorTileMountPatch( patch, { contentPaletteVariation: 1 }, GROUP ) ).toEqual( { ...patch, contentPaletteVariation: 2 } );
	} );

	test( 'a content signal is left to the editor', () => {
		const { tiles } = loadModules( 1 );
		const patch = { paletteVariation: 6 };

		expect( tiles.getColorTileMountPatch( patch, { contentColorSignal: 2 }, GROUP ) ).toBe( patch );
	} );

	test( "a 'keep' source-referenced Button mirrors its stored variation 1 (palette-independent)", () => {
		const { tiles } = loadModules( 3 );
		const support = { activationAttribute: 'useColorSignal', inheritParentPalette: true, paletteInheritanceAttribute: 'useParentPalette', stickySourceColor: 'keep' };
		const patch = { useColorSignal: true, useParentPalette: false, palette: '1', paletteVariation: 1, useSourceColorAsReference: true, colorSignal: 1 };

		expect( tiles.getColorTileMountPatch( patch, { contentColorSignal: 0 }, support ).contentPaletteVariation ).toBe( 1 );
	} );

	test( 'an inactive opt-in block (Button Default) is untouched', () => {
		const { tiles } = loadModules( 1 );
		const patch = { useColorSignal: false, paletteVariation: 1, contentPaletteVariation: 1 };

		expect( tiles.getColorTileMountPatch( patch, { useColorSignal: true, contentPaletteVariation: 4 }, BUTTON ) ).toBe( patch );
	} );
} );
