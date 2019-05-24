import { debounce } from '../utils';

(function($, window, undefined) {

	// initialize parallax effect
	$( '.nova-hero--parallax' ).find( '.nova-hero__background' ).rellax({
		container: '.nova-hero__mask',
	});

})(jQuery, window);
