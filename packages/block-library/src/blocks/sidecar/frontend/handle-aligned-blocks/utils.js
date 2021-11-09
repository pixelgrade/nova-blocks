export const getContentBlocksArray = () => {
  const selector = '.nb-sidecar-area--content > :is( .alignfull, .alignwide, .alignleft, .alignright )';
  const nodelist = document.querySelectorAll( selector );
  return Array.from( nodelist );
}

export const wouldOverlap = ( elem, collider ) => {

  const elemBox = elem.getBoundingClientRect();
  const colliderBox = collider.getBoundingClientRect();

  const overlap = colliderBox.top + colliderBox.height <= elemBox.top ||
                  colliderBox.top >= elemBox.top + elemBox.height;

  return !overlap;
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
