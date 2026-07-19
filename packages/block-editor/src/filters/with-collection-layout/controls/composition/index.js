/**
 * The Composition tab — choose the collection's layout in two moves:
 * a visual style tile, then a curated preset for that style.
 *
 * Free compositions' presets sit fully native; the parametric presets and
 * the depth presets are Try & Play boundaries (presentation only — the real
 * gates are intrinsic, server-side).
 */
import { __, sprintf } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

import { useSettings } from '../../../../hooks';
import {
  PresetCardsControl,
  SectionLink,
  TryAndPlay,
  TryAndPlayGroup,
} from '../../../../components';
import {
  ClassicThumb,
  MasonryThumb,
  CarouselThumb,
  ParametricThumb,
  DepthThumb,
} from '../../../../components/preset-cards/thumbnails';

import parametricPresets from '../presets';
import { getRandomAttributes } from '../../utils';
import StyleTiles, { STYLE_LABELS } from './style-tiles';
import {
  getActiveLayoutRecipe,
  layoutRecipeSupports,
  normalizeLayoutRecipes,
} from './layout-recipes';
import {
  CLASSIC_PRESETS,
  MASONRY_PRESETS,
  CAROUSEL_PRESETS,
  DEPTH_PRESETS,
  LAYOUT_PRESET_RESETS,
} from './free-presets';

const renderThumb = ( thumb = {} ) => {
  switch ( thumb.kind ) {
    case 'classic':
      return <ClassicThumb columns={ thumb.columns } count={ thumb.count } />;
    case 'masonry':
      return <MasonryThumb columns={ thumb.columns } />;
    case 'carousel':
      return <CarouselThumb visible={ thumb.visible } variable={ thumb.variable } />;
    case 'depth':
      return <DepthThumb />;
    default:
      return null;
  }
};

const withThumbnails = ( options ) =>
  options.map( ( option ) => ( { ...option, thumbnail: renderThumb( option.thumb ) } ) );

// The parametric list ships with "Lxx:" catalogue codes and one classic
// preset (Dumas) that now lives with the free classic presets.
const PARAMETRIC_PRESETS = parametricPresets
  .filter( ( option ) => 'parametric' === option?.preset?.layoutStyle )
  .map( ( option ) => ( {
    ...option,
    label: option.label.replace( /^L\d+:\s*/, '' ),
    thumbnail: <ParametricThumb preset={ option.preset } />,
  } ) );

const FREE_PRESETS = {
  classic: CLASSIC_PRESETS,
  masonry: MASONRY_PRESETS,
  carousel: CAROUSEL_PRESETS,
};

const CompositionTab = ( props ) => {
  const { attributes } = props;
  const { layoutStyle } = attributes;
  const settings = useSettings();
  const recipes = normalizeLayoutRecipes( settings?.collectionLayoutRecipes );
  const activeRecipe = getActiveLayoutRecipe( attributes, recipes );
  const supportsPile3d = layoutRecipeSupports( attributes, recipes, 'pile3d' );

  const freePresets = useMemo(
    () => ( activeRecipe ? null : FREE_PRESETS[ layoutStyle ]
      ? withThumbnails( FREE_PRESETS[ layoutStyle ] )
      : null ),
    [ activeRecipe, layoutStyle ]
  );
  const depthPresets = useMemo(
    () => ( supportsPile3d && DEPTH_PRESETS[ layoutStyle ]
      ? withThumbnails( DEPTH_PRESETS[ layoutStyle ] )
      : null ),
    [ layoutStyle, supportsPile3d ]
  );

  const styleLabel = activeRecipe?.label || STYLE_LABELS[ layoutStyle ] || layoutStyle;
  /* translators: %s: the selected composition (layout style) name. */
  const presetsLabel = sprintf( __( '%s presets', '__plugin_txtd' ), styleLabel );

  const depthGateId = 'parametric' === layoutStyle ? 'parametric-depth' : 'stacked-depth';

  return (
    <>
      <StyleTiles { ...props } />
      { 'parametric' !== layoutStyle && !! freePresets && (
        <PresetCardsControl
          label={ presetsLabel }
          options={ freePresets }
          resets={ LAYOUT_PRESET_RESETS }
          { ...props }
        />
      ) }
      { /* One boundary per tab: free controls sit above; the gated tail
           (parametric presets and/or depth presets) merges into a single
           Try & Play boundary while locked (ui-contract "merged groups"). */ }
      <TryAndPlayGroup gateIds={ [
        ...( 'parametric' === layoutStyle ? [ 'parametric-layout' ] : [] ),
        ...( depthPresets ? [ depthGateId ] : [] ),
      ] }>
        { 'parametric' === layoutStyle && (
          <TryAndPlay gateId={ 'parametric-layout' }>
            <PresetCardsControl
              label={ presetsLabel }
              options={ PARAMETRIC_PRESETS }
              randomize={ getRandomAttributes }
              resets={ LAYOUT_PRESET_RESETS }
              { ...props }
            />
          </TryAndPlay>
        ) }
        { /* Parametric's depth room is drift-only, with its own trial copy. */ }
        { !! depthPresets && (
          <TryAndPlay gateId={ depthGateId }>
            <PresetCardsControl
              label={ __( 'Depth presets', '__plugin_txtd' ) }
              options={ depthPresets }
              { ...props }
            />
          </TryAndPlay>
        ) }
      </TryAndPlayGroup>
      { !! depthPresets && (
        <SectionLink sectionId={ 'scrolling-effect' }>
          { __( 'Dial in the depth in Motion & Effects', '__plugin_txtd' ) }
        </SectionLink>
      ) }
    </>
  );
};

export default CompositionTab;
