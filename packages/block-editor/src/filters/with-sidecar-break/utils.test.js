const {
	SIDECAR_BREAK_BLOCKS,
	SIDECAR_WRAP_BLOCKS,
	isSidecarBreakEligible,
	isSidecarWrapEligible,
	isDirectSidecarContentChild,
	getSidecarBreakClass,
	replaceSidecarBreakClass,
	getSidecarWrapClass,
	replaceSidecarWrapClass,
} = require( './utils' );

describe( 'sidecar break eligibility (control gating)', () => {
	it( 'is eligible only for target blocks with a breakable alignment', () => {
		expect( isSidecarBreakEligible( 'core/image', { align: 'wide' } ) ).toBe( true );
		expect( isSidecarBreakEligible( 'core/image', { align: 'left' } ) ).toBe( true );
		expect( isSidecarBreakEligible( 'core/group', { align: 'right' } ) ).toBe( true );
		expect( isSidecarBreakEligible( 'core/quote', { align: 'left' } ) ).toBe( true );
		expect( isSidecarBreakEligible( 'core/pullquote', { align: 'right' } ) ).toBe( true );
		expect( isSidecarBreakEligible( 'core/heading', { align: 'wide' } ) ).toBe( true );
		expect( isSidecarBreakEligible( 'core/paragraph', { align: 'full' } ) ).toBe( true );

		// heading/paragraph break as wide/full only.
		expect( isSidecarBreakEligible( 'core/heading', { align: 'left' } ) ).toBe( false );
		expect( isSidecarBreakEligible( 'core/paragraph', { align: 'right' } ) ).toBe( false );

		expect( isSidecarBreakEligible( 'core/image', {} ) ).toBe( false );
		expect( isSidecarBreakEligible( 'core/image', { align: 'center' } ) ).toBe( false );
		expect( isSidecarBreakEligible( 'core/list', { align: 'wide' } ) ).toBe( false );
		expect( isSidecarBreakEligible( 'novablocks/supernova', { align: 'full' } ) ).toBe( false );
		expect( SIDECAR_BREAK_BLOCKS ).toContain( 'core/quote' );
	} );

	it( 'gates on the DIRECT parent being a sidecar content area', () => {
		expect( isDirectSidecarContentChild( { name: 'novablocks/sidecar-area', attributes: { areaName: 'content' } } ) ).toBe( true );
		expect( isDirectSidecarContentChild( { name: 'novablocks/sidecar-area', attributes: { areaName: 'sidebar' } } ) ).toBe( false );
		expect( isDirectSidecarContentChild( { name: 'core/group', attributes: {} } ) ).toBe( false );
		expect( isDirectSidecarContentChild( undefined ) ).toBe( false );
	} );
} );

describe( 'sidecar break class derivation', () => {
	it( 'derives no class for auto and unknown values', () => {
		expect( getSidecarBreakClass( undefined ) ).toBe( null );
		expect( getSidecarBreakClass( 'auto' ) ).toBe( null );
		expect( getSidecarBreakClass( 'later' ) ).toBe( null );
	} );

	it( 'derives the serialized classes for always/never', () => {
		expect( getSidecarBreakClass( 'always' ) ).toBe( 'nb-break-always' );
		expect( getSidecarBreakClass( 'never' ) ).toBe( 'nb-break-never' );
	} );
} );

describe( 'className attribute sync (serialization route)', () => {
	it( 'leaves a missing className missing for auto — byte-identity for default-valued blocks', () => {
		expect( replaceSidecarBreakClass( undefined, 'auto' ) ).toBe( undefined );
		expect( replaceSidecarBreakClass( '', 'auto' ) ).toBe( undefined );
	} );

	it( 'preserves foreign classes untouched', () => {
		expect( replaceSidecarBreakClass( 'is-style-rounded my-class', 'auto' ) ).toBe( 'is-style-rounded my-class' );
		expect( replaceSidecarBreakClass( 'is-style-rounded', 'always' ) ).toBe( 'is-style-rounded nb-break-always' );
	} );

	it( 'adds, swaps and removes the marker class', () => {
		expect( replaceSidecarBreakClass( undefined, 'always' ) ).toBe( 'nb-break-always' );
		expect( replaceSidecarBreakClass( 'nb-break-always', 'never' ) ).toBe( 'nb-break-never' );
		expect( replaceSidecarBreakClass( 'nb-break-never', 'auto' ) ).toBe( undefined );
		expect( replaceSidecarBreakClass( 'foo nb-break-always bar', 'auto' ) ).toBe( 'foo bar' );
	} );

	it( 'round-trips cleanly (always -> never -> auto restores the original)', () => {
		const original = 'is-style-rounded';
		const withAlways = replaceSidecarBreakClass( original, 'always' );
		const withNever = replaceSidecarBreakClass( withAlways, 'never' );
		expect( replaceSidecarBreakClass( withNever, 'auto' ) ).toBe( original );
	} );
} );

describe( 'sidecar wrap eligibility (text-wrap control gating)', () => {
	it( 'is eligible only for side-floatable blocks aligned left or right', () => {
		expect( isSidecarWrapEligible( 'core/image', { align: 'left' } ) ).toBe( true );
		expect( isSidecarWrapEligible( 'core/image', { align: 'right' } ) ).toBe( true );
		expect( isSidecarWrapEligible( 'core/group', { align: 'right' } ) ).toBe( true );
		expect( isSidecarWrapEligible( 'core/quote', { align: 'left' } ) ).toBe( true );
		expect( isSidecarWrapEligible( 'core/pullquote', { align: 'right' } ) ).toBe( true );

		// Wrap has no meaning on wide/full/center — the placement IS a float.
		expect( isSidecarWrapEligible( 'core/image', { align: 'wide' } ) ).toBe( false );
		expect( isSidecarWrapEligible( 'core/image', { align: 'full' } ) ).toBe( false );
		expect( isSidecarWrapEligible( 'core/image', { align: 'center' } ) ).toBe( false );
		expect( isSidecarWrapEligible( 'core/image', {} ) ).toBe( false );

		// heading/paragraph break wide/full only — never wrap.
		expect( isSidecarWrapEligible( 'core/heading', { align: 'left' } ) ).toBe( false );
		expect( isSidecarWrapEligible( 'core/paragraph', { align: 'right' } ) ).toBe( false );

		expect( SIDECAR_WRAP_BLOCKS ).toContain( 'core/image' );
		expect( SIDECAR_WRAP_BLOCKS ).not.toContain( 'core/heading' );
	} );
} );

describe( 'sidecar wrap class derivation', () => {
	it( 'derives no class for none and unknown values', () => {
		expect( getSidecarWrapClass( undefined ) ).toBe( null );
		expect( getSidecarWrapClass( 'none' ) ).toBe( null );
		expect( getSidecarWrapClass( 'beside' ) ).toBe( null );
	} );

	it( 'derives the serialized classes for around/extend', () => {
		expect( getSidecarWrapClass( 'around' ) ).toBe( 'nb-wrap-around' );
		expect( getSidecarWrapClass( 'extend' ) ).toBe( 'nb-wrap-extend' );
	} );
} );

describe( 'sidecar wrap className attribute sync', () => {
	it( 'leaves a missing className missing for none — byte-identity for default-valued blocks', () => {
		expect( replaceSidecarWrapClass( undefined, 'none' ) ).toBe( undefined );
		expect( replaceSidecarWrapClass( '', 'none' ) ).toBe( undefined );
	} );

	it( 'preserves foreign classes (and a co-existing break marker) untouched', () => {
		expect( replaceSidecarWrapClass( 'is-style-rounded alignright', 'none' ) ).toBe( 'is-style-rounded alignright' );
		expect( replaceSidecarWrapClass( 'alignright nb-break-never', 'around' ) ).toBe( 'alignright nb-break-never nb-wrap-around' );
	} );

	it( 'adds, swaps and removes the marker class', () => {
		expect( replaceSidecarWrapClass( undefined, 'around' ) ).toBe( 'nb-wrap-around' );
		expect( replaceSidecarWrapClass( 'nb-wrap-around', 'extend' ) ).toBe( 'nb-wrap-extend' );
		expect( replaceSidecarWrapClass( 'nb-wrap-extend', 'none' ) ).toBe( undefined );
		expect( replaceSidecarWrapClass( 'foo nb-wrap-around bar', 'none' ) ).toBe( 'foo bar' );
	} );

	it( 'round-trips cleanly (around -> extend -> none restores the original)', () => {
		const original = 'alignright is-style-rounded';
		const withAround = replaceSidecarWrapClass( original, 'around' );
		const withExtend = replaceSidecarWrapClass( withAround, 'extend' );
		expect( replaceSidecarWrapClass( withExtend, 'none' ) ).toBe( original );
	} );
} );
