import save from "./save";
import { omit } from 'lodash';

import blockAttributes from "./attributes"
import AdvancedGallery from "@novablocks/advanced-gallery";

const attributes = Object.assign( {}, blockAttributes, AdvancedGallery.attributes );

const deprecated = [
	{
		attributes: {
			...omit( attributes, ['images'] ),
			gallery: attributes.images
		},
		isEligible( attributes ) {
			return !! attributes?.defaultsGenerated;
		},
		migrate( attributes ) {
			const { contentStyle, gallery } = attributes;
			const images = Array.isArray( gallery ) && !! gallery.length ? gallery : attributes.images;

			return {
				...omit( attributes, ['gallery'] ),
				images: images,
				contentStyle: contentStyle === 'basic' ? 'moderate' : contentStyle,
				upgradedToModerate: true,
				defaultsGenerated: true
			};
		},
		save
	},
  {
    attributes: {
      ...attributes,
      accentColor: {
        type: "string",
        default: "primary"
      },
      blockStyle: {
        type: "string",
        default: "basic"
      },
      style: {
        type: "string",
        default: "default"
      },
    },
    isEligible( attributes ) {
      return !! attributes?.blockStyle || !! attributes?.contentStyle ;
    },
    migrate( attributes ) {
      const newAttributes = {};

      if ( attributes.blockStyle === 'highlighted' ) {
        if ( attributes?.style === 'alternate' ) {
          newAttributes.colorSignal = 2;
          newAttributes.paletteVariation = 7;
        } else {
          newAttributes.colorSignal = 3;
          newAttributes.paletteVariation = 12;
        }
      }

      if ( attributes.blockStyle === 'moderate' ) {
        newAttributes.colorSignal = 1;
        newAttributes.paletteVariation = 3;
      }

      newAttributes.palette = 1;

      if ( attributes.accentColor === 'secondary' ) {
        newAttributes.palette = 2;
      }

      if ( attributes.accentColor === 'tertiary' ) {
        newAttributes.palette = 3;
      }

      return {
        ...omit( attributes, [ 'blockStyle', 'style' ] ),
        ...newAttributes
      };
    },
    save
  }
];

export default deprecated;
