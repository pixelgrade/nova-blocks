/**
 * Motion recipes — the Presets tab of Motion & Effects.
 *
 * Curated one-click motion, each recipe tagged by its SUBJECT: "Media"
 * recipes move the image inside each card; "Cards" recipes move the cards
 * themselves. Free recipes (Still, Soft Parallax) sit fully native; the
 * Doppler bundles and the stacked-depth recipe are one Try & Play boundary.
 *
 * Recipes are whole bundles: each one writes the full motion story for its
 * subject and resets the other, so combinations remain the dials' job
 * (Media / Cards tabs), not the presets'.
 */
import { __ } from '@wordpress/i18n';

import {
  CardsMotionThumb,
  MediaMotionThumb,
  PresetCardsControl,
  TryAndPlay,
  useSettings,
  useSupports,
} from '@novablocks/block-editor';

const DOPPLER_GLYPHS = {
  'standard-dynamic': 'doppler',
  'pull-focus': 'zoom',
  'static-reveal': 'reveal',
};

export const getScrollingEffectSupports = ( supports ) => {
  const scrollingEffect = supports?.novaBlocks?.scrollingEffect;
  const collectionLayout = supports?.novaBlocks?.collectionLayout;

  return {
    hasDoppler: scrollingEffect === true || scrollingEffect?.doppler === true,
    hasCollectionDepth: collectionLayout === true || collectionLayout?.controls === true,
  };
};

const MotionRecipes = ( props ) => {
  const { attributes, name } = props;
  const supports = useSupports( name );
  const novablocksSettings = useSettings();

  const { hasDoppler, hasCollectionDepth } = getScrollingEffectSupports( supports );

  // Blocks without collection depth don't carry the pile attributes at all,
  // so their recipe bundles must not reference them.
  const depthResets = hasCollectionDepth
    ? { pile3dEffect: false, pileParallaxAmount: 0 }
    : {};

  const freeRecipes = [
    {
      label: __( 'Still', '__plugin_txtd' ),
      sub: __( 'Media · no motion', '__plugin_txtd' ),
      value: 'motion-still',
      thumbnail: <MediaMotionThumb kind={ 'static' } />,
      preset: { scrollingEffect: 'static', ...depthResets },
    },
    {
      label: __( 'Soft Parallax', '__plugin_txtd' ),
      sub: __( 'Media · drifts on scroll', '__plugin_txtd' ),
      value: 'motion-soft-parallax',
      thumbnail: <MediaMotionThumb kind={ 'parallax' } />,
      preset: { scrollingEffect: 'parallax', ...depthResets },
    },
  ];

  const gatedRecipes = [];

  if ( hasDoppler ) {
    ( novablocksSettings.motionPresetOptions || [] ).forEach( ( option ) => {
      if ( ! option?.preset || ! Object.keys( option.preset ).length ) {
        return;
      }

      gatedRecipes.push( {
        label: option.label,
        sub: __( 'Media · Doppler', '__plugin_txtd' ),
        value: `motion-doppler-${ option.value }`,
        thumbnail: <MediaMotionThumb kind={ DOPPLER_GLYPHS[ option.value ] || 'doppler' } />,
        preset: {
          scrollingEffect: 'doppler',
          motionPreset: option.value,
          minHeightFallback: 75,
          ...option.preset,
          ...depthResets,
        },
      } );
    } );
  }

  const supportsStackedDrift = hasCollectionDepth
    && [ 'classic', 'masonry' ].includes( attributes.layoutStyle );

  if ( supportsStackedDrift ) {
    gatedRecipes.push( {
      label: __( 'Stacked Drift', '__plugin_txtd' ),
      sub: __( 'Cards · depth + parallax', '__plugin_txtd' ),
      value: 'motion-stacked-drift',
      thumbnail: <CardsMotionThumb />,
      preset: {
        scrollingEffect: 'static',
        cardLayout: 'stacked',
        pile3dEffect: true,
        pile3dTarget: 'item',
        pile3dTargetRule: 'odd',
        pileParallaxAmount: 78,
      },
    } );
  }

  return (
    <>
      <PresetCardsControl
        label={ __( 'Motion presets', '__plugin_txtd' ) }
        options={ freeRecipes }
        { ...props }
      />
      { !! gatedRecipes.length && (
        <TryAndPlay gateId={ 'motion-recipes' }>
          <PresetCardsControl options={ gatedRecipes } { ...props } />
        </TryAndPlay>
      ) }
      { hasCollectionDepth && ! supportsStackedDrift && (
        <p className="nb-settings-hint">
          { __( '“Stacked Drift” appears for Classic Grid and Masonry collections.', '__plugin_txtd' ) }
        </p>
      ) }
      <p className="nb-settings-hint">
        { hasCollectionDepth
          ? __( 'Dial the raw effects by hand in the Media and Cards tabs.', '__plugin_txtd' )
          : __( 'Dial the raw effects by hand in the Media tab.', '__plugin_txtd' ) }
      </p>
    </>
  );
};

export default MotionRecipes;
