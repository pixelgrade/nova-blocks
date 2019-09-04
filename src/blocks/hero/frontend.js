(function($, window, undefined) {

	// initialize parallax effect
	if ( typeof $.fn.rellax !== "undefined" ) {
		$( '.novablocks-hero--parallax' ).find( '.novablocks-hero__background' ).rellax({
			container: '.novablocks-hero__mask',
		});

		setTimeout(function() {
			$( '.novablocks-hero--parallax' ).find( '.novablocks-hero__background' ).css( 'opacity', 1 );
		}, 300)
	}

})(jQuery, window);
