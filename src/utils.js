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
	jQuery( `.${BLOCK_NAME}` ).filter( '.has-parallax' ).find( `.${BLOCK_NAME}__parallax` ).rellax({
		container: `.${BLOCK_NAME}__mask`,
	});
}
