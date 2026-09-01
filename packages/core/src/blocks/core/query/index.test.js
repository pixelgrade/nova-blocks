const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');

test('Pixelgrade Filters Query Loops warn when paired with core Query Pagination', () => {
	assert.match(
		source,
		/export const hasClassName = \( className, targetClassName \) => \{[\s\S]*?split\( \/\\s\+\/ \)[\s\S]*?includes\( targetClassName \)/
	);

	assert.match(
		source,
		/export const hasInnerBlock = \( blocks = \[\], blockName \) => \{[\s\S]*?block\.name === blockName[\s\S]*?hasInnerBlock\( block\.innerBlocks \|\| \[\], blockName \)/
	);

	assert.match(
		source,
		/export const isUnsupportedFacetwpQueryPaginationPairing = \( block \) => \{[\s\S]*?block\.name !== 'core\/query'[\s\S]*?hasClassName\( block\.attributes\?\.className, 'facetwp-template' \)[\s\S]*?hasInnerBlock\( block\.innerBlocks \|\| \[\], 'core\/query-pagination' \)/
	);

	assert.match(
		source,
		/<Warning>[\s\S]*?Replace Query Pagination with Filter Pagination\. Pixelgrade Filters listings need a Pager facet so pagination follows filtered results\./
	);

	assert.doesNotMatch( source, /Nova FacetWP Pager|FacetWP templates/ );
});
