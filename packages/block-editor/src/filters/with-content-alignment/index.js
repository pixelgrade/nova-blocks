import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import { Fragment } from "@wordpress/element";
import { useSupports } from "../../hooks";
import Controls from './controls';

const withContentAlignmentControls = createHigherOrderComponent( OriginalComponent => {

  return( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.noDataAlign ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    )

  };
}, 'withContentAlignmentControls');

addFilter( 'editor.BlockEdit', 'novablocks/with-custom-alignment-controls', withContentAlignmentControls );
