import { getSupports } from "@novablocks/block-editor";

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
        '--nb-emphasis-area': emphasisArea,
      },
    }
  } );
};

export default withColorSignalSaveCustomProps;
