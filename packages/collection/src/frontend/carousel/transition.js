const TRANSITION_DURATION = 1000;
const TRANSITION_EASING = 'easeInOutCirc';
const FOREGROUND_SELECTOR = '.supernova-item__content';
const BACKGROUND_SELECTOR = '.supernova-item__media-wrapper';

const transition = ( $current, $next, sign = 1 ) => {
  const slideWidth = $current.outerWidth();

  const move = 300;

  const next = $next.children().get( 0 );
  const nextFg = $next.find( FOREGROUND_SELECTOR ).get( 0 );
  const nextBg = $next.find( BACKGROUND_SELECTOR ).get( 0 );

  const currentBg = $current.find( BACKGROUND_SELECTOR ).get( 0 );

  $current.velocity( {
    tween: [ 0, 1 ]
  }, {
    duration: TRANSITION_DURATION,
    easing: TRANSITION_EASING,
    begin: function() {
      // make sure the sliders we're animating between have the correct zIndex
      $current.addClass( 'slick-slide--current' );
      $next.addClass( 'slick-slide--next' );
      next.style.position = 'relative';

      if ( nextFg ) {
        nextFg.style.position = 'relative';
      }
    },
    progress: function( elements, complete, remaining, start, tweenValue ) {

        if ( next ) {
          next.style.transform = `translate3d(${ slideWidth * tweenValue * sign }px,0,0)`;
        }

        if ( nextFg ) {
          nextFg.style.transform = `translate3d(${ ( - slideWidth ) * tweenValue * sign }px,0,0)`;
        }

        if ( nextBg ) {
          nextBg.style.transform = `translate3d(${ ( move - slideWidth ) * tweenValue * sign }px,0,0)`;
        }

        if ( currentBg ) {
          currentBg.style.transform = `translate3d(${ ( - move ) * ( 1 - tweenValue ) * sign }px,0,0)`;
        }
    },
    complete: function() {
      $current.removeClass( 'slick-slide--current' );
      $next.removeClass( 'slick-slide--next' );
    }
  } );
};

export default transition;
