const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'motion-recipes.js'), 'utf8');

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
