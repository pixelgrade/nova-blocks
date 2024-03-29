import { ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { useSupports } from "@novablocks/block-editor";

const FunctionalColorsToggleControl = ( props ) => {

  const {
    showFunctionalColors,
    setShowFunctionalColors,
  } = props;

  return (
    <ToggleControl
      label={ __( 'Use Functional Colors', '__plugin_txtd' ) }
      checked={ showFunctionalColors }
      onChange={ value => { setShowFunctionalColors( value ) } }
    />
  )
};

export default FunctionalColorsToggleControl;
