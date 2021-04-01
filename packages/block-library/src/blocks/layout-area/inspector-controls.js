import {
  ControlsTab,
  ControlsSection,
} from "@novablocks/block-editor";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {ToggleControl} from '@wordpress/components';

const LayoutAreaInspectorControls = (props) => {
  const {
    attributes,
    setAttributes
  } = props;

  const {
    lastItemIsSticky
  } = attributes;

  return (
    <ControlsSection label={ __( 'Layout' ) }>
      <ControlsTab label={ __( 'Settings' ) }>
        <ToggleControl
          label={__( 'Make the last block sticky', '__plugin_txtd' )}
          checked={lastItemIsSticky}
          onChange={ () => setAttributes( {lastItemIsSticky: !lastItemIsSticky} )}
        />
      </ControlsTab>
    </ControlsSection>
  )
}

export default LayoutAreaInspectorControls;
