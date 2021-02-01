import {
  RadioControl,
  RangeControl,
  ToggleControl
} from "@wordpress/components";

import {
  Fragment
} from "@wordpress/element";

import colorSetAttributes from './attributes.json';

import {
  ControlsGroup,
  ControlsSection,
  ControlsTab
} from "../index";

import { __ } from "@wordpress/i18n";
import PalettePresetControl from "../palette-preset-control";

const ColorSetControls = ( props ) => {

  const {
    settings: {
      palettes,
    }
  } = props;

  const presetSets = [ {
    label: 'Light',
    useSourceColorAsReference: false,
    paletteVariation: 0
  }, {
    label: 'Color',
    useSourceColorAsReference: true,
    paletteVariation: 0
  }, {
    label: 'Dark',
    useSourceColorAsReference: false,
    paletteVariation: 10
  } ];

  const presets = presetSets.reduce( ( presets, presetSet ) => {
    const { label, useSourceColorAsReference, paletteVariation } = presetSet;

    const newPresets = palettes.map( ( palette, index ) => {
      return {
        label: `${ label } ${ palette.label }`,
        value: `${ label.toLowerCase() }-${ index }`,
        preset: {
          palette: index,
          useSourceColorAsReference,
          paletteVariation,
        }
      }
    } )

    return presets.concat( newPresets );
  }, [] );

  return (
    <ControlsSection label={ __( 'Color Sets' ) }>
      <ControlsTab label={ __( 'General' ) }>
        <PalettePresetControl
          key={ 'novablocks-color-set-preset' }
          label={ __( 'Choose a color preset:', '__plugin_txtd' ) }
          options={ presets }
        />
      </ControlsTab>
      <ControlsTab label={ __( 'Customize' ) }>
        <ControlsGroup title={ __( 'Color' ) }>
          <PaletteControls { ...props } />
        </ControlsGroup>
        <ControlsGroup title={ __( 'Color Variation' ) }>
          <PalettePresetControl
            key={ 'novablocks-color-variation-preset-1' }
            label={ __( 'Choose a relative preset:', '__plugin_txtd' ) }
            options={ [ {
              label: 'Lighter Color',
              value: 'lighter-color',
              preset: {
                useSourceColorAsReference: true,
                paletteVariation: 11
              }
            },{
              label: 'Color',
              value: 'color',
              preset: {
                useSourceColorAsReference: true,
                paletteVariation: 0
              }
            },{
              label: 'Darker Color',
              value: 'darker-color',
              preset: {
                useSourceColorAsReference: true,
                paletteVariation: 1
              }
            } ] }
          />
          <PalettePresetControl
            key={ 'novablocks-color-variation-preset-2' }
            label={ __( 'Choose a absolute preset:', '__plugin_txtd' ) }
            options={ [ {
              label: 'Always White',
              value: 'white',
              preset: {
                useSourceColorAsReference: false,
                paletteVariation: 0
              }
            },{
              label: 'Almost White',
              value: 'lighter',
              preset: {
                useSourceColorAsReference: false,
                paletteVariation: 1
              }
            },{
              label: 'Light',
              value: 'light',
              preset: {
                useSourceColorAsReference: false,
                paletteVariation: 2
              }
            },{
              label: 'Dark',
              value: 'dark',
              preset: {
                useSourceColorAsReference: false,
                paletteVariation: 9
              }
            },{
              label: 'Darker',
              value: 'darker',
              preset: {
                useSourceColorAsReference: false,
                paletteVariation: 10
              }
            } ] }
          />
        </ControlsGroup>
      </ControlsTab>
      <ControlsTab label={ __( 'Settings' ) }>
        <PaletteControls { ...props } />
        <PaletteVariationControls { ...props } />
      </ControlsTab>
    </ControlsSection>
  )
}

const PaletteControls = ( props ) => {

  const {
    settings: {
      palettes,
    }
  } = props;

  return (
    <PalettePresetControl
      label={ __( 'Main Color' ) }
      options={ palettes.map( ( palette, index ) => {
        return {
          label: palette.label,
          value: `palette-${ index }`,
          preset: {
            palette: index
          }
        }
      } ) }
    />
  );
};

const PaletteVariationControls = ( props ) => {

  const {
    attributes,
    setAttributes,
    settings: {
      palettes
    },
  } = props;

  const {
    palette,
    paletteVariation,
    useSourceColorAsReference,
  } = attributes;

  const currentPalette = palettes[palette];
  const { sourceIndex } = currentPalette;
  const offset = useSourceColorAsReference ? sourceIndex : 0 ;

  return (
    <Fragment>
      <ToggleControl
        key={ 'color-set-use-source-as-reference-control' }
        label={ __( 'Use Source Color as Reference', '__plugin_txtd' ) }
        checked={ useSourceColorAsReference }
        onChange={ () => {
          setAttributes( {
            useSourceColorAsReference: ! useSourceColorAsReference,
            paletteVariation: !! useSourceColorAsReference ? paletteVariation + sourceIndex : paletteVariation - sourceIndex,
          } )
        } }
      />
      <RangeControl
        key={ 'color-set-variation-range-control' }
        label={ __( 'Variation', '__plugin_txtd' ) }
        value={ ( paletteVariation + offset ) % 12 }
        onChange={ newVariation => {
          setAttributes( { paletteVariation: ( newVariation - offset + 12 ) % 12 } )
        } }
        min={ 0 }
        max={ 11 }
        step={ 1 }
      />
      <RangeControl
        key={ 'color-set-source-color-offset-control' }
        label={ __( 'Soruce Color Offset', '__plugin_txtd' ) }
        value={ useSourceColorAsReference ? ( paletteVariation + 6 ) % 12 - 6 : 0 }
        min={ -6 }
        max={ 6 }
        step={ 0 }
        disabled
      />
    </Fragment>
  )
}

export {
  colorSetAttributes,
  ColorSetControls,
  PaletteControls,
  PaletteVariationControls
}
