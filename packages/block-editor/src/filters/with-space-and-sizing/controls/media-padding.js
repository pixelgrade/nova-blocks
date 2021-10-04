import { RangeControl } from "@wordpress/components";
import { __ } from '@wordpress/i18n';

import { ControlsGroup } from "../../../components";

const MediaPadding = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const { imagePadding } = attributes;

  return (
    <ControlsGroup title={ __( 'Media Area Padding', '__plugin_txtd' ) }>
      <RangeControl
        value={ imagePadding }
        onChange={ imagePadding => {
          setAttributes( { imagePadding } )
        } }
        min={ 0 }
        max={ 100 }
        step={ 25 }
      />
    </ControlsGroup>
  )
}

export default MediaPadding;
