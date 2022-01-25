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
        label={ __( 'Enable Image Container Editing' ) }
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
            label={ __( 'Image resizing' ) }
            selected={ imageResizing }
            onChange={ imageResizing => { setAttributes( { imageResizing } ) } }
            options={ [
              { label: 'Stretch to fill the container', value: 'cropped' },
              { label: 'Shrink to fit (no crop)', value: 'original' },
            ] }
          />
      }
    </ControlsGroup>
  )
};

export default withVisibility( 'media-aspect-ratio', false )( ImageContainerHeightSettings );
