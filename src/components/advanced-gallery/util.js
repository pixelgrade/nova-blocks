

export const getGalleryStyle = ( attributes ) => {
	let { aspectRatio, verticalSpacing } = attributes;
	let numerator = 1;
	let denominator = 1;

	aspectRatio = Math.min( Math.max( -1, aspectRatio ), 1 );

	if ( aspectRatio > 0 ) {
		numerator = 1 + aspectRatio;
	}

	if ( aspectRatio < 0 ) {
		denominator = 1 + Math.abs( aspectRatio );
	}

	return {
		'--novablocks-advanced-gallery-vertical-spacing': `calc( ${ verticalSpacing * 5 } * var(--novablocks-spacing-unit, 10px )`,
		paddingTop: `${ numerator * 100 / denominator }%`,
	}
}

export const getGridStyle = ( attributes ) => {
	const { gridGap } = attributes;

	return {
		'--novablocks-advanced-gallery-grid-gap': `${ 20 * gridGap }px`
	}
}
