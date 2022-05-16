import $ from 'jquery';
import { IS_CUSTOMIZER, IS_EDITOR } from "@novablocks/utils";
import { onBeforeSlideChange } from './utils';

// on document ready
$( () => {
  initializeCarousels();
} );

const initializeCarousels = () => {

  if ( IS_EDITOR || IS_CUSTOMIZER ) {
    return;
  }

  const $carousels = $( '.nb-collection__layout--carousel' );

  $carousels.each( function( index, slider ) {
    const $carousel = $( slider );
    const $block = $carousel.closest( '[data-layout-style="carousel"]' );
    const attributes = $block.data();
    const PALETTE_CLASS = `sm-palette-${ attributes.palette }`;
    const PALETTE_VARIATION_CLASS = `sm-variation-${ attributes.contentPaletteVariation }`;
    const CONTENT_SIGNAL_CLASS = `sm-color-signal-${ attributes.contentColorSignal }`;

    const PREV_ARROW = `<button class="slick-prev ${ PALETTE_CLASS } ${ PALETTE_VARIATION_CLASS } ${ CONTENT_SIGNAL_CLASS }" aria-label="Previous" type="button">Previous</button>`;
    const NEXT_ARROW = `<button class="slick-next ${ PALETTE_CLASS } ${ PALETTE_VARIATION_CLASS } ${ CONTENT_SIGNAL_CLASS }" aria-label="Next" type="button">Next</button>`;
    const variableWidth = attributes.carouselLayout === 'variable' || attributes.carouselLayout === 'content';
    const showDots = attributes.showPagination === 1;
    const showArrows = attributes.showArrows === 1;

    const SLICK_OPTIONS = {
      dotsClass: `slick-dots ${ PALETTE_CLASS } ${ PALETTE_VARIATION_CLASS } ${ CONTENT_SIGNAL_CLASS }`,
      prevArrow: PREV_ARROW,
      nextArrow: NEXT_ARROW,
      customPaging: function(slider, i) {
        const index = i + 1;
        const sIndex = index <= 9 ? `<span>0</span>${index}` : index;
        return $('<button type="button" />').html( sIndex );
      },
      mobileFirst: true,
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 'calc(var(--nb-sidecar-sides) - var(--nb-grid-spacing) / 4)',
      variableWidth: false,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: showDots,
            arrows: showArrows,
            slidesToShow: variableWidth ? 1 : attributes.columns,
            centerMode: false,
            variableWidth: variableWidth,
          }
        }
      ]
    };

    if ( attributes.cardLayout === 'stacked' &&
         attributes.columns === 1 &&
         attributes.carouselLayout !== 'variable' ) {
      Object.assign( SLICK_OPTIONS, {
        // for simpler reveal transitions between slides
        fade: true,
        speed: 1000,
      } );

      $carousel.on( 'beforeChange', onBeforeSlideChange );
    }

    if ( $carousel.children().length > 1 ) {
      $carousel.slick( SLICK_OPTIONS );
    }

  } );

};
