const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'init.php'), 'utf8');

test('slideshow hero workaround heals stale content signal 0 states', () => {
  assert.match(
    source,
    /function novablocks_should_heal_slideshow_hero_content_signal\( array \$attributes \): bool \{[\s\S]*?\$attributes\['contentType'\] === 'auto'[\s\S]*?\$attributes\['layoutStyle'\] === 'carousel'[\s\S]*?\$attributes\['cardLayout'\] === 'stacked'[\s\S]*?\$attributes\['align'\] === 'full'[\s\S]*?\(int\) \$attributes\['columns'\] === 1[\s\S]*?\(int\) \$attributes\['contentColorSignal'\] === 0[\s\S]*?\}/
  );

  assert.match(
    source,
    /if \( novablocks_should_heal_slideshow_hero_content_signal\( \$attributes \) \) \{[\s\S]*?\$attributes\['contentColorSignal'\]\s+= 3;[\s\S]*?\$attributes\['contentPaletteVariation'\]\s+= novablocks_get_content_variation\( \$attributes \);[\s\S]*?\}/
  );
});
