import apiFetch from '@wordpress/api-fetch';

const normalizeImages = ( images ) => {
	const promises = images.map( image => {
		return apiFetch( {
			path: `/wp/v2/media/${ image.id }`,
		} ).then( data => {
			return Object.assign( {}, image, {
				description: data?.description?.raw
			} );
		} )
	} );

	return Promise.all( promises );
};

export default normalizeImages;
