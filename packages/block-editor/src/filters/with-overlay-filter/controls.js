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
        <OverlayType { ...props } />
        <CustomDuotonePicker { ...props } />
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

const CustomDuotonePicker = ( props ) => {

  // only paletteId and variationIndex are relevant
  // because hex value can differ after palettes alterations
  const [ from, setFrom ] = useState( props.from );
  const [ to, setTo ] = useState( props.to );

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

  return (
    <Fragment>
      <ControlsGroup title={ __( 'Duotone Presets', '__plugin_txtd' ) }>
        <DuotonePicker options={ options } onChange={ value => {} } />
      </ControlsGroup>
      <ControlsGroup title={ __( 'Shadows', '__plugin_txtd' ) }>
        <ColorPicker options={ colorOptions } onChange={ value => {} } />
      </ControlsGroup>
      <ControlsGroup title={ __( 'Highlights', '__plugin_txtd' ) }>
        <ColorPicker options={ colorOptions } onChange={ value => {} } />
      </ControlsGroup>
    </Fragment>
  )
}

export default OverlayFilterControls;
