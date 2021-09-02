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

import {generateDuotonePresetsFromPalettes, generateColorPalettes} from "./utils";
import { isFunctionalPalette } from "@novablocks/utils";

const PALETTES = styleManager.palettes;
const FILTERED_PALETTES = PALETTES.filter( palette => ! isFunctionalPalette( palette ) );
const DUOTONE_PALETTES = generateDuotonePresetsFromPalettes(FILTERED_PALETTES);

const COLOR_PALETTES = generateColorPalettes(FILTERED_PALETTES);

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
              colorPalette={ COLOR_PALETTES }
              duotonePalette={ DUOTONE_PALETTES }
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
              disableCustomColors = { true }
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
