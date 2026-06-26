import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import Controls from "./controls";

export const withControls = createHigherOrderComponent( ( BlockEdit ) => {

  const EnhancedBlockEdit = ( props ) => {
    const { clientId, attributes, setAttributes, setControlsVisibility } = props;
    const { reversed, values, listItemsCount } = attributes;

    const innerItemsCount = useSelect( ( select ) => {
      return select( 'core/block-editor' ).getBlockCount( clientId );
    }, [ clientId ] );

    useEffect( () => {
      setControlsVisibility( {
        'color-signal-settings': false,
        'palette-picker': false,
      } );
    }, [] );

    // Modern lists store their items as inner core/list-item blocks and leave
    // the legacy `values` attribute empty. Persist the real item count so the
    // reversed ordered-list counter (--nb-list-items-count) is correct both in
    // the editor preview and in the saved markup. Only reversed lists consume
    // the count, so ordinary lists are left untouched (and stay un-dirtied).
    useEffect( () => {
      if ( ! reversed || values ) {
        return;
      }

      if ( listItemsCount !== innerItemsCount ) {
        setAttributes( { listItemsCount: innerItemsCount } );
      }
    }, [ reversed, values, innerItemsCount, listItemsCount ] );

    return (
      <BlockEdit { ...props } />
    )
  };

  return ( props ) => {

    if ( 'core/list' !== props.name ) {
      return (
        <BlockEdit { ...props } />
      );
    }

    return (
      <Fragment>
        <EnhancedBlockEdit { ...props } />
        <Controls { ...props } />
      </Fragment>
    )
  }
} );
