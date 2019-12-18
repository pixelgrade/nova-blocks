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

	if ( scrollingEffect === 'parallax' ) {
		finalBackgroundScale = initialBackgroundScale;
	}

	let maxScale = Math.max( initialBackgroundScale, finalBackgroundScale );

	initialBackgroundScale = initialBackgroundScale / maxScale;
	finalBackgroundScale = finalBackgroundScale / maxScale;

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

	if ( scrollingEffect === 'parallax' ) {
		return focalPoint;
	}

	if ( scrollingEffect === 'doppler' ) {
		return getIntermediateFocalPoint( focalPoint, finalFocalPoint, progress );
	}
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

	if ( scrollingEffect === 'static' ) {
		return {
			width: containerWidth,
			height: containerHeight,
			scale: initialBackgroundScale,
			moveX: 0,
			moveY: 0,
			parallaxAmount: 0,
			focalPoint,
		};
	}

	const parallaxAmount = scrollingEffect === 'parallax' ? 0.75 : 1;
	const newFocalPoint = getFocalPoint( config );
	const { maxScale, newScale } = getScales( config );
	const newImageHeight = getNewImageHeight( config, parallaxAmount );

	// keep in sync with scroll
	let moveY = scrollContainerBox.top - containerBox.top;
	let oldMoveY = moveY;

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
		moveX: 0,
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
}
