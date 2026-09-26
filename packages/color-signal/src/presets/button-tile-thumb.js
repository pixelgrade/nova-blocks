/**
 * ButtonTileThumb — the visual tile for a Button role preset.
 *
 * Painted from the LIVE palettes payload, like RowSurfaceThumb: a pill on
 * the palette's plain surface. `kind: 'source'` (Action) paints the palette
 * source variation with that variation's own foreground. `kind: 'default'` paints the
 * untouched Button as Anima renders it on a plain surface: the surface's
 * text color as the fill, the surface color as the label.
 */
import { getPaletteConfig } from '../utils';

const ButtonTileThumb = ( { kind, palette, variation } ) => {
  const config = getPaletteConfig( palette );
  const surface = config?.variations?.[ 0 ] || {};
  const surfaceBg = surface.bg || '#ffffff';
  const surfaceFg = surface.fg1 || '#000000';
  let fill = surfaceFg;
  let label = surfaceBg;

  if ( 'source' === kind ) {
    const colors = config?.variations?.[ variation - 1 ] || {};
    fill = colors.bg || surfaceFg;
    label = colors.fg1 || surfaceBg;
  }

  return (
    <span
      className="nb-preset-thumb nb-row-surface-thumb nb-button-tile-thumb"
      style={ { backgroundColor: surfaceBg, color: surfaceFg } }
      aria-hidden="true"
    >
      <span className="nb-button-tile-thumb__pill" style={ { backgroundColor: fill, color: label } }>Aa</span>
    </span>
  );
};

export default ButtonTileThumb;
