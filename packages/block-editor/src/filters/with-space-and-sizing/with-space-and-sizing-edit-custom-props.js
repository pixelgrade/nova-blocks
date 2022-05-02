import { createHigherOrderComponent } from "@wordpress/compose";
import { getSpacingCSSProps } from "@novablocks/utils";
import { useSupports } from "../../hooks";

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
