import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";
import { ControlsSection, ControlsTab } from "../../../index";

const ScrollingEffectPanel = ( props ) => {

  const {
    setAttributes,
    attributes: {
      scrollingEffect,
      motionPreset,
    },
    settings,
    name,
  } = props;

  const {
    motionPresetOptions,
    theme_support: {
      doppler
    }
  } = settings;

  const scrollingEffectOptions = [ ...settings.scrollingEffectOptions ];

  if ( !! doppler && ( doppler.includes( name ) ) ) {
    scrollingEffectOptions.push( {
      label: __( 'Doppler by Pixelgrade ®' ),
      value: 'doppler'
    } );
  }

  return (
    <ControlsSection label={ __( 'Scrolling Effect' ) }>
      <ControlsTab label={ __( 'Customize' ) }>
        <RadioControl
          key={ 'novablocks-scrolling-effect' }
          selected={ scrollingEffect }
          className={ 'novablocks-scrolling-effect' }
          onChange={ ( scrollingEffect ) => {
            let newAttributes = { scrollingEffect };

            if ( scrollingEffect === 'doppler' && motionPreset !== 'custom' ) {
              let newOption = motionPresetOptions.find( option => motionPreset === option.value );
              newAttributes = Object.assign( newOption.preset, newAttributes );
              newAttributes.minHeightFallback = 75;
            }

            setAttributes( newAttributes );
          } }
          options={ scrollingEffectOptions }
        />
        { props.children }
      </ControlsTab>
    </ControlsSection>
  )
};

export default ScrollingEffectPanel;
