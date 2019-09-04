import { debounce } from '../../utils';

const BLOCK_SELECTOR = '.novablocks-slideshow';
const SLIDER_SELECTOR = '.novablocks-slideshow__slider';
const SLIDE_SELECTOR = '.novablocks-slideshow__slide';
const CONTENT_SELECTOR = '.novablocks-slideshow__content';
const BACKGROUND_SELECTOR = '.novablocks-slideshow__background';
const FOREGROUND_SELECTOR = '.novablocks-slideshow__foreground';
const TRANSITION_DURATION = 1000;
const TRANSITION_EASING = "easeInOutCirc";

(function($, window, undefined) {

	const $blocks = $( BLOCK_SELECTOR );
	const $rellaxTarget = $blocks.filter( '.has-parallax' ).find( SLIDER_SELECTOR );

	// initialize parallax effect
	if ( typeof $.fn.rellax !== "undefined" ) {
		$rellaxTarget.rellax( {
			container: '.novablocks-slideshow__mask',
			children: CONTENT_SELECTOR,
		} );
	}

	$blocks.each( function( index, block ) {
		var $block = $( block ),
			$slider = $block.find( SLIDER_SELECTOR ),
			$arrowContainer;

		if ( $slider.children().length > 1 ) {
			$arrowContainer = $( '<div class="novablocks-slideshow__controls">' ).appendTo( $block );

			resetBlockMinHeight( $block );
			$block.addClass( 'is-ready' );

			$slider.on( 'beforeChange', onBeforeSlideChange );

			$slider.slick({
				rows: 0,
				// for simpler reveal transitions between slides
				fade: true,
				prevArrow: '<div class="novablocks-slideshow__arrow novablocks-slideshow__arrow--prev"></div>',
				nextArrow: '<div class="novablocks-slideshow__arrow novablocks-slideshow__arrow--next"></div>',
				appendArrows: $arrowContainer,
				speed: TRANSITION_DURATION,
			});
		}
	});

	$( window ).on( 'resize', debounce( onResize, 300 ) );

	function resetBlockMinHeight( $block ) {
		$block.css( 'minHeight', '' );
		$block.css( 'minHeight', getBlockMinHeight( $block ) );
	}

	function getBlockMinHeight( $block ) {
		var windowWidth = window.innerWidth;
		var $slider = $block.find( SLIDER_SELECTOR );
		var sliderWidth = $block.find( SLIDER_SELECTOR ).outerWidth();
		var windowHeight = window.innerHeight;
		var sliderMinHeight = parseInt( $block.data( 'min-height' ) ) * windowHeight / 100;
		var mediaMinHeight = 0;
		var slideMaxHeight = 0;
		var maxAspectRatio = 0;

		$block.find( SLIDE_SELECTOR ).each( function( i, obj ) {
			var $slide = $( obj ),
				$media = $slide.find( '.novablocks-slideshow__media' ),
				width = $media.data( 'width' ),
				height = $media.data( 'height' ),
				aspectRatio = width / height,
				slideHeight = $slide.outerHeight();

			maxAspectRatio = aspectRatio > maxAspectRatio ? aspectRatio : maxAspectRatio;
			mediaMinHeight = sliderWidth / maxAspectRatio;
			slideMaxHeight = slideHeight > slideMaxHeight ? slideHeight : slideMaxHeight;

		} );

		return Math.max( sliderMinHeight, slideMaxHeight, mediaMinHeight );
	}

	function onResize() {

		$blocks.each( function( index, block ) {
			var $block = $( block );
			var $slider = $block.find( SLIDER_SELECTOR );

			resetBlockMinHeight( $block );
			$rellaxTarget.rellax( 'refresh' );

			if ( $slider.is( '.slick-initialized' ) ) {
				$slider.slick( 'setPosition' );
			}
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
				const next = $next.get(0);
				const nextBg = $next.find( BACKGROUND_SELECTOR ).get(0);
				const nextFg = $next.find( FOREGROUND_SELECTOR ).get(0);
				const current = $current.get(0);
				const currentBg = $current.find( BACKGROUND_SELECTOR ).get(0);
				const currentFg = $current.find( FOREGROUND_SELECTOR ).get(0);

				const moveX = x => 'translateX(' + sign * x + 'px)';

				next.style.transform = moveX(slideWidth * tweenValue );
				nextBg.style.transform = moveX( (move - slideWidth) * tweenValue );
				nextFg.style.transform = moveX( slideWidth * -tweenValue );

				current.style.transform = moveX( -move * (1 - tweenValue) );
				currentFg.style.transform = moveX( move * (1 - tweenValue) );
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

})(jQuery, window);
