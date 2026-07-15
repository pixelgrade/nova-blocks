// Three vertical bars, like a signal-strength indicator. The block toolbar
// button uses this as its icon-as-state: bars fill left-to-right according to
// the block's current `colorSignal` level (0-3), so the button itself is the
// readout — no separate label is needed to know the current state at a glance.
const BAR_HEIGHTS = [ 5, 9, 13 ];
const BAR_WIDTH = 3;
const BAR_GAP = 3;
const VIEWBOX_SIZE = 24;
const BASELINE_Y = 19;

const TOTAL_WIDTH = BAR_HEIGHTS.length * BAR_WIDTH + ( BAR_HEIGHTS.length - 1 ) * BAR_GAP;
const START_X = ( VIEWBOX_SIZE - TOTAL_WIDTH ) / 2;

const ColorSignalToolbarIcon = ( { level = 0 } ) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox={ `0 0 ${ VIEWBOX_SIZE } ${ VIEWBOX_SIZE }` }
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      { BAR_HEIGHTS.map( ( height, index ) => {
        const isFilled = index < level;
        const x = START_X + index * ( BAR_WIDTH + BAR_GAP );
        const y = BASELINE_Y - height;

        return (
          <rect
            key={ index }
            x={ x }
            y={ y }
            width={ BAR_WIDTH }
            height={ height }
            fill="currentColor"
            opacity={ isFilled ? 1 : 0.3 }
          />
        );
      } ) }
    </svg>
  );
};

export default ColorSignalToolbarIcon;
