const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'style-tiles.js'), 'utf8');
const thumbnailSource = fs.readFileSync(
  path.join(__dirname, '..', '..', '..', '..', 'components', 'preset-cards', 'thumbnails.js'),
  'utf8'
);

test('selecting the Parametric style tile clears stale 3D grid state', () => {
  assert.match(
    source,
    /getLayoutStyleSelection\( tile\.value, recipes, registeredDefaults \)/
  );
  assert.match(
    source,
    /onClick=\{ \(\) => setAttributes\( tile\.recipe[\s\S]*?: getLayoutStyleSelection\( tile\.value, recipes, registeredDefaults \) \) \}/
  );
});

test('renders registered layout recipes as first-class composition tiles', () => {
  assert.match( source, /useSettings\(\)/ );
  assert.match( source, /normalizeLayoutRecipes\( settings\?\.collectionLayoutRecipes \)/ );
  assert.match( source, /getSelectedCompositionId\( attributes, recipes \)/ );
  assert.match( source, /recipes\.map/ );
  assert.match( source, /getLayoutRecipeSelection\( tile\.recipe, recipes, registeredDefaults \)/ );
} );

test('resolves cleared composition attributes through the registered block defaults', () => {
  assert.match( source, /useRegisteredAttributeDefaults\( name \)/ );
} );

test('renders Collage recipes with the measured 1400px composition thumbnail', () => {
  assert.match( source, /CollageThumb,/ );
  assert.match( source, /case 'collage':\s*return <CollageThumb \/>/ );
  assert.match( thumbnailSource, /export const CollageThumb = \(\) =>/ );
  assert.match(
    thumbnailSource,
    /<Cell x=\{ 21 \} y=\{ 2 \} width=\{ 17 \} height=\{ 16 \} accent \/>[\s\S]*?<Cell x=\{ 40 \} y=\{ 4 \} width=\{ 17 \} height=\{ 15 \} \/>[\s\S]*?<Cell x=\{ 2 \} y=\{ 18 \} width=\{ 18 \} height=\{ 11 \} \/>[\s\S]*?<Cell x=\{ 23 \} y=\{ 20 \} width=\{ 17 \} height=\{ 11 \} \/>[\s\S]*?<Cell x=\{ 40 \} y=\{ 21 \} width=\{ 16 \} height=\{ 18 \} \/>/
  );
} );

test('renders Lattice recipes with the five-column Gallery thumbnail', () => {
  assert.match( source, /LatticeThumb,/ );
  assert.match( source, /case 'lattice':\s*return <LatticeThumb \/>/ );
  assert.match( thumbnailSource, /export const LatticeThumb = \(\) =>/ );
  assert.match(
    thumbnailSource,
    /<Cell x=\{ 2 \} y=\{ 2 \} width=\{ 21\.6 \} height=\{ 22 \} accent \/>[\s\S]*?<Cell x=\{ 25\.6 \} y=\{ 2 \} width=\{ 9\.8 \} height=\{ 10 \} \/>[\s\S]*?<Cell x=\{ 37\.4 \} y=\{ 2 \} width=\{ 9\.8 \} height=\{ 22 \} \/>[\s\S]*?<Cell x=\{ 25\.6 \} y=\{ 26 \} width=\{ 33\.4 \} height=\{ 12 \} \/>/
  );
} );

test('selecting a built-in composition clears a previously selected recipe', () => {
  assert.match(
    source,
    /getLayoutStyleSelection\( tile\.value, recipes, registeredDefaults \)/
  );
} );
