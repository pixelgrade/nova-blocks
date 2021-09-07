import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import {getOverlayFilterCSSProps} from "@novablocks/utils";

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
