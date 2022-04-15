import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "@novablocks/block-editor";
import { getMediaCompositionCSSProps } from "../utils";

const withMediaCompositionEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const { attributes } = props;

    const style = props.style ? props.style : {};

    if ( !! supports?.novaBlocks?.mediaComposition ) {
      Object.assign( style, getMediaCompositionCSSProps( attributes ) );
    }

    return (
      <OriginalComponent { ...props } style={ style } />
    )
  };
}, "withMediaCompositionEditCustomProps" );

export default withMediaCompositionEditCustomProps;
