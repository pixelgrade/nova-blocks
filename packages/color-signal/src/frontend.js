import {
  ready,
  IS_EDITOR,
} from "@novablocks/utils";

import {
  getSiteColorVariation,
} from "./utils";

import {
  updateAllBlocksSignal,
} from "./frontend/update-block-signal";

import { updateScrollIndicator } from "./frontend/update-scroll-indicator";

const updateColors = ( siteVariation ) => {
  console.log( siteVariation );
  updateAllBlocksSignal( siteVariation );
  updateScrollIndicator();
};

// Get the Palette Basis Offset value to use it as the top most reference variation
const siteVariation = getSiteColorVariation();

window.addEventListener( 'nb:updateColors', () => {
  updateColors( siteVariation );
} );

ready( () => {

  if ( IS_EDITOR ) {
    return;
  }

  updateColors( siteVariation );

  // If we are inside the Customize Preview iframe, update the palette variation for all blocks
  // every time the Palette Basis Offset value is changed
  if ( parent?.wp?.customize ) {
    parent.wp.customize( 'sm_site_color_variation', setting => {
      setting.bind( ( newValue, oldValue ) => {
        const newSiteVariation = parseInt( newValue, 10 );
        updateColors( newSiteVariation );
      } );
    } )
  }

} );
