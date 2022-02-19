import {
  ControlsTab,
  ControlsSection,
  Notice,
  useInnerBlocks
} from "@novablocks/block-editor";

import { capitalizeFirstLetter } from '@novablocks/utils';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RadioControl } from '@wordpress/components';
import { useSelect, useDispatch } from "@wordpress/data";
import { useState, useCallback } from "@wordpress/element";

const HeaderInspectorControls = ( props ) => {

  const { clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );

  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
  const updateNextStickyRow = useCallback( nextStickyRowClientId => {
    innerBlocks.forEach( block => {
      updateBlockAttributes( block.clientId, {
        isSticky: block.clientId === nextStickyRowClientId
      } )
    } )
  }, [ innerBlocks ] );
  const header = useSelect( select => select( 'core/block-editor' ).getBlock( clientId ), [ clientId ] );
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

  const customizerHeaderLink = novablocks_urls.novablocks_customizer_header_link;

  return (
    <ControlsSection id={ 'layout' } label={ __( 'Layout', '__plugin_txtd' ) } key={'header_layout'}>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) } key={'header_layout_settings'}>
        <Notice
          key={ 'header-position-quick-start' }
          id={ 'novablocks-header-position-quick-start' }
          content={ <p><strong>{__( 'Quick start:', '__plugin_txtd' )}</strong> Set up your header layout using the options below and go to the <a href={customizerHeaderLink}>Customizer</a> to change the logo and menu content, or fine-tune styling details. </p> }
        />

        <RadioControl
          key={ 'header-position-scroll' }
          label={ __( 'Header Position on Scroll', '__plugin_txtd' ) }
          selected={ !! stickyRow ? 'sticky' : 'static' }
          onChange={ value => {
            if ( value === 'sticky' ) {
              const nextStickyRowId = lastStickyRowId || rows[0].clientId;
              updateNextStickyRow( nextStickyRowId );
            } else {
              updateNextStickyRow();
            }
          }}
          options={ [
            { label: __( 'Static', '__plugin_txtd' ), value: 'static' },
            { label: __( 'Sticky (fixed)', '__plugin_txtd' ), value: 'sticky' },
          ] }
        />

        { !! stickyRow && rows.length > 1 && <RadioControl
          key={ 'sticky-header-controls' }
          label={ __( 'Sticky Row Selection', '__plugin_txtd' ) }
          help={__( 'Select which row to stay fixed while scrolling.', '__plugin_txtd' )}
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

export default HeaderInspectorControls;
