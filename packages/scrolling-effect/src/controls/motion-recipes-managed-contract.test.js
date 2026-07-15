/**
 * Source contract for the managed-bundle wiring of motion-recipes.js —
 * companion to motion-recipes-gates.test.js (same style: the module cannot
 * be imported under jest because the bare `@novablocks/block-editor`
 * specifier hits the pre-existing haste-map collision, so the JSX wiring is
 * pinned at source level; the engine data semantics are pinned for real in
 * motion-recipes-managed.test.js).
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'motion-recipes.js'), 'utf8');

test('the tab builds ONE family boundary from the union of every rendered recipe group', () => {
  assert.match(
    source,
    /const allRecipes = \[\s*\.\.\.freeRecipes,\s*\.\.\.dopplerRecipes,\s*\.\.\.stackedDepthRecipes,\s*\.\.\.editorialDriftRecipes,\s*\]/
  );
  assert.match(source, /const \{ definitions \} = buildPresetDefinitions\( allRecipes \)/);
  assert.match(source, /const managedAttributes = getManagedAttributes\( definitions \)/);
});

test('every PresetCardsControl group gets the shared boundary and defers the Custom hint to the tab', () => {
  const controls = source.match(/<PresetCardsControl[\s\S]*?\/>/g) || [];
  assert.equal(controls.length, 4); // free + cinematic + stacked depth + editorial depth

  controls.forEach((control) => {
    assert.match(control, /managedAttributes=\{ managedAttributes \}/);
    assert.match(control, /hideCustomHint/);
  });
});

test('selection is derived tab-wide through the engine with the registered defaults', () => {
  assert.match(source, /useRegisteredAttributeDefaults\( name \)/);
  assert.match(
    source,
    /const activeRecipeId = deriveActivePresetId\( definitions, attributes, registeredDefaults \)/
  );
});

test('the tab renders exactly one Custom hint, only when no recipe matches', () => {
  const hints = source.match(/null === activeRecipeId[\s\S]*?nb-settings-hint[\s\S]*?Custom/g) || [];
  assert.equal(hints.length, 1);
});

test('no stored recipe identity: selection state never writes an attribute', () => {
  // The engine patch is the only write path; the module must not stash the
  // derived id into block attributes (rejected `presetId` provenance).
  assert.doesNotMatch(source, /setAttributes\(\s*\{[^}]*activeRecipeId/);
  assert.doesNotMatch(source, /recipeId:/);
});
