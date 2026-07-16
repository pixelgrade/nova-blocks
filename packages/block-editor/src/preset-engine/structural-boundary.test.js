/**
 * Unit contract for the structural-boundary invariant, pinned against the
 * two real-world shapes that motivated it:
 *
 * - the Motion & Effects bug (one recipe declared `cardLayout`, so the
 *   family union made every OTHER recipe clear it — a violation per
 *   non-declaring definition);
 * - the Card Styles family (every tile declares `cardLayout` — no
 *   violations, structure is always written deliberately).
 */
import {
	getStructuralBoundaryViolations,
	STRUCTURAL_ATTRIBUTES,
} from './structural-attributes';

const family = ( definitions, managedAttributes ) =>
	definitions.map( ( definition ) => ( { ...definition, managedAttributes } ) );

describe( 'getStructuralBoundaryViolations', () => {
	test( 'the Motion-bug shape: one declarer poisons every other definition', () => {
		const definitions = family( [
			{ id: 'still', values: { scrollingEffect: 'static' } },
			{ id: 'stacked-drift', values: { scrollingEffect: 'static', cardLayout: 'stacked' } },
			{ id: 'soft-parallax', values: { scrollingEffect: 'parallax' } },
		], [ 'scrollingEffect', 'cardLayout' ] );

		expect( getStructuralBoundaryViolations( definitions ) ).toEqual( [
			{ id: 'still', attribute: 'cardLayout' },
			{ id: 'soft-parallax', attribute: 'cardLayout' },
		] );
	} );

	test( 'the Card-Styles shape: every definition declares structure — no violations', () => {
		const definitions = family( [
			{ id: 'editorial', values: { cardLayout: 'horizontal', paletteVariation: 1 } },
			{ id: 'immersive', values: { cardLayout: 'stacked', paletteVariation: 10 } },
		], [ 'cardLayout', 'paletteVariation' ] );

		expect( getStructuralBoundaryViolations( definitions ) ).toEqual( [] );
	} );

	test( 'families that leave structure alone are untouched by the invariant', () => {
		const definitions = family( [
			{ id: 'a', values: { blockTopSpacing: 1 } },
			{ id: 'b', values: {} },
		], [ 'blockTopSpacing' ] );

		expect( getStructuralBoundaryViolations( definitions ) ).toEqual( [] );
	} );

	test( 'an explicit undefined is a clear, not a declaration', () => {
		const definitions = family( [
			{ id: 'a', values: { cardLayout: undefined } },
		], [ 'cardLayout' ] );

		expect( getStructuralBoundaryViolations( definitions ) ).toEqual( [
			{ id: 'a', attribute: 'cardLayout' },
		] );
	} );

	test( 'the registry names block anatomy, not style', () => {
		expect( STRUCTURAL_ATTRIBUTES ).toEqual( [
			'cardLayout', 'layoutStyle', 'columns', 'contentType',
		] );
	} );
} );
