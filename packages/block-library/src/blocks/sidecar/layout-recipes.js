/**
 * Sidecar Layout Recipes — the `sidecar-layout` Preset Engine family (Task 4.2).
 *
 * Curated one-click editorial layouts for a Sidecar, built on the managed-bundle
 * preset engine (`packages/block-editor/src/preset-engine`). This module holds
 * ONLY the pure family data + logic (no `@wordpress/*`, no `@novablocks/*`, no
 * JSX) so it is trivially unit-testable against the REAL engine helpers and safe
 * to import from anywhere; the control JSX lives in `layout-recipe-controls.js`.
 *
 * ── The structural-attributes decision (documented per the AGENTS contract) ──
 *
 * A Sidecar's rails are inner-block AREAS (`novablocks/sidecar-area`), not a
 * serialized attribute. The engine's managed patch is ONE `setAttributes()`
 * call — it can only write ATTRIBUTES. So rail existence CANNOT live inside the
 * managed patch. The AGENTS rule ("structural attributes may be managed only
 * when every definition writes an explicit value; never clear structure
 * implicitly") is honored by the STRONGEST reading available here: the family's
 * managed ATTRIBUTE set contains NO structural attribute at all
 * (STRUCTURAL_ATTRIBUTES = cardLayout / layoutStyle / columns / contentType —
 * none are in this set), and rail structure is reconciled by an explicit,
 * coordinated `replaceInnerBlocks()` step (exactly like the pre-existing
 * position radio in inspector-controls.js), never cleared implicitly.
 *
 * Therefore applying a recipe keeps structure OUT of the attribute patch and
 * uses whichever single-undo primitive fits (see layout-recipe-controls.js):
 *   - structure already matches: the engine's single `setAttributes()` patch;
 *   - structure must change: the SAME managed patch is embedded with the
 *     reconciled areas in ONE atomic `replaceBlock` (a `markNextChangeAsNotPersistent`
 *     + `replaceInnerBlocks` sequence was rejected — the non-persistent change
 *     folds into the PRECEDING checkpoint, so undo left the structure changed).
 * Either way the whole recipe is ONE undo level and the managed decision is
 * exactly `getPresetApplyPatch()`.
 *
 * The active recipe is DERIVED, never stored. Because two recipes can share
 * managed-attribute values yet differ only in rail STRUCTURE (Centered and Hive
 * are both sidebarPosition:none / small), derivation first filters the family to
 * recipes whose STRUCTURAL SIGNATURE (which rails exist, observed from the live
 * inner blocks — not stored provenance) matches, then runs the engine's
 * attribute derivation among those. No structural match, or a structural match
 * whose attributes diverge, is the first-class Custom state.
 */

/**
 * The family's complete managed capability domain. Every recipe declares ALL of
 * these (the managed-bundle contract). Deliberately NONE of them is a
 * STRUCTURAL_ATTRIBUTE: rail structure is coordinated separately (see the module
 * doc), so the structural-boundary invariant is satisfied by construction.
 */
export const SIDECAR_LAYOUT_MANAGED_ATTRIBUTES = [
  'sidebarPosition',
  'sidebarWidth',
  'lastItemIsSticky',
  'contentFontSize',
  'sidebarFontSize',
];

/**
 * Resolve a Sidecar Area's `areaName` to its rail side — the pure JS twin of PHP
 * `novablocks_resolve_sidecar_area_side()` and the resolver in sidecar-area
 * edit.js. Explicit per-side names win; the legacy `sidebar` name maps to a side
 * from the parent Sidecar's `sidebarPosition` (historical default: right).
 *
 * @param {string} areaName
 * @param {string} sidebarPosition
 * @return {''|'left'|'right'} The rail side, or '' for content / unknown.
 */
export const resolveSidecarAreaSide = ( areaName, sidebarPosition = '' ) => {
  if ( areaName === 'sidebar-left' ) {
    return 'left';
  }
  if ( areaName === 'sidebar-right' ) {
    return 'right';
  }
  if ( areaName === 'sidebar' ) {
    return sidebarPosition === 'left' ? 'left' : 'right';
  }
  return '';
};

/**
 * The structural signature of a Sidecar: which rails are present. Derived from
 * the resolved sides of its area children — this is what distinguishes recipes
 * that share managed-attribute values (Centered vs Hive).
 *
 * @param {Array<''|'left'|'right'>} areaSides Resolved sides of the areas.
 * @return {{ hasLeft: boolean, hasRight: boolean }}
 */
export const getStructuralSignature = ( areaSides ) => {
  const sides = Array.isArray( areaSides ) ? areaSides : [];

  return {
    hasLeft: sides.includes( 'left' ),
    hasRight: sides.includes( 'right' ),
  };
};

/**
 * @param {{hasLeft: boolean, hasRight: boolean}} a
 * @param {{hasLeft: boolean, hasRight: boolean}} b
 * @return {boolean}
 */
export const signaturesEqual = ( a, b ) =>
  !! a && !! b && a.hasLeft === b.hasLeft && a.hasRight === b.hasRight;

/**
 * The five launch recipes. Each carries:
 *   - `id`        the derived-selection identity (never stored on the block);
 *   - `signature` its rail structure (the derivation pre-filter key);
 *   - `areaShape` the ordered area names it reconciles to;
 *   - `values`    a COMPLETE decision over the managed set (all 5 attributes).
 *
 * Offset Editorial — the design doc words it "asymmetric empty gutter with no
 * left area". An empty-by-intent LEFT AREA was rejected: an empty area is
 * structurally identical to (and so underivable from) Left Rail, and the
 * concrete Task 4.2 managed set has no gutter-offset attribute to distinguish
 * them. So it ships as a width-only asymmetry honoring "no left area": content +
 * a WIDE right rail (sidebarWidth:large), whose generous rail reads as the
 * asymmetric editorial offset. A true empty-margin-with-no-area needs the design
 * doc's deferred `asymmetric gutter offsets` attribute (out of scope here).
 */
export const LAYOUT_RECIPES = [
  {
    id: 'centered',
    signature: { hasLeft: false, hasRight: false },
    areaShape: [ 'content' ],
    values: {
      sidebarPosition: 'none',
      sidebarWidth: 'small',
      lastItemIsSticky: false,
      contentFontSize: 'normal',
      sidebarFontSize: 'normal',
    },
  },
  {
    id: 'right-rail',
    signature: { hasLeft: false, hasRight: true },
    areaShape: [ 'content', 'sidebar-right' ],
    values: {
      sidebarPosition: 'right',
      sidebarWidth: 'medium',
      lastItemIsSticky: false,
      contentFontSize: 'normal',
      sidebarFontSize: 'normal',
    },
  },
  {
    id: 'left-rail',
    signature: { hasLeft: true, hasRight: false },
    areaShape: [ 'sidebar-left', 'content' ],
    values: {
      sidebarPosition: 'left',
      sidebarWidth: 'medium',
      lastItemIsSticky: false,
      contentFontSize: 'normal',
      sidebarFontSize: 'normal',
    },
  },
  {
    id: 'hive',
    signature: { hasLeft: true, hasRight: true },
    areaShape: [ 'sidebar-left', 'content', 'sidebar-right' ],
    values: {
      // Three-area model: rail presence drives geometry, so position stays
      // 'none' (Task 4.1). A single Sidecar carries ONE sidebarWidth, so both
      // rails are narrow "meta" rails of equal width — a single-block Hive is
      // intentionally symmetric where the nested-Hive fixture is asymmetric.
      sidebarPosition: 'none',
      sidebarWidth: 'small',
      lastItemIsSticky: false,
      contentFontSize: 'normal',
      sidebarFontSize: 'normal',
    },
  },
  {
    id: 'offset-editorial',
    signature: { hasLeft: false, hasRight: true },
    areaShape: [ 'content', 'sidebar-right' ],
    values: {
      sidebarPosition: 'right',
      sidebarWidth: 'large',
      lastItemIsSticky: false,
      contentFontSize: 'normal',
      sidebarFontSize: 'normal',
    },
  },
];

/**
 * Family definitions in the engine's `{ id, managedAttributes, values }` shape —
 * every definition carries the SAME complete managed set (the family contract).
 *
 * @return {Array<{id: string, managedAttributes: string[], values: Object}>}
 */
export const getRecipeDefinitions = () =>
  LAYOUT_RECIPES.map( ( recipe ) => ( {
    id: recipe.id,
    managedAttributes: SIDECAR_LAYOUT_MANAGED_ATTRIBUTES,
    values: recipe.values,
  } ) );

/**
 * The engine definitions for recipes whose rail STRUCTURE matches `signature` —
 * the structural pre-filter that lets `deriveActivePresetId()` distinguish
 * recipes that share attribute values but differ only in rails (Centered/Hive).
 *
 * @param {{hasLeft: boolean, hasRight: boolean}} signature
 * @return {Array<{id: string, managedAttributes: string[], values: Object}>}
 */
export const getCandidateDefinitions = ( signature ) =>
  LAYOUT_RECIPES
    .filter( ( recipe ) => signaturesEqual( recipe.signature, signature ) )
    .map( ( recipe ) => ( {
      id: recipe.id,
      managedAttributes: SIDECAR_LAYOUT_MANAGED_ATTRIBUTES,
      values: recipe.values,
    } ) );

/**
 * @param {string} recipeId
 * @return {?{id: string, signature: Object, areaShape: string[], values: Object}}
 */
export const getRecipe = ( recipeId ) =>
  LAYOUT_RECIPES.find( ( recipe ) => recipe.id === recipeId ) || null;
