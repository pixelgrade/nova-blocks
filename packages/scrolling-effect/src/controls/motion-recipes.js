/**
 * Motion recipes — the Presets tab of Motion & Effects.
 *
 * Curated one-click motion, each recipe tagged by its SUBJECT: "Media"
 * recipes move the image inside each card; "Cards" recipes move the cards
 * themselves. Free recipes (Still, Soft Parallax) sit fully native; Doppler
 * bundles use the motion-recipes Try & Play boundary, while card-depth
 * recipes use the same advanced-controls gates as their save enforcement.
 *
 * Recipes are whole bundles: each one writes the full motion story for its
 * subject and resets the other, so combinations remain the dials' job
 * (Media / Cards tabs), not the presets'. Since the Stage 3a retrofit that
 * contract is enforced by the managed-bundle preset engine: the family's
 * managed set is the union of every attribute any rendered recipe writes,
 * applying a recipe clears the managed attributes it omits (back to their
 * registered defaults), and selection/Custom is derived tab-wide — never
 * stored. Plus gating is untouched: the engine runs inside the same
 * PresetCardsControl instances the TryAndPlay boundaries already wrap.
 */
import { __ } from '@wordpress/i18n';

import {
  buildPresetDefinitions,
  CardsMotionThumb,
  deriveActivePresetId,
  getManagedAttributes,
  MediaMotionThumb,
  PresetCardsControl,
  TryAndPlay,
  TryAndPlayGroup,
  useRegisteredAttributeDefaults,
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
  const registeredDefaults = useRegisteredAttributeDefaults( name );

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

  const dopplerRecipes = [];
  const stackedDepthRecipes = [];
  const editorialDriftRecipes = [];

  if ( hasDoppler ) {
    ( novablocksSettings.motionPresetOptions || [] ).forEach( ( option ) => {
      if ( ! option?.preset || ! Object.keys( option.preset ).length ) {
        return;
      }

      dopplerRecipes.push( {
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

  // Element Stacking is a structural Card Layout decision, not a Motion
  // capability. Offer the 3D recipe only when that prerequisite is already
  // satisfied, and never pull `cardLayout` into this family's managed set.
  const supportsStackedDrift = hasCollectionDepth
    && [ 'classic', 'masonry' ].includes( attributes.layoutStyle )
    && attributes.cardLayout === 'stacked';
  // Parametric markup can't honour the 3D odd/even pattern, but the drift
  // itself is structure-agnostic — it gets a parallax-only cards recipe.
  const supportsEditorialDrift = hasCollectionDepth
    && 'parametric' === attributes.layoutStyle;

  if ( supportsStackedDrift ) {
    stackedDepthRecipes.push( {
      label: __( 'Stacked Drift', '__plugin_txtd' ),
      sub: __( 'Cards · depth + parallax', '__plugin_txtd' ),
      value: 'motion-stacked-drift',
      thumbnail: <CardsMotionThumb />,
      preset: {
        scrollingEffect: 'static',
        pile3dEffect: true,
        pile3dTarget: 'item',
        pile3dTargetRule: 'odd',
        pileParallaxAmount: 78,
      },
    } );
  }

  if ( supportsEditorialDrift ) {
    editorialDriftRecipes.push( {
      label: __( 'Editorial Drift', '__plugin_txtd' ),
      sub: __( 'Cards · depth parallax', '__plugin_txtd' ),
      value: 'motion-editorial-drift',
      thumbnail: <CardsMotionThumb />,
      preset: {
        scrollingEffect: 'static',
        pile3dEffect: false,
        pileParallaxAmount: 78,
      },
    } );
  }

  // Stage 3a managed-bundle retrofit: the recipe family is the whole tab
  // (free + Cinematic + Depth groups render as separate card grids, but a
  // recipe is one complete motion decision across the union of everything
  // any of them writes). Every group receives the SAME managed boundary, so
  // clicking any recipe also clears what another group's recipe left behind
  // (e.g. "Still" after a Doppler recipe clears the focal/scale/motionPreset
  // story instead of leaving it stale). Selection/Custom is derived once,
  // tab-wide, and the shared hint below replaces the per-grid one.
  const allRecipes = [
    ...freeRecipes,
    ...dopplerRecipes,
    ...stackedDepthRecipes,
    ...editorialDriftRecipes,
  ];
  const { definitions } = buildPresetDefinitions( allRecipes );
  const managedAttributes = getManagedAttributes( definitions );
  const activeRecipeId = deriveActivePresetId( definitions, attributes, registeredDefaults );

  return (
    <>
      <PresetCardsControl
        label={ __( 'Motion presets', '__plugin_txtd' ) }
        options={ freeRecipes }
        managedAttributes={ managedAttributes }
        hideCustomHint
        { ...props }
      />
      { /* One boundary per tab: while locked, every gated recipe group below
           merges into a single Try & Play boundary (ui-contract "merged
           groups"); the per-gate TryAndPlay wrappers stay so each gate keeps
           its solo chrome anywhere the group doesn't cover it. Only the
           groups that actually render join the boundary — never pre-reveal a
           gate the user hasn't seen. */ }
      <TryAndPlayGroup gateIds={ [
        ...( dopplerRecipes.length ? [ 'motion-recipes' ] : [] ),
        ...( stackedDepthRecipes.length ? [ 'stacked-depth' ] : [] ),
        ...( editorialDriftRecipes.length ? [ 'parametric-depth' ] : [] ),
      ] }>
        { !! dopplerRecipes.length && (
          <TryAndPlay gateId={ 'motion-recipes' }>
            <PresetCardsControl label={ __( 'Cinematic presets', '__plugin_txtd' ) } options={ dopplerRecipes } managedAttributes={ managedAttributes } hideCustomHint { ...props } />
          </TryAndPlay>
        ) }
        { !! stackedDepthRecipes.length && (
          <TryAndPlay gateId={ 'stacked-depth' }>
            <PresetCardsControl label={ __( 'Depth presets', '__plugin_txtd' ) } options={ stackedDepthRecipes } managedAttributes={ managedAttributes } hideCustomHint { ...props } />
          </TryAndPlay>
        ) }
        { !! editorialDriftRecipes.length && (
          <TryAndPlay gateId={ 'parametric-depth' }>
            <PresetCardsControl label={ __( 'Depth presets', '__plugin_txtd' ) } options={ editorialDriftRecipes } managedAttributes={ managedAttributes } hideCustomHint { ...props } />
          </TryAndPlay>
        ) }
      </TryAndPlayGroup>
      { null === activeRecipeId && (
        <p className="nb-settings-hint">{ __( 'Custom', '__plugin_txtd' ) }</p>
      ) }
      { hasCollectionDepth && ! supportsStackedDrift && ! supportsEditorialDrift && (
        <p className="nb-settings-hint">
          { __( '“Stacked Drift” appears for stacked Classic Grid and Masonry collections; “Editorial Drift” for Parametric grids.', '__plugin_txtd' ) }
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
