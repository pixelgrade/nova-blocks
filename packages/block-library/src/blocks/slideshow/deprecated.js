import save from "./save";

import {
  alignmentAttributes,
  alignmentDeprecated,
  colorAttributes,
  layoutAttributes,
} from "@novablocks/block-editor";

import blockAttributes from "./attributes";

const attributes = Object.assign( {}, blockAttributes, alignmentAttributes, colorAttributes, layoutAttributes );

const deprecated = [{
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
}];

deprecated.push({
  attributes: {
    ...attributes,
    ...alignmentAttributes,
  },
  ...alignmentDeprecated,
  save,
});

export default deprecated;
