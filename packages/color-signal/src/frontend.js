import {
  IS_EDITOR,
  registerFrontendModule,
} from "@novablocks/utils";

import {
  getSiteColorVariation,
} from "./utils";

import {
  updateAllBlocksSignal,
} from "./frontend/update-block-signal";

import { updateScrollIndicator } from "./frontend/update-scroll-indicator";

const updateColors = ( siteVariation ) => {
  updateAllBlocksSignal( siteVariation );
  updateScrollIndicator();
};

// Get the Palette Basis Offset value to use it as the top most reference variation
const siteVariation = getSiteColorVariation();

// A frontend module (nova-blocks#661): torn down and set up again for every
// AJAX page swap instead of re-executing this script.
registerFrontendModule( 'novablocks/color-signal', ( scope ) => {

  scope.on( window, 'nb:updateColors', () => {
    updateColors( siteVariation );
  } );

  scope.ready( () => {

    if ( IS_EDITOR ) {
      return;
    }

    updateColors( siteVariation );

    // If we are inside the Customize Preview iframe, update the palette variation for all blocks
    // every time the Palette Basis Offset value is changed
    if ( parent?.wp?.customize ) {
      parent.wp.customize( 'sm_site_color_variation', setting => {
        const onChange = ( newValue ) => {
          const newSiteVariation = parseInt( newValue, 10 );
          updateColors( newSiteVariation );
        };

        setting.bind( onChange );
        scope.add( () => setting.unbind?.( onChange ) );
      } )
    }

  } );

} );
