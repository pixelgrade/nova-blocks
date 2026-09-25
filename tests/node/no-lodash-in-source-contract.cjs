/**
 * Shipped Nova Blocks source must not depend on lodash (#485).
 *
 * WordPress has deprecated its bundled lodash and no longer loads it for the
 * editor by default, so neither an import (which the dependency-extraction
 * plugin turns into a `lodash` script dependency) nor the `lodash` / `_`
 * globals may appear in package or lib source. Tests may still use lodash as
 * an oracle, and build tooling (webpack.config.js, bin/) is out of scope.
 */
const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const ROOT = path.resolve( __dirname, '../..' );
const SOURCE_EXTENSIONS = /\.(c|m)?jsx?$|\.tsx?$/;
const SKIPPED_DIRECTORIES = new Set( [ 'node_modules', 'build', 'build-module', 'build-style', '__tests__', '__mocks__', 'vendor' ] );
const TEST_FILE = /\.(test|spec)\.(c|m)?jsx?$/;

const RULES = [
	[ 'imports lodash', /\bfrom\s*['"]lodash(?:[./-][^'"]*)?['"]/ ],
	[ 'requires lodash', /\b(?:require|import)\s*\(\s*['"]lodash(?:[./-][^'"]*)?['"]\s*\)/ ],
	[ 'reads the lodash global', /(?:^|[^\w$.'"])lodash\s*[.[;]|=\s*lodash\b|window\.lodash\b/ ],
	[ 'calls the `_` (lodash/underscore) global', /(?:^|[^\w$.])_\.[A-Za-z]/ ],
];

const listSourceFiles = ( directory ) => {
	if ( ! fs.existsSync( directory ) ) {
		return [];
	}

	return fs.readdirSync( directory, { withFileTypes: true } ).flatMap( ( entry ) => {
		const fullPath = path.join( directory, entry.name );

		if ( entry.isDirectory() ) {
			return SKIPPED_DIRECTORIES.has( entry.name ) ? [] : listSourceFiles( fullPath );
		}

		return SOURCE_EXTENSIONS.test( entry.name ) && ! TEST_FILE.test( entry.name ) ? [ fullPath ] : [];
	} );
};

const stripComments = ( code ) => code
	.replace( /\/\*[\s\S]*?\*\//g, '' )
	.replace( /(^|[^:'"\\])\/\/.*$/gm, '$1' );

const findViolations = ( files ) => files.flatMap( ( file ) => {
	const code = stripComments( fs.readFileSync( file, 'utf8' ) );

	return RULES
		.filter( ( [ , pattern ] ) => pattern.test( code ) )
		.map( ( [ label ] ) => `${ path.relative( ROOT, file ) } ${ label }` );
} );

const packageSourceDirectories = () => fs.readdirSync( path.join( ROOT, 'packages' ) )
	.map( ( name ) => path.join( ROOT, 'packages', name, 'src' ) );

test( 'package and lib source never import or read lodash', () => {
	const files = [
		...packageSourceDirectories().flatMap( listSourceFiles ),
		...listSourceFiles( path.join( ROOT, 'lib' ) ),
	];

	assert.ok( files.length > 100, `expected to scan the package sources, found ${ files.length } files` );
	assert.deepEqual( findViolations( files ), [] );
} );

test( 'the rules catch every lodash dependency shape', () => {
	const samples = [
		"import { isEqual } from 'lodash';",
		'import isEqual from "lodash/isEqual";',
		"const { get } = require( 'lodash' );",
		'const { omit } = lodash;',
		'const value = window.lodash.omit( a, b );',
		'return _.omit( settings.attributes, [ "a" ] );',
	];

	samples.forEach( ( sample ) => {
		assert.ok(
			RULES.some( ( [ , pattern ] ) => pattern.test( stripComments( sample ) ) ),
			`no rule matched: ${ sample }`
		);
	} );

	assert.ok(
		! RULES.some( ( [ , pattern ] ) => pattern.test( stripComments( '// _.sortBy used to be here\nconst my_var = foo_.bar;' ) ) ),
		'comments and identifiers ending in _ must not match'
	);
} );
