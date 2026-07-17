const assert = require( 'node:assert/strict' );
const { execFileSync } = require( 'node:child_process' );
const path = require( 'node:path' );
const test = require( 'node:test' );

const root = path.resolve( __dirname, '../..' );
const {
	discoverTestManifest,
	isNodeTestSource,
} = require( '../../bin/test-manifest.cjs' );

const expectedCompatibilityTests = [
	'packages/block-editor/src/components/post-card/utils.test.js',
	'packages/color-signal/src/components/use-current-color-signal-attributes.test.js',
	'packages/color-signal/src/components/with-color-signal-props/index.test.js',
	'packages/color-signal/src/filters/with-color-signal-controls-memo.test.js',
	'packages/color-signal/src/filters/with-color-signal-toolbar.test.js',
	'packages/scrolling-effect/src/controls/end-frame-panel-live-preview.test.js',
	'packages/scrolling-effect/src/controls/start-frame-panel-live-preview.test.js',
	'packages/scrolling-effect/src/filters/with-scrolling-effect-controls.test.js',
	'packages/scrolling-effect/src/filters/with-scrolling-effect-provider.test.js',
].sort();

const getRepositoryTestFiles = () => execFileSync(
	'git',
	[ 'ls-files', '--cached', '--others', '--exclude-standard' ],
	{ cwd: root, encoding: 'utf8' }
)
	.trim()
	.split( '\n' )
	.filter( file => /\.(?:test|spec)\.(?:js|jsx|ts|tsx|cjs|mjs)$/.test( file ) )
	.sort();

test( 'node:test classification requires an executable import, not a comment', () => {
	assert.equal( isNodeTestSource( "const test = require( 'node:test' );" ), true );
	assert.equal( isNodeTestSource( "import test from 'node:test';" ), true );
	assert.equal( isNodeTestSource( '// Covered by the node:test source contract.' ), false );
} );

test( 'every JavaScript test file is assigned to exactly one runner bucket', () => {
	const manifest = discoverTestManifest( root );
	const assigned = [
		...manifest.nodeTests,
		...manifest.jestMainTests,
		...manifest.jestCompatibilityTests,
	].sort();

	assert.deepEqual( assigned, getRepositoryTestFiles() );
	assert.equal( new Set( assigned ).size, assigned.length );
} );

test( 'known Jest compatibility boundaries remain explicit and narrow', () => {
	const manifest = discoverTestManifest( root );

	assert.deepEqual( manifest.jestCompatibilityTests, expectedCompatibilityTests );
	assert.ok(
		manifest.jestMainTests.includes(
			'packages/scrolling-effect/src/controls/motion-recipes-managed.test.js'
		),
		'a node:test mention in prose must not misclassify a Jest suite'
	);
	assert.ok(
		manifest.nodeTests.includes(
			'packages/block-library/src/blocks/header/style.test.js'
		),
		'native node:test suites must stay out of Jest'
	);
} );
