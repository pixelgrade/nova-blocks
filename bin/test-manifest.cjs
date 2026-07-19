const fs = require( 'node:fs' );
const path = require( 'node:path' );

const TEST_FILE_PATTERN = /\.(?:test|spec)\.(?:js|jsx|ts|tsx|cjs|mjs)$/;
const SKIPPED_DIRECTORIES = new Set( [
	'build',
	'build-module',
	'build-style',
	'dist',
	'node_modules',
] );

const JEST_COMPATIBILITY_TESTS = new Set( [
	'packages/block-editor/src/components/post-card/utils.test.js',
	'packages/color-signal/src/components/use-current-color-signal-attributes.test.js',
	'packages/color-signal/src/components/with-color-signal-props/index.test.js',
	'packages/color-signal/src/filters/core-button-save.test.js',
	'packages/color-signal/src/filters/with-color-signal-controls-memo.test.js',
	'packages/color-signal/src/filters/with-color-signal-toolbar.test.js',
	'packages/scrolling-effect/src/controls/end-frame-panel-live-preview.test.js',
	'packages/scrolling-effect/src/controls/start-frame-panel-live-preview.test.js',
	'packages/scrolling-effect/src/filters/with-scrolling-effect-controls.test.js',
	'packages/scrolling-effect/src/filters/with-scrolling-effect-provider.test.js',
] );

const normalizePath = file => file.split( path.sep ).join( '/' );

const isNodeTestSource = source =>
	/\brequire\s*\(\s*['"]node:test['"]\s*\)/.test( source ) ||
	/\bfrom\s*['"]node:test['"]/.test( source );

const walkTestFiles = ( root, directory, files ) => {
	if ( ! fs.existsSync( directory ) ) {
		return;
	}

	fs.readdirSync( directory, { withFileTypes: true } ).forEach( entry => {
		if ( entry.isDirectory() && SKIPPED_DIRECTORIES.has( entry.name ) ) {
			return;
		}

		const absolutePath = path.join( directory, entry.name );
		if ( entry.isDirectory() ) {
			walkTestFiles( root, absolutePath, files );
			return;
		}

		if ( entry.isFile() && TEST_FILE_PATTERN.test( entry.name ) ) {
			files.push( normalizePath( path.relative( root, absolutePath ) ) );
		}
	} );
};

const discoverTestManifest = root => {
	const allTests = [];
	[ 'lib', 'packages', 'tests' ].forEach( directory => {
		walkTestFiles( root, path.join( root, directory ), allTests );
	} );

	const manifest = {
		nodeTests: [],
		jestMainTests: [],
		jestCompatibilityTests: [],
	};

	allTests.sort().forEach( file => {
		const source = fs.readFileSync( path.join( root, file ), 'utf8' );

		if ( isNodeTestSource( source ) ) {
			manifest.nodeTests.push( file );
		} else if ( JEST_COMPATIBILITY_TESTS.has( file ) ) {
			manifest.jestCompatibilityTests.push( file );
		} else {
			manifest.jestMainTests.push( file );
		}
	} );

	return manifest;
};

module.exports = {
	discoverTestManifest,
	isNodeTestSource,
};
