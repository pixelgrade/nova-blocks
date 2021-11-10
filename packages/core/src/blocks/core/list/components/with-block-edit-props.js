import classnames from "classnames";

import { createHigherOrderComponent } from "@wordpress/compose";

import { getListClassname, getListStyle } from "../utils";

export const withBlockEditProps = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {
    const { name, attributes } = props

    if ( name !== 'core/list' ) {
      return (
        <BlockListBlock { ...props } />
      )
    }

    const newProps = {
      ...props,
      className: classnames(
        props.className,
        getListClassname( attributes )
      ),
      wrapperProps: {
        ...props.wrapperProps,
        style: {
          ...props.style,
          ...getListStyle( attributes )
        }
      }
    }

    return <BlockListBlock { ...newProps } />
  };
}, 'withBlockEditProps' );
