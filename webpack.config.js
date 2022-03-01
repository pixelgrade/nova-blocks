/**
 * External dependencies
 */
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const postcss = require( 'postcss' );
const { get, compact } = require( 'lodash' );
const { basename } = require( 'path' );
const glob = require( "glob" );
const ESLintPlugin = require('eslint-webpack-plugin');

/**
 * WordPress dependencies
 */
const CustomTemplatedPathPlugin = require( '@wordpress/custom-templated-path-webpack-plugin' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const { camelCaseDash } = require( '@wordpress/dependency-extraction-webpack-plugin/lib/util' );

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
                                .filter( packageName => packageName !== 'block-library' )
                                .map( packageName => packageName.replace( NOVABLOCKS_NAMESPACE, '' ) );

let editorEntryPoints = gutenbergPackages.filter( packageName => packageName !== 'block-library' ).reduce( ( memo, packageName ) => {
	const name = camelCaseDash( packageName );
	memo[ name ] = `./packages/${ packageName }`;
	return memo;
}, {} );

let frontendEntryPoints = gutenbergPackages.filter( packageName => packageName !== 'block-library' ).reduce( ( memo, packageName ) => {
	const sources = glob.sync( `./packages/${ packageName }/build/frontend.js` );

	sources.forEach( source => {
		let name = `./build/${ packageName }/frontend`;
		memo[ name ] = source;
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

const cssTransform = ( content ) => {
	if ( mode === 'production' ) {
		return postcss( [
			require( 'cssnano' )( {
				preset: [
					'default',
					{
            convertValues: false,
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
	new CopyWebpackPlugin({
      patterns:
        gutenbergPackages.map((packageName) => (
          {
            from: `./packages/${packageName}/build-style/*.css`,
            to: `./build/${packageName}/`,
            flatten: true,
            transform: cssTransform,
            noErrorOnMissing: true,
          }
        ))
    }
	);


const CopyBlocksCSSPlugin =
	new CopyWebpackPlugin({
      patterns:
        glob.sync('./packages/block-library/build-style/blocks/*').map((blockDirPath) => {
          let blockName = blockDirPath.replace('./packages/block-library/build-style/blocks/', '');
          blockName = blockName.replace('/', '');

          return {
            from: `**/*.css`,
            to: `build/block-library/blocks/${blockName}/`,
            flatten: false,
            context: `packages/block-library/build-style/blocks/${blockName}/`,
            transform: cssTransform,
            noErrorOnMissing: true,
          }
        })
    }
	);

const CopyBlocksPhpPlugin =
	new CopyWebpackPlugin({
      patterns:
        glob.sync('./packages/block-library/build/blocks/*').map((blockDirPath) => {
          let blockName = blockDirPath.replace('./packages/block-library/build/blocks/', '');
          blockName = blockName.replace('/', '');

          return {
            from: `**/*.php`,
            to: `build/block-library/blocks/${blockName}/`,
            flatten: false,
            context: `packages/block-library/build/blocks/${blockName}/`,
            noErrorOnMissing: true,
          }
        })
    }
	);

// Copy the whole `lib` directory.
const CopyBlocksLibPlugin =
  new CopyWebpackPlugin({
    patterns:
      glob.sync('./packages/block-library/build/blocks/*').map((blockDirPath) => {
        let blockName = blockDirPath.replace('./packages/block-library/build/blocks/', '');
        blockName = blockName.replace('/', '');

        return {
          from: `**/*.*`,
          to: `build/block-library/blocks/${blockName}/lib/`,
          flatten: false,
          context: `packages/block-library/build/blocks/${blockName}/lib/`,
          noErrorOnMissing: true,
        }
      })
    }
  );

const CopyBlocksAssetsPlugin =
	new CopyWebpackPlugin({
    patterns:
      glob.sync('./packages/block-library/build/blocks/*').map((blockDirPath) => {
        let blockName = blockDirPath.replace('./packages/block-library/build/blocks/', '');
        blockName = blockName.replace('/', '');

        return {
          from: `**/*.(json|svg)`,
          to: `build/block-library/blocks/${blockName}/`,
          flatten: false,
          context: `packages/block-library/build/blocks/${blockName}/`,
          noErrorOnMissing: true,
        }
      })
    }
	);

const DefaultConfig = {
	mode,
	module: {
		rules: compact( [
			mode !== 'production' && {
				test: /\.js$/,
				use: require.resolve( 'source-map-loader' ),
				enforce: 'pre',
			},
			{
				test: /\.svg$/,
				use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[1]-[2]',
              symbolRegExp: 'packages\\/([^\\/]*)\\/[^\\/]*(?:\\/svgs?|\\/blocks)?\\/(.*)\\.svg'
            }
          },
					'svgo-loader'
				]
			}
		] ),
	},
	plugins: [
//    new ESLintPlugin(),
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
    CopyBlocksLibPlugin,
		CopyBlocksAssetsPlugin,
		new DependencyExtractionWebpackPlugin( {
			injectPolyfill: true,
			requestToExternal,
			requestToHandle,
		} ),
	],
	devtool,
};

const PackagesConfig = Object.assign( {}, DefaultConfig, {
	entry: editorEntryPoints,
	output: {
		devtoolNamespace: 'novablocks',
		filename: './build/[basename]/index.js',
		path: __dirname,
		library: [ 'novablocks', '[name]' ],
		libraryTarget: 'this',
	},
} );

const FrontendConfig = Object.assign( {}, DefaultConfig, {
	entry: frontendEntryPoints,
	output: {
		devtoolNamespace: 'novablocks',
		path: __dirname,
	},
} );

const BlocksConfig = Object.assign( {}, DefaultConfig, {
	entry: blocksEntryPoints,
	output: {
		devtoolNamespace: 'novablocks',
		path: __dirname,
	},
} );

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
	'jquery.slick'
];

const VendorEntries = {};

VendorScripts.forEach( script => {
	VendorEntries[ `./dist/vendor/${ script }` ] = `./src/vendor/${ script }`;
	VendorEntries[ `./dist/vendor/${ script }.min` ] = `./src/vendor/${ script }`;
} );

// Just copy the files in each directory.
const CopyVendorDirsPlugin =
	new CopyWebpackPlugin({
    patterns:
      glob.sync('./src/vendor/trix').map((dirPath) => {
        let vendor = dirPath.replace('./src/vendor/', '');

        return {
          from: '*',
          to: `dist/vendor/${vendor}/`,
          flatten: false,
          context: `src/vendor/${vendor}/`,
          noErrorOnMissing: true,
        }
      })
    }
	);

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
	plugins: [
		CopyVendorDirsPlugin,
	],
};

module.exports = [
	PackagesConfig,
	FrontendConfig,
	BlocksConfig,
	VendorConfig,
];
