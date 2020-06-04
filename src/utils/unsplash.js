import Unsplash, { toJson } from "unsplash-js";

const APP_ACCESS_KEY = 'UuNmeU7dAHYEpk8VQ0v0v876vxSWKveEtovqYug-6M8';
const COLLECTION_ID = 10606015;
const unsplash = new Unsplash({ accessKey: APP_ACCESS_KEY } );

const getPlaceholderImages = unsplash.collections.getCollectionPhotos( COLLECTION_ID )
                                     .then( toJson )
                                     .then( photos => photos.map( normalize ) );

const normalize = photo => {
	return {
		id: photo.id,
		url: photo.urls.full,
		sizes: {
			full: {
				url: photo.urls.full
			},
			large: {
				url: photo.urls.regular
			}
		},
		description: photo.description,
		caption: photo['alt_description'],
	};
};

export { getPlaceholderImages };
