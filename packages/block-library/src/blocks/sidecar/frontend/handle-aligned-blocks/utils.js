export const getContentBlocksArray = () => {
  const selector = '.nb-sidecar-area--content > :is( .alignfull, .alignwide, .alignleft, .alignright )';
  const nodelist = document.querySelectorAll( selector );
  return Array.from( nodelist );
}

export const wouldOverlap = ( el1, el2 ) => {
  const el1Box = el1.getBoundingClientRect();
  const el2Box = el2.getBoundingClientRect();

  const el1Style = getComputedStyle( el1 );
  const el2Style = getComputedStyle( el2 );

  const el1MarginBottom = Math.max( parseInt( el1Style.marginBottom ), parseInt( el2Style.marginTop ) );
  const el2MarginBottom = Math.max( parseInt( el2Style.marginBottom ), parseInt( el1Style.marginTop ) );

  return !( el2Box.bottom + el2MarginBottom <= el1Box.top ||
            el2Box.top >= el1Box.bottom + el1MarginBottom );
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
}

export const makeSidebarsNotReady = () => {
  const sidebars = Array.from( document.querySelectorAll( '.nb-sidecar--sidebar-ready' ) );
  sidebars.forEach( sidebar => {
    sidebar.classList.remove( 'nb-sidecar--sidebar-ready' );
  } );
}

export const makeSidebarsReady = () => {
  const sidebars = Array.from( document.querySelectorAll( '.nb-sidecar--sticky-sidebar' ) );
  sidebars.forEach( sidebar => {
    sidebar.classList.add( 'nb-sidecar--sidebar-ready' );
  } );
}
