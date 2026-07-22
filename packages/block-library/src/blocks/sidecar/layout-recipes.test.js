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
  getCandidateDefinitions,
  getRecipeDefinitions,
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
