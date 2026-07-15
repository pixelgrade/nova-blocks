import { buildPresetDefinitions } from './build-preset-definitions';

const OPTIONS = [
	{ label: 'Balanced', value: 'balanced', preset: { a: 1, b: 2 } }, // omits c
	{ label: 'Wide', value: 'wide', preset: { a: 10, b: 20, c: 30 } },
];

describe( 'buildPresetDefinitions', () => {
	test( 'unions value keys across all options into every definition\'s managedAttributes', () => {
		const { definitions, managedAttributes } = buildPresetDefinitions( OPTIONS );

		expect( managedAttributes ).toEqual( [ 'a', 'b', 'c' ] );
		expect( definitions ).toEqual( [
			{ id: 'balanced', managedAttributes: [ 'a', 'b', 'c' ], values: { a: 1, b: 2 } },
			{ id: 'wide', managedAttributes: [ 'a', 'b', 'c' ], values: { a: 10, b: 20, c: 30 } },
		] );
	} );

	test( 'is defensive against a missing/non-array options list', () => {
		expect( buildPresetDefinitions( undefined ) ).toEqual( { definitions: [], managedAttributes: [] } );
	} );

	test( 'treats a missing preset object like an empty one', () => {
		const { definitions, managedAttributes } = buildPresetDefinitions( [ { label: 'Bare', value: 'bare' } ] );

		expect( managedAttributes ).toEqual( [] );
		expect( definitions ).toEqual( [ { id: 'bare', managedAttributes: [], values: {} } ] );
	} );
} );

describe( 'buildPresetDefinitions — real shape-modeling data contract', () => {
	// Mirrors lib/block-editor-settings.php::novablocks_get_blob_presets().
	// "Rectangle" only asserts 2 of the 15 attributes shape-modeling's
	// attributes.json registers — this is the exact data shape that makes
	// clicking it clear the other 13 (see filters/controls.js's usage and
	// the Stage 3a commit message for the concrete before/after list).
	const BLOB_PRESET_OPTIONS = [
		{ label: 'Rectangle', value: 'rectangle', preset: {
			blobsEnableMask: false, blobsEnableDecoration: false,
		} },
		{ label: 'Ellipse', value: 'ellipse', preset: {
			blobsEnableMask: true, blobMaskSides: 4, blobMaskPatternSeed: 1, blobMaskComplexity: 0,
			blobMaskSmoothness: 100, blobMaskRotation: 0, blobsEnableDecoration: false,
		} },
		{ label: 'MX37: Stones', value: 'stones-37', preset: {
			blobsEnableMask: true, blobMaskSides: 3, blobMaskPatternSeed: 30, blobMaskComplexity: 100,
			blobMaskSmoothness: 60, blobMaskRotation: 70,
			blobsEnableDecoration: true, blobSides: 4, blobPatternSeed: 30, blobComplexity: 90,
			blobSmoothness: 100, blobRotation: 70,
			blobsHorizontalDisplacement: 80, blobsVerticalDisplacement: 60, blobsSizeBalance: 60,
		} },
	];

	// Mirrors packages/shape-modeling/src/attributes.json exactly (all 15 keys).
	const ALL_SHAPE_MODELING_ATTRIBUTES = [
		'blobsEnableMask', 'blobSides', 'blobPatternSeed', 'blobComplexity', 'blobSmoothness', 'blobRotation',
		'blobsEnableDecoration', 'blobMaskSides', 'blobMaskPatternSeed', 'blobMaskComplexity', 'blobMaskSmoothness',
		'blobMaskRotation', 'blobsSizeBalance', 'blobsHorizontalDisplacement', 'blobsVerticalDisplacement',
	];

	test( 'the union across a partial preset ("Rectangle") and a full one ("Stones") is every registered attribute', () => {
		const { managedAttributes } = buildPresetDefinitions( BLOB_PRESET_OPTIONS );

		expect( managedAttributes.slice().sort() ).toEqual( ALL_SHAPE_MODELING_ATTRIBUTES.slice().sort() );
	} );

	test( '"Rectangle" ends up managing (and therefore clearing) attributes it never sets itself', () => {
		const { definitions } = buildPresetDefinitions( BLOB_PRESET_OPTIONS );
		const rectangle = definitions.find( ( d ) => d.id === 'rectangle' );

		expect( Object.keys( rectangle.values ) ).toEqual( [ 'blobsEnableMask', 'blobsEnableDecoration' ] );
		expect( rectangle.managedAttributes ).toEqual( expect.arrayContaining( [ 'blobMaskSides', 'blobSides', 'blobsHorizontalDisplacement' ] ) );
	} );
} );
