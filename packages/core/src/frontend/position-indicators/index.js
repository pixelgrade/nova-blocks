import $ from 'jquery';

const $blocks = $( '[data-position-indicators]' ).filter( ( i, block ) => {
  return !! block.dataset.positionIndicators;
} );

const POSITION_INDICATORS_IS_ENABLED = $blocks.length > 1 && $blocks.data( 'position-indicators' ) === 1;

if ( POSITION_INDICATORS_IS_ENABLED && typeof $.fn.bully !== 'undefined' ) {
  $blocks.bully();
}

