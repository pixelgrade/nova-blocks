import classnames from "classnames";
import { createHigherOrderComponent } from "@wordpress/compose";

import { useSupports } from "@novablocks/block-editor";

import { getColorSignalClassnames } from "../utils";

const withColorSignalEditClassnames = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {
    const supports = useSupports( props.name );
    const { attributes } = props;
    const newClassnames = getColorSignalClassnames( attributes, supports );

    const newProps = {
      ...props,
      className: classnames(
        props.className,
        newClassnames
      )
    };

    return (
      <BlockListBlock { ...newProps } />
    )
  };
}, "withColorSignalEditClassnames" );

export default withColorSignalEditClassnames;
