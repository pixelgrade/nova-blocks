const path = require( 'path' );
const chalk = require( 'chalk' );

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackRTLPlugin = require( 'webpack-rtl-plugin' );
const ProgressBarPlugin = require( 'progress-bar-webpack-plugin' );

const NODE_ENV = process.env.NODE_ENV || 'development';
const devMode = NODE_ENV !== 'production';

console.log( NODE_ENV );

const baseConfig = {
	mode: NODE_ENV,
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
		lodash : {
 			commonjs: 'lodash',
 			amd: 'lodash',
 		},
	},
	output: {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: devMode,
		path: path.resolve( __dirname ),
	},
};

const minimizeConfig = {
	minimize: true,
	minimizer: [
		new TerserPlugin( {
			include: /\.min\.js$/,
		} )
	],
};

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

const StylesConfig = {
	mode: 'development',
	watch: devMode,
	output: {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: devMode,
		path: path.resolve( __dirname ),
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 1,
							url: false
						}
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					},
				],
			},
		]
	},
	entry: {
		'./dist/css/editor' : './src/scss/editor.scss',
		'./dist/css/frontend' : './src/scss/style.scss',
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
	]
};

/**
 * Config for compiling Gutenberg blocks JS.
 */
const GutenbergBlocksConfig = {
	...baseConfig,
	entry: {
		'./dist/js/editor' : './src/editor.js',
		'./dist/js/editor.min' : './src/editor.js',
	},
	optimization: {
		...minimizeConfig
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	plugins: [ new ProgressBarPlugin( {
		format: chalk.blue( 'Build' ) + ' [:bar] ' + chalk.green( ':percent' ) + ' :msg (:elapsed seconds)',
	} ) ],
};

const BlocksFrontendConfig = {
	...baseConfig,
	entry: {
		'./dist/js/frontend' : './src/frontend.js',
		'./dist/js/frontend.min' : './src/frontend.js',
	},
	optimization: {
		...minimizeConfig
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	plugins: [ new ProgressBarPlugin( {
		format: chalk.blue( 'Build' ) + ' [:bar] ' + chalk.green( ':percent' ) + ' :msg (:elapsed seconds)',
	} ) ],
};

module.exports = [
	GutenbergBlocksConfig,
	BlocksFrontendConfig,
	VendorConfig,
	StylesConfig,
];
