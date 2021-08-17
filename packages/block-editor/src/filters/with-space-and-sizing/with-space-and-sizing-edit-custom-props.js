import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { getSpacingCSSProps } from "@novablocks/utils";

const withSpaceAndSizingEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const supports = useSupports( props.name );
    const { attributes } = props;

    if ( ! supports?.novaBlocks?.spaceAndSizing ) {
      return <OriginalComponent { ...props } />;
    }

    return (
      <div style={ getSpacingCSSProps( attributes ) }>
        <OriginalComponent { ...props } />
      </div>
    )
  };
}, "withSpaceAndSizingEditCustomProps" );

export default withSpaceAndSizingEditCustomProps;
