/**
 * CardStyleThumb — the visual tile for a Card Style preset.
 *
 * Schematic media + content composition per stacking, echoing the curation
 * playground's card mock; painted from the LIVE palettes payload at render
 * (bg / fg1 / accent of the tile's absolute target variation). Treatment
 * hints: unitone wash for soft-overlay, multiply tint for duotone-brand,
 * blob radius for shape-mask. Structure-only SCSS lives in the supernova
 * editor styles.
 */
import { getPaletteConfig } from '@novablocks/color-signal';

const CardStyleThumb = ( { palette, variation, cardLayout, treatment } ) => {
  const config = getPaletteConfig( palette );
  const colors = config?.variations?.[ variation - 1 ] || {};
  const bg = colors.bg || '#ffffff';
  const fg = colors.fg1 || colors.fg || '#000000';
  const accent = colors.accent || fg;

  const media = (
    <span
      key={ 'media' }
      className={ 'nb-card-style-thumb__media' + ( 'shape-mask' === treatment ? ' is-shape-mask' : '' ) }
      style={ { backgroundImage: `linear-gradient(135deg, ${ accent } 0%, ${ bg } 140%)` } }
    >
      { 'soft-overlay' === treatment && (
        <span className="nb-card-style-thumb__overlay" style={ { backgroundColor: bg, opacity: 0.35 } } />
      ) }
      { 'duotone-brand' === treatment && (
        <span className="nb-card-style-thumb__overlay" style={ { backgroundColor: accent, opacity: 0.5, mixBlendMode: 'multiply' } } />
      ) }
    </span>
  );

  const content = (
    <span key={ 'content' } className="nb-card-style-thumb__content" style={ { backgroundColor: bg, color: fg } }>
      <span className="nb-card-style-thumb__title" style={ { backgroundColor: fg } } />
      <span className="nb-card-style-thumb__line" style={ { backgroundColor: fg } } />
      <span className="nb-card-style-thumb__cta" style={ { backgroundColor: accent } } />
    </span>
  );

  return (
    <span
      className={ `nb-preset-thumb nb-card-style-thumb nb-card-style-thumb--${ cardLayout }` }
      aria-hidden="true"
    >
      { 'horizontal-reverse' === cardLayout ? [ content, media ] : [ media, content ] }
    </span>
  );
};

export default CardStyleThumb;
