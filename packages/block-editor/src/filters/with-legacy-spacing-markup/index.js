import { addFilter } from '@wordpress/hooks';

import {
  detectLegacySpacingFlags,
  LEGACY_SPACE_BLOCKS,
} from './detect-legacy-spacing';

const withLegacySpacingAttribute = ( settings ) => {
  if ( ! LEGACY_SPACE_BLOCKS.includes( settings?.name ) ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      __novablocksLegacySpacing: {
        type: 'object',
        role: 'local',
      },
    },
  };
};

const withLegacySpacingMetadata = ( blockAttributes, blockType, innerHTML ) => {
  const legacyFlags = detectLegacySpacingFlags( blockType?.name, innerHTML );

  if ( ! legacyFlags ) {
    return blockAttributes;
  }

  return {
    ...blockAttributes,
    __novablocksLegacySpacing: legacyFlags,
  };
};

addFilter(
  'blocks.registerBlockType',
  'novablocks/legacy-spacing-markup/attribute',
  withLegacySpacingAttribute
);

addFilter(
  'blocks.getBlockAttributes',
  'novablocks/legacy-spacing-markup',
  withLegacySpacingMetadata
);
