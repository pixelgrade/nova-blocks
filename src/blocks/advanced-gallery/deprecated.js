import galleryAttributes from "../../components/advanced-gallery/attributes";
import blockAttributes from "./attributes";

const attributes = Object.assign( {}, blockAttributes, galleryAttributes );

const { images, ...oldGalleryAttributes } = attributes;

const deprecated = [];

deprecated.push({
	attributes: oldGalleryAttributes,
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
