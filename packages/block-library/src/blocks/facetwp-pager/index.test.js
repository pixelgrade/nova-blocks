const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const blockDir = __dirname;

test('FacetWP pager is a standalone block for replacing Query Pagination blocks', () => {
	const metadata = JSON.parse(fs.readFileSync(path.join(blockDir, 'block.json'), 'utf8'));
	const attributes = JSON.parse(fs.readFileSync(path.join(blockDir, 'attributes.json'), 'utf8'));
	const source = fs.readFileSync(path.join(blockDir, 'edit.js'), 'utf8');

	assert.equal(metadata.name, 'novablocks/facetwp-pager');
	assert.equal(metadata.apiVersion, 3);
	assert.equal(metadata.parent, undefined, 'Pager must be insertable outside the facetwp-template listing');
	assert.deepEqual(attributes.facet, {
		type: 'string',
		default: '',
	});
	assert.match(source, /currentFacet\.type === 'pager'/);
	assert.match(source, /Create a FacetWP Pager facet/);
});

test('FacetWP pager render callback only outputs configured Pager facets', () => {
	const source = fs.readFileSync(path.join(blockDir, 'init.php'), 'utf8');

	assert.match(source, /function novablocks_get_facetwp_pager_attributes\(\)/);
	assert.match(source, /function novablocks_render_facetwp_pager_block\( array \$attributes, string \$content, WP_Block \$block \)/);
	assert.match(source, /\$active_facet\['type'\]\s*!==\s*'pager'/);
	assert.match(source, /class="nb-facetwp-pager wp-block-query-pagination"/);
	assert.match(source, /do_shortcode\( '\[facetwp facet="' \. esc_attr\( \$attributes\['facet'\] \) \. '"\]' \)/);
});
