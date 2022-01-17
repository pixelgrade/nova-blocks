import {
  ready,
  addClass,
  removeClass,
  IS_EDITOR,
} from "@novablocks/utils";

import {
  computeColorSignal,
  getAbsoluteColorVariation,
  getSiteColorVariation,
  getSourceIndexFromPaletteId,
  addSiteVariationOffset,
  removeSiteVariationOffset,
  getColorSignalClassnames,
} from "./utils";

import {
  updateBlockSignal,
  updateAllBlocksSignal,
} from "./frontend/update-block-signal";

import { updateScrollIndicator } from "./frontend/update-scroll-indicator";

const updateColors = ( siteVariation ) => {
  updateAllBlocksSignal( siteVariation );
  updateScrollIndicator();
}

ready( () => {

  if ( IS_EDITOR ) {
    return;
  }

  // Get the Palette Basis Offset value to use it as the top most reference variation
  const siteVariation = getSiteColorVariation();

  updateColors( siteVariation );

  // If we are inside the Customize Preview iframe, update the palette variation for all blocks
  // every time the Palette Basis Offset value is changed
  if ( parent?.wp?.customize ) {
    parent.wp.customize( 'sm_site_color_variation', setting => {
      setting.bind( ( newValue, oldValue ) => {
        updateColors( newValue );
      } );
    } )
  }

} );
