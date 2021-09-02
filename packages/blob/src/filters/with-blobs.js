import { createHigherOrderComponent } from "@wordpress/compose";

import { useSupports } from "@novablocks/block-editor";

import * as utils from "../utils";
import withBlobsDecoration from "./with-blobs-decoration";

const withBlobsControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.blobs ) {
      return <OriginalComponent { ...props } />
    }

    const shapeModelling = {
      utils,
      withBlobsDecoration,
    };

    return (
      <OriginalComponent { ...props } shapeModelling={ shapeModelling } />
    );
  };
}, 'withBlobsControls' );

export default withBlobsControls;
