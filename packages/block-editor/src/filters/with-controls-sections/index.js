import { InspectorControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

import { ControlsSections } from "../../components";

const withControlsSections = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    return (
      <Fragment>
        <InspectorControls>
          <ControlsSections { ...props } />
        </InspectorControls>
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
}, 'withControlsSections' );

addFilter( 'editor.BlockEdit', 'novablocks/with-controls-sections', withControlsSections );
