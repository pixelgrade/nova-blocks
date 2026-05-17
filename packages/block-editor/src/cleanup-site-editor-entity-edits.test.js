const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'cleanup-site-editor-entity-edits.js'), 'utf8');

test('site editor cleanup only clears no-op serialized content edits', () => {
  assert.match(
    source,
    /export const shouldClearSerializedContentEdit = \( record, editedRecord, nonTransientEdits \) => \{[\s\S]*?editKeys\.length !== 1 \|\| editKeys\[0\] !== 'content'[\s\S]*?persistedContent === editedContent/
  );

  assert.match(
    source,
    /getEntityRecordNonTransientEdits\( kind, name, key \)[\s\S]*?shouldClearSerializedContentEdit\( record, editedRecord, nonTransientEdits \)[\s\S]*?clearEntityRecordEdits\( kind, name, key \)/
  );
});

test('site editor cleanup is limited to template and template-part post entities', () => {
  assert.match(
    source,
    /const SITE_EDITOR_ENTITY_NAMES = \[ 'wp_template', 'wp_template_part' \]/
  );

  assert.match(
    source,
    /kind !== 'postType' \|\| ! SITE_EDITOR_ENTITY_NAMES\.includes\( name \)/
  );

  assert.match(
    source,
    /window\.pagenow === 'site-editor'/
  );
});

test('site editor cleanup runs on load and after data store changes', () => {
  assert.match(
    source,
    /scheduleCleanup\( cleanupSiteEditorEntityEdits \)/
  );

  assert.match(
    source,
    /subscribe\( \(\) => \{[\s\S]*?scheduleCleanup\( \(\) => \{[\s\S]*?cleanupSiteEditorEntityEdits\(\)/
  );
});
