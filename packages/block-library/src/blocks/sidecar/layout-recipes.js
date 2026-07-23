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
 * coordinated atomic `replaceBlock()` step, never cleared implicitly.
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

const AREA = 'novablocks/sidecar-area';
const areaNameOf = ( block ) => ( block.attributes && block.attributes.areaName ) || 'content';
const isArea = ( block ) => block.name === AREA;

/**
 * Return the actual side of a Sidecar that has exactly one resolved rail.
 * No rail, two rails, or malformed duplicate rails are intentionally
 * ambiguous and return `null`.
 *
 * @param {Array}  innerBlocks     Current Sidecar children.
 * @param {string} sidebarPosition Parent Sidecar position for legacy areas.
 * @return {?string} `left`, `right`, or null.
 */
export const getSingleRailSide = ( innerBlocks, sidebarPosition = '' ) => {
  const sides = ( Array.isArray( innerBlocks ) ? innerBlocks : [] )
    .filter( isArea )
    .map( ( block ) => resolveSidecarAreaSide( areaNameOf( block ), sidebarPosition ) )
    .filter( Boolean );

  return sides.length === 1 ? sides[ 0 ] : null;
};

/**
 * Collect the rail sides reserved by ancestor Sidecars. Structural presence is
 * intentional: an empty ancestor rail still reserves its side so availability
 * does not change later when content is inserted into that rail.
 *
 * @param {Array} ancestorSidecars Ancestor Sidecar block objects.
 * @return {{ hasLeft: boolean, hasRight: boolean }}
 */
export const getReservedAncestorRailSides = ( ancestorSidecars ) => {
  const sides = ( Array.isArray( ancestorSidecars ) ? ancestorSidecars : [] )
    .filter( ( block ) => block && block.name === 'novablocks/sidecar' )
    .reduce( ( reservedSides, block ) => {
      const sidebarPosition = block.attributes && block.attributes.sidebarPosition;
      const blockSides = ( Array.isArray( block.innerBlocks ) ? block.innerBlocks : [] )
        .filter( isArea )
        .map( ( area ) =>
          resolveSidecarAreaSide( areaNameOf( area ), sidebarPosition )
        )
        .filter( Boolean );

      return reservedSides.concat( blockSides );
    }, [] );

  return getStructuralSignature( sides );
};

/**
 * Whether a proposed/current Sidecar signature requests a rail side already
 * reserved by an ancestor Sidecar.
 *
 * @param {Object} signature    Sidecar `{ hasLeft, hasRight }` signature.
 * @param {Object} reservations Ancestor `{ hasLeft, hasRight }` reservations.
 * @return {boolean}
 */
export const doesSidecarSignatureConflictWithReservations = (
  signature,
  reservations
) =>
  !! (
    signature &&
    reservations &&
    ( ( signature.hasLeft && reservations.hasLeft ) ||
      ( signature.hasRight && reservations.hasRight ) )
  );

/**
 * Reconcile Sidecar area blocks to a target rail signature while preserving
 * existing rail attributes and content. Block construction is supplied by the
 * caller so this domain module remains free of WordPress imports and directly
 * testable.
 *
 * @param {Array}  innerBlocks      Current Sidecar children.
 * @param {Object} targetSignature  Desired `{ hasLeft, hasRight }` shape.
 * @param {string} targetPosition   Target sidebarPosition.
 * @param {Function} cloneBlock     WordPress block clone primitive.
 * @param {Function} createBlock    WordPress block creation primitive.
 * @return {?Array} Reconciled area blocks, or null when structure already fits.
 */
export const reconcileSidecarAreas = (
  innerBlocks,
  targetSignature,
  targetPosition,
  cloneBlock,
  createBlock
) => {
  const areas = innerBlocks.filter( isArea );
  const contentBlock = areas.find( ( block ) => areaNameOf( block ) === 'content' );
  const railsWithSide = areas
    .filter( ( block ) => areaNameOf( block ) !== 'content' )
    .map( ( block ) => ( {
      block,
      side: resolveSidecarAreaSide( areaNameOf( block ), targetPosition ),
    } ) );

  const currentSignature = getStructuralSignature( railsWithSide.map( ( rail ) => rail.side ) );

  if ( signaturesEqual( currentSignature, targetSignature ) ) {
    return null;
  }

  const need = { left: targetSignature.hasLeft, right: targetSignature.hasRight };
  const consumed = new Set();
  const assignment = { left: null, right: null };

  [ 'left', 'right' ].forEach( ( side ) => {
    if ( ! need[ side ] ) {
      return;
    }
    const exact = railsWithSide.find(
      ( rail ) => rail.side === side && ! consumed.has( rail.block.clientId )
    );
    if ( exact ) {
      consumed.add( exact.block.clientId );
      assignment[ side ] = cloneBlock( exact.block );
    }
  } );

  [ 'left', 'right' ].forEach( ( side ) => {
    if ( ! need[ side ] || assignment[ side ] ) {
      return;
    }
    const spare = railsWithSide.find( ( rail ) => ! consumed.has( rail.block.clientId ) );
    if ( spare ) {
      consumed.add( spare.block.clientId );
      assignment[ side ] = cloneBlock( spare.block, {
        areaName: `sidebar-${ side }`,
      } );
      return;
    }
    assignment[ side ] = createBlock( AREA, { areaName: `sidebar-${ side }` } );
  } );

  const content = contentBlock
    ? cloneBlock( contentBlock )
    : createBlock( AREA, { areaName: 'content' } );

  const ordered = [];
  if ( assignment.left ) {
    ordered.push( assignment.left );
  }
  ordered.push( content );
  if ( assignment.right ) {
    ordered.push( assignment.right );
  }

  return ordered;
};

/**
 * Apply an attribute patch together with any required rail reconciliation.
 * Structural changes use one `replaceBlock`; matching structures retain block
 * identity and use one `setAttributes` patch.
 *
 * @param {Object} options Coordinated editor change inputs and primitives.
 * @return {void}
 */
export const applySidecarLayoutChange = ( {
  attributes,
  clientId,
  innerBlocks,
  patch,
  targetSignature,
  cloneBlock,
  createBlock,
  replaceBlock,
  setAttributes,
} ) => {
  const reconciled = reconcileSidecarAreas(
    innerBlocks,
    targetSignature,
    patch.sidebarPosition,
    cloneBlock,
    createBlock
  );

  if ( reconciled ) {
    replaceBlock(
      clientId,
      createBlock( 'novablocks/sidecar', { ...attributes, ...patch }, reconciled )
    );
    return;
  }

  setAttributes( patch );
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
