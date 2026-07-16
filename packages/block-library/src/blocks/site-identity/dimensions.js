export const normalizeIdentityWidth = ( width ) => {
	const numericWidth = Number( width );

	if ( ! Number.isFinite( numericWidth ) ) {
		return 395;
	}

	return Math.min( 800, Math.max( 80, Math.round( numericWidth ) ) );
};

export const getIdentityWidthStyle = ( width ) => ( {
	'--nb-site-identity-width': `${ normalizeIdentityWidth( width ) }px`,
} );

export const getIdentityEditorWidthStyle = ( width ) => {
	const normalizedWidth = normalizeIdentityWidth( width );

	return {
		...getIdentityWidthStyle( normalizedWidth ),
		'--nb-site-identity-width-value': normalizedWidth,
	};
};
