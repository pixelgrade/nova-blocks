/**
 * Quiet text (style-manager#214, `--sm-current-fg-muted-color`) resets on every surface that
 * resets the other `--sm-current-*` roles, so it never carries over from an outer surface into a
 * nested variation (style-manager#216).
 *
 * Covers the four Nova spots the issue names: the shared `apply-variation` mixin, the Header's
 * forced mobile-menu color scheme, the Header Row's below-lap inherit reset, and the List block's
 * inherit reset.
 */
const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const sass = require( 'sass' );
const postcss = require( 'postcss' );

const mixinsDir = __dirname;
const baseStylesRoot = path.resolve( __dirname, '..' );

// The mixin invocation must come AFTER the file's own content: Sass does not
// hoist mixin definitions for forward references within a stylesheet.
const compileWithInvocation = ( file, invocation = '' ) => postcss.parse( sass.compileString(
	'@import "functions"; @import "mixins";\n' + fs.readFileSync( file, 'utf8' ) + '\n' + invocation,
	{
		loadPaths: [ baseStylesRoot, path.dirname( file ) ],
		silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions' ],
	}
).css );

const declValue = ( sheet, selector, prop ) => {
	let found;
	sheet.walkRules( selector, rule => {
		const decl = rule.nodes.find( node => node.type === 'decl' && node.prop === prop );
		if ( decl ) {
			found = decl.value;
		}
	} );
	return found;
};

test( 'the shared apply-variation mixin resets quiet text alongside the other current-* roles', () => {
	const sheet = compileWithInvocation(
		path.join( mixinsDir, '_variation.scss' ),
		'.probe { @include apply-variation(3); }\n'
	);
	assert.equal(
		declValue( sheet, '.probe', '--sm-current-fg-muted-color' ),
		'var(--sm-fg-muted-color-3, var(--sm-current-fg1-color))'
	);
} );

test( "the Header's forced mobile-menu color scheme resets quiet text to variation 1", () => {
	const headerMixins = path.resolve( mixinsDir, '../../block-library/src/blocks/header/scss/_mixins.scss' );
	const sheet = compileWithInvocation(
		headerMixins,
		'.probe { @include mobile-menu-open-color-scheme; }\n'
	);
	assert.equal(
		declValue( sheet, '.probe', '--sm-current-fg-muted-color' ),
		'var(--sm-fg-muted-color-1, var(--sm-current-fg1-color))'
	);
} );

test( 'below lap, the Header Row inherit reset covers quiet text', () => {
	const headerRowStyle = path.resolve( mixinsDir, '../../block-library/src/blocks/header-row/style.scss' );
	const sheet = compileWithInvocation( headerRowStyle );
	let matched = false;
	sheet.walkRules( rule => {
		if ( ! rule.selector.includes( ':is(.nb-header-row, .more.specfic)' ) ) {
			return;
		}
		const decl = rule.nodes.find( node => node.type === 'decl' && node.prop === '--sm-current-fg-muted-color' );
		if ( decl ) {
			matched = true;
			assert.equal( decl.value, 'inherit' );
		}
	} );
	assert.ok( matched, 'expected an --sm-current-fg-muted-color: inherit reset on .nb-header-row' );
} );

test( 'the List block inherit reset covers quiet text', () => {
	const listColors = path.resolve( mixinsDir, '../../core/src/blocks/core/list/_colors.scss' );
	const sheet = compileWithInvocation( listColors );
	const decl = ( () => {
		let found;
		sheet.walkRules( '.nb-list', rule => {
			const match = rule.nodes.find( node => node.type === 'decl' && node.prop === '--sm-current-fg-muted-color' );
			if ( match ) {
				found = match;
			}
		} );
		return found;
	} )();
	assert.ok( decl, 'expected .nb-list to reset --sm-current-fg-muted-color' );
	assert.equal( decl.value, 'inherit' );
	assert.equal( decl.important, true );
} );
