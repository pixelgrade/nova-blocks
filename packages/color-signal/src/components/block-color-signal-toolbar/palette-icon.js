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
