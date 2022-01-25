import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

import { getAspectRatioAttributes, getControlsClasses } from "@novablocks/utils";

import { ControlsGroup, withVisibility } from "../../../components";

const ImageContainerHeightCustomize = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    thumbnailAspectRatio,
    thumbnailAspectRatioString,
  } = attributes;

  return (
    <ControlsGroup title={ __( 'Thumbnail Aspect Ratio' ) }>

      <div className={ getControlsClasses( attributes, getAspectRatioAttributes ) }>
        <RadioControl
          key={ 'thumbnail-aspect-ratio' }
          selected={ thumbnailAspectRatioString }
          onChange={ thumbnailAspectRatioString => {
            let thumbnailAspectRatio = thumbnailAspectRatio;

            if ( thumbnailAspectRatioString === 'landscape' ) {
              thumbnailAspectRatio = 45;
            }

            if ( thumbnailAspectRatioString === 'portrait' ) {
              thumbnailAspectRatio = 65;
            }

            setAttributes( {
              thumbnailAspectRatio,
              thumbnailAspectRatioString
            } );
          } }
          options={ [
            { label: 'Landscape', value: 'landscape' },
            { label: 'Portrait', value: 'portrait' },
            { label: 'Auto', value: 'auto' },
          ] }
        />
      </div>

    </ControlsGroup>
  )
};

export default withVisibility( 'media-aspect-ratio', false )( ImageContainerHeightCustomize );
