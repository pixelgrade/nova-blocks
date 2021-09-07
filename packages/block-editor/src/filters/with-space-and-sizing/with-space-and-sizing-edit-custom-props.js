import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { getSpacingCSSProps } from "@novablocks/utils";

const withSpaceAndSizingEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const supports = useSupports( props.name );
    const { attributes } = props;

    const style = props.style ? props.style : {};

    if ( !! supports?.novaBlocks?.spaceAndSizing ) {
      Object.assign( style, getSpacingCSSProps( attributes ) );
    }

    return (
      <OriginalComponent { ...props } style={ style } />
    )
  };
}, "withSpaceAndSizingEditCustomProps" );

export default withSpaceAndSizingEditCustomProps;
