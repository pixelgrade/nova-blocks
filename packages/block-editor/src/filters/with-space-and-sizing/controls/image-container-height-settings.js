import { __ } from "@wordpress/i18n";
import { RadioControl, RangeControl, ToggleControl } from "@wordpress/components";

import {
  ControlsGroup,
  withVisibility
} from "../../../components";

const ImageContainerHeightSettings = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    thumbnailAspectRatio,
    thumbnailAspectRatioString,
    imageResizing,
  } = attributes;

  return (
    <ControlsGroup>
      <ToggleControl
        label={ __( 'Enable Image Container Editing', '__plugin_txtd' ) }
        checked={ thumbnailAspectRatioString !== 'auto' }
        onChange={ newValue => {
          let currentOrientation = thumbnailAspectRatio < 50 ? 'landscape' : 'portrait';
          let thumbnailAspectRatioString = ! newValue ? 'auto' : currentOrientation;
          setAttributes( { thumbnailAspectRatioString } );
        } }
      />
      {
        thumbnailAspectRatioString !== 'auto' &&
          <RangeControl
            label={ __( 'Media Aspect Ratio', '__plugin_txtd' ) }
            value={ thumbnailAspectRatio }
            onChange={ thumbnailAspectRatio => {
              setAttributes( {
                thumbnailAspectRatio,
                thumbnailAspectRatioString: thumbnailAspectRatio < 50 ? 'landscape' : 'portrait'
              } )
            } }
            min={ 0 }
            max={ 100 }
            step={ 5 }
          />
      }
      {
        thumbnailAspectRatioString !== 'auto' &&
          <RadioControl
            label={ __( 'Image resizing', '__plugin_txtd' ) }
            selected={ imageResizing }
            onChange={ imageResizing => { setAttributes( { imageResizing } ) } }
            options={ [
              { label: __( 'Stretch to fill the container', '__plugin_txtd' ), value: 'cropped' },
              { label: __( 'Shrink to fit (no crop)', '__plugin_txtd' ), value: 'original' },
            ] }
          />
      }
    </ControlsGroup>
  )
};

export default withVisibility( 'media-aspect-ratio', false )( ImageContainerHeightSettings );
