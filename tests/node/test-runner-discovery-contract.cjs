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
	'packages/color-signal/src/filters/core-button-save.test.js',
	'packages/color-signal/src/filters/with-color-signal-controls-memo.test.js',
	'packages/color-signal/src/filters/with-color-signal-toolbar.test.js',
	'packages/scrolling-effect/src/controls/end-frame-panel-live-preview.test.js',
	'packages/scrolling-effect/src/controls/start-frame-panel-live-preview.test.js',
	'packages/scrolling-effect/src/filters/with-scrolling-effect-controls.test.js',
	'packages/scrolling-effect/src/filters/with-scrolling-effect-provider.test.js',
].sort();

// `tools/` holds SEPARATELY-INSTALLED agent-tools packages (today: `tools/agent-harness`, the W4
// canonical serializer). They are deliberately not part of the plugin distributable, they carry
// their own dependency tree, and they run their own `npm test` — running them from the plugin's
// suite would fail on any machine that has not `npm ci`-ed them, which is most machines. The
// exclusion is paired with `every tools/ package owns its test runner` below, so it cannot quietly
// become a place where untested test files accumulate.
const isSeparatelyInstalledPackage = file => file.startsWith( 'tools/' );

const getRepositoryTestFiles = () => execFileSync(
	'git',
	[ 'ls-files', '--cached', '--others', '--exclude-standard' ],
	{ cwd: root, encoding: 'utf8' }
)
	.trim()
	.split( '\n' )
	.filter( file => /\.(?:test|spec)\.(?:js|jsx|ts|tsx|cjs|mjs)$/.test( file ) )
	.filter( file => ! isSeparatelyInstalledPackage( file ) )
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

test( 'every tools/ package owns its test runner, so excluding it from the plugin suite hides nothing', () => {
	const fs = require( 'node:fs' );
	const toolsRoot = path.join( root, 'tools' );

	if ( ! fs.existsSync( toolsRoot ) ) {
		return;
	}

	const packages = fs
		.readdirSync( toolsRoot, { withFileTypes: true } )
		.filter( entry => entry.isDirectory() )
		.map( entry => entry.name );

	assert.ok( packages.length > 0, 'tools/ exists, so it must hold at least one package' );

	packages.forEach( name => {
		const manifestPath = path.join( toolsRoot, name, 'package.json' );

		assert.ok(
			fs.existsSync( manifestPath ),
			`tools/${ name } must be a real package with its own package.json — it is installed and tested on its own`
		);

		const manifest = JSON.parse( fs.readFileSync( manifestPath, 'utf8' ) );

		assert.ok(
			manifest.scripts && manifest.scripts.test,
			`tools/${ name } must declare an "npm test" script, because the plugin suite deliberately does not run its tests`
		);
		assert.ok(
			manifest.private,
			`tools/${ name } must be private — agent tools are not published`
		);
	} );
} );

test( 'the agent-harness is excluded from the plugin distributable', () => {
	const fs = require( 'node:fs' );
	const zipignore = fs.readFileSync( path.join( root, '.zipignore' ), 'utf8' )
		.split( '\n' )
		.map( line => line.trim() );

	// Contract §3.11 / Gate-1: the W4 runtime (jsdom, ~25MB) ships as a separate agent-tools
	// package installed on demand, NOT inside nova-blocks. A zip that carried it would silently
	// reverse a gate decision.
	assert.ok(
		zipignore.includes( 'tools' ),
		'.zipignore must exclude tools/ — the agent-harness must never enter the plugin zip'
	);
} );
