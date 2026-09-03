/**
 * Pins the RangeControl bounds of the four Block Spacing sliders.
 *
 * The two INNER sliders (Content Top / Content Bottom -> emphasisTopSpacing /
 * emphasisBottomSpacing) run 0..6 in HALF steps: one step is ~32px at 1440px
 * and spacing level 1, so the old 0..3 ceiling capped a band inset at 96px and
 * collapsed every 128-200px band a real page asks for onto that one value.
 *
 * The two OUTER sliders (Block Top / Block Bottom) deliberately do NOT move:
 * they are the rhythm between blocks, still -3..3 on whole steps.
 *
 * These literals are also transcribed into the PHP curated vocabulary
 * (lib/cli/blocks-describe-vocabulary.php), which is what `wp pixelgrade blocks
 * describe` hands a headless author. Nothing pins one to the other at runtime,
 * so this test and its PHP twin are the drift alarm.
 */
import { renderToStaticMarkup } from 'react-dom/server';

jest.mock( '@wordpress/i18n', () => ( {
	__: ( text ) => text,
} ) );

const mockRangeControl = jest.fn( () => null );
jest.mock( '@wordpress/components', () => ( {
	RangeControl: ( props ) => mockRangeControl( props ),
} ) );

jest.mock( '@wordpress/data', () => ( {
	useSelect: () => ( { getClientIdsWithDescendants: () => [] } ),
} ) );

// The controls scaffolding is not under test: render every group and every
// control unconditionally so the four sliders are always reached.
jest.mock( '../../../components', () => ( {
	ControlsGroup: ( { children } ) => children,
	withVisibility: () => ( Component ) => Component,
} ) );

const mockUseSupports = jest.fn();
jest.mock( '../../../hooks', () => ( {
	useSupports: ( name ) => mockUseSupports( name ),
	useBlockTopSpacingIsDisabled: () => false,
} ) );

const BlockSpacing = require( './card-spacing-settings' ).default;
const {
	BLOCK_SPACING_MIN,
	BLOCK_SPACING_MAX,
	BLOCK_SPACING_STEP,
	CONTENT_SPACING_MIN,
	CONTENT_SPACING_MIN_ADVANCED,
	CONTENT_SPACING_MAX,
	CONTENT_SPACING_STEP,
} = require( './card-spacing-settings' );

const ATTRIBUTES = {
	blockTopSpacing: 1,
	blockBottomSpacing: 0,
	emphasisTopSpacing: 0,
	emphasisBottomSpacing: 0,
};

const renderSliders = ( supports ) => {
	mockRangeControl.mockClear();
	mockUseSupports.mockReturnValue( supports );

	renderToStaticMarkup(
		<BlockSpacing
			name={ 'core/group' }
			clientId={ 'abc' }
			attributes={ ATTRIBUTES }
			setAttributes={ () => {} }
		/>
	);

	const byLabel = {};
	mockRangeControl.mock.calls.forEach( ( [ props ] ) => {
		byLabel[ props.label ] = props;
	} );
	return byLabel;
};

describe( 'Block Spacing slider bounds', () => {

	test( 'the two Content (emphasis) sliders run 0..6 in half steps', () => {
		const sliders = renderSliders( { novaBlocks: { spaceAndSizing: true } } );

		[ 'Content Top Spacing', 'Content Bottom Spacing' ].forEach( ( label ) => {
			expect( sliders[ label ] ).toBeDefined();
			expect( sliders[ label ].min ).toBe( 0 );
			expect( sliders[ label ].max ).toBe( 6 );
			expect( sliders[ label ].step ).toBe( 0.5 );
		} );
	} );

	test( '5.5 is a reachable position on the Content sliders', () => {
		const sliders = renderSliders( { novaBlocks: { spaceAndSizing: true } } );
		const { min, max, step } = sliders[ 'Content Top Spacing' ];

		// A RangeControl only lands on min + N*step, so 5.5 has to divide cleanly
		// or the slider silently rounds a 176px band back to 160 or 192.
		const offset = ( 5.5 - min ) / step;

		expect( 5.5 ).toBeLessThanOrEqual( max );
		expect( Number.isInteger( offset ) ).toBe( true );
	} );

	test( 'the two Block sliders are unchanged: -3..3 on whole steps', () => {
		const sliders = renderSliders( { novaBlocks: { spaceAndSizing: true } } );

		[ 'Block Top Spacing', 'Block Bottom Spacing' ].forEach( ( label ) => {
			expect( sliders[ label ] ).toBeDefined();
			expect( sliders[ label ].min ).toBe( -3 );
			expect( sliders[ label ].max ).toBe( 3 );
			expect( sliders[ label ].step ).toBe( 1 );
		} );
	} );

	test( 'advancedSpacing only lowers the Content floor; the ceiling and the step are the same', () => {
		const sliders = renderSliders( {
			novaBlocks: { spaceAndSizing: { attributes: true, controls: true, advancedSpacing: true } },
		} );

		expect( sliders[ 'Content Top Spacing' ].min ).toBe( -3 );
		expect( sliders[ 'Content Top Spacing' ].max ).toBe( 6 );
		expect( sliders[ 'Content Top Spacing' ].step ).toBe( 0.5 );
		expect( sliders[ 'Content Bottom Spacing' ].min ).toBe( -3 );
	} );

	test( 'the exported constants are the values the sliders actually receive', () => {
		const sliders = renderSliders( { novaBlocks: { spaceAndSizing: true } } );

		expect( [ BLOCK_SPACING_MIN, BLOCK_SPACING_MAX, BLOCK_SPACING_STEP ] ).toEqual( [ -3, 3, 1 ] );
		expect( [ CONTENT_SPACING_MIN, CONTENT_SPACING_MIN_ADVANCED ] ).toEqual( [ 0, -3 ] );
		expect( [ CONTENT_SPACING_MAX, CONTENT_SPACING_STEP ] ).toEqual( [ 6, 0.5 ] );
		expect( sliders[ 'Content Top Spacing' ].max ).toBe( CONTENT_SPACING_MAX );
		expect( sliders[ 'Block Top Spacing' ].max ).toBe( BLOCK_SPACING_MAX );
	} );
} );
