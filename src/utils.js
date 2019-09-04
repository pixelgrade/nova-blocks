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
