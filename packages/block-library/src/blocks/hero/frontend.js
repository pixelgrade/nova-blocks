(function($, window, undefined) {

	let windowScrollY;
	let scrollButtonHidden = false;

	const $scrollButton = $( '.novablocks-hero__indicator' );

	bulletsInit();
	scrollButtonInit();
	updateScroll();

	$( window ).on( 'scroll', updateScroll );

	function updateScroll() {
		windowScrollY = window.scrollY;

		if ( windowScrollY > 200 ) {
			hideScrollButton();
		}
	}

	function bulletsInit() {
		const $body = $( 'body' );
		const shouldHaveBullets = $body.is( '.novablocks-has-position-indicators' ) && $( '.novablocks-hero' ).length > 1;

		if ( shouldHaveBullets && typeof $.fn.bully !== 'undefined' ) {
			$( '.novablocks-hero' ).bully();
		}
	}

	function hideScrollButton() {

		if ( scrollButtonHidden ) {
			return;
		}

		$scrollButton.filter( '.novablocks-hero__indicator--middle' ).addClass( 'novablocks-hero__indicator--hidden' );
		scrollButtonHidden = true;

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
