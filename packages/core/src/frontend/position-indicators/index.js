import $ from 'jquery';

const $blocks = $( '[data-position-indicators]' ).filter( ( i, block ) => {
  return !! block.dataset.positionIndicators;
} );

if ( $blocks.length > 1 && typeof $.fn.bully !== 'undefined' ) {
  $blocks.bully();
}

