import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";

const withWrapperPropsRemoved = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const { dataAlign, ...newWrapperProps } = props?.wrapperProps || {};

    if ( !supports?.novaBlocks?.customAlign ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <OriginalComponent { ...props } wrapperProps={ newWrapperProps } />
    )

  };
}, 'withWrapperPropsRemoved' );

export default withWrapperPropsRemoved;
