(
  function( $, window, undefined ) {
    
    let windowScrollY;
    let scrollButtonHidden = false;

    const $scrollButton = $( '.nb-collection__scroll-indicator' ),
      $scrollButtonMiddle = $scrollButton.filter( '.nb-collection__scroll-indicator--middle' ),
      SCROLL_BUTTON_HIDDEN_CLASS = 'nb-collection__scroll-indicator--hidden';

    if ( !$scrollButton.length ) {
      return;
    }

    scrollButtonInit();
    updateScroll();

    $( window ).on( 'scroll', updateScroll );

    function updateScroll() {
      windowScrollY = window.scrollY;

      hideScrollButton( windowScrollY );
    }

    function hideScrollButton( scrollY ) {

      const hideScrollButton = scrollY > 200;

      if ( hideScrollButton !== scrollButtonHidden ) {
        $scrollButtonMiddle.toggleClass( SCROLL_BUTTON_HIDDEN_CLASS );
        scrollButtonHidden = hideScrollButton;
      }
    }

    function scrollButtonInit() {
      const $hero = $scrollButton.closest( '.supernova' );

      if ( $hero.length ) {
        $scrollButton.on( 'click', function() {
          const heroBox = $hero.get( 0 ).getBoundingClientRect();
          const heroBoxTop = heroBox.y || heroBox.top;

          window.scrollTo( {
            top: heroBoxTop + heroBox.height + windowScrollY,
            behavior: 'smooth'
          } );
        } );
      }
    }

  }
)( jQuery, window );
