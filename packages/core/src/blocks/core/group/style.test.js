const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );

const source = fs.readFileSync( path.join( __dirname, 'style.scss' ), 'utf8' );
const compiled = sass.compileString( `
	@mixin above( $breakpoint ) {
		@content;
	}

	${ source }
` ).css;
const stylesheet = postcss.parse( compiled );

const getToggle = selector => {
	const rule = stylesheet.nodes.find( node =>
		node.type === 'rule' && node.selector === selector
	);
	const declaration = rule?.nodes.find( node =>
		node.type === 'decl' && node.prop === '--nb-group-padding-toggle'
	);

	return declaration?.value;
};

test( 'transparent groups nested in card content do not add wrapper side padding', () => {
	assert.equal(
		getToggle( '.nb-supernova-item__inner-container .wp-block-group' ),
		'0'
	);
} );

test( 'groups with a nonzero color signal retain surface padding', () => {
	assert.equal(
		getToggle( '.wp-block-group[class*=sm-color-signal]:not(.sm-color-signal-0)' ),
		'1'
	);
} );
