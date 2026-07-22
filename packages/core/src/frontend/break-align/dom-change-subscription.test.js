/**
 * Shared frontend DOM-change subscription (Tasks 3.4/3.5): ONE delegated
 * childList-only MutationObserver notifying every subscriber — modules must
 * not each add their own observer.
 */

describe( 'dom change subscription', () => {
	let observers;
	let RecordingObserver;

	beforeEach( () => {
		jest.resetModules();
		observers = [];
		RecordingObserver = class {
			constructor( callback ) {
				this.callback = callback;
				observers.push( this );
			}
			observe( target, options ) {
				this.target = target;
				this.options = options;
			}
			disconnect() {}
		};
		window.MutationObserver = RecordingObserver;
	} );

	it( 'creates ONE observer for any number of subscribers and notifies them all', () => {
		const { subscribeToDomChanges } = require( './dom-change-subscription' );

		const a = jest.fn();
		const b = jest.fn();
		subscribeToDomChanges( a );
		subscribeToDomChanges( b );

		expect( observers.length ).toBe( 1 );
		expect( observers[ 0 ].options ).toEqual( { childList: true, subtree: true } );

		observers[ 0 ].callback( [ {
			type: 'childList',
			addedNodes: [ { nodeType: 1 } ],
			removedNodes: [],
		} ] );

		expect( a ).toHaveBeenCalledTimes( 1 );
		expect( b ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'ignores text-only mutations and honors unsubscribe', () => {
		const { subscribeToDomChanges } = require( './dom-change-subscription' );

		const a = jest.fn();
		const unsubscribe = subscribeToDomChanges( a );

		observers[ 0 ].callback( [ {
			type: 'childList',
			addedNodes: [ { nodeType: 3 } ],
			removedNodes: [],
		} ] );
		expect( a ).not.toHaveBeenCalled();

		unsubscribe();
		observers[ 0 ].callback( [ {
			type: 'childList',
			addedNodes: [ { nodeType: 1 } ],
			removedNodes: [],
		} ] );
		expect( a ).not.toHaveBeenCalled();
	} );
} );
