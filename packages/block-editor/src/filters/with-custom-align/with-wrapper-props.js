import classnames from "classnames";
import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../index";

const withWrapperPropsRemoved = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const wrapperProps = Object.assign( {}, props.wrapperProps );
    const align = props.attributes?.align ?? 'none';
    const supports = useSupports( props.name );

    if ( ! supports.align || props.name === 'core/image' ) {
      return <OriginalComponent { ...props } />
    }

    delete wrapperProps[ 'data-align' ];

    const newProps = {
      ...props,
      wrapperProps,
      className: classnames(
        props.className,
        `align${ align }`
      )
    }

    return (
      <OriginalComponent { ...newProps } />
    )

  };
}, 'withWrapperPropsRemoved' );

export default withWrapperPropsRemoved;
