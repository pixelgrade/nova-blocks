import { ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";

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
  computeColorSignal,
  getAbsoluteColorVariation,
  getPaletteConfig,
  getParentVariation,
  getSignalRelativeToVariation,
} from "../../utils";

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
  } = attributes;

  const supports = useSupports( name );
  const referenceVariation = getParentVariation( clientId );

  const [ showFunctionalColors, setShowFunctionalColors ] = useMemoryState( 'showFunctionalColors', false );

  const updateBlock = useCallback( ( newAttributes, sticky = false ) => {
    const nextAttributes = { ...attributes, ...newAttributes };
    const { palette } = nextAttributes;
    const currentPalette = getPaletteConfig( palette );
    const { sourceIndex } = currentPalette;
    const absoluteVariation = getAbsoluteColorVariation( nextAttributes );
    const nextSignal = getSignalRelativeToVariation( absoluteVariation, referenceVariation );
    const sourceSignal = getSignalRelativeToVariation( sourceIndex + 1, referenceVariation );
    const nextSourceAsReference = ( sticky && nextSignal === sourceSignal ) || ( absoluteVariation === sourceIndex + 1 );
    const nextVariation = computeColorSignal( referenceVariation, nextSignal, absoluteVariation );

    setAttributes( {
      palette: palette,
      paletteVariation: nextSourceAsReference ? 1 : nextVariation,
      useSourceColorAsReference: nextSourceAsReference,
      colorSignal: nextSignal,
    } );

  }, [ clientId, attributes ] )

  const onPaletteVariationChange = useCallback( nextVariation => {
    updateBlock( {
      paletteVariation: nextVariation,
      useSourceColorAsReference: false,
    } );
  }, [ updateBlock ] )

  const onPaletteChange = useCallback( nextPalette => {

    const newAttributes = {
      palette: nextPalette,
    };

    if ( nextPalette === palette ) {
      const currentPalette = getPaletteConfig( palette );
      const { sourceIndex } = currentPalette;
      const { useSourceColorAsReference } = attributes;
      const nextSourceColorAsReference = ! useSourceColorAsReference;
      const absoluteVariation = sourceIndex + 1;
      const nextVariation = nextSourceColorAsReference ? 1 : absoluteVariation;
      const nextSignal = getSignalRelativeToVariation( absoluteVariation, referenceVariation );

      setAttributes( {
        useSourceColorAsReference: nextSourceColorAsReference,
        paletteVariation: nextVariation,
        colorSignal: nextSignal,
      } );

      return;
    }

    updateBlock( newAttributes, true );
  }, [ attributes, updateBlock ] );

  const onSignalChange = useCallback( nextSignal => {
    const referenceVariation = getParentVariation( clientId );
    const nextVariation = computeColorSignal( referenceVariation, nextSignal, attributes.paletteVariation );

    updateBlock( {
      useSourceColorAsReference: false,
      paletteVariation: nextVariation
    }, true );
  }, [ clientId, attributes ] );

  const ColorPicker = () => {
    return (
      <ColorPalettePicker
        { ...props }
        label={ 'Color Palette' }
        showFunctionalColors={ showFunctionalColors }
        onChange={ onPaletteChange } />
    )
  }

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
          <SignalControl { ...props } label={ 'Block Color Signal' } signal={ colorSignal } onChange={ onSignalChange } />
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
          <ColorPicker />
        </ControlsGroup>
        <ControlsGroup>
          <ColorReferenceToggleControl { ...props } />
        </ControlsGroup>
      </ControlsTab>
      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup>
          <ColorPicker />
        </ControlsGroup>
        <ControlsGroup>
          <ColorGradesControl { ...props }
                              label={ __( 'Block Color Signal', '__plugin_txtd' ) }
                              value={ paletteVariation }
                              signal={ colorSignal }
                              onChange={ onPaletteVariationChange } />
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
