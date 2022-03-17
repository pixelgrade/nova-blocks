import domReady from "@wordpress/dom-ready";
import { debounce } from "@novablocks/utils";

import {
  getContentBlocksArray,
  makeSidebarsNotReady,
  makeSidebarsReady,
} from "./utils";

import {
  getAdjacentSidebarBlocks,
  maybeAddBreakClassesToElement,
  wouldOverlap,
  cleanupBreakClasses,
} from "@novablocks/utils";

export const maybeAddBreakClasses = () => {
  const contentBlocks = getContentBlocksArray();

  contentBlocks.forEach( maybeAddBreakClassesToElement );
};

// We want to listen to Content Width setting
// change inside Customizer Preview,
// so we can break wide and full elements
// if there is not enough available space.
const handleCustomizerChanges = () => {

  const options = [
    'sm_site_container_width',
    'sm_content_inset',
    'sm_spacing_level'
  ];

  if ( !! window?.wp?.customize ) {
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

  domReady( () => {
    resetAlignedBlocks();
    handleCustomizerChanges();
  } );

  window.addEventListener( 'resize', onResize );

};
