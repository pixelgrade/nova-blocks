const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('Sharing System registers every color-signal attribute used by its editor and renderer', () => {
	const metadata = JSON.parse(fs.readFileSync(path.join(__dirname, 'block.json'), 'utf8'));

	assert.equal(metadata.supports.novaBlocks.colorSignal.attributes, true);
});
