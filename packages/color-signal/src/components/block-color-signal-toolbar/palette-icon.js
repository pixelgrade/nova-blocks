// Icon-as-state for the toolbar palette cycler: a dot filled with the
// CURRENT palette's actual source color (resolved via
// getPaletteDisplayColor), so the button itself shows which palette the
// block is on.
//
// The subtle outline ring (currentColor at low opacity) is mandatory: without
// it, a palette whose source color is white/near-white would render as an
// invisible blob on the white toolbar background.
const PaletteToolbarIcon = ( { color = null } ) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="12"
        cy="12"
        r="6.5"
        // Unresolvable palette color: neutral currentColor fill, dimmed —
        // mirrors the unfilled-bar treatment of the signal icons.
        fill={ color || 'currentColor' }
        fillOpacity={ color ? 1 : 0.3 }
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
    </svg>
  );
};

export default PaletteToolbarIcon;
