import { ControlsGroup } from "../../../components";
import { ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const ColorReferenceToggleControl = ( props ) => {

  const {
    attributes: {
      useSourceColorAsReference
    },
    settings: {
      debug
    }
  } = props;

  if ( ! debug ) {
    return null;
  }

  return (
    <ControlsGroup>
      <ToggleControl
        key={ 'color-set-use-source-as-reference-control' }
        label={ __( 'Use Source Color as Reference', '__plugin_txtd' ) }
        checked={ useSourceColorAsReference }
        disabled
      />
    </ControlsGroup>
  )
}

export default ColorReferenceToggleControl;
