(function($, window, undefined) {

	$(window).on('load', function() {

		$( '.c-hero__slider' ).each(function(index, element) {
			var $element = $( element ),
				$hero = $element.closest( '.c-hero' );

			if ( $element.children().length > 1 ) {
				$element.slick({
					rows: 0,
					appendArrows: $hero
				});
			}
		});

		// initialize parallax effect
		$( '.c-hero--parallax' ).find( '.c-hero__background' ).rellax({
			container: '.c-hero__background-mask',
		});
	});

})(jQuery, window);
