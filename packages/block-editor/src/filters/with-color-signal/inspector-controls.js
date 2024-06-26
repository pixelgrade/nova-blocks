import { ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Fragment, useCallback } from "@wordpress/element";

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
  getParentVariation,
} from "../../utils";

import {
  addSiteVariationOffset,
  removeSiteVariationOffset,
  computeColorSignal,
  getAbsoluteColorVariation,
  getSignalRelativeToVariation,
  getSourceIndexFromPaletteId,
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
  } = attributes;

  const supports = useSupports( name );
  const referenceVariation = getParentVariation( clientId );

  const [ showFunctionalColors, setShowFunctionalColors ] = useMemoryState( 'showFunctionalColors', false );

  const updateBlock = useCallback( ( newAttributes, useSourceOnSameVariation = false, useSourceOnSameSignal = false ) => {
    const nextAttributes = { ...attributes, ...newAttributes };
    const { palette, useSourceColorAsReference } = nextAttributes;
    const sourceIndex = getSourceIndexFromPaletteId( palette );
    const absoluteVariation = getAbsoluteColorVariation( nextAttributes );
    const nextSignal = getSignalRelativeToVariation( absoluteVariation, referenceVariation );
    const sourceVariation = addSiteVariationOffset( sourceIndex + 1 );
    const sourceSignal = getSignalRelativeToVariation( sourceVariation, referenceVariation );
    const nextSourceAsReference = useSourceColorAsReference ||
                                  ( useSourceOnSameSignal && nextSignal === sourceSignal ) ||
                                  ( useSourceOnSameVariation && absoluteVariation === sourceVariation );
    const nextVariation = computeColorSignal( referenceVariation, nextSignal, absoluteVariation );
    const finalVariation = removeSiteVariationOffset( nextVariation );

    setAttributes( {
      palette: palette,
      paletteVariation: nextSourceAsReference ? 1 : finalVariation,
      useSourceColorAsReference: nextSourceAsReference,
      colorSignal: nextSignal,
    } );

  }, [ clientId, attributes ] )

  const onPaletteVariationChange = useCallback( nextVariation => {

    updateBlock( {
      paletteVariation: nextVariation,
      useSourceColorAsReference: false,
    }, true, false );

  }, [ updateBlock ] )

  const onPaletteChange = useCallback( nextPalette => {

    const newAttributes = {
      palette: nextPalette,
    };

    if ( nextPalette === palette ) {
      const referenceVariation = getParentVariation( clientId );
      const sourceIndex = getSourceIndexFromPaletteId( palette );
      const { useSourceColorAsReference } = attributes;
      const nextSourceColorAsReference = ! useSourceColorAsReference;
      const absoluteVariation = sourceIndex + 1;
      const nextVariation = nextSourceColorAsReference ? 1 : absoluteVariation;
      const nextSignal = getSignalRelativeToVariation( addSiteVariationOffset( absoluteVariation ), referenceVariation );

      setAttributes( {
        useSourceColorAsReference: nextSourceColorAsReference,
        paletteVariation: nextVariation,
        colorSignal: nextSignal,
      } );

      return;
    }

    updateBlock( newAttributes );
  }, [ attributes, updateBlock ] );

  const onSignalChange = useCallback( nextSignal => {
    const referenceVariation = getParentVariation( clientId );
    const absoluteVariation = getAbsoluteColorVariation( attributes );
    const nextVariation = computeColorSignal( referenceVariation, nextSignal, absoluteVariation );
    const finalVariation = removeSiteVariationOffset( nextVariation );

    updateBlock( {
      paletteVariation: finalVariation,
      useSourceColorAsReference: false,
    }, true, true );
  }, [ clientId, attributes ] );

  const ColorPicker = () => {
    return (
      <ControlsGroup>
        <ColorPalettePicker label={ 'Color Palette' } showFunctionalColors={ showFunctionalColors } onChange={ onPaletteChange } { ...props } />
      </ControlsGroup>
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
        <ColorPicker />
        <ColorReferenceToggleControl { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Settings' ) }>
        <ColorPicker />
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
    <Fragment>
      <ControlsGroup title={ __( 'Miscellanous' ) } className={ 'novablocks-controls-group--colors-miscellanous-controls' }>
        <FunctionalColorsToggleControl { ...props } />
      </ControlsGroup>
      <ColorReferenceToggleControl { ...props } />
    </Fragment>
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
    settings: {
      debug
    }
  } = props;

  if ( ! debug ) {
    return null;
  }

  return (
    <ControlsGroup>
      <ToggleControl
        key={ 'color-set-use-source-as-reference-control' }
        label={ __( 'Use Source Color as Reference', '__plugin_txtd' ) }
        checked={ useSourceColorAsReference }
        disabled
      />
    </ControlsGroup>
  )
}

export default ColorSetControls;
