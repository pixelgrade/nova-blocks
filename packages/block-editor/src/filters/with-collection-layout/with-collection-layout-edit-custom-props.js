import { createHigherOrderComponent } from "@wordpress/compose";
import { useSettings, useSupports } from "../../hooks";
import { getCollectionLayoutCustomProperties } from "./get-collection-layout-custom-properties";
import {
  layoutRecipeSupports,
  normalizeLayoutRecipes,
} from "./controls/composition/layout-recipes";

const withCollectionLayoutEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const settings = useSettings();
    const { attributes } = props;

    const style = props.style ? props.style : {};

    if ( !! supports?.novaBlocks?.collectionLayout ) {
      const collectionLayoutRecipes = normalizeLayoutRecipes( settings?.collectionLayoutRecipes );
      const collectionLayoutProps = getCollectionLayoutCustomProperties( attributes, {
        supportsPile3d: layoutRecipeSupports( attributes, collectionLayoutRecipes, 'pile3d' ),
      } );

      Object.assign( style, collectionLayoutProps );
    }

    return (
      <OriginalComponent { ...props } style={ style } />
    )
  };
}, "withCollectionLayoutEditCustomProps" );

export default withCollectionLayoutEditCustomProps;
