import { matches } from "@novablocks/utils";

export const getContentBlocksArray = () => {
  const gridSelectors = [
    ".wp-block-query",
    ".wp-block-post-content",
    ".wp-site-blocks",
    ".wp-block-template-part",
    ".nb-content-layout-grid",
    ".nb-sidecar",
    ".nb-sidecar-area--content",
    ".supernova",
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




export const makeSidebarsNotReady = () => {
  const sidebars = Array.from( document.querySelectorAll( '.nb-sidecar--sidebar-ready' ) );
  sidebars.forEach( sidebar => {
    sidebar.classList.remove( 'nb-sidecar--sidebar-ready' );
  } );
};

export const makeSidebarsReady = () => {
  const sidebars = Array.from( document.querySelectorAll( '.nb-sidecar--sticky-sidebar' ) );
  sidebars.forEach( sidebar => {
    sidebar.classList.add( 'nb-sidecar--sidebar-ready' );
  } );
};
