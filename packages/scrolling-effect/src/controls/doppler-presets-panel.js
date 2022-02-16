import { PanelBody, RadioControl } from "@wordpress/components";
import PreviewScrollingButton from "./preview-scrolling-button";

import { useSettings } from "@novablocks/block-editor";

const DopplerPresetsPanel = ( props ) => {

  const {
    attributes: {
      motionPreset,
      scrollingEffect,
    },
    setAttributes,
  } = props;

  if ( scrollingEffect !== 'doppler' ) {
    return null;
  }

  const novablocksSettings = useSettings();

  return (
    <PanelBody title={ `Doppler Scrolling Settings` }>

      <RadioControl
        label={ 'Motion Presets' }
        selected={ motionPreset }
        onChange={ ( motionPreset ) => {
          let newAttributes = { motionPreset };
          let newOption = novablocksSettings.motionPresetOptions.find( option => motionPreset === option.value );

          if ( newOption && newOption.preset ) {
            newAttributes = Object.assign( newOption.preset, newAttributes );
          }

          setAttributes( newAttributes );
        } }
        options={ novablocksSettings.motionPresetOptions }
      />
      <PreviewScrollingButton { ...props } />

    </PanelBody>
  )
};

export default DopplerPresetsPanel;
