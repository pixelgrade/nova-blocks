import { __ } from '@wordpress/i18n';

import {
  RadioControl,
  RangeControl,
  DuotonePicker,
} from '@wordpress/components';

import { isFunctionalPalette } from "@novablocks/utils";

import {
  ControlsSection,
  ControlsTab
} from '../../components';

import { useSupports } from "../../hooks";

import { generateDuotonePresetsFromPalettes, generateColorPalettes } from "./utils";

const PALETTES = styleManager.palettes;
const FILTERED_PALETTES = PALETTES.filter( palette => ! isFunctionalPalette( palette ) );
const DUOTONE_PALETTES = generateDuotonePresetsFromPalettes( FILTERED_PALETTES );

const COLOR_PALETTES = generateColorPalettes(FILTERED_PALETTES);

const OverlayFilterControls = ( props ) => {

  const { attributes, setAttributes } = props;
  const { overlayFilterStrength } = attributes;

  return (
    <ControlsSection id={ 'overlay-filter' } label={ __( 'Overlay Filter' ) } group={ __( 'Modules' ) } order={ 40 }>
      <ControlsTab label={ __( 'Settings' ) }>
        <OverlayType { ...props } />
        <DuotoneSelect { ...props } />
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

const OverlayType = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    style,
    overlayFilterType,
  } = attributes;

  return (
    <RadioControl
      label={ __( 'Overlay Filter', '__plugin_txtd' ) }
      selected={ overlayFilterType }
      onChange={
        ( nextFilterStyle ) => {
          const newAttributes = { overlayFilterType: nextFilterStyle };

          // We need to clear Duotone values.
          if ( nextFilterStyle === 'unitone' ) {
            Object.assign( newAttributes, {
              style: {
                ...style,
                color: {}
              }
            } );
          }

          setAttributes( newAttributes );
        }
      }
      options={ [
        { label: __( 'Unitone' ), value: 'unitone' },
        { label: __( 'Duotone' ), value: 'duotone' }
      ] }
    />
  )
}

const DuotoneSelect = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    style,
    overlayFilterType,
  } = attributes;

  const supports = useSupports( props.name );
  const BLOCK_SUPPORT_DUOTONE = supports?.novaBlocks?.overlayFilter?.duotone;

  if ( ! BLOCK_SUPPORT_DUOTONE || overlayFilterType !== 'duotone' ) {
    return null;
  }

  return (
    <DuotonePicker
      colorPalette={ COLOR_PALETTES }
      duotonePalette={ DUOTONE_PALETTES }
      value={ style?.color?.duotone }
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
      disableCustomColors={ true }
    />
  )
}

export default OverlayFilterControls;
