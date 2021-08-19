const TRANSITION_DURATION = 1000;
const TRANSITION_EASING = 'easeInOutCirc';
const FOREGROUND_SELECTOR = '.supernova-card__content';

const transition = ( $current, $next, sign = 1 ) => {
  const slideWidth = $current.outerWidth();
  const move = 300;

  const next = $next.children().get( 0 );
  const nextFg = $next.find( FOREGROUND_SELECTOR ).get( 0 );

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
    },
    progress: function( elements, percentComplete, remaining, tweenValue, activeCall ) {
        next.style.left = slideWidth * tweenValue + 'px';
        nextFg.style.left = ( move - slideWidth ) * tweenValue + 'px';
    },
    complete: function() {
      $current.removeClass( 'slick-slide--current' );
      $next.removeClass( 'slick-slide--next' );
    }
  } );
}

export default transition;
