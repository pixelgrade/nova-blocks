const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const test = require( 'node:test' );

const root = path.resolve( __dirname, '../..' );
const read = file => fs.readFileSync( path.join( root, file ), 'utf8' );

test( 'package scripts separate fast, full, and live WordPress suites', () => {
	const { scripts } = JSON.parse( read( 'package.json' ) );

	assert.equal( scripts.test, 'npm run test:fast' );
	assert.equal( scripts[ 'test:fast' ], 'bash ./bin/run-tests.sh' );
	assert.equal( scripts[ 'test:all' ], 'npm run test:fast && npm run test:wp' );
	assert.equal( scripts[ 'test:wp' ], 'bash ./bin/run-wp-tests.sh' );
} );

test( 'the pre-commit shell delegates to the consolidated runner', () => {
	const source = read( 'bin/run-tests.sh' );

	assert.match( source, /exec node \.\/bin\/run-fast-tests\.cjs/ );
	assert.doesNotMatch( source, /npx .*jest/ );
	assert.doesNotMatch( source, /node --test/ );
} );

test( 'the full WordPress runner discovers every live contract', () => {
	const source = read( 'bin/run-wp-tests.sh' );

	assert.match( source, /tests\/wp-eval\/\*\.php/ );
	assert.match( source, /run-wp-eval\.sh/ );
} );
