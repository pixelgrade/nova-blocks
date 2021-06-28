import save from "./save";

import blockAttributes from "./attributes";

import {
	alignmentAttributes,
  alignmentDeprecated,
	layoutAttributes,
} from "@novablocks/block-editor";

const attributes = Object.assign( {}, blockAttributes, alignmentAttributes, layoutAttributes );

const deprecated = [
  {
    attributes,
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
  }
];

deprecated.push({
  attributes: {
    ...attributes,
    ...alignmentAttributes,
  },
  ...alignmentDeprecated,
  save,
});

export default deprecated;
