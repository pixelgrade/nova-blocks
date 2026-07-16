const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const root = path.resolve( __dirname, '../..' );
const utilsSource = fs.readFileSync(
	path.join( root, 'packages/utils/src/index.js' ),
	'utf8'
);
const cleanupSource = fs.readFileSync(
	path.join( root, 'packages/block-editor/src/cleanup-site-editor-entity-edits.js' ),
	'utf8'
);

test( 'editor bootstrap tolerates scripts executing before document.body exists', () => {
	assert.match(
		utilsSource,
		/document\.body\?\.classList\.contains\( 'block-editor-page' \)/
	);
	assert.match(
		utilsSource,
		/document\.body\?\.classList\.contains\( 'wp-customizer' \)/
	);
	assert.match(
		cleanupSource,
		/document\.body\?\.classList\.contains\( 'site-editor-php' \)/
	);
} );
