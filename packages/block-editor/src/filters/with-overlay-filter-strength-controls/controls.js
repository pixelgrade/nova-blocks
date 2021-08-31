import { __ } from '@wordpress/i18n';

import {
  RadioControl,
  RangeControl,
  DuotonePicker,
} from '@wordpress/components';

import {
  ControlsSection,
  ControlsTab
} from '../../components';

import {
  getAbsoluteColorVariation,
} from "@novablocks/utils";

import { generateDuotoneFromPalettes } from "./utils";

const OverlayFilterControls = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    style,
    overlayFilterStyle,
    overlayFilterStrength
  } = attributes;

  const { palette: currentPalette } = attributes;

  const palettes = styleManager.palettes,
    currentPaletteVariation = getAbsoluteColorVariation( attributes );

  return (
      <ControlsSection label = { __( 'Overlay Filter' ) } group={__('Modules')}>
        <ControlsTab label={ __( 'General' ) }>
            <RadioControl
              label={ __( 'Overlay Filter', '__plugin_txtd' ) }
              selected={ overlayFilterStyle }
              onChange={
                ( nextFilterStyle ) => {
                  setAttributes( { overlayFilterStyle: nextFilterStyle } )
                  // We need to clear Duotone values.
                  if ( nextFilterStyle === 'unitone' ) {
                    setAttributes( { style: {
                        ...style,
                        color: {}
                      }})
                  }
                }
              }
              options={ [
                { label: __( 'Unitone' ), value: 'unitone' },
                { label: __( 'Duotone' ), value: 'duotone' },
              ] }
            />

            { overlayFilterStyle === 'duotone' && <DuotonePicker
              duotonePalette={  generateDuotoneFromPalettes(palettes, currentPalette, currentPaletteVariation) }
              value = { style?.color?.duotone }
              onChange={ ( newDuotone ) => {
                const newStyle = {
                  ...style,
                  color: {
                    ...style?.color,
                    duotone: newDuotone,
                  },
                };
                setAttributes( { style: newStyle } );
              } }
            />
            }

            { overlayFilterStyle === 'unitone' && <RangeControl
              label={ __( 'Overlay Filter Strength', '__plugin_txtd' ) }
              value={ overlayFilterStrength }
              onChange={ ( nextOverlayFilterStrength ) => setAttributes( { overlayFilterStrength: nextOverlayFilterStrength } ) }
              min={ 0 }
              max={ 100 }
              step={ 10 }
            />
            }

        </ControlsTab>
      </ControlsSection>
  );
}

export default OverlayFilterControls;
