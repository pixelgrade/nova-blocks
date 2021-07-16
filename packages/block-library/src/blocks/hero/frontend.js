import '@novablocks/doppler/frontend';

(function($, window, undefined) {

	let windowScrollY;
	let scrollButtonHidden = false;

	const $scrollButton = $( '.novablocks-hero__indicator' ),
        $scrollButtonMiddle = $scrollButton.filter( '.novablocks-hero__indicator--middle' ),
        SCROLL_BUTTON_HIDDEN_CLASS = 'novablocks-hero__indicator--hidden';

	bulletsInit();
	scrollButtonInit();
	updateScroll();

	$( window ).on( 'scroll', updateScroll );

	function updateScroll() {
		windowScrollY = window.scrollY;

    hideScrollButton( windowScrollY );
	}

	function bulletsInit() {
		const $body = $( 'body' );
		const shouldHaveBullets = $body.is( '.novablocks-has-position-indicators' ) && $( '.novablocks-hero' ).length > 1;

		if ( shouldHaveBullets && typeof $.fn.bully !== 'undefined' ) {
			$( '.novablocks-hero' ).bully();
		}
	}

	function hideScrollButton( scrollY ) {

	  const hideScrollButton = scrollY > 200;

	  if ( hideScrollButton !== scrollButtonHidden ) {
      $scrollButtonMiddle.toggleClass(SCROLL_BUTTON_HIDDEN_CLASS);
      scrollButtonHidden = hideScrollButton;
    }
	}

	function scrollButtonInit() {
		const $hero = $scrollButton.closest( '.novablocks-hero' );

		if ( $hero.length ) {
			$scrollButton.on( 'click', function() {
				const heroBox = $hero.get(0).getBoundingClientRect();
				const heroBoxTop = heroBox.y || heroBox.top;

				window.scrollTo( {
					top: heroBoxTop + heroBox.height + windowScrollY,
					behavior: 'smooth'
				} );
			} );
		}
	}

})(jQuery, window);
