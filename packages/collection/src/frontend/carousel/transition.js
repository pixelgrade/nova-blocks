const TRANSITION_DURATION = 1000;
const TRANSITION_EASING = 'easeInOutCirc';
const FOREGROUND_SELECTOR = '.nb-supernova-item__content';
const BACKGROUND_SELECTOR = '.nb-supernova-item__media-wrapper';

const moveLeft = ( element, value, use3D ) => {

  if ( use3D ) {
    element.style.transform = `translate3d(${ value }px,0,0)`;
    return;
  }

  element.style.left = `${ value }px`;

}

const transition = ( $current, $next, sign = 1, use3D = true ) => {
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
          moveLeft( next, slideWidth * tweenValue * sign, use3D );
        }

        if ( nextFg ) {
          moveLeft( nextFg, ( - slideWidth ) * tweenValue * sign, use3D );
        }

        if ( nextBg ) {
          moveLeft( nextBg, ( move - slideWidth ) * tweenValue * sign, use3D );
        }

        if ( currentBg ) {
          moveLeft( currentBg, ( - move ) * ( 1 - tweenValue ) * sign, use3D );
        }

      const resize = new CustomEvent( 'nb:slick-update' );
      window.dispatchEvent( resize );
    },
    complete: function() {
      $current.removeClass( 'slick-slide--current' );
      $next.removeClass( 'slick-slide--next' );
    }
  } );
};

export default transition;
