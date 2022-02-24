import classnames from "classnames";
import { createHigherOrderComponent } from "@wordpress/compose";

const withWrapperPropsRemoved = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const wrapperProps = props.wrapperProps ?? {};
    const { dataAlign, ...newWrapperProps } = wrapperProps;
    const { attributes } = props;
    const { align } = attributes;

    if (align === undefined) {
      return OriginalComponent;
    }

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
