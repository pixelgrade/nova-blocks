import { debounce } from '../utils';

const BLOCK_SELECTOR = '.nova-slideshow';
const SLIDER_SELECTOR = '.nova-slideshow__slider';
const BACKGROUND_SELECTOR = '.nova-slideshow__background';
const FOREGROUND_SELECTOR = '.nova-slideshow__content';
const TRANSITION_DURATION = 1000;

(function($, window, undefined) {

	const $blocks = $( BLOCK_SELECTOR );

	$blocks.each( function( index, block ) {
		var $block = $( block ),
			$slider = $block.find( SLIDER_SELECTOR ),
			$arrowContainer;

		if ( $slider.children().length > 1 ) {
			$arrowContainer = $( '<div class="nova-slideshow__controls">' ).appendTo( $block );

			$slider.on( 'beforeChange', onBeforeSlideChange );

			$slider.slick({
				rows: 0,
				// for simpler reveal transitions between slides
				fade: true,
				prevArrow: '<div class="nova-slideshow__arrow nova-slideshow__arrow--prev"></div>',
				nextArrow: '<div class="nova-slideshow__arrow nova-slideshow__arrow--next"></div>',
				appendArrows: $arrowContainer,
				speed: TRANSITION_DURATION
			});
		}
	});

	function onResize() {
		$blocks.each( function( index, block ) {
			$( block ).find( SLIDER_SELECTOR ).slick( 'refresh' );
		});
	}

	function onBeforeSlideChange( event, slick, currentSlide, nextSlide ) {
		const $currentSlide = $( slick.$slides[currentSlide] );
		const $nextSlide = $( slick.$slides[nextSlide] );

		$( slick.$slides ).css( 'zIndex', 800 );

		transition( $currentSlide, $nextSlide, getDirection( slick, currentSlide, nextSlide ) );
	}

	function transition( $current, $next, sign = 1 ) {
		const timeline = new TimelineLite( {paused: true} );
		const duration = TRANSITION_DURATION / 1000;
		const slideWidth = $current.outerWidth();
		const move = 300;

		timeline.fromTo( $next, duration, { x: sign * slideWidth }, { x: 0, ease: Power4.easeInOut }, 0 );
		timeline.fromTo( $next.find( BACKGROUND_SELECTOR ), duration,
			{ x: -sign * (slideWidth - move) }, { x: 0, ease: Power4.easeInOut }, 0 );
		timeline.fromTo( $next.find( FOREGROUND_SELECTOR ), duration,
			{ x: -sign * slideWidth }, { x: 0, ease: Power4.easeInOut }, 0 );

		timeline.fromTo( $current, duration, { x: 0 }, { x: -sign * slideWidth, ease: Power4.easeInOut }, 0 );
		timeline.fromTo( $current.find( BACKGROUND_SELECTOR ), duration,
			{ x: 0 }, { x: sign * (slideWidth - move), ease: Power4.easeInOut }, 0 );
		timeline.fromTo( $current.find( FOREGROUND_SELECTOR ), duration,
			{ x: 0 }, { x: sign * slideWidth, ease: Power4.easeInOut }, 0 );

		timeline.play();
	}

	function getDirection( slick, currentSlide, nextSlide ) {
		let direction = 1;

		if ( slick.slideCount > 2 ) {

			if ( currentSlide === 0 && nextSlide === slick.slideCount - 1 ) {
				direction = -1;
			}

			if ( nextSlide < currentSlide && ( nextSlide !== 0 || currentSlide !== slick.slideCount - 1 ) ) {
				direction = -1;
			}

		}

		return direction;
	}

	$( window ).on( 'resize', debounce( onResize, 300 ) );

})(jQuery, window);