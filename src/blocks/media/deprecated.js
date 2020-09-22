import save from "./save";
import { omit } from 'lodash';

import blockAttributes from "./attributes"
import galleryAttributes from "../../components/advanced-gallery/attributes";

const attributes = Object.assign( {}, blockAttributes, galleryAttributes );

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
			const { contentStyle, gallery } = attributes;
			const images = Array.isArray( gallery ) && !! gallery.length ? gallery : attributes.images;

			return {
				...omit( attributes, ['gallery'] ),
				images: images,
				contentStyle: contentStyle === 'basic' ? 'moderate' : contentStyle,
				upgradedToModerate: true,
				defaultsGenerated: true
			};
		},
		save
	}
];

export default deprecated;
