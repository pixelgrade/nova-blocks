/**
 * Shared settle subscription (post-3.5 guard): fonts.ready + image-settle
 * events notify every subscriber — the same triggers handle-aligned-blocks
 * uses, now shared so the sticky-overlap band geometry re-measures too.
 */

describe( 'settle subscription', () => {
	let resolveFonts;

	beforeEach( () => {
		jest.resetModules();
		document.body.innerHTML = '';
		Object.defineProperty( document, 'fonts', {
			configurable: true,
			value: { ready: new Promise( ( resolve ) => { resolveFonts = resolve; } ) },
		} );
	} );

	it( 'notifies every subscriber once webfonts settle', async () => {
		const { subscribeToSettleEvents } = require( './settle-subscription' );

		const a = jest.fn();
		const b = jest.fn();
		subscribeToSettleEvents( a );
		subscribeToSettleEvents( b );

		expect( a ).not.toHaveBeenCalled();

		resolveFonts();
		await Promise.resolve();
		await Promise.resolve();

		expect( a ).toHaveBeenCalledTimes( 1 );
		expect( b ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'notifies when a pending image settles, and unsubscribe stops notifications', async () => {
		const img = document.createElement( 'img' );
		// jsdom images are never "complete" — they count as pending.
		document.body.appendChild( img );

		const { subscribeToSettleEvents } = require( './settle-subscription' );

		const a = jest.fn();
		const unsubscribe = subscribeToSettleEvents( a );

		img.dispatchEvent( new Event( 'load' ) );
		expect( a ).toHaveBeenCalledTimes( 1 );

		unsubscribe();
		resolveFonts();
		await Promise.resolve();
		await Promise.resolve();
		expect( a ).toHaveBeenCalledTimes( 1 );
	} );
} );
