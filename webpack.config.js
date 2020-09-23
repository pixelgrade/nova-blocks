/**
 * External dependencies
 */
const { DefinePlugin } = require( 'webpack' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const postcss = require( 'postcss' );
const { get, escapeRegExp, compact } = require( 'lodash' );
const { basename, sep } = require( 'path' );
const glob = require( "glob" )

/**
 * WordPress dependencies
 */
const CustomTemplatedPathPlugin = require( '@wordpress/custom-templated-path-webpack-plugin' );
const LibraryExportDefaultPlugin = require( '@wordpress/library-export-default-webpack-plugin' );
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
	let key = `./build/${ packageName }/index`;
	memo[ key ] = `./packages/${ packageName }`;
	return memo;
}, {} );

let blocksEntryPoints = glob.sync( './packages/block-library/build/blocks/*/@(editor|frontend|index).js' )
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

console.log( entryPoints );

module.exports = {
	mode,
	entry: entryPoints,
	output: {
		devtoolNamespace: 'novablocks',
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
		new CopyWebpackPlugin(
			gutenbergPackages.map( ( packageName ) => ( {
				from: `./packages/${ packageName }/build-style/*.css`,
				to: `./build/${ packageName }/`,
				flatten: true,
				transform: ( content ) => {
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
				},
			} ) )
		),
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


