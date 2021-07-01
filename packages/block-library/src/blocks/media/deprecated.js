import { addFilter } from "@wordpress/hooks";
import { alignmentAttributes, alignmentDeprecated } from "@novablocks/block-editor";

import save from "./save";
import { omit } from 'lodash';

const mediaAddDeprecated = ( settings, name ) => {

  if ( name !== 'novablocks/media' ) {
    return settings;
  }

  const attributes = settings.attributes;

  const deprecated = [
    {
      attributes: {
        ...omit( attributes, [ 'images' ] ),
        gallery: attributes.images
      },
      isEligible( attributes ) {
        return ! attributes.images && !! attributes?.gallery;
      },
      migrate( attributes ) {
        const { gallery } = attributes;
        const images = Array.isArray( gallery ) && !! gallery.length ? gallery : attributes.images;

        return {
          ...omit( attributes, [ 'gallery' ] ),
          images: images,
        };
      },
      save
    },
//  {
//    attributes,
//    isEligible( attributes ) {
//      return ! attributes?.upgradedToModerate;
//    },
//    migrate( attributes ) {
//      const { contentStyle } = attributes;
//      const newContentStyle = contentStyle === 'basic' ? 'moderate' : contentStyle;
//
//      return {
//        ...attributes,
//				contentStyle: newContentStyle,
//        upgradedToModerate: true
//      };
//    },
//    save
//  },
    {
      attributes,
      isEligible( attributes ) {
        return ! attributes?.defaultsGenerated;
      },
      migrate( attributes ) {

        return {
          ...attributes,
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
        return !! attributes?.blockStyle || !! attributes?.contentStyle;
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

          if ( attributes.contentStyle === 'moderate' ) {
            newAttributes.contentColorSignal = 1;
          }

          if ( attributes.contentStyle === 'highlighted' ) {
            newAttributes.contentColorSignal = 3;
          }
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

  deprecated.push({
    attributes: {
      ...attributes,
      ...alignmentAttributes,
    },
    ...alignmentDeprecated,
    save,
  });

  return {
    ...settings,
    deprecated
  }
}

addFilter( 'blocks.registerBlockType', 'novablocks/media-add-deprecated', mediaAddDeprecated, 20 );
