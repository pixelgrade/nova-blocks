import $ from 'jquery';

const $scrollButtons = $( '.nb-scroll-indicator' ).filter( ( i, obj ) => {
  return $( obj ).closest( '[data-scroll-indicator]' ).length;
} );

const SCROLL_BUTTON_HIDDEN_CLASS = 'nb-scroll-indicator--hidden';

(function() {

  if ( ! $scrollButtons.length ) {
    return;
  }

  let windowScrollY;

  $scrollButtons.each( ( i, obj ) => {
    const $scrollButton = $( obj );
    const $hero = $scrollButton.closest( '[data-scroll-indicator]' );
    const isMiddle = $scrollButton.hasClass( '.nb-scroll-indicator--middle' );
    const heroBox = $hero.get( 0 ).getBoundingClientRect();

    $scrollButton.data( 'is-middle', isMiddle );
    $scrollButton.data( 'hero-box', heroBox );

    $scrollButton.on( 'click', function() {
      const heroBoxTop = heroBox.y || heroBox.top;

      window.scrollTo( {
        top: heroBoxTop + heroBox.height,
        behavior: 'smooth'
      } );
    } );
  } );

  updateScroll();

  $( window ).on( 'scroll', updateScroll );

  function updateScroll() {
    windowScrollY = window.scrollY;

    hideButtonOnScroll( windowScrollY );
  }

  function hideButtonOnScroll( scrollY ) {

    $scrollButtons.each( ( i, obj ) => {
      const $scrollButton = $( obj );
      const heroBox = $scrollButton.data( 'hero-box' );

      const heroBoxTop = heroBox.y || heroBox.top;
      const hideScrollButton = scrollY > heroBoxTop + 200;
      const scrollButtonHidden = $scrollButton.data( 'is-hidden' );

      if ( ! $scrollButton.data( 'is-middle' ) ) {
        return;
      }

      if ( hideScrollButton !== scrollButtonHidden ) {
        $scrollButton.toggleClass( SCROLL_BUTTON_HIDDEN_CLASS, hideScrollButton );
        $scrollButton.data( 'is-hidden', hideScrollButton );
      }
    } );

  }

})();
