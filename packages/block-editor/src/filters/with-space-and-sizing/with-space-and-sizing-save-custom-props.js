import { getSpacingCSSProps } from "@novablocks/utils";
import { getSupports } from "../../utils";

const withSpaceAndSizingSaveCustomProps = ( extraProps, blockType, attributes ) => {

  const supports = getSupports( blockType.name );

  if ( supports?.novaBlocks?.spaceAndSizing === true || supports?.novaBlocks?.spaceAndSizing?.customProps !== false ) {
    return extraProps;
  }

  return {
    ...extraProps,
    style: {
      ...extraProps?.style,
      ...getSpacingCSSProps( attributes )
    },
  }
};

export default withSpaceAndSizingSaveCustomProps;
