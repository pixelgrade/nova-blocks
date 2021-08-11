import classnames from "classnames";

export const getRandomBetween = ( min, max ) => {
	const random = Math.max(0, Math.random() - Number.MIN_VALUE );
	return Math.floor( random * (max - min + 1) + min );
};

export const getRandomArrayFromArray = ( arr, n ) => {

	let result = new Array( n ),
		len = arr.length,
		taken = new Array( len );

	if ( ! len ) {
		return [];
	}

	while ( n -- ) {
		const x = Math.floor( Math.random() * len );
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = -- len in taken ? taken[len] : len;
	}

	return result;
};

export const getRandomFromArray = ( arr ) => {
	const array = getRandomArrayFromArray( arr, 1 );
	return array[0];
};

export const getRandomBooleanValue = () => {
	return getRandomArrayFromArray( [ true, false ], 1 )[0];
};

export const debounce = (func, wait) => {
	let timeout = null;

	return function () {
		const context = this;
		const args = arguments;

		const later = () => {
			func.apply(context, args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	}
};

export const range = function( min, max ) {
	const array = [];
	for ( let i = 0; i <= max - min; i++ ) {
		array.push( i + min );
	}
	return array;
};

export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export const hasTouchScreen = function() {
	var hasTouchScreen = false;

	if ( "maxTouchPoints" in navigator ) {
		hasTouchScreen = navigator.maxTouchPoints > 0;
	} else if ( "msMaxTouchPoints" in navigator ) {
		hasTouchScreen = navigator.msMaxTouchPoints > 0;
	} else {
		var mQ = window.matchMedia && matchMedia( "(pointer:coarse)" );
		if ( mQ && mQ.media === "(pointer:coarse)" ) {
			hasTouchScreen = !!mQ.matches;
		} else if ( 'orientation' in window ) {
			hasTouchScreen = true;
		} else {
			var UA = navigator.userAgent;
			hasTouchScreen = (
				/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test( UA ) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test( UA )
			);
		}
	}

	return hasTouchScreen;
};

// using window.mobileAndTabletCheck from https://stackoverflow.com/a/11381730
export const isMobileDevice = function() {
	let check = false;
	( function( a ) {
		if ( /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test( a ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test( a.substr( 0, 4 ) ) ) {
			check = true;
		}
	} )( navigator.userAgent || navigator.vendor || window.opera );
	return check;
};

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

	return classnames( classes );
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

// Helper function to get current Palette Config,
// and generate a default, if a palette does not exist.
export const getCurrentPaletteConfig = ( props ) => {
  const { attributes, settings } = props;
  const { palette } = attributes;
  const { palettes } = settings;


  if ( ! Array.isArray( palettes) || ! palettes.length ) {
    return { sourceIndex: 6 }
  }

  return palettes.find( paletteIterator => paletteIterator.id === palette ) || palettes[0];
}

// Uppercase the first letter of a string in JavaScript
// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/

export const capitalizeFirstLetter = ( string ) => {

  if ( typeof string !== 'string' ) {
    return '';
  }

  return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
}

/**
 *
 * @param attributes block's attributes
 * @param supports blockType's supports; it can be set to true to assume colorSignal support is fully enabled
 * @returns {string} utility classnames joined in a single string based on block attributes and support
 */
export const getColorSignalClassnames = ( attributes, supports ) => {
  const { palette, paletteVariation, useSourceColorAsReference, colorSignal } = attributes;
  const colorSignalSupport = supports?.novaBlocks?.colorSignal;
  const newClassnames = [];

  if ( supports === true || colorSignalSupport?.paletteClassname ) {
    newClassnames.push( `sm-palette-${ palette }` );

    if ( useSourceColorAsReference ) {
      newClassnames.push( 'sm-palette--shifted' );
    }
  }

  if ( supports === true || colorSignalSupport?.paletteVariationClassname ) {
    if ( colorSignal !== 0 ) {
      newClassnames.push( `sm-variation-${ paletteVariation }` );
    }
  }

  if ( supports === true || colorSignalSupport?.colorSignalClassname ) {
    newClassnames.push( `sm-color-signal-${ colorSignal }` );
  }

  return newClassnames.join( " " );
}

export const getAlignmentClassnames = ( attributes ) => {
  const { contentPosition } = attributes;

  const alignment = contentPosition.split( " " );
  const verticalAlignment = alignment[0];
  const horizontalAlignment = alignment[1];

  return `novablocks-u-valign-${ verticalAlignment } novablocks-u-halign-${ horizontalAlignment }`;
}

export const normalizeVariationValue = ( value ) => {
  return ( value + 11 ) % 12 + 1;
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

export const isFunctionalPalette = palette => {
  const id = palette.id + '';
  return id.charAt(0) === '_';
}

export const mapPalettesToColorPalette = palette => {
  const { colors, sourceIndex } = palette;
  return {
    name: palette.label,
    color: colors[sourceIndex].value
  };
}

export const getSiteColorVariation = () => {
  return parseInt( window?.styleManager?.siteColorVariation || 1, 10 );
}

export const getSpacingCSSProps = ( attributes ) => {

  const {
    blockTopSpacing,
    blockBottomSpacing,
    emphasisTopSpacing,
    emphasisBottomSpacing,
    verticalAlignment
  } = attributes;

  return {
    '--novablocks-emphasis-top-spacing': verticalAlignment === 'top' ? Math.abs(emphasisTopSpacing) : emphasisTopSpacing,
    '--novablocks-emphasis-bottom-spacing': verticalAlignment === 'bottom' ? Math.abs(emphasisBottomSpacing) : emphasisBottomSpacing,
    '--novablocks-block-top-spacing': blockTopSpacing,
    '--novablocks-block-bottom-spacing': blockBottomSpacing,
    '--novablocks-block-zindex': Math.max( 0, -1 * ( blockTopSpacing + blockBottomSpacing ) ),
  }
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


export const getPaletteConfig = ( palette ) => {
  const palettes = window?.styleManager?.palettes;

  if ( ! Array.isArray( palettes ) || ! palettes.length ) {
    return { sourceIndex: 6 }
  }

  return palettes.find( paletteIterator => paletteIterator.id === palette ) || palettes[0];
}

/**
 * For a given set of attributes, return the absolute variation value
 * which can differ from the actual paletteVariation attribute value
 * when the useSourceColorAsReference attribute is set to true or Palette Basis Offset is different than 1
 * @param attributes
 * @returns {*}
 */
export const getAbsoluteColorVariation = ( attributes ) => {
  const { palette, useSourceColorAsReference } = attributes;
  const paletteVariation = parseInt( attributes.paletteVariation, 10 );
  const sourceIndex = getSourceIndexFromPaletteId( palette );
  const absoluteVariation = useSourceColorAsReference ? sourceIndex + 1 : paletteVariation;

  return addSiteVariationOffset( absoluteVariation );
}

export const getVariationFromSignal = ( signal ) => {
  let variation = 1;

  if ( signal === 1 ) {
    variation = 3;
  }

  if ( signal === 2 ) {
    variation = 8;
  }

  if ( signal === 3 ) {
    variation = 11;
  }

  return removeSiteVariationOffset( variation );
}

/**
 * Calculate what's the colorSignal generated by a variation for a given reference variation
 * @param compared the paletteVariation to be used
 * @param reference the block's parent variation or any given reference variation for that matter
 * @returns {*}
 */
export const getSignalRelativeToVariation = ( compared, reference ) => {
  const variationOptions = getSignalOptionsFromVariation( reference );

  return variationOptions.reduce( ( prev, curr, index, arr ) => {
    return ( Math.abs(curr - compared ) < Math.abs( arr[prev] - compared ) ? index : prev );
  }, 0 );
}

/**
 * For a given reference value, returns an array containing the paletteVariation values generated
 * by every colorSignal value from 0 to 3
 * @param variation
 * @returns {*[]}
 */
export const getSignalOptionsFromVariation = ( variation ) => {
  const variationOptions = Array.from( Array( 4 ).keys() ).map( index => getVariationFromSignal( index ) );

  variationOptions.sort( ( variation1, variation2 ) => {
    return Math.abs( variation - variation1 ) < Math.abs( variation - variation2 ) ? -1 : 1;
  } );

  return variationOptions;
}

/**
 * Shorthand to calculate the colorSignal of child elements for blocks that have support for contentColorSignal
 * @param attributes
 * @returns {*}
 */
export const getContentVariationBySignal = ( attributes ) => {

  const {
    contentColorSignal,
    paletteVariation,
  } = attributes;

  return computeColorSignal( paletteVariation, contentColorSignal );
}

/**
 * For a given pair of a reference paletteVariation and a colorSignal value return a new paletteVariation value
 * If the signal between the reference and the current variation is the same as the passed colorSignal value
 * We return the current paletteVariation instead of calculating it again, since it's probably a value
 * intentionally chosen by the user.
 * @param reference the reference variation to compute the colorSignal on
 * @param colorSignal the desired colorSignal value
 * @param paletteVariation the block's current paletteVariation attribute's value
 * @returns {*}
 */
export const computeColorSignal = ( reference, colorSignal, paletteVariation ) => {
  const currentSignal = getSignalRelativeToVariation( paletteVariation, reference );
  const signalOptions = getSignalOptionsFromVariation( reference );

  if ( currentSignal === colorSignal ) {
    return paletteVariation;
  }

  return signalOptions[ colorSignal ];
}

/**
 * Returns a palette's source color position after it has been shifted with the Palette Basis Offset option
 * @param palette
 * @returns {number}
 */
export const getSourceIndexFromPaletteId = ( palette ) => {
  const paletteConfig = getPaletteConfig( palette );
  const siteVariation = getSiteColorVariation();
  const { sourceIndex } = paletteConfig;

  return ( sourceIndex - siteVariation + 1 + 12 ) % 12;
}

/**
 * Add the value of the Palette Basis Offset control to a variation to simplify calculations
 * @param variation
 * @returns {*}
 */
export const addSiteVariationOffset = ( variation ) => {
  const siteVariation = getSiteColorVariation();
  return normalizeVariationValue( variation + siteVariation - 1 );
}

/**
 * Remove the value of the Palette Basis Offset control, that was previously added to simplify calculations
 * @param variation
 * @returns {*}
 */
export const removeSiteVariationOffset = ( variation ) => {
  const siteVariation = getSiteColorVariation();
  return normalizeVariationValue( variation - siteVariation + 1 );
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
