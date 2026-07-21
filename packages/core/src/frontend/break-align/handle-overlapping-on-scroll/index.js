import domReady from "@wordpress/dom-ready";
import { debounce, doOverlap, matches } from "@novablocks/utils";

import { subscribeToDomChanges } from "../dom-change-subscription";

const HIDDEN_BLOCK_CLASS = 'novablocks-hidden-block';

// Fires per intersection event instead of per animation frame (Task 3.5:
// the RAF scroll loop is gone). Fine-grained thresholds make the observer
// report while an element's visible fraction changes during scroll.
const IO_THRESHOLDS = Array.from( { length: 21 }, ( _, i ) => i / 20 );

// This function will handle sticky block
// behaviour on scroll.
export const toggleOverlappingClassname = ( overlappingSets ) => {

  const stickyElements = overlappingSets.map( overlappingSet => {
    const [ stickyElement, blocks ] = overlappingSet;

    const overlap = blocks.some( block => {
      return doOverlap( stickyElement, block );
    } );

    return ( { stickyElement, overlap } );
  } );

  stickyElements.forEach( ( { stickyElement, overlap } ) => {

    if ( overlap ) {
      stickyElement.classList.add( HIDDEN_BLOCK_CLASS );
    } else {
      stickyElement.classList.remove( HIDDEN_BLOCK_CLASS );
    }

  } );

};

export const getOverlappingSets = () => {
  const sidebars = Array.from( document.querySelectorAll( '.nb-sidecar--sticky-sidebar > .nb-sidecar-area--sidebar' ) );

  return sidebars.reduce( ( acc, sidebar ) => {
    const sidecar = sidebar.parentElement;
    const stickyElement = sidebar.lastElementChild;
    const blockSelector = '.alignfull, .alignwide, .alignleft, .alignright';
    const blocks = Array.from( sidecar.querySelectorAll( blockSelector ) ).filter( block => {
      return ! matches( block, '.nb-sidecar' );
    } );

    const targetBlocks = [];

    blocks.forEach( ( block, index) => {

      if ( !! block.closest( '.nb-sidecar-area--sidebar' ) ) {
        return;
      }

      if ( block === stickyElement ) {
        return;
      }

      if ( block.classList.contains( 'nb-supernova' ) ) {
        targetBlocks.push( ...Array.from( block.children ) );
      } else {
        targetBlocks.push( block );
      }
    } );

    return [ ...acc, [ stickyElement, targetBlocks ] ];
  }, [] );
};

// Observes every sticky item and every candidate block. Two observers per
// set, each driving the same precise doOverlap() re-evaluation:
// - a MOTION observer with fine thresholds fires while the sticky or a
//   block changes its visible fraction (pre-stuck phase, clipped elements);
// - a BAND observer watches the viewport cropped (negative rootMargin) to
//   the sticky's stuck band, so blocks crossing that band fire even while
//   fully visible — the case a plain visibility-ratio observer misses.
// Events drive the checks; there is no frame loop.
const observeOverlappingSets = ( overlappingSets ) => {
  if ( ! window.IntersectionObserver ) {
    return () => {};
  }

  const update = () => toggleOverlappingClassname( overlappingSets );
  const disconnects = [];

  overlappingSets.forEach( ( [ stickyElement, blocks ] ) => {
    const motionObserver = new window.IntersectionObserver( update, { threshold: IO_THRESHOLDS } );
    motionObserver.observe( stickyElement );
    blocks.forEach( block => motionObserver.observe( block ) );
    disconnects.push( () => motionObserver.disconnect() );

    const stickyRect = stickyElement.getBoundingClientRect();
    const stickyTop = parseFloat( window.getComputedStyle( stickyElement ).top ) || stickyRect.top || 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    const bottomInset = Math.max( 0, viewportHeight - ( stickyTop + stickyRect.height ) );

    const bandObserver = new window.IntersectionObserver( update, {
      rootMargin: `${ -Math.max( 0, stickyTop ) }px 0px ${ -bottomInset }px 0px`,
      threshold: 0,
    } );
    blocks.forEach( block => bandObserver.observe( block ) );
    disconnects.push( () => bandObserver.disconnect() );
  } );

  update();

  return () => disconnects.forEach( disconnect => disconnect() );
};

// We are comparing the sticky block with all content blocks; while they
// overlap we add a class that fades the sticky out and removes it from
// hit-testing (visibility + pointer-events live in the sidecar stylesheet).
export const handleOverlappingOnScroll = () => {

  domReady( () => {
    let teardown = () => {};

    const setup = () => {
      teardown();
      teardown = observeOverlappingSets( getOverlappingSets() );
    };

    setup();

    // Overlap sets follow DOM structure — re-collect via the SHARED
    // delegated observer (no second MutationObserver of our own), and
    // rebuild the band geometry when the viewport resizes.
    const scheduleSetup = debounce( setup, 200 );
    subscribeToDomChanges( scheduleSetup );
    window.addEventListener( 'resize', scheduleSetup );
  } );

};
