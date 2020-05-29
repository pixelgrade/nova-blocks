import save from "./save";

import mediaAttributes from "./attributes"
import galleryAttributes from "../../components/advanced-gallery/attributes";

const attributes = Object.assign( {}, mediaAttributes, galleryAttributes );

const { images, ...attributesWithoutImages } = attributes;

const oldGalleryAttributes = {
	...attributesWithoutImages,
	gallery: {
		type: 'array',
		items: {
			type: 'object',
		},
		default: [],
	}
};

const deprecated = [];

deprecated.push({
	attributes: oldGalleryAttributes,
	isEligible( attributes, innerBlocks ) {
		return "undefined" === typeof attributes.images && typeof "undefined" !== attributes.gallery;
	},
	migrate( attributes, innerBlocks ) {
		const { gallery, ...newAttributes } = attributes;

		return {
			...newAttributes,
			images: gallery
		};
	},
	save,
});

deprecated.push({
	attributes: oldGalleryAttributes,
	isEligible( attributes, innerBlocks ) {
		return "undefined" === typeof attributes.defaultsGenerated;
	},
	migrate( attributes, innerBlocks ) {
		return {
			...attributes,
			defaultsGenerated: true
		};
	},
	save,
});

export default deprecated;
