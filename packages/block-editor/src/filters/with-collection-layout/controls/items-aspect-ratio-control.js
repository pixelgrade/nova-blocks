import { SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const PRESETS = [
  { label: __( 'Original', '__plugin_txtd' ), value: 'original' },
  { label: __( 'Square 1:1', '__plugin_txtd' ), value: 'square' },
  { label: __( 'Landscape 4:3', '__plugin_txtd' ), value: 'landscape' },
  { label: __( 'Portrait 3:4', '__plugin_txtd' ), value: 'portrait' },
];

const PRESET_VALUES = {
  square:    { thumbnailAspectRatio: 50, thumbnailAspectRatioString: 'portrait', imageResizing: 'cropped' },
  landscape: { thumbnailAspectRatio: 42, thumbnailAspectRatioString: 'landscape', imageResizing: 'cropped' },
  portrait:  { thumbnailAspectRatio: 67, thumbnailAspectRatioString: 'portrait', imageResizing: 'cropped' },
  original:  { thumbnailAspectRatioString: 'original' },
};

const detectCurrentPreset = ( thumbnailAspectRatioString, thumbnailAspectRatio ) => {
  if ( thumbnailAspectRatioString === 'original' ) {
    return 'original';
  }

  if ( thumbnailAspectRatio === 50 ) {
    return 'square';
  }

  if ( thumbnailAspectRatio >= 40 && thumbnailAspectRatio <= 44 ) {
    return 'landscape';
  }

  if ( thumbnailAspectRatio >= 65 && thumbnailAspectRatio <= 69 ) {
    return 'portrait';
  }

  return 'original';
};

const ItemsAspectRatioControl = ( { attributes, setAttributes } ) => {
  const { thumbnailAspectRatioString, thumbnailAspectRatio } = attributes;

  const currentValue = detectCurrentPreset( thumbnailAspectRatioString, thumbnailAspectRatio );

  return (
    <SelectControl
      label={ __( 'Items Aspect Ratio', '__plugin_txtd' ) }
      value={ currentValue }
      options={ PRESETS }
      onChange={ ( value ) => setAttributes( PRESET_VALUES[ value ] || {} ) }
    />
  );
};

export default ItemsAspectRatioControl;
