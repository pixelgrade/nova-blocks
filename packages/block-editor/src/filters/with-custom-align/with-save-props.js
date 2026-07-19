import classnames from "classnames";
import { getSupports } from "../../index";

const withSaveProps = ( extraProps, blockType, attributes ) => {
  if ( ! blockType?.name?.startsWith( 'novablocks/' ) ) {
    return extraProps;
  }

  const { align } = attributes;
  const supports = getSupports( blockType.name );

  if ( ! supports.align || ! align ) {
    return extraProps;
  }

  return {
    ...extraProps,
    className: classnames(
      extraProps.className,
      `align${ align }`
    )
  }
};

export default withSaveProps;
