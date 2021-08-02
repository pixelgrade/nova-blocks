import { ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import {
  ColorGradesControl,
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  Notice,
  SignalControl,
} from "../../components";

import {
  useMemoryState,
  useSupports,
} from "../../hooks";

import {
  getPaletteConfig,
  getParentVariation,
  getSignalRelativeToVariation,
} from "../../utils";

import {
  normalizeVariationValue
} from "@novablocks/utils";

import ColorPalettePicker from './components/color-palette-picker';

const ColorSetControls = ( props ) => {

  const {
    attributes,
    setAttributes,
    name,
    clientId,
  } = props;

  const {
    colorSignal,
    contentColorSignal,
    palette,
    paletteVariation,
    useSourceColorAsReference,
  } = attributes;

  const supports = useSupports( name );
  const currentPalette = getPaletteConfig( palette );
  const { sourceIndex } = currentPalette;

  if ( ! currentPalette ) {
    return null;
  }

  const [ showFunctionalColors, setShowFunctionalColors ] = useMemoryState( 'showFunctionalColors', false );
  const parentVariation = getParentVariation( clientId );

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
          <SignalControl { ...props } label={ 'Block Color Signal' } signal={ colorSignal } onChange={ nextSignal => {
            const sourceSignal = getSignalRelativeToVariation( sourceIndex + 1, parentVariation );

            setAttributes( {
              useSourceColorAsReference: sourceSignal === nextSignal,
              paletteVariation: sourceSignal === nextSignal ? 1 : paletteVariation,
              colorSignal: nextSignal
            } );
          } } />
        </ControlsGroup>
        {
          supports?.novaBlocks?.contentColorSignal &&
          <ControlsGroup>
            <SignalControl { ...props }
                           label={ 'Content Area Color Signal' }
                           signal={ contentColorSignal }
                           onChange={ contentColorSignal => {
                             setAttributes( { contentColorSignal: contentColorSignal } )
                           } } />
          </ControlsGroup>
        }
        <ControlsGroup>
          <ColorPalettePicker showFunctionalColors={ showFunctionalColors } { ...props } label={ 'Color Palette' } />
        </ControlsGroup>
        <ControlsGroup>
          <ColorReferenceToggleControl { ...props } />
        </ControlsGroup>
      </ControlsTab>
      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup>
          <ColorPalettePicker showFunctionalColors={ showFunctionalColors } { ...props } label={ 'Color Palette' } />
        </ControlsGroup>
        <ControlsGroup>
          <ColorGradesControl { ...props }
                              label={ __( 'Block Color Signal', '__plugin_txtd' ) }
                              value={ paletteVariation }
                              signal={ colorSignal }
                              onChange={ value => {
                                const nextVariation = useSourceColorAsReference ? normalizeVariationValue( value - sourceIndex ) : value;
                                const nextSignal = getSignalRelativeToVariation( value, parentVariation );
                                const nextSourceAsReference = value === sourceIndex + 1;

                                console.log( nextVariation );

                                setAttributes( {
                                  useSourceColorAsReference: nextSourceAsReference,
                                  paletteVariation: nextSourceAsReference ? 1 : nextVariation,
                                  colorSignal: nextSignal,
                                } );
                              } } />
        </ControlsGroup>
        <MiscellanousControls { ...props } showFunctionalColors={ showFunctionalColors } setShowFunctionalColors={ setShowFunctionalColors } />
      </ControlsTab>
    </ControlsSection>
  )
}

const MiscellanousControls = ( props ) => {

  return (
    <ControlsGroup title={ __( 'Miscellanous' ) } className={ 'novablocks-controls-group--colors-miscellanous-controls' }>
      <FunctionalColorsToggleControl { ...props } />
      <ColorReferenceToggleControl { ...props } />
    </ControlsGroup>
  )
}

const FunctionalColorsToggleControl = ( props ) => {

  const {
    showFunctionalColors,
    setShowFunctionalColors,
    name
  } = props;

  const supports = useSupports( name );
  const disableFunctionalColors = ! supports?.novaBlocks?.colorSignal?.functionalColors;

  if ( disableFunctionalColors ) {
    return null;
  }

  return (
    <ToggleControl
      label={ __( 'Use Functional Colors', '__plugin_txtd' ) }
      checked={ showFunctionalColors }
      onChange={ value => { setShowFunctionalColors( value ) } }
    />
  )
}

const ColorReferenceToggleControl = ( props ) => {

  const {
    attributes: {
      useSourceColorAsReference
    },
  } = props;

  return (
    <ToggleControl
      key={ 'color-set-use-source-as-reference-control' }
      label={ __( 'Use Source Color as Reference', '__plugin_txtd' ) }
      checked={ useSourceColorAsReference }
      disabled
    />
  )
}

export default ColorSetControls;
