/**
 * Data-level contracts for the Card Styles tile family (Gate 1 doc §2,
 * executed against the REAL color-signal math and preset engine):
 *
 * - the 19-attribute managed union, pinned exactly;
 * - the per-tile values from §2.2 (duotone resolved same-palette darkest
 *   anchor -> variation 1; Organic = the Shape Modeling "Blob" mask
 *   geometry; content story mirrors the sidebar's signal-0 invariant);
 * - the per-tile NEW clears from §2.3, enumerated;
 * - apply→derive roundtrip per tile, and cross-context Custom.
 *
 * The bare `@novablocks/*` specifiers are mocked onto the real source
 * modules by RELATIVE path (Phase 2 convention — the block-library package
 * itself collides in jest's haste map). Globals must exist before the
 * factories run, so no top-level imports.
 */

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

// Registered defaults, mirroring the attributes.json files of every managed
// sub-domain (color-signal, card-elements-stacking, overlay-filter,
// shape-modeling, scrolling-effect).
const REGISTERED_DEFAULTS = {
	palette: '1',
	paletteVariation: 1,
	useSourceColorAsReference: false,
	colorSignal: 0,
	contentColorSignal: 0,
	contentPaletteVariation: 1,
	cardLayout: 'vertical',
	overlayFilterType: 'unitone',
	overlayFilterStrength: 0,
	overlayFilterDuotoneConfig: {},
	blobsEnableMask: false,
	blobsEnableDecoration: false,
	blobMaskSides: 3,
	blobMaskPatternSeed: 3,
	blobMaskComplexity: 0,
	blobMaskSmoothness: 33,
	blobMaskRotation: 0,
	scrollingEffect: 'static',
	motionPreset: 'standard-dynamic',
};

window.matchMedia = window.matchMedia || ( () => ( {
	matches: false,
	addEventListener: () => {},
	removeEventListener: () => {},
	addListener: () => {},
	removeListener: () => {},
} ) );
window.styleManager = { colorsConfig: PALETTES, siteColorVariation: 1 };

jest.mock( '@novablocks/utils', () => require( '../../../../../utils/src/color-signal' ) );
jest.mock( '@novablocks/color-signal', () => ( {
	...require( '../../../../../color-signal/src/presets/resolve-color-tile-values' ),
	getPaletteConfig: require( '../../../../../color-signal/src/utils' ).getPaletteConfig,
} ) );

const {
	buildCardStyleOptions,
	CARD_STYLE_MANAGED_ATTRIBUTES,
	CARD_STYLE_TILES,
	resolveBrandDuotoneConfig,
} = require( './definitions' );
const {
	deriveActivePresetId,
	getPresetApplyPatch,
} = require( '../../../../../block-editor/src/preset-engine' );

const definitionsFor = ( referenceVariation ) =>
	buildCardStyleOptions( CARD_STYLE_TILES, referenceVariation ).map( ( option ) => ( {
		id: option.value,
		managedAttributes: CARD_STYLE_MANAGED_ATTRIBUTES,
		values: option.preset,
	} ) );

describe( 'managed union', () => {
	test( 'is exactly the 19 Gate-1 attributes', () => {
		expect( CARD_STYLE_MANAGED_ATTRIBUTES.slice().sort() ).toEqual( [
			'palette', 'paletteVariation', 'colorSignal', 'useSourceColorAsReference',
			'contentColorSignal', 'contentPaletteVariation',
			'cardLayout',
			'overlayFilterType', 'overlayFilterStrength', 'overlayFilterDuotoneConfig',
			'blobsEnableMask', 'blobsEnableDecoration',
			'blobMaskSides', 'blobMaskPatternSeed', 'blobMaskComplexity', 'blobMaskSmoothness', 'blobMaskRotation',
			'scrollingEffect', 'motionPreset',
		].sort() );
	} );

	test( 'every tile writes only inside the union', () => {
		definitionsFor( 1 ).forEach( ( definition ) => {
			Object.keys( definition.values ).forEach( ( key ) => {
				expect( CARD_STYLE_MANAGED_ATTRIBUTES ).toContain( key );
			} );
		} );
	} );
} );

describe( 'per-tile values (Gate 1 §2.2)', () => {
	test( 'the roster ships the six approved tiles', () => {
		expect( CARD_STYLE_TILES.map( ( tile ) => [ tile.id, tile.label, tile.palette, tile.variation, tile.cardLayout, tile.treatment, tile.motion ] ) ).toEqual( [
			[ 'card-style-editorial', 'Editorial', '1', 1, 'horizontal', 'natural', 'static' ],
			[ 'card-style-overlap', 'Overlap', '1', 3, 'horizontal-reverse', 'natural', 'static' ],
			[ 'card-style-framed', 'Framed', '1', 2, 'vertical', 'natural', 'static' ],
			[ 'card-style-immersive', 'Immersive', '1', 10, 'stacked', 'soft-overlay', 'parallax' ],
			[ 'card-style-cinematic', 'Cinematic', '2', 12, 'stacked', 'duotone-brand', 'parallax' ],
			[ 'card-style-organic', 'Organic', '1', 2, 'vertical', 'shape-mask', 'static' ],
		] );
	} );

	test( 'every tile writes the complete color identity with the sidebar signal-0 content invariant', () => {
		definitionsFor( 1 ).forEach( ( { values } ) => {
			expect( values.useSourceColorAsReference ).toBe( false );
			expect( values.contentColorSignal ).toBe( 0 );
			expect( values.contentPaletteVariation ).toBe( values.paletteVariation );
			expect( values.cardLayout ).toBeDefined();
			expect( values.scrollingEffect ).toBeDefined();
		} );
	} );

	test( 'duotone-brand resolves same-palette stops: darkest signal anchor -> variation 1, hexes from the payload', () => {
		expect( resolveBrandDuotoneConfig( '2' ) ).toEqual( {
			from: { paletteId: '2', variationIndex: 11, hex: '#071922' },
			to: { paletteId: '2', variationIndex: 1, hex: '#ffffff' },
		} );
	} );

	test( 'Cinematic carries the resolved duotone config and no strength', () => {
		const cinematic = definitionsFor( 1 ).find( ( d ) => d.id === 'card-style-cinematic' );

		expect( cinematic.values.overlayFilterType ).toBe( 'duotone' );
		expect( cinematic.values.overlayFilterDuotoneConfig ).toEqual( resolveBrandDuotoneConfig( '2' ) );
		expect( cinematic.values ).not.toHaveProperty( 'overlayFilterStrength' );
	} );

	test( 'Immersive is a unitone wash at strength 30', () => {
		const immersive = definitionsFor( 1 ).find( ( d ) => d.id === 'card-style-immersive' );

		expect( immersive.values.overlayFilterType ).toBe( 'unitone' );
		expect( immersive.values.overlayFilterStrength ).toBe( 30 );
	} );

	test( 'Organic carries exactly the Shape Modeling "Blob" preset mask geometry', () => {
		const organic = definitionsFor( 1 ).find( ( d ) => d.id === 'card-style-organic' );

		expect( organic.values ).toEqual( expect.objectContaining( {
			blobsEnableMask: true,
			blobsEnableDecoration: false,
			blobMaskSides: 7,
			blobMaskPatternSeed: 50,
			blobMaskComplexity: 100,
			blobMaskSmoothness: 100,
			blobMaskRotation: 0,
		} ) );
	} );
} );

describe( 'per-tile clears (Gate 1 §2.3, executed)', () => {
	const clearsOf = ( id ) => {
		const definition = definitionsFor( 1 ).find( ( d ) => d.id === id );
		const patch = getPresetApplyPatch( definition );

		return Object.keys( patch ).filter( ( key ) => patch[ key ] === undefined ).sort();
	};

	const TREATMENT_AND_MOTION = [
		'overlayFilterType', 'overlayFilterStrength', 'overlayFilterDuotoneConfig',
		'blobsEnableMask', 'blobsEnableDecoration',
		'blobMaskSides', 'blobMaskPatternSeed', 'blobMaskComplexity', 'blobMaskSmoothness', 'blobMaskRotation',
		'motionPreset',
	].sort();

	test.each( [ 'card-style-editorial', 'card-style-overlap', 'card-style-framed' ] )(
		'%s ("natural, still") clears every treatment attribute plus motionPreset',
		( id ) => {
			expect( clearsOf( id ) ).toEqual( TREATMENT_AND_MOTION );
		}
	);

	test( 'Immersive clears the shape attrs, the duotone config and motionPreset', () => {
		expect( clearsOf( 'card-style-immersive' ) ).toEqual( [
			'blobMaskComplexity', 'blobMaskPatternSeed', 'blobMaskRotation', 'blobMaskSides', 'blobMaskSmoothness',
			'blobsEnableDecoration', 'blobsEnableMask',
			'motionPreset', 'overlayFilterDuotoneConfig',
		].sort() );
	} );

	test( 'Cinematic clears the shape attrs, the strength and motionPreset', () => {
		expect( clearsOf( 'card-style-cinematic' ) ).toEqual( [
			'blobMaskComplexity', 'blobMaskPatternSeed', 'blobMaskRotation', 'blobMaskSides', 'blobMaskSmoothness',
			'blobsEnableDecoration', 'blobsEnableMask',
			'motionPreset', 'overlayFilterStrength',
		].sort() );
	} );

	test( 'Organic clears the overlay attrs and motionPreset only', () => {
		expect( clearsOf( 'card-style-organic' ) ).toEqual( [
			'motionPreset', 'overlayFilterDuotoneConfig', 'overlayFilterStrength', 'overlayFilterType',
		].sort() );
	} );

	test( 'no tile ever clears cardLayout, scrollingEffect or the color identity', () => {
		definitionsFor( 1 ).forEach( ( definition ) => {
			const patch = getPresetApplyPatch( definition );

			[ 'cardLayout', 'scrollingEffect', 'palette', 'paletteVariation', 'colorSignal',
				'useSourceColorAsReference', 'contentColorSignal', 'contentPaletteVariation' ].forEach( ( key ) => {
				expect( patch[ key ] ).not.toBeUndefined();
			} );
		} );
	} );
} );

describe( 'apply→derive roundtrip', () => {
	test.each( [ 1, 6, 12 ] )( 'every tile roundtrips exactly under reference variation %d', ( reference ) => {
		const definitions = definitionsFor( reference );

		definitions.forEach( ( definition ) => {
			const applied = getPresetApplyPatch( definition );

			expect( deriveActivePresetId( definitions, applied, REGISTERED_DEFAULTS ) ).toBe( definition.id );
		} );
	} );

	test( 'a fresh default supernova is Custom (no tile coincides with the block defaults)', () => {
		expect( deriveActivePresetId( definitionsFor( 1 ), {}, REGISTERED_DEFAULTS ) ).toBeNull();
	} );

	test( 'values applied under one context derive as Custom under a signal-changing context', () => {
		const appliedOnLight = getPresetApplyPatch(
			definitionsFor( 1 ).find( ( d ) => d.id === 'card-style-editorial' )
		);

		expect( deriveActivePresetId( definitionsFor( 8 ), appliedOnLight, REGISTERED_DEFAULTS ) ).toBeNull();
	} );
} );

describe( 'structural boundary invariant', () => {
	const { getStructuralBoundaryViolations } = require( '../../../../../block-editor/src/preset-engine/structural-attributes' );

	test( 'every tile declares cardLayout explicitly — structure is written, never cleared', () => {
		expect( getStructuralBoundaryViolations( definitionsFor( 1 ) ) ).toEqual( [] );
	} );
} );
