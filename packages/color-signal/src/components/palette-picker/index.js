import { ColorPicker, ControlsGroup, useSettings, withVisibility } from "@novablocks/block-editor";

import {
  getPaletteChangeAttributes,
} from "../../editor/utils";

import { getVisiblePalettes } from "./palette-options";

const PalettePicker = ( props ) => {

  const {
    attributes,
    updateBlock,
    clientId,
    paletteSelectionEnabled,
    showFunctionalColors,
    stickySourceColor
  } = props;

  const novablocksSettings = useSettings();

  if ( paletteSelectionEnabled === false ) {
    return null;
  }

  const { palette, paletteVariation, useSourceColorAsReference } = attributes;

  const visiblePalettes = getVisiblePalettes( novablocksSettings?.palettes, showFunctionalColors );

  const onPaletteChange = nextPalette => {
    updateBlock( getPaletteChangeAttributes( attributes, clientId, nextPalette, stickySourceColor ) );
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
