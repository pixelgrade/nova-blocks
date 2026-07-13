import classnames from "classnames";
import { getListClassname, getListStyle } from "../utils";

export const withSaveExtraProps = ( extraProps, blockType, attributes ) => {

  if ( blockType.name !== 'core/list' ) {
    return extraProps;
  }

  const listStyle = getListStyle( attributes );

  if ( attributes.novaBlocksLegacyListCounter ) {
    listStyle[ '--nb-list-start-at' ] = 'NaN';
  }

  return {
    ...( attributes.reversed && ! attributes.novaBlocksLegacyListCounter
      ? { reversed: true }
      : {} ),
    className: classnames(
      extraProps.className,
      getListClassname( attributes )
    ),
    style: {
      ...extraProps.style,
      ...listStyle
    }
  };
};
