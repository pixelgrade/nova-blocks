/**
 * The layout-style choice as visual tiles — compare, don't recall.
 *
 * These tiles ARE the composition selector (the old Layout Style radio is
 * gone; Settings doesn't repeat it). Thumbnails re-render from the current
 * attributes so each tile previews what switching would roughly do.
 */
import { __ } from '@wordpress/i18n';

import { PlusBadge, withVisibility } from '../../../../components';
import {
  ClassicThumb,
  MasonryThumb,
  CarouselThumb,
  ParametricThumb,
} from '../../../../components/preset-cards/thumbnails';

export const STYLE_LABELS = {
  classic: __( 'Classic Grid', '__plugin_txtd' ),
  masonry: __( 'Masonry', '__plugin_txtd' ),
  carousel: __( 'Carousel', '__plugin_txtd' ),
  parametric: __( 'Parametric Grid', '__plugin_txtd' ),
};

const getStyleTileAttributes = ( layoutStyle ) => {
  if ( 'parametric' === layoutStyle ) {
    return {
      layoutStyle,
      pile3dEffect: false,
    };
  }

  return { layoutStyle };
};

const StyleTiles = ( { attributes, setAttributes } ) => {
  const { layoutStyle, columns, postsToShow } = attributes;

  const tiles = [
    { value: 'classic', thumbnail: <ClassicThumb columns={ columns } count={ postsToShow } /> },
    { value: 'masonry', thumbnail: <MasonryThumb columns={ columns } /> },
    { value: 'carousel', thumbnail: <CarouselThumb visible={ columns } variable={ 'variable' === attributes.carouselLayout } /> },
    { value: 'parametric', thumbnail: <ParametricThumb preset={ attributes } /> },
  ];

  return (
    <div className="nb-style-tiles" role="group" aria-label={ __( 'Composition', '__plugin_txtd' ) }>
      { tiles.map( ( tile ) => (
        <button
          type="button"
          key={ tile.value }
          className={ 'nb-style-tile' + ( layoutStyle === tile.value ? ' is-selected' : '' ) }
          aria-pressed={ layoutStyle === tile.value }
          onClick={ () => setAttributes( getStyleTileAttributes( tile.value ) ) }
        >
          { 'parametric' === tile.value && <PlusBadge gateId={ 'parametric-layout' } /> }
          { tile.thumbnail }
          <span className="nb-style-tile__name">{ STYLE_LABELS[ tile.value ] }</span>
        </button>
      ) ) }
    </div>
  );
};

// Keeps the visibility contract the old Layout Style radio carried.
export default withVisibility( 'collection-layout-style' )( StyleTiles );
