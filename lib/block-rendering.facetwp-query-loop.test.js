const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'block-rendering.php'), 'utf8');

test('FacetWP template Query Loops opt their custom query into filtering', () => {
	assert.match(
		source,
		/function novablocks_mark_facetwp_query_loop_context\( \$parsed_block, \$source_block = null, \$parent_block = null \)/
	);
	assert.match(source, /if \( null !== \$parent_block \)[\s\S]*?return \$parsed_block/);
	assert.match(source, /if \( ! function_exists\( 'FWP' \) \)[\s\S]*?return \$parsed_block/);
	assert.match(source, /\$parsed_block\['blockName'\][\s\S]*?'core\/query'/);
	assert.match(
		source,
		/\$parsed_block\['attrs'\]\['className'\]/
	);
	assert.match(
		source,
		/in_array\( 'facetwp-template', \$class_names, true \)/
	);
	assert.match(
		source,
		/\$parsed_block\['attrs'\]\['query'\]\['facetwp'\] = true/
	);
	assert.match(
		source,
		/foreach \( \$parsed_block\['innerBlocks'\] as \$index => \$inner_block \)[\s\S]*?novablocks_mark_facetwp_query_loop_context\( \$inner_block \)/
	);
	assert.match(
		source,
		/add_filter\( 'render_block_data', 'novablocks_mark_facetwp_query_loop_context', 10, 3 \)/
	);
	assert.match(
		source,
		/function novablocks_enable_facetwp_query_loop\( array \$query, \$block, int \$page \): array/
	);
	assert.match(source, /function_exists\( 'FWP' \)/);
	assert.match(source, /\$block->context\['query'\]\['facetwp'\]/);
	assert.match(source, /\$query\['facetwp'\] = true/);
	assert.match(
		source,
		/add_filter\( 'query_loop_block_query_vars', 'novablocks_enable_facetwp_query_loop', 10, 3 \)/
	);
});
