import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";

import ColorReferenceToggleControl from "./color-reference-toggle";
import MiscellaneousControls from "./miscellanous-controls";
import PalettePicker from "./palette-picker";

import {
  ColorGradesControl,
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  Notice,
  SignalControl,
} from "../../../components";

import {
  useMemoryState,
  useSupports,
} from "../../../hooks";

import {
  getParentVariation,
} from "../../../utils";

import {
  addSiteVariationOffset,
  removeSiteVariationOffset,
  computeColorSignal,
  getAbsoluteColorVariation,
  getSignalRelativeToVariation,
  getSourceIndexFromPaletteId,
} from "@novablocks/utils";

const Controls = ( props ) => {

  const {
    attributes,
    setAttributes,
    clientId,
  } = props;

  const {
    colorSignal,
    paletteVariation,
  } = attributes;

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

  }, [ attributes ] );

  const onPaletteVariationChange = useCallback( nextVariation => {

    updateBlock( {
      paletteVariation: nextVariation,
      useSourceColorAsReference: false,
    }, true, false );

  }, [ updateBlock ] );

  const onSignalChange = useCallback( nextSignal => {
    const referenceVariation = getParentVariation( clientId );
    const absoluteVariation = getAbsoluteColorVariation( attributes );
    const nextVariation = computeColorSignal( referenceVariation, nextSignal, absoluteVariation );
    const finalVariation = removeSiteVariationOffset( nextVariation );

    updateBlock( {
      paletteVariation: finalVariation,
      useSourceColorAsReference: false,
    }, true, true );

  }, [ updateBlock ] );

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
        <ContentColorSignalControls { ...props } />
        <PalettePicker { ...props } showFunctionalColors={ showFunctionalColors } />
        <ColorReferenceToggleControl { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Settings' ) }>
        <PalettePicker { ...props } showFunctionalColors={ showFunctionalColors } />
        <ControlsGroup>
          <ColorGradesControl { ...props }
                              label={ __( 'Block Color Signal', '__plugin_txtd' ) }
                              value={ paletteVariation }
                              signal={ colorSignal }
                              onChange={ onPaletteVariationChange } />
        </ControlsGroup>
        <MiscellaneousControls { ...props } showFunctionalColors={ showFunctionalColors } setShowFunctionalColors={ setShowFunctionalColors } />
      </ControlsTab>
    </ControlsSection>
  )
}

const ContentColorSignalControls = ( props ) => {

  const { attributes, name } = props;
  const { contentColorSignal } = attributes;
  const supports = useSupports( name );

  if ( ! supports?.novaBlocks?.contentColorSignal ) {
    return null;
  }

  return (
    <ControlsGroup>
      <SignalControl { ...props }
                     label={ 'Content Area Color Signal' }
                     signal={ contentColorSignal }
                     onChange={ contentColorSignal => {
                       setAttributes( { contentColorSignal: contentColorSignal } )
                     } } />
    </ControlsGroup>
  )
}

export default Controls;
