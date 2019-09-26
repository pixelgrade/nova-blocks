import { parallaxInit } from "../../utils";

(function($, window, undefined) {


	$(function() {
		const $body = $( 'body' );
		parallaxInit( 'novablocks-hero' );

		if ( $body.is( '.novablocks-has-position-indicators' ) && typeof $.fn.bully !== 'undefined' ) {
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
				const scrollY = window.scrollY;

				window.scrollTo( {
					top: heroBox.y + heroBox.height + scrollY,
					behavior: 'smooth'
				} );
			} );
		}
	}

})(jQuery, window);
