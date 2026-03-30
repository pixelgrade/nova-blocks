import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { getCollectionLayoutCustomProperties } from "./get-collection-layout-custom-properties";

const withCollectionLayoutEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const { attributes } = props;

    const style = props.style ? props.style : {};

    if ( !! supports?.novaBlocks?.collectionLayout ) {
      let collectionLayoutProps = getCollectionLayoutCustomProperties( attributes );

      Object.assign( style, collectionLayoutProps );
    }

    return (
      <OriginalComponent { ...props } style={ style } />
    )
  };
}, "withCollectionLayoutEditCustomProps" );

export default withCollectionLayoutEditCustomProps;
