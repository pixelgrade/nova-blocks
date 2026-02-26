/**
 * Patches Node 22 compatibility issues in dependencies.
 *
 * @wordpress/dependency-extraction-webpack-plugin uses asset.source.buffer()
 * which doesn't exist in some webpack-sources versions on Node 22.
 * This patch adds a fallback to Buffer.from(asset.source.source()).
 *
 * Run automatically via postinstall hook.
 */

const fs = require( 'fs' );
const path = require( 'path' );

const filesToPatch = [
	'node_modules/@wordpress/dependency-extraction-webpack-plugin/lib/index.js',
	'node_modules/@wordpress/scripts/node_modules/@wordpress/dependency-extraction-webpack-plugin/lib/index.js',
];

const search = 'asset.source.buffer()';
const replace = "(typeof asset.source.buffer === 'function' ? asset.source.buffer() : Buffer.from(asset.source.source()))";

filesToPatch.forEach( ( relPath ) => {
	const filePath = path.resolve( __dirname, '..', relPath );

	if ( ! fs.existsSync( filePath ) ) {
		return;
	}

	let content = fs.readFileSync( filePath, 'utf8' );

	if ( content.includes( search ) ) {
		content = content.replace( search, replace );
		fs.writeFileSync( filePath, content, 'utf8' );
		console.log( `Patched: ${ relPath }` );
	}
} );
