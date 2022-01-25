import classnames from "classnames";
import { getListClassname, getListStyle } from "../utils";

export const withSaveExtraProps = ( extraProps, blockType, attributes ) => {

  if ( blockType.name !== 'core/list' ) {
    return extraProps;
  }

  return {
    className: classnames(
      extraProps.className,
      getListClassname( attributes )
    ),
    style: {
      ...extraProps.style,
      ...getListStyle( attributes )
    }
  };
};
