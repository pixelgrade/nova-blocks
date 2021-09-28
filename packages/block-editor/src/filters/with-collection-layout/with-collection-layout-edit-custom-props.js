import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";

const withCollectionLayoutEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const { attributes } = props;

    const { columns, gridGap } = attributes;

    const style = props.style ? props.style : {};

    if ( !! supports?.novaBlocks?.collectionLayout ) {

      let collectionLayoutProps = {
        '--nb-collection-columns-count': columns,
        '--nb-grid-spacing-modifier': gridGap
      }

      Object.assign( style, collectionLayoutProps );
    }

    return (
      <OriginalComponent { ...props } style={ style } />
    )
  };
}, "withCollectionLayoutEditCustomProps" );

export default withCollectionLayoutEditCustomProps;
