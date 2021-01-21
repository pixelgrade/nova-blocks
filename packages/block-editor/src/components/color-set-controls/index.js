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
import PresetControl from "../preset-control";

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
        <PresetControl
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
          <PresetControl
            key={ 'novablocks-color-variation-preset-1' }
            label={ __( 'Choose a relative preset:', '__plugin_txtd' ) }
            options={ [ {
              label: 'Color',
              value: 'color',
              preset: {
                useSourceColorAsReference: true,
                paletteVariation: 0
              }
            },{
              label: 'Lighter Color',
              value: 'lighter-color',
              preset: {
                useSourceColorAsReference: true,
                paletteVariation: 11
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
          <PresetControl
            key={ 'novablocks-color-variation-preset-2' }
            label={ __( 'Choose a absolute preset:', '__plugin_txtd' ) }
            options={ [ {
              label: 'White',
              value: 'white',
              preset: {
                useSourceColorAsReference: false,
                paletteVariation: 0
              }
            },{
              label: 'Lighter',
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
    attributes,
    setAttributes,
    settings: {
      palettes,
    }
  } = props;

  return (
    <RadioControl
      label={ __( 'Main Color' ) }
      selected={ attributes.palette }
      onChange={ ( palette ) => {
        setAttributes( {
          palette: parseInt( palette, 10 )
        } );
      } }
      options={ palettes.map( ( palette, index ) => {
        return {
          label: palette.label,
          value: index
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
        key={ 'collection-image-container-height' }
        label={ __( 'Variation', '__plugin_txtd' ) }
        value={ ( paletteVariation + offset ) % 12 }
        onChange={ newVariation => {
          setAttributes( { paletteVariation: ( newVariation + 12 - offset ) % 12 } )
        } }
        min={ 0 }
        max={ 11 }
        step={ 1 }
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
