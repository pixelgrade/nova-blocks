/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RadioControl, RangeControl } from '@wordpress/components';
import { useSelect, useDispatch } from "@wordpress/data";
import { useState, useCallback, createInterpolateElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
  ControlsGroup,
  ControlsTab,
  ControlsSection,
  Notice,
  useInnerBlocks
} from "@novablocks/block-editor";

import { capitalizeFirstLetter } from '@novablocks/utils';

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
    <ControlsSection id={ 'layout' } label={ __( 'Header Layout', '__plugin_txtd' ) } key={'header_layout'}>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) } key={'header_layout_settings'}>
        <ControlsGroup>
        <Notice
          key={ 'header-position-quick-start' }
          id={ 'nb-header-position-quick-start' }
          content={ <p><strong>{__( 'Quick start:', '__plugin_txtd' )}</strong> { createInterpolateElement( __( 'Set up your header layout using the options below and go to the <a>Customizer</a> to change the logo and menu content.', '__plugin_txtd' ), { a: <a href={customizerHeaderLink} /> } ) } </p> }
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
          help={__( 'Select which row stay fixed on scroll.', '__plugin_txtd' )}
          selected={ stickyRow.clientId }
          options={ stickyRowOptions }
          onChange={ ( nextStickyRowId ) => {
            setLastStickyRowId( nextStickyRowId );
            updateNextStickyRow( nextStickyRowId );
          } }
          /> }
        </ControlsGroup>

        <HeaderOptions { ...props } />

      </ControlsTab>
    </ControlsSection>
  )
};

const HeaderOptions = ( props ) => {
  const { attributes, setAttributes } = props;

  const {
    logoHeight,
    mobileLogoHeight,
    navigationLinkSpacing,
    headerSidesSpacing,
    stickyHeaderSpacingMultiplier
  } = attributes;

  return (
    <ControlsGroup>
      <RangeControl
        label={ __( 'Logo Height', '__plugin_txtd' ) }
        help={ __( 'Adjust the height of your logo.', '__plugin_txtd' ) }
        value={ logoHeight }
        onChange={ logoHeight => setAttributes( { logoHeight } ) }
        min={ 20 }
        max={ 200 }
        step={ 1 }
      />
      <RangeControl
        label={ __( 'Mobile Logo Height', '__plugin_txtd' ) }
        help={ __( 'Adjust the height of your logo on small screens.', '__plugin_txtd' ) }
        value={ mobileLogoHeight }
        onChange={ mobileLogoHeight => setAttributes( { mobileLogoHeight } ) }
        min={ 14 }
        max={ 80 }
        step={ 1 }
      />
      <RangeControl
        label={ __( 'Navigation Link Spacing', '__plugin_txtd' ) }
        help={ __( 'Adjust the spacing between individual items in your navigation.', '__plugin_txtd' ) }
        value={ navigationLinkSpacing }
        onChange={ navigationLinkSpacing => setAttributes( { navigationLinkSpacing } ) }
        min={ 0 }
        max={ 100 }
        step={ 1 }
      />
      <RangeControl
        label={ __( 'Header Sides Spacing', '__plugin_txtd' ) }
        help={ __( 'Adjust the space separating the header and the sides of the browser.', '__plugin_txtd' ) }
        value={ headerSidesSpacing }
        onChange={ headerSidesSpacing => setAttributes( { headerSidesSpacing } ) }
        min={ 0 }
        max={ 100 }
        step={ 1 }
      />
      <RangeControl
        label={ __( 'Sticky Header Spacing Multiplier', '__plugin_txtd' ) }
        help={ __( 'Adjust the vertical spacing for the sticky header on scroll.', '__plugin_txtd' ) }
        value={ stickyHeaderSpacingMultiplier }
        onChange={ stickyHeaderSpacingMultiplier => setAttributes( { stickyHeaderSpacingMultiplier } ) }
        min={ 0 }
        max={ 1 }
        step={ 0.125 }
      />
    </ControlsGroup>
  )
}

export default HeaderInspectorControls;
