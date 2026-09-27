import "@novablocks/collection/frontend";
import { debounce, registerFrontendModule, resizeDropcap } from "@novablocks/utils";

// A frontend module (nova-blocks#661): torn down and set up again for every
// AJAX page swap instead of re-executing this script.
registerFrontendModule( 'novablocks/supernova', ( scope ) => {
  const dropcaps = Array.from( document.querySelectorAll( '.nb-supernova-item__dropcap' ) );

  const resizeAllDropcaps = () => {
    dropcaps.forEach( resizeDropcap );
  }

  const debouncedResizeAllDropcaps = debounce( scope.bind( resizeAllDropcaps ), 100 );

  scope.ready( resizeAllDropcaps );

  scope.on( window, 'resize', debouncedResizeAllDropcaps );
  scope.on( window, 'nb:layout', resizeAllDropcaps );
} );
