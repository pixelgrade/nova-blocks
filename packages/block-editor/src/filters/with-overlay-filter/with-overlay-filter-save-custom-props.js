import { getSupports } from "../../utils";
import { getOverlayFilterCSSProps } from "@novablocks/utils";

const withOverlayFilterSaveCustomProps = ( element, blockType, attributes ) => {

  const supports = getSupports( blockType.name );

  if ( ! element || ! supports?.novaBlocks?.overlayFilter ) {
    return element;
  }

  return Object.assign( {}, element, {
    props: {
      ...element.props,
      style: {
        ...element.props?.style,
        ...getOverlayFilterCSSProps( attributes )
      },
    }
  } );
};

export default withOverlayFilterSaveCustomProps;
