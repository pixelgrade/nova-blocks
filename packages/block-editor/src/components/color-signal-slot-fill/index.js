import {
  createSlotFill,
  __experimentalUseSlot as useSlot
} from '@wordpress/components';

const slotName = 'NovaBlocksColorSignal'

const {Fill, Slot: NovaBlocksColorSignalSlot } = createSlotFill( slotName );

function Slot( {children}) {
  const slot = useSlot( slotName );
  const hasFills = Boolean( slot.fills && slot.fills.length );

  if ( ! hasFills ) {
    return children;
  }

  return <NovaBlocksColorSignalSlot bubblesVirtually />
}

const NovaBlocksColorSignal = Fill;
NovaBlocksColorSignal.Slot = Slot;

export default NovaBlocksColorSignal;
