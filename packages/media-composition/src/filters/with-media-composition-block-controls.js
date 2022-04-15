import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import { useSupports } from "@novablocks/block-editor";

import { BlockControls } from "../controls";

const withMediaCompositionControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( supports?.novaBlocks?.mediaComposition !== true && supports?.novaBlocks?.mediaComposition?.blockControls !== true ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <BlockControls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
}, 'withMediaCompositionControls' );

export default withMediaCompositionControls;
