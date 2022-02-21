import classnames from "classnames";
import { getSupports } from "../../utils";

const withSaveProps = ( extraProps, blockType, attributes ) => {
  const { align } = attributes;

  return {
    ...extraProps,
    className: classnames(
      extraProps.className,
      `align${ align }`
    )
  }
};

export default withSaveProps;
