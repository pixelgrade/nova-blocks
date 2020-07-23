const apiFetch = wp.apiFetch;

export const normalizeImages = ( images ) => {
	const promises = images.map( image => {
		return apiFetch( {
			path: `/wp/v2/media/${ image.id }`,
		} ).then( data => {
			const newImage = Object.assign( {}, image, {
				description: data?.description?.raw
			} );
			return newImage;
		} )
	} );

	return Promise.all( promises );
};
