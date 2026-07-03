/**
 * The Media tab — effects that move the IMAGE inside each card as visitors
 * scroll; the cards themselves stay put. This is the manual path: the effect
 * choice plus the Start/End frame panels (hand-editing frames flips the
 * motion to "Custom", exactly as before). The named Doppler bundles live on
 * the Presets tab as recipes.
 */
import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

import { PlusBadge, useSettings, useSupports } from "@novablocks/block-editor";

import { getScrollingEffectSupports } from "./motion-recipes";

const MediaTab = ( props ) => {

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
  const { hasDoppler } = getScrollingEffectSupports( supports );

  const scrollingEffectOptions = [ ...novablocksSettings.scrollingEffectOptions ];

  if ( hasDoppler ) {
    scrollingEffectOptions.push( {
      label: <>{ __( 'Doppler by Pixelgrade ®', '__plugin_txtd' ) }<PlusBadge gateId={ 'doppler' } /></>,
      value: 'doppler'
    } );
  }

  return (
    <>
      <p className="nb-settings-context">
        { __( 'These effects move the image inside each card as you scroll — the cards themselves stay put.', '__plugin_txtd' ) }
      </p>
      <RadioControl
        key={ 'novablocks-scrolling-effect' }
        selected={ scrollingEffect }
        className={ 'novablocks-scrolling-effect' }
        onChange={ ( scrollingEffect ) => {
          let newAttributes = { scrollingEffect };

          if ( scrollingEffect === 'doppler' && motionPreset !== 'custom' ) {
            const newOption = novablocksSettings.motionPresetOptions.find( option => motionPreset === option.value );

            if ( newOption && newOption.preset ) {
              newAttributes = Object.assign( {}, newOption.preset, newAttributes );
            }

            newAttributes.minHeightFallback = 75;
          }

          setAttributes( newAttributes );
        } }
        options={ scrollingEffectOptions }
      />
      { props.children }
    </>
  );
};

export default MediaTab;
