/**
 * Data-level contract for the Stage 3a managed-bundle retrofit of the Motion
 * & Effects recipes tab: pins, against the REAL engine implementation, what
 * the tab-wide managed boundary is for each block shape and exactly which
 * stale attributes each recipe now clears.
 *
 * The recipe bundles are mirrored from motion-recipes.js (free recipes and
 * the depth recipes are inline literals there; doppler bundles compose
 * lib/block-editor-settings.php::novablocks_get_motion_preset_options()).
 * The component's JSX wiring (same boundary + hideCustomHint on every group,
 * one tab-level Custom hint, untouched gating) is pinned by the node:test
 * source contracts in motion-recipes-gates.test.js and
 * motion-recipes-managed-contract.test.js — motion-recipes.js itself cannot
 * be imported under jest because the bare `@novablocks/block-editor`
 * specifier hits the pre-existing jest-haste-map name collision with
 * packages/block-library.
 *
 * Engine helpers are imported by RELATIVE path (no bare specifier), so these
 * run against the real implementations.
 */
import { buildPresetDefinitions } from '../../../block-editor/src/components/preset-control/build-preset-definitions';
import {
	deriveActivePresetId,
	getManagedAttributes,
	getPresetApplyPatch,
} from '../../../block-editor/src/preset-engine';

// --- Mirrored recipe bundles (see motion-recipes.js) -----------------------

const DEPTH_RESETS = { pile3dEffect: false, pileParallaxAmount: 0 };

// PHP motion preset options (novablocks_get_motion_preset_options), including
// the preset-less "Custom" entry that motion-recipes.js skips.
const MOTION_PRESET_OPTIONS = [
	{ label: 'Standard Dynamic', value: 'standard-dynamic', preset: {
		focalPoint: { x: 0.5, y: 0 }, finalFocalPoint: { x: 0.5, y: 1 },
		initialBackgroundScale: 1.75, finalBackgroundScale: 1,
		followThroughStart: true, followThroughEnd: true,
	} },
	{ label: 'Pull Focus', value: 'pull-focus', preset: {
		focalPoint: { x: 0.5, y: 0.5 }, finalFocalPoint: { x: 0.5, y: 1 },
		initialBackgroundScale: 1, finalBackgroundScale: 1.75,
		followThroughStart: true, followThroughEnd: true,
	} },
	{ label: 'Custom', value: 'custom' },
];

const buildRecipes = ( { hasDepth, hasDoppler, layoutStyle, cardLayout } ) => {
	const depthResets = hasDepth ? DEPTH_RESETS : {};

	const recipes = [
		{ value: 'motion-still', preset: { scrollingEffect: 'static', ...depthResets } },
		{ value: 'motion-soft-parallax', preset: { scrollingEffect: 'parallax', ...depthResets } },
	];

	if ( hasDoppler ) {
		MOTION_PRESET_OPTIONS.forEach( ( option ) => {
			if ( ! option?.preset || ! Object.keys( option.preset ).length ) {
				return;
			}
			recipes.push( {
				value: `motion-doppler-${ option.value }`,
				preset: {
					scrollingEffect: 'doppler',
					motionPreset: option.value,
					minHeightFallback: 75,
					...option.preset,
					...depthResets,
				},
			} );
		} );
	}

	if ( hasDepth && [ 'classic', 'masonry' ].includes( layoutStyle ) && cardLayout === 'stacked' ) {
		recipes.push( {
			value: 'motion-stacked-drift',
			preset: {
				scrollingEffect: 'static',
				pile3dEffect: true,
				pile3dTarget: 'item',
				pile3dTargetRule: 'odd',
				pileParallaxAmount: 78,
			},
		} );
	}

	if ( hasDepth && 'parametric' === layoutStyle ) {
		recipes.push( {
			value: 'motion-editorial-drift',
			preset: { scrollingEffect: 'static', pile3dEffect: false, pileParallaxAmount: 78 },
		} );
	}

	return recipes;
};

// Registered defaults as the engine reads them off the block type at runtime
// (scrolling-effect attributes.json + the collection/space-and-sizing
// attributes the depth recipes touch).
const REGISTERED_DEFAULTS = {
	scrollingEffect: 'static',
	focalPoint: { x: 0.5, y: 0.5 },
	finalFocalPoint: { x: 0.5, y: 0.5 },
	initialBackgroundScale: 1,
	finalBackgroundScale: 1,
	motionPreset: 'standard-dynamic',
	followThroughStart: true,
	followThroughEnd: true,
	minHeightFallback: 0,
	cardLayout: 'vertical',
	pile3dEffect: false,
	pile3dTarget: 'item',
	pile3dTargetRule: 'odd',
	pileParallaxAmount: 0,
};

const DOPPLER_KEYS = [
	'motionPreset', 'minHeightFallback', 'focalPoint', 'finalFocalPoint',
	'initialBackgroundScale', 'finalBackgroundScale', 'followThroughStart', 'followThroughEnd',
];

const familyFor = ( shape ) => {
	const { definitions } = buildPresetDefinitions( buildRecipes( shape ) );
	return { definitions, managedAttributes: getManagedAttributes( definitions ) };
};

describe( 'managed boundary per block shape', () => {
	test( 'stacked depth collection, classic/masonry layout: 13 motion attributes', () => {
		const { managedAttributes } = familyFor( {
			hasDepth: true,
			hasDoppler: true,
			layoutStyle: 'classic',
			cardLayout: 'stacked',
		} );

		expect( managedAttributes.slice().sort() ).toEqual( [
			'scrollingEffect', 'pile3dEffect', 'pileParallaxAmount',
			...DOPPLER_KEYS,
			'pile3dTarget', 'pile3dTargetRule',
		].slice().sort() );
		expect( managedAttributes ).not.toContain( 'cardLayout' );
	} );

	test( 'non-stacked classic/masonry layout does not offer the stacked recipe or manage Element Stacking', () => {
		const { definitions, managedAttributes } = familyFor( {
			hasDepth: true,
			hasDoppler: true,
			layoutStyle: 'classic',
			cardLayout: 'horizontal',
		} );

		expect( definitions.map( ( definition ) => definition.id ) ).not.toContain( 'motion-stacked-drift' );
		expect( managedAttributes ).not.toContain( 'cardLayout' );
		expect( managedAttributes ).not.toContain( 'pile3dTarget' );
		expect( managedAttributes ).not.toContain( 'pile3dTargetRule' );
	} );

	test( 'depth collection, parametric layout: no stacked-only keys (11 attributes)', () => {
		const { managedAttributes } = familyFor( { hasDepth: true, hasDoppler: true, layoutStyle: 'parametric' } );

		expect( managedAttributes ).toEqual( expect.arrayContaining( [ 'pile3dEffect', 'pileParallaxAmount' ] ) );
		expect( managedAttributes ).not.toContain( 'cardLayout' );
		expect( managedAttributes ).not.toContain( 'pile3dTarget' );
		expect( managedAttributes ).not.toContain( 'pile3dTargetRule' );
		expect( managedAttributes ).toHaveLength( 11 );
	} );

	test( 'doppler block without collection depth (e.g. hero): scrollingEffect + doppler keys only', () => {
		const { managedAttributes } = familyFor( { hasDepth: false, hasDoppler: true, layoutStyle: undefined } );

		expect( managedAttributes.slice().sort() ).toEqual(
			[ 'scrollingEffect', ...DOPPLER_KEYS ].slice().sort()
		);
	} );

	test( 'the preset-less "Custom" PHP option never becomes a recipe definition', () => {
		const { definitions } = familyFor( {
			hasDepth: true,
			hasDoppler: true,
			layoutStyle: 'classic',
			cardLayout: 'stacked',
		} );

		expect( definitions.map( ( d ) => d.id ) ).toEqual( [
			'motion-still', 'motion-soft-parallax',
			'motion-doppler-standard-dynamic', 'motion-doppler-pull-focus',
			'motion-stacked-drift',
		] );
	} );
} );

describe( 'tab-wide derived selection (Custom state)', () => {
	const shape = { hasDepth: true, hasDoppler: true, layoutStyle: 'classic', cardLayout: 'stacked' };

	test( 'a fresh default block derives as "Still" (defaults-normalized match), not Custom', () => {
		const { definitions } = familyFor( shape );

		expect( deriveActivePresetId( definitions, {}, REGISTERED_DEFAULTS ) ).toBe( 'motion-still' );
	} );

	test( 'stale doppler leftovers with scrollingEffect back on static derive as Custom', () => {
		const { definitions } = familyFor( shape );
		const attributes = {
			scrollingEffect: 'static',
			focalPoint: { x: 0.5, y: 0 },
			initialBackgroundScale: 1.75,
		};

		expect( deriveActivePresetId( definitions, attributes, REGISTERED_DEFAULTS ) ).toBeNull();
	} );

	test( 'a fully applied doppler recipe derives back to itself', () => {
		const { definitions } = familyFor( shape );
		const standardDynamic = definitions.find( ( d ) => d.id === 'motion-doppler-standard-dynamic' );
		const applied = { ...getPresetApplyPatch( standardDynamic ) };

		expect( deriveActivePresetId( definitions, applied, REGISTERED_DEFAULTS ) ).toBe( 'motion-doppler-standard-dynamic' );
	} );
} );

describe( 'documented new clears', () => {
	const shape = { hasDepth: true, hasDoppler: true, layoutStyle: 'classic', cardLayout: 'stacked' };

	test( '"Still" clears the full doppler story and stacked-motion keys without changing Element Stacking', () => {
		const { definitions } = familyFor( shape );
		const still = definitions.find( ( d ) => d.id === 'motion-still' );

		expect( getPresetApplyPatch( still ) ).toEqual( {
			scrollingEffect: 'static',
			pile3dEffect: false,
			pileParallaxAmount: 0,
			motionPreset: undefined,
			minHeightFallback: undefined,
			focalPoint: undefined,
			finalFocalPoint: undefined,
			initialBackgroundScale: undefined,
			finalBackgroundScale: undefined,
			followThroughStart: undefined,
			followThroughEnd: undefined,
			pile3dTarget: undefined,
			pile3dTargetRule: undefined,
		} );
		expect( getPresetApplyPatch( still ) ).not.toHaveProperty( 'cardLayout' );
	} );

	test( 'a Doppler recipe clears the stacked-motion keys without changing Element Stacking', () => {
		const { definitions } = familyFor( shape );
		const doppler = definitions.find( ( d ) => d.id === 'motion-doppler-standard-dynamic' );
		const patch = getPresetApplyPatch( doppler );

		[ 'pile3dTarget', 'pile3dTargetRule' ].forEach( ( key ) => {
			expect( key in patch ).toBe( true );
			expect( patch[ key ] ).toBeUndefined();
		} );
		expect( patch ).not.toHaveProperty( 'cardLayout' );
	} );

	test( '"Stacked Drift" now clears the doppler story instead of leaving it configured', () => {
		const { definitions } = familyFor( shape );
		const stacked = definitions.find( ( d ) => d.id === 'motion-stacked-drift' );
		const patch = getPresetApplyPatch( stacked );

		DOPPLER_KEYS.forEach( ( key ) => {
			expect( key in patch ).toBe( true );
			expect( patch[ key ] ).toBeUndefined();
		} );
		expect( patch ).not.toHaveProperty( 'cardLayout' );
		expect( patch.pile3dEffect ).toBe( true );
	} );
} );

describe( 'structural boundary invariant', () => {
	const { getStructuralBoundaryViolations } = require( '../../../block-editor/src/preset-engine/structural-attributes' );

	test.each( [
		[ 'stacked depth collection', { hasDepth: true, hasDoppler: true, layoutStyle: 'classic', cardLayout: 'stacked' } ],
		[ 'non-stacked classic collection', { hasDepth: true, hasDoppler: true, layoutStyle: 'classic', cardLayout: 'horizontal' } ],
		[ 'parametric collection', { hasDepth: true, hasDoppler: true, layoutStyle: 'parametric' } ],
		[ 'doppler-only block', { hasDepth: false, hasDoppler: true } ],
	] )( 'the Motion family never half-owns structure (%s)', ( _label, blockShape ) => {
		const { definitions } = familyFor( blockShape );

		expect( getStructuralBoundaryViolations( definitions ) ).toEqual( [] );
	} );
} );
