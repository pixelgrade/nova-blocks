import Unsplash, { toJson } from "unsplash-js";

const COLLECTION_ID = 10606015;

class PlaceholderImagesCollection {

	constructor() {
		this.fetchedImages = false;
		this.images = [];

		const apiKey = window?.pixcare?.themeConfig?.unsplashApiKey;

		if ( !! apiKey ) {
			this.api = new Unsplash( { accessKey: apiKey } );
		} else {
			this.fetchedImages = true;
		}
	}

	fetch() {
		return this.api.collections.getCollectionPhotos( COLLECTION_ID )
		               .then( toJson )
		               .then( photos => {
			                this.images = photos.map( normalize );
			                return this.images;
		               } )
		               .finally( () => {
		               	    this.fetchedImages = true;
		               } );
	}

	get() {
		if ( this.fetchedImages ) {
			return this.images;
		}

		return this.fetch();
	}
}

const instance = new PlaceholderImagesCollection();
const getPlaceholderImages = instance.get.bind( instance );

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
