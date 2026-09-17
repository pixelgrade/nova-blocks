const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const sass = require( 'sass' );
const postcss = require( 'postcss' );

test( 'only transparent compact mobile bars suppress their non-fixed background', () => {
	const css = sass.compileString(
		'@import "functions"; @import "mixins";\n' + fs.readFileSync( path.join( __dirname, 'style.scss' ), 'utf8' ),
		{
			loadPaths: [ path.resolve( __dirname, '../../../../base-styles' ), __dirname ],
			silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions' ],
		}
	).css;
	const rules = [];
	postcss.parse( css ).walkRules( rule => {
		if ( rule.selector.includes( '.nb-header--mobile' ) && rule.selector.includes( '[style*=' ) ) {
			rules.push( rule );
		}
	} );
	assert.ok( rules.length > 0, 'Compile the actual non-fixed mobile opacity rule.' );
	rules.forEach( rule => assert.match( rule.selector, /\.nb-header--transparent/, 'Solid mode must not match the opacity-zero rule.' ) );
} );
