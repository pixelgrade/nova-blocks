/**
 * External dependencies
 */
const { promisify } = require( 'util' );
const fs = require( 'fs' );
const path = require( 'path' );
const babel = require( '@babel/core' );
const makeDir = require( 'make-dir' );
const sass = require( 'node-sass' );
const postcss = require( 'postcss' );

/**
 * Internal dependencies
 */
const getBabelConfig = require( './get-babel-config' );

/**
 * Path to packages directory.
 *
 * @type {string}
 */
const PACKAGES_DIR = path.resolve( __dirname, '../../packages' );

/**
 * Mapping of JavaScript environments to corresponding build output.
 *
 * @type {Object}
 */
const JS_ENVIRONMENTS = {
	main: 'build',
	module: 'build-module',
};

/**
 * Promisified fs.readFile.
 *
 * @type {Function}
 */
const readFile = promisify( fs.readFile );

/**
 * Promisified fs.copyFile.
 *
 * @type {Function}
 */
const copyFile = promisify( fs.copyFile );

/**
 * Promisified fs.writeFile.
 *
 * @type {Function}
 */
const writeFile = promisify( fs.writeFile );

/**
 * Promisified sass.render.
 *
 * @type {Function}
 */
const renderSass = promisify( sass.render );

/**
 * Get the package name for a specified file
 *
 * @param  {string} file File name
 * @return {string}      Package name
 */
function getPackageName( file ) {
	return path.relative( PACKAGES_DIR, file ).split( path.sep )[ 0 ];
}

/**
 * Get Build Path for a specified file.
 *
 * @param  {string} file        File to build
 * @param  {string} buildFolder Output folder
 * @return {string}             Build path
 */
function getBuildPath( file, buildFolder ) {
	const pkgName = getPackageName( file );
	const pkgSrcPath = path.resolve( PACKAGES_DIR, pkgName, 'src' );
	const pkgBuildPath = path.resolve( PACKAGES_DIR, pkgName, buildFolder );
	const relativeToSrcPath = path.relative( pkgSrcPath, file );
	return path.resolve( pkgBuildPath, relativeToSrcPath );
}

/**
 * Object of build tasks per file extension.
 *
 * @type {Object<string,Function>}
 */
const copy = async ( file ) => {
	const outputFileBuild = getBuildPath( file, 'build' );
	const dirnameBuild = path.dirname( outputFileBuild );

	const outputFileBuildModule = getBuildPath( file, 'build-module' );
	const dirnameBuildModule = path.dirname( outputFileBuildModule );

	await Promise.all( [
		makeDir( dirnameBuild ).then( () => {
			return copyFile( file, outputFileBuild );
		} ),
		makeDir( dirnameBuildModule ).then( () => {
			return copyFile( file, outputFileBuildModule );
		} )
	] );

};

const BUILD_TASK_BY_EXTENSION = {
	'.php': copy,
	'.json': copy,
	'.png': copy,
	'.jpg': copy,
	'.gif': copy,
	async '.scss'( file ) {
		const outputFile = getBuildPath(
			file.replace( '.scss', '.css' ),
			'build-style'
		);
		const outputFileRTL = getBuildPath(
			file.replace( '.scss', '-rtl.css' ),
			'build-style'
		);

		const [ , contents ] = await Promise.all( [
			makeDir( path.dirname( outputFile ) ),
			readFile( file, 'utf8' ),
		] );

		const builtSass = await renderSass( {
			file,
			includePaths: [ path.join( PACKAGES_DIR, 'base-styles' ) ],
			data:
				[
					'mixins',
				]
					.map( ( imported ) => {
						return `@import "${ imported }";`
					} )
					.join( ' ' ) + contents,
		} );

		const result = await postcss( require( 'autoprefixer' ) ).process(
			builtSass.css,
			{
				from: 'src/app.css',
				to: 'dest/app.css',
			}
		);

		const resultRTL = await postcss( [ require( 'rtlcss' )() ] ).process(
			result.css,
			{
				from: 'src/app.css',
				to: 'dest/app.css',
			}
		);

		await Promise.all( [
			writeFile( outputFile, result.css ),
			writeFile( outputFileRTL, resultRTL.css ),
		] );
	},

	async '.js'( file ) {
		for ( const [ environment, buildDir ] of Object.entries(
			JS_ENVIRONMENTS
		) ) {
			const destPath = getBuildPath( file, buildDir );
			const babelOptions = getBabelConfig(
				environment,
				file.replace( PACKAGES_DIR, '@novablocks' )
			);

			const [ , transformed ] = await Promise.all( [
				makeDir( path.dirname( destPath ) ),
				babel.transformFileAsync( file, babelOptions ),
			] );

			await Promise.all( [
				writeFile(
					destPath + '.map',
					JSON.stringify( transformed.map )
				),
				writeFile(
					destPath,
					transformed.code +
						'\n//# sourceMappingURL=' +
						path.basename( destPath ) +
						'.map'
				),
			] );
		}
	},
};

module.exports = async ( file, callback ) => {
	const extension = path.extname( file );
	const task = BUILD_TASK_BY_EXTENSION[ extension ];

	if ( ! task ) {
		return;
	}

	try {
		await task( file );
		callback();
	} catch ( error ) {
		callback( error );
	}
};
