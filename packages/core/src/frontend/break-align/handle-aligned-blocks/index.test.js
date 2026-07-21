/**
 * Frontend break-align runtime (Task 3.4): initial pre-paint run at
 * domReady, correcting re-run once webfonts settle, image-settle re-runs.
 */

jest.mock( '@wordpress/dom-ready', () => ( cb ) => cb() );

const mockRunBreakAlignment = jest.fn();
const mockCleanupBreakClasses = jest.fn();

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
} );
