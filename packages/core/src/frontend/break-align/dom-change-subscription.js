/**
 * Shared frontend DOM-change subscription (Tasks 3.4/3.5).
 *
 * ONE delegated childList-only MutationObserver on document.body, notifying
 * every subscriber when the DOM gains or loses ELEMENT nodes. childList-only
 * on purpose: the measurement engine's own writes (break classes, inline
 * row spans) and the sticky-fade toggles are class/style mutations — none of
 * them can self-trigger this observer. Modules subscribe here instead of
 * adding observers of their own.
 */

const subscribers = new Set();
let observer = null;

const hasElementNodes = ( nodes ) => Array.prototype.some.call( nodes, node => node.nodeType === 1 );

const ensureObserver = () => {
  if ( observer || ! window.MutationObserver || ! document.body ) {
    return;
  }

  observer = new window.MutationObserver( mutations => {
    const relevant = mutations.some( mutation =>
      mutation.type === 'childList'
      && ( hasElementNodes( mutation.addedNodes ) || hasElementNodes( mutation.removedNodes ) )
    );

    if ( relevant ) {
      subscribers.forEach( subscriber => subscriber() );
    }
  } );

  observer.observe( document.body, { childList: true, subtree: true } );
};

// The observer lives only while someone listens: the last unsubscribe (a
// frontend module teardown before an AJAX page swap) disconnects it, and
// the next subscribe starts a fresh one on the current document.body.
const releaseObserver = () => {
  if ( subscribers.size || ! observer ) {
    return;
  }

  observer.disconnect();
  observer = null;
};

export const subscribeToDomChanges = ( callback ) => {
  subscribers.add( callback );
  ensureObserver();

  return () => {
    subscribers.delete( callback );
    releaseObserver();
  };
};
