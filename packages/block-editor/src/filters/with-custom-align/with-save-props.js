import classnames from "classnames";
import { getSupports } from "../../utils";

const withSaveProps = ( extraProps, blockType, attributes ) => {
  const supports = getSupports( blockType.name );
  const { align } = attributes;

  if ( ! supports?.novaBlocks?.customAlign ) {
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
