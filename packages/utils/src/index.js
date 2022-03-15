export * from './collection-layout';
export * from './debounce';
export * from './duotone';
export * from './has-touch-screen';
export * from './is-mobile-device';
export * from './random';
export * from './space-and-sizing';
export * from './overlay-filter';
export * from './color-signal';
export * from './media';
export * from './focal-point';
export * from './media-query';
export * from './array';

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
};

export const getControlsDirtyClasses = ( isDirty ) => {
	const classes = [ 'novablocks-controls-wrap' ];

	if ( !! isDirty ) {
		classes.push( 'novablocks-controls-wrap--dirty' );
	}

	return classes.join( ' ' );
};

export const getCardMediaPaddingTop = ( thumbnailAspectRatio ) => {
	let compiledHeight = thumbnailAspectRatio / 50 - 1;

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



export const titleCase = ( str ) => {
	var splitStr = str.toLowerCase().split( ' ' );
	for ( var i = 0; i < splitStr.length; i ++ ) {
		// You do not need to check if i is larger than splitStr length, as your for does that for you
		// Assign it back to the array
		splitStr[i] = splitStr[i].charAt( 0 ).toUpperCase() + splitStr[i].substring( 1 );
	}
	// Directly return the joined string
	return splitStr.join( ' ' );
};

export const isAnyPartOfElementInViewport = (element) => {
	const rect = element.getBoundingClientRect();

	const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

	// http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
	const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
	const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

	return (vertInView && horInView);
};



// Uppercase the first letter of a string in JavaScript
// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/

export const capitalizeFirstLetter = ( string ) => {

  if ( typeof string !== 'string' ) {
    return '';
  }

  return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
};



export const getAlignmentClassnames = ( attributes ) => {
  const { contentPosition } = attributes;

  if ( typeof contentPosition !== "string" ) {
    return '';
  }

  const alignment = contentPosition.split( " " );
  const verticalAlignment = alignment[0];
  const horizontalAlignment = alignment[1];

  return `novablocks-u-valign-${ verticalAlignment } novablocks-u-halign-${ horizontalAlignment }`;
};

export const getLevelAttributes = ( attributes ) => {
  const { level } = attributes;

  return {
    level,
    collectionTitleLevel: level,
    cardTitleLevel: level + 1
  }
};

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
};

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
};

export const getAlignFromMatrix = ( alignMatrixValue ) => {

  if ( typeof alignMatrixValue !== 'string' ) {
    return [ 'center', 'center' ];
  }

  const align = alignMatrixValue.split( /\b\s+/ );

  return [ align[0], align[1] || 'center' ];
};







export const ready = ( fn ) => {
  if ( document.readyState != 'loading' ) {
    fn();
  } else {
    document.addEventListener( 'DOMContentLoaded', fn );
  }
};

export const addClass = ( element, classes ) => {
  const classesArray = classes.split( /\s+/ ).filter( x => x.trim().length );

  if ( classesArray.length ) {
    element.classList.add( ...classesArray );
  }
};

export const removeClass = ( element, classes ) => {
  const classesArray = classes.split(/\s+/).filter( x => x.trim().length );

  if ( classesArray.length ) {
    element.classList.remove( ...classesArray );
  }
};

export const hasClass = ( element, className ) => {
  return element.classList.contains( className );
};

export const empty = ( element ) => {
  while ( element.firstChild ) {
    element.removeChild( element.firstChild );
  }
}

export const toggleClass = ( element, className, condition ) => {

  if ( typeof condition !== "undefined" ) {
    if ( !! condition ) {
      addClass( element, className );
    } else {
      removeClass( element, className );
    }
    return;
  }

  if ( hasClass( element, className ) ) {
    removeClass( element, className );
  } else {
    addClass( element, className );
  }
}

export const getFirstChild = ( element ) => {
  var firstChild = element.firstChild;

  while ( firstChild != null && firstChild.nodeType === 3 ) { // skip TextNodes
    firstChild = firstChild.nextSibling;
  }

  return firstChild;
}

export function setAndResetElementStyles ( element, props = {} ) {

  const setProps = () => {
    Object.keys( props ).forEach( key => {
      element.style[key] = props[key];
    } );
  }

  const resetProps = () => {
    Object.keys( props ).forEach( key => {
      element.style[key] = '';
    } );
  }

  setProps();

  if ( window.requestIdleCallback ) {
    window.requestIdleCallback( resetProps );
  } else {
    setTimeout( resetProps, 0 );
  }
}

export const clamp = ( number, min, max ) => {
  return Math.min( Math.max( min, number ), max )
};

export const isFunctionalPalette = palette => {
  const id = palette.id + '';
  return id.charAt(0) === '_';
};

export const IS_EDITOR = document.body.classList.contains( 'block-editor-page' );
export const IS_CUSTOMIZER = document.body.classList.contains( 'wp-customizer' );

export const getPreviewAttributes = ( attributes ) => {

  if ( ! needsPreview( attributes ) ) {
    return Object.assign( {}, attributes, {
      preview: false,
    } );
  }

  if ( attributes?.preview ) {
    return attributes;
  }

  return Object.assign( {}, attributes, {
    layoutStyle: 'classic',
    columns: 1,
    cardLayout: 'horizontal',
    cardMediaOpacity: 100,
  } );
};

export const needsPreview = ( attributes ) => {
  return [ "parametric", "carousel" ].includes( attributes.layoutStyle ) && "auto" !== attributes.contentType;
};

export const onScrollRAF = ( callback ) => {
  let scrollY = window.pageYOffset;
  let lastScrollY = -1;
  let frameRendered = false;

  window.addEventListener( 'scroll', () => {
    scrollY = window.pageYOffset;
    frameRendered = false;
  } );

  window.addEventListener( 'resize', () => {
    frameRendered = false;
  } );

  const tick = () => {
    if ( ! frameRendered ) {
      callback( scrollY, lastScrollY );
      lastScrollY = scrollY;
      frameRendered = true;
    }
    requestAnimationFrame( tick );
  }

  requestAnimationFrame( tick );
}

export const matches = ( el, selector ) => {
  return ( el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector ).call( el, selector );
};
