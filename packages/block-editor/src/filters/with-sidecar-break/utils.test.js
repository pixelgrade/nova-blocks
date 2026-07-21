const {
	SIDECAR_BREAK_BLOCKS,
	isSidecarBreakEligible,
	isInsideSidecarContent,
	getSidecarBreakClass,
} = require( './utils' );

describe( 'sidecar break eligibility (control gating)', () => {
	it( 'targets exactly the aligned-capable core blocks Nova augments', () => {
		expect( SIDECAR_BREAK_BLOCKS ).toEqual( [ 'core/image', 'core/group' ] );
	} );

	it( 'is eligible only for target blocks with a breakable alignment', () => {
		expect( isSidecarBreakEligible( 'core/image', { align: 'wide' } ) ).toBe( true );
		expect( isSidecarBreakEligible( 'core/image', { align: 'full' } ) ).toBe( true );
		expect( isSidecarBreakEligible( 'core/group', { align: 'left' } ) ).toBe( true );
		expect( isSidecarBreakEligible( 'core/group', { align: 'right' } ) ).toBe( true );

		expect( isSidecarBreakEligible( 'core/image', {} ) ).toBe( false );
		expect( isSidecarBreakEligible( 'core/image', { align: 'center' } ) ).toBe( false );
		expect( isSidecarBreakEligible( 'core/paragraph', { align: 'wide' } ) ).toBe( false );
		expect( isSidecarBreakEligible( 'novablocks/supernova', { align: 'full' } ) ).toBe( false );
	} );

	it( 'detects a sidecar CONTENT area ancestor, not rails or no sidecar at all', () => {
		const contentChain = [
			{ name: 'novablocks/sidecar', attributes: { sidebarPosition: 'right' } },
			{ name: 'novablocks/sidecar-area', attributes: { areaName: 'content' } },
		];
		const railChain = [
			{ name: 'novablocks/sidecar', attributes: { sidebarPosition: 'right' } },
			{ name: 'novablocks/sidecar-area', attributes: { areaName: 'sidebar' } },
		];
		const noSidecarChain = [
			{ name: 'core/group', attributes: {} },
		];

		expect( isInsideSidecarContent( contentChain ) ).toBe( true );
		expect( isInsideSidecarContent( railChain ) ).toBe( false );
		expect( isInsideSidecarContent( noSidecarChain ) ).toBe( false );
		expect( isInsideSidecarContent( [] ) ).toBe( false );
	} );
} );

describe( 'sidecar break class derivation', () => {
	it( 'derives no class for auto and unknown values', () => {
		expect( getSidecarBreakClass( 'core/image', { align: 'wide' } ) ).toBe( null );
		expect( getSidecarBreakClass( 'core/image', { align: 'wide', sidecarBreak: 'auto' } ) ).toBe( null );
		expect( getSidecarBreakClass( 'core/image', { align: 'wide', sidecarBreak: 'later' } ) ).toBe( null );
	} );

	it( 'derives the serialized classes for always/never', () => {
		expect( getSidecarBreakClass( 'core/image', { align: 'wide', sidecarBreak: 'always' } ) ).toBe( 'nb-break-always' );
		expect( getSidecarBreakClass( 'core/group', { align: 'right', sidecarBreak: 'never' } ) ).toBe( 'nb-break-never' );
	} );
} );
