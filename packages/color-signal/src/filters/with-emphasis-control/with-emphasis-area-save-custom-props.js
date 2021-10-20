import { getSupports } from "@novablocks/block-editor";

const withEmphasisAreaSaveCustomProps = ( element, blockType, attributes ) => {

  const supports = getSupports( blockType.name );

  if ( ! element || ! supports?.novaBlocks?.colorSignal ) {
    return element;
  }

  return Object.assign( {}, element, {
    props: {
      ...element.props,
      style: {
        ...element.props?.style,
        '--nb-emphasis-area': attributes.emphasisArea
      },
    }
  } );
}

export default withEmphasisAreaSaveCustomProps;
