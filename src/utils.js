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
	for ( let i = 0; i < max - min; i++ ) {
		array.push( i + min );
	}
	return array;
}

export const todayDate = function( separator, isValid ) {
	let currentTime = new Date(),
		month = currentTime.getMonth() + 1,
		day = currentTime.getDate(),
		year = currentTime.getFullYear();

	if ( day < 10 ) {
		day = '0' + day;
	}

	if ( month < 10 ) {
		month = '0' + month;
	}

	if ( isValid === true) {
		return year + separator + month + separator + day;
	} else {
		return day + separator + month + separator + year;
	}
}

export const parallaxInit = function( BLOCK_NAME ) {

	(function($) {

		const $target = $( `.${BLOCK_NAME}` ).filter( '.has-parallax' ).find( `.${BLOCK_NAME}__parallax` )
		$target.rellax( { container: `.${BLOCK_NAME}__mask`, } );

		$target.each( ( i, obj ) => {
			const $obj = $( obj );
			$obj.imagesLoaded(() => {
				$obj.css( 'opacity', 1 );
			});
		} );

	})( jQuery )
}
