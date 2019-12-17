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
}

export const parallaxInit = function( BLOCK_NAME ) {

	(function($) {

		const $blocks = $( `.${BLOCK_NAME}` );
		const $targets = $blocks.filter( '.has-parallax' );

		$targets.find( `.${BLOCK_NAME}__parallax` ).rellax( {
			container: `.${BLOCK_NAME}__mask`,
			absolute: isSafari,
		} );

		$blocks.find( `.${BLOCK_NAME}__parallax` ).each( ( i, obj ) => {
			const $obj = $( obj );
			$obj.imagesLoaded( () => {
				$obj.css( 'opacity', 1 );
			} );
		} );

	})( jQuery );

}

export const withFirstBlockConditions = function( Component ) {

	return function( props ) {

		const { getBlocks, getSelectedBlockClientId } = wp.data.select( 'core/block-editor' );
		const blocks = getBlocks();
		const selectedBlockClientId = getSelectedBlockClientId();
		const index = blocks.findIndex( block => block.clientId === selectedBlockClientId );
		const show = index === 0 && props.clientId === selectedBlockClientId;

		return show && <Component { ...props } />;

	}

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
}

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
