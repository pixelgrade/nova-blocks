import { addClass, removeClass, matches } from "./index";

export const BREAK_LEFT_CLASS = 'break-align-left';
export const BREAK_RIGHT_CLASS = 'break-align-right';

export const cleanupBreakClasses = () => {
  const breakSelector = `.${ BREAK_LEFT_CLASS }, .${ BREAK_RIGHT_CLASS }`;
  const breakNodeList = document.querySelectorAll( breakSelector );
  const breakElementsArray = Array.from( breakNodeList );
  breakElementsArray.forEach( element => element.classList.remove( BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS ) );
};

export const getAlignedSiblings = ( block, side ) => {
  const siblings = Array.from( block.parentElement.children ).filter( sibling => sibling !== block );
  return siblings.filter( sibling => { return sibling.classList.contains( `align${ side }` ) } );
};

export const getElementBreakClasses = ( block ) => {
  const sidebarBlocks = getAdjacentSidebarBlocks( block );
  const leftAlignedBlocks = getAlignedSiblings( block, 'left' );
  const rightAlignedBlocks = getAlignedSiblings( block, 'right' );
  const leftSidebarBlocks = sidebarBlocks.filter( obj => obj.side === 'left' ).map( obj => obj.element );
  const rightSidebarBlocks = sidebarBlocks.filter( obj => obj.side === 'right' ).map( obj => obj.element );
  const leftAlignedElements = leftAlignedBlocks.concat( leftSidebarBlocks );
  const rightAlignedElements = rightAlignedBlocks.concat( rightSidebarBlocks );

  const breakClasses = [];

  addClass( block, `${ BREAK_LEFT_CLASS } ${ BREAK_RIGHT_CLASS }` )

  if ( ! leftAlignedElements.some( alignedElement => doOverlap( alignedElement, block ) ) ) {
    breakClasses.push( BREAK_LEFT_CLASS );
  }

  if ( ! rightAlignedElements.some( alignedElement => doOverlap( alignedElement, block ) ) ) {
    breakClasses.push( BREAK_RIGHT_CLASS );
  }

  removeClass( block, `${ BREAK_LEFT_CLASS } ${ BREAK_RIGHT_CLASS }` )

  return breakClasses;
}

export const maybeAddBreakClassesToElement = ( block ) => {
  const breakClasses = getElementBreakClasses( block );

  breakClasses.forEach( breakClass => {
    block.classList.add( breakClass );
  } )
}

export const getAdjacentSidebarBlocks = ( block, sidebarBlocks = [] ) => {
  const sidecar = block.closest( '.nb-sidecar' );

  if ( ! sidecar ) {
    return sidebarBlocks;
  }

  const sidebar = Array.from( sidecar.children ).filter( child => child.classList.contains( 'nb-sidecar-area--sidebar' ) );

  if ( ! sidebar.length ) {
    return sidebarBlocks;
  }

  const newSidebarBlocks = Array.from( sidebar[0].children ).map( element => {
    return {
      element,
      side: sidecar.classList.contains( 'nb-sidecar--sidebar-left' ) ? 'left' : 'right'
    }
  } );

  return getAdjacentSidebarBlocks( sidecar.parentNode, sidebarBlocks.concat( newSidebarBlocks ) );
};

export const wouldOverlap = ( el1, el2 ) => {
  const el1Box = el1.getBoundingClientRect();
  const el2Box = el2.getBoundingClientRect();

  const el1Style = getComputedStyle( el1 );
  const el2Style = getComputedStyle( el2 );

  const el1MarginBottom = Math.max( parseInt( el1Style.marginBottom ), parseInt( el2Style.marginTop ) );
  const el2MarginBottom = Math.max( parseInt( el2Style.marginBottom ), parseInt( el1Style.marginTop ) );

  return !( el2Box.bottom + el2MarginBottom <= el1Box.top ||
            el2Box.top >= el1Box.bottom + el1MarginBottom );
};

// Helper function to check if two boxes
// are overlapping. This is different compared to wouldOverlap()
// because in this case height is not important.
export const doOverlap = ( el1, el2 ) => {

  const el1Box = el1.getBoundingClientRect();
  const el2Box = el2.getBoundingClientRect();

  const el1Style = getComputedStyle( el1 );
  const el2Style = getComputedStyle( el2 );

  const el1MarginBottom = Math.max( parseInt( el1Style.marginBottom ), parseInt( el2Style.marginTop ) );
  const el2MarginBottom = Math.max( parseInt( el2Style.marginBottom ), parseInt( el1Style.marginTop ) );
  const el1MarginRight = Math.max( parseInt( el1Style.marginRight ), parseInt( el2Style.marginLeft ) );
  const el2MarginRight = Math.max( parseInt( el2Style.marginRight ), parseInt( el1Style.marginLeft ) );

  return !( el2Box.bottom + el2MarginBottom <= el1Box.top ||
            el2Box.top >= el1Box.bottom + el1MarginBottom ||
            el2Box.right + el2MarginRight <= el1Box.left ||
            el2Box.left >= el1Box.right + el1MarginRight );

};

export const getContentBlocksArray = () => {
  const gridSelectors = [
    ".is-root-container",
    ".wp-block-query",
    ".wp-block-post-content",
    ".wp-site-blocks",
    ".wp-block-template-part",
    ".nb-content-layout-grid",
    ".nb-sidecar",
    ".nb-sidecar-area--content",
    ".nb-supernova",
  ];

  const mergedGridSelector = gridSelectors.join( ', ' );
  const grids = Array.from( document.querySelectorAll( mergedGridSelector ) );

  const alignedElements = grids.reduce( ( acc, curr ) => {
    const currentAlignedElements = Array.from( curr.children ).filter( element => {
      return matches( element, ".alignfull, .alignwide, .alignleft, .alignright" );
    } );
    return acc.concat( currentAlignedElements );
  }, [] );

  return alignedElements;
};
