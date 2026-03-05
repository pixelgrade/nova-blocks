import { getSpacingCSSProps } from "@novablocks/utils";
import { getSupports } from "../../utils";

const withSpaceAndSizingSaveCustomProps = ( extraProps, blockType, attributes ) => {

  const supports = getSupports( blockType.name );

  if ( ! supports?.novaBlocks?.spaceAndSizing ) {
    return extraProps;
  }

  const spacingCSSProps = getSpacingCSSProps( attributes, extraProps?.style );
  const legacySpacingFlags = attributes?.metadata?.__novablocksLegacySpacing;

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
