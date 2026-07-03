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

import {
  PresetCardsControl,
  SectionLink,
  TryAndPlay,
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

  const freePresets = useMemo(
    () => ( FREE_PRESETS[ layoutStyle ] ? withThumbnails( FREE_PRESETS[ layoutStyle ] ) : null ),
    [ layoutStyle ]
  );
  const depthPresets = useMemo(
    () => ( DEPTH_PRESETS[ layoutStyle ] ? withThumbnails( DEPTH_PRESETS[ layoutStyle ] ) : null ),
    [ layoutStyle ]
  );

  const styleLabel = STYLE_LABELS[ layoutStyle ] || layoutStyle;
  /* translators: %s: the selected composition (layout style) name. */
  const presetsLabel = sprintf( __( '%s presets', '__plugin_txtd' ), styleLabel );

  return (
    <>
      <StyleTiles { ...props } />
      { 'parametric' === layoutStyle ? (
        <TryAndPlay gateId={ 'parametric-layout' }>
          <PresetCardsControl
            label={ presetsLabel }
            options={ PARAMETRIC_PRESETS }
            randomize={ getRandomAttributes }
            resets={ LAYOUT_PRESET_RESETS }
            { ...props }
          />
        </TryAndPlay>
      ) : (
        <PresetCardsControl
          label={ presetsLabel }
          options={ freePresets }
          resets={ LAYOUT_PRESET_RESETS }
          { ...props }
        />
      ) }
      { !! depthPresets && (
        <>
          <TryAndPlay gateId={ 'stacked-depth' }>
            <PresetCardsControl
              label={ __( 'Depth presets', '__plugin_txtd' ) }
              options={ depthPresets }
              { ...props }
            />
          </TryAndPlay>
          <SectionLink sectionId={ 'scrolling-effect' }>
            { __( 'Dial in the depth in Motion & Effects', '__plugin_txtd' ) }
          </SectionLink>
        </>
      ) }
    </>
  );
};

export default CompositionTab;
