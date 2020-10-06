/**
 * External dependencies
 */
const fs = require( 'fs' );
const path = require( 'path' );
const { isEmpty, overEvery } = require( 'lodash' );

/**
 * Absolute path to packages directory.
 *
 * @type {string}
 */
const PACKAGES_DIR = path.resolve( __dirname, '../../packages' );

/**
 * Returns true if the given base file name for a file within the packages
 * directory is itself a directory.
 *
 * @param {string} file Packages directory file.
 *
 * @return {boolean} Whether file is a directory.
 */
function isDirectory( file ) {
	return fs.lstatSync( path.resolve( PACKAGES_DIR, file ) ).isDirectory();
}

/**
 * Returns true if the given packages has "module" field.
 *
 * @param {string} file Packages directory file.
 *
 * @return {boolean} Whether file is a directory.
 */
function hasModuleField( file ) {
	let pkg;
	try {
		pkg = require( path.resolve( PACKAGES_DIR, file, 'package.json' ) );
	} catch {
		// If, for whatever reason, the package's `package.json` cannot be read,
		// consider it as an invalid candidate. In most cases, this can happen
		// when lingering directories are left in the working path when changing
		// to an older branch where a package did not yet exist.
		return false;
	}

	return ! isEmpty( pkg.module );
}

/**
 * Filter predicate, returning true if the given base file name is to be
 * included in the build.
 *
 * @param {string} pkg File base name to test.
 *
 * @return {boolean} Whether to include file in build.
 */
const filterPackages = overEvery( isDirectory );

/**
 * Returns the absolute path of all WordPress packages
 *
 * @return {Array} Package paths
 */
function getPackages() {
	return fs
		.readdirSync( PACKAGES_DIR )
		.filter( filterPackages )
		.map( ( file ) => {
			return path.resolve( PACKAGES_DIR, file )
		} );
}

module.exports = getPackages;
