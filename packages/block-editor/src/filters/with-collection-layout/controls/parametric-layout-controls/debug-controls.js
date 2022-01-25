import { __ } from "@wordpress/i18n";
import { ToggleControl } from '@wordpress/components';

import { ControlsGroup } from "../../../../components";

const DebugControls = ( props ) => {

  const {
    attributes: {
      toggleScale,
      toggleMask,
    },
    setAttributes,
    settings
  } = props;

  if ( ! settings?.debug ) {
    return null;
  }

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
