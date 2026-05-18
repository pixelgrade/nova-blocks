const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const projectRoot = path.resolve( __dirname, '..' );
const blocksDir = path.join( projectRoot, 'packages/block-library/src/blocks' );

const manualRegistrations = [
	'hero/index.js',
	'openhours/index.js',
	'opentable/index.js',
	'menu-food/menu-food-section/index.js',
	'menu-food/menu-food-item/index.js',
];

test( 'all block metadata uses Block API v3', () => {
	const blockJsonFiles = fs.readdirSync( blocksDir, { withFileTypes: true } )
		.filter( entry => entry.isDirectory() )
		.map( entry => path.join( blocksDir, entry.name, 'block.json' ) )
		.filter( file => fs.existsSync( file ) );

	assert.ok( blockJsonFiles.length > 0, 'expected block.json files to be present' );

	for ( const file of blockJsonFiles ) {
		const metadata = JSON.parse( fs.readFileSync( file, 'utf8' ) );
		assert.equal( metadata.apiVersion, 3, `${ path.relative( projectRoot, file ) } should use apiVersion 3` );
	}
} );

test( 'manual block registrations use Block API v3', () => {
	for ( const registrationFile of manualRegistrations ) {
		const file = path.join( blocksDir, registrationFile );
		const source = fs.readFileSync( file, 'utf8' );

		assert.match(
			source,
			/apiVersion:\s*3/,
			`${ path.relative( projectRoot, file ) } should register apiVersion 3`
		);
	}
} );

test( 'generated sidebar blocks use Block API v3', () => {
	const file = path.join( projectRoot, 'lib/sidebars-blocks/class-nova_blocks-sidebars_blocks.php' );
	const source = fs.readFileSync( file, 'utf8' );

	assert.match(
		source,
		/'api_version'\s*=>\s*3/,
		`${ path.relative( projectRoot, file ) } should register api_version 3`
	);
} );

test( 'legacy PHP fallback block registrations use Block API v3', () => {
	const file = path.join( projectRoot, 'lib/client-assets.php' );
	const source = fs.readFileSync( file, 'utf8' );

	assert.match(
		source,
		/register_block_type\(\s*'novablocks\/' \. \$block,\s*array_merge\(\s*\$args,\s*\[\s*'api_version'\s*=>\s*3,/,
		`${ path.relative( projectRoot, file ) } should pass api_version 3 to register_block_type()`
	);
} );

test( 'editor preferences do not bundle the unstable interface package', () => {
	const file = path.join( projectRoot, 'packages/block-editor/src/preferences/space-and-sizing-preview.js' );
	const source = fs.readFileSync( file, 'utf8' );

	assert.doesNotMatch(
		source,
		/@wordpress\/interface/,
		`${ path.relative( projectRoot, file ) } should avoid duplicate core/interface store registration`
	);
} );
