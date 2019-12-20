import { parallaxInit } from "../../components/with-parallax/util";

(function($, window, undefined) {

	let $heroes = $( '.novablocks-hero' );
	let windowScrollY;

	parallaxInit( $heroes );
	bulletsInit();
	scrollButtonInit();
	updateScroll();

	$( window ).on( 'scroll', updateScroll );

	function updateScroll() {
		windowScrollY = window.scrollY;
	}

	function bulletsInit() {
		const $body = $( 'body' );
		const shouldHaveBullets = $body.is( '.novablocks-has-position-indicators' ) && $( '.novablocks-hero' ).length > 1;

		if ( shouldHaveBullets && typeof $.fn.bully !== 'undefined' ) {
			$( '.novablocks-hero' ).bully();
		}
	}

	function scrollButtonInit() {
		const $scrollButton = $( '.novablocks-hero__indicator' );
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
