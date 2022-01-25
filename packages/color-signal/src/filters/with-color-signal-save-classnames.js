import classnames from "classnames";

import { getSupports } from "@novablocks/block-editor";

import { getColorSignalClassnames } from "../utils";

const withColorSignalSaveClassnames = ( extraProps, blockType, attributes ) => {
  const supports = getSupports( blockType.name );
  const newClassnames = getColorSignalClassnames( attributes, supports );

  return {
    ...extraProps,
    className: classnames(
      extraProps.className,
      newClassnames
    )
  }
};

export default withColorSignalSaveClassnames;
