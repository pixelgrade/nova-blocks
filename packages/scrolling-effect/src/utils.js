const userPrefersReducedMotion = ( () => {
  const query = window.matchMedia( '(prefers-reduced-motion: reduce)' );
  let matches = false;
  const check = ( eventOrQuery ) => {
    matches = !! eventOrQuery.matches;
  }

  query.addEventListener( 'change', check )

  return () => {
    return matches;
  }
} )();

export const getIntermediateFocalPoint = ( focalPoint1, focalPoint2, progress ) => {

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
};

export const getStyles = ( config, attributes ) => {
  const { scrollingEffect } = attributes;

  if ( 'static' === scrollingEffect ) {
    return {};
  }

	const props = getProps( config, attributes );

	return getStylesFromProps( props );
};

export const getStylesFromProps = ( props ) => {

	const {
	  fixed,
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
	  position: fixed ? 'fixed' : 'absolute',
    top: 0,
    left: 0,
		width: width ? `${ width }px` : '',
		height: height ? `${ height }px` : '',
		minHeight: 0,
		maxWidth: 'none',
		transform: `translate(${ moveX },${ moveY * parallaxAmount }px) translateX(${ offsetX }) translateY(${ offsetY }px) scale(${ scale })`,
		objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%',
		transformOrigin: focalPoint.x * 100 + '% 50%',
	};
};

function getIntermediateValue( initialValue, finalValue, progress ) {
	return initialValue + ( finalValue - initialValue ) * progress;
}

function getScales( attributes, progress ) {

	let {
		scrollingEffect,
		initialBackgroundScale,
		finalBackgroundScale,
	} = attributes;

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

function getFocalPoint( attributes, progress ) {

	let {
		scrollingEffect,
		focalPoint,
		finalFocalPoint,
	} = attributes;

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
		scrollContainerBox,
		containerBox,
	} = config;

	return containerBox.height + ( scrollContainerBox.height - containerBox.height ) * parallaxAmount;
}

export const getProps = function( config, attributes, fixed ) {

	const {
		distance,
		progress,

		containerBox,
		scrollContainerBox,

		smoothStart,
		smoothEnd,
	} = config;

	const {
		scrollingEffect,
  } = attributes;

	const newFocalPoint = getFocalPoint( attributes, progress );
	const parallaxAmount = userPrefersReducedMotion() ? 0 : scrollingEffect === 'parallax' ? 0.75 : 1;
	const { maxScale, newScale } = getScales( attributes, progress );
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

		if ( scrollContainerBox.top - containerBox.top > containerBox.height - scrollContainerBox.height ) {
			if ( !! fixed ) {
				moveY = scrollContainerBox.top - containerBox.top - containerBox.height + scrollContainerBox.height;
			} else {
				moveY = containerBox.height - scrollContainerBox.height;
			}
		}
	}

	// align top
	let offsetY = newImageHeight * maxScale * ( newScale - 1 ) * 0.5;

	// position according to focalPoint
	offsetY += newImageHeight * ( 1 - maxScale * newScale ) * newFocalPoint.y;

	return {
	  fixed,
		distance: distance,
		parallaxAmount: fixed ? 1 - parallaxAmount : parallaxAmount,
		progress: progress,
		width: containerBox.width * maxScale,
		height: newImageHeight * maxScale,
		moveX: `${ fixed ? containerBox.left - scrollContainerBox.left : 0 }px`,
		moveY: fixed ? -1 * moveY : moveY,
		offsetX: ( 1 / maxScale - 1 ) * newFocalPoint.x * 100 + '%',
		offsetY: offsetY,
		scale: newScale,
		focalPoint: newFocalPoint,
	};
};

export const getState = function( config, attributes ) {

	const {
    containerBox,
		scrollContainerBox,
  } = config;

	const {
		scrollingEffect,
		followThroughStart,
		followThroughEnd,
	} = attributes;

	const smoothStart = followThroughStart || scrollingEffect === 'parallax';
	const smoothEnd = followThroughEnd || scrollingEffect === 'parallax';

	let current = scrollContainerBox.top - containerBox.top;
	let distance = containerBox.height - scrollContainerBox.height;

	if ( smoothStart ) {
		current += scrollContainerBox.height;
		distance += scrollContainerBox.height;
	}

	if ( smoothEnd ) {
		distance += scrollContainerBox.height;
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
		scrollContainerBox,
	}
};

export const getFocalPointImage = ( media ) => {
  let mediaType = media?.type;
  let parallaxFocalPointImage = false;

  if ( mediaType === 'image' ) {
    parallaxFocalPointImage = {
      url: media?.sizes?.novablocks_large?.url || media?.sizes?.novablocks_huge?.url || media?.url,
      width: 218,
      height: 170
    }
  }

  if ( mediaType === 'video' ) {
    parallaxFocalPointImage = {
      url: '//cloud.pixelgrade.com/wp-content/uploads/2020/01/Screenshot-2020-01-09-at-15.59.37.png',
      width: 218,
      height: 170,
    };
  }

  return parallaxFocalPointImage;
};
