import {
  ControlsTab,
  ControlsSection,
  Notice,
} from "@novablocks/block-editor";

import { capitalizeFirstLetter } from '@novablocks/utils';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {RadioControl, ToggleControl, Text} from '@wordpress/components';
import { select, withDispatch } from "@wordpress/data";
import { useState } from "@wordpress/element";

const HeaderInspectorControls = ( props ) => {

  const {
    clientId,
    updateNextStickyRow
  } = props;

  const { getBlock } = select( 'core/block-editor' );
  const header = getBlock( clientId );
  const rows = header.innerBlocks;

  const stickyRowOptions = rows.map( row => {
    return {
      label: capitalizeFirstLetter(row['attributes']['label']),
      value: row.clientId
    }
  });

  const stickyRow = rows.find( block => {
    return block.attributes.isSticky;
  } );

  const [ lastStickyRowId, setLastStickyRowId ] = useState( stickyRow?.clientId );

  return (
    <ControlsSection label={ __('Layout') }>
      <ControlsTab label={__('Settings') }>
        <Notice
          key={ 'header-position-quick-start' }
          id={ 'novablocks-header-position-quick-start' }
          content={ <p><strong>Quick start:</strong> Set up your header layout using the options below and go to <a href="#">Customizer</a> to change the logo and menu content, or fine-tune styling details. </p> }
          dismissLabel={ '✔ Ok, I got it!' }
        />
        <ToggleControl
          label={__( 'Sticky', '__plugin_txtd' )}
          help={__( 'Use it if you want to make this row sticky.', '__plugin_txtd' )}
          checked={ !! stickyRow }
          onChange={ value => {
            if ( value ) {
              const nextStickyRowId = lastStickyRowId || rows[0].clientId;
              updateNextStickyRow( nextStickyRowId );
            } else {
              updateNextStickyRow();
            }
          }}
        />

        { !! stickyRow && <RadioControl
          key={ 'sticky-header-controls' }
          label={ __( 'Select sticky Row', '__plugin_txtd' ) }
          selected={ stickyRow.clientId }
          options={ stickyRowOptions }
          onChange={ ( nextStickyRowId ) => {
            setLastStickyRowId( nextStickyRowId );
            updateNextStickyRow( nextStickyRowId );
          } }
          /> }
      </ControlsTab>
    </ControlsSection>
  )
};

const applyWithDispatch = withDispatch( ( dispatch, ownProps ) => {
  const { innerBlocks } = ownProps;
  const { updateBlockAttributes } = dispatch( 'core/block-editor' );

  const updateNextStickyRow = nextStickyRowClientId => {
    innerBlocks.forEach( block => {
      updateBlockAttributes( block.clientId, {
        isSticky: block.clientId === nextStickyRowClientId
      } )
    } )
  }

  return {
    updateNextStickyRow,
  };
} );

export default applyWithDispatch( HeaderInspectorControls );
