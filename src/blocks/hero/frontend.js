import { parallaxInit } from "../../utils";

(function($, window, undefined) {


	$(function() {
		const $body = $( 'body' );
		parallaxInit( 'novablocks-hero' );

		if ( $body.is( '.novablocks-has-position-indicators' ) && typeof $.fn.bully !== 'undefined' ) {
			$( '.novablocks-hero' ).bully();
		}
	})

})(jQuery, window);
