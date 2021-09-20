import {
  createSlotFill,
  __experimentalUseSlot as useSlot
} from '@wordpress/components';

const slotName = 'ColorSignalCustomizeControls'

const {Fill, Slot: ColorSignalCustomizeControlsSlot } = createSlotFill( slotName );

function Slot( {children}) {
  const slot = useSlot( slotName );
  const hasFills = Boolean( slot.fills && slot.fills.length );

  if ( ! hasFills ) {
    return children;
  }

  return <ColorSignalCustomizeControlsSlot bubblesVirtually />
}

const ColorSignalCustomizeControls = Fill;
ColorSignalCustomizeControls.Slot = Slot;

export default ColorSignalCustomizeControls;
