import { normalizeVariationValue } from "@novablocks/utils";
import { useMemoryState } from "../../components";

import {
  ToggleControl,
} from "@wordpress/components";

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
  const [ showFunctionalColors, setShowFunctionalColors ] = useMemoryState( 'showFunctionalColors', false );

  return (
    <ControlsSection label={ __( 'Color Signal' ) }>
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
          <ColorPalettePicker showFunctionalColors={ showFunctionalColors } { ...props } label={ 'Color Palette' } />
        </ControlsGroup>
      </ControlsTab>
      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup>
          <ColorPalettePicker showFunctionalColors={ showFunctionalColors } { ...props } label={ 'Color Palette' } />
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
        <MiscellanousControls { ...props } showFunctionalColors={ showFunctionalColors } setShowFunctionalColors={ setShowFunctionalColors } />
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
    showFunctionalColors,
    setShowFunctionalColors
  } = props;

  const {
    palette,
    paletteVariation,
    useSourceColorAsReference,
  } = attributes;

  const currentPalette = palettes.find( paletteIterator => paletteIterator.id === palette );
  const disableFunctionalColors = disableFunctionalColorsOnBlocks.includes( props.name );

  return (
    <ControlsGroup title={ __( 'Miscellanous' ) } className={ 'novablocks-controls-group--colors-miscellanous-controls' }>
      { ! disableFunctionalColors && <ToggleControl
        label={ __( 'Use Functional Colors', '__plugin_txtd' ) }
        checked={ showFunctionalColors }
        onChange={ value => { setShowFunctionalColors( value ) } }
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
