/**
 * Which compositions get the Cards depth room, and in what shape.
 *
 * Stacked Classic Grid and Masonry get the full room — 3D Grid + Depth
 * Parallax. Parametric gets Depth Parallax only: the Anima drift runtime is
 * structure-agnostic (it translates each `.nb-collection__layout-item`
 * wherever it sits), but the 3D odd/even pattern relies on layout items
 * being flat siblings, which the parametric engine's per-area nesting
 * breaks. Each shape carries its own Try & Play gate id so the trial chrome
 * copy matches what is actually on offer.
 */
export const getCardsDepthSupport = ( { layoutStyle, cardLayout } = {} ) => {
  const isStackedGrid = [ 'classic', 'masonry' ].includes( layoutStyle )
    && 'stacked' === cardLayout;
  const isParametric = 'parametric' === layoutStyle;

  return {
    showDepthControls: isStackedGrid || isParametric,
    show3dToggle: isStackedGrid,
    gateId: isParametric ? 'parametric-depth' : 'stacked-depth',
  };
};
