import $ from 'jquery';
import {hasTouchScreen} from "../../utils";

function userPrefersReducedMotion() {
	const mediaQuery = window.matchMedia( '(prefers-reduced-motion: reduce)' );
	return !! mediaQuery.matches;
}

export const getIntermediateFocalPoint = function( focalPoint1, focalPoint2, progress ) {

	if ( ! focalPoint1 && ! focalPoint2 ) {
		return {
			x: 0.5,
			y: 0.5,
		}
	}

	if ( ! focalPoint1 ) {
		return focalPoint2;
	}

	if ( ! focalPoint2 ) {
		return focalPoint1;
	}

	return {
		x: parseFloat( focalPoint1.x ) + ( parseFloat( focalPoint2.x ) - parseFloat( focalPoint1.x ) ) * progress,
		y: parseFloat( focalPoint1.y ) + ( parseFloat( focalPoint2.y ) - parseFloat( focalPoint1.y ) ) * progress,
	}
}

export const getStyles = function( config ) {
	const props = getProps( config );
	const styles = getStylesFromProps( props );
	return styles;
}

export const getStylesFromProps = function( props ) {

	const {
		parallaxAmount,
		width,
		height,
		moveX,
		moveY,
		offsetX,
		offsetY,
		scale,
		focalPoint,
	} = props;

	return {
		width: width || '',
		height: height || '',
		minHeight: 0,
		maxWidth: 'none',
		transform: `translate(${ moveX },${ moveY * parallaxAmount }px) translateX(${ offsetX }) translateY(${ offsetY }px) scale(${ scale })`,
		objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%',
		transformOrigin: focalPoint.x * 100 + '% 50%',
	};
}

function getIntermediateValue( initialValue, finalValue, progress ) {
	return initialValue + ( finalValue - initialValue ) * progress;
}

function getScales( config ) {

	let {
		scrollingEffect,
		initialBackgroundScale,
		finalBackgroundScale,
		progress,
	} = config;

	initialBackgroundScale = initialBackgroundScale || 1;

	if ( scrollingEffect === 'parallax' ) {
		finalBackgroundScale = initialBackgroundScale;
	}

	let maxScale = Math.max( initialBackgroundScale, finalBackgroundScale );

	initialBackgroundScale = initialBackgroundScale / maxScale;
	finalBackgroundScale = finalBackgroundScale / maxScale;

	if ( userPrefersReducedMotion() ) {
		return {
			maxScale: 1,
			newScale: 1,
		};
	}

	return {
		maxScale: maxScale,
		newScale: getIntermediateValue( initialBackgroundScale, finalBackgroundScale, progress ),
	}
}

function getFocalPoint( config ) {

	let {
		scrollingEffect,
		focalPoint,
		finalFocalPoint,
		progress,
	} = config;

	if ( ! focalPoint ) {
		focalPoint = {
			x: 0.5,
			y: 0.5,
		}
	}

	if ( scrollingEffect !== 'doppler' ) {
		return focalPoint;
	}

	return getIntermediateFocalPoint( focalPoint, finalFocalPoint, progress );
}

function getNewImageHeight( config, parallaxAmount ) {

	const {
		scrollContainerHeight,
		containerHeight,
	} = config;

	return containerHeight + ( scrollContainerHeight - containerHeight ) * parallaxAmount;
}

export const getProps = function( config, fixed ) {

	const {
		distance,
		progress,
		smoothStart,
		smoothEnd,

		scrollingEffect,
		focalPoint,
		finalFocalPoint,
		initialBackgroundScale,
		finalBackgroundScale,

		container,
		containerBox,
		containerWidth,
		containerHeight,

		scrollContainer,
		scrollContainerBox,
		scrollContainerHeight,
	} = config;

	const newFocalPoint = getFocalPoint( config );

	if ( scrollingEffect === 'static' ) {

		return {
			width: containerWidth,
			height: containerHeight,
			scale: initialBackgroundScale || 1,
			moveX: 0,
			moveY: 0,
			offsetX: 0,
			offsetY: 0,
			parallaxAmount: 0,
			focalPoint: newFocalPoint,
		};
	}

	const parallaxAmount = userPrefersReducedMotion() ? 0 : scrollingEffect === 'parallax' ? 0.75 : 1;
	const { maxScale, newScale } = getScales( config );
	const newImageHeight = getNewImageHeight( config, parallaxAmount );

	// keep in sync with scroll
	let moveY = scrollContainerBox.top - containerBox.top;

	if ( ! smoothStart ) {
		if ( !! fixed && containerBox.top < 0 ) {
			moveY = scrollContainerBox.top;
		}

		if ( ! fixed && 0 > scrollContainerBox.top - containerBox.top ) {
			moveY = 0;
		}
	}

	if ( ! smoothEnd ) {

		if ( scrollContainerBox.top - containerBox.top > containerHeight - scrollContainerHeight ) {
			if ( !! fixed ) {
				moveY = scrollContainerBox.top - containerBox.top - containerHeight + scrollContainerHeight;
			} else {
				moveY = containerHeight - scrollContainerHeight;
			}
		}
	}


	// align top
	let offsetY = newImageHeight * maxScale * ( newScale - 1 ) * 0.5;

	// position according to focalPoint
	offsetY += newImageHeight * ( 1 - maxScale * newScale ) * newFocalPoint.y;

	return {
		distance: distance,
		parallaxAmount: parallaxAmount,
		progress: progress,
		width: containerWidth * maxScale,
		height: newImageHeight * maxScale,
		moveX: `${ fixed ? containerBox.left - scrollContainerBox.left : 0 }px`,
		moveY: moveY,
		offsetX: ( 1 / maxScale - 1 ) * newFocalPoint.x * 100 + '%',
		offsetY: offsetY,
		scale: newScale,
		focalPoint: newFocalPoint,
	};
}

export const getState = function( container, config ) {

	if ( ! container || ! config ) {
		return {};
	}

	const {
		followThroughStart,
		followThroughEnd,
		scrollingEffect,
		scrollContainerHeight,
		scrollContainerBox,
	} = config;

	const containerWidth = container.offsetWidth;
	const containerHeight = container.offsetHeight;
	const containerBox = container.getBoundingClientRect();

	const smoothStart = followThroughStart || scrollingEffect === 'parallax';
	const smoothEnd = followThroughEnd || scrollingEffect === 'parallax';

	let current = scrollContainerBox.top - containerBox.top;
	let distance = containerHeight - scrollContainerHeight;

	if ( smoothStart ) {
		current += scrollContainerHeight;
		distance += scrollContainerHeight;
	}

	if ( smoothEnd ) {
		distance += scrollContainerHeight;
	}

	let progress = distance <= 0 ? 0.5 : current / distance;

	if ( ! smoothStart ) {
		progress = Math.max( 0, progress );
	}

	if ( ! smoothEnd ) {
		progress = Math.min( 1, progress );
	}

	if ( userPrefersReducedMotion() ) {
		progress = 0.5;
	}

	return {
		progress,
		distance,
		smoothStart,
		smoothEnd,

		containerBox,
		containerHeight,
		containerWidth,

		scrollContainerHeight,
		scrollContainerBox,
	}
};

function getScrollContainerHeight() {
	const useOrientation = hasTouchScreen() && 'orientation' in window;
	return useOrientation && window.screen && window.screen.availHeight || window.innerHeight
}

export const parallaxInit = function( $blocks ) {

	let frameRendered = false;
	let scrollContainerHeight = getScrollContainerHeight();

	$blocks.each( function( i, container ) {
		var $container = $( container );
		var followThroughStart = !! $container.data( 'smooth-start' );
		var followThroughEnd = !! $container.data( 'smooth-end' );
		var scrollingEffect = $container.data( 'scrolling-effect' );
		var focalPoint = $container.data( 'focal-point' );
		var finalFocalPoint = $container.data( 'final-focal-point' );
		var initialBackgroundScale = $container.data( 'initial-background-scale' );
		var finalBackgroundScale = $container.data( 'final-background-scale' );
		var scrollContainerBox = {
			top: 0,
			left: 0,
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

		var $parallax = $container.find( '.novablocks-parallax' );

		$container.data( 'parallax', $parallax );

		function parallaxUpdateState() {
			var newConfig = Object.assign( {}, config, {
				scrollContainerHeight: getScrollContainerHeight()
			} );
			var state = getState( container, newConfig );
			$container.data( 'state', state );
			$container.data( 'config', newConfig );
			frameRendered = false;
		}

		$( window ).on( 'scroll', parallaxUpdateState );
		$( window ).on( 'resize', parallaxUpdateState );
	} );

	function parallaxUpdateLoop() {
		if ( ! frameRendered ) {
			$blocks.each( function( i, obj ) {
				let $container = $( obj );
				let $background = $container.data( 'parallax' );
				let $foreground = $background.find( '.novablocks-foreground' );
				let state = $container.data( 'state' );
				let config = $container.data( 'config' );

				config = Object.assign( {}, state, config );

				let props = getProps( config, true );

				$foreground.css( 'transform', `translate3d(0,${ -props.moveY * props.parallaxAmount }px,0)` );

				// because of fixed positioning
				props.moveY = -1 * props.moveY;

				if ( 0 < props.progress && props.progress < 1 ) {
					props.parallaxAmount = 1 - props.parallaxAmount;
				}

				let styles = getStylesFromProps( props );

				$container.data( 'parallax' ).css( styles );
			} );
			frameRendered = true;
		}
		requestAnimationFrame( parallaxUpdateLoop );
	}

	requestAnimationFrame( parallaxUpdateLoop );
}
