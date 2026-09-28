import { observeFitText } from './fit-text';

// The masthead copy is fitted as soon as it is created, which is usually
// before the web font arrives: a fit measured on the fallback face leaves the
// title ~10% short once the real (narrower) face swaps in, and neither the
// container nor the title resizes to trigger a refit (#680 verification).
describe( 'observeFitText', () => {
	it( 'refits once web fonts finish loading', () => {
		document.body.innerHTML = '<div><p class="wp-block-site-title">Harrowmere</p></div>';
		const title = document.querySelector( 'p' );
		const listeners = {};
		const originalFonts = document.fonts;

		Object.defineProperty( document, 'fonts', {
			configurable: true,
			value: {
				ready: new Promise( () => {} ),
				addEventListener: ( type, callback ) => {
					listeners[ type ] = callback;
				},
				removeEventListener: jest.fn( ( type ) => {
					delete listeners[ type ];
				} ),
			},
		} );

		const removeProperty = jest.spyOn( title.style, 'removeProperty' );

		try {
			const cleanup = observeFitText( title );
			const fitsBeforeFonts = removeProperty.mock.calls.length;

			expect( typeof listeners.loadingdone ).toBe( 'function' );

			listeners.loadingdone();
			expect( removeProperty.mock.calls.length ).toBeGreaterThan( fitsBeforeFonts );

			cleanup();
			expect( document.fonts.removeEventListener ).toHaveBeenCalledWith( 'loadingdone', expect.any( Function ) );
		} finally {
			Object.defineProperty( document, 'fonts', { configurable: true, value: originalFonts } );
		}
	} );
} );
