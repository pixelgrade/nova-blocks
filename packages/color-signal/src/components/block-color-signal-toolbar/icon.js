// Three vertical bars, like a signal-strength indicator. The block toolbar
// button uses this as its icon-as-state: bars fill left-to-right according to
// the block's current `colorSignal` level (0-3), so the button itself is the
// readout — no separate label is needed to know the current state at a glance.
//
// The `scope` prop distinguishes the two toolbar controls:
// - 'block' (default): the plain bars, unchanged.
// - 'content': the SAME bars, scaled down, inside an inset rounded-rectangle
//   stroke frame — reading as "the signal inside the block's content area".
const VIEWBOX_SIZE = 24;

const BAR_GEOMETRY = {
  block: {
    heights: [ 5, 9, 13 ],
    width: 3,
    gap: 3,
    baselineY: 19,
  },
  content: {
    // Same three-bar shape at roughly 2/3 scale, sitting inside the frame.
    heights: [ 4, 6.5, 9 ],
    width: 2,
    gap: 2,
    baselineY: 17,
  },
};

// Inset frame for the 'content' scope: stroke-only rounded rectangle.
const CONTENT_FRAME = {
  x: 3.5,
  y: 4,
  width: 17,   // x: 3.5 .. 20.5
  height: 16,  // y: 4 .. 20
  rx: 2.5,
  strokeWidth: 1.5,
};

const ColorSignalToolbarIcon = ( { level = 0, scope = 'block' } ) => {

  const { heights, width, gap, baselineY } = BAR_GEOMETRY[ scope ] || BAR_GEOMETRY.block;

  const totalWidth = heights.length * width + ( heights.length - 1 ) * gap;
  const startX = ( VIEWBOX_SIZE - totalWidth ) / 2;

  return (
    <svg
      width="24"
      height="24"
      viewBox={ `0 0 ${ VIEWBOX_SIZE } ${ VIEWBOX_SIZE }` }
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      { scope === 'content' && (
        <rect
          x={ CONTENT_FRAME.x }
          y={ CONTENT_FRAME.y }
          width={ CONTENT_FRAME.width }
          height={ CONTENT_FRAME.height }
          rx={ CONTENT_FRAME.rx }
          fill="none"
          stroke="currentColor"
          strokeWidth={ CONTENT_FRAME.strokeWidth }
        />
      ) }
      { heights.map( ( height, index ) => {
        const isFilled = index < level;
        const x = startX + index * ( width + gap );
        const y = baselineY - height;

        return (
          <rect
            key={ index }
            x={ x }
            y={ y }
            width={ width }
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
