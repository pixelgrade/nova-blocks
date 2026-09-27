/**
 * Shared settle subscription: notifies subscribers when late-arriving
 * geometry sources settle — webfonts (document.fonts.ready) and images
 * that were still pending at subscribe time. Extracted so the sticky
 * overlap module re-measures its band geometry on the same triggers the
 * alignment engine already reacts to (handle-aligned-blocks keeps its
 * own internal, test-pinned settle logic; both hooks are cheap).
 *
 * Frontend bundle: promise chains only, no async/await.
 */

const subscribers = new Set();
let hooksInstalled = false;
let removeImageHooks = [];

const notifyAll = () => {
	subscribers.forEach( ( callback ) => callback() );
};

const isImagePending = ( img ) => ! ( img.complete && img.naturalWidth > 0 );

const installHooks = () => {
	if ( hooksInstalled ) {
		return;
	}
	hooksInstalled = true;

	if ( document.fonts && document.fonts.ready && document.fonts.ready.then ) {
		document.fonts.ready.then( notifyAll );
	}

	Array.prototype.forEach.call( document.images, ( img ) => {
		if ( ! isImagePending( img ) ) {
			return;
		}
		const unhook = () => {
			img.removeEventListener( 'load', onSettle );
			img.removeEventListener( 'error', onSettle );
		};
		const onSettle = () => {
			unhook();
			notifyAll();
		};
		img.addEventListener( 'load', onSettle );
		img.addEventListener( 'error', onSettle );
		removeImageHooks.push( unhook );
	} );
};

// The last unsubscribe (a module teardown before an AJAX page swap) drops
// the image hooks, so the next subscribe hooks the images of the new page.
const releaseHooks = () => {
	if ( subscribers.size || ! hooksInstalled ) {
		return;
	}

	removeImageHooks.forEach( ( unhook ) => unhook() );
	removeImageHooks = [];
	hooksInstalled = false;
};

export const subscribeToSettleEvents = ( callback ) => {
	installHooks();
	subscribers.add( callback );

	return () => {
		subscribers.delete( callback );
		releaseHooks();
	};
};
