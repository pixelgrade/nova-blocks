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
    <ControlsGroup title={ __( 'Thumbnail Aspect Ratio', '__plugin_txtd' ) }>

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
            { label: __( 'Landscape', '__plugin_txtd' ), value: 'landscape' },
            { label: __( 'Portrait', '__plugin_txtd' ), value: 'portrait' },
            { label: __( 'Auto', '__plugin_txtd' ), value: 'auto' },
          ] }
        />
      </div>

    </ControlsGroup>
  )
};

export default withVisibility( 'media-aspect-ratio', false )( ImageContainerHeightCustomize );
