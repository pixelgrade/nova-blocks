import { __, sprintf } from "@wordpress/i18n";
import { BlockControls } from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";

import { useSettings, useSupports } from "@novablocks/block-editor";

import { getPaletteChangeAttributes, getSignalChangeAttributes } from "../../editor/utils";
import withColorSignalProps from "../with-color-signal-props";
import {
  getNextPalette,
  getPaletteDisplayColor,
  getPaletteLabel,
  getVisiblePalettes,
} from "../palette-picker/palette-options";
import {
  getColorSignalLevels,
  getNextColorSignalLevel,
  COLOR_SIGNAL_LEVEL_LABELS,
} from "./get-color-signal-levels";
import ColorSignalToolbarIcon from "./icon";
import PaletteToolbarIcon from "./palette-icon";

/**
 * Single-click block toolbar control for Color Signal. The button icon reflects
 * the current state (the filled bar count), and each click advances one valid
 * level, wrapping inside the range supported by the selected block.
 *
 * Every click calls the same attribute-computation helper the sidebar stepper
 * uses (`getSignalChangeAttributes`, via `updateBlock` from
 * `withColorSignalProps`), so `paletteVariation` stays in sync identically.
 */
const BlockColorSignalToolbar = withColorSignalProps( ( props ) => {

  const { attributes, clientId, updateBlock, name, showFunctionalColors, stickySourceColor } = props;
  const { colorSignal, palette } = attributes;

  const novablocksSettings = useSettings();

  const supports = useSupports( name );
  const colorSignalSupport = supports?.novaBlocks?.colorSignal;

  const levels = getColorSignalLevels( colorSignalSupport );

  // Nothing to cycle between when min === max, so do not show a dead control.
  if ( levels.length < 2 ) {
    return null;
  }

  const currentLabel = COLOR_SIGNAL_LEVEL_LABELS[ colorSignal ] ?? COLOR_SIGNAL_LEVEL_LABELS[ 0 ];
  const nextLevel = getNextColorSignalLevel( levels, colorSignal );
  const visiblePalettes = getVisiblePalettes( novablocksSettings?.palettes, showFunctionalColors );
  const currentPalette = visiblePalettes.find( paletteConfig => `${ paletteConfig.id }` === `${ palette }` )
    || ( Array.isArray( novablocksSettings?.palettes )
      ? novablocksSettings.palettes.find( paletteConfig => `${ paletteConfig.id }` === `${ palette }` )
      : undefined );
  const nextPalette = getNextPalette( visiblePalettes, palette );

  return (
    <BlockControls group="other">
      <ToolbarButton
        icon={ <ColorSignalToolbarIcon level={ colorSignal } /> }
        label={ sprintf(
          /* translators: 1: current Color Signal level; 2: the level a click switches to */
          __( 'Color Signal: %1$s — click for %2$s', '__plugin_txtd' ),
          currentLabel,
          nextLevel.label
        ) }
        onClick={ () => {
          updateBlock( getSignalChangeAttributes( attributes, clientId, nextLevel.value ), true, true );
        } }
      />
      { visiblePalettes.length >= 2 && nextPalette && (
        <ToolbarButton
          icon={ <PaletteToolbarIcon color={ getPaletteDisplayColor( currentPalette ) } /> }
          label={ sprintf(
            /* translators: 1: current Color Palette label; 2: the palette a click switches to */
            __( 'Color Palette: %1$s — click for %2$s', '__plugin_txtd' ),
            getPaletteLabel( currentPalette ) || getPaletteLabel( { id: palette } ),
            getPaletteLabel( nextPalette )
          ) }
          onClick={ () => {
            updateBlock( getPaletteChangeAttributes( attributes, clientId, `${ nextPalette.id }`, stickySourceColor ) );
          } }
        />
      ) }
    </BlockControls>
  );
} );

export default BlockColorSignalToolbar;
