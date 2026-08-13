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
} );
