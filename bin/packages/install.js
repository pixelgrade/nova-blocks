var fs = require( 'fs' );
var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var cp = require( 'child_process' );
var os = require( 'os' );

// get library path
var lib = resolve( __dirname, '../lib/' );

const getPackages = require( './get-packages' );

getPackages().forEach( p => {

	if ( ! fs.existsSync( join( p, '/package.json' ) ) ) {
		return
	}

	// npm binary based on OS
	var npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

	// install folder
	cp.spawn( npmCmd, ['i'], {
		env: process.env,
		cwd: p,
		stdio: 'inherit'
	} );
} );
