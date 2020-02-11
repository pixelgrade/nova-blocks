

export const getGalleryStyle = ( attributes ) => {
	let { containerHeight, verticalSpacing } = attributes;
	let numerator = 1;
	let denominator = 1;

	containerHeight = Math.min( Math.max( -1, containerHeight ), 1 );

	if ( containerHeight > 0 ) {
		numerator = 1 + containerHeight;
	}

	if ( containerHeight < 0 ) {
		denominator = 1 + Math.abs( containerHeight );
	}

	return {
		'--novablocks-advanced-gallery-vertical-spacing': `calc( ${ verticalSpacing * 5 } * var(--novablocks-spacing-unit, 10px )`,
		paddingTop: `${ numerator * 100 / denominator }%`,
	}
}

export const getGridStyle = ( attributes ) => {
	const { elementsDistance } = attributes;

	return {
		'--novablocks-advanced-gallery-grid-gap': `${ 20 * elementsDistance }px`
	}
}
