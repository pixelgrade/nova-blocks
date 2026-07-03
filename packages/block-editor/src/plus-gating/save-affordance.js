/**
 * "Save · Plus" save-button affordance — the block-editor port of Style
 * Manager's plus-save-affordance.js (see the shared UI spec in
 * pixelgrade-plus/docs/plus-gating-ui-contract.md).
 *
 * While gates are locked, the native Save/Update button announces — BEFORE
 * the save — that pending edits contain Plus refinements:
 *
 *   - Gated-only pending edits: the button recolours to the Plus purple with
 *     a sparkle + "Plus" pill. UNLIKE Style Manager (where gated edits never
 *     dirty the entity, so the decorated click opens an upsell instead of
 *     saving), the click here performs the REAL save: block attributes ARE
 *     the content, the server reverts/preview-persists the gated values, and
 *     the post-save snackbar (./index.js) tells the truth about the outcome.
 *   - Mixed free + gated edits: native button kept intact, a quiet glowing
 *     sparkle marks the Plus part.
 *   - No gated edits: fully native, zero decoration.
 *
 * Presentation only — enforcement lives server-side (lib/plus-gating.php).
 * A licensed Plus user gets a no-op module.
 */
import { parse } from '@wordpress/blocks';
import { select, subscribe } from '@wordpress/data';

import { blockTreesMatch, hasPendingGatedChanges, stripGatedAttributes } from './analyze';

const CONTAINER_SELECTOR = '.editor-header__settings, .edit-post-header__settings';
const SAVE_BUTTON_SELECTOR = 'button.editor-post-publish-button__button';
const ADORNMENT_SELECTOR = '.nb-save-plus__spark, .nb-save-plus__pill';

const OBSERVE_OPTIONS = {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: [ 'class', 'disabled', 'aria-disabled' ],
};

// Entering the gated-only state is the only false-positive-prone transition
// (mid-cascade attribute churn); require it to still hold after a settle
// window so the button never flashes a transient "Save · Plus".
const EVALUATE_DEBOUNCE = 250;
const GATED_ONLY_SETTLE = 350;

// The same concave four-point sparkle Style Manager draws.
const SVG_NS = 'http://www.w3.org/2000/svg';
const SPARKLE_PATH_D = 'M12 2c.5 4.5 3 7 7 7-4.5.5-7 3-7 7-.5-4.5-3-7-7-7 4.5-.5 7-3 7-7z';

const createSparkleSvg = () => {
  const svg = document.createElementNS( SVG_NS, 'svg' );
  svg.setAttribute( 'class', 'nb-save-plus__spark' );
  svg.setAttribute( 'viewBox', '0 0 24 24' );
  svg.setAttribute( 'width', '16' );
  svg.setAttribute( 'height', '16' );
  svg.setAttribute( 'focusable', 'false' );
  svg.setAttribute( 'aria-hidden', 'true' );

  const path = document.createElementNS( SVG_NS, 'path' );
  path.setAttribute( 'd', SPARKLE_PATH_D );
  path.setAttribute( 'fill', 'currentColor' );
  svg.appendChild( path );

  return svg;
};

const debounced = ( fn, wait ) => {
  let timer = null;

  const run = () => {
    window.clearTimeout( timer );
    timer = window.setTimeout( () => {
      timer = null;
      fn();
    }, wait );
  };

  run.cancel = () => {
    window.clearTimeout( timer );
    timer = null;
  };

  return run;
};

export const initPlusSaveAffordance = ( plus ) => {
  // Only ever arms during a locked trial; licensed users keep 100% native
  // behaviour. Editor-only module: bail outside the post editor.
  if ( ! plus || ! Object.values( plus.locked || {} ).some( Boolean ) ) {
    return;
  }

  let state = 'none'; // 'none' | 'gated-only' | 'mixed'
  let containerEl = null;
  let observer = null;
  let rafId = null;
  let settleTimer = null;
  let pollTimer = null;

  // parse() is the heavy step — cache per content string.
  let parseCache = { key: null, blocks: null };
  const parseBlocks = ( content ) => {
    if ( parseCache.key !== content ) {
      parseCache = { key: content, blocks: parse( content ) };
    }

    return parseCache.blocks;
  };
  let savedParseCache = { key: null, blocks: null };
  const parseSavedBlocks = ( content ) => {
    if ( savedParseCache.key !== content ) {
      savedParseCache = { key: content, blocks: parse( content ) };
    }

    return savedParseCache.blocks;
  };

  // --- State evaluation -----------------------------------------------------

  const computeState = () => {
    const editor = select( 'core/editor' );

    if ( ! editor?.getEditedPostContent || ! editor.isEditedPostDirty() ) {
      return 'none';
    }

    const savedContent = editor.getCurrentPost()?.content;
    const editedContent = editor.getEditedPostContent();

    if ( typeof savedContent !== 'string' || typeof editedContent !== 'string' ) {
      return 'none';
    }

    // Both trees come from parse(), so default attributes are elided
    // consistently on each side.
    const editedBlocks = parseBlocks( editedContent );
    const savedBlocks = parseSavedBlocks( savedContent );
    const motionPresetOptions = window.wp?.novaBlocks?.settings?.motionPresetOptions || [];

    if ( ! hasPendingGatedChanges( editedBlocks, savedBlocks, plus, motionPresetOptions ) ) {
      return 'none';
    }

    // Non-content entity edits (title, excerpt, …) are free changes. The
    // content itself arrives as the content/blocks/selection triplet —
    // editor bookkeeping, not entity fields.
    const edits = editor.getPostEdits?.() || {};
    const hasFreeEntityEdits = Object.keys( edits ).some(
      ( key ) => key !== 'content' && key !== 'blocks' && key !== 'selection'
    );

    if ( hasFreeEntityEdits ) {
      return 'mixed';
    }

    const freeChanged = ! blockTreesMatch(
      stripGatedAttributes( editedBlocks, plus ),
      stripGatedAttributes( savedBlocks, plus )
    );

    return freeChanged ? 'mixed' : 'gated-only';
  };

  // --- Button decoration ----------------------------------------------------

  const clearButton = ( button ) => {
    button.classList.remove( 'nb-save-plus', 'nb-save-plus--hint' );
    button.querySelectorAll( ADORNMENT_SELECTOR ).forEach( ( node ) => node.remove() );

    if ( button.dataset.nbSavePlusLabeled ) {
      button.removeAttribute( 'aria-label' );
      delete button.dataset.nbSavePlusLabeled;
    }
  };

  const ensureSpark = ( button ) => {
    if ( ! button.querySelector( '.nb-save-plus__spark' ) ) {
      button.insertBefore( createSparkleSvg(), button.firstChild );
    }
  };

  const decorateGatedOnly = ( button ) => {
    button.classList.add( 'nb-save-plus' );
    button.classList.remove( 'nb-save-plus--hint' );

    if ( plus.saveAriaGatedOnly ) {
      button.setAttribute( 'aria-label', plus.saveAriaGatedOnly );
      button.dataset.nbSavePlusLabeled = '1';
    }

    ensureSpark( button );

    if ( ! button.querySelector( '.nb-save-plus__pill' ) ) {
      const pill = document.createElement( 'span' );
      pill.className = 'nb-save-plus__pill';
      pill.setAttribute( 'aria-hidden', 'true' );
      pill.textContent = plus.badge || 'Plus';
      button.appendChild( pill );
    }
  };

  const decorateHint = ( button ) => {
    button.classList.add( 'nb-save-plus--hint' );
    button.classList.remove( 'nb-save-plus' );

    const pill = button.querySelector( '.nb-save-plus__pill' );
    if ( pill ) {
      pill.remove();
    }

    if ( button.dataset.nbSavePlusLabeled ) {
      button.removeAttribute( 'aria-label' );
      delete button.dataset.nbSavePlusLabeled;
    }

    ensureSpark( button );
  };

  const reconcile = () => {
    const button = containerEl?.querySelector( SAVE_BUTTON_SELECTOR );

    if ( ! button ) {
      return;
    }

    // Mutate with the observer detached so our own DOM writes never re-trigger
    // it (React re-renders that reset the decoration still re-fire it).
    if ( observer ) {
      observer.disconnect();
    }

    try {
      if ( 'gated-only' === state ) {
        decorateGatedOnly( button );
      } else if ( 'mixed' === state ) {
        decorateHint( button );
      } else {
        clearButton( button );
      }
    } finally {
      if ( observer && containerEl ) {
        observer.observe( containerEl, OBSERVE_OPTIONS );
      }
    }
  };

  const scheduleReconcile = () => {
    if ( rafId ) {
      return;
    }

    rafId = window.requestAnimationFrame( () => {
      rafId = null;
      reconcile();
    } );
  };

  const commitState = ( next ) => {
    if ( next !== state ) {
      state = next;
      scheduleReconcile();
    }
  };

  const evaluate = () => {
    const next = computeState();

    if ( 'gated-only' === next && 'gated-only' !== state ) {
      window.clearTimeout( settleTimer );
      settleTimer = window.setTimeout( () => {
        settleTimer = null;
        commitState( computeState() );
      }, GATED_ONLY_SETTLE );
      return;
    }

    window.clearTimeout( settleTimer );
    settleTimer = null;
    commitState( next );
  };

  const debouncedEvaluate = debounced( evaluate, EVALUATE_DEBOUNCE );

  // --- Wiring ---------------------------------------------------------------

  const bindContainer = ( container ) => {
    containerEl = container;

    if ( window.MutationObserver ) {
      observer = new MutationObserver( scheduleReconcile );
      observer.observe( container, OBSERVE_OPTIONS );
    }

    reconcile();
  };

  const waitForContainer = ( attempts = 40 ) => {
    const container = document.querySelector( CONTAINER_SELECTOR );

    if ( container ) {
      bindContainer( container );
      return;
    }

    if ( attempts > 0 ) {
      pollTimer = window.setTimeout( () => waitForContainer( attempts - 1 ), 250 );
    }
  };

  // Cheap store watcher: three reference reads per update; the heavy work
  // (serialize + parse + classification) only runs debounced after one of
  // them actually changed.
  let lastBlocks = null;
  let lastPost = null;
  let lastEdits = null;

  subscribe( () => {
    const blockEditor = select( 'core/block-editor' );
    const editor = select( 'core/editor' );

    if ( ! blockEditor?.getBlocks || ! editor?.getCurrentPost ) {
      return;
    }

    const blocks = blockEditor.getBlocks();
    const post = editor.getCurrentPost();
    const edits = editor.getPostEdits?.() || null;

    if ( blocks === lastBlocks && post === lastPost && edits === lastEdits ) {
      return;
    }

    lastBlocks = blocks;
    lastPost = post;
    lastEdits = edits;

    debouncedEvaluate();
  } );

  waitForContainer();
};
