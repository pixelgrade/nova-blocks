import {
  createSlotFill,
  __experimentalUseSlot as useSlot
} from '@wordpress/components';

import { useBlockEditContext } from "@wordpress/block-editor";

import { ControlsGroup } from "@novablocks/block-editor";

const SLOT_NAME = 'ColorSignalCustomizeControls';

const { Fill, Slot } = createSlotFill( SLOT_NAME );

const ColorSignalCustomizeSlot = ( {
  bubblesVirtually = true,
  ...props
} ) => {
  const slot = useSlot( SLOT_NAME );
  const hasFills = Boolean( slot.fills && slot.fills.length );

  if ( ! hasFills ) {
    return null;
  }

  return (
    <ControlsGroup>
      <Slot { ...props } bubblesVirtually={ bubblesVirtually } />
    </ControlsGroup>
  );
}

const ColorSignalCustomizeFill = ( { children } ) => {
  const { isSelected } = useBlockEditContext();

  if ( ! isSelected ) {
    return null;
  }

  return (
    <Fill>{ children }</Fill>
  );
}

const ColorSignalCustomizeControls = ColorSignalCustomizeFill;
ColorSignalCustomizeControls.Slot = ColorSignalCustomizeSlot;

export default ColorSignalCustomizeControls;
