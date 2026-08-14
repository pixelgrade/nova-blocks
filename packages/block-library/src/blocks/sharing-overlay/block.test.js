const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const read = ( file ) => fs.readFileSync( path.join( __dirname, file ), 'utf8' );

test('Sharing System registers every color-signal attribute used by its editor and renderer', () => {
	const metadata = JSON.parse( read( 'block.json' ) );

	assert.equal(metadata.supports.novaBlocks.colorSignal.attributes, true);
	assert.equal(metadata.supports.novaBlocks.colorSignal.controls, true);
});

test('Sharing System owns one locked core Buttons trigger and saves its inner content', () => {
	const metadata = JSON.parse( read( 'block.json' ) );
	const editSource = read( 'edit.js' );
	const indexSource = read( 'index.js' );

	assert.deepEqual( metadata.allowedBlocks, [ 'core/buttons' ] );
	assert.match( editSource, /useInnerBlocksProps/ );
	assert.match( editSource, /className:\s*['"]novablocks-sharing__trigger['"]/ );
	assert.match( editSource, /templateLock:\s*['"]all['"]/ );
	assert.match( indexSource, /<InnerBlocks\.Content\s*\/>/ );
	assert.doesNotMatch( indexSource, /return null/ );
});

test('Sharing System leaves the trigger label and appearance to the inner Button', () => {
	const controlsSource = read( 'controls.js' );

	assert.doesNotMatch( controlsSource, /TextControl/ );
	assert.doesNotMatch( controlsSource, /Button Label/ );
});
