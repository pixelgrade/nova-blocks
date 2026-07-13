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

test('editor keeps custom Cards Collection in card layout while allowing current item featured media', () => {
  assert.doesNotMatch(
    source,
    /contentType === 'current-post'/
  );

  assert.match(
    source,
    /!\[ 'fields', 'custom' \]\.includes\( attributes\.contentType \)/
  );

  assert.match(
    source,
    /onSelectCurrentItemFeaturedImage/
  );

  assert.match(
    source,
    /mediaSource:\s*CURRENT_ITEM_FEATURED_IMAGE_MEDIA_SOURCE/
  );

  assert.match(
    source,
    /inQuery\s*\?\s*<PostsCollectionLayout[\s\S]*?:\s*<CardsCollectionLayout/
  );
});

test('editor ignores stale 3D grid state outside stacked Classic Grid and Masonry layouts', () => {
  assert.match(
    source,
    /const supportsPile3dEffect = \[ 'classic', 'masonry' \]\.includes\( layoutStyle \)\s*&& cardLayout === 'stacked'\s*&& !! pile3dEffect;/
  );

  assert.match(
    source,
    /\{ 'nb-supernova--pile-3d': supportsPile3dEffect \}/
  );
});

test('editor exposes only a registered layout recipe class without replacing the Masonry engine class', () => {
  assert.match(
    source,
    /`nb-supernova--layout-\$\{ layoutStyle \}`/
  );

  assert.match(
    source,
    /settings\?\.collectionLayoutRecipes[\s\S]*?recipe\.id === attributes\.layoutRecipe/
  );

  assert.match(
    source,
    /const layoutRecipe = activeLayoutRecipe\?\.id \|\| '';[\s\S]*?`nb-supernova--layout-recipe-\$\{ layoutRecipe \}`[\s\S]*?!! layoutRecipe/
  );
} );

test('editor exposes Header Integration only for a registered capable recipe', () => {
	assert.match(
		source,
		/const headerIntegration = activeLayoutRecipe\?\.capabilities\?\.headerIntegration[\s\S]*?attributes\.headerIntegration \|\| 'standard'[\s\S]*?: undefined/
	);

  assert.match(
    source,
    /useBlockProps\( \{[\s\S]*?'data-header-integration': headerIntegration/
  );
} );

test('editor forwards registered layout recipes to both collection layout branches', () => {
  assert.match(
    source,
    /const collectionLayoutRecipes = settings\?\.collectionLayoutRecipes;/
  );

  assert.match(
    source,
    /<PostsCollectionLayout \{ \.\.\.props \} collectionLayoutRecipes=\{ collectionLayoutRecipes \}/
  );

  assert.match(
    source,
    /<CardsCollectionLayout \{ \.\.\.props \} collectionLayoutRecipes=\{ collectionLayoutRecipes \}/
  );
} );

test('editor resolves inherited card metadata style without coupling it to Meta Reveal', () => {
	assert.match(
		source,
		/const settings = useSettings\(\);[\s\S]*?const cardMetadataStyle = attributes\.cardMetadataStyle === 'inherit'[\s\S]*?activeLayoutRecipe[\s\S]*?settings\?\.cardMetadataStyleDefault \|\| 'plain'[\s\S]*?: 'plain'/
	);
  assert.match(
    source,
    /`nb-supernova--card-metadata-style-\$\{ cardMetadataStyle \}`[\s\S]*?cardMetadataStyle === 'accent-label'/
  );
  assert.match(
    source,
    /`nb-supernova--card-hover-\$\{ attributes\.cardHoverEffect \}`[\s\S]*?attributes\.cardHoverEffect !== 'none'/
  );
} );
