import { addFilter } from '@wordpress/hooks';

import { detectLegacySpacingFlags } from './detect-legacy-spacing';

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
