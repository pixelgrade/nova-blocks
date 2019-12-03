import { parallaxInit } from "../../utils";

(function($, window, undefined) {


	$(function() {
		const $body = $( 'body' );
		const shouldHaveBullets = $body.is( '.novablocks-has-position-indicators' ) && $( '.novablocks-hero' ).length > 1;
		parallaxInit( 'novablocks-hero' );

		if ( shouldHaveBullets && typeof $.fn.bully !== 'undefined' ) {
			$( '.novablocks-hero' ).bully();
		}

		scrollButtonInit();
	})

	function scrollButtonInit() {
		const $scrollButton = $( '.novablocks-hero__indicator' );
		const $hero = $scrollButton.closest( '.novablocks-hero' );

		if ( $hero.length ) {
			$scrollButton.on( 'click', function() {
				const heroBox = $hero.get(0).getBoundingClientRect();
				const heroBoxTop = heroBox.y || heroBox.top;
				const scrollY = window.scrollY;

				window.scrollTo( {
					top: heroBoxTop + heroBox.height + scrollY,
					behavior: 'smooth'
				} );
			} );
		}
	}

})(jQuery, window);
