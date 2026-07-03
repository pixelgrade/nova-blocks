import { PanelBody, RadioControl } from "@wordpress/components";
import PreviewScrollingButton from "./preview-scrolling-button";

import { TryAndPlay, useSettings } from "@novablocks/block-editor";

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
      <TryAndPlay gateId={ 'motion-presets' }>
        <RadioControl
          label={ 'Motion Presets' }
          selected={ motionPreset }
          onChange={ ( motionPreset ) => {
            let newAttributes = { motionPreset };
            let newOption = novablocksSettings.motionPresetOptions.find( option => motionPreset === option.value );

            if ( newOption && newOption.preset ) {
              newAttributes = Object.assign( {}, newOption.preset, newAttributes );
            }

            setAttributes( newAttributes );
          } }
          options={ novablocksSettings.motionPresetOptions }
        />
      </TryAndPlay>
    </PanelBody>
  )
};

export default DopplerPresetsPanel;
