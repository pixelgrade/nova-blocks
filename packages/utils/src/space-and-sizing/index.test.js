import { getSpacingCSSProps } from './index';

jest.mock( '../index', () => ( {
	getCardMediaPaddingTop: () => '100%',
} ) );

const attributes = {
	blockTopSpacing: 0,
	blockBottomSpacing: 0,
	emphasisTopSpacing: 0,
	emphasisBottomSpacing: 0,
	verticalAlignment: 'center',
	contentAreaWidth: 50,
	contentPadding: 0,
	mediaContainerHeight: 50,
	imagePadding: 0,
	imageResizing: 'cropped',
	layoutGutter: 0,
	minHeightFallback: 0,
	thumbnailAspectRatio: 1,
	thumbnailAspectRatioString: 'original',
	spacingModifier: 1,
	spacingMultiplierOverride: 1,
};

describe( 'getSpacingCSSProps', () => {
	it( 'serializes numeric media heights as unitless custom-property strings', () => {
		expect( getSpacingCSSProps( attributes )['--nb-card-media-container-height'] ).toBe( '50' );
	} );

	// The band inset runs 0..6 in half steps (card-spacing-settings.js
	// CONTENT_SPACING_MAX / CONTENT_SPACING_STEP). A fraction has to survive the
	// number->string conversion EXACTLY as `5.5`: the PHP render path
	// (novablocks_format_core_container_spacing_number) writes `5.5` too, and a
	// `5.50` on either side would make the same authored page carry two different
	// byte strings depending on whether it passed through an editor save.
	it( 'serializes a half-step band inset as 5.5, with no trailing zero', () => {
		const props = getSpacingCSSProps( {
			...attributes,
			emphasisTopSpacing: 5.5,
			emphasisBottomSpacing: 4.5,
		} );

		expect( props['--nb-emphasis-top-spacing'] ).toBe( '5.5' );
		expect( props['--nb-emphasis-bottom-spacing'] ).toBe( '4.5' );
	} );

	it( 'serializes the new ceiling as a bare integer', () => {
		const props = getSpacingCSSProps( { ...attributes, emphasisTopSpacing: 6 } );

		expect( props['--nb-emphasis-top-spacing'] ).toBe( '6' );
	} );

	// verticalAlignment 'top' mirrors a negative inset onto the positive side
	// (advancedSpacing blocks only); the fraction must survive Math.abs too.
	it( 'keeps the fraction when a top-anchored block mirrors a negative inset', () => {
		const props = getSpacingCSSProps( {
			...attributes,
			verticalAlignment: 'top',
			emphasisTopSpacing: -2.5,
		} );

		expect( props['--nb-emphasis-top-spacing'] ).toBe( '2.5' );
	} );
} );
