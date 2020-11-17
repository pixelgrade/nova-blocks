import save from "./save";

import blockAttributes from "./attributes";

import {
	alignmentAttributes,
	colorAttributes,
	layoutAttributes,
} from "@novablocks/block-editor";

import {
	scrollingAttributes,
} from "@novablocks/doppler";

const attributes = Object.assign( {}, blockAttributes, alignmentAttributes, colorAttributes, layoutAttributes, scrollingAttributes );

const deprecated = [];

deprecated.push({
	attributes,
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
