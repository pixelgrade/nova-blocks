(function($, window, undefined) {

	// initialize parallax effect
	if ( typeof $.fn.rellax !== "undefined" ) {
		$( '.nova-hero--parallax' ).find( '.nova-hero__background' ).rellax({
			container: '.nova-hero__mask',
		});

		setTimeout(function() {
			$( '.nova-hero--parallax' ).find( '.nova-hero__background' ).css( 'opacity', 1 );
		}, 300)
	}

})(jQuery, window);
