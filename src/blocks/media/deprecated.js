import save from "./save";

import blockAttributes from "./attributes"
import galleryAttributes from "../../components/advanced-gallery/attributes";

const attributes = Object.assign( {}, blockAttributes, galleryAttributes );

const { images, ...attributesWithoutImages } = attributes;

const oldAttributes = {
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
	attributes: oldAttributes,
	isEligible( attributes ) {
		return typeof "undefined" !== attributes.gallery;
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
	attributes: oldAttributes,
	isEligible( attributes ) {
		return "undefined" === typeof attributes.defaultsGenerated;
	},
	migrate( attributes ) {
		const { contentStyle } = attributes;

		return {
			...attributes,
			contentStyle: contentStyle === 'basic' ? 'moderate' : contentStyle,
			upgradedToModerate: true,
			defaultsGenerated: true
		};
	},
	save,
});

export default deprecated;
