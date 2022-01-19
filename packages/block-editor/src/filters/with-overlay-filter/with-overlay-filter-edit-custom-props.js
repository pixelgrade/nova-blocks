import { createHigherOrderComponent } from "@wordpress/compose";
import { getOverlayFilterCSSProps } from "@novablocks/utils";
import { useSupports } from "../../hooks";

const withOverlayFilterEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const supports = useSupports( props.name );
    const { attributes } = props;

    const style = props.style ? props.style : {};

    if ( !! supports?.novaBlocks?.overlayFilter ) {
      Object.assign( style, getOverlayFilterCSSProps( attributes ) );
    }

    return (
      <OriginalComponent { ...props } style={ style } />
    )
  };
}, "withOverlayFilterEditCustomProps" );

export default withOverlayFilterEditCustomProps;
