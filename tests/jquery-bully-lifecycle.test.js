/**
 * jQuery Bully under AJAX page transitions (nova-blocks#661): destroy() ends
 * the page state (dots, frame loop, window listeners), the next `.bully()`
 * call starts a fresh instance, and re-executing the script replaces the
 * running copy instead of adding a second frame loop.
 */

const path = require( 'path' );

const BULLY_PATH = path.join( __dirname, '../src/vendor/jquery.bully.js' );

describe( 'jQuery Bully lifecycle', () => {
	let $;
	let frames;
	let nextFrame;

	const windowHandlers = () => {
		const events = $._data( window, 'events' ) || {};
		return Object.keys( events ).reduce( ( total, type ) => total + events[ type ].length, 0 );
	};

	const loadBully = () => {
		jest.isolateModules( () => {
			require( BULLY_PATH );
		} );
	};

	const renderBlocks = () => {
		document.body.innerHTML = `
			<section data-position-indicators="true"></section>
			<section data-position-indicators="true"></section>
			<section data-position-indicators="true"></section>
		`;
	};

	beforeEach( () => {
		jest.resetModules();
		$ = require( 'jquery' );
		window.jQuery = $;
		global.jQuery = $;
		frames = new Map();
		nextFrame = 1;
		window.requestAnimationFrame = ( callback ) => {
			const id = nextFrame++;
			frames.set( id, callback );
			return id;
		};
		window.cancelAnimationFrame = ( id ) => frames.delete( id );
		renderBlocks();
	} );

	afterEach( () => {
		$( window ).off();
		document.body.innerHTML = '';
	} );

	it( 'destroy() removes the dots, the frame loop and the window listeners', () => {
		loadBully();
		$( '[data-position-indicators]' ).bully();

		expect( frames.size ).toBe( 1 );
		expect( windowHandlers() ).toBeGreaterThan( 0 );
		expect( document.querySelectorAll( '.c-bully .c-bully__bullet' ) ).toHaveLength( 4 );

		$.fn.bully.destroy();

		expect( frames.size ).toBe( 0 );
		expect( windowHandlers() ).toBe( 0 );
		expect( document.querySelectorAll( '.c-bully' ) ).toHaveLength( 0 );
	} );

	it( 'starts a fresh instance for the next page and keeps counts flat across ten navigations', () => {
		loadBully();
		$( '[data-position-indicators]' ).bully();
		const pageLoad = { frames: frames.size, handlers: windowHandlers() };

		for ( let i = 0; i < 10; i++ ) {
			$.fn.bully.destroy();
			renderBlocks();
			$( '[data-position-indicators]' ).bully();
		}

		expect( { frames: frames.size, handlers: windowHandlers() } ).toEqual( pageLoad );
		expect( document.querySelectorAll( '.c-bully' ) ).toHaveLength( 1 );
		expect( document.querySelectorAll( '.c-bully .c-bully__bullet' ) ).toHaveLength( 4 );
	} );

	it( 'pops the bullets of a page reached after window load', () => {
		jest.useFakeTimers();
		loadBully();
		$.fn.bully.destroy();
		renderBlocks();
		$( '[data-position-indicators]' ).bully();

		jest.advanceTimersByTime( 1000 );

		expect( document.querySelectorAll( '.c-bully__bullet--pop' ) ).toHaveLength( 3 );
		jest.useRealTimers();
	} );

	it( 're-executing the script replaces the running copy', () => {
		loadBully();
		$( '[data-position-indicators]' ).bully();
		const pageLoad = { frames: frames.size, handlers: windowHandlers() };

		renderBlocks();
		loadBully();
		$( '[data-position-indicators]' ).bully();

		expect( { frames: frames.size, handlers: windowHandlers() } ).toEqual( pageLoad );
		expect( document.querySelectorAll( '.c-bully' ) ).toHaveLength( 1 );
	} );
} );
