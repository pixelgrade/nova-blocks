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
import { useSupports } from "../../hooks";

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

  const supports = useSupports( props.name );

  const BLOCK_SUPPORT_DUOTONE = supports?.novaBlocks?.overlayFilter?.duotone;

  const OVERLAY_OPTIONS = [ { label: __( 'Unitone' ), value: 'unitone' } ]

  if ( BLOCK_SUPPORT_DUOTONE ) {
    OVERLAY_OPTIONS.push({ label: __( 'Duotone' ), value: 'duotone' });
  }

  return (
      <ControlsSection label = { __( 'Overlay Filter' ) } group={__('Modules')} order={ 40 }>
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
              options={ OVERLAY_OPTIONS }
            />

            { BLOCK_SUPPORT_DUOTONE && overlayFilterStyle === 'duotone' && <DuotonePicker
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

         <RangeControl
              label={ __( 'Overlay Filter Strength', '__plugin_txtd' ) }
              value={ overlayFilterStrength }
              onChange={ ( nextOverlayFilterStrength ) => setAttributes( { overlayFilterStrength: nextOverlayFilterStrength } ) }
              min={ 0 }
              max={ 90 }
              step={ 10 }
            />


        </ControlsTab>
      </ControlsSection>
  );
}

export default OverlayFilterControls;
