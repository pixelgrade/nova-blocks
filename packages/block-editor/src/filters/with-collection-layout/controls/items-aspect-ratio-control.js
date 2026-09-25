import { SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import {
  detectItemsAspectRatio,
  getItemsAspectRatioOptions,
  getItemsAspectRatioPatch,
} from './items-aspect-ratio-options';

const ItemsAspectRatioControl = ( { attributes, setAttributes } ) => {
  const currentValue = detectItemsAspectRatio( attributes );

  return (
    <SelectControl
      label={ __( 'Items Aspect Ratio', '__plugin_txtd' ) }
      value={ currentValue }
      options={ getItemsAspectRatioOptions( attributes ) }
      help={ 'row' === currentValue
        ? __( 'Every picture is shown whole; the pictures in a row share the height of its tallest one, so the captions line up.', '__plugin_txtd' )
        : undefined }
      onChange={ ( value ) => setAttributes( getItemsAspectRatioPatch( value ) ) }
    />
  );
};

export default ItemsAspectRatioControl;
