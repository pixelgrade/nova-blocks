import { getSpacingCSSProps } from "@novablocks/utils";
import { getSupports } from "../../utils";

const withSpaceAndSizingSaveCustomProps = ( extraProps, blockType, attributes ) => {

  const supports = getSupports( blockType.name );

  if ( ! supports?.novaBlocks?.spaceAndSizing ) {
    return extraProps;
  }

  const legacySpacingFlags = attributes?.metadata?.__novablocksLegacySpacing;

  // Content saved before this feature existed carries none of the --nb-*
  // custom properties; leave it untouched instead of injecting a manufactured
  // default set that drifts from its own (styleless) stored markup.
  if ( legacySpacingFlags?.noSpacingMarkup ) {
    return extraProps;
  }

  const spacingCSSProps = getSpacingCSSProps( attributes, extraProps?.style );

  if ( legacySpacingFlags?.missingAspectRatioVar ) {
    delete spacingCSSProps['--nb-card-media-aspect-ratio'];
  }

  if ( legacySpacingFlags?.missingMinHeightFallbackVar ) {
    delete spacingCSSProps['--nb-min-height-fallback'];
  }

  if ( legacySpacingFlags?.zIndexSerializedAsPx ) {
    const zIndex = spacingCSSProps['--nb-block-zindex'];
    if ( typeof zIndex === 'number' ) {
      spacingCSSProps['--nb-block-zindex'] = `${ zIndex }px`;
    }
  }

  return {
    ...extraProps,
    style: {
      ...extraProps?.style,
      ...spacingCSSProps
    },
  }
};

export default withSpaceAndSizingSaveCustomProps;
