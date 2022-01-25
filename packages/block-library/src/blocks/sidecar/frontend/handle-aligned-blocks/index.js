import { debounce } from "@novablocks/utils";

import {
  getContentBlocksArray,
  getAdjacentSidebarBlocks,
  makeSidebarsNotReady,
  makeSidebarsReady,
  wouldOverlap,
} from "./utils";

const BREAK_LEFT_CLASS = 'break-align-left';
const BREAK_RIGHT_CLASS = 'break-align-right';

const cleanupBreakClasses = () => {
  const breakSelector = `.${ BREAK_LEFT_CLASS }, .${ BREAK_RIGHT_CLASS }`;
  const breakNodeList = document.querySelectorAll( breakSelector );
  const breakElementsArray = Array.from( breakNodeList );
  breakElementsArray.forEach( element => element.classList.remove( BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS ) );
};

const getAlignedSiblings = ( block, classname ) => {
  const siblings = Array.from( block.parentElement.children ).filter( sibling => sibling !== block );
  return siblings.filter( sibling => { return sibling.classList.contains( classname ) } );
};

const maybeAddBreakClasses = () => {
  const contentBlocks = getContentBlocksArray();

  contentBlocks.forEach( block => {
    const sidebarBlocks = getAdjacentSidebarBlocks( block );
    const leftAlignedBlocks = getAlignedSiblings( block, 'alignleft' );
    const rightAlignedBlocks = getAlignedSiblings( block, 'alignright' );
    const leftSidebarBlocks = sidebarBlocks.filter( obj => obj.side === 'left' ).map( obj => obj.element );
    const rightSidebarBlocks = sidebarBlocks.filter( obj => obj.side === 'right' ).map( obj => obj.element );
    const leftAlignedElements = leftAlignedBlocks.concat( leftSidebarBlocks );
    const rightAlignedElements = rightAlignedBlocks.concat( rightSidebarBlocks );

    if ( ! leftAlignedElements.some( alignedElement => wouldOverlap( alignedElement, block ) ) ) {
      block.classList.add( BREAK_LEFT_CLASS );
    }

    if ( ! rightAlignedElements.some( alignedElement => wouldOverlap( alignedElement, block ) ) ) {
      block.classList.add( BREAK_RIGHT_CLASS );
    }
  } );
};

// We want to listen to Content Width setting
// change inside Customizer Preview,
// so we can break wide and full elements
// if there is not enough available space.
function handleCustomizerChanges() {

  const options = [
    'sm_site_container_width',
    'sm_content_inset',
    'sm_spacing_level'
  ];

  if ( wp.customize !== undefined ) {
    options.forEach( option => {
      wp.customize( option, setting => {
        setting.bind( debounce( handleAlignedBlocks, 200 ) );
      } )
    } )
  }
}

export const resetAlignedBlocks = () => {
  cleanupBreakClasses();
  makeSidebarsNotReady();
  maybeAddBreakClasses();
  makeSidebarsReady();
};

export const handleAlignedBlocks = () => {

  const onResize = debounce( resetAlignedBlocks, 200 );

  window.addEventListener( 'DOMContentLoaded', () => {
    resetAlignedBlocks();
    handleCustomizerChanges();
  } );

  window.addEventListener( 'resize', onResize );

};
