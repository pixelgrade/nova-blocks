const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const TerserPlugin = require('terser-webpack-plugin-legacy');

// Set different CSS extraction for editor only and common block styles
const blocksCSSPlugin = new ExtractTextPlugin( {
	filename: './dist/css/blocks.style.css',
} );
const editBlocksCSSPlugin = new ExtractTextPlugin( {
	filename: './dist/css/blocks.editor.css',
} );

// Configuration for the ExtractTextPlugin.
const extractConfig = {
	use: [
		{loader: 'raw-loader'},
		{
			loader: 'postcss-loader',
			options: {
				plugins: [require( 'autoprefixer' )],
			},
		},
		{
			loader: 'sass-loader',
			query: {
				outputStyle:
					'production' === process.env.NODE_ENV ? 'compressed' : 'nested',
			},
		},
	],
};

module.exports = {
	entry: {
		'./dist/js/editor.blocks': './src/editor.js',
		'./dist/js/editor.blocks.min': './src/editor.js',
		'./dist/js/frontend.blocks': './src/frontend.js',
		'./dist/js/frontend.blocks.min': './src/frontend.js',

		'./dist/js/vendor/jquery.bully': './src/vendor/jquery.bully.js',
		'./dist/js/vendor/jquery.bully.min': './src/vendor/jquery.bully.js',
		'./dist/js/vendor/jquery.rellax': './src/vendor/jquery.rellax.js',
		'./dist/js/vendor/jquery.rellax.min': './src/vendor/jquery.rellax.js',
		'./dist/js/vendor/jquery.slick': './src/vendor/jquery.slick.js',
		'./dist/js/vendor/jquery.slick.min': './src/vendor/jquery.slick.js',
		'./dist/js/vendor/jquery.velocity': './src/vendor/jquery.velocity.js',
		'./dist/js/vendor/jquery.velocity.min': './src/vendor/jquery.velocity.js',
	},
	output: {
		path: path.resolve( __dirname ),
		filename: '[name].js',
	},
	externals: {
		jquery: 'jQuery'
	},
	watch: 'production' !== process.env.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /style\.s?css$/,
				use: blocksCSSPlugin.extract( extractConfig ),
			},
			{
				test: /editor\.s?css$/,
				use: editBlocksCSSPlugin.extract( extractConfig ),
			}
		],
	},
	plugins: [
		blocksCSSPlugin,
		editBlocksCSSPlugin,
		new OptimizeCSSAssetsPlugin(),
		new TerserPlugin({
			include: /\.min\.js$/,
		}),
	],
};
