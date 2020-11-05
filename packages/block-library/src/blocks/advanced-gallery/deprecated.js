import { omit } from 'lodash';

import blockAttributes from "./attributes"
import AdvancedGallery from '@novablocks/advanced-gallery';

const attributes = Object.assign( {}, blockAttributes, AdvancedGallery.attributes );

const deprecated = [
	{
		attributes: {
			...omit( attributes, ['images'] ),
			gallery: attributes.images
		},
		isEligible( attributes ) {
			return "undefined" === typeof attributes.defaultsGenerated;
		},
		migrate( attributes ) {
			const { gallery } = attributes;
			const images = Array.isArray( gallery ) && !! gallery.length ? gallery : attributes.images;

			return {
				...omit( attributes, ['gallery'] ),
				images: images,
				defaultsGenerated: true
			};
		},
		save() {
			return false
		}
	}
];

export default deprecated;
