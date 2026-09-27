import $ from 'jquery';
import { registerFrontendModule } from '@novablocks/utils';

// A frontend module (nova-blocks#661). The bully plugin keeps page state
// (bullets, a frame loop, window listeners): its destroy() ends that state
// on teardown, and the next `.bully()` call starts a fresh instance.
registerFrontendModule( 'novablocks/core/position-indicators', ( scope ) => {

  if ( typeof $.fn.bully === 'undefined' ) {
    return;
  }

  const $blocks = $( '[data-position-indicators]' ).filter( ( i, block ) => {
    return !! block.dataset.positionIndicators;
  } );

  if ( $blocks.length > 1 ) {
    $blocks.bully();
  }

  scope.add( () => {
    if ( typeof $.fn.bully?.destroy === 'function' ) {
      $.fn.bully.destroy();
    }
  } );

} );
