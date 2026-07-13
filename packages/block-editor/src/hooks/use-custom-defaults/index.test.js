const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');

test('useCustomDefaults accepts a custom predicate while preserving the defaultsGenerated fallback', () => {
  assert.match(
    source,
    /const shouldGenerateDefaultAttributes = \( attributes \) => ! attributes\.defaultsGenerated;/
  );

  assert.match(
    source,
    /const useCustomDefaults = \( clientId,\s*attributes,\s*getNewDefaults,\s*shouldGenerateDefaults = shouldGenerateDefaultAttributes \) =>/
  );

  assert.match(
    source,
    /if \( shouldGenerateDefaults\( attributes \) \) \{[\s\S]*?getNewDefaults\( attributes \)\.then/
  );
});

test('generated defaults do not create a separate undo history entry', () => {
  assert.match(
    source,
    /const \{ updateBlockAttributes, __unstableMarkNextChangeAsNotPersistent \} = useDispatch\( 'core\/block-editor' \);/
  );

  assert.match(
    source,
    /getNewDefaults\( attributes \)\.then\( defaults => \{[\s\S]*?__unstableMarkNextChangeAsNotPersistent\(\);[\s\S]*?updateBlockAttributes\( clientId, \{/
  );
});
