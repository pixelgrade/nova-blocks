const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const Module = require( 'node:module' );
const path = require( 'node:path' );

test( 'POT generation makes the release build fail when WP-CLI fails', () => {
	const taskPath = path.resolve( __dirname, '../../tasks/build-translate.js' );
	const originalLoad = Module._load;
	const originalPhpCli = process.env.NB_PHP_CLI;
	const originalWpCli = process.env.NB_WP_CLI;
	let generatePotFile;
	let invocation;

	process.env.NB_PHP_CLI = '/opt/local-php';
	process.env.NB_WP_CLI = '/opt/wp-cli.phar';

	Module._load = function ( request, parent, isMain ) {
		if ( 'gulp' === request ) {
			return {
				task: ( name, task ) => {
					if ( 'build:translate:generatepot' === name ) {
						generatePotFile = task;
					}
				},
				series: () => () => {},
				src: () => {
					throw new Error( 'Source streams are not used by this contract.' );
				},
			};
		}

		if ( 'fs' === request ) {
			return {
				constants: { X_OK: 1 },
				existsSync: () => true,
				accessSync: () => {},
				readFileSync: () => '#!/usr/bin/env php\n<?php',
				readdirSync: () => [],
			};
		}

		if ( 'child_process' === request ) {
			return {
				execFileSync: ( executable, args ) => {
					invocation = { executable, args };
					throw new Error( 'simulated wp i18n make-pot failure' );
				},
			};
		}

		if ( 'fancy-log' === request ) {
			return { error: () => {} };
		}

		if ( 'gulp-load-plugins' === request ) {
			return () => ( {} );
		}

		return originalLoad.call( this, request, parent, isMain );
	};

	try {
		delete require.cache[ taskPath ];
		require( taskPath );
	} finally {
		Module._load = originalLoad;
		delete require.cache[ taskPath ];
	}

	assert.equal( typeof generatePotFile, 'function' );

	let callbackError;
	let thrownError;
	try {
		generatePotFile( error => {
			callbackError = error;
		} );
	} catch ( error ) {
		thrownError = error;
	}

	assert.ok(
		callbackError instanceof Error || thrownError instanceof Error,
		'A broken POT generator must propagate an error to Gulp instead of producing a stale release artifact.'
	);
	assert.deepEqual( invocation, {
		executable: '/opt/local-php',
		args: [
			'/opt/wp-cli.phar',
			'i18n',
			'make-pot',
			'../build/nova-blocks/',
			'../build/nova-blocks/languages/nova-blocks.pot',
		],
	} );

	if ( undefined === originalPhpCli ) {
		delete process.env.NB_PHP_CLI;
	} else {
		process.env.NB_PHP_CLI = originalPhpCli;
	}
	if ( undefined === originalWpCli ) {
		delete process.env.NB_WP_CLI;
	} else {
		process.env.NB_WP_CLI = originalWpCli;
	}
} );
