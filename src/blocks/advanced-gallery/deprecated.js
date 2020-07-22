import galleryAttributes from "../../components/advanced-gallery/attributes";
import blockAttributes from "./attributes";

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
		return "undefined" !== typeof attributes.gallery;
	},
	migrate( attributes ) {
		const { gallery, ...otherAttributes } = attributes;

		return {
			...otherAttributes,
			images: gallery
		};
	},
	save() {
		return false;
	},
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
	save() {
		return false;
	},
});

export default deprecated;
