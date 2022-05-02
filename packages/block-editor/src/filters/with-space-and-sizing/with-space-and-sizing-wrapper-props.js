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
      className: classnames(
        wrapperProps?.className,
        getColorSignalClassnames( attributes, true ),
      )
    };

    return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />
  };

}, 'withBlockListWrapperProps' );

export default withBlockListWrapperProps;
