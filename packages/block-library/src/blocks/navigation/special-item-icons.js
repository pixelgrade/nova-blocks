/**
 * Editor-preview icons for the header navigation special items. They mirror the
 * Anima frontend icons (assets/images/icon-search.svg, icon-dark-mode.svg, and
 * the circular cart badge) and inherit the surrounding text colour via
 * currentColor, so the editor preview matches the rendered menu.
 */

export const SearchIcon = (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M13.8462 8.46154C13.8462 6.97917 13.3193 5.71114 12.2656 4.65745C11.2119 3.60377 9.94391 3.07692 8.46154 3.07692C6.97917 3.07692 5.71114 3.60377 4.65745 4.65745C3.60377 5.71114 3.07692 6.97917 3.07692 8.46154C3.07692 9.94391 3.60377 11.2119 4.65745 12.2656C5.71114 13.3193 6.97917 13.8462 8.46154 13.8462C9.94391 13.8462 11.2119 13.3193 12.2656 12.2656C13.3193 11.2119 13.8462 9.94391 13.8462 8.46154ZM20 18.4615C20 18.8782 19.8478 19.2388 19.5433 19.5433C19.2388 19.8478 18.8782 20 18.4615 20C18.0288 20 17.6683 19.8478 17.3798 19.5433L13.2572 15.4327C11.8229 16.4263 10.2244 16.9231 8.46154 16.9231C7.31571 16.9231 6.21995 16.7007 5.17428 16.256C4.12861 15.8113 3.22716 15.2103 2.46995 14.4531C1.71274 13.6959 1.11178 12.7945 0.667067 11.7488C0.222356 10.7031 0 9.60737 0 8.46154C0 7.31571 0.222356 6.21995 0.667067 5.17428C1.11178 4.12861 1.71274 3.22716 2.46995 2.46995C3.22716 1.71274 4.12861 1.11178 5.17428 0.667067C6.21995 0.222356 7.31571 0 8.46154 0C9.60737 0 10.7031 0.222356 11.7488 0.667067C12.7945 1.11178 13.6959 1.71274 14.4531 2.46995C15.2103 3.22716 15.8113 4.12861 16.256 5.17428C16.7007 6.21995 16.9231 7.31571 16.9231 8.46154C16.9231 10.2244 16.4263 11.8229 15.4327 13.2572L19.5553 17.3798C19.8518 17.6763 20 18.0369 20 18.4615Z" />
  </svg>
);

// A circle split light/dark, matching icon-dark-mode.svg.
export const DarkModeIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2 a10 10 0 0 1 0 20 Z" fill="currentColor" />
  </svg>
);

// Anima renders the cart as a circular badge (the count sits inside on the
// frontend); the circle is the recognisable shape in the editor preview.
export const CartIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);
