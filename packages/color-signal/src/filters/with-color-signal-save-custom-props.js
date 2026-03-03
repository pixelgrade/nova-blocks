import { getSupports } from "@novablocks/block-editor";

const normalizePxUnit = ( value ) => {
  if ( typeof value === 'number' ) {
    return `${ value }px`;
  }

  if ( typeof value === 'string' ) {
    const trimmed = value.trim();

    if ( trimmed.endsWith( 'px' ) ) {
      return value;
    }

    const numericValue = Number( trimmed );
    if ( ! Number.isNaN( numericValue ) ) {
      return `${ numericValue }px`;
    }
  }

  return value;
};

const withColorSignalSaveCustomProps = ( element, blockType, attributes ) => {

  const supports = getSupports( blockType.name );

  if ( ! element || ! supports?.novaBlocks?.spaceAndSizing ) {
    return element;
  }

  const { emphasisArea } = attributes;

  return Object.assign( {}, element, {
    props: {
      ...element.props,
      style: {
        ...element.props?.style,
        '--nb-emphasis-area': normalizePxUnit(
          element.props?.style?.['--nb-emphasis-area'] ?? emphasisArea
        ),
      },
    }
  } );
};

export default withColorSignalSaveCustomProps;
