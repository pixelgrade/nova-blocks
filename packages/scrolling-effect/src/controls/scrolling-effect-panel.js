import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

import { ControlsSection, ControlsTab, useSettings, useSupports } from "@novablocks/block-editor";

const ScrollingEffectPanel = ( props ) => {

  const {
    setAttributes,
    attributes: {
      scrollingEffect,
      motionPreset,
    },
    name,
  } = props;

  const novablocksSettings = useSettings();
  const supports = useSupports( name );

  const {
    motionPresetOptions,
  } = novablocksSettings;

  const scrollingEffectOptions = [ ...novablocksSettings.scrollingEffectOptions ];

  if ( supports?.novaBlocks?.scrollingEffect === true || supports?.novaBlocks?.scrollingEffect?.doppler === true ) {
    scrollingEffectOptions.push( {
      label: __( 'Doppler by Pixelgrade ®', '__plugin_txtd' ),
      value: 'doppler'
    } );
  }

  return (
    <ControlsSection
      id={ 'scrolling-effect' }
      label={ __( 'Scrolling Effect', '__plugin_txtd' ) }
      group={ __( 'Modules', '__plugin_txtd' ) }
      order={ 20 }>
      <ControlsTab label={ __( 'Customize', '__plugin_txtd' ) }>
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
