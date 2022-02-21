import classnames from "classnames";
import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";

const withWrapperPropsRemoved = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const wrapperProps = props.wrapperProps ?? {};
    const { dataAlign, ...newWrapperProps } = wrapperProps;
    const { attributes } = props;
    const { align } = attributes;

    Object.assign( newWrapperProps, {
      className: classnames(
        wrapperProps?.className,
        `align${ align }`,
      )
    } );

    return (
      <OriginalComponent { ...props } wrapperProps={ newWrapperProps } />
    )

  };
}, 'withWrapperPropsRemoved' );

export default withWrapperPropsRemoved;
