import save from "./save";
import blockAttributes from "./attributes"
import layoutAttributes from "../../components/layout-panel/attributes";

const deprecated = [];
const attributes = Object.assign( {}, blockAttributes, layoutAttributes );

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
