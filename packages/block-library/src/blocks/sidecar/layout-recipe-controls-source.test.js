/**
 * Source contract for the recipe picker's editor wiring — companion to the
 * data/logic contract in layout-recipes.test.js (same split as the Motion
 * family: the JSX module imports the bare `@novablocks/block-editor` specifier,
 * which hits the jest haste-map collision, so its wiring is pinned at source
 * level with node:test).
 */
const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const source = fs.readFileSync( path.join( __dirname, 'layout-recipe-controls.js' ), 'utf8' );

test( 'selection is DERIVED through the engine over the structurally-filtered candidates', () => {
  assert.match( source, /useRegisteredAttributeDefaults\( name \)/ );
  assert.match(
    source,
    /deriveActivePresetId\(\s*getCandidateDefinitions\(\s*signature\s*\),\s*attributes,\s*registeredDefaults\s*\)/
  );
} );

test( 'the managed decision is exactly one engine patch', () => {
  assert.match(
    source,
    /getPresetApplyPatch\(\s*\{\s*id:\s*recipe\.id,\s*managedAttributes:\s*SIDECAR_LAYOUT_MANAGED_ATTRIBUTES,\s*values:\s*recipe\.values\s*\},\s*attributes\s*\)/
  );
} );

test( 'recipe apply uses the shared one-patch / one-replacement coordinator', () => {
  assert.match( source, /applySidecarLayoutChange\(\s*\{/ );
  assert.match( source, /targetSignature:\s*recipe\.signature/ );
  // No cross-apply stash survives the replaceBlock remount — one undo covers it.
  assert.doesNotMatch( source, /railStash/ );
  const applyBody = source.slice( source.indexOf( 'const applyRecipe' ) );

  assert.match( applyBody, /cloneBlock,/ );
  assert.match( applyBody, /createBlock,/ );
  assert.match( applyBody, /replaceBlock,/ );
  assert.match( applyBody, /setAttributes,/ );
  assert.doesNotMatch( applyBody, /reconcileAreas/ );
  // The rejected non-atomic sequence must not return.
  assert.doesNotMatch( source, /__unstableMarkNextChangeAsNotPersistent/ );
} );

test( 'structure is coordinated, never patched: the managed patch never carries an area attribute', () => {
  assert.doesNotMatch( source, /values:\s*\{[^}]*areaName/ );
  assert.match( source, /applySidecarLayoutChange\(/ );
} );

test( 'no stored recipe identity: the derived id never becomes an attribute write', () => {
  assert.doesNotMatch( source, /setAttributes\(\s*\{[^}]*activeRecipeId/ );
  assert.doesNotMatch( source, /recipeId:/ );
} );

test( 'renders one Custom hint, only when no recipe matches', () => {
  const hints = source.match( /null === activeRecipeId[\s\S]*?nb-settings-hint[\s\S]*?Custom/g ) || [];
  assert.equal( hints.length, 1 );
} );

test( 'recipes that request an ancestor-reserved rail are focusable but guarded with a visible reason', () => {
  assert.match(
    source,
    /const ancestorRailReservations = useAncestorRailReservations\(\s*clientId\s*\)/
  );
  assert.match(
    source,
    /const isUnavailable = doesSidecarSignatureConflictWithReservations\(\s*recipe\.signature,\s*ancestorRailReservations\s*\)/
  );
  assert.match( source, /aria-disabled=\{\s*isUnavailable\s*\}/ );
  assert.match( source, /aria-label=\{\s*meta\.label\s*\}/ );
  assert.match( source, /aria-describedby=\{\s*descriptionId\s*\}/ );
  assert.match(
    source,
    /onClick=\{\s*\(\)\s*=>\s*\{\s*if\s*\(\s*!\s*isUnavailable\s*\)\s*\{\s*applyRecipe\(\s*recipe\s*\)/
  );
  assert.match( source, /Unavailable: parent rail/ );
} );

test( 'an already-conflicting layout shows a non-dismissible warning without migrating it', () => {
  assert.match(
    source,
    /const hasAncestorRailConflict = doesSidecarSignatureConflictWithReservations\(\s*signature,\s*ancestorRailReservations\s*\)/
  );
  assert.match(
    source,
    /hasAncestorRailConflict[\s\S]*?<Notice[\s\S]*?status="warning"[\s\S]*?isDismissible=\{\s*false\s*\}/
  );
  assert.doesNotMatch( source, /replaceBlock\([^)]*hasAncestorRailConflict/ );
} );
