import { getOverlayFilterCSSProps } from './index';

describe( 'getOverlayFilterCSSProps', () => {
	it( 'uses zero effective strength for duotone overlays', () => {
		expect( getOverlayFilterCSSProps( {
			overlayFilterType: 'duotone',
			overlayFilterStrength: 90,
		} ) ).toEqual( {
			'--nb-overlay-filter-strength': 0,
		} );
	} );

	it( 'keeps the stored strength for unitone overlays', () => {
		expect( getOverlayFilterCSSProps( {
			overlayFilterType: 'unitone',
			overlayFilterStrength: 90,
		} ) ).toEqual( {
			'--nb-overlay-filter-strength': 0.9,
		} );
	} );
} );
