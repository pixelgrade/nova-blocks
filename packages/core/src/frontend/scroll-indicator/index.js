import $ from 'jquery';

const $scrollButtons = $( '.nb-scroll-indicator' ).filter( ( i, obj ) => {
  return $( obj ).closest( '[data-scroll-indicator-block]' ).length;
} );

const SCROLL_BUTTON_HIDDEN_CLASS = 'nb-scroll-indicator--hidden';

(function() {

  if ( ! $scrollButtons.length ) {
    return;
  }

  let windowScrollY;

  $scrollButtons.each( ( i, obj ) => {
    const $scrollButton = $( obj );
    const $hero = $scrollButton.closest( '[data-scroll-indicator-block]' );
    const isMiddle = $scrollButton.hasClass( '.nb-scroll-indicator--middle' );
    const heroBox = $hero.get( 0 ).getBoundingClientRect();

    obj.dataset.isMiddle = isMiddle;
    obj.dataset.heroBox = JSON.stringify( heroBox );

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
      const heroBox = JSON.parse( obj.dataset.heroBox );

      const heroBoxTop = heroBox.top;
      const hideScrollButton = scrollY > heroBoxTop + 200;
      const scrollButtonHidden = $scrollButton.data( 'is-hidden' );

      if ( ! obj.dataset.isMiddle ) {
        return;
      }

      if ( hideScrollButton !== scrollButtonHidden ) {
        $scrollButton.toggleClass( SCROLL_BUTTON_HIDDEN_CLASS, hideScrollButton );
        $scrollButton.data( 'is-hidden', hideScrollButton );
      }
    } );

  }

})();
