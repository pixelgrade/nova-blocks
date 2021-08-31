import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import { useSupports } from "@novablocks/block-editor";

import { BlockControls, MediaCompositionSection } from "../controls";

const withShapeModelingControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( supports?.novaBlocks?.mediaComposition !== true && supports?.novaBlocks?.mediaComposition?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <MediaCompositionSection { ...props } />
        <BlockControls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
}, 'withBlobsControls' );

export default withShapeModelingControls;
