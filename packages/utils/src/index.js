import classnames from "classnames";

export { getPlaceholderImages } from './unsplash';
export { normalizeImages } from './images';
export { default as generateDefaults } from './generate-defaults';

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
	const classes = [ 'novablocks-controls-wrap' ];
	const compiledAttributes = compileAttributes( attributes );

	if ( Object.keys( compiledAttributes ).some( key => compiledAttributes[ key ] !== attributes[ key ] ) ) {
		classes.push( 'novablocks-controls-wrap--dirty' );
	}

	return classnames( classes );
};
