/**
 * External dependencies
 */
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const postcss = require( 'postcss' );
const { get, compact } = require( 'lodash' );
const { basename } = require( 'path' );
const glob = require( "glob" );

/**
 * WordPress dependencies
 */
const CustomTemplatedPathPlugin = require( '@wordpress/custom-templated-path-webpack-plugin' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const { camelCaseDash } = require( '@wordpress/scripts/utils' );

/**
 * Internal dependencies
 */
const { dependencies } = require( './package' );

const {
	NODE_ENV: mode = 'development',
	WP_DEVTOOL: devtool = mode === 'production' ? false : 'source-map',
} = process.env;

const NOVABLOCKS_NAMESPACE = '@novablocks/';

const gutenbergPackages = Object.keys( dependencies )
                                .filter( ( packageName ) => packageName.startsWith( NOVABLOCKS_NAMESPACE ) )
                                .map( ( packageName ) => packageName.replace( NOVABLOCKS_NAMESPACE, '' ) );

let entryPoints = gutenbergPackages.filter( packageName => packageName !== 'block-library' ).reduce( ( memo, packageName ) => {
	const sources = glob.sync( `./packages/${ packageName }/build/@(frontend|index).js` );

	sources.forEach( source => {
		let key = packageName;

		if ( source.indexOf( 'frontend' ) > -1 ) {
			key = `./build/${ packageName }/frontend`;
		}

		memo[ key ] = source;
	} );

	return memo;
}, {} );

let blocksEntryPoints = glob.sync( './packages/block-library/build/blocks/*/@(frontend|index).js' )
                  .reduce( ( acc, path ) => {
                  	let key = path;

                  	key = key.replace( '/build', '' );
                  	key = key.replace( './packages', './build' );
                  	key = key.replace( '.js', '' );

                  	return {
                  		...acc,
	                    [ key ]: path
                  	}
                  }, {} );

entryPoints = Object.assign( {}, entryPoints, blocksEntryPoints );

const cssTransform = ( content ) => {
	if ( mode === 'production' ) {
		return postcss( [
			require( 'cssnano' )( {
				preset: [
					'default',
					{
						discardComments: {
							removeAll: true,
						},
					},
				],
			} ),
		] )
		.process( content, {
			from: 'src/app.css',
			to: 'dest/app.css',
		} )
		.then( ( result ) => result.css );
	}
	return content;
};

const CopyPackageCSSPlugin =
	new CopyWebpackPlugin(
		gutenbergPackages.map( ( packageName ) => (
			{
				from: `./packages/${packageName}/build-style/*.css`,
				to: `./build/${packageName}/`,
				flatten: true,
				transform: cssTransform,
			}
		) )
	);


const CopyBlocksCSSPlugin =
	new CopyWebpackPlugin(
		glob.sync( './packages/block-library/build-style/blocks/*/' ).map( ( path ) => {
			let blockName = path.replace( './packages/block-library/build-style/blocks/', '' );
			blockName = blockName.replace( '/', '' );

			return {
				from: `./packages/block-library/build-style/blocks/${ blockName }/*.css`,
				to: `./build/block-library/blocks/${ blockName }/`,
				flatten: true,
				transform: cssTransform,
			}
		} )
	);

const CopyBlocksPhpPlugin =
	new CopyWebpackPlugin(
		glob.sync( './packages/block-library/build/blocks/*/' ).map( ( path ) => {
			let blockName = path.replace( './packages/block-library/build/blocks/', '' );
			blockName = blockName.replace( '/', '' );

			return {
				from: `./packages/block-library/build/blocks/${ blockName }/*.php`,
				to: `./build/block-library/blocks/${ blockName }/`,
				flatten: true,
			}
		} )
	);

const CopyBlocksJsonPlugin =
	new CopyWebpackPlugin(
		glob.sync( './packages/block-library/build/blocks/*/' ).map( ( path ) => {
			let blockName = path.replace( './packages/block-library/build/blocks/', '' );
			blockName = blockName.replace( '/', '' );

			return {
				from: `./packages/block-library/build/blocks/${ blockName }/*.json`,
				to: `./build/block-library/blocks/${ blockName }/`,
				flatten: true,
			}
		} )
	);

const PackagesConfig = {
	mode,
	entry: entryPoints,
	output: {
		devtoolNamespace: 'novablocks',
		filename: ( pathData ) => {
			let filename = `./build/${ pathData.chunk.name }/index.js`;

			if ( pathData.chunk.name.search( './build' ) !== -1 ) {
				filename = `${ pathData.chunk.name }.js`;
			}

			return filename;
		},
		path: __dirname,
		library: [ 'novablocks', '[name]' ],
		libraryTarget: 'this',
	},
	module: {
		rules: compact( [
			mode !== 'production' && {
				test: /\.js$/,
				use: require.resolve( 'source-map-loader' ),
				enforce: 'pre',
			},
		] ),
	},
	plugins: [
		new CustomTemplatedPathPlugin( {
			basename( path, data ) {
				let rawRequest;

				const entryModule = get( data, [ 'chunk', 'entryModule' ], {} );
				switch ( entryModule.type ) {
					case 'javascript/auto':
						rawRequest = entryModule.rawRequest;
						break;

					case 'javascript/esm':
						rawRequest = entryModule.rootModule.rawRequest;
						break;
				}

				if ( rawRequest ) {
					return basename( rawRequest );
				}

				return path;
			},
		} ),
		CopyPackageCSSPlugin,
		CopyBlocksCSSPlugin,
		CopyBlocksPhpPlugin,
		CopyBlocksJsonPlugin,
		new DependencyExtractionWebpackPlugin( {
			injectPolyfill: true,
			requestToExternal,
			requestToHandle,
		} ),
	],
	devtool,
};

function requestToExternal( request ) {
	if ( request.startsWith( NOVABLOCKS_NAMESPACE ) ) {
		return [
			'novablocks',
			camelCaseDash( request.substring( NOVABLOCKS_NAMESPACE.length ) ),
		];
	}
}
function requestToHandle( request ) {
	if ( request.startsWith( NOVABLOCKS_NAMESPACE ) ) {
		return 'novablocks-' + request.substring( NOVABLOCKS_NAMESPACE.length );
	}
}

const minimizeConfig = {
	minimize: true,
	minimizer: [
		new TerserPlugin( {
			include: /\.min\.js$/,
			extractComments: {
				condition: true,
				filename: (fileData) => {
					// The "fileData" argument contains object with "filename", "basename", "query" and "hash"
					return `${fileData.filename}.LICENSE.txt${fileData.query}`;
				},
			},
		} )
	],
};

/**
 * Config for compiling Vendors.
 */
const VendorScripts = [
	'jquery.bully',
	'jquery.slick',
	'jquery.velocity'
];

const VendorEntries = {};

VendorScripts.forEach( script => {
	VendorEntries[ `./dist/vendor/${ script }` ] = `./src/vendor/${ script }`;
	VendorEntries[ `./dist/vendor/${ script }.min` ] = `./src/vendor/${ script }`;
} );

const VendorConfig = {
	mode,
	externals: {
		jquery: 'jQuery',
	},
	output: {
		path: __dirname,
	},
	entry: VendorEntries,
	optimization: {
		...minimizeConfig,
	},
};

module.exports = [
	PackagesConfig,
	VendorConfig,
];
