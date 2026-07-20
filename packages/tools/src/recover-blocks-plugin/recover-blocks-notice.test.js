const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');
const recoverSource = fs.readFileSync(path.join(__dirname, 'recover-blocks.js'), 'utf8');

test('recover blocks plugin no longer registers a sidebar', () => {
  assert.doesNotMatch(source, /PluginSidebar/);
  assert.doesNotMatch(source, /Recover Blocks</);
});

test('invalid blocks are detected through block-editor validation state', () => {
  assert.match(
    source,
    /getClientIdsWithDescendants, isBlockValid[\s\S]*?getClientIdsWithDescendants\(\)[\s\S]*?! isBlockValid\( clientId \)/
  );
});

test('a pinned warning notice offers recovery for all invalid blocks', () => {
  assert.match(source, /const NOTICE_ID = 'novablocks-recover-blocks'/);

  assert.match(
    source,
    /createWarningNotice\([\s\S]*?id: NOTICE_ID,[\s\S]*?isDismissible: true,[\s\S]*?actions: \[[\s\S]*?onClick: onRecoverAll/
  );

  assert.match(source, /recoverAllBlocks\(\)/);
});

test('the notice is removed once no invalid blocks remain', () => {
  assert.match(
    source,
    /if \( ! invalidCount \) \{[\s\S]*?removeNotice\( NOTICE_ID \)/
  );
});

test('recovery is confirmed with a snackbar success notice', () => {
  assert.match(
    source,
    /createSuccessNotice\([\s\S]*?type: 'snackbar'/
  );
});

test('recovery operates on the live block-editor store, never a re-parsed tree', () => {
  // `core/editor` getEditorBlocks() re-parses unedited posts into a detached
  // tree with fresh clientIds, making replaceBlock a silent no-op.
  assert.doesNotMatch(recoverSource, /select\( ['"]core\/editor['"] \)|getEditorBlocks\(\)/);

  assert.match(
    recoverSource,
    /getClientIdsWithDescendants\(\)[\s\S]*?! isBlockValid\( clientId \)/
  );

  assert.match(
    recoverSource,
    /replaceBlock\( clientId, createBlock\( name, attributes, innerBlocks \) \)/
  );
});

test('recovery replaces deepest blocks first and reports the attempted count', () => {
  assert.match(recoverSource, /invalidClientIds[\s\S]*?\.reverse\(\)/);
  assert.match(recoverSource, /return invalidClientIds\.length/);
});
