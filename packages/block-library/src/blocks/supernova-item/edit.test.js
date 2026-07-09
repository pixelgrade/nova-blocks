const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const itemEditSource = fs.readFileSync(path.join(__dirname, 'edit.js'), 'utf8');
const itemPreviewSource = fs.readFileSync(
  path.join(__dirname, '../supernova/components/supernova-item-preview/index.js'),
  'utf8'
);
const helperSourcePath = path.join(__dirname, '../supernova/utils/empty-hero-media-placeholder.js');

test('editor media renderers share the empty Hero Card media placeholder rule', () => {
  assert.ok(
    fs.existsSync(helperSourcePath),
    'expected a shared helper for suppressing empty Hero Card media placeholders'
  );

  assert.match(
    itemEditSource,
    /const parentAttributes = parent\?\.attributes \|\| \{\};/
  );

  assert.match(
    itemEditSource,
    /parentAttributes[\s\S]*?shouldSuppressEmptyHeroMediaPlaceholder\( attributes,\s*images,\s*parentAttributes \)[\s\S]*?return null;[\s\S]*?<MediaCompositionPreview/
  );

  assert.match(
    itemPreviewSource,
    /parentAttributes[\s\S]*?shouldSuppressEmptyHeroMediaPlaceholder\( attributes,\s*images,\s*parentAttributes \)[\s\S]*?return null;[\s\S]*?<MediaCompositionPreview/
  );
});
