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

test('editor regenerates stale empty media defaults for Supernova items', () => {
  assert.match(
    itemEditSource,
    /const shouldGenerateSupernovaItemDefaults = attributes =>[\s\S]*?! attributes\.defaultsGenerated[\s\S]*?attributes\.showMedia[\s\S]*?! isCurrentItemFeaturedImageMediaSource\( attributes \)[\s\S]*?Array\.isArray\( attributes\.images \)[\s\S]*?! attributes\.images\.length[\s\S]*?\);/
  );

  assert.match(
    itemEditSource,
    /useCustomDefaults\( clientId,\s*attributes,\s*getUniqueNewDefaults,\s*shouldGenerateSupernovaItemDefaults \);/
  );
});

test('editor media renderers resolve local placeholder images from current color signal attributes', () => {
  assert.match(
    itemEditSource,
    /resolveLocalPlaceholderImages/
  );

  assert.match(
    itemEditSource,
    /resolveLocalPlaceholderImages\( rawImages,\s*attributes \)/
  );

  assert.match(
    itemPreviewSource,
    /resolveLocalPlaceholderImages/
  );

  assert.match(
    itemPreviewSource,
    /resolveLocalPlaceholderImages\( rawImages,\s*attributes \)/
  );
});

test('blank cards generate defaults against images already used by sibling cards', () => {
  assert.match(
    itemEditSource,
    /const siblingImages = useMemo\( \(\) => getUsedPlaceholderImages\([\s\S]*?innerBlocks\.filter\( block => block\.clientId !== clientId \)[\s\S]*?\), \[ clientId, innerBlocks \] \);/
  );

  assert.match(
    itemEditSource,
    /return getNewDefaults\( nextAttributes, siblingImages \);[\s\S]*?useCustomDefaults\( clientId, attributes, getUniqueNewDefaults, shouldGenerateSupernovaItemDefaults \);/
  );
});

test('Content Details metadata order preserves Primary and Secondary role classes', () => {
  assert.match(
    itemEditSource,
    /className=\{ `nb-card__meta is-style-meta nb-card__meta--\$\{ primaryFirst \? 'primary' : 'secondary' \}` \}/
  );
  assert.match(
    itemEditSource,
    /className=\{ `nb-card__meta is-style-meta nb-card__meta--\$\{ primaryFirst \? 'secondary' : 'primary' \}` \}/
  );
  assert.match(itemEditSource, /className="nb-card__meta is-style-meta nb-card__meta--primary"/);
  assert.match(itemEditSource, /className="nb-card__meta is-style-meta nb-card__meta--secondary"/);
});
