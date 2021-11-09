import { below } from "@novablocks/utils";

import { doBoxesOverlap } from "./utils";

const HIDDEN_BLOCK_CLASS = 'novablocks-hidden-block';

// This function will handle sticky block
// behaviour on scroll.
export const toggleOverlappingClassname = ( overlappingSets ) => {

  const stickyElements = overlappingSets.map( overlappingSet => {
    const [ stickyElement, blocks ] = overlappingSet;

    const overlap = blocks.some( block => {
      const stickyBox = stickyElement.getBoundingClientRect();
      const blockBox = block.getBoundingClientRect();
      return doBoxesOverlap( blockBox, stickyBox );
    } );

    return ( { stickyElement, overlap } );
  } )

  stickyElements.forEach( ( { stickyElement, overlap } ) => {

    if ( overlap ) {
      stickyElement.classList.add( HIDDEN_BLOCK_CLASS );
    } else {
      stickyElement.classList.remove( HIDDEN_BLOCK_CLASS );
    }

  } );

}

export const getOverlappingSets = () => {
  const sidebars = Array.from( document.querySelectorAll( '.nb-sidecar--sticky-sidebar > .nb-sidecar-area--sidebar' ) );

  return sidebars.reduce( ( acc, sidebar ) => {
    const sidecar = sidebar.parentElement;
    const stickyElement = sidebar.lastElementChild;
    const blockSelector = '.nb-sidecar-area--content > :is(.alignfull, .alignwide, .alignleft, .alignright)';
    const blocks = Array.from( sidecar.querySelectorAll( blockSelector ) );

    return [ ...acc, [ stickyElement, blocks ] ];
  }, [] );
}

// We are comparing sticky block top and bottom
// with all content blocks, and if overlaps on scroll,
// we are adding a class, which we will use to add opacity.
export const handleOverlappingOnScroll = () => {

  window.addEventListener( 'DOMContentLoaded', () => {
    const overlappingSets = getOverlappingSets();

    let scrollY = window.scrollY;
    let lastScrollY = -1;

    window.addEventListener( 'scroll', () => {
      scrollY = window.scrollY;
    } );

    const updateLoop = () => {

      if ( lastScrollY !== scrollY ) {
        toggleOverlappingClassname( overlappingSets );
      }

      lastScrollY = scrollY;

      requestAnimationFrame( updateLoop );
    }

    requestAnimationFrame( updateLoop );
  } );

}
