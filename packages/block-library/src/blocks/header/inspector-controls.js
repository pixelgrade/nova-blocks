import {
  ControlsTab,
  ControlsSection
} from "@novablocks/block-editor";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {RadioControl, ToggleControl} from '@wordpress/components';

const HeaderInspectorControls = function( props ) {
  const {
    attributes: {
      shouldBeSticky,
      stickyRow
    },
    setAttributes
  } = props;

  return (
    <ControlsSection label={ __('Layout') }>
      <ControlsTab label={__('Settings') }>
        <ToggleControl
          label={__( 'Sticky', '__plugin_txtd' )}
          help={__( 'Use it if you want to make this row sticky.', '__plugin_txtd' )}
          checked={shouldBeSticky}
          onChange={() => setAttributes( {shouldBeSticky: !shouldBeSticky} )}
        />

        { shouldBeSticky && <RadioControl
          key={ 'sticky-header-controls' }
          label={ __( 'Select sticky Row', '__plugin_txtd' ) }
          value={ stickyRow }
          selected={ stickyRow }
          options={ [
            { label: 'Primary', value: 'primary' },
            { label: 'Logo', value: 'logo' },
            { label: 'Secondary', value: 'secondary' },
          ] }
          onChange={ ( nextStickyRow ) => setAttributes( { stickyRow: nextStickyRow } ) }
        /> }
      </ControlsTab>
    </ControlsSection>
  )
};

export default HeaderInspectorControls;
