// Three vertical bars, like a signal-strength indicator. The block toolbar
// button uses this as its icon-as-state: bars fill left-to-right according to
// the block's current `colorSignal` level (0-3), so the button itself is the
// readout — no separate label is needed to know the current state at a glance.
//
// The `scope` prop distinguishes the two toolbar controls:
// - 'block' (default): the plain bars, unchanged.
// - 'content': the SAME bars, scaled down, inside corner brackets — a
//   selection-marquee reading of "the region inside the block". Chosen over a
//   full rounded-rect frame (which can misread as an input field) in the
//   icon exploration: .ai/playground/color-signal-icon-ideas.html, variant A.
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

// Corner brackets for the 'content' scope: four L-shaped marks at the corners
// of the (inset) region box, like a crop/selection marquee.
const CONTENT_BRACKETS = {
  left: 4,
  right: 20,
  top: 4,
  bottom: 20,
  length: 4.2,
  strokeWidth: 1.5,
};

const contentBracketsPath = () => {
  const { left: L, right: R, top: T, bottom: B, length: len } = CONTENT_BRACKETS;
  return [
    `M${ L + len } ${ T } H${ L } V${ T + len }`,
    `M${ R - len } ${ T } H${ R } V${ T + len }`,
    `M${ L } ${ B - len } V${ B } H${ L + len }`,
    `M${ R } ${ B - len } V${ B } H${ R - len }`,
  ].join( ' ' );
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
        <path
          d={ contentBracketsPath() }
          fill="none"
          stroke="currentColor"
          strokeWidth={ CONTENT_BRACKETS.strokeWidth }
          strokeLinecap="round"
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
