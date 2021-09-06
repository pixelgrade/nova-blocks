import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";
import { RangeControl } from "@wordpress/components";

import {
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  Notice,
  SignalControl,

  useMemoryState,
} from "@novablocks/block-editor";

import {
  ColorGradesControl,
  ColorReferenceToggleControl,
  ContentColorSignalControls,
  MiscellaneousControls,
  PalettePicker,
} from "../components";

import {
  getParentVariation,
} from "../editor/utils";

import {
  addSiteVariationOffset,
  computeColorSignal,
  getAbsoluteColorVariation,
  getSignalRelativeToVariation,
  getSourceIndexFromPaletteId,
  removeSiteVariationOffset,
} from "../utils";

const Controls = ( props ) => {

  const {
    attributes,
    setAttributes,
    clientId,
  } = props;

  const {
    colorSignal,
    paletteVariation,
    emphasisArea,
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
    <ControlsSection label={ __( 'Color Signal' ) } order={ 10 }>
      <ControlsTab label={ __( 'Customize' ) }>
        <Notice
          key={ 'color-signal-quick-start' }
          id={ 'novablocks-color-signal-quick-start' }
          content={ <p><strong>Quickstart:</strong> Use this tool to signal particular blocks on your page. A block with a higher color signal stands apart from the rest of your content.</p> }
          dismissLabel={ '✔ Ok, I get it!' }
        />
        <ControlsGroup>
          <SignalControl { ...props } label={ __( 'Block Color Signal', '__plugin_txtd' ) } signal={ colorSignal } onChange={ onSignalChange } />
        </ControlsGroup>
        <ContentColorSignalControls { ...props } />
        <ControlsGroup>
          <RangeControl
            value={ emphasisArea }
            onChange={ ( emphasisArea ) => setAttributes( { emphasisArea } ) }
            label={ __( 'Emphasis Area' ) }
            min={ 0 }
            max={ 100 }
            step={ 5 }
          />
        </ControlsGroup>
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

export default Controls;
