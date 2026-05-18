const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const editorStylesPath = path.join(__dirname, 'editor-styles.scss');
const editorStylesSource = fs.readFileSync(editorStylesPath, 'utf8');

test('spacing preview pseudos are only created while the preview is visible', () => {
  assert.doesNotMatch(
    editorStylesSource,
    /&:before,\s*&:after\s*\{[\s\S]*?opacity:\s*0;/
  );

  assert.match(
    editorStylesSource,
    /&--visible\s*\{[\s\S]*?&:before,\s*&:after\s*\{[\s\S]*?content:\s*"";[\s\S]*?position:\s*absolute;/
  );
} );
