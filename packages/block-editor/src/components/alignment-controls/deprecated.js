import { isUndefined } from "lodash";
import attributes from "./attributes";

const deprecated = {
	isEligible( attributes, innerBlocks ) {
		return ! isUndefined( attributes.horizontalAlignment ) || ! isUndefined( attributes.verticalAlignment );
	},
	migrate( oldAttributes, innerBlocks ) {
		const { horizontalAlignment, verticalAlignment, ...attributes } = oldAttributes;

		return {
			...attributes,
			contentPosition: `${ verticalAlignment } ${ horizontalAlignment }`
		};
	},
};

export default deprecated;
