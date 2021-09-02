import { createHigherOrderComponent } from "@wordpress/compose";

import { useSupports } from "@novablocks/block-editor";

import * as utils from "../utils";
import withShapeModelingDecoration from "./with-shape-modeling-decoration";

const withShapeModeling = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.shapeModeling ) {
      return <OriginalComponent { ...props } />
    }

    const shapeModeling = {
      utils,
      withShapeModelingDecoration,
    };

    return (
      <OriginalComponent { ...props } shapeModeling={ shapeModeling } />
    );
  };
}, 'withShapeModeling' );

export default withShapeModeling;
