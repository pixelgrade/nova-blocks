const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'edit.js'), 'utf8');

test('editor heals stale slideshow hero content signal 0 states before preview render', () => {
  assert.match(
    source,
    /const shouldHealSlideshowHeroContentSignal = \( attributes \) => \{[\s\S]*?attributes\.showMedia[\s\S]*?attributes\.contentType === 'auto'[\s\S]*?attributes\.layoutStyle === 'carousel'[\s\S]*?attributes\.cardLayout === 'stacked'[\s\S]*?attributes\.align === 'full'[\s\S]*?parseInt\( attributes\.columns, 10 \) === 1[\s\S]*?parseInt\( attributes\.contentColorSignal, 10 \) === 0[\s\S]*?\};/
  );

  assert.match(
    source,
    /const getHealedSlideshowHeroContentSignalAttributes = \( attributes \) => \{[\s\S]*?contentColorSignal:\s*3,[\s\S]*?contentPaletteVariation:\s*getSlideshowHeroContentVariation\( attributes, 3 \)[\s\S]*?\};/
  );

  assert.match(
    source,
    /const previewAttributes = useMemo\(\s*\(\) => healedSlideshowHeroAttributes \? \{[\s\S]*?\.\.\.attributes,[\s\S]*?\.\.\.healedSlideshowHeroAttributes[\s\S]*?\} : attributes,\s*\[ attributes, healedSlideshowHeroAttributes \]\s*\);/
  );

  assert.match(
    source,
    /useEffect\(\s*\(\) => \{[\s\S]*?if \( healedSlideshowHeroAttributes \) \{[\s\S]*?setAttributes\( healedSlideshowHeroAttributes \);[\s\S]*?\}[\s\S]*?\},\s*\[ healedSlideshowHeroAttributes, setAttributes \]\s*\);/
  );
});
