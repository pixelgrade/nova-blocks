const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const forbiddenProp = [ '__next', '40pxDefaultSize' ].join( '' );

function getSourceFiles( directory ) {
	return fs.readdirSync( directory, { withFileTypes: true } ).flatMap( ( entry ) => {
		const filePath = path.join( directory, entry.name );

		if ( entry.isDirectory() ) {
			return getSourceFiles( filePath );
		}

		if ( entry.isFile() && /\.(?:js|jsx)$/.test( entry.name ) && ! entry.name.endsWith( '.test.js' ) ) {
			return [ filePath ];
		}

		return [];
	} );
}

test( 'does not pass component sizing flags ignored by WordPress 7.1', () => {
	for ( const filePath of getSourceFiles( __dirname ) ) {
		const source = fs.readFileSync( filePath, 'utf8' );

		assert.equal(
			source.includes( forbiddenProp ),
			false,
			`${ path.relative( __dirname, filePath ) } still passes ${ forbiddenProp }`
		);
	}
} );
