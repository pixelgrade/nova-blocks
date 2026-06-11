const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'block-rendering.php'), 'utf8');

test('server-rendered Query Loop collections honor FacetWP pagination vars', () => {
	assert.match(source, /function novablocks_get_facetwp_paged_query_var\(\): int/);
	assert.match(source, /FWP\(\)->request->url_vars\['paged'\]/);
	assert.match(source, /\$prefix \. 'paged'/);
	assert.match(source, /function novablocks_get_query_loop_page\( \$block \): int/);
	assert.match(source, /novablocks_get_facetwp_paged_query_var\(\)/);
	assert.match(source, /gutenberg_build_query_vars_from_query_block\( \$block, \$page \)/);
});
