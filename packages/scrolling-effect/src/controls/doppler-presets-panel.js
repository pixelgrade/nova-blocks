import { PanelBody, RadioControl } from "@wordpress/components";
import PreviewScrollingButton from "./preview-scrolling-button";

const DopplerPresetsPanel = ( props ) => {

  const {
    attributes: {
      motionPreset,
      scrollingEffect,
    },
    setAttributes,
    settings: {
      motionPresetOptions
    },
  } = props;

  if ( scrollingEffect !== 'doppler' ) {
    return null;
  }

  return (
    <PanelBody title={ `Doppler Scrolling Settings` }>

      <RadioControl
        label={ 'Motion Presets' }
        selected={ motionPreset }
        onChange={ ( motionPreset ) => {
          let newAttributes = { motionPreset };
          let newOption = motionPresetOptions.find( option => motionPreset === option.value );

          if ( newOption && newOption.preset ) {
            newAttributes = Object.assign( newOption.preset, newAttributes );
          }

          setAttributes( newAttributes );
        } }
        options={ motionPresetOptions }
      />
      <PreviewScrollingButton { ...props } />

    </PanelBody>
  )
}

export default DopplerPresetsPanel;
