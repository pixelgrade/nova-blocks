import domReady from "@wordpress/dom-ready";
import { doOverlap, matches, onScrollRAF } from "@novablocks/utils";

const HIDDEN_BLOCK_CLASS = 'novablocks-hidden-block';

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

// We are comparing sticky block top and bottom
// with all content blocks, and if overlaps on scroll,
// we are adding a class, which we will use to add opacity.
export const handleOverlappingOnScroll = () => {

  domReady( () => {
    const overlappingSets = getOverlappingSets();

    onScrollRAF( () => {
      toggleOverlappingClassname( overlappingSets );
    } );
  } );

};
