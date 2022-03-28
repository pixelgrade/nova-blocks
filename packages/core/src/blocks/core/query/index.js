import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";

import { InspectorAdvancedControls } from "@wordpress/block-editor";
import { ToggleControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { useEntityProp } from '@wordpress/core-data';

import { useInnerBlocks, useMeta } from "@novablocks/block-editor";


export const withControls = createHigherOrderComponent( ( BlockEdit ) => {

  return props => {
    const { name, clientId } = props;
    const innerBlocks = useInnerBlocks( clientId );
    const [ preventDuplicatePosts, setPreventDuplicatePosts ] = useMeta( 'supernova_prevent_duplicate' );

    if ( props.name === 'core/query' && innerBlocks.some( block => block.name === 'novablocks/supernova' ) ) {

      return (
        <Fragment>
          <InspectorAdvancedControls>
            <ToggleControl
              label={ __( 'Prevent duplicate posts', '__plugin_txtd' ) }
              checked={ preventDuplicatePosts }
              onChange={ newValue => {
                setPreventDuplicatePosts( newValue )
              } }
            />
          </InspectorAdvancedControls>
          <BlockEdit { ...props } />
        </Fragment>
      )
    }

    return (
      <BlockEdit { ...props } />
    )
  }

} );
addFilter( 'editor.BlockEdit', 'novablocks/list/list-style', withControls, 1 );
