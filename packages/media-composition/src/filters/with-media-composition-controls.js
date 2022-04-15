import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import { useSupports, withVisibility } from "@novablocks/block-editor";

import { MediaCompositionSection } from "../controls";

const withMediaCompositionControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( supports?.novaBlocks?.mediaComposition !== true && supports?.novaBlocks?.mediaComposition?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <MediaCompositionSection { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
}, 'withMediaCompositionControls' );

export default withMediaCompositionControls;
