import { getState, getProps, getStylesFromProps } from "../../components/with-parallax/util";

(function($, window, undefined) {

	let $heroes = $( '.novablocks-hero' );
	let heroFrameRendered = false;
	let windowScrollY;

	function updateScroll() {
		windowScrollY = window.scrollY;
	}

	$(function() {
		heroesInit();
		bulletsInit();
		scrollButtonInit();
		updateScroll();

		$( window ).on( 'scroll', updateScroll );
	})

	function heroesInit() {

		$heroes.each( function( i, container ) {
			var $container = $( container );
			var followThroughStart = !! $container.data( 'smooth-start' );
			var followThroughEnd = !! $container.data( 'smooth-end' );
			var scrollingEffect = $container.data( 'scrolling-effect' );
			var focalPoint = $container.data( 'focal-point' );
			var finalFocalPoint = $container.data( 'final-focal-point' );
			var initialBackgroundScale = $container.data( 'initial-background-scale' );
			var finalBackgroundScale = $container.data( 'final-background-scale' );
			var scrollContainerHeight = window.innerHeight;
			var scrollContainerBox = {
				top: 0,
			};

			var config = {
				followThroughStart,
				followThroughEnd,
				scrollingEffect,
				scrollContainerHeight,
				scrollContainerBox,
				focalPoint,
				finalFocalPoint,
				initialBackgroundScale,
				finalBackgroundScale,
			};

			$container.data( {
				state: getState( container, config ),
				config: config,
			} );

			var $mask = $container.find( '.novablocks-hero__mask' );
			var $parallax = $container.find( '.novablocks-hero__parallax' );

			$container.data( 'mask', $mask );
			$container.data( 'parallax', $parallax );

			$( window ).on( 'scroll', function() {
				var state = getState( container, config );
				$container.data( 'state', state );
				heroFrameRendered = false;
			} );
		} );

		requestAnimationFrame( heroUpdateLoop );
	}

	function heroUpdateLoop() {
		if ( ! heroFrameRendered ) {
			$heroes.each( function( i, obj ) {
				let $container = $( obj );
				let state = $container.data( 'state' );
				let config = $container.data( 'config' );

				config = Object.assign( {}, state, config );

				let props = getProps( config, true );

				// because of fixed positioning
				props.moveY = -1 * props.moveY;

				if ( 0 < props.progress && props.progress < 1 ) {
					props.parallaxAmount = 1 - props.parallaxAmount;
				}

				let styles = getStylesFromProps( props );
				let { containerWidth, containerHeight } = config;

				$container.data( 'parallax' ).css( styles );
				$container.data( 'mask' ).css( {
					clip: `rect(0 ${ containerWidth }px ${ containerHeight }px 0)`
				} )
			} );
			heroFrameRendered = true;
		}
		requestAnimationFrame( heroUpdateLoop );
	}

	function bulletsInit() {
		const $body = $( 'body' );
		const shouldHaveBullets = $body.is( '.novablocks-has-position-indicators' ) && $( '.novablocks-hero' ).length > 1;

		if ( shouldHaveBullets && typeof $.fn.bully !== 'undefined' ) {
			$( '.novablocks-hero' ).bully();
		}
	}

	function scrollButtonInit() {
		const $scrollButton = $( '.novablocks-hero__indicator' );
		const $hero = $scrollButton.closest( '.novablocks-hero' );

		if ( $hero.length ) {
			$scrollButton.on( 'click', function() {
				const heroBox = $hero.get(0).getBoundingClientRect();
				const heroBoxTop = heroBox.y || heroBox.top;

				window.scrollTo( {
					top: heroBoxTop + heroBox.height + windowScrollY,
					behavior: 'smooth'
				} );
			} );
		}
	}

})(jQuery, window);
