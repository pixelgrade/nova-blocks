import { __, sprintf } from "@wordpress/i18n";
import { BlockControls } from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";

import { useSupports } from "@novablocks/block-editor";

import { getSignalChangeAttributes } from "../../editor/utils";
import withColorSignalProps from "../with-color-signal-props";
import { getColorSignalLevels, COLOR_SIGNAL_LEVEL_LABELS } from "./get-color-signal-levels";
import ColorSignalToolbarIcon from "./icon";

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

  const { attributes, clientId, updateBlock, name } = props;
  const { colorSignal } = attributes;

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
    </BlockControls>
  );
} );

export default BlockColorSignalToolbar;
