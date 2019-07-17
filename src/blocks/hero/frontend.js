(function($, window, undefined) {

	// initialize parallax effect
	if ( typeof $.fn.rellax !== "undefined" ) {
		$( '.nova-hero--parallax' ).find( '.nova-hero__background' ).rellax({
			container: '.nova-hero__mask',
		});
	}

})(jQuery, window);
