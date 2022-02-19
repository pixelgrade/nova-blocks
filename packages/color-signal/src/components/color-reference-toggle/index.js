import { ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ControlsGroup, useSettings } from "@novablocks/block-editor";

const ColorReferenceToggleControl = ( props ) => {

  const novablocksSettings = useSettings();
  if ( ! novablocksSettings?.debug ) {
    return null;
  }

  const {
    attributes: {
      useSourceColorAsReference
    },
  } = props;

  return (
    <ControlsGroup key={'color_reference_toggle_group'}>
      <ToggleControl
        key={ 'color-set-use-source-as-reference-control' }
        label={ __( 'Use Source Color as Reference', '__plugin_txtd' ) }
        checked={ useSourceColorAsReference }
        disabled
      />
    </ControlsGroup>
  )
};

export default ColorReferenceToggleControl;
