/**
 * Frontend lifecycle (nova-blocks#661): every frontend module can be torn
 * down and set up again for a new page, so AJAX page transitions never
 * re-execute the scripts and never leak listeners, observers or frame loops.
 */

import {
	createFrontendLifecycle,
	PAGE_TRANSITIONS_ENTRY_ID,
} from './frontend-lifecycle';

import { onScrollRAF } from './on-scroll-raf';

// Counts NET window listeners per type (add minus matching remove).
const trackWindowListeners = () => {
	const live = new Map();
	const key = ( type, fn, options ) => {
		const capture = typeof options === 'boolean' ? options : !! ( options && options.capture );
		return { type, fn, capture };
	};
	const addSpy = jest.spyOn( window, 'addEventListener' ).mockImplementation( ( type, fn, options ) => {
		const k = key( type, fn, options );
		live.set( fn, [ ...( live.get( fn ) || [] ), k ] );
	} );
	const removeSpy = jest.spyOn( window, 'removeEventListener' ).mockImplementation( ( type, fn, options ) => {
		const k = key( type, fn, options );
		const entries = ( live.get( fn ) || [] ).filter( e => ! ( e.type === k.type && e.capture === k.capture ) );
		live.set( fn, entries );
	} );

	return {
		count: type => Array.from( live.values() ).flat().filter( e => e.type === type ).length,
		restore: () => {
			addSpy.mockRestore();
			removeSpy.mockRestore();
		},
	};
};

describe( 'frontend lifecycle', () => {
	let listeners;
	let lifecycle;

	beforeEach( () => {
		listeners = trackWindowListeners();
		lifecycle = createFrontendLifecycle( { win: window, doc: document } );
	} );

	afterEach( () => {
		listeners.restore();
		delete window.anima;
	} );

	it( 'runs a module setup immediately when it registers', () => {
		const setup = jest.fn();

		lifecycle.register( 'test/module', setup );

		expect( setup ).toHaveBeenCalledTimes( 1 );
		expect( lifecycle.isRunning( 'test/module' ) ).toBe( true );
	} );

	it( 'removes scoped listeners on cleanup and binds them again on reinit', () => {
		const onScroll = () => {};

		lifecycle.register( 'test/module', scope => {
			scope.on( window, 'scroll', onScroll );
		} );
		expect( listeners.count( 'scroll' ) ).toBe( 1 );

		lifecycle.cleanup();
		expect( listeners.count( 'scroll' ) ).toBe( 0 );
		expect( lifecycle.isRunning( 'test/module' ) ).toBe( false );

		lifecycle.reinit();
		expect( listeners.count( 'scroll' ) ).toBe( 1 );
	} );

	it( 'keeps listener counts flat across ten navigations', () => {
		lifecycle.register( 'test/module', scope => {
			scope.on( window, 'scroll', () => {} );
			scope.on( window, 'resize', () => {} );
		} );

		for ( let i = 0; i < 10; i++ ) {
			lifecycle.cleanup();
			lifecycle.reinit();
		}

		expect( listeners.count( 'scroll' ) ).toBe( 1 );
		expect( listeners.count( 'resize' ) ).toBe( 1 );
	} );

	it( 'runs teardowns returned by the setup and added to the scope', () => {
		const returned = jest.fn();
		const added = jest.fn();

		lifecycle.register( 'test/module', scope => {
			scope.add( added );
			return returned;
		} );
		lifecycle.cleanup();

		expect( returned ).toHaveBeenCalledTimes( 1 );
		expect( added ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'tears the previous instance down when a script registers the same id again', () => {
		const teardown = jest.fn();

		lifecycle.register( 'test/module', scope => {
			scope.on( window, 'scroll', () => {} );
			scope.add( teardown );
		} );
		lifecycle.register( 'test/module', scope => {
			scope.on( window, 'scroll', () => {} );
		} );

		expect( teardown ).toHaveBeenCalledTimes( 1 );
		expect( listeners.count( 'scroll' ) ).toBe( 1 );
	} );

	it( 'does not initialise a module twice when a re-executed script already set it up', () => {
		const setup = jest.fn();

		lifecycle.register( 'test/module', setup );
		lifecycle.cleanup();

		// An older theme re-executes the script after the swap...
		lifecycle.register( 'test/module', setup );
		// ...and then runs the registry re-init.
		lifecycle.reinit();

		expect( setup ).toHaveBeenCalledTimes( 2 );
	} );

	it( 'tracks helper teardowns into the running scope (onScrollRAF)', () => {
		const rafSpy = jest.spyOn( window, 'requestAnimationFrame' ).mockImplementation( () => 1 );
		const cancelSpy = jest.spyOn( window, 'cancelAnimationFrame' ).mockImplementation( () => {} );

		lifecycle.register( 'test/module', () => {
			onScrollRAF( () => {} );
		} );
		expect( listeners.count( 'scroll' ) ).toBe( 1 );
		expect( listeners.count( 'resize' ) ).toBe( 1 );

		lifecycle.cleanup();
		expect( listeners.count( 'scroll' ) ).toBe( 0 );
		expect( listeners.count( 'resize' ) ).toBe( 0 );
		expect( cancelSpy ).toHaveBeenCalled();

		rafSpy.mockRestore();
		cancelSpy.mockRestore();
	} );

	it( 'runs scope.bind callbacks only while the scope is alive', () => {
		let deferred;
		const work = jest.fn();

		lifecycle.register( 'test/module', scope => {
			deferred = scope.bind( work );
		} );
		deferred();
		lifecycle.cleanup();
		deferred();

		expect( work ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'isolates a throwing setup so other modules still run', () => {
		const errorSpy = jest.spyOn( console, 'error' ).mockImplementation( () => {} );
		const other = jest.fn();

		lifecycle.register( 'test/broken', () => {
			throw new Error( 'boom' );
		} );
		lifecycle.register( 'test/other', other );
		lifecycle.cleanup();
		lifecycle.reinit();

		expect( other ).toHaveBeenCalledTimes( 2 );
		errorSpy.mockRestore();
	} );

	it( 'registers itself in the Anima page transitions registry', () => {
		const register = jest.fn();
		window.anima = { pageTransitions: { register } };

		lifecycle.register( 'test/module', () => {} );
		lifecycle.register( 'test/other', () => {} );

		expect( register ).toHaveBeenCalledTimes( 1 );

		const entry = register.mock.calls[ 0 ][ 0 ];
		expect( entry.id ).toBe( PAGE_TRANSITIONS_ENTRY_ID );
		expect( entry.priority ).toBeLessThan( 10 );

		const teardown = jest.fn();
		lifecycle.register( 'test/scoped', scope => scope.add( teardown ) );
		entry.cleanup( document.body );
		expect( teardown ).toHaveBeenCalledTimes( 1 );
		entry.reinit( document.body );
		expect( lifecycle.isRunning( 'test/scoped' ) ).toBe( true );
	} );
} );
