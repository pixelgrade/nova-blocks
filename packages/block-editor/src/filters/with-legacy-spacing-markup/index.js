import { addFilter } from '@wordpress/hooks';

const LEGACY_SPACE_BLOCKS = [ 'core/group', 'core/columns', 'core/separator' ];

const withLegacySpacingMetadata = ( blockAttributes, blockType, innerHTML ) => {
  if ( ! LEGACY_SPACE_BLOCKS.includes( blockType?.name ) || typeof innerHTML !== 'string' ) {
    return blockAttributes;
  }

  // Only annotate blocks that carry legacy NB spacing custom properties.
  if ( ! innerHTML.includes( '--nb-emphasis-top-spacing' ) ) {
    return blockAttributes;
  }

  const hasAspectRatioVar = innerHTML.includes( '--nb-card-media-aspect-ratio' );
  const hasMinHeightFallbackVar = innerHTML.includes( '--nb-min-height-fallback' );
  const hasZIndexPx = /--nb-block-zindex:\s*[^;]*px\s*;/i.test( innerHTML );

  const legacyFlags = {
    missingAspectRatioVar: ! hasAspectRatioVar,
    missingMinHeightFallbackVar: ! hasMinHeightFallbackVar,
    zIndexSerializedAsPx: hasZIndexPx,
  };

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
