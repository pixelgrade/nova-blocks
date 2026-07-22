import domReady from "@wordpress/dom-ready";
import { debounce } from "@novablocks/utils";

import {
  makeSidebarsNotReady,
  makeSidebarsReady,
} from "./utils";

import {
  cleanupBreakClasses,
  runBreakAlignment,
} from "@novablocks/utils";

import { subscribeToDomChanges } from "../dom-change-subscription";

// Frontend measurement options (Task 3.4): the CSS layers (server-known
// rail-absence classes + the :has() empty-rail flip) already decide covered
// wide/full blocks, so measurement skips them here. The editor path must
// NOT enable this skip (packages/core/src/index.js) — canvas rails contain
// block appenders and may diverge from the frontend :has() state.
const FRONTEND_OPTIONS = { skipCssCoveredRails: true };

export const resetAlignedBlocks = () => {
  cleanupBreakClasses();
  makeSidebarsNotReady();
  runBreakAlignment( FRONTEND_OPTIONS );
  makeSidebarsReady();
};

// We want to listen to Content Width setting
// change inside Customizer Preview,
// so we can break wide and full elements
// if there is not enough available space.
const handleCustomizerChanges = ( onChange ) => {

  const options = [
    'sm_site_container_width',
    'sm_content_inset',
    'sm_spacing_level'
  ];

  if ( !! window?.wp?.customize ) {
    options.forEach( option => {
      wp.customize( option, setting => {
        setting.bind( onChange );
      } )
    } )
  }
}

// Any image finishing to load after the initial measurement changes vertical
// bands — the same bug class as measuring before webfonts settle. Bounded:
// one listener per pending image, self-removing.
const remeasureOnImageSettle = ( onChange ) => {
  Array.from( document.images )
    .filter( img => ! ( img.complete && img.naturalWidth > 0 ) )
    .forEach( img => {
      img.addEventListener( 'load', onChange, { once: true } );
      img.addEventListener( 'error', onChange, { once: true } );
    } );
};

export const handleAlignedBlocks = () => {

  const onChange = debounce( resetAlignedBlocks, 200 );

  domReady( () => {
    // Initial decisions run at domReady — the same runtime shape the old
    // engine had, which in practice lands before first paint on this stack
    // (measured CLS 0 with throttled webfonts) though that is not an
    // absolute guarantee. They may be computed against unsettled webfont
    // metrics, which is why a correcting re-run follows at
    // document.fonts.ready: it changes classes only when the pre-fonts
    // decision was actually stale, so layout shifts happen exactly when the
    // old engine would have silently kept a WRONG decision (the e04f2aea
    // bug class). Promise chain — no async/await in frontend bundles: no
    // regenerator runtime ships.
    resetAlignedBlocks();

    if ( document.fonts && document.fonts.ready && typeof document.fonts.ready.then === 'function' ) {
      document.fonts.ready.then( onChange );
    }

    remeasureOnImageSettle( onChange );
    // Re-collect the overlap sets on element-level DOM change — via the
    // SHARED delegated observer (dom-change-subscription), which
    // structurally cannot self-trigger on our class/style writes.
    subscribeToDomChanges( onChange );
    handleCustomizerChanges( onChange );
  } );

  window.addEventListener( 'resize', onChange );

};
