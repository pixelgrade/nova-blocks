import classnames from 'classnames';

import { createHigherOrderComponent } from "@wordpress/compose";
import { getColorSignalClassnames, getSpacingCSSProps } from "@novablocks/utils";

import { useSupports } from "../../hooks";

const withBlockListWrapperProps = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {
    const { attributes } = props;
    const { align } = attributes;
    const supports = useSupports( props.name );

    let wrapperProps = props.wrapperProps;

    if ( ! supports?.novaBlocks?.spaceAndSizing ) {
      return <BlockListBlock { ...props } />
    }

    wrapperProps = {
      ...wrapperProps,
      style: {
        ...wrapperProps?.style,
        ...getSpacingCSSProps( attributes )
      },
      className: wrapperProps?.className
    };

    return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />
  };

}, 'withBlockListWrapperProps' );

export default withBlockListWrapperProps;
