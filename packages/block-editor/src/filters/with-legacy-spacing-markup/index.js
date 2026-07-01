import { addFilter } from '@wordpress/hooks';

import legacySpacingDetectionModule from './detect-legacy-spacing';

const { detectLegacySpacingFlags } = legacySpacingDetectionModule;

const withLegacySpacingMetadata = ( blockAttributes, blockType, innerHTML ) => {
  const legacyFlags = detectLegacySpacingFlags( blockType?.name, innerHTML );

  if ( ! legacyFlags ) {
    return blockAttributes;
  }

  return {
    ...blockAttributes,
    metadata: {
      ...( blockAttributes?.metadata || {} ),
      __novablocksLegacySpacing: legacyFlags,
    },
  };
};

addFilter(
  'blocks.getBlockAttributes',
  'novablocks/legacy-spacing-markup',
  withLegacySpacingMetadata
);
