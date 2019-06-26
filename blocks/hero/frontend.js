import { debounce } from '../utils';

(function($, window, undefined) {

	// initialize parallax effect
	if ( typeof $.fn.rellax !== "undefined" ) {
		$( '.nova-hero--parallax' ).find( '.nova-hero__background' ).rellax({
			container: '.nova-hero__mask',
		});
	}

	if ( typeof $.fn.bully !== "undefined" ) {
		$( '.nova-hero-bullets' ).find( '.nova-hero' ).bully();
	}

})(jQuery, window);

