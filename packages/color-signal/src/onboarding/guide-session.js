// Module-level controller for the floating practice guide.
//
// The Color Signal sidebar panel remounts on every block selection change, so anything that must
// survive selection — the palette baseline, the "guide is open" state, the guide-action listener,
// the live step watcher — lives here, outside the React lifecycle. The watcher uses a scoped
// wp.data subscription with a blocks-ref early return (see the repo guardrail on global editor
// subscriptions) and never dispatches from inside the listener.
import { dispatch, select, subscribe } from '@wordpress/data';

import { findPracticeBlocks, derivePracticeSteps } from './derive-steps';
import { buildGuideContent } from './build-guide-content';
import {
  PRACTICE_GUIDE_ID,
  KB_USING_COLOR_SIGNAL_URL,
  KB_COLOR_SYSTEM_URL,
} from './constants';

// Event names owned by the Assistant's docs window (see pixelgrade-assistant docs/events.js);
// hardcoded here so Nova has no build-time dependency on the Assistant.
const GUIDE_ACTION_EVENT = 'pixelgrade-docs:guide-action';
const DOCS_OPENSTATE_EVENT = 'pixelgrade-docs:openstate';

const session = {
  unsubscribe: null,
  actionsBound: false,
  paletteBaseline: null,
  lastBlocks: null,
  lastSignature: null,
  // Whether OUR guide currently lives in the (open or minimized) floating window — the sidebar
  // hides its practice affordances while the walkthrough runs there.
  guideVisible: false,
};

const visibilityListeners = new Set();

const setGuideVisible = ( visible ) => {
  if ( session.guideVisible === visible ) {
    return;
  }

  session.guideVisible = visible;
  visibilityListeners.forEach( listener => listener( visible ) );
};

export const isGuideVisible = () => session.guideVisible;

export const onGuideVisibilityChange = ( listener ) => {
  visibilityListeners.add( listener );

  return () => visibilityListeners.delete( listener );
};

export const isGuideAvailable = () =>
  typeof window?.pixelgradeAdminHub?.docs?.openGuide === 'function';

export const openDocsArticle = ( url ) => {
  const opened = window?.pixelgradeAdminHub?.docs?.openArticle?.( { url } );

  if ( ! opened ) {
    window.open( url, '_blank', 'noopener' );
  }
};

// Keep the palette baseline in sync with the practice blocks' presence. Shared by the sidebar
// surface and the floating-guide watcher.
export const syncPaletteBaseline = ( intro, cta ) => {
  if ( ( intro || cta ) && ! session.paletteBaseline ) {
    session.paletteBaseline = {
      intro: intro?.attributes?.palette ?? null,
      cta: cta?.attributes?.palette ?? null,
    };
  }

  if ( ! intro && ! cta ) {
    session.paletteBaseline = null;
  }

  return session.paletteBaseline;
};

export const getPaletteBaseline = () => session.paletteBaseline;

export const removePracticeSection = () => {
  const { wrapper, intro, cta } = findPracticeBlocks( select( 'core/block-editor' ).getBlocks() );
  const clientIds = wrapper
    ? [ wrapper.clientId ]
    : [ intro?.clientId, cta?.clientId ].filter( Boolean );

  dispatch( 'core/block-editor' ).removeBlocks( clientIds );
};

// "Show me the block": select the step's target so the canvas highlights it and the Color Signal
// panel opens for it in the sidebar.
const selectPracticeBlock = ( which ) => {
  const { intro, cta } = findPracticeBlocks( select( 'core/block-editor' ).getBlocks() );
  const target = which === 'intro' ? intro : cta;

  if ( ! target ) {
    return;
  }

  dispatch( 'core/block-editor' ).selectBlock( target.clientId );
  // Whichever editor shell is around; both no-op harmlessly when absent.
  dispatch( 'core/edit-post' )?.openGeneralSidebar?.( 'edit-post/block' );
  dispatch( 'core/edit-site' )?.openGeneralSidebar?.( 'edit-site/block-inspector' );

  // Bring the block into view — it may live inside the editor-canvas iframe.
  const documents = [ document ].concat(
    [ ...document.querySelectorAll( 'iframe[name="editor-canvas"]' ) ]
      .map( iframe => iframe.contentDocument )
      .filter( Boolean )
  );

  documents.some( ( doc ) => {
    const node = doc.querySelector( `[data-block="${ target.clientId }"]` );

    if ( node ) {
      node.scrollIntoView( { behavior: 'smooth', block: 'center' } );
    }

    return !! node;
  } );
};

const computePractice = () => {
  const blocks = select( 'core/block-editor' ).getBlocks();
  const { wrapper, intro, cta } = findPracticeBlocks( blocks );

  syncPaletteBaseline( intro, cta );

  return {
    blocks,
    wrapper,
    intro,
    cta,
    steps: derivePracticeSteps( { intro, cta, paletteBaseline: session.paletteBaseline } ),
    current: {
      introSignal: parseInt( intro?.attributes?.colorSignal ?? 0, 10 ),
      ctaSignal: parseInt( cta?.attributes?.colorSignal ?? 0, 10 ),
    },
  };
};

const pushGuide = ( { steps, current } ) => {
  const openGuide = window?.pixelgradeAdminHub?.docs?.openGuide;

  return typeof openGuide === 'function' ? !! openGuide( buildGuideContent( steps, current ) ) : false;
};

const guideSignature = ( { steps, current } ) => JSON.stringify( [ steps, current ] );

// Stop live synchronization without discarding the practice baseline. Closing the floating
// window is a pause: the user can explicitly reopen it later and continue the same exercise.
const stopGuideWatcher = () => {
  if ( session.unsubscribe ) {
    session.unsubscribe();
    session.unsubscribe = null;
  }

  session.lastBlocks = null;
  session.lastSignature = null;
};

const bindActionListener = () => {
  if ( session.actionsBound || typeof window === 'undefined' ) {
    return;
  }

  window.addEventListener( GUIDE_ACTION_EVENT, ( event ) => {
    const detail = event?.detail;

    if ( detail?.guideId !== PRACTICE_GUIDE_ID ) {
      return;
    }

    if ( detail.actionId === 'remove-practice' ) {
      removePracticeSection();
    } else if ( detail.actionId === 'select-intro' ) {
      selectPracticeBlock( 'intro' );
    } else if ( detail.actionId === 'select-cta' ) {
      selectPracticeBlock( 'cta' );
    } else if ( detail.actionId === 'read-using-color-signal' ) {
      openDocsArticle( KB_USING_COLOR_SIGNAL_URL );
    } else if ( detail.actionId === 'read-color-system' ) {
      openDocsArticle( KB_COLOR_SYSTEM_URL );
    }
  } );

  // The window broadcasts its open state; when the user closes it, the sidebar affordances return.
  window.addEventListener( DOCS_OPENSTATE_EVENT, ( event ) => {
    if ( event?.detail?.open === false && session.guideVisible ) {
      stopGuideWatcher();
      setGuideVisible( false );
    }
  } );

  session.actionsBound = true;
};

const stopGuideSession = ( { farewell } = {} ) => {
  stopGuideWatcher();

  session.paletteBaseline = null;
  setGuideVisible( false );

  if ( farewell ) {
    // Don't leave a stale checklist behind in the floating window.
    window?.pixelgradeAdminHub?.docs?.openGuide?.( {
      id: PRACTICE_GUIDE_ID,
      title: 'Color Signal Practice',
      content: '<p>Practice section removed. You can insert a fresh one anytime from the Color Signal panel.</p>',
      actions: [],
    } );
  }
};

// Open (or re-open) the floating guide and keep it live while the practice section exists.
// Returns false when the Assistant window isn't available or there is nothing to guide —
// the practice section then teaches through its own content alone.
export const startGuideSession = () => {
  const initial = computePractice();

  if ( ! initial.intro && ! initial.cta ) {
    return false;
  }

  if ( ! pushGuide( initial ) ) {
    return false;
  }

  bindActionListener();
  setGuideVisible( true );
  session.lastSignature = guideSignature( initial );

  if ( session.unsubscribe ) {
    return true;
  }

  session.lastBlocks = initial.blocks;
  session.unsubscribe = subscribe( () => {
    // Cheap gate: getBlocks() returns the same cached array while nothing changed.
    const blocks = select( 'core/block-editor' ).getBlocks();

    if ( blocks === session.lastBlocks ) {
      return;
    }

    session.lastBlocks = blocks;

    const practice = computePractice();

    if ( ! practice.intro && ! practice.cta ) {
      stopGuideSession( { farewell: true } );

      return;
    }

    const signature = guideSignature( practice );

    if ( signature !== session.lastSignature ) {
      session.lastSignature = signature;
      pushGuide( practice );
    }
  } );

  return true;
};
