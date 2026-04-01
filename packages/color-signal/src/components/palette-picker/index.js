import { ColorPicker, ControlsGroup, useSettings, withVisibility } from "@novablocks/block-editor";

import { isFunctionalPalette } from "@novablocks/utils";

import {
  getParentVariation,
} from "../../editor/utils";

import {
  addSiteVariationOffset,
  getSignalRelativeToVariation,
  getSourceIndexFromPaletteId,
} from "../../utils";

const PalettePicker = ( props ) => {

  const {
    attributes,
    updateBlock,
    clientId,
    showFunctionalColors,
    stickySourceColor
  } = props;

  const novablocksSettings = useSettings();

  const palettes = Array.isArray( novablocksSettings?.palettes ) ? novablocksSettings.palettes : [];
  const { palette, paletteVariation, useSourceColorAsReference } = attributes;

  const functionalColors = palettes.filter( palette => isFunctionalPalette( palette ) );
  const brandColors = palettes.filter( palette => ! isFunctionalPalette( palette ) );
  const visiblePalettes = showFunctionalColors ? functionalColors : brandColors;

  const onPaletteChange = nextPalette => {

    if ( nextPalette === palette && stickySourceColor ) {
      const referenceVariation = getParentVariation( clientId );
      const sourceIndex = getSourceIndexFromPaletteId( palette );
      const nextSourceColorAsReference = ! useSourceColorAsReference;
      const absoluteVariation = sourceIndex + 1;
      const nextVariation = nextSourceColorAsReference ? 1 : absoluteVariation;
      const nextSignal = getSignalRelativeToVariation( addSiteVariationOffset( absoluteVariation ), referenceVariation, palette );

      updateBlock( {
        useSourceColorAsReference: nextSourceColorAsReference,
        paletteVariation: nextVariation,
        colorSignal: nextSignal,
      } );

    } else {
      updateBlock( {
        palette: nextPalette
      } );

    }
  };

  const options = visiblePalettes.map( palette => {

    return {
      value: `${ palette.id }`,
      data: palette,
      colors: palette.source.slice(0, 1)
    }
  } );

  return (
    <ControlsGroup key={'block_color_signal_palette_picker'}>
      <ColorPicker
        { ...props }
        label={ 'Color Palette' }
        options={ options }
        onChange={ value => {
          const palette = visiblePalettes.find( palette => `${ palette.id }` === value );
          if ( palette ) {
            onPaletteChange( `${ palette.id }` );
          }
        } }
        favorite={ paletteVariation === 1 && useSourceColorAsReference }
        selected={ `${ palette }` }
      />
    </ControlsGroup>
  )
};

export default withVisibility( 'palette-picker' )( PalettePicker );
