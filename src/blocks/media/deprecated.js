import save from "./save";

import blockAttributes from "./attributes"
import galleryAttributes from "../../components/advanced-gallery/attributes";

const attributes = Object.assign( {}, blockAttributes, galleryAttributes );

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
	isEligible( attributes ) {
		return "undefined" === typeof attributes.images && typeof "undefined" !== attributes.gallery;
	},
	migrate( attributes ) {
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
	isEligible( attributes ) {
		return "undefined" === typeof attributes.defaultsGenerated;
	},
	migrate( attributes ) {
		return {
			...attributes,
			defaultsGenerated: true
		};
	},
	save,
});

import alignmentDeprecated from "../../components/alignment-controls/deprecated";
import alignmentAttributes from "../../components/alignment-controls/attributes";

deprecated.push({
	attributes: {
		...blockAttributes,
		...alignmentAttributes,
	},
	...alignmentDeprecated,
	save,
});

export default deprecated;
