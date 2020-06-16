import save from "./save";

import blockAttributes from "./attributes";
import alignmentAttributes from "../../components/alignment-controls/attributes";
import colorAttributes from "../../components/color-controls/attributes";
import layoutAttributes from "../../components/layout-panel/attributes";
import scrollingAttributes from "../../components/scrolling-effect-controls/attributes";

const deprecated = [];

deprecated.push({
	attributes: {
		...blockAttributes,
		...alignmentAttributes,
		...colorAttributes,
		...layoutAttributes,
		...scrollingAttributes
	},
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

deprecated.push({
	attributes: {
		...blockAttributes,
		...alignmentAttributes,
	},
	...alignmentDeprecated,
	save,
});

export default deprecated;
