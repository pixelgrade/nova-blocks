const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );

const REPO_ROOT = path.resolve( __dirname, '../../../../..' );
const BASE_STYLES = path.join( REPO_ROOT, 'packages/base-styles' );
const BLOCK_LIBRARY_SRC = path.join( REPO_ROOT, 'packages/block-library/src' );

// Compile the REAL stylesheet through the REAL base-styles mixins, so the
// assertions below describe the CSS that actually ships rather than a stub.
const compiled = sass.compileString(
	"@import 'mixins';\n@import 'blocks/supernova/style';\n",
	{
		loadPaths: [ BASE_STYLES, BLOCK_LIBRARY_SRC ],
		silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
	}
).css;
const stylesheet = postcss.parse( compiled );

const findRule = predicate => {
	let matching;

	stylesheet.walkRules( rule => {
		if ( ! matching && predicate( rule ) ) {
			matching = rule;
		}
	} );

	return matching;
};

const declaration = ( rule, prop ) => rule?.nodes.find( node =>
	node.type === 'decl' && node.prop === prop
)?.value;

// The full-align header rule: a full-align collection spans the viewport, so
// nothing else insets its header (issue #420).
const getAlignFullHeaderRule = () => findRule( rule =>
	rule.selector.includes( '.nb-supernova--align-full' ) &&
	rule.selector.includes( '.nb-collection__header' )
);

// The base header rule, which must keep owning vertical rhythm only.
const getBaseHeaderRule = () => findRule( rule =>
	rule.selector.includes( '.nb-collection__header' ) &&
	! rule.selector.includes( '.nb-supernova--align-full' )
);

test( 'a full-align collection header gets the standard viewport-edge gutter', () => {
	const rule = getAlignFullHeaderRule();

	assert.ok( rule, 'expected a .nb-supernova--align-full .nb-collection__header rule' );

	// Both sides, from the design-correct inset token — not a hardcoded value.
	assert.match( declaration( rule, 'padding-left' ) ?? '', /^var\(--nb-wrapper-sides-spacings[,)]/ );
	assert.match( declaration( rule, 'padding-right' ) ?? '', /^var\(--nb-wrapper-sides-spacings[,)]/ );
} );

test( 'the base collection header keeps no horizontal padding', () => {
	const rule = getBaseHeaderRule();

	assert.ok( rule, 'expected the base .nb-collection__header rule' );

	// Non-full aligns take their gutter from the block's own inset; adding it
	// here too would double the indent.
	assert.equal( declaration( rule, 'padding-left' ), undefined );
	assert.equal( declaration( rule, 'padding-right' ), undefined );
	assert.equal( declaration( rule, 'padding' ), undefined );
} );
