import $ from 'jquery';
import '@novablocks/collection/frontend';

$( function() {

//  .js-shape-modeling-target
  $( '[data-shape-modeling-target]' ).each( ( i, target ) => {
    const $target = $( target );
    const $mask = $target.closest( '.blob-mix__mask' );
  } );

} );
