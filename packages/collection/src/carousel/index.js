import { onBeforeSlideChange } from './utils';

( function( $, window, undefined ) {

  const $carousels = $( '.supernova-collection__layout--carousel' );

  $carousels.each( function( index, slider ) {
    const $carousel = $( slider );
    const $block = $carousel.closest( '[data-layout-style="carousel"]' );
    const attributes = $block.data();

    const SLICK_OPTIONS = {
//      rows: 0,
      useTransform: false, // to allow parallax effect inside
      slidesToShow: attributes.columns,
      dots: attributes.showPagination === 1,
      variableWidth: attributes.carouselLayout === 'variable',
      customPaging: ( slick, index ) => {
        return '<a>' + ( index + 1 ) + '</a>';
      },
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

    if ( attributes.cardLayout === 'stacked' && attributes.columns === 1 ) {
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

} )( jQuery, window )

