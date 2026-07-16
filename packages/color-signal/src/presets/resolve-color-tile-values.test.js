/**
 * Contracts for the color-tile context resolver (Gate 1 doc §1, executed):
 *
 * - stored `paletteVariation` is the site-offset-relative form of the roster's
 *   absolute variation;
 * - `colorSignal` is context-relative, produced by the REAL
 *   `getSignalRelativeToVariation` against the injected reference;
 * - `useSourceColorAsReference` is always explicit false;
 * - the update-blocks no-rewrite invariant: `computeColorSignal( ref, S, P,
 *   absV ) === absV` for every tile in every tested context (§1.3 proof);
 * - apply→derive roundtrips exactly through the real engine, per tile, across
 *   parent-variation and site-offset contexts; cross-context values derive
 *   as Custom when the signal differs.
 *
 * No top-level imports: globals (styleManager fixture, matchMedia stub for
 * @novablocks/utils' media-query module) must exist before the modules load,
 * and `getSiteColorVariation` caches the site variation at module load — so
 * every context loads a fresh module registry.
 */

/* Real Style Manager palettes payload (from the curation playground fixture,
 * which mirrors style-manager.local). variations[i] = variation i+1. */
const PALETTES = [
	{ id: '1', label: 'Brand Primary', sourceIndex: 5, variations: [
		{ bg: '#ffffff', fg1: '#0f261d', accent: '#00825A' }, { bg: '#f7f8f3', fg1: '#0f261d', accent: '#00825A' },
		{ bg: '#b2eca1', fg1: '#0f261d', accent: '#00825A' }, { bg: '#75c889', fg1: '#052721', accent: '#004E42' },
		{ bg: '#38a370', fg1: '#ffffff', accent: '#004E42' }, { bg: '#00825a', fg1: '#ffffff', accent: '#F7F8F3' },
		{ bg: '#00684e', fg1: '#ffffff', accent: '#F7F8F3' }, { bg: '#004e42', fg1: '#ffffff', accent: '#F7F8F3' },
		{ bg: '#004036', fg1: '#ffffff', accent: '#F7F8F3' }, { bg: '#002e27', fg1: '#ffffff', accent: '#00825A' },
		{ bg: '#001b17', fg1: '#ffffff', accent: '#00825A' }, { bg: '#000000', fg1: '#ffffff', accent: '#00825A' },
	] },
	{ id: '2', label: 'Secondary', sourceIndex: 5, variations: [
		{ bg: '#ffffff', fg1: '#16242d', accent: '#2276A2' }, { bg: '#ecf7fc', fg1: '#16242d', accent: '#2276A2' },
		{ bg: '#aedef3', fg1: '#16242d', accent: '#2276A2' }, { bg: '#83beda', fg1: '#16242e', accent: '#1c6084' },
		{ bg: '#5299be', fg1: '#ffffff', accent: '#ffffff' }, { bg: '#2276a2', fg1: '#ffffff', accent: '#AEDEF3' },
		{ bg: '#1c6084', fg1: '#ffffff', accent: '#AEDEF3' }, { bg: '#164e6b', fg1: '#ffffff', accent: '#AEDEF3' },
		{ bg: '#113c52', fg1: '#ffffff', accent: '#AEDEF3' }, { bg: '#0c2a3a', fg1: '#ffffff', accent: '#2276A2' },
		{ bg: '#071922', fg1: '#ffffff', accent: '#2276A2' }, { bg: '#000000', fg1: '#ffffff', accent: '#2276A2' },
	] },
];

// Registered defaults, mirroring packages/color-signal/src/attributes.json.
const REGISTERED_DEFAULTS = {
	palette: '1',
	paletteVariation: 1,
	useSourceColorAsReference: false,
	colorSignal: 0,
	contentColorSignal: 0,
	contentPaletteVariation: 1,
	emphasisArea: 100,
};

window.matchMedia = window.matchMedia || ( () => ( {
	matches: false,
	addEventListener: () => {},
	removeEventListener: () => {},
	addListener: () => {},
	removeListener: () => {},
} ) );

/**
 * Fresh module registry per site-variation context — getSiteColorVariation()
 * caches window.styleManager.siteColorVariation at module load.
 */
const loadModules = ( siteColorVariation = 1 ) => {
	let modules;

	jest.isolateModules( () => {
		window.styleManager = { colorsConfig: PALETTES, siteColorVariation };

		modules = {
			resolver: require( './resolve-color-tile-values' ),
			rowSurfaces: require( './row-surfaces' ),
			utils: require( '../utils' ),
			engine: require( '../../../block-editor/src/preset-engine' ),
		};
	} );

	return modules;
};

describe( 'resolveColorTileValues', () => {
	test( 'stored paletteVariation equals the absolute variation at site variation 1', () => {
		const { resolver } = loadModules( 1 );
		const values = resolver.resolveColorTileValues( { palette: '1', variation: 6 }, 1 );

		expect( values.palette ).toBe( '1' );
		expect( values.paletteVariation ).toBe( 6 );
		expect( values.useSourceColorAsReference ).toBe( false );
	} );

	test( 'stored paletteVariation removes the site offset (site variation 3: absolute 6 stores as 4)', () => {
		const { resolver } = loadModules( 3 );
		const values = resolver.resolveColorTileValues( { palette: '1', variation: 6 }, 3 );

		expect( values.paletteVariation ).toBe( 4 );
	} );

	test( 'colorSignal comes from the real relative-signal math: same-bg context is 0, deviation is loud', () => {
		const { resolver } = loadModules( 1 );

		// Plain (v1) on a v1 reference: identical backgrounds -> signal 0.
		expect( resolver.resolveColorTileValues( { palette: '1', variation: 1 }, 1 ).colorSignal ).toBe( 0 );
		// Ink (v12) on a v1 reference: the far anchor -> signal 3.
		expect( resolver.resolveColorTileValues( { palette: '1', variation: 12 }, 1 ).colorSignal ).toBe( 3 );
	} );

	test( 'colorSignal is CONTEXT-RELATIVE: the same tile resolves differently under a dark parent', () => {
		const { resolver } = loadModules( 1 );

		const onLightParent = resolver.resolveColorTileValues( { palette: '1', variation: 1 }, 1 );
		const onDarkParent = resolver.resolveColorTileValues( { palette: '1', variation: 1 }, 8 );

		expect( onLightParent.colorSignal ).toBe( 0 );
		expect( onDarkParent.colorSignal ).toBe( 3 );
		// The variation promise itself never moves with context.
		expect( onDarkParent.paletteVariation ).toBe( onLightParent.paletteVariation );
	} );
} );

describe( 'update-blocks no-rewrite invariant (Gate 1 §1.3, executed against the real math)', () => {
	test.each( [
		[ 'reference 1, site 1', 1, 1 ],
		[ 'reference 6, site 1', 6, 1 ],
		[ 'reference 12, site 1', 12, 1 ],
		[ 'reference 3, site 3', 3, 3 ],
	] )( 'every roster tile applied under %s is left untouched by the update-blocks recompute', ( label, reference, siteVariation ) => {
		const { resolver, rowSurfaces, utils } = loadModules( siteVariation );

		rowSurfaces.ROW_SURFACE_TILES.forEach( ( tile ) => {
			const values = resolver.resolveColorTileValues( tile, reference );
			// What update-blocks.js computes from the applied attributes:
			const absolute = utils.getAbsoluteColorVariation( values );
			const recomputed = utils.computeColorSignal( reference, values.colorSignal, tile.palette, absolute );

			expect( absolute ).toBe( tile.variation ); // stored form re-absolutizes exactly
			expect( recomputed ).toBe( absolute ); // the short-circuit holds: no dispatch
			expect( utils.getSignalRelativeToVariation( absolute, reference, tile.palette ) ).toBe( values.colorSignal );
		} );
	} );
} );

describe( 'apply→derive roundtrip through the real engine', () => {
	const CONTEXTS = [
		{ reference: 1, siteVariation: 1 },
		{ reference: 6, siteVariation: 1 },
		{ reference: 12, siteVariation: 1 },
		{ reference: 3, siteVariation: 3 },
	];

	test.each( CONTEXTS.map( ( context ) => [ `ref ${ context.reference } / site ${ context.siteVariation }`, context ] ) )(
		'every Row Surface tile roundtrips exactly in context %s',
		( label, { reference, siteVariation } ) => {
			const { rowSurfaces, engine } = loadModules( siteVariation );
			const options = rowSurfaces.buildRowSurfaceOptions( rowSurfaces.ROW_SURFACE_TILES, reference );
			const definitions = options.map( ( option ) => ( {
				id: option.value,
				managedAttributes: rowSurfaces.COLOR_TILE_MANAGED_ATTRIBUTES,
				values: option.preset,
			} ) );

			definitions.forEach( ( definition ) => {
				const applied = engine.getPresetApplyPatch( definition );

				expect( engine.deriveActivePresetId( definitions, applied, REGISTERED_DEFAULTS ) ).toBe( definition.id );
				// No clears in this family: every tile writes all four values.
				Object.values( applied ).forEach( ( value ) => expect( value ).not.toBeUndefined() );
			} );
		}
	);

	test( 'values applied under one parent context derive as Custom under a signal-changing context', () => {
		const { rowSurfaces, engine } = loadModules( 1 );

		// Applied while sitting on a light (v1) parent...
		const lightOptions = rowSurfaces.buildRowSurfaceOptions( rowSurfaces.ROW_SURFACE_TILES, 1 );
		const plainOnLight = lightOptions.find( ( option ) => option.value === 'row-surface-plain' ).preset;

		// ...then evaluated after the parent turned dark (v8 reference).
		const darkOptions = rowSurfaces.buildRowSurfaceOptions( rowSurfaces.ROW_SURFACE_TILES, 8 );
		const darkDefinitions = darkOptions.map( ( option ) => ( {
			id: option.value,
			managedAttributes: rowSurfaces.COLOR_TILE_MANAGED_ATTRIBUTES,
			values: option.preset,
		} ) );

		expect( engine.deriveActivePresetId( darkDefinitions, plainOnLight, REGISTERED_DEFAULTS ) ).toBeNull();
	} );
} );

describe( 'roster data contract', () => {
	test( 'ships the 8 approved tiles with immutable ids, version 1 and hue-agnostic labels', () => {
		const { rowSurfaces } = loadModules( 1 );

		expect( rowSurfaces.ROW_SURFACE_TILES.map( ( tile ) => [ tile.id, tile.label, tile.palette, tile.variation ] ) ).toEqual( [
			[ 'row-surface-plain', 'Plain', '1', 1 ],
			[ 'row-surface-whisper', 'Whisper', '1', 2 ],
			[ 'row-surface-tinted', 'Tinted', '1', 3 ],
			[ 'row-surface-bold', 'Bold', '1', 6 ],
			[ 'row-surface-deep', 'Deep', '1', 8 ],
			[ 'row-surface-ink', 'Ink', '1', 12 ],
			[ 'row-surface-secondary-tint', 'Secondary Tint', '2', 3 ],
			[ 'row-surface-secondary-bold', 'Secondary Bold', '2', 6 ],
		] );
		rowSurfaces.ROW_SURFACE_TILES.forEach( ( tile ) => expect( tile.version ).toBe( 1 ) );
	} );

	test( 'the family registry serves core/group only', () => {
		const { rowSurfaces } = loadModules( 1 );

		expect( rowSurfaces.getRowSurfaceTiles( 'core/group' ) ).toBe( rowSurfaces.ROW_SURFACE_TILES );
		expect( rowSurfaces.getRowSurfaceTiles( 'novablocks/supernova' ) ).toBeNull();
		expect( rowSurfaces.getRowSurfaceTiles( 'core/columns' ) ).toBeNull();
	} );

	test( 'the managed boundary is exactly the four color-identity attributes', () => {
		const { rowSurfaces } = loadModules( 1 );

		expect( rowSurfaces.COLOR_TILE_MANAGED_ATTRIBUTES ).toEqual( [
			'palette', 'paletteVariation', 'colorSignal', 'useSourceColorAsReference',
		] );
	} );
} );
