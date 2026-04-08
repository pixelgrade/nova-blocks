import { createHigherOrderComponent } from "@wordpress/compose";
import { useSelect } from "@wordpress/data";
import { store as preferencesStore } from '@wordpress/preferences';
import classnames from 'classnames';
import { getSpacingCSSProps } from "@novablocks/utils";

import { useSupports } from "../../hooks";
import { useMemoryState } from "../../hooks";
import {
  SPACE_AND_SIZING_PREVIEW_PREFERENCE_KEY,
  SPACE_AND_SIZING_PREVIEW_PREFERENCE_SCOPE,
} from "../../preferences/constants";

const {
  getSpaceAndSizingPreviewState,
} = require( './get-space-and-sizing-preview-state' );

const withBlockListWrapperProps = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {
    const { attributes, isSelected } = props;
    const supports = useSupports( props.name );
    const [ activeDrawerId ] = useMemoryState( 'drawerActiveId' );
    const showSpaceAndSizingPreview = useSelect( ( select ) => {
      return select( preferencesStore ).get(
        SPACE_AND_SIZING_PREVIEW_PREFERENCE_SCOPE,
        SPACE_AND_SIZING_PREVIEW_PREFERENCE_KEY
      ) ?? true;
    }, [] );

    let wrapperProps = props.wrapperProps;
    const previewState = getSpaceAndSizingPreviewState( {
      supportsSpaceAndSizing: supports?.novaBlocks?.spaceAndSizing,
      isSelected,
      activeDrawerId,
      showSpaceAndSizingPreview,
    } );

    if ( ! previewState.hasSpaceAndSizingSupport ) {
      return <BlockListBlock { ...props } />
    }

    wrapperProps = {
      ...wrapperProps,
      style: {
        ...wrapperProps?.style,
        ...getSpacingCSSProps( attributes )
      },
      className: classnames(
        wrapperProps?.className,
        'novablocks-space-and-sizing-preview',
        {
          'novablocks-space-and-sizing-preview--visible': previewState.isPreviewVisible,
        }
      )
    };

    return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />
  };

}, 'withBlockListWrapperProps' );

export default withBlockListWrapperProps;
