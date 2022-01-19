import { __ } from '@wordpress/i18n';
import { Fragment, useEffect, useMemo } from "@wordpress/element";

import {
  RadioControl,
  RangeControl,
} from '@wordpress/components';

import { isFunctionalPalette } from "@novablocks/utils";

import {
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  ColorPicker,
  DuotonePicker
} from '../../components';

import { useSupports } from "../../hooks";

import { generateDuotonePresetsFromPalettes, generateColorPalettes } from "./utils";

const PALETTES = styleManager.palettes;
const FILTERED_PALETTES = PALETTES.filter( palette => ! isFunctionalPalette( palette ) );
const DUOTONE_PALETTES = generateDuotonePresetsFromPalettes( FILTERED_PALETTES );
const COLOR_PALETTES = generateColorPalettes( FILTERED_PALETTES );

const OverlayFilterControls = ( props ) => {

  const { attributes, setAttributes } = props;
  const { overlayFilterStrength } = attributes;

  return (
    <ControlsSection id={ 'overlay-filter' } label={ __( 'Overlay Filter' ) } group={ __( 'Modules' ) } order={ 40 }>
      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup>
          <OverlayType { ...props } />
        </ControlsGroup>
        <CustomDuotonePicker { ...props } />
        <ControlsGroup>
          <RangeControl
            label={ __( 'Overlay Filter Strength', '__plugin_txtd' ) }
            value={ overlayFilterStrength }
            onChange={ ( nextOverlayFilterStrength ) => setAttributes( { overlayFilterStrength: nextOverlayFilterStrength } ) }
            min={ 0 }
            max={ 90 }
            step={ 10 }
          />
        </ControlsGroup>
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

  const supports = useSupports( props.name );
  const supportsDuotone = useMemo( () => !! supports?.novaBlocks?.overlayFilter?.duotone, [ supports ] );

  useEffect( () => {
    if ( ! supportsDuotone && overlayFilterType !== 'unitone' ) {
      setAttributes( { overlayFilterType: 'unitone' } );
    }
  }, [ overlayFilterType, supportsDuotone ] );

  if ( ! supportsDuotone ) {
    return null;
  }

  return (
    <RadioControl
      label={ __( 'Overlay Filter', '__plugin_txtd' ) }
      selected={ overlayFilterType }
      onChange={
        ( nextFilterStyle ) => {
          setAttributes( { overlayFilterType: nextFilterStyle } );
        }
      }
      options={ [
        { label: __( 'Unitone' ), value: 'unitone' },
        { label: __( 'Duotone' ), value: 'duotone' }
      ] }
    />
  )
}

const CustomDuotonePicker = ( props ) => {

  // only paletteId and variationIndex are relevant
  // because hex value can differ after palettes alterations
  const { attributes, setAttributes, clientId } = props;
  const { overlayFilterType, overlayFilterDuotoneConfig } = attributes;
  const from = overlayFilterDuotoneConfig?.from;
  const to = overlayFilterDuotoneConfig?.to;

  if ( overlayFilterType !== 'duotone' ) {
    return null;
  }

  const options = DUOTONE_PALETTES.map( ( duotone, index ) => {
    return {
      data: duotone,
      value: index,
      colors: [ duotone.from.hex, duotone.to.hex ]
    }
  } );

  const colorOptions = COLOR_PALETTES.map( ( color, index ) => {
    return {
      data: color,
      value: index,
      colors: [ color.hex ]
    }
  } )

  const duotoneValue = from && to && options.findIndex( option => {
    return option.data.from.paletteId === from.paletteId &&
           option.data.from.variationIndex === from.variationIndex &&
           option.data.to.paletteId === to.paletteId &&
           option.data.to.variationIndex === to.variationIndex;
  } );

  const fromValue = from && colorOptions.findIndex( color => {
    return color.data.paletteId === from.paletteId &&
           color.data.variationIndex === from.variationIndex;
  } );

  const toValue = to && colorOptions.findIndex( color => {
    return color.data.paletteId === to.paletteId &&
           color.data.variationIndex === to.variationIndex
  } );


  return (
    <Fragment>
      <ControlsGroup title={ __( 'Duotone Presets', '__plugin_txtd' ) }>
        <DuotonePicker selected={ duotoneValue } options={ options } onChange={ value => {
          setAttributes( { overlayFilterDuotoneConfig: options[value].data } );
        } } />
      </ControlsGroup>
      <ControlsGroup title={ __( 'Highlights', '__plugin_txtd' ) }>
        <ColorPicker selected={ toValue } options={ colorOptions } onChange={ value => {
          setAttributes( {
            overlayFilterDuotoneConfig: {
              ...overlayFilterDuotoneConfig,
              to: colorOptions[value].data
            }
          } );
        } } />
      </ControlsGroup>
      <ControlsGroup title={ __( 'Shadows', '__plugin_txtd' ) }>
        <ColorPicker selected={ fromValue } options={ colorOptions } onChange={ value => {
          setAttributes( {
            overlayFilterDuotoneConfig: {
              ...overlayFilterDuotoneConfig,
              from: colorOptions[value].data
            }
          } );
        } } />
      </ControlsGroup>
    </Fragment>
  )
}

export default OverlayFilterControls;
