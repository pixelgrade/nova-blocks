import {
  ControlsTab,
  ControlsSection
} from "@novablocks/block-editor";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl } from '@wordpress/components';

const HeaderRowInspectorControls = function( props ) {
  const {
    attributes: {
      shouldBeSticky
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
      </ControlsTab>
    </ControlsSection>
  )
};

export default HeaderRowInspectorControls;
