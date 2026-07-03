import { useEffect, useState } from "@wordpress/element";
import { getScrollContainer } from "@wordpress/dom";
import { getEditorScrollContainer } from "../../utils";

/**
 * Resolve the scroll container, preferring the editor iframe canvas when present.
 *
 * In WP 7.0+ the block canvas is always iframed, so the scroll container lives
 * inside the iframe document, not the outer admin shell.
 */
const resolveScrollContainer = () => {
  const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );

  try {
    const iframeBody = iframe?.contentDocument?.body;

    if ( iframeBody ) {
      return getScrollContainer( iframeBody ) || iframeBody;
    }
  } catch ( e ) {
    // Cross-origin iframe — fall through to outer-document resolution.
  }

  return getEditorScrollContainer();
};

const useScrollContainer = () => {
  const [ scrollContainer, setScrollContainer ] = useState( null );

  useEffect( () => {
    const update = () => setScrollContainer( resolveScrollContainer() );

    let iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
    iframe?.addEventListener( 'load', update );
    update();

    // Re-resolve ONLY when the canvas iframe element itself changes (WP
    // creates and swaps it dynamically). resolveScrollContainer() reads
    // geometry (getScrollContainer), so calling it on every body mutation
    // forces a reflow per mutation per mounted hook — with several
    // scrolling-effect blocks that stalls the editor for hundreds of ms on
    // any DOM change. A querySelector identity check reads no layout.
    const observer = new MutationObserver( () => {
      const nextIframe = document.querySelector( 'iframe[name="editor-canvas"]' );
      if ( nextIframe === iframe ) {
        return;
      }
      iframe?.removeEventListener( 'load', update );
      iframe = nextIframe;
      iframe?.addEventListener( 'load', update );
      update();
    } );

    observer.observe( document.body, { childList: true, subtree: true } );

    return () => {
      observer.disconnect();
      iframe?.removeEventListener( 'load', update );
    };
  }, [] );

  return scrollContainer;
};

export default useScrollContainer;
