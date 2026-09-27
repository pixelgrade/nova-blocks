/**
 * Header under AJAX page transitions (nova-blocks#661): the header script is
 * a frontend module. Its headers are destroyed with the outgoing page and
 * created for the incoming one, so window listeners, frame loops and the
 * elements it generates stay at their page-load counts, and refresh() re-reads
 * the neighbour colours in place.
 */

jest.mock( '@novablocks/core/frontend', () => ( {} ), { virtual: true } );

jest.mock( '@novablocks/utils', () => {
	const lifecycle = jest.requireActual( '../../../../../utils/src/frontend-lifecycle' );
	const { onScrollRAF } = jest.requireActual( '../../../../../utils/src/on-scroll-raf' );
	const split = ( classes ) => String( classes || '' ).split( /\s+/ ).filter( Boolean );

	return {
		...lifecycle,
		onScrollRAF,
		above: () => true,
		below: () => false,
		clamp: ( value, min, max ) => Math.min( Math.max( value, min ), max ),
		debounce: ( fn ) => fn,
		matches: ( element, selector ) => !! element && element.matches( selector ),
		addClass: ( element, classes ) => element && element.classList.add( ...split( classes ) ),
		removeClass: ( element, classes ) => element && element.classList.remove( ...split( classes ) ),
		hasClass: ( element, className ) => !! element && element.classList.contains( className ),
		toggleClass: ( element, className, force ) => element && element.classList.toggle( className, force ),
		getFirstChild: ( element ) => element.firstElementChild,
	};
} );

const PAGE = ( heroClasses ) => `
	<input class="c-menu-toggle__checkbox" id="nova-menu-toggle" type="checkbox">
	<button class="c-menu-toggle" type="button" data-menu-toggle-checkbox="nova-menu-toggle" aria-expanded="false"></button>
	<header class="nb-header nb-header--main sm-palette-1 sm-variation-1" data-layout="logo-center">
		<div class="nb-header__inner-container">
			<div class="nb-header-row nb-header-row--primary sm-palette-1 sm-variation-1 sm-color-signal-0" data-is-sticky="true" data-is-primary="true">
				<div class="c-branding"><a class="site-title" href="/">Site</a></div>
			</div>
		</div>
	</header>
	<main class="wp-block-group">
		<div class="wp-block-group alignfull ${ heroClasses }" data-palette-variation="11" data-color-signal="3"></div>
	</main>
`;

// NET window listeners by type, and pending animation frames (live loops).
const instrumentWindow = () => {
	const listeners = new Map();
	const frames = new Map();
	let nextFrame = 1;
	const add = window.addEventListener;
	const remove = window.removeEventListener;

	jest.spyOn( window, 'addEventListener' ).mockImplementation( function( type, fn, options ) {
		if ( ! ( options && options.once ) ) {
			listeners.set( type, new Set( [ ...( listeners.get( type ) || [] ), fn ] ) );
		}
		return add.call( this, type, fn, options );
	} );
	jest.spyOn( window, 'removeEventListener' ).mockImplementation( function( type, fn, options ) {
		listeners.get( type )?.delete( fn );
		return remove.call( this, type, fn, options );
	} );
	window.requestAnimationFrame = ( callback ) => {
		const id = nextFrame++;
		frames.set( id, callback );
		return id;
	};
	window.cancelAnimationFrame = ( id ) => frames.delete( id );

	return {
		count: ( type ) => ( listeners.get( type ) || new Set() ).size,
		loops: () => frames.size,
		// Run one frame: every pending callback, which re-queues its loop.
		frame: () => {
			const pending = Array.from( frames.entries() );
			frames.clear();
			pending.forEach( ( [ , callback ] ) => callback( 0 ) );
		},
	};
};

const counts = ( win ) => ( {
	scroll: win.count( 'scroll' ),
	resize: win.count( 'resize' ),
	loops: win.loops(),
	mainHeaders: document.querySelectorAll( '.nb-header--main' ).length,
	mobileHeaders: document.querySelectorAll( '.nb-header--mobile' ).length,
} );

describe( 'header frontend module lifecycle', () => {
	let win;

	beforeEach( () => {
		jest.resetModules();
		jest.restoreAllMocks();
		delete window.__novablocksFrontendLifecycle;
		delete window.novablocks;
		document.body.innerHTML = PAGE( 'sm-palette-1 sm-variation-11 sm-color-signal-3' );
		win = instrumentWindow();
	} );

	it( 'keeps listeners, frame loops and generated elements flat across ten navigations', () => {
		require( './../frontend' );
		const lifecycle = window.novablocks.frontendLifecycle;

		win.frame();
		const pageLoad = counts( win );

		expect( pageLoad.scroll ).toBeGreaterThan( 0 );
		expect( pageLoad.mobileHeaders ).toBe( 1 );

		for ( let i = 0; i < 10; i++ ) {
			lifecycle.cleanup( document.body );
			document.body.innerHTML = PAGE( i % 2 ? 'sm-palette-1 sm-variation-11 sm-color-signal-3' : 'sm-palette-1 sm-variation-1' );
			lifecycle.reinit( document.body );
			win.frame();
		}

		expect( counts( win ) ).toEqual( pageLoad );
	} );

	it( 'removes every listener, loop and generated element on cleanup', () => {
		require( './../frontend' );

		window.novablocks.frontendLifecycle.cleanup( document.body );

		expect( counts( win ) ).toEqual( {
			scroll: 0,
			resize: 0,
			loops: 0,
			mainHeaders: 1,
			mobileHeaders: 0,
		} );
	} );

	it( 'takes the transparent colours from the incoming page on reinit', () => {
		require( './../frontend' );
		const lifecycle = window.novablocks.frontendLifecycle;
		const row = () => document.querySelector( '.nb-header--main .nb-header-row' );

		expect( row().classList.contains( 'sm-variation-11' ) ).toBe( true );

		lifecycle.cleanup( document.body );
		document.body.innerHTML = PAGE( 'sm-palette-1 sm-variation-1' );
		lifecycle.reinit( document.body );

		expect( row().classList.contains( 'sm-variation-11' ) ).toBe( false );
		expect( row().classList.contains( 'sm-variation-1' ) ).toBe( true );
	} );

	it( 'refresh() re-reads the neighbour colours without rebuilding the header', () => {
		require( './../frontend' );
		const row = () => document.querySelector( '.nb-header--main .nb-header-row' );
		const hero = document.querySelector( 'main > .wp-block-group' );

		hero.className = 'wp-block-group alignfull sm-palette-1 sm-variation-1';
		window.novablocks.header.refresh( document.body );

		expect( row().classList.contains( 'sm-variation-11' ) ).toBe( false );
		expect( row().classList.contains( 'sm-variation-1' ) ).toBe( true );
		expect( document.querySelectorAll( '.nb-header--mobile' ) ).toHaveLength( 1 );
	} );

	it( 're-executing the script replaces the running headers instead of adding more', () => {
		require( './../frontend' );
		win.frame();
		const pageLoad = counts( win );

		jest.isolateModules( () => {
			require( './../frontend' );
		} );
		win.frame();

		expect( counts( win ) ).toEqual( pageLoad );
	} );
} );
