import { __, sprintf } from "@wordpress/i18n";
import { BlockControls } from "@wordpress/block-editor";
import { ToolbarDropdownMenu } from "@wordpress/components";

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

  return (
    <BlockControls group="other">
      <ToolbarDropdownMenu
        icon={ <ColorSignalToolbarIcon level={ colorSignal } /> }
        label={ sprintf(
          /* translators: %s: current Color Signal level, e.g. "Low" */
          __( 'Color Signal: %s', '__plugin_txtd' ),
          currentLabel
        ) }
        controls={ levels.map( ( level ) => ( {
          title: level.label,
          icon: <ColorSignalToolbarIcon level={ level.value } />,
          role: 'menuitemradio',
          isActive: level.value === colorSignal,
          onClick: () => {
            updateBlock( getSignalChangeAttributes( attributes, clientId, level.value ), true, true );
          },
        } ) ) }
      />
    </BlockControls>
  );
} );

export default BlockColorSignalToolbar;
