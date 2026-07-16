/**
 * RowSurfaceThumb — the visual tile for a Row Surface preset.
 *
 * Painted from the LIVE palettes payload at render time (bg / fg1 / accent of
 * the tile's absolute target variation), echoing the curation playground's
 * row mock: eyebrow bar, "Aa" headline, accent rule. Reads
 * `window.styleManager.colorsConfig` through the same `getPaletteConfig`
 * helper every other swatch UI uses, so a changed palette repaints the tile
 * on the next render with a fresh payload.
 */
import { getPaletteConfig } from '../utils';

const RowSurfaceThumb = ( { palette, variation } ) => {
  const config = getPaletteConfig( palette );
  const colors = config?.variations?.[ variation - 1 ] || {};
  const bg = colors.bg || '#ffffff';
  const fg = colors.fg1 || colors.fg || '#000000';
  const accent = colors.accent || fg;

  return (
    <span
      className="nb-preset-thumb nb-row-surface-thumb"
      style={ { backgroundColor: bg, color: fg } }
      aria-hidden="true"
    >
      <span className="nb-row-surface-thumb__eyebrow" style={ { backgroundColor: accent } } />
      <span className="nb-row-surface-thumb__headline">Aa</span>
      <span className="nb-row-surface-thumb__rule" style={ { backgroundColor: accent } } />
    </span>
  );
};

export default RowSurfaceThumb;
