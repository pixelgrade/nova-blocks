import { __ } from "@wordpress/i18n";
import { ToggleControl } from '@wordpress/components';
import { select } from '@wordpress/data';

import { ControlsGroup } from "../../../../components";
/**
 * Internal dependencies
 */
import { useSettings } from "../../../../hooks";

const DebugControls = ( props ) => {

  const novablocksSettings = useSettings();
  if ( ! novablocksSettings?.debug ) {
    return null;
  }

  const {
    attributes: {
      toggleScale,
      toggleMask,
    },
    setAttributes,
  } = props;

  return (
    <ControlsGroup title={ __( 'Debug Parameters' ) }>
      <ToggleControl
        label={ __( 'Display Preview Scale', '__plugin_txtd' ) }
        checked={ toggleScale }
        onChange={ () => setAttributes( { toggleScale: ! toggleScale } ) }
      />
      <ToggleControl
        label={ __( 'Display Preview Mask', '__plugin_txtd' ) }
        checked={ toggleMask }
        onChange={ () => setAttributes( { toggleMask: ! toggleMask } ) }
      />
    </ControlsGroup>

  );
};

export default DebugControls;
