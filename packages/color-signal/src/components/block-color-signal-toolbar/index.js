import { __, sprintf } from "@wordpress/i18n";
import { BlockControls } from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";

import { useSettings, useSupports } from "@novablocks/block-editor";

import { getContentSignalChangeAttributes, getPaletteChangeAttributes, getSignalChangeAttributes } from "../../editor/utils";
import withColorSignalProps from "../with-color-signal-props";
import {
  getNextPalette,
  getPaletteDisplayColor,
  getPaletteLabel,
  getVisiblePalettes,
} from "../palette-picker/palette-options";
import { getColorSignalLevels, COLOR_SIGNAL_LEVEL_LABELS } from "./get-color-signal-levels";
import ColorSignalToolbarIcon from "./icon";
import PaletteToolbarIcon from "./palette-icon";

/**
 * Block toolbar control for Color Signal. Follows core's alignment-button
 * pattern: the toolbar button's icon reflects the current state (here, the
 * filled bar count), and clicking it opens a dropdown listing only the valid
 * levels for this block — never a wrap-around cycler.
 *
 * Selecting a level calls the exact same attribute-computation helper the
 * sidebar stepper uses (`getSignalChangeAttributes`, via `updateBlock` from
 * `withColorSignalProps`), so `paletteVariation` stays in sync identically to
 * the sidebar control.
 */
const BlockColorSignalToolbar = withColorSignalProps( ( props ) => {

  const { attributes, clientId, updateBlock, name, paletteSelectionEnabled, showFunctionalColors, stickySourceColor } = props;
  const { colorSignal, contentColorSignal, palette } = attributes;

  const novablocksSettings = useSettings();

  const supports = useSupports( name );
  const colorSignalSupport = supports?.novaBlocks?.colorSignal;

  const levels = getColorSignalLevels( colorSignalSupport );

  // Nothing to choose between (min === max) — a dropdown with a single,
  // permanently-active option would be a dead end, so don't show one.
  if ( levels.length < 2 ) {
    return null;
  }

  const currentLabel = COLOR_SIGNAL_LEVEL_LABELS[ colorSignal ] ?? COLOR_SIGNAL_LEVEL_LABELS[ 0 ];

  // EXPERIMENT (feel-test vs the dropdown variant on design/toolbar-signal):
  // plain click advances the signal one level, wrapping within the block's
  // valid range. Safe-by-construction — every level is a guaranteed-good
  // state — but trades away the visible option map and adds a High→None
  // wrap jump. Keep whichever variant wins the hands-on comparison.
  const currentIndex = levels.findIndex( ( level ) => level.value === colorSignal );
  const nextLevel = levels[ ( currentIndex + 1 ) % levels.length ] || levels[ 0 ];

  // EXPERIMENT: a Content Area Color Signal cycler alongside the block one,
  // for blocks that opt into a distinct content-area signal
  // (`supports.novaBlocks.colorSignal.contentColorSignal === true` — this is
  // deliberately NOT enabled by the boolean `true` supports shorthand, exactly
  // like the sidebar's ContentColorSignalControl gate is written today; the
  // toolbar pair must show/hide together with the sidebar pair).
  //
  // Levels: the content signal has no min/max sub-flags today —
  // `minColorSignal`/`maxColorSignal` clamp the BLOCK signal only — so we pass
  // the boolean shorthand to getColorSignalLevels() to get the full unclamped
  // None..High range. If content-specific clamps are ever introduced
  // (e.g. `minContentColorSignal`), thread them through here.
  const showContentSignal = colorSignalSupport?.contentColorSignal === true;
  const contentLevels = getColorSignalLevels( true );
  const currentContentLabel = COLOR_SIGNAL_LEVEL_LABELS[ contentColorSignal ] ?? COLOR_SIGNAL_LEVEL_LABELS[ 0 ];
  const currentContentIndex = contentLevels.findIndex( ( level ) => level.value === contentColorSignal );
  const nextContentLevel = contentLevels[ ( currentContentIndex + 1 ) % contentLevels.length ] || contentLevels[ 0 ];

  // EXPERIMENT: a Color Palette cycler completing the color trio. It steps
  // through the exact palette option set the sidebar PalettePicker shows for
  // this block (same getVisiblePalettes helper, same showFunctionalColors
  // memory state from withColorSignalProps), and applies the exact same
  // change logic (getPaletteChangeAttributes with default updateBlock flags).
  //
  // Note: the cycler always advances to a DIFFERENT palette, so
  // getPaletteChangeAttributes' same-palette branch (the stickySourceColor
  // "shifted"/source-as-reference toggle) is unreachable from here by
  // construction — that behavior remains sidebar-only, where re-clicking the
  // selected swatch triggers it.
  const visiblePalettes = getVisiblePalettes( novablocksSettings?.palettes, showFunctionalColors );
  const showPaletteCycler = paletteSelectionEnabled !== false && visiblePalettes.length >= 2;
  const currentPalette = visiblePalettes.find( ( paletteConfig ) => `${ paletteConfig.id }` === `${ palette }` )
    || ( Array.isArray( novablocksSettings?.palettes )
      ? novablocksSettings.palettes.find( ( paletteConfig ) => `${ paletteConfig.id }` === `${ palette }` )
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
      { showContentSignal && (
        <ToolbarButton
          icon={ <ColorSignalToolbarIcon level={ contentColorSignal } scope="content" /> }
          label={ sprintf(
            /* translators: 1: current Content Area Color Signal level; 2: the level a click switches to */
            __( 'Content Area Color Signal: %1$s — click for %2$s', '__plugin_txtd' ),
            currentContentLabel,
            nextContentLevel.label
          ) }
          onClick={ () => {
            // Same helper as the sidebar's ContentColorSignalControl, with the
            // same default updateBlock() flags — do not add the source-color
            // flags used by the block-level cycler above.
            updateBlock( getContentSignalChangeAttributes( attributes, clientId, nextContentLevel.value ) );
          } }
        />
      ) }
      { showPaletteCycler && nextPalette && (
        <ToolbarButton
          icon={ <PaletteToolbarIcon color={ getPaletteDisplayColor( currentPalette ) } /> }
          label={ sprintf(
            /* translators: 1: current Color Palette label; 2: the palette a click switches to */
            __( 'Color Palette: %1$s — click for %2$s', '__plugin_txtd' ),
            getPaletteLabel( currentPalette ) || getPaletteLabel( { id: palette } ),
            getPaletteLabel( nextPalette )
          ) }
          onClick={ () => {
            // Same helper + default updateBlock() flags as the sidebar's
            // PalettePicker onPaletteChange.
            updateBlock( getPaletteChangeAttributes( attributes, clientId, `${ nextPalette.id }`, stickySourceColor ) );
          } }
        />
      ) }
    </BlockControls>
  );
} );

export default BlockColorSignalToolbar;
