import { ControlsGroup } from "../../../components";
import ColorPalettePicker from "../components/color-palette-picker";

import {
  getParentVariation,
} from "../../../utils";

import {
  addSiteVariationOffset,
  getSignalRelativeToVariation,
  getSourceIndexFromPaletteId,
  isFunctionalPalette,
} from "@novablocks/utils";

const PalettePicker = ( props ) => {

  const { attributes, setAttributes, clientId, settings, showFunctionalColors } = props;
  const { palettes } = settings;
  const { palette, paletteVariation, useSourceColorAsReference } = attributes;

  const functionalColors = palettes.filter( palette => isFunctionalPalette( palette ) );
  const brandColors = palettes.filter( palette => ! isFunctionalPalette( palette ) );
  const visiblePalettes = showFunctionalColors ? functionalColors : brandColors;

  const onPaletteChange = nextPalette => {

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

    } else {

      setAttributes( {
        palette: nextPalette
      } );

    }
  }

  return (
    <ControlsGroup>
      <ColorPalettePicker
        label={ 'Color Palette' }
        myPalettes={ visiblePalettes }
        onChange={ onPaletteChange }
        favorite={ paletteVariation === 1 && useSourceColorAsReference }
        selected={ palette }
        { ...props } />
    </ControlsGroup>
  )
}

export default PalettePicker;
