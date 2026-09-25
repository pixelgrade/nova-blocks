const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );

const REPO_ROOT = path.resolve( __dirname, '../../../../../..' );
const CORE_SRC = path.join( REPO_ROOT, 'packages/core/src' );

const compile = entry => postcss.parse( sass.compileString( `@import '${ entry }';\n`, {
	loadPaths: [ path.join( REPO_ROOT, 'packages/base-styles' ), CORE_SRC ],
	silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
} ).css );

const measureRules = sheet => {
	const rules = [];
	sheet.walkRules( rule => {
		if ( rule.selector.includes( 'nb-post-content--measure' ) ) {
			rules.push( rule );
		}
	} );
	return rules;
};
const decl = ( rule, prop ) => rule.nodes.find( node => node.type === 'decl' && node.prop === prop );

test( 'an authored Post Content measure caps default-aligned children at the content start (#650)', () => {
	const [ rule, wide, ...rest ] = measureRules( compile( 'blocks/core/post-content/style' ) );

	assert.ok( rule, 'the measure rule exists' );
	assert.equal( rest.length, 0 );

	// Wide children keep their own track instead of WordPress's centred wide cap.
	assert.match( wide.selector, /> :is\(\.alignwide, \[data-align=("?)wide\1\]\)$/ );
	assert.equal( decl( wide, 'max-width' ).value, 'none' );
	assert.ok( decl( wide, 'margin-inline' ).important );
	assert.equal( decl( rule, 'max-width' ).value, 'min(var(--nb-post-content-measure), 100%)' );
	assert.equal( decl( rule, 'margin-inline-start' ).value, '0' );
	assert.ok( decl( rule, 'margin-inline-start' ).important, 'beats WordPress constrained layout margin:auto !important' );
	assert.equal( decl( rule, 'justify-self' ).value, 'start' );

	const selector = rule.selector.replace( /\s+/g, ' ' ).replace( /"/g, '' );
	for ( const excluded of [ '.alignwide', '.alignfull', '.alignleft', '.alignright', '[data-align=wide]', '[data-align=full]' ] ) {
		assert.ok( selector.includes( excluded ), `${ excluded } keeps its own track` );
	}
} );

test( 'the core stylesheet ships the measure rule after the layout engine resets', () => {
	const sheet = compile( "mixins';\n@import 'style" );
	const rules = measureRules( sheet );
	assert.equal( rules.length, 2, 'the measure rule and the wide-track rule ship in the core stylesheet' );

	// The engine clears grid children (`> *:not(.block-list-appender) { max-width: none }`);
	// the measure rule must out-specify it (two classes on the parent + :not()).
	assert.match( rules[ 0 ].selector, /^\.wp-block-post-content\.nb-post-content--measure\.nb-post-content--measure > :not\(/ );
} );
