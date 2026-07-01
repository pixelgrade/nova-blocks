import { getSupports } from "@novablocks/block-editor";

// Emit this value unitless to match the editor preview
// (with-color-signal-edit-custom-props), the PHP frontend render
// (block-rendering.php), and the SCSS, which all consume --nb-emphasis-area as a
// bare number inside calc( ... * 1% ). A `px` unit here produced invalid CSS and
// drifted the saved markup away from older content (causing block-validation
// "unexpected or invalid content" recovery in the editor).
const toUnitless = ( value ) => {
  if ( typeof value === 'string' ) {
    const trimmed = value.trim().replace( /px$/, '' );
    const numericValue = Number( trimmed );
    return Number.isNaN( numericValue ) ? value : `${ numericValue }`;
  }

  return value;
};

const withColorSignalSaveCustomProps = ( element, blockType, attributes ) => {

  const supports = getSupports( blockType.name );

  if ( ! element || ! supports?.novaBlocks?.spaceAndSizing ) {
    return element;
  }

  // Content saved before the space-and-sizing feature existed carries none of
  // the --nb-* custom properties; leave it untouched (see
  // with-legacy-spacing-markup).
  if ( attributes?.metadata?.__novablocksLegacySpacing?.noSpacingMarkup ) {
    return element;
  }

  const { emphasisArea } = attributes;

  return Object.assign( {}, element, {
    props: {
      ...element.props,
      style: {
        ...element.props?.style,
        '--nb-emphasis-area': toUnitless(
          element.props?.style?.['--nb-emphasis-area'] ?? emphasisArea
        ),
      },
    }
  } );
};

export default withColorSignalSaveCustomProps;
