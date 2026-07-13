const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'style-tiles.js'), 'utf8');

test('selecting the Parametric style tile clears stale 3D grid state', () => {
  assert.match(
    source,
    /const getStyleTileAttributes = \( layoutStyle \) => \{[\s\S]*?'parametric' === layoutStyle[\s\S]*?pile3dEffect:\s*false/
  );
  assert.match(
    source,
    /onClick=\{ \(\) => setAttributes\( tile\.recipe[\s\S]*?: getStyleTileAttributes\( tile\.value \) \) \}/
  );
});

test('renders registered layout recipes as first-class composition tiles', () => {
  assert.match( source, /useSettings\(\)/ );
  assert.match( source, /normalizeLayoutRecipes\( settings\?\.collectionLayoutRecipes \)/ );
  assert.match( source, /getSelectedCompositionId\( attributes, recipes \)/ );
  assert.match( source, /recipes\.map/ );
  assert.match( source, /getLayoutRecipeSelection\( tile\.recipe \)/ );
} );

test('selecting a built-in composition clears a previously selected recipe', () => {
  assert.match(
    source,
    /return \{ layoutStyle, layoutRecipe: '', headerIntegration: 'standard' \}/
  );
} );
