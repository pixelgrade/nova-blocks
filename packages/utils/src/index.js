export * from './collection-layout';
export * from './debounce';
export * from './has-touch-screen';
export * from './is-mobile-device';
export * from './random';
export * from './space-and-sizing';

export const range = function( min, max ) {
	const array = [];
	for ( let i = 0; i <= max - min; i++ ) {
		array.push( i + min );
	}
	return array;
};

export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export const findParents = ( target, query ) => {
	let parents = [];

	function traverse( item ) {
		const parent = item.parentNode;
		if ( parent instanceof HTMLElement ) {
			if ( parent.matches( query ) ) {
				parents.push( parent );
			}
			traverse( parent );
		}
	}

	traverse( target );

	return parents;
};

// https://stackoverflow.com/a/2450976
export const shuffleArray = function( array ) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while ( 0 !== currentIndex ) {
		// eslint-disable-next-line no-restricted-syntax
		randomIndex = Math.floor( Math.random() * currentIndex );
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[ currentIndex ];
		array[ currentIndex ] = array[ randomIndex ];
		array[ randomIndex ] = temporaryValue;
	}

	return array;
};

export const defaultSnapValues = {
	x: [0, 0.5, 1],
	y: [0, 0.5, 1]
};

export const maybeSnapFocalPoint = function( focalPoint, snapValues = defaultSnapValues ) {
	let x = parseFloat( focalPoint.x );
	let y = parseFloat( focalPoint.y );
	let thereshold = 0.05;

	snapValues.x.forEach( snapValue => {
		if ( snapValue - thereshold < x && x < snapValue + thereshold ) {
			x = snapValue;
		}
	} );

	snapValues.y.forEach( snapValue => {
		if ( snapValue - thereshold < y && y < snapValue + thereshold ) {
			y = snapValue;
		}
	} );

	return { x, y }
};

export const getSnapClassname = focalPoint => {
	const classNames = [];

	if ( defaultSnapValues.x.includes( parseFloat( focalPoint.x ) ) ) {
		classNames.push( 'is-snapped-x' );
	}

	if ( defaultSnapValues.y.includes( parseFloat( focalPoint.y ) ) ) {
		classNames.push( 'is-snapped-y' );
	}

	return classNames.join( ' ' );
};

export const getControlsClasses = ( attributes, compileAttributes ) => {
	const isDirty = areAttributesDirty( attributes, compileAttributes );
	return getControlsDirtyClasses( isDirty );
};

export const areAttributesDirty = ( attributes, compileAttributes ) => {
	let dirty = false;
	const compiledAttributes = compileAttributes( attributes );

	if ( Object.keys( compiledAttributes ).some( key => compiledAttributes[ key ] !== attributes[ key ] ) ) {
		dirty = true;
	}

	return dirty;
}

export const getControlsDirtyClasses = ( isDirty ) => {
	const classes = [ 'novablocks-controls-wrap' ];

	if ( !! isDirty ) {
		classes.push( 'novablocks-controls-wrap--dirty' );
	}

	return classes.join( ' ' );
};

export const getCardMediaPaddingTop = ( containerHeight ) => {
	let compiledHeight = containerHeight / 50 - 1;

	if ( compiledHeight < 0 ) {
		compiledHeight *= 2;
	}

	let numerator = 1;
	let denominator = 1;

	compiledHeight = Math.min( Math.max( -3, compiledHeight ), 1 );

	if ( compiledHeight > 0 ) {
		numerator = 1 + compiledHeight;
	}

	if ( compiledHeight < 0 ) {
		denominator = 1 + Math.abs( compiledHeight );
	}

	return `${ numerator * 100 / denominator }%`;
};

const breakpoints = {
	desktop: 1366,
	lap: 1024,
	tablet: 768,
	mobile: 480,
};

export const below = ( breakpoint ) => {
	const width = breakpoints[breakpoint];
	return window.innerWidth < width;
};

export const above = ( breakpoint ) => {
	const width = breakpoints[breakpoint];
	return window.innerWidth >= width;
};

export const titleCase = ( str ) => {
	var splitStr = str.toLowerCase().split( ' ' );
	for ( var i = 0; i < splitStr.length; i ++ ) {
		// You do not need to check if i is larger than splitStr length, as your for does that for you
		// Assign it back to the array
		splitStr[i] = splitStr[i].charAt( 0 ).toUpperCase() + splitStr[i].substring( 1 );
	}
	// Directly return the joined string
	return splitStr.join( ' ' );
}

export const isAnyPartOfElementInViewport = (element) => {
	const rect = element.getBoundingClientRect();

	const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

	// http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
	const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
	const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

	return (vertInView && horInView);
}



// Uppercase the first letter of a string in JavaScript
// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/

export const capitalizeFirstLetter = ( string ) => {

  if ( typeof string !== 'string' ) {
    return '';
  }

  return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
}



export const getAlignmentClassnames = ( attributes ) => {
  const { contentPosition } = attributes;

  if ( typeof contentPosition !== "string" ) {
    return '';
  }

  const alignment = contentPosition.split( " " );
  const verticalAlignment = alignment[0];
  const horizontalAlignment = alignment[1];

  return `novablocks-u-valign-${ verticalAlignment } novablocks-u-halign-${ horizontalAlignment }`;
}

export const getLevelAttributes = ( attributes ) => {
  const { level } = attributes;

  return {
    level,
    collectionTitleLevel: level,
    cardTitleLevel: level + 1
  }
}

export const getAspectRatioAttributes = ( attributes ) => {
  let {
    thumbnailAspectRatio,
    thumbnailAspectRatioString
  } = attributes;

  if ( thumbnailAspectRatioString === 'auto' ) {
    return {};
  }

  if ( thumbnailAspectRatio < 50 ) {
    thumbnailAspectRatioString = 'landscape';
  }

  return {
    thumbnailAspectRatio,
    thumbnailAspectRatioString,
  }
}

export const getPaddingTopFromContainerHeight = ( containerHeight ) => {
  let height = containerHeight / 50 - 1;
  let numerator = 1;
  let denominator = 1;

  height = Math.min( Math.max( -1, height ), 1 );

  if ( height > 0 ) {
    numerator = 1 + height;
  }

  if ( height < 0 ) {
    denominator = 1 + Math.abs( height );
  }

  return numerator * 100 / denominator;
}

export const getAlignFromMatrix = ( alignMatrixValue ) => {

  if ( typeof alignMatrixValue !== 'string' ) {
    return [ 'center', 'center' ];
  }

  const align = alignMatrixValue.split( /\b\s+/ );

  return [ align[0], align[1] || 'center' ];
}





export const arrayRotate = (arr, count, reverse) => {
  count = count % arr.length;

  for ( let i = 1; i <= count; i++ ) {
    if ( reverse ) {
      arr.unshift( arr.pop() );
    } else {
      arr.push( arr.shift() );
    }
  }

  return arr;
}

export const ready = ( fn ) => {
  if ( document.readyState != 'loading' ) {
    fn();
  } else {
    document.addEventListener( 'DOMContentLoaded', fn );
  }
}

export const addClass = ( element, classes ) => {
  const classesArray = classes.split( /\s+/ ).filter( x => x.trim().length );

  if ( classesArray.length ) {
    element.classList.add( ...classesArray );
  }
}

export const removeClass = ( element, classes ) => {
  const classesArray = classes.split(/\s+/).filter( x => x.trim().length );

  if ( classesArray.length ) {
    element.classList.remove( ...classesArray );
  }
}

export const hasClass = ( element, className ) => {
  return element.classList.contains( className );
}

export const clamp = ( number, min, max ) => {
  return Math.min( Math.max( min, number ), max )
};

export const isFunctionalPalette = palette => {
  const id = palette.id + '';
  return id.charAt(0) === '_';
}

