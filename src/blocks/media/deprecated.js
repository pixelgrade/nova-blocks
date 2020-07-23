import save from "./save";
import { omit } from 'lodash';

const deprecated = [
	{
		attributes: {
			align: {
				type: 'string',
				default: 'full'
			},
			mediaPosition: {
				type: 'string',
				default: 'left',
			},
			horizontalAlignment: {
				type: 'string',
				default: 'center',
			},
			verticalAlignment: {
				type: 'string',
				default: 'center'
			},
			gallery: {
				type: 'array',
				items: {
					type: 'object',
				},
				default: {},
			},
			stylePreset: {
				type: 'string',
				default: 'the-cloud-atlas',
			},
			sizeContrast: {
				type: 'number',
				default: 0,
			},
			positionShift: {
				type: 'number',
				default: 0,
			},
			elementsDistance: {
				type: 'number',
				default: 20,
			},
			placementVariation: {
				type: 'number',
				default: 25,
			},
			imageRotation: {
				type: 'number',
				default: 0,
			},
			imageResizing: {
				type: 'string',
				default: 'cropped',
			},
			containerHeight: {
				type: 'number',
				default: 50,
			},
			objectPosition: {
				type: 'number',
				default: 50,
			},
			verticalSpacing: {
				type: 'number',
				default: 0,
			},
		},
		isEligible( attributes ) {
			console.log( attributes );
			return "undefined" !== typeof attributes.gallery;
		},
		migrate( attributes ) {
			const { contentStyle, gallery } = attributes;

			return {
				...omit( attributes, ['gallery'] ),
				images: gallery,
				contentStyle: contentStyle === 'basic' ? 'moderate' : contentStyle,
				upgradedToModerate: true,
				defaultsGenerated: true
			};
		},
		save
	}
];

export default deprecated;
