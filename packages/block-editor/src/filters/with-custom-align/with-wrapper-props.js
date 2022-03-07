import classnames from "classnames";
import { createHigherOrderComponent } from "@wordpress/compose";

const withWrapperPropsRemoved = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const wrapperProps = Object.assign( {}, props.wrapperProps );
    const align = props.attributes?.align ?? 'none';

    delete wrapperProps[ 'data-align' ];

    return (
      <OriginalComponent { ...props } wrapperProps={ wrapperProps } />
    )

  };
}, 'withWrapperPropsRemoved' );

export default withWrapperPropsRemoved;
