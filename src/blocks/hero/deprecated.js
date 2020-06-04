import save from "./save";

import blockAttributes from "./attributes";
import alignmentAttributes from "../../components/alignment-controls/attributes";
import colorAttributes from "../../components/color-controls/attributes";
import layoutAttributes from "../../components/layout-panel/attributes";
import scrollingAttributes from "../../components/scrolling-effect-controls/attributes";

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
