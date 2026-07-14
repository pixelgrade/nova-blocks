import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

import { ControlsSections } from "../../components";

// ControlsSections partitions its sections into the Settings and Styles
// inspector tabs itself (rendering its own InspectorControls per placement),
// so it doesn't need to be wrapped here.
const withControlsSections = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    return (
      <Fragment>
        <ControlsSections { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
}, 'withControlsSections' );

addFilter( 'editor.BlockEdit', 'novablocks/with-controls-sections', withControlsSections, 1 );
