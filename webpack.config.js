const path = require( 'path' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const NODE_ENV = process.env.NODE_ENV || 'development';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const WebpackRTLPlugin = require( 'webpack-rtl-plugin' );
const ProgressBarPlugin = require( 'progress-bar-webpack-plugin' );
const chalk = require( 'chalk' );

const baseConfig = {
	mode: NODE_ENV,
	watch: devMode,
	performance: {
		hints: false,
	},
	stats: {
		all: false,
		assets: true,
		builtAt: true,
		colors: true,
		errors: true,
		hash: true,
		timings: true,
	},
	externals: {
		jquery: 'jQuery',
	},
	output: {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: devMode,
		path: path.resolve( __dirname ),
		filename: process.env.NODE_ENV === 'production' ? '[name].min.js' : '[name].js'
	},
};

const minimizeConfig = {
	minimize: true,
	minimizer: [ new TerserPlugin( {
		include: /\.min\.js$/,
	} ) ]
};

// module.exports = {
//   entry: {
//     './dist/js/editor.blocks' : './src/editor.js',
//     './dist/js/frontend.blocks' : './src/frontend.js',
//   },
// 	optimization: {
// 		splitChunks: {
// 			cacheGroups: {
// 				blocksStyle: {
// 					name: 'blocks.style',
// 					test: /style\.s?css$/,
// 					chunks: 'all',
// 					enforce: true,
// 				},
// 				blocksEditor: {
// 					name: 'blocks.editor',
// 					test: /editor\.s?css$/,
// 					chunks: 'all',
// 					enforce: true,
// 				},
// 			},
// 		},
// 		minimize: !devMode,
// 		minimizer: [
// 			new TerserPlugin({}),
// 			new OptimizeCSSAssetsPlugin({})
// 		],
// 		usedExports: true,
// 		sideEffects: true
// 	},
// 	mode: devMode ? 'development' : 'production',
//   output: {
// 		// Add /* filename */ comments to generated require()s in the output.
// 		pathinfo: true,
//     path: path.resolve( __dirname ),
//     filename: process.env.NODE_ENV === 'production' ? '[name].min.js' : '[name].js'
//   },
// 	externals : {
// 		lodash : {
// 			commonjs: 'lodash',
// 			amd: 'lodash',
// 		},
//
// 	},
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
// 					options: {
// 						presets: [ '@wordpress/babel-preset-default' ],
// 					},
//         },
//       },
//       {
//         test: /\.s?css$/,
// 				exclude: /node_modules/,
// 				use: [
// 					'style-loader',
// 					MiniCssExtractPlugin.loader,
// 					{ loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, url: false } },
// 					'postcss-loader',
// 					{ loader: 'sass-loader', options: { sourceMap: true } },
// 				],
//       },
// 			{
// 				test: /\.(png|jpg|gif|svg)$/,
// 				use: [
// 					{
// 						loader: 'file-loader',
// 						options: {
// 							name: '[name].[ext]',
// 							outputPath: 'dist/images'
// 						}
// 					}
// 				]
// 			}
//     ],
//   },
//   plugins: [
// 		new WebpackRTLPlugin( {
// 			filename: '[name]-rtl.css',
// 			minify: {
// 				safe: true,
// 			},
// 		} ),
// 		new MiniCssExtractPlugin({
// 			filename: './dist/css/[name].css',
// 		}),
// 		new ProgressBarPlugin( {
// 			format:
// 				chalk.blue( 'Build' ) +
// 				' [:bar] ' +
// 				chalk.green( ':percent' ) +
// 				' :msg (:elapsed seconds)',
// 		} ),
// 		new IgnoreEmitPlugin(['blocks.editor.min.js', 'blocks.style.min.js']), // Or simply: new IgnoreEmitPlugin(/^style.*\.js$/)
// 		// new LodashModuleReplacementPlugin(),
// 		// new BundleAnalyzerPlugin(),
//   ],
// };


/**
 * Config for compiling Vendors.
 */
const VendorConfig = {
	...baseConfig,
	entry: {
		'./dist/js/vendor/jquery.bully.min' : './dist/js/vendor/jquery.bully.js',
		'./dist/js/vendor/jquery.rellax.min' : './dist/js/vendor/jquery.rellax.js',
		'./dist/js/vendor/jquery.slick.min' : './dist/js/vendor/jquery.slick.js',
		'./dist/js/vendor/jquery.velocity.min' : './dist/js/vendor/jquery.velocity.js',
	},
	optimization: {
		...minimizeConfig,
	},
}
/**
 * Config for compiling Gutenberg blocks JS.
 */
const GutenbergBlocksConfig = {
	...baseConfig,
	entry: {
		'./dist/js/editor.blocks' : './src/editor.js',
		'./dist/js/editor.blocks.min' : './src/editor.js',
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				blocksStyle: {
					name: './dist/css/blocks.style',
					test: /style\.s?css$/,
					chunks: 'all',
					enforce: true,
				},
				blocksEditor: {
					name: './dist/css/blocks.editor',
					test: /editor\.s?css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
		...minimizeConfig,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader?cacheDirectory',
					options: {
						presets: [ '@wordpress/babel-preset-default' ],
						plugins: [
							NODE_ENV === 'production'
								? require.resolve(
								'babel-plugin-transform-react-remove-prop-types'
								)
								: false,
							require.resolve(
								'@babel/plugin-proposal-class-properties'
							),
						].filter( Boolean ),
					},
				},
			},
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, url: false } },
					'postcss-loader',
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
			},
		],
	},
	plugins: [
		new WebpackRTLPlugin( {
			filename: '[name]-rtl.css',
			minify: {
				safe: true,
			},
		} ),
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} ),
		new ProgressBarPlugin( {
			format:
				chalk.blue( 'Build' ) +
				' [:bar] ' +
				chalk.green( ':percent' ) +
				' :msg (:elapsed seconds)',
		} ),
		new IgnoreEmitPlugin(['blocks.editor.min.js', 'blocks.style.min.js']), // Or simply: new IgnoreEmitPlugin(/^style.*\.js$/)
	],
};

const BlocksFrontendConfig = {
	...baseConfig,
	entry: {
		'./dist/js/frontend.blocks' : './src/frontend.js',
		'./dist/js/frontend.blocks.min' : './src/frontend.js',
	},
	optimization: {
		...minimizeConfig
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader?cacheDirectory',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									modules: false,
									targets: {
										browsers: [
											'extends @wordpress/browserslist-config',
										],
									},
								},
							],
						],
						plugins: [
							require.resolve(
								'@babel/plugin-proposal-object-rest-spread'
							),
							require.resolve(
								'@babel/plugin-transform-react-jsx'
							),
							require.resolve(
								'@babel/plugin-proposal-async-generator-functions'
							),
							require.resolve(
								'@babel/plugin-transform-runtime'
							),
							require.resolve(
								'@babel/plugin-proposal-class-properties'
							),
							NODE_ENV === 'production'
								? require.resolve(
								'babel-plugin-transform-react-remove-prop-types'
								)
								: false,
						].filter( Boolean ),
					},
				},
			},
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: {
					loader: 'ignore-loader',
				},
			},
		],
	},
	plugins: [
		new ProgressBarPlugin( {
			format:
				chalk.blue( 'Build frontend scripts' ) +
				' [:bar] ' +
				chalk.green( ':percent' ) +
				' :msg (:elapsed seconds)',
		} ),
		new IgnoreEmitPlugin(['blocks.editor.min.js', 'blocks.style.min.js']), // Or simply: new IgnoreEmitPlugin(/^style.*\.js$/)
	],
};

module.exports = [ GutenbergBlocksConfig, BlocksFrontendConfig, VendorConfig ];
