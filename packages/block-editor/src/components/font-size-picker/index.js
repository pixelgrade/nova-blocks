import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";

const FONT_SIZE_OPTIONS = [
  { value: 'smallest', label: __( 'Smallest', '__plugin_txtd' ) },
  { value: 'smaller', label: __( 'Smaller', '__plugin_txtd' ) },
  { value: 'normal', label: __( 'Normal', '__plugin_txtd' ) },
  { value: 'larger', label: __( 'Larger', '__plugin_txtd' ) },
  { value: 'largest', label: __( 'Largest', '__plugin_txtd' ) },
];

const DEFAULT_FONT_SIZE = 'normal';

const FontSizePicker = props => {

  return (
    <SelectControl
      label={ __( 'Font Size', '__plugin_txtd' ) }
      options={ FONT_SIZE_OPTIONS }
      { ...props }
    />
  )
}

FontSizePicker.DEFAULT_FONT_SIZE = DEFAULT_FONT_SIZE;
FontSizePicker.FONT_SIZE_OPTIONS = FONT_SIZE_OPTIONS;

export default FontSizePicker;
