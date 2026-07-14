/**
 * The layout-style choice as visual tiles — compare, don't recall.
 *
 * These tiles ARE the composition selector (the old Layout Style radio is
 * gone; Settings doesn't repeat it). Thumbnails re-render from the current
 * attributes so each tile previews what switching would roughly do.
 */
import { __ } from '@wordpress/i18n';

import { PlusBadge, withVisibility } from '../../../../components';
import { useSettings } from '../../../../hooks';
import {
  ClassicThumb,
  CollageThumb,
  MasonryThumb,
  CarouselThumb,
  ParametricThumb,
} from '../../../../components/preset-cards/thumbnails';
import {
  getLayoutRecipeSelection,
  getSelectedCompositionId,
  normalizeLayoutRecipes,
} from './layout-recipes';

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
      layoutRecipe: '',
      headerIntegration: 'standard',
      pile3dEffect: false,
    };
  }

  return { layoutStyle, layoutRecipe: '', headerIntegration: 'standard' };
};

const getRecipeThumbnail = ( recipe, attributes ) => {
  switch ( recipe.thumbnail ) {
    case 'collage':
      return <CollageThumb />;
    case 'classic':
      return <ClassicThumb columns={ attributes.columns } count={ attributes.postsToShow } />;
    case 'carousel':
      return <CarouselThumb visible={ attributes.columns } variable={ 'variable' === attributes.carouselLayout } />;
    case 'parametric':
      return <ParametricThumb preset={ { ...attributes, ...recipe.defaults } } />;
    case 'masonry':
    default:
      return <MasonryThumb columns={ attributes.columns } />;
  }
};

const StyleTiles = ( { attributes, setAttributes } ) => {
  const settings = useSettings();
  const recipes = normalizeLayoutRecipes( settings?.collectionLayoutRecipes );
  const { columns, postsToShow } = attributes;
  const selectedCompositionId = getSelectedCompositionId( attributes, recipes );

  const builtInTiles = [
    { value: 'classic', thumbnail: <ClassicThumb columns={ columns } count={ postsToShow } /> },
    { value: 'masonry', thumbnail: <MasonryThumb columns={ columns } /> },
    { value: 'carousel', thumbnail: <CarouselThumb visible={ columns } variable={ 'variable' === attributes.carouselLayout } /> },
    { value: 'parametric', thumbnail: <ParametricThumb preset={ attributes } /> },
  ];
  const recipeTiles = recipes.map( recipe => ( {
    value: recipe.id,
    label: recipe.label,
    gateId: recipe.gateId,
    recipe,
    thumbnail: getRecipeThumbnail( recipe, attributes ),
  } ) );
  const tiles = [ ...builtInTiles, ...recipeTiles ];

  return (
    <div className="nb-style-tiles" role="group" aria-label={ __( 'Composition', '__plugin_txtd' ) }>
      { tiles.map( ( tile ) => (
        <button
          type="button"
          key={ tile.value }
          className={ 'nb-style-tile' + ( selectedCompositionId === tile.value ? ' is-selected' : '' ) }
          aria-pressed={ selectedCompositionId === tile.value }
          onClick={ () => setAttributes( tile.recipe
            ? getLayoutRecipeSelection( tile.recipe )
            : getStyleTileAttributes( tile.value ) ) }
        >
          { ( 'parametric' === tile.value || tile.gateId ) && (
            <PlusBadge gateId={ tile.gateId || 'parametric-layout' } />
          ) }
          { tile.thumbnail }
          <span className="nb-style-tile__name">{ tile.label || STYLE_LABELS[ tile.value ] }</span>
        </button>
      ) ) }
    </div>
  );
};

// Keeps the visibility contract the old Layout Style radio carried.
export default withVisibility( 'collection-layout-style' )( StyleTiles );
