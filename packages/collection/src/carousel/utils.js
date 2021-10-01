import $ from 'jquery';
import transition from './transition';

export const hasFixedBackground = ( $slide ) => {
  let fixed = false;

  if ( $slide.find( '.novablocks-doppler__target' ).css( 'position' ) === 'fixed' ) {
    return true;
  }

  return fixed;
}

export const onBeforeSlideChange = ( event, slick, currentSlide, nextSlide ) => {
  const $currentSlide = $( slick.$slides[ currentSlide ] );
  const $nextSlide = $( slick.$slides[ nextSlide ] );
  const direction = getDirection( slick, currentSlide, nextSlide );

  transition( $currentSlide, $nextSlide, direction );
}

export const getDirection = ( slick, currentSlide, nextSlide ) => {

  if ( slick.slideCount > 2 ) {

    if ( currentSlide === 0 && nextSlide === slick.slideCount - 1 ) {
      return - 1;
    }

    if ( nextSlide < currentSlide && ( nextSlide !== 0 || currentSlide !== slick.slideCount - 1 ) ) {
      return - 1;
    }

  }

  return 1;
}
