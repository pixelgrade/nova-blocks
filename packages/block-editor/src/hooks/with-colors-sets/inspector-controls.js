import { normalizeVariationValue } from "@novablocks/utils";

import {
  ToggleControl,
} from "@wordpress/components";

import {
  useState,
} from "@wordpress/element";

import { __ } from "@wordpress/i18n";

import {
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  SignalControl,
  ColorGradesControl,
} from "../../index";

import ColorPalettePicker from './components/color-palette-picker';

import {
  disableFunctionalColorsOnBlocks,
  getVariationFromSignal,
  getSignalFromVariation,
  getAttributesFromSignal,
  isFunctionalPalette,
  mapPalettesToColorPalette,
  getAbsoluteColorVariation,
  getCurrentPaletteRelativeColorVariation,
} from "@novablocks/utils";

import { Notice } from "../../components";

const ColorSetControls = ( props ) => {

  const {
    attributes,
    setAttributes,
    settings: {
      palettes
    },
  } = props;

  const {
    contentSignal,
    palette,
  } = attributes;

  const currentPalette = palettes.find( currentPalette => currentPalette.id === attributes.palette );

  if ( ! currentPalette ) {
    return null;
  }

  const actualBlockVariation = getAbsoluteColorVariation( props );
  const initialSignal = getSignalFromVariation( actualBlockVariation );

  return (
    <ControlsSection label={ __( 'Color Sets' ) }>
      <ControlsTab label={ __( 'Customize' ) }>
        <Notice
          key={ 'color-signal-quick-start' }
          id={ 'novablocks-color-signal-quick-start' }
          content={ <p><strong>Quickstart:</strong> Use this tool to signal particular blocks on your page. A block with a higher color signal stands apart from the rest of your content.</p> }
          dismissLabel={ '✔ Ok, I get it!' }
        />
        <ControlsGroup>
          <SignalControl { ...props } label={ 'Block Color Signal' } signal={ initialSignal } onChange={ newSignal => {
            const paletteVariation = getVariationFromSignal( newSignal );
            const newAttributes = getAttributesFromSignal( newSignal, currentPalette, paletteVariation );

            setAttributes( newAttributes );
          } } />
        </ControlsGroup>
        <ControlsGroup>
          <SignalControl { ...props }
                         label={ 'Content Area Color Signal' }
                         signal={ contentSignal }
                         onChange={ newContentSignal => {
                           setAttributes( {
                             contentSignal: newContentSignal,
                           } )
                         } } />
        </ControlsGroup>
        <ControlsGroup>
          <ColorPalettePicker { ...props } label={ 'Color Palette' } />
        </ControlsGroup>
      </ControlsTab>
      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup>
          <ColorPalettePicker { ...props } label={ 'Color Palette' } />
        </ControlsGroup>
        <ControlsGroup>
          <ColorGradesControl { ...props }
                              label={ __( 'Block Color Signal', '__plugin_txtd' ) }
                              value={ actualBlockVariation }
                              onChange={ value => {
                                setAttributes( {
                                  paletteVariation: getCurrentPaletteRelativeColorVariation( value, props )
                                } )
                              } } />
        </ControlsGroup>
        <MiscellanousControls { ...props } />
      </ControlsTab>
    </ControlsSection>
  )
}

const MiscellanousControls = ( props ) => {

  const {
    attributes,
    setAttributes,
    settings: {
      palettes,
    },
  } = props;

  const {
    palette,
    paletteVariation,
    useSourceColorAsReference,
  } = attributes;

  const [ showFunctional, setShowFunctional ] = useState( false );
  const currentPalette = palettes.find( paletteIterator => paletteIterator.id === palette );
  const disableFunctionalColors = disableFunctionalColorsOnBlocks.includes( props.name );
  const functionalColors = palettes.filter( palette => isFunctionalPalette( palette ) ).map( mapPalettesToColorPalette );
  const brandColors = palettes.filter( palette => ! isFunctionalPalette( palette ) ).map( mapPalettesToColorPalette );

  return (
    <ControlsGroup title={ __( 'Miscellanous' ) } className={ 'novablocks-controls-group--colors-miscellanous-controls' }>
      { ! disableFunctionalColors && <ToggleControl
        label={ __( 'Show Functional Colors', '__plugin_txtd' ) }
        checked={ showFunctional }
        onChange={ value => { setShowFunctional( value ) } }
      /> }
      <ToggleControl
        key={ 'color-set-use-source-as-reference-control' }
        label={ __( 'Use Source Color as Reference', '__plugin_txtd' ) }
        checked={ useSourceColorAsReference }
        onChange={ useSourceColorAsReference => {
          const offsetFactor = useSourceColorAsReference ? -1 : 1;
          const offset = offsetFactor * currentPalette.sourceIndex;
          const nextVariation = normalizeVariationValue( paletteVariation + offset );

          setAttributes( {
            paletteVariation: nextVariation,
            useSourceColorAsReference
          } );
        } }
      />
    </ControlsGroup>
  )
}

export default ColorSetControls;
