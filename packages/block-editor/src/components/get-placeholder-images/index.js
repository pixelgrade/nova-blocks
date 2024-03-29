import { createApi } from "unsplash-js";

const APP_NAME = 'Nova Blocks';
const COLLECTION_ID = '10606015';
const URL_PARAMS = encodeURI( `utm_source=${ APP_NAME }&utm_medium=referral` );

class PlaceholderImagesCollection {

	constructor() {
		this.fetchedImages = false;
		this.images = [];
	}

	fetch() {
		const normalize = this.normalize.bind( this );
		const apiKey = window?.pixcare?.themeConfig?.unsplashApiKey;

		if ( ! apiKey ) {
			this.fetchedImages = true;
			return [];
		}

		this.api = createApi( { accessKey: apiKey } );

		return this.api.collections.getPhotos( { collectionId: COLLECTION_ID } )
		               .then( result => {
                     if (result.errors) {
                       console.log('error occurred: ', result.errors[0]);
                     } else {
                       const { results: photos, total} = result.response;
                       this.images = photos.map( normalize );
                       return this.images;
                     }
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
			url: photo.urls.regular,
			type: 'image',
			width: photo.width,
			height: photo.height,
			sizes: {
				full: {
					url: photo.urls.full,
					width: photo.width,
					height: photo.height,
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
					url: photo.urls.regular
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
			caption: `<p class="credits">Photo by <a target="_blank" href="${ photo.user.links.html }?${ URL_PARAMS }">${ photo.user.name }</a> on <a target="_blank" href="https://unsplash.com?${ URL_PARAMS }">Unsplash</a></p>`,
			download: () => {
				this.api.photos.trackDownload( {
          downloadLocation: photo.links.download_location,
        } );
			},
		};
	};
}

const instance = new PlaceholderImagesCollection();

export default instance.get.bind( instance );
