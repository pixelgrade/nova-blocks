/**
 * Frontend lifecycle for Nova Blocks' frontend scripts.
 *
 * Every frontend script registers its page setup as a MODULE:
 *
 *   registerFrontendModule( 'novablocks/header', ( scope ) => {
 *     scope.on( window, 'resize', onResize );   // removed on teardown
 *     scope.add( () => header.destroy() );       // any teardown
 *   } );
 *
 * The setup runs right away, exactly where the script's top-level code used
 * to run, so a page without AJAX navigation behaves as before. What changes
 * is that everything a module binds outside its own markup (window and
 * document listeners, observers, frame loops) is owned by a scope and can be
 * torn down, and the module can run again for a new page:
 *
 *   cleanup( container )  tear every module down (outgoing page)
 *   reinit( container )   set every module up again (incoming page)
 *
 * Anima's page transitions (Barba) drive both through their re-init registry
 * (`window.anima.pageTransitions.register`), so the scripts no longer have to
 * be re-executed on every navigation.
 *
 * Re-executing a script stays safe: registering an id that already exists
 * tears the previous instance down first. A module that was set up after the
 * last cleanup (a re-executed or freshly loaded script) is skipped by
 * `reinit`, so nothing initialises twice against the same page.
 *
 * Helpers that bind global listeners (onScrollRAF) attach their teardown to
 * the scope that is running, through `trackTeardown()`.
 */

export const PAGE_TRANSITIONS_ENTRY_ID = 'novablocks/frontend';

// Runs before the theme's own integrations (they target the DOM Nova builds).
export const PAGE_TRANSITIONS_ENTRY_PRIORITY = 0;

const GLOBAL_KEY = '__novablocksFrontendLifecycle';

// The scope whose code is running right now (setup or a scope-bound
// callback). Shared on purpose: helpers such as onScrollRAF read it through
// trackTeardown() without knowing which lifecycle (or which copy of this
// module) owns the scope.
const ACTIVE_SCOPE_KEY = '__novablocksFrontendActiveScope';
const activeScopeHolder = typeof window !== 'undefined'
	? ( window[ ACTIVE_SCOPE_KEY ] = window[ ACTIVE_SCOPE_KEY ] || { current: null } )
	: { current: null };

const reportError = ( win, message, error ) => {
	// eslint-disable-next-line no-console
	const log = win?.console?.error || ( typeof console !== 'undefined' ? console.error : null );

	if ( log ) {
		log( message, error );
	}
};

export const createFrontendLifecycle = ( { win = window, doc = document } = {} ) => {
	const modules = new Map();
	let generation = 0;
	let connectedRegistry = null;

	const createScope = ( id, container ) => {
		let teardowns = [];

		const scope = {
			id,
			container,
			alive: true,

			// Register a teardown. Added after destroy, it runs immediately.
			add( teardown ) {
				if ( typeof teardown !== 'function' ) {
					return teardown;
				}

				if ( ! scope.alive ) {
					teardown();
					return teardown;
				}

				if ( ! teardowns.includes( teardown ) ) {
					teardowns.push( teardown );
				}

				return teardown;
			},

			// addEventListener that is removed on teardown.
			on( target, type, listener, options ) {
				if ( ! target || typeof target.addEventListener !== 'function' ) {
					return () => {};
				}

				target.addEventListener( type, listener, options );

				return scope.add( () => target.removeEventListener( type, listener, options ) );
			},

			// Run `fn` with this scope active, so helpers track into it.
			run( fn, ...args ) {
				if ( ! scope.alive ) {
					return undefined;
				}

				const previous = activeScopeHolder.current;
				activeScopeHolder.current = scope;

				try {
					return fn( ...args );
				} finally {
					activeScopeHolder.current = previous;
				}
			},

			// Wrap a deferred callback: it runs inside the scope, or not at all
			// once the scope is gone.
			bind( fn ) {
				return ( ...args ) => scope.run( fn, ...args );
			},

			// DOM-ready that belongs to the scope (immediate on a live page).
			ready( fn ) {
				if ( doc.readyState !== 'loading' ) {
					return scope.run( fn );
				}

				scope.on( doc, 'DOMContentLoaded', scope.bind( fn ), { once: true } );
				return undefined;
			},

			destroy() {
				if ( ! scope.alive ) {
					return;
				}

				scope.alive = false;

				const pending = teardowns.reverse();
				teardowns = [];

				pending.forEach( teardown => {
					try {
						teardown();
					} catch ( error ) {
						reportError( win, `[novablocks] teardown of "${ id }" failed:`, error );
					}
				} );
			},
		};

		return scope;
	};

	const start = ( module, container ) => {
		const scope = createScope( module.id, container );
		module.scope = scope;
		module.generation = generation;

		try {
			scope.run( () => {
				const teardown = module.setup( scope );

				if ( typeof teardown === 'function' ) {
					scope.add( teardown );
				}
			} );
		} catch ( error ) {
			reportError( win, `[novablocks] setup of "${ module.id }" failed:`, error );
		}
	};

	const stop = ( module ) => {
		if ( module.scope ) {
			module.scope.destroy();
			module.scope = null;
		}
	};

	const lifecycle = {
		register( id, setup ) {
			if ( typeof id !== 'string' || ! id || typeof setup !== 'function' ) {
				return;
			}

			const existing = modules.get( id );

			if ( existing ) {
				stop( existing );
			}

			const module = existing || { id };
			module.setup = setup;
			modules.set( id, module );

			start( module );
			lifecycle.connectPageTransitions();
		},

		// Outgoing page: tear every module down.
		cleanup( container ) {
			generation++;
			Array.from( modules.values() ).reverse().forEach( stop );
		},

		// Incoming page: set up every module that has not run since cleanup.
		reinit( container ) {
			modules.forEach( module => {
				if ( module.scope && module.generation === generation ) {
					return;
				}

				stop( module );
				start( module, container );
			} );
		},

		// Attach `teardown` to the scope that is running (if any).
		track( teardown ) {
			return trackTeardown( teardown );
		},

		getActiveScope() {
			return activeScopeHolder.current;
		},

		has( id ) {
			return modules.has( id );
		},

		getModuleIds() {
			return Array.from( modules.keys() );
		},

		isRunning( id ) {
			return !! modules.get( id )?.scope;
		},

		// Hand the lifecycle to Anima's page transitions re-init registry.
		connectPageTransitions() {
			const registry = win?.anima?.pageTransitions;

			if ( ! registry || typeof registry.register !== 'function' || connectedRegistry === registry ) {
				return false;
			}

			connectedRegistry = registry;
			registry.register( {
				id: PAGE_TRANSITIONS_ENTRY_ID,
				priority: PAGE_TRANSITIONS_ENTRY_PRIORITY,
				cleanup: container => lifecycle.cleanup( container ),
				reinit: container => lifecycle.reinit( container ),
			} );

			return true;
		},
	};

	// The theme script may load after ours: try again once the DOM is parsed.
	if ( doc && doc.readyState === 'loading' && typeof doc.addEventListener === 'function' ) {
		doc.addEventListener( 'DOMContentLoaded', () => lifecycle.connectPageTransitions(), { once: true } );
	}

	return lifecycle;
};

// One lifecycle per window, shared by every Nova Blocks bundle.
export const getFrontendLifecycle = () => {
	if ( typeof window === 'undefined' ) {
		return null;
	}

	if ( ! window[ GLOBAL_KEY ] ) {
		window[ GLOBAL_KEY ] = createFrontendLifecycle( { win: window, doc: window.document } );
		window.novablocks = window.novablocks || {};
		window.novablocks.frontendLifecycle = window[ GLOBAL_KEY ];
	}

	return window[ GLOBAL_KEY ];
};

export const registerFrontendModule = ( id, setup ) => {
	const lifecycle = getFrontendLifecycle();

	if ( lifecycle ) {
		lifecycle.register( id, setup );
	}
};

export const trackTeardown = ( teardown ) => {
	const scope = activeScopeHolder.current;

	if ( scope && scope.alive && typeof teardown === 'function' ) {
		scope.add( teardown );
	}

	return teardown;
};
