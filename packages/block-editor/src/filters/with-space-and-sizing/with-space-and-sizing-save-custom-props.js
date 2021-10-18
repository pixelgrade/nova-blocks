import { getSpacingCSSProps } from "@novablocks/utils";
import { getSupports } from "../../utils";

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
