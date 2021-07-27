import { addFilter } from "@wordpress/hooks";
import { createBlock } from '@wordpress/blocks';

import { omit } from 'lodash';

import save from "./save";

export const migrateContentPadding = (attributes) => {

  return {
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
  }
}
const migrateContentToGroup = (attributes) => {
  return {
    attributes: {
      ...attributes,
      contentWidth: {
        type: 'string',
        default: 'large'
      },
    },

    isEligible( attributes, innerBlocks ) {
      return innerBlocks[0].name !== 'core/group';
    },

    migrate( attributes, innerBlocks ) {

      let groupBlockAlign = '';

      if ( attributes?.contentWidth === 'full' ) {
        groupBlockAlign = 'full';
      }

      if ( attributes?.contentWidth === 'large' ) {
        groupBlockAlign = 'wide';
      }

      return [
        attributes,
        [
          createBlock(
            'core/group',
            {
              align: groupBlockAlign,
            },
            innerBlocks
          )
        ]
      ]
    },
    save
  }
}

const heroAddDeprecated = (settings, name) => {

  if ( name !== 'novablocks/hero' ) {
    return settings;
  }

  const attributes = settings.attributes;

  const deprecated = [
    migrateContentPadding( attributes),
    migrateContentToGroup( attributes )
  ]

  return {
    ...settings,
    deprecated
  }
}

addFilter('blocks.registerBlockType', 'novablocks/hero-add-deprecated', heroAddDeprecated );
