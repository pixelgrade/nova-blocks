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
let observerStarted = false;

const hasElementNodes = ( nodes ) => Array.prototype.some.call( nodes, node => node.nodeType === 1 );

const ensureObserver = () => {
  if ( observerStarted || ! window.MutationObserver || ! document.body ) {
    return;
  }

  observerStarted = true;

  const observer = new window.MutationObserver( mutations => {
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

export const subscribeToDomChanges = ( callback ) => {
  subscribers.add( callback );
  ensureObserver();

  return () => {
    subscribers.delete( callback );
  };
};
