import { debounce } from '../utils';

const BLOCK_SELECTOR = '.nova-slideshow';
const SLIDER_SELECTOR = '.nova-slideshow__slider';
const BACKGROUND_SELECTOR = '.nova-slideshow__media';
const FOREGROUND_SELECTOR = '.nova-slideshow__content';
const TRANSITION_DURATION = 1000;
const TRANSITION_EASING = "easeOutExpo";

(function($, window, undefined) {

	const $blocks = $( BLOCK_SELECTOR );

	// initialize parallax effect
	$blocks.filter( '.nova-slideshow--parallax' ).find( '.nova-slideshow__slider' ).rellax({
		container: '.nova-slideshow__mask',
		children: '.nova-slideshow__content',
	});

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
				speed: TRANSITION_DURATION,
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
		const slideWidth = $current.outerWidth();
		const move = 300;

		$current.velocity( {
			tween: [0, 1]
		}, {
			duration: TRANSITION_DURATION,
			easing: TRANSITION_EASING,
			progress: function(elements, percentComplete, remaining, tweenValue, activeCall) {
				$next.get(0).style.transform = 'translateX(' + sign * slideWidth * tweenValue + 'px)';
				$next.find( BACKGROUND_SELECTOR ).get(0).style.transform = 'translateX(' + sign * (move - slideWidth) * tweenValue + 'px)';
				$next.find( FOREGROUND_SELECTOR ).get(0).style.transform = 'translateX(' + sign * slideWidth * -tweenValue + 'px)';
			}
		});
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