import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { getOverlayFilterCSSProps } from "@novablocks/utils";

const withOverlayFilterEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const supports = useSupports( props.name );
    const { attributes } = props;

    if ( ! supports?.novaBlocks?.overlayFilter ) {
      return <OriginalComponent { ...props } />;
    }

    return (
      <div style={ getOverlayFilterCSSProps( attributes ) }>
        <OriginalComponent { ...props } />
      </div>
    )
  };
}, "withOverlayFilterEditCustomProps" );

export default withOverlayFilterEditCustomProps;
