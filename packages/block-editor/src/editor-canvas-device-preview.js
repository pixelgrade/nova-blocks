import { select, subscribe } from '@wordpress/data';

/**
 * Editor canvas device-preview bridge (Sidecar Task 3.0b).
 *
 * The Sidecar collapses to one column via a `below(lap)` media query evaluated
 * against the editor CANVAS width. The canvas iframe is narrower than the
 * frontend viewport (editor chrome + inspector sidebars), and for the
 * Tablet/Mobile device previews WordPress RESIZES the iframe to 780/360px — so
 * the desktop layout becomes un-previewable even under the Desktop preview,
 * where it should stay visible.
 *
 * A Desktop preview at an ~780px canvas is byte-indistinguishable INSIDE the
 * iframe from a Tablet preview at 780px (identical iframe width, identical body
 * classes, and no device class anywhere in the canvas document — verified live
 * in WP 7 Post + Site editors). Pure CSS therefore cannot tell them apart, so
 * this bridge reflects `core/editor`'s deviceType onto the canvas
 * `.editor-styles-wrapper` as `data-nb-device-preview`. The editor-only pin in
 * sidecar/editor-styles.scss keeps the desktop columns unless that attribute is
 * `Tablet` or `Mobile`.
 *
 * Editor-only: this module lives in the block-editor bundle and never loads on
 * the front end. Desktop is the on-load default and needs no attribute, so the
 * pin also holds before this bridge first runs.
 */

const ATTR = 'data-nb-device-preview';

function getDeviceType() {
	// core/editor.getDeviceType() is the unified API present in BOTH the Post
	// Editor and the Site Editor on WP 7; the experimental selectors are kept
	// as defensive fallbacks for other editor shells.
	const editor = select( 'core/editor' );
	if ( editor && typeof editor.getDeviceType === 'function' ) {
		return editor.getDeviceType();
	}

	const editSite = select( 'core/edit-site' );
	if ( editSite && typeof editSite.__experimentalGetPreviewDeviceType === 'function' ) {
		return editSite.__experimentalGetPreviewDeviceType();
	}

	const editPost = select( 'core/edit-post' );
	if ( editPost && typeof editPost.__experimentalGetPreviewDeviceType === 'function' ) {
		return editPost.__experimentalGetPreviewDeviceType();
	}

	return 'Desktop';
}

function getCanvasWrapper() {
	// Iframed canvas (Site Editor always; WP 7 Post Editor here): the
	// `.editor-styles-wrapper` lives on the iframe body. Non-iframed editors
	// keep it in the top document. Fall back to the iframe body itself, which
	// also carries the `.editor-styles-wrapper` class.
	const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
	if ( iframe ) {
		let doc = null;
		try {
			doc = iframe.contentDocument;
		} catch ( error ) {
			doc = null;
		}
		if ( doc ) {
			return doc.querySelector( '.editor-styles-wrapper' ) || doc.body;
		}
	}
	return document.querySelector( '.editor-styles-wrapper' );
}

let lastDevice = null;
let lastWrapper = null;

function apply() {
	const device = getDeviceType();

	// Edge-triggered: touch the DOM only when the preview device actually
	// changes, never on every store tick (napkin: Editor Performance — no
	// wp.data.subscribe layout storms). Two reconciliation rules keep the
	// edge detection from stranding state:
	// - lastDevice advances only AFTER a successful write, so a tick where
	//   the canvas is mid-mount retries instead of skipping forever;
	// - a non-Desktop preview re-stamps when its wrapper got replaced by a
	//   canvas remount (cheap isConnected read; Desktop needs nothing — the
	//   absent attribute IS the Desktop state on any fresh canvas).
	if ( device === lastDevice ) {
		if ( device === 'Desktop' || ( lastWrapper && lastWrapper.isConnected ) ) {
			return;
		}
	}

	const wrapper = getCanvasWrapper();
	if ( ! wrapper ) {
		return;
	}

	if ( device === 'Desktop' ) {
		wrapper.removeAttribute( ATTR );
	} else {
		wrapper.setAttribute( ATTR, device );
	}

	lastDevice = device;
	lastWrapper = wrapper;
}

if ( typeof window !== 'undefined' && ! window.__novablocksDevicePreviewBridge ) {
	window.__novablocksDevicePreviewBridge = true;
	// Store-scoped: only core/editor state changes invoke the callback.
	subscribe( apply, 'core/editor' );
	apply();
}
