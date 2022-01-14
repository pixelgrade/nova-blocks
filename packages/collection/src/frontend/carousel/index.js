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

    const SLICK_OPTIONS = {
//      rows: 0,
      useTransform: false, // to allow parallax effect inside
      slidesToShow: attributes.columns,
      dots: attributes.showPagination === 1,
      dotsClass: `slick-dots ${PALETTE_CLASS} ${PALETTE_VARIATION_CLASS} ${CONTENT_SIGNAL_CLASS}`,
      arrows: attributes.showArrows === 1,
      prevArrow: `<button class="slick-prev ${ PALETTE_CLASS } ${ PALETTE_VARIATION_CLASS } ${ CONTENT_SIGNAL_CLASS }" aria-label="Previous" type="button">Previous</button>`,
      nextArrow: `<button class="slick-next ${ PALETTE_CLASS } ${ PALETTE_VARIATION_CLASS } ${ CONTENT_SIGNAL_CLASS }" aria-label="Next" type="button">Next</button>`,
      variableWidth: attributes.carouselLayout === 'variable' || attributes.carouselLayout === 'content',
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            centerMode: true,
            infinite: true,
            slidesToShow: 1,
            variableWidth: false,
            centerPadding: '30px',
          }
        },
      ]
    }

    if ( attributes.cardLayout === 'stacked' &&
         attributes.columns === 1 &&
         attributes.carouselLayout !== 'variable' ) {
      Object.assign( SLICK_OPTIONS, {
//        rows: 0,
        // for simpler reveal transitions between slides
        fade: true,
        speed: 1000,
      } )

      $carousel.on( 'beforeChange', onBeforeSlideChange );
    }

    if ( $carousel.children().length > 1 ) {
      $carousel.slick( SLICK_OPTIONS );
    }

  } );

}
