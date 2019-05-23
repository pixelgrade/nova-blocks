import { debounce } from '../utils';

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

	// initialize parallax effect
	$( '.nova-hero--parallax' ).find( '.nova-hero__background' ).rellax({
		container: '.nova-hero__mask',
	});

})(jQuery, window);
