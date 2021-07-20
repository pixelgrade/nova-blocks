import { addFilter } from "@wordpress/hooks";
import { omit } from 'lodash';

import save from "./save";

const slideshowAddDeprecated = (settings, name) => {

  if ( name !== 'novablocks/slideshow' ) {
    return settings;
  }

  const attributes = settings.attributes;

  const deprecated = [
    {
      attributes: {
        ...attributes,
        contentPadding: {
          type: 'string',
          default: 'small'
        },
        contentPaddingCustom: {
          type: 'number',
          default: 20
        }
      },
      isEligible( attributes ) {
        return attributes?.contentPadding === 'large' || attributes?.contentPadding === 'custom';
      },
      migrate( attributes ) {

        const newAttributes = {};

        if ( attributes?.contentPadding === 'large' ) {
          newAttributes.emphasisTopSpacing = 2;
          newAttributes.emphasisBottomSpacing = 2;
        }

        if ( attributes?.contentPadding === 'custom' ) {

          if ( attributes?.contentPaddingCustom > 10 ) {
            newAttributes.emphasisTopSpacing = 2;
            newAttributes.emphasisBottomSpacing = 2;
          }

          if ( attributes?.contentPaddingCustom > 15 ) {
            newAttributes.emphasisTopSpacing = 3;
            newAttributes.emphasisBottomSpacing = 3;
          }
        }

        return {
          ...omit( attributes, [ 'contentPadding', 'contentPaddingCustom' ] ),
          ...newAttributes
        }
      },
      save
    },
  ]

  return {
    ...settings,
    deprecated
  }
}

addFilter('blocks.registerBlockType', 'novablocks/slideshow-add-deprecated', slideshowAddDeprecated, 20);
