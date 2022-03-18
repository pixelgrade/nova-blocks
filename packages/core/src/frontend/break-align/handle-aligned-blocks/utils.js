import { matches } from "@novablocks/utils";

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
