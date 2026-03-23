import { dispatch } from '@wordpress/data';
import { updateCategory } from '@wordpress/blocks';

import { getEditorScrollContainer, getSvg } from '@novablocks/block-editor';
import { debounce, cleanupBreakClasses, getContentBlocksArray, maybeAddBreakClassesToElement } from "@novablocks/utils";

import { observeAlignedBlockMutations } from './aligned-blocks-subscription';
import iconSvg from './icon.svg';
export { default as store } from './store';

export class novaBlocks {

	initialize( settings ) {
		dispatch( 'novablocks' ).updateSettings( settings );
		updateCategory( 'nova-blocks', {
		  icon: getSvg( iconSvg )
		} );

    handleAlignedBlocks();
  }
}

const handleAlignedBlocks = () => {
  const runAlignment = debounce( () => {
    const contentBlocks = getContentBlocksArray();
    cleanupBreakClasses();
    contentBlocks.forEach( maybeAddBreakClassesToElement );
  }, 100 );

  let currentTarget = null;
  let currentIframe = null;
  let disconnectTargetObserver = () => {};

  const resolveObserverTarget = () => {
    const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );

    try {
      const iframeBody = iframe?.contentDocument?.body;

      if ( iframeBody ) {
        return {
          iframe,
          target: iframeBody,
        };
      }
    } catch ( e ) {
      // Ignore cross-origin iframe access and fall back to the outer editor shell.
    }

    return {
      iframe,
      target: getEditorScrollContainer() || document.body,
    };
  };

  const reconnect = () => {
    const { iframe, target } = resolveObserverTarget();

    if ( iframe !== currentIframe ) {
      currentIframe?.removeEventListener( 'load', reconnect );
      iframe?.addEventListener( 'load', reconnect );
      currentIframe = iframe;
    }

    if ( ! target || target === currentTarget ) {
      return;
    }

    disconnectTargetObserver();
    currentTarget = target;
    disconnectTargetObserver = observeAlignedBlockMutations( {
      MutationObserverClass: window.MutationObserver,
      target,
      onChange: runAlignment,
    } );
    runAlignment();
  };

  reconnect();

  if ( document.readyState === 'loading' ) {
    document.addEventListener( 'DOMContentLoaded', reconnect, { once: true } );
  }

  if ( window.MutationObserver && document.body ) {
    const bodyObserver = new window.MutationObserver( reconnect );
    bodyObserver.observe( document.body, { childList: true, subtree: true } );
  }

  window.addEventListener( 'resize', runAlignment );
}

wp.novaBlocks = new novaBlocks();

import "./blocks/core/button";
import "./blocks/core/columns";
import "./blocks/core/group";
import "./blocks/core/list";
import "./blocks/core/query";
import "./blocks/core/quote";
import "./blocks/core/separator";
