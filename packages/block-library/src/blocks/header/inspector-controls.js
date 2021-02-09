import {
  ControlsTab,
  ControlsSection,
  Notice,
} from "@novablocks/block-editor";

import { capitalizeFirstLetter } from '@novablocks/utils';

/**
 * WordPress dependencies
 */
import {
  RadioControl, 
  ToggleControl,
  Text,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import { select} from "@wordpress/data";

const HeaderInspectorControls = function( props ) {
  const {
    attributes: {
      shouldBeSticky,
      stickyRow,
      headerVariation,
      headerPositionScroll,
    },
    clientId,
    setAttributes
  } = props;

  const { getBlock } = select( 'core/block-editor' );
  const header = getBlock( clientId );
  const rows = header.innerBlocks;

  let stickyRowOptions = [ ];

  rows.forEach( element => stickyRowOptions.push({
    label: element['attributes']['headerRowLabel'],
    value: element['attributes']['headerRowType']
  }));

  return (
    <ControlsSection label={ __('Layout') }>
      <ControlsTab label={__('Settings') }>
          <Notice
            key={ 'header-position-quick-start' }
            id={ 'novablocks-header-position-quick-start' }
            content={ <p><strong>Quick start:</strong> Set up your header layout using the options below and go to <a href="#">Customizer</a> to change the logo and menu content, or fine-tune styling details. </p> }
            dismissLabel={ '✔ Ok, I got it!' }
          />

          <RadioControl
            key={ 'header-variation' }
            label={ __( 'Header Layout Variation', '__plugin_txtd' ) }
            selected={ headerVariation }
            onChange={ headerVariation => setAttributes( { headerVariation } ) }
            options={ [
                { label: 'Minimal', value: '1' },
                { label: 'Single Row', value: '2' },
                { label: 'Two Rows', value: '3' },
                { label: 'Three Rows', value: '4' },
              ] }
          />

         <RadioControl
          key={ 'header-position-scroll' }
          label={ 'Header Position on Scroll' }
          selected={ headerPositionScroll }
          onChange={ headerPositionScroll => setAttributes( { headerPositionScroll } ) }
          options={ [
            { label: 'Static', value: 'static' },
            { label: 'Sticky (fixed)', value: 'sticky' },
          ] }
        />





        { 
          headerPositionScroll == 'sticky' &&
          <RadioControl
            key={ 'sticky-header-controls' }
            label={ __( 'Sticky Row Selection', '__plugin_txtd' ) }
            help={__( 'Select which row to stay fixed while scrolling.', '__plugin_txtd' )}
            value={ stickyRow }
            selected={ stickyRow }
            options={ stickyRowOptions }
            onChange={ ( nextStickyRow ) => setAttributes( { stickyRow: nextStickyRow } ) }
          /> 
        }        


        







        <ToggleControl
          label={__( 'Sticky (remove)', '__plugin_txtd' )}
          help={__( 'Use it if you want to make this row sticky.', '__plugin_txtd' )}
          checked={shouldBeSticky}
          onChange={() => setAttributes( {shouldBeSticky: !shouldBeSticky} )}
        />

      </ControlsTab>
    </ControlsSection>
  )
};

export default HeaderInspectorControls;
