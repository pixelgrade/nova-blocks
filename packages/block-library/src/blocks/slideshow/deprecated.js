import save from "./save";

import blockAttributes from "./attributes"

import {
	alignmentAttributes,
	colorAttributes,
	layoutAttributes,
	scrollingAttributes,
} from "@novablocks/components";

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
