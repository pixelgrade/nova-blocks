const assert = require( 'node:assert/strict' );
const { execFileSync } = require( 'node:child_process' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const test = require( 'node:test' );

const root = path.resolve( __dirname, '../..' );
const { discoverTestManifest } = require( '../../bin/test-manifest.cjs' );
const {
	buildRunPlan,
	runCommand,
	runTestPlan,
} = require( '../../bin/run-fast-tests.cjs' );

const listFiles = directory => fs.readdirSync( path.join( root, directory ) )
	.filter( file => fs.statSync( path.join( root, directory, file ) ).isFile() )
	.map( file => `${ directory }/${ file }` )
	.sort();

test( 'the fast plan consolidates JavaScript tests without dropping files', () => {
	const manifest = discoverTestManifest( root );
	const plan = buildRunPlan( {
		root,
		manifest,
		phpCli: '/test/php',
	} );

	assert.equal( plan.jest.length, 2 );
	assert.equal( plan.node.command, process.execPath );
	assert.ok( plan.node.args.includes( '--test-concurrency=4' ) );

	manifest.nodeTests.forEach( file => assert.ok( plan.node.args.includes( file ) ) );
	listFiles( 'tests/node' ).forEach( file => assert.ok( plan.node.args.includes( file ) ) );

	const plannedJestTests = plan.jest
		.flatMap( command => command.tests )
		.sort();
	assert.deepEqual(
		plannedJestTests,
		[ ...manifest.jestMainTests, ...manifest.jestCompatibilityTests ].sort()
	);
} );

test( 'standalone PHP contracts run with bounded parallelism', () => {
	const plan = buildRunPlan( {
		root,
		manifest: discoverTestManifest( root ),
		phpCli: '/test/php',
	} );

	assert.equal( plan.php.concurrency, 4 );
	assert.equal( plan.php.command, '/test/php' );
	assert.deepEqual( plan.php.tests, listFiles( 'tests/php' ) );
} );

test( 'the compatibility Jest bucket carries only the required resolver flags', () => {
	const plan = buildRunPlan( {
		root,
		manifest: discoverTestManifest( root ),
		phpCli: '/test/php',
	} );
	const compatibility = plan.jest.find( command => 'Jest compatibility' === command.label );

	assert.ok(
		compatibility.args.includes(
			'--modulePathIgnorePatterns=<rootDir>/packages/block-library/|<rootDir>/.claude/'
		)
	);
	assert.ok(
		compatibility.args.includes(
			'--transformIgnorePatterns=node_modules/(?!(@wordpress/i18n|memize)/)'
		)
	);
} );

test( 'every Jest bucket ignores agent worktrees under .claude', () => {
	const plan = buildRunPlan( {
		root,
		manifest: discoverTestManifest( root ),
		phpCli: '/test/php',
	} );

	plan.jest.forEach( command => {
		assert.ok(
			command.args.some( arg =>
				arg.startsWith( '--modulePathIgnorePatterns=' ) && arg.includes( '<rootDir>/.claude/' )
			),
			`${ command.label } must ignore .claude worktrees in jest-haste-map`
		);
	} );
} );

test( 'the runner captures real child-process output and exit status', async () => {
	const success = await runCommand( {
		label: 'success',
		command: process.execPath,
		args: [ '-e', "process.stdout.write( 'child ok' )" ],
	}, root );
	const failure = await runCommand( {
		label: 'failure',
		command: process.execPath,
		args: [ '-e', "process.stderr.write( 'child failed' ); process.exit( 3 )" ],
	}, root );

	assert.equal( success.code, 0 );
	assert.equal( success.stdout, 'child ok' );
	assert.equal( failure.code, 3 );
	assert.equal( failure.stderr, 'child failed' );
} );

test( 'the runner continues independent groups and reports aggregate failure', async () => {
	const messages = [];
	const result = await runTestPlan( {
		php: { label: 'PHP contracts', command: process.execPath, concurrency: 2, tests: [] },
		node: {
			label: 'Node probe',
			command: process.execPath,
			args: [ '-e', "process.stdout.write( 'node ok' )" ],
		},
		jest: [
			{
				label: 'Broken probe',
				command: process.execPath,
				args: [ '-e', "process.stderr.write( 'expected failure' ); process.exit( 2 )" ],
				tests: [],
			},
			{
				label: 'Later probe',
				command: process.execPath,
				args: [ '-e', "process.stdout.write( 'later ok' )" ],
				tests: [],
			},
		],
	}, {
		cwd: root,
		log: message => messages.push( message ),
	} );

	assert.equal( result.passed, false );
	assert.deepEqual( result.failures.map( failure => failure.label ), [ 'Broken probe' ] );
	assert.ok( messages.some( message => message.includes( 'Later probe' ) ) );
} );

test( 'the CLI lists the complete fast-suite topology without executing it', () => {
	const output = execFileSync(
		process.execPath,
		[ path.join( root, 'bin/run-fast-tests.cjs' ), '--list' ],
		{
			cwd: root,
			encoding: 'utf8',
			env: { ...process.env, NB_PHP_CLI: '/test/php' },
		}
	);
	const summary = JSON.parse( output );
	const manifest = discoverTestManifest( root );

	assert.equal( summary.phpTests, listFiles( 'tests/php' ).length );
	assert.equal(
		summary.nodeTests,
		manifest.nodeTests.length + listFiles( 'tests/node' ).length
	);
	assert.equal( summary.jestMainTests, manifest.jestMainTests.length );
	assert.equal( summary.jestCompatibilityTests, manifest.jestCompatibilityTests.length );
	assert.deepEqual( summary.processes, {
		jest: 2,
		node: 1,
		phpConcurrency: 4,
	} );
} );
