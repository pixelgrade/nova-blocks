import { PanelBody, RadioControl } from "@wordpress/components";

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

    </PanelBody>
  )
}

export default DopplerPresetsPanel;
