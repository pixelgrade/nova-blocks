import { parallaxInit } from "../../components/with-parallax/util";

import {
	debounce,
	hasTouchScreen
} from '../../utils';

const BLOCK_SELECTOR = '.novablocks-slideshow';
const SLIDER_SELECTOR = '.novablocks-slideshow__slider';
const SLIDE_SELECTOR = '.novablocks-slideshow__slide';
const FOREGROUND_SELECTOR = '.novablocks-slideshow__foreground';
const TRANSITION_DURATION = 1000;
const TRANSITION_EASING = "easeInOutCirc";

(function($, window, undefined) {

	const $window = $( window );
	const $blocks = $( BLOCK_SELECTOR );
	const useOrientation = hasTouchScreen() && 'orientation' in window;
	const onDebouncedResize = debounce( onResize, 300 );

	$blocks.each( function( index, block ) {
		var $block = $( block ),
			$slider = $block.find( SLIDER_SELECTOR ),
			$arrowContainer;

		resetBlockMinHeight( $block );

		if ( $slider.children().length > 1 ) {
			$arrowContainer = $( '<div class="novablocks-slideshow__controls">' ).appendTo( $block );

			$slider.on( 'beforeChange', onBeforeSlideChange );

			$slider.slick({
				rows: 0,
				// for simpler reveal transitions between slides
				fade: true,
				prevArrow: '<div class="novablocks-slideshow__arrow novablocks-slideshow__arrow--prev"></div>',
				nextArrow: '<div class="novablocks-slideshow__arrow novablocks-slideshow__arrow--next"></div>',
				appendArrows: $arrowContainer,
				speed: 0,
			});
		}

		$block.addClass( 'is-ready' );
	});

	parallaxInit( $blocks );

	if ( useOrientation ) {
		$window.on( 'orientationchange', function() {
			$window.one( 'resize', onResize );
		} );
	} else {
		$window.on( 'resize', onDebouncedResize );
	}

	function resetBlockMinHeight( $block ) {
		$block.css( 'minHeight', '' );
		$block.css( 'minHeight', getBlockMinHeight( $block ) );

		$( window ).trigger( 'scroll' );
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

			if ( $slider.is( '.slick-initialized' ) ) {
				$slider.slick( 'setPosition' );
			}
		});

	}

	function onBeforeSlideChange( event, slick, currentSlide, nextSlide ) {
		const $currentSlide = $( slick.$slides[currentSlide] );
		const $nextSlide = $( slick.$slides[nextSlide] );
		const $slides = $( slick.$slides );

		transition( $currentSlide, $nextSlide, getDirection( slick, currentSlide, nextSlide ) );
	}

	function hasFixedBackground( $slide ) {
		let fixed = false;

		if ( $slide.find( '.novablocks-parallax' ).css( 'position' ) === 'fixed' ) {
			return true;
		}

		return fixed;
	}

	function transition( $current, $next, sign = 1 ) {
		const slideWidth = $current.outerWidth();
		const move = 300;
		const isFixed = hasFixedBackground( $current );

		$current.velocity( {
			tween: [0, 1]
		}, {
			duration: TRANSITION_DURATION,
			easing: TRANSITION_EASING,
			begin: function() {
				$current.addClass( 'novablocks-slideshow__slide--current' );
				$next.addClass( 'novablocks-slideshow__slide--next' );
			},
			progress: function(elements, percentComplete, remaining, tweenValue, activeCall) {
				const next = $next.find( '.novablocks-slideshow__slide-wrap' ).get(0);
				const nextBg = $next.find( '.novablocks-slideshow__media' ).get(0);
				const nextFg = $next.find( FOREGROUND_SELECTOR ).get(0);
				const current = $current.get(0);
				const currentBg = $current.find( '.novablocks-slideshow__media' ).get(0);
				const currentFg = $current.find( FOREGROUND_SELECTOR ).get(0);

				if ( isFixed ) {
					next.style.left = slideWidth * tweenValue + 'px';
					nextBg.style.left = move * tweenValue + 'px';
					nextFg.style.left = slideWidth * -tweenValue + 'px';
					currentBg.style.left =  move * (tweenValue - 1) + 'px';
				} else {
					next.style.left = slideWidth * tweenValue + 'px';
					nextBg.style.left = (move - slideWidth) * tweenValue + 'px';
					nextFg.style.left = (move - slideWidth) * tweenValue + 'px';
					currentBg.style.left =  move * (tweenValue - 1) + 'px';
				}
			},
			complete: function() {
				$current.removeClass( 'novablocks-slideshow__slide--current' );
				$next.removeClass( 'novablocks-slideshow__slide--next' );
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
