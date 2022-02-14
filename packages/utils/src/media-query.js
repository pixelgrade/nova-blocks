const breakpoints = {
  desktop: 1366,
  lap: 1024,
  tablet: 768,
  mobile: 480,
};

export const below = ( breakpoint ) => {
  const width = breakpoints[breakpoint];
  return window.innerWidth < width;
};

export const above = ( breakpoint ) => {
  const width = breakpoints[breakpoint];
  return window.innerWidth >= width;
};
