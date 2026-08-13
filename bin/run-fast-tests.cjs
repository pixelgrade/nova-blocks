const fs = require( 'node:fs' );
const path = require( 'node:path' );
const { spawn } = require( 'node:child_process' );
const { discoverTestManifest } = require( './test-manifest.cjs' );

const listFiles = ( root, directory ) => fs
	.readdirSync( path.join( root, directory ) )
	.filter( file => fs.statSync( path.join( root, directory, file ) ).isFile() )
	.map( file => `${ directory }/${ file }` )
	.sort();

const buildJestCommand = ( label, tests, extraArgs = [] ) => ( {
	label,
	command: 'npx',
	args: [
		'--no-install',
		'jest',
		'--runInBand',
		'--runTestsByPath',
		...tests,
		...extraArgs,
	],
	tests,
} );

const buildRunPlan = ( { root, manifest, phpCli } ) => ( {
	php: {
		label: 'PHP contracts',
		command: phpCli,
		concurrency: 4,
		tests: listFiles( root, 'tests/php' ),
	},
	node: {
		label: 'Node tests and contracts',
		command: process.execPath,
		args: [
			'--test',
			'--test-concurrency=4',
			...manifest.nodeTests,
			...listFiles( root, 'tests/node' ),
		],
	},
	jest: [
		// Agent worktrees under .claude/worktrees/ duplicate every package.json,
		// which collides in jest-haste-map's module map — keep them ignored.
		buildJestCommand( 'Jest', manifest.jestMainTests, [
			'--modulePathIgnorePatterns=<rootDir>/.claude/',
		] ),
		buildJestCommand(
			'Jest compatibility',
			manifest.jestCompatibilityTests,
			[
				'--modulePathIgnorePatterns=<rootDir>/packages/block-library/|<rootDir>/.claude/',
				'--transformIgnorePatterns=node_modules/(?!(@wordpress/i18n|memize)/)',
			]
		),
	],
} );

const runCommand = ( command, cwd ) => new Promise( resolve => {
	const startedAt = Date.now();
	const child = spawn( command.command, command.args || [], {
		cwd,
		env: process.env,
		stdio: [ 'ignore', 'pipe', 'pipe' ],
	} );
	let stdout = '';
	let stderr = '';

	child.stdout.on( 'data', chunk => {
		stdout += chunk;
	} );
	child.stderr.on( 'data', chunk => {
		stderr += chunk;
	} );
	child.on( 'error', error => {
		resolve( {
			...command,
			code: 1,
			durationMs: Date.now() - startedAt,
			stdout,
			stderr: `${ stderr }${ error.message }`,
		} );
	} );
	child.on( 'close', code => {
		resolve( {
			...command,
			code: null === code ? 1 : code,
			durationMs: Date.now() - startedAt,
			stdout,
			stderr,
		} );
	} );
} );

const runWithConcurrency = async ( items, concurrency, worker ) => {
	const results = new Array( items.length );
	let nextIndex = 0;

	const runNext = async () => {
		while ( nextIndex < items.length ) {
			const index = nextIndex;
			nextIndex += 1;
			results[ index ] = await worker( items[ index ] );
		}
	};

	await Promise.all(
		Array.from( { length: Math.min( concurrency, items.length ) }, runNext )
	);
	return results;
};

const runTestPlan = async ( plan, { cwd, log = console.log } ) => {
	const failures = [];
	const report = result => {
		const duration = ( result.durationMs / 1000 ).toFixed( 1 );
		if ( 0 === result.code ) {
			log( `  ok    ${ result.label } (${ duration }s)` );
			return;
		}

		failures.push( result );
		log( `  FAIL  ${ result.label } (${ duration }s)` );
		`${ result.stdout }${ result.stderr }`
			.trim()
			.split( '\n' )
			.forEach( line => log( `        ${ line }` ) );
	};

	log( `== PHP contracts (${ plan.php.tests.length }, concurrency ${ plan.php.concurrency }) ==` );
	const phpResults = await runWithConcurrency(
		plan.php.tests,
		plan.php.concurrency,
		file => runCommand( {
			label: path.basename( file ),
			command: plan.php.command,
			args: [ file ],
		}, cwd )
	);
	phpResults.forEach( report );

	log( '== Node tests and contracts ==' );
	report( await runCommand( plan.node, cwd ) );

	log( '== Jest tests ==' );
	for ( const command of plan.jest ) {
		report( await runCommand( command, cwd ) );
	}

	return {
		passed: 0 === failures.length,
		failures,
	};
};

const getPlanSummary = plan => ( {
	phpTests: plan.php.tests.length,
	nodeTests: plan.node.args.filter( arg => /\.(?:js|cjs|mjs)$/.test( arg ) ).length,
	jestMainTests: plan.jest[ 0 ].tests.length,
	jestCompatibilityTests: plan.jest[ 1 ].tests.length,
	processes: {
		jest: plan.jest.length,
		node: 1,
		phpConcurrency: plan.php.concurrency,
	},
} );

const main = async () => {
	const root = path.resolve( __dirname, '..' );
	const plan = buildRunPlan( {
		root,
		manifest: discoverTestManifest( root ),
		phpCli: process.env.NB_PHP_CLI || 'php',
	} );

	if ( process.argv.includes( '--list' ) ) {
		process.stdout.write( `${ JSON.stringify( getPlanSummary( plan ), null, 2 ) }\n` );
		return;
	}

	const startedAt = Date.now();
	const result = await runTestPlan( plan, { cwd: root } );
	const duration = ( ( Date.now() - startedAt ) / 1000 ).toFixed( 1 );
	console.log( result.passed
		? `ALL FAST TESTS PASSED (${ duration }s)`
		: `FAST TESTS FAILED (${ duration }s)`
	);
	process.exitCode = result.passed ? 0 : 1;
};

if ( require.main === module ) {
	main().catch( error => {
		console.error( error );
		process.exitCode = 1;
	} );
}

module.exports = {
	buildRunPlan,
	getPlanSummary,
	runCommand,
	runTestPlan,
};
