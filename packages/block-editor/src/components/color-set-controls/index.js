import {
  RangeControl,
  ToggleControl,
  ColorPalette,
} from "@wordpress/components";

import {
  Fragment,
  useState,
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

  return (
    <ControlsSection label={ __( 'Color Sets' ) }>
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
                paletteVariation: 12
              }
            },{
              label: 'Color',
              value: 'color',
              preset: {
                useSourceColorAsReference: true,
                paletteVariation: 1
              }
            },{
              label: 'Darker Color',
              value: 'darker-color',
              preset: {
                useSourceColorAsReference: true,
                paletteVariation: 2
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
                paletteVariation: 1
              }
            },{
              label: 'Almost White',
              value: 'lighter',
              preset: {
                useSourceColorAsReference: false,
                paletteVariation: 2
              }
            },{
              label: 'Light',
              value: 'light',
              preset: {
                useSourceColorAsReference: false,
                paletteVariation: 3
              }
            },{
              label: 'Dark',
              value: 'dark',
              preset: {
                useSourceColorAsReference: false,
                paletteVariation: 10
              }
            },{
              label: 'Darker',
              value: 'darker',
              preset: {
                useSourceColorAsReference: false,
                paletteVariation: 11
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

const mapPalettesToColorPalette = palette => {
  const { colors, sourceIndex } = palette;
  return {
    name: palette.label,
    color: colors[sourceIndex].value
  };
}

const isFunctionalPalette = palette => {
  return palette.label.charAt(0) === '_';
}

const disableFunctionalColorsOnBlocks = [
  'novablocks/cards-collection',
  'novablocks/header',
  'novablocks/hero',
  'novablocks/media',
  'novablocks/posts-collection',
]

const PaletteControls = ( props ) => {

  const {
    attributes,
    setAttributes,
    settings: {
      palettes,
    }
  } = props;

  const disableFunctionalColors = disableFunctionalColorsOnBlocks.includes( props.name );
  const currentPalette = palettes.find( currentPalette => currentPalette.id === attributes.palette ) || palettes[0];

  if ( ! currentPalette ) {
    return null;
  }

  const currentColor = currentPalette.colors[currentPalette.sourceIndex];
  const [ showFunctional, setShowFunctional ] = useState( false );

  const functionalColors = palettes.filter( palette => isFunctionalPalette( palette ) ).map( mapPalettesToColorPalette );
  const brandColors = palettes.filter( palette => ! isFunctionalPalette( palette ) ).map( mapPalettesToColorPalette );

  const onChange = ( color ) => {
    const newPalette = palettes.find( currentPalette => {
      const { colors, sourceIndex } = currentPalette;
      return colors[sourceIndex]?.value === color
    } );

    if ( !! newPalette ) {
      setAttributes( { palette: newPalette.id } );
    }
  }

  return (
    <Fragment>
      <ColorPalette
        colors={ showFunctional && ! disableFunctionalColors ? functionalColors : brandColors }
        value={ currentColor }
        onChange={ onChange }
        clearable={ false }
        disableCustomColors={ true }
      />
      { ! disableFunctionalColors && <ToggleControl
        label={ __( 'Show Functional Colors', '__plugin_txtd' ) }
        checked={ showFunctional }
        onChange={ value => { setShowFunctional( value ) } }
      /> }
    </Fragment>
  )
};

const PaletteVariationControls = ( props ) => {

  const {
    attributes,
    setAttributes,
    settings: {
      palettes,
      customify_config
    },
  } = props;

  const {
    palette,
    paletteVariation,
    useSourceColorAsReference,
  } = attributes;

  const currentPalette = palettes.find( paletteIterator => paletteIterator.id === palette );

  if ( ! currentPalette ) {
    return null;
  }

  const { sourceIndex } = currentPalette;
  const siteVariation = customify_config?.sm_site_color_variation?.value || 1;
  const siteVariationOffset = useSourceColorAsReference ? 0 : siteVariation - 1;
  const colorReferenceOffset = useSourceColorAsReference ? sourceIndex : 0;

  return (
    <Fragment>
      <ToggleControl
        key={ 'color-set-use-source-as-reference-control' }
        label={ __( 'Use Source Color as Reference', '__plugin_txtd' ) }
        checked={ useSourceColorAsReference }
        onChange={ newUseSourceAsReference => {
          let offset = siteVariation - sourceIndex;
          let newPaletteVariation = newUseSourceAsReference ? paletteVariation + offset : paletteVariation - offset;
          newPaletteVariation = ( newPaletteVariation + 12 ) % 12;

          setAttributes( {
            useSourceColorAsReference: newUseSourceAsReference,
            paletteVariation: newPaletteVariation,
          } )
        } }
      />
      <RangeControl
        key={ 'color-set-variation-range-control' }
        label={ __( 'Variation', '__plugin_txtd' ) }
        value={ ( paletteVariation + colorReferenceOffset - siteVariationOffset + 12 ) % 12 }
        onChange={ value => {
          setAttributes( { paletteVariation: ( value - colorReferenceOffset - siteVariationOffset + 12 ) % 12 } )
        } }
        min={ 1 }
        max={ 12 }
        step={ 1 }
      />
      <RangeControl
        key={ 'color-set-source-color-offset-control' }
        label={ __( 'Soruce Color Offset', '__plugin_txtd' ) }
        value={ ( ( useSourceColorAsReference ? paletteVariation : paletteVariation - siteVariation - sourceIndex ) + 18 ) % 12 - 6 }
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
