const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;

test('Content Details exposes a site-inherited metadata appearance override', () => {
  const inspectorSource = fs.readFileSync(path.join(root, 'inspector-controls.js'), 'utf8');
  const componentIndexSource = fs.readFileSync(path.join(root, 'components', 'index.js'), 'utf8');
  const metadataStylePath = path.join(root, 'components', 'metadata-style.js');

  assert.equal(fs.existsSync(metadataStylePath), true, 'Metadata Style control must exist');
  const metadataStyleSource = fs.readFileSync(metadataStylePath, 'utf8');

  assert.match(inspectorSource, /MetadataStyle/);
  assert.match(componentIndexSource, /MetadataStyle/);
  assert.match(metadataStyleSource, /label=\{ __\( 'Metadata Style'/);
  assert.match(metadataStyleSource, /value: 'inherit'/);
  assert.match(metadataStyleSource, /value: 'plain'/);
  assert.match(metadataStyleSource, /value: 'accent-label'/);
  assert.match(metadataStyleSource, /setAttributes\( \{ cardMetadataStyle \} \)/);
  assert.doesNotMatch(metadataStyleSource, /Anima/);
  assert.match(metadataStyleSource, /Use the site-wide style or override this collection\./);
});
