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
    update();

    // Re-resolve when iframe appears or changes (created dynamically by WP).
    const observer = new MutationObserver( () => {
      const newContainer = resolveScrollContainer();
      setScrollContainer( prev => {
        // Only update state if the container actually changed.
        return prev === newContainer ? prev : newContainer;
      } );
    } );

    observer.observe( document.body, { childList: true, subtree: true } );

    const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
    iframe?.addEventListener( 'load', update );

    return () => {
      observer.disconnect();
      iframe?.removeEventListener( 'load', update );
    };
  }, [] );

  return scrollContainer;
};

export default useScrollContainer;
