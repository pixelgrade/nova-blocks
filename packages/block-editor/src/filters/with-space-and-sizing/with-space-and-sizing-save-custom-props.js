import { getSupports } from "../../utils";
import { getSpacingCSSProps } from "@novablocks/utils";

const withSpaceAndSizingSaveCustomProps = ( element, blockType, attributes ) => {

  const supports = getSupports( blockType.name );

  if ( ! element || ! supports?.novaBlocks?.spaceAndSizing ) {
    return element;
  }

  return Object.assign( {}, element, {
    props: {
      ...element.props,
      style: {
        ...element.props?.style,
        ...getSpacingCSSProps( attributes )
      },
    }
  } );
};

export default withSpaceAndSizingSaveCustomProps;
