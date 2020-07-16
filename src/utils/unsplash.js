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
		type: 'image',
		width: photo.width,
		height: photo.height,
		sizes: {
			full: {
				url: photo.urls.full
			},
			large: {
				url: photo.urls.regular
			},
			medium: {
				url: photo.urls.small
			},
			thumbnail: {
				url: photo.urls.thumb
			},
		},
		title: photo.description,
		caption: `<p>Photo by <a href="${ photo.user.links.html }">${ photo.user.name }</a> on <a href="https://unsplash.com">Unsplash</a></p>`,
		download: () => {
			unsplash.photos.downloadPhoto( photo );
		},
	};
};

export { getPlaceholderImages };
