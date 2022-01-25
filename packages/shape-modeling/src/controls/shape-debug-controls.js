import { ControlsGroup } from "@novablocks/block-editor";
import { __ } from "@wordpress/i18n";
import { ToggleControl } from "@wordpress/components";

const DebugControls = props => {

  const { attributes, setAttributes, settings } = props;
  const { enableShapeDebug } = attributes;

  if ( ! settings?.debug ) {
    return null;
  }

  return (
    <ControlsGroup title={ __( 'Debug' ) }>
      <ToggleControl
        label={ __( 'Enable Shape Debug', '__plugin_txtd' ) }
        checked={ enableShapeDebug }
        onChange={ () => setAttributes( { enableShapeDebug: ! enableShapeDebug } ) }
      />
    </ControlsGroup>
  )
};

export default DebugControls;
