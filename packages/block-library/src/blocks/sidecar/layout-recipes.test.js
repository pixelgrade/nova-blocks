/**
 * Managed-boundary contract for the `sidecar-layout` Preset Engine family
 * (Task 4.2), in the Motion family's test shape.
 *
 * Unlike the Motion managed test (which mirrors its inline recipe bundles),
 * this imports the REAL family data + pure logic from `./layout-recipes` — that
 * module has no `@wordpress/*` / `@novablocks/*` imports, so it loads cleanly
 * under jest — and composes it with the REAL engine helpers imported by RELATIVE
 * path (bare `@novablocks/block-editor` would hit the jest haste-map collision).
 * So every assertion runs against the shipping implementation, not a mirror.
 */
import {
  deriveActivePresetId,
  getManagedAttributes,
  getPresetApplyPatch,
} from '../../../../block-editor/src/preset-engine';
import { getStructuralBoundaryViolations } from '../../../../block-editor/src/preset-engine/structural-attributes';

import {
  LAYOUT_RECIPES,
  SIDECAR_LAYOUT_MANAGED_ATTRIBUTES,
  applySidecarLayoutChange,
  doesSidecarSignatureConflictWithReservations,
  getCandidateDefinitions,
  getRecipeDefinitions,
  getReservedAncestorRailSides,
  getSingleRailSide,
  getStructuralSignature,
  resolveSidecarAreaSide,
} from './layout-recipes';

// Registered defaults as the engine reads them off the block type at runtime
// (sidecar/attributes.json). Mirrored here for the derivation assertions.
const REGISTERED_DEFAULTS = {
  sidebarPosition: 'none',
  sidebarWidth: 'small',
  lastItemIsSticky: false,
  contentFontSize: 'normal',
  sidebarFontSize: 'normal',
};

const AREA = 'novablocks/sidecar-area';
let nextClientId = 0;

const makeBlock = ( name, attributes = {}, innerBlocks = [], clientId = `block-${ ++nextClientId }` ) => ( {
  name,
  attributes,
  innerBlocks,
  clientId,
} );

const cloneTestBlock = ( block, mergeAttributes = {} ) =>
  makeBlock(
    block.name,
    { ...block.attributes, ...mergeAttributes },
    block.innerBlocks.map( cloneTestBlock )
  );

const createTestBlock = ( name, attributes = {}, innerBlocks = [] ) =>
  makeBlock( name, attributes, innerBlocks );

describe( 'managed boundary', () => {
  test( 'the family manages exactly the five style attributes', () => {
    const managed = getManagedAttributes( getRecipeDefinitions() );

    expect( managed.slice().sort() ).toEqual(
      [
        'sidebarPosition',
        'sidebarWidth',
        'lastItemIsSticky',
        'contentFontSize',
        'sidebarFontSize',
      ].sort()
    );
    expect( managed ).toEqual( SIDECAR_LAYOUT_MANAGED_ATTRIBUTES );
  } );

  test( 'every recipe declares the FULL managed set (a complete decision)', () => {
    getRecipeDefinitions().forEach( ( definition ) => {
      expect( Object.keys( definition.values ).sort() ).toEqual(
        SIDECAR_LAYOUT_MANAGED_ATTRIBUTES.slice().sort()
      );
    } );
  } );

  test( 'no rail-presence / area attribute leaks into the managed set (structure is coordinated, not patched)', () => {
    expect( SIDECAR_LAYOUT_MANAGED_ATTRIBUTES ).not.toContain( 'areaName' );
    expect( SIDECAR_LAYOUT_MANAGED_ATTRIBUTES ).not.toContain( 'hasLeftRail' );
    expect( SIDECAR_LAYOUT_MANAGED_ATTRIBUTES ).not.toContain( 'hasRightRail' );
  } );

  test( 'the launch set is exactly the five documented recipes', () => {
    expect( LAYOUT_RECIPES.map( ( r ) => r.id ) ).toEqual( [
      'centered',
      'right-rail',
      'left-rail',
      'hive',
      'offset-editorial',
    ] );
  } );
} );

describe( 'one-patch apply + clear-to-undefined semantics', () => {
  test( 'applying a recipe is one patch writing exactly the five managed keys with concrete values', () => {
    getRecipeDefinitions().forEach( ( definition ) => {
      const patch = getPresetApplyPatch( definition );

      expect( Object.keys( patch ).sort() ).toEqual(
        SIDECAR_LAYOUT_MANAGED_ATTRIBUTES.slice().sort()
      );
      // Every launch recipe fully specifies the set, so nothing is a clear.
      Object.values( patch ).forEach( ( value ) => {
        expect( value ).not.toBeUndefined();
      } );
    } );
  } );

  test( 'the engine still CLEARS (undefined) any managed key a definition omits', () => {
    // Guards the contract even though no launch recipe exercises it: a partial
    // definition must clear the keys it does not declare.
    const partial = {
      id: 'partial',
      managedAttributes: SIDECAR_LAYOUT_MANAGED_ATTRIBUTES,
      values: { sidebarPosition: 'right' },
    };
    const patch = getPresetApplyPatch( partial );

    expect( patch.sidebarPosition ).toBe( 'right' );
    [ 'sidebarWidth', 'lastItemIsSticky', 'contentFontSize', 'sidebarFontSize' ].forEach(
      ( key ) => {
        expect( key in patch ).toBe( true );
        expect( patch[ key ] ).toBeUndefined();
      }
    );
  } );

  test( 'the applied Hive patch derives back to Hive under its own structure', () => {
    const hive = getRecipeDefinitions().find( ( d ) => d.id === 'hive' );
    const applied = getPresetApplyPatch( hive );
    const signature = { hasLeft: true, hasRight: true };

    expect(
      deriveActivePresetId( getCandidateDefinitions( signature ), applied, REGISTERED_DEFAULTS )
    ).toBe( 'hive' );
  } );
} );

describe( 'derived active recipe (structural pre-filter + attribute match)', () => {
  const derive = ( signature, attributes ) =>
    deriveActivePresetId( getCandidateDefinitions( signature ), attributes, REGISTERED_DEFAULTS );

  test( 'a fresh default Sidecar (none/small, one content area) derives as Centered, not Custom', () => {
    expect( derive( { hasLeft: false, hasRight: false }, {} ) ).toBe( 'centered' );
  } );

  test( 'Centered and Hive share attribute values but never collide — structure decides', () => {
    const attrs = { sidebarPosition: 'none', sidebarWidth: 'small' };

    // Same attributes, different structure → different recipe, never Custom.
    expect( derive( { hasLeft: false, hasRight: false }, attrs ) ).toBe( 'centered' );
    expect( derive( { hasLeft: true, hasRight: true }, attrs ) ).toBe( 'hive' );
  } );

  test( 'Right Rail and Offset Editorial share structure but split on rail width', () => {
    const sig = { hasLeft: false, hasRight: true };

    expect( derive( sig, { sidebarPosition: 'right', sidebarWidth: 'medium' } ) ).toBe( 'right-rail' );
    expect( derive( sig, { sidebarPosition: 'right', sidebarWidth: 'large' } ) ).toBe( 'offset-editorial' );
  } );

  test( 'Left Rail derives from a left structure', () => {
    expect(
      derive( { hasLeft: true, hasRight: false }, { sidebarPosition: 'left', sidebarWidth: 'medium' } )
    ).toBe( 'left-rail' );
  } );

  test( 'fine-tuning a managed attribute away from the recipe drops to Custom', () => {
    // Hive with rails widened to medium no longer matches any {left,right} recipe.
    expect(
      derive( { hasLeft: true, hasRight: true }, { sidebarPosition: 'none', sidebarWidth: 'medium' } )
    ).toBeNull();
  } );

  test( 'a structure with no matching recipe is Custom (empty candidate set)', () => {
    // (No launch recipe has this exact signature today, but the engine must
    // return null rather than throw on an empty candidate set.)
    expect( getCandidateDefinitions( { hasLeft: true, hasRight: true } ) ).toHaveLength( 1 );
    expect( derive( { hasLeft: false, hasRight: false }, { sidebarWidth: 'large' } ) ).toBeNull();
  } );
} );

describe( 'structural signature derives from resolved area sides', () => {
  test( 'explicit per-side names resolve directly', () => {
    expect( resolveSidecarAreaSide( 'sidebar-left' ) ).toBe( 'left' );
    expect( resolveSidecarAreaSide( 'sidebar-right' ) ).toBe( 'right' );
    expect( resolveSidecarAreaSide( 'content' ) ).toBe( '' );
  } );

  test( 'the legacy `sidebar` name follows the parent sidebarPosition (default right)', () => {
    expect( resolveSidecarAreaSide( 'sidebar', 'left' ) ).toBe( 'left' );
    expect( resolveSidecarAreaSide( 'sidebar', 'right' ) ).toBe( 'right' );
    expect( resolveSidecarAreaSide( 'sidebar', 'none' ) ).toBe( 'right' );
    expect( resolveSidecarAreaSide( 'sidebar' ) ).toBe( 'right' );
  } );

  test( 'a three-area Hive signature has both rails; a legacy two-area has one', () => {
    expect(
      getStructuralSignature( [ 'left', '', 'right' ] )
    ).toEqual( { hasLeft: true, hasRight: true } );

    // legacy [content, sidebar] under position right
    expect(
      getStructuralSignature( [ '', resolveSidecarAreaSide( 'sidebar', 'right' ) ] )
    ).toEqual( { hasLeft: false, hasRight: true } );

    expect(
      getStructuralSignature( [ '' ] )
    ).toEqual( { hasLeft: false, hasRight: false } );
  } );
} );

describe( 'single-rail toolbar behavior', () => {
  test( 'an explicit rail exposes its structural side independently of sidebarPosition', () => {
    const left = [
      makeBlock( AREA, { areaName: 'sidebar-left' } ),
      makeBlock( AREA, { areaName: 'content' } ),
    ];
    const right = [
      makeBlock( AREA, { areaName: 'content' } ),
      makeBlock( AREA, { areaName: 'sidebar-right' } ),
    ];

    expect( getSingleRailSide( left, 'right' ) ).toBe( 'left' );
    expect( getSingleRailSide( right, 'left' ) ).toBe( 'right' );
  } );

  test( 'a legacy generic rail follows sidebarPosition', () => {
    const legacy = [
      makeBlock( AREA, { areaName: 'content' } ),
      makeBlock( AREA, { areaName: 'sidebar' } ),
    ];

    expect( getSingleRailSide( legacy, 'left' ) ).toBe( 'left' );
    expect( getSingleRailSide( legacy, 'right' ) ).toBe( 'right' );
  } );

  test( 'no-rail and dual-rail structures have no unambiguous toolbar side', () => {
    const centered = [
      makeBlock( AREA, { areaName: 'content' } ),
    ];
    const hive = [
      makeBlock( AREA, { areaName: 'sidebar-left' } ),
      makeBlock( AREA, { areaName: 'content' } ),
      makeBlock( AREA, { areaName: 'sidebar-right' } ),
    ];

    expect( getSingleRailSide( centered, 'none' ) ).toBeNull();
    expect( getSingleRailSide( hive, 'none' ) ).toBeNull();
  } );

  test( 'flipping an explicit rail is one atomic replacement that preserves fine-tuning and rail content', () => {
    const railContent = makeBlock( 'core/image', { id: 17 }, [], 'rail-image' );
    const innerBlocks = [
      makeBlock(
        AREA,
        {
          areaName: 'sidebar-left',
          className: 'rail-class',
          lock: { move: true, remove: false },
        },
        [ railContent ],
        'left-area'
      ),
      makeBlock( AREA, { areaName: 'content' }, [], 'content-area' ),
    ];
    const attributes = {
      sidebarPosition: 'left',
      sidebarWidth: 'small',
      lastItemIsSticky: true,
      colorSignal: 3,
    };
    const replaceBlock = jest.fn();
    const setAttributes = jest.fn();

    applySidecarLayoutChange( {
      attributes,
      clientId: 'sidecar',
      innerBlocks,
      patch: { sidebarPosition: 'right' },
      targetSignature: { hasLeft: false, hasRight: true },
      cloneBlock: cloneTestBlock,
      createBlock: createTestBlock,
      replaceBlock,
      setAttributes,
    } );

    expect( setAttributes ).not.toHaveBeenCalled();
    expect( replaceBlock ).toHaveBeenCalledTimes( 1 );
    const [ replacedClientId, replacement ] = replaceBlock.mock.calls[ 0 ];
    expect( replacedClientId ).toBe( 'sidecar' );
    expect( replacement.attributes ).toEqual( {
      sidebarPosition: 'right',
      sidebarWidth: 'small',
      lastItemIsSticky: true,
      colorSignal: 3,
    } );
    expect( replacement.innerBlocks.map( ( block ) => block.attributes.areaName ) ).toEqual( [
      'content',
      'sidebar-right',
    ] );
    expect( replacement.innerBlocks[ 1 ].attributes ).toEqual( {
      areaName: 'sidebar-right',
      className: 'rail-class',
      lock: { move: true, remove: false },
    } );
    expect( replacement.innerBlocks[ 1 ].innerBlocks[ 0 ].attributes ).toEqual( { id: 17 } );
    expect( replacement.innerBlocks[ 1 ].innerBlocks[ 0 ] ).not.toBe( railContent );
  } );

  test( 'flipping a standard explicit Left Rail derives as Right Rail', () => {
    const attributes = {
      sidebarPosition: 'left',
      sidebarWidth: 'medium',
      lastItemIsSticky: false,
      contentFontSize: 'normal',
      sidebarFontSize: 'normal',
    };
    const replaceBlock = jest.fn();

    applySidecarLayoutChange( {
      attributes,
      clientId: 'left-rail-sidecar',
      innerBlocks: [
        makeBlock( AREA, { areaName: 'sidebar-left' } ),
        makeBlock( AREA, { areaName: 'content' } ),
      ],
      patch: { sidebarPosition: 'right' },
      targetSignature: { hasLeft: false, hasRight: true },
      cloneBlock: cloneTestBlock,
      createBlock: createTestBlock,
      replaceBlock,
      setAttributes: jest.fn(),
    } );

    const replacement = replaceBlock.mock.calls[ 0 ][ 1 ];
    const signature = getStructuralSignature(
      replacement.innerBlocks.map( ( block ) =>
        resolveSidecarAreaSide(
          block.attributes.areaName,
          replacement.attributes.sidebarPosition
        )
      )
    );

    expect(
      deriveActivePresetId(
        getCandidateDefinitions( signature ),
        replacement.attributes,
        REGISTERED_DEFAULTS
      )
    ).toBe( 'right-rail' );
  } );

  test( 'flipping a legacy generic rail remains an attribute-only change', () => {
    const innerBlocks = [
      makeBlock( AREA, { areaName: 'content' }, [], 'content-area' ),
      makeBlock(
        AREA,
        { areaName: 'sidebar' },
        [ makeBlock( 'core/paragraph', { content: 'Rail copy' } ) ],
        'legacy-rail'
      ),
    ];
    const replaceBlock = jest.fn();
    const setAttributes = jest.fn();

    applySidecarLayoutChange( {
      attributes: { sidebarPosition: 'left', sidebarWidth: 'large' },
      clientId: 'legacy-sidecar',
      innerBlocks,
      patch: { sidebarPosition: 'right' },
      targetSignature: { hasLeft: false, hasRight: true },
      cloneBlock: cloneTestBlock,
      createBlock: createTestBlock,
      replaceBlock,
      setAttributes,
    } );

    expect( replaceBlock ).not.toHaveBeenCalled();
    expect( setAttributes ).toHaveBeenCalledTimes( 1 );
    expect( setAttributes ).toHaveBeenCalledWith( { sidebarPosition: 'right' } );
  } );
} );

describe( 'ancestor rail reservations', () => {
  test( 'an explicit empty ancestor rail still reserves its side', () => {
    const ancestor = makeBlock(
      'novablocks/sidecar',
      { sidebarPosition: 'none' },
      [
        makeBlock( AREA, { areaName: 'content' } ),
        makeBlock( AREA, { areaName: 'sidebar-right' } ),
      ]
    );

    expect( getReservedAncestorRailSides( [ ancestor ] ) ).toEqual( {
      hasLeft: false,
      hasRight: true,
    } );
  } );

  test( 'legacy ancestor rails reserve the side resolved from sidebarPosition', () => {
    const leftAncestor = makeBlock(
      'novablocks/sidecar',
      { sidebarPosition: 'left' },
      [
        makeBlock( AREA, { areaName: 'sidebar' } ),
        makeBlock( AREA, { areaName: 'content' } ),
      ]
    );
    const rightAncestor = makeBlock(
      'novablocks/sidecar',
      { sidebarPosition: 'right' },
      [
        makeBlock( AREA, { areaName: 'content' } ),
        makeBlock( AREA, { areaName: 'sidebar' } ),
      ]
    );

    expect( getReservedAncestorRailSides( [ leftAncestor, rightAncestor ] ) ).toEqual( {
      hasLeft: true,
      hasRight: true,
    } );
  } );

  test( 'only recipes requesting a reserved side conflict', () => {
    const reservations = { hasLeft: false, hasRight: true };

    expect(
      doesSidecarSignatureConflictWithReservations(
        { hasLeft: true, hasRight: false },
        reservations
      )
    ).toBe( false );
    expect(
      doesSidecarSignatureConflictWithReservations(
        { hasLeft: false, hasRight: true },
        reservations
      )
    ).toBe( true );
    expect(
      doesSidecarSignatureConflictWithReservations(
        { hasLeft: true, hasRight: true },
        reservations
      )
    ).toBe( true );
    expect(
      doesSidecarSignatureConflictWithReservations(
        { hasLeft: false, hasRight: false },
        reservations
      )
    ).toBe( false );
  } );
} );

describe( 'structural-boundary invariant', () => {
  test( 'the family never half-owns a structural ATTRIBUTE (none is managed)', () => {
    expect( getStructuralBoundaryViolations( getRecipeDefinitions() ) ).toEqual( [] );
  } );
} );

describe( 'registration contract (napkin #6: every managed attribute registered)', () => {
  // eslint-disable-next-line global-require
  const registered = require( './attributes.json' );

  test( 'every managed attribute exists in the block registration schema with a default', () => {
    SIDECAR_LAYOUT_MANAGED_ATTRIBUTES.forEach( ( attribute ) => {
      expect( registered ).toHaveProperty( attribute );
      expect( registered[ attribute ] ).toHaveProperty( 'default' );
    } );
  } );

  test( 'the mirrored registered defaults used above match the schema', () => {
    SIDECAR_LAYOUT_MANAGED_ATTRIBUTES.forEach( ( attribute ) => {
      expect( REGISTERED_DEFAULTS[ attribute ] ).toEqual( registered[ attribute ].default );
    } );
  } );
} );
