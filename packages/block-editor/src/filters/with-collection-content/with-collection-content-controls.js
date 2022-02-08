import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import { useSupports } from "../../hooks";
import InspectorControls from "./inspector-controls";

const withCollectionContentControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( true !== supports?.novaBlocks?.collectionContent && true !== supports?.novaBlocks?.collectionContent?.controls ) {
      return (
        <OriginalComponent { ...props } />
      )
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <InspectorControls { ...props } />
      </Fragment>
    )
  }
}, 'withCollectionContentControls' );

export default withCollectionContentControls;
