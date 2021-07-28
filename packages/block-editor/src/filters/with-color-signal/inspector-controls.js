import { ToggleControl } from "@wordpress/components";
import { select } from "@wordpress/data";
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
  getComputedVariation,
  getPaletteConfig, getReferenceVariation,
  getSignalRelativeToVariation,
} from "../../utils";

import ColorPalettePicker from './components/color-palette-picker';

import {
  getSiteColorVariation,
  normalizeVariationValue,
} from "@novablocks/utils";

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

  if ( ! currentPalette ) {
    return null;
  }

  const [ showFunctionalColors, setShowFunctionalColors ] = useMemoryState( 'showFunctionalColors', false );
  const parentVariation = getReferenceVariation( clientId );

  const updateColors = useCallback( ( nextVariation, nextColorSignal, useSourceColorAsReference ) => {
    const newVariation = getComputedVariation( parentVariation, nextColorSignal, nextVariation );

    setAttributes( {
      colorSignal: nextColorSignal,
      paletteVariation: newVariation,
    } );

  }, [ parentVariation ] )

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
            updateColors( paletteVariation, nextSignal, useSourceColorAsReference );
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
          <ColorPalettePicker showFunctionalColors={ showFunctionalColors } { ...props } label={ 'Color Palette' } sticky={ true } />
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
                                const nextSignal = getSignalRelativeToVariation( value, parentVariation );
                                updateColors( value, nextSignal, useSourceColorAsReference );
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
  const { getBlockParents } = select( 'core/block-editor' );

  const {
    attributes,
    setAttributes,
    clientId,
  } = props;

  const {
    palette,
    paletteVariation,
    useSourceColorAsReference,
  } = attributes;

  const currentPalette = getPaletteConfig( palette );
  const parents = getBlockParents( clientId );
  const isDisabled = Array.isArray( parents ) && parents.length;

  return (
    <ToggleControl
      key={ 'color-set-use-source-as-reference-control' }
      label={ __( 'Use Source Color as Reference', '__plugin_txtd' ) }
      checked={ useSourceColorAsReference }
      disabled={ isDisabled }
      onChange={ useSourceColorAsReference => {
        const siteVariation = getSiteColorVariation();
        const offsetFactor = useSourceColorAsReference ? -1 : 1;
        const offset = offsetFactor * ( siteVariation - 1 + currentPalette.sourceIndex );
        const nextVariation = normalizeVariationValue( paletteVariation + offset );

        setAttributes( {
          paletteVariation: nextVariation,
          useSourceColorAsReference
        } );
      } }
    />
  )
}

export default ColorSetControls;
