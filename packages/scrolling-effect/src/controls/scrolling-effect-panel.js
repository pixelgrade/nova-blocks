import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

import { ControlsSection, ControlsTab, useSupports } from "@novablocks/block-editor";

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

  const supports = useSupports( name );

  const {
    motionPresetOptions,
  } = settings;

  const scrollingEffectOptions = [ ...settings.scrollingEffectOptions ];

  if ( supports?.novaBlocks?.scrollingEffect === true || supports?.novaBlocks?.scrollingEffect?.doppler === true ) {
    scrollingEffectOptions.push( {
      label: __( 'Doppler by Pixelgrade ®' ),
      value: 'doppler'
    } );
  }

  return (
    <ControlsSection id={ 'scrolling-effect' } label={ __( 'Scrolling Effect' ) } group={ __( 'Modules' ) } order={ 20 }>
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
