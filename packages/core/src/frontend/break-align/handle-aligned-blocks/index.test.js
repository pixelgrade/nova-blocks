/**
 * Frontend break-align runtime (Task 3.4): initial pre-paint run at
 * domReady, correcting re-run once webfonts settle, image-settle re-runs.
 */

jest.mock( '@wordpress/dom-ready', () => ( cb ) => cb() );

const mockRunBreakAlignment = jest.fn();
const mockCleanupBreakClasses = jest.fn();

const mockUnsubscribe = jest.fn();

jest.mock( '../dom-change-subscription', () => ( {
	subscribeToDomChanges: jest.fn( () => mockUnsubscribe ),
} ) );

jest.mock( '@novablocks/utils', () => ( {
	// The debounce collapses timing in production; tests want direct calls.
	debounce: ( fn ) => fn,
	cleanupBreakClasses: ( ...args ) => mockCleanupBreakClasses( ...args ),
	runBreakAlignment: ( ...args ) => mockRunBreakAlignment( ...args ),
} ) );

describe( 'frontend aligned-blocks runtime', () => {
	let resolveFonts;

	beforeEach( () => {
		jest.resetModules();
		mockRunBreakAlignment.mockClear();
		mockCleanupBreakClasses.mockClear();
		Object.defineProperty( document, 'fonts', {
			configurable: true,
			value: { ready: new Promise( ( resolve ) => { resolveFonts = resolve; } ) },
		} );
	} );

	it( 'measures immediately at domReady and re-measures once fonts settle', async () => {
		const { handleAlignedBlocks } = require( './index' );

		handleAlignedBlocks();

		// Initial pre-paint run happened without waiting for fonts.
		expect( mockRunBreakAlignment ).toHaveBeenCalledTimes( 1 );
		expect( mockRunBreakAlignment ).toHaveBeenCalledWith( { skipCssCoveredRails: true } );

		// The correcting re-run fires only after document.fonts.ready.
		resolveFonts();
		await Promise.resolve();
		await Promise.resolve();

		expect( mockRunBreakAlignment ).toHaveBeenCalledTimes( 2 );
		expect( mockCleanupBreakClasses ).toHaveBeenCalledTimes( 2 );
	} );

	it( 'returns a teardown that unsubscribes, unbinds resize and silences late re-runs (#661)', async () => {
		const addSpy = jest.spyOn( window, 'addEventListener' );
		const removeSpy = jest.spyOn( window, 'removeEventListener' );
		const { handleAlignedBlocks } = require( './index' );

		const teardown = handleAlignedBlocks();
		const onResize = addSpy.mock.calls.find( ( [ type ] ) => type === 'resize' )[ 1 ];

		teardown();

		expect( removeSpy ).toHaveBeenCalledWith( 'resize', onResize );
		expect( mockUnsubscribe ).toHaveBeenCalled();

		// Fonts settling after the page left must not measure it again.
		resolveFonts();
		await Promise.resolve();
		await Promise.resolve();
		expect( mockRunBreakAlignment ).toHaveBeenCalledTimes( 1 );

		addSpy.mockRestore();
		removeSpy.mockRestore();
	} );
} );
