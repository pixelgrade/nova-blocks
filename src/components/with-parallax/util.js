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
	return getStylesFromProps( getProps( config ) );
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
		transformOrigin,
	} = props;

	return {
		width: width || '',
		height: height || '',
		minHeight: 0,
		maxWidth: 'none',
		top: '50%',
		transform: `translate(${ moveX },${ moveY * parallaxAmount }px) translateX(${ offsetX }) translateY(${ offsetY }) scale(${ scale })`,
		objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%',
		transformOrigin: transformOrigin.x * 100 + '% ' + transformOrigin.y * 100 + '%',
	};
}

export const getProps = function( config ) {

	const {
		container,
		scrollContainer,

		scrollingEffect,
		focalPoint,
		finalFocalPoint,
		initialBackgroundScale,
		finalBackgroundScale,
		containerBox,
		containerWidth,
		containerHeight,
		progress,
		scrollContainerBox,
		scrollContainerHeight,
	} = config;

	if ( scrollingEffect === 'static' ) {
		return {
			scale: initialBackgroundScale,
			moveX: 0,
			moveY: 0,
			parallaxAmount: 0,
			focalPoint,
			transformOrigin: focalPoint,
		};
	}

	let transformOrigin;
	let newFocalPoint;

	let initialScale = initialBackgroundScale;
	let finalScale = finalBackgroundScale;
	let newScale;

	let parallaxAmount = 1;
	let minImageHeight = scrollContainerHeight;
	let offsetY = -0.5;

	if ( scrollingEffect === 'parallax' ) {
		parallaxAmount = 0.75;
		newFocalPoint = focalPoint;
		transformOrigin = newFocalPoint;
		initialScale = finalScale = initialBackgroundScale;
		minImageHeight += ( containerHeight - scrollContainerHeight ) * (1 - parallaxAmount);
//		offsetY += (1 - initialScale) * 0.25 * newFocalPoint.y;
	}

	let maxScale = Math.max( initialScale, finalScale );


	initialScale = initialScale / maxScale;
	finalScale = finalScale / maxScale;

	if ( scrollingEffect === 'doppler' ) {
		transformOrigin = newFocalPoint = getIntermediateFocalPoint( focalPoint, finalFocalPoint, progress );
		transformOrigin.y = 0.5;
	}

	newScale = initialScale + ( finalScale - initialScale ) * progress;

	let moveY = config.scrollContainerBox.top - config.containerBox.top + scrollContainerHeight / 2 - containerHeight / 2;

	return {
		parallaxAmount: parallaxAmount,
		progress: progress,
		width: containerWidth * maxScale,
		height: minImageHeight * maxScale,
		moveX: 0,
		moveY: moveY,
		offsetX: ( 1 / maxScale - 1 ) * newFocalPoint.x * 100 + '%',
		offsetY: offsetY * 100 + '%',
		scale: newScale,
		focalPoint: newFocalPoint,
		transformOrigin: transformOrigin,
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

	return {
		progress,

		containerBox,
		containerHeight,
		containerWidth,

		scrollContainerHeight,
		scrollContainerBox,
	}
}
