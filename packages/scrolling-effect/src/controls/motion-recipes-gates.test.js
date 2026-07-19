const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'motion-recipes.js'), 'utf8');
const controlsSource = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');

test('the active collection recipe capability governs every cards-motion surface', () => {
  [ source, controlsSource ].forEach((currentSource) => {
    assert.match(currentSource, /normalizeLayoutRecipes/);
    assert.match(currentSource, /layoutRecipeSupports/);
    assert.match(currentSource, /collectionLayoutRecipes/);
    assert.match(currentSource, /'pile3d'/);
  });

  assert.match(
    source,
    /const hasCollectionDepth = blockSupportsCollectionDepth && supportsPile3d/
  );
  assert.match(
    controlsSource,
    /const hasCollectionDepth = blockSupportsCollectionDepth && supportsPile3d/
  );
});

test('card-depth motion recipes use advanced-controls trial gates', () => {
  assert.match(
    source,
    /<TryAndPlay gateId=\{ 'motion-recipes' \}>[\s\S]*?options=\{ dopplerRecipes \}/
  );
  assert.match(
    source,
    /<TryAndPlay gateId=\{ 'stacked-depth' \}>[\s\S]*?options=\{ stackedDepthRecipes \}/
  );
  assert.match(
    source,
    /<TryAndPlay gateId=\{ 'parametric-depth' \}>[\s\S]*?options=\{ editorialDriftRecipes \}/
  );
});

test('the gated recipe groups merge into one Try & Play boundary per tab', () => {
  // A single group wraps every gated recipe block (one boundary per tab).
  const groupMatches = source.match(/<TryAndPlayGroup gateIds=\{/g) || [];
  assert.equal(groupMatches.length, 1);
  assert.match(
    source,
    /<TryAndPlayGroup gateIds=\{[\s\S]*?<TryAndPlay gateId=\{ 'motion-recipes' \}>[\s\S]*?<TryAndPlay gateId=\{ 'stacked-depth' \}>[\s\S]*?<TryAndPlay gateId=\{ 'parametric-depth' \}>[\s\S]*?<\/TryAndPlayGroup>/
  );

  // Only groups that actually render join the boundary — a gate the user
  // never sees must not get pre-revealed by the group CTA.
  assert.match(source, /dopplerRecipes\.length \? \[ 'motion-recipes' \] : \[\]/);
  assert.match(source, /stackedDepthRecipes\.length \? \[ 'stacked-depth' \] : \[\]/);
  assert.match(source, /editorialDriftRecipes\.length \? \[ 'parametric-depth' \] : \[\]/);
});

test('each merged group keeps its own uppercase label inside the boundary', () => {
  assert.match(
    source,
    /<PresetCardsControl label=\{ __\( 'Cinematic presets', '__plugin_txtd' \) \} options=\{ dopplerRecipes \}/
  );
  assert.match(
    source,
    /<PresetCardsControl label=\{ __\( 'Depth presets', '__plugin_txtd' \) \} options=\{ stackedDepthRecipes \}/
  );
  assert.match(
    source,
    /<PresetCardsControl label=\{ __\( 'Depth presets', '__plugin_txtd' \) \} options=\{ editorialDriftRecipes \}/
  );
});
