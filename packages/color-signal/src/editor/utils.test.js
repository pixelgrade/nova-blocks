const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const utilsPath = path.join(__dirname, 'utils.js');
const utilsSource = fs.readFileSync(utilsPath, 'utf8');

test('getUpdatedAttributes preserves the explicit content color signal value', () => {
  assert.match(
    utilsSource,
    /return\s*\{[\s\S]*contentColorSignal:\s*contentColorSignal,[\s\S]*contentPaletteVariation:\s*contentColorSignal === 0 \? finalVariation : nextContentVariation,[\s\S]*\}/
  );
} );
