(function($, window, undefined) {

	$( '.c-hero__slider' ).slick({
		rows: 0,
		fade: true,
		useTransform: false,
	});

	// initialize parallax effect
	$( '.c-hero--parallax' ).find( '.c-hero__background-mask, .c-hero__background' ).rellax({
		bleed: 30,
		container: '.c-hero__background-mask'
	});

})(jQuery, window);
