(function($, window, undefined) {

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	function onResize() {
		$( '.c-hero__slider' ).each( function( index, element ) {
			var $element = $( element );
			$element.slick( 'refresh' );
		});
	}

	$( window ).on( 'load', function() {

		$( '.c-hero__slider' ).each( function( index, element ) {
			var $element = $( element ),
				$hero = $element.closest( '.c-hero' );

			if ( $element.children().length > 1 ) {
				$element.slick({
					rows: 0,
					appendArrows: $hero
				});
			}
		});

		$( window ).on( 'resize', debounce( onResize, 300 ) );
	});

	// initialize parallax effect
	$( '.c-hero--parallax' ).find( '.c-hero__background' ).rellax({
		container: '.c-hero__mask',
	});

})(jQuery, window);
