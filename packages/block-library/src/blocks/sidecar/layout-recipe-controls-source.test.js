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

test( 'structure-matching apply is one setAttributes patch; structure-changing apply is one atomic replaceBlock', () => {
  assert.match( source, /reconcileAreas\(\s*innerBlocks,\s*recipe,\s*patch\.sidebarPosition,\s*railStash\.current\s*\)/ );
  const applyBody = source.slice( source.indexOf( 'const applyRecipe' ) );

  // Structure changes → replaceBlock swapping a fresh Sidecar that embeds the patch.
  assert.match(
    applyBody,
    /replaceBlock\(\s*clientId,\s*createBlock\(\s*'novablocks\/sidecar',\s*\{\s*\.\.\.attributes,\s*\.\.\.patch\s*\},\s*reconciled\s*\)\s*\)/
  );
  // Structure matches → a single attribute patch (the fine-tune path).
  assert.match( applyBody, /setAttributes\(\s*patch\s*\)/ );
  // The rejected non-atomic sequence must not return.
  assert.doesNotMatch( source, /__unstableMarkNextChangeAsNotPersistent/ );
} );

test( 'structure is coordinated, never patched: the managed patch never carries an area attribute', () => {
  assert.doesNotMatch( source, /values:\s*\{[^}]*areaName/ );
  // Rail structure moves via a coordinated replaceBlock, not the attribute patch.
  assert.match( source, /replaceBlock\(/ );
} );

test( 'no stored recipe identity: the derived id never becomes an attribute write', () => {
  assert.doesNotMatch( source, /setAttributes\(\s*\{[^}]*activeRecipeId/ );
  assert.doesNotMatch( source, /recipeId:/ );
} );

test( 'renders one Custom hint, only when no recipe matches', () => {
  const hints = source.match( /null === activeRecipeId[\s\S]*?nb-settings-hint[\s\S]*?Custom/g ) || [];
  assert.equal( hints.length, 1 );
} );
