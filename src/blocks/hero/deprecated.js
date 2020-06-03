import save from "./save";

import blockAttributes from "./attributes";
import dopplerAttributes from "../../components/scrolling-effect-controls/attributes";
import layoutAttributes from "../../components/layout-panel/attributes";
import colorAttributes from "../../components/color-controls/attributes";

const attributes = Object.assign( {}, blockAttributes, dopplerAttributes, layoutAttributes, colorAttributes );

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
