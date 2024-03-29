/* eslint-disable no-console */

/**
 * External dependencies
 */
const path = require( 'path' );
const glob = require( 'fast-glob' );
const ProgressBar = require( 'progress' );
const workerFarm = require( 'worker-farm' );
const { Readable, Transform } = require( 'stream' );

const files = process.argv.slice( 2 );

/**
 * Path to packages directory.
 *
 * @type {string}
 */
const PACKAGES_DIR = path.resolve( __dirname, '../../packages' );

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
 * Returns a stream transform which maps an individual stylesheet to its
 * package entrypoint. Unlike JavaScript which uses an external bundler to
 * efficiently manage rebuilds by entrypoints, stylesheets are rebuilt fresh
 * in their entirety from the build script.
 *
 * @return {Transform} Stream transform instance.
 */
function createStyleEntryTransform() {
	const packages = new Set();

	return new Transform( {
		objectMode: true,
		async transform( file, encoding, callback ) {
			// Only stylesheets are subject to this transform.
			if ( path.extname( file ) !== '.scss' ) {
				this.push( file );
				callback();
				return;
			}

			// Only operate once per package, assuming entries are common.
			const packageName = getPackageName( file );

			if ( packages.has( packageName ) ) {
				callback();
				return;
			}

			packages.add( packageName );

			const entries = await glob( [
				path.resolve( PACKAGES_DIR, packageName, 'src/*.scss' ),
				path.resolve( PACKAGES_DIR, packageName, 'src/blocks/*/*.scss' ),
			] );

			entries.forEach( ( entry ) => this.push( entry ) );
			callback();
		},
	} );
}

let onFileComplete = () => {};

let stream;

if ( files.length ) {
	stream = new Readable( { encoding: 'utf8' } );
	files.forEach( ( file ) => stream.push( file ) );
	stream.push( null );
	stream = stream
	.pipe( createStyleEntryTransform() );
} else {
	const bar = new ProgressBar( 'Build Progress: [:bar] :percent', {
		width: 30,
		incomplete: ' ',
		total: 1,
	} );

	bar.tick( 0 );

	stream = glob.stream(
		[
			`${ PACKAGES_DIR }/*/src/**/*.js`,
			`${ PACKAGES_DIR }/*/src/*.scss`,
			`${ PACKAGES_DIR }/block-library/src/blocks/*/*.scss`,
			`${ PACKAGES_DIR }/block-library/src/blocks/**/*.php`,
			`${ PACKAGES_DIR }/block-library/src/blocks/*/*.json`,
			`${ PACKAGES_DIR }/*/src/**/*.json`,
			`${ PACKAGES_DIR }/*/src/**/*.svg`,
			`${ PACKAGES_DIR }/*/src/**/*.png`,
			`${ PACKAGES_DIR }/*/src/**/*.jpg`,
			`${ PACKAGES_DIR }/*/src/**/*.gif`,
		],
		{
			ignore: [
				`**/benchmark/**`,
				`**/{__mocks__,__tests__,test}/**`,
				`**/{storybook,stories}/**`,
			],
			onlyFiles: true,
		}
	);

	// Pause to avoid data flow which would begin on the `data` event binding,
	// but should wait until worker processing below.
	//
	// See: https://nodejs.org/api/stream.html#stream_two_reading_modes
	stream.pause().on( 'data', ( file ) => {
		bar.total = files.push( file );
	} );

	onFileComplete = () => {
		bar.tick();
	};
}

const worker = workerFarm( require.resolve( './build-worker' ) );

let ended = false,
	complete = 0;

stream
	.on( 'data', ( file ) => {
		return worker( file, ( error ) => {
			onFileComplete();

			if ( error ) {
				// If an error occurs, the process can't be ended immediately since
				// other workers are likely pending. Optimally, it would end at the
				// earliest opportunity (after the current round of workers has had
				// the chance to complete), but this is not made directly possible
				// through `worker-farm`. Instead, ensure at least that when the
				// process does exit, it exits with a non-zero code to reflect the
				// fact that an error had occurred.
				process.exitCode = 1;

				console.error( error );
			}

			if ( ended && ++complete === files.length ) {
				workerFarm.end( worker );
			}
		} )
	} )
	.on( 'end', () => ( ended = true ) )
	.resume();

/* eslint-enable no-console */
