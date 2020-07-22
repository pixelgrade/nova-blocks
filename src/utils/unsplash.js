import Unsplash, { toJson } from "unsplash-js";

const APP_NAME = 'Nova Blocks';
const COLLECTION_ID = 10606015;
const URL_PARAMS = encodeURI( `utm_source=${ APP_NAME }&utm_medium=referral` );

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
		const normalize = this.normalize.bind( this );

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

	normalize( photo ) {
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
				novablocks_huge: {
					url: photo.urls.full
				},
				novablocks_large: {
					url: photo.urls.regular
				},
				novablocks_medium: {
					url: photo.urls.small
				},
				novablocks_tiny: {
					url: photo.urls.thumb
				},
			},
			title: photo.description,
			caption: `<p class="credits">Photo by <a href="${ photo.user.links.html }?${ URL_PARAMS }">${ photo.user.name }</a> on <a href="https://unsplash.com?${ URL_PARAMS }">Unsplash</a></p>`,
			download: () => {
				this.api.photos.downloadPhoto( photo );
			},
		};
	};
}

const instance = new PlaceholderImagesCollection();
const getPlaceholderImages = instance.get.bind( instance );

export { getPlaceholderImages };
