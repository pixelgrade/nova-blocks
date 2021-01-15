import _ from 'lodash';
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

const oldAttributes = {
  contentColor: {
    type: "string"
  },
  overlayFilterStyle: {
    type: "string"
  }
};

const deprecated = [{
  attributes: _.omit( attributes, Object.keys( oldAttributes ) ),
  isEligible( attributes ) {
    return "undefined" !== typeof attributes.contentColor;
  },
  migrate( attributes ) {
    let paletteVariation = '0';

    if ( attributes.contentColor.search( 'FFF' ) > -1 ) {
      paletteVariation = '10';
    }

    return {
      ...attributes,
      defaultsGenerated: true,
      paletteVariation: paletteVariation
    };
  },
  save,
}, {
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
}];

export default deprecated;
