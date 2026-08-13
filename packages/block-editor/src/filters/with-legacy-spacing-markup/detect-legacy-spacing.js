export const LEGACY_SPACE_BLOCKS = [ 'core/group', 'core/columns', 'core/separator' ];

// Content saved before the space-and-sizing feature existed carries none of
// the --nb-* custom properties at all. Flag it separately from the
// partial-drift cases below so save-time filters can skip injecting the
// whole property set instead of trying to reconcile a handful of them.
export const detectLegacySpacingFlags = ( blockName, innerHTML ) => {
  if ( ! LEGACY_SPACE_BLOCKS.includes( blockName ) || typeof innerHTML !== 'string' ) {
    return null;
  }

  if ( ! innerHTML.includes( '--nb-' ) ) {
    const hasColorSignalMarkup = innerHTML.includes( 'data-palette=' )
      && innerHTML.includes( 'data-palette-variation=' )
      && innerHTML.includes( 'data-color-signal=' );

    return hasColorSignalMarkup
      ? { noSpacingMarkup: true, hasColorSignalMarkup: true }
      : { noSpacingMarkup: true };
  }

  // Only annotate blocks that carry legacy NB spacing custom properties.
  if ( ! innerHTML.includes( '--nb-emphasis-top-spacing' ) ) {
    return null;
  }

	const hasAspectRatioVar = innerHTML.includes( '--nb-card-media-aspect-ratio' );
	const hasMinHeightFallbackVar = innerHTML.includes( '--nb-min-height-fallback' );
	const hasZIndexPx = /--nb-block-zindex:\s*[^;]*px\s*;/i.test( innerHTML );
	const hasMediaHeightPx = /--nb-card-media-container-height:\s*[^;]*px\s*(?:;|["']|$)/i.test( innerHTML );
	const hasEmphasisAreaPx = /--nb-emphasis-area:\s*[^;]*px\s*(?:;|["']|$)/i.test( innerHTML );
	const legacyPaddingMatch = ! hasAspectRatioVar
		? innerHTML.match( /--nb-card-media-padding-top:\s*([^;]+)\s*;/i )
		: null;

	return {
		missingAspectRatioVar: ! hasAspectRatioVar,
		missingMinHeightFallbackVar: ! hasMinHeightFallbackVar,
		zIndexSerializedAsPx: hasZIndexPx,
		mediaHeightSerializedAsPx: hasMediaHeightPx,
		emphasisAreaSerializedAsPx: hasEmphasisAreaPx,
		...( legacyPaddingMatch ? { legacyCardMediaPaddingTop: legacyPaddingMatch[1].trim() } : {} ),
	};
};
