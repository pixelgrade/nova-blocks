import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";

import { InspectorAdvancedControls, Warning } from "@wordpress/block-editor";
import { ToggleControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

import { useInnerBlocks, useMeta } from "@novablocks/block-editor";


export const hasClassName = ( className, targetClassName ) => {
	if ( ! className ) {
		return false;
	}

	return className.split( /\s+/ ).filter( Boolean ).includes( targetClassName );
};

export const hasInnerBlock = ( blocks = [], blockName ) => {
	return blocks.some( block => {
		return block.name === blockName || hasInnerBlock( block.innerBlocks || [], blockName );
	} );
};

export const isUnsupportedFacetwpQueryPaginationPairing = ( block ) => {
	if ( ! block || block.name !== 'core/query' ) {
		return false;
	}

	return hasClassName( block.attributes?.className, 'facetwp-template' )
		&& hasInnerBlock( block.innerBlocks || [], 'core/query-pagination' );
};

export const withControls = createHigherOrderComponent( ( BlockEdit ) => {

  return props => {
    const { name, clientId } = props;
    const innerBlocks = useInnerBlocks( clientId );
    const [ preventDuplicatePosts, setPreventDuplicatePosts ] = useMeta( 'supernova_prevent_duplicate' );
    const isQueryBlock = name === 'core/query';
    const queryBlock = {
      name,
      attributes: props.attributes,
      innerBlocks,
    };
    const showFacetwpPaginationWarning = isUnsupportedFacetwpQueryPaginationPairing( queryBlock );
    const showPreventDuplicatePostsControl = isQueryBlock && innerBlocks.some( block => block.name === 'novablocks/supernova' );

    if ( showFacetwpPaginationWarning || showPreventDuplicatePostsControl ) {

      return (
        <Fragment>
          { showFacetwpPaginationWarning && (
            <Warning>
              { __( 'Replace the core Query Pagination block with a Nova FacetWP Pager block. FacetWP templates need Pager facets so pagination follows filtered results.', '__plugin_txtd' ) }
            </Warning>
          ) }
          { showPreventDuplicatePostsControl && (
            <InspectorAdvancedControls>
              <ToggleControl
                label={ __( 'Prevent duplicate posts', '__plugin_txtd' ) }
                checked={ preventDuplicatePosts }
                onChange={ newValue => {
                  setPreventDuplicatePosts( newValue )
                } }
              />
            </InspectorAdvancedControls>
          ) }
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
