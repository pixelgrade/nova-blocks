const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const sass = require( 'sass' );
const postcss = require( 'postcss' );
const { JSDOM } = require( 'jsdom' );

const compile = file => postcss.parse( sass.compileString(
	'@import "functions"; @import "mixins";\n' + fs.readFileSync( path.join( __dirname, file ), 'utf8' ),
	{
		loadPaths: [ path.resolve( __dirname, '../../../../base-styles' ), __dirname ],
		silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions' ],
	}
).css );
const frontend = compile( 'style.scss' );
const editor = compile( 'editor-styles.scss' );
const document = new JSDOM( '<header class="nb-header--main"><div class="nb-header-row"><div class="wp-block-site-logo"><img class="custom-logo"></div></div></header><header class="nb-header--mobile"><div class="wp-block-site-logo"><img class="custom-logo"></div></header>' ).window.document;
const matchingRules = ( sheet, element ) => {
	const rules = [];
	sheet.walkRules( rule => {
		// Match the shared Logo sizing rules, excluding unrelated positional row
		// recipes whose complex :is() selectors are unsupported by this jsdom.
		if ( /(?:^|,)\s*\.nb-header(?:-row|--mobile) \.wp-block-site-logo(?: img(?:\[class\])?)?(?:,|$)/.test( rule.selector ) && element.matches( rule.selector ) ) {
			rules.push( rule );
		}
	} );
	return rules;
};
const value = ( rule, property ) => rule.nodes.find( node => node.type === 'decl' && node.prop === property )?.value;

test( 'the generated compact mobile core logo uses the Header mobile height token', () => {
	const image = document.querySelector( '.nb-header--mobile img' );
	const rule = matchingRules( frontend, image ).find( item => value( item, 'height' ) === 'calc(var(--nb-mobile-header-logo-height-setting) * 1px)' );
	assert.ok( rule, 'Mobile branding is outside .nb-header-row and must still receive the authored mobile logo height.' );
	assert.equal( rule.parent.type, 'atrule' );
	assert.equal( rule.parent.name, 'media' );
	assert.match( rule.parent.params, /^not screen and \(min-width:/, 'The below-lap mixin emits the negated desktop breakpoint.' );
} );

test( 'desktop and compact mobile core logos retain image proportions and width containment', () => {
	for ( const container of [ '.nb-header-row', '.nb-header--mobile' ] ) {
		const logo = document.querySelector( `${ container } .wp-block-site-logo` );
		const wrapper = matchingRules( frontend, logo ).find( rule => value( rule, 'max-width' ) === '100%' );
		assert.ok( wrapper, `${ container } contains the core Logo wrapper.` );
		assert.equal( value( wrapper, 'min-width' ), '0' );
		const image = matchingRules( frontend, logo.querySelector( 'img' ) ).find( rule => value( rule, 'object-fit' ) === 'contain' );
		assert.ok( image, `${ container } preserves painted image proportions.` );
		assert.equal( value( image, 'width' ), 'auto' );
		assert.equal( value( image, 'max-width' ), '100%' );
		assert.equal( value( image, 'height' ), 'calc(var(--nb-header-logo-height-setting) * 1px)' );
	}
} );

test( 'the editor pins the desktop core logo height at every canvas width', () => {
	const image = document.querySelector( '.nb-header-row img' );
	const rule = matchingRules( editor, image ).find( item => value( item, 'height' ) === 'calc(var(--nb-header-logo-height-setting) * 1px)' );
	assert.ok( rule );
	assert.equal( rule.parent.type, 'root', 'The editor desktop height must be independent of viewport media queries.' );
	assert.equal( document.querySelector( '.nb-header--mobile img' ).matches( rule.selector ), false );
} );

const resizableRules = [];
editor.walkRules( rule => {
	if ( rule.selector.includes( '.components-resizable-box__container' ) ) {
		resizableRules.push( rule );
	}
} );
const resizableDocument = new JSDOM( '<div class="editor-styles-wrapper"><div class="nb-header-row"><div class="wp-block-site-logo"><div class="components-resizable-box__container" style="width:120px;height:119.077px;max-width:1450px;max-height:1438.85px;min-width:21px;min-height:20px;box-sizing:border-box;flex-shrink:0"><img class="custom-logo"></div></div></div><div class="wp-block-site-logo"><div class="components-resizable-box__container" style="width:120px;height:119.077px"></div></div></div><div class="nb-header-row"><div class="wp-block-site-logo"><div class="components-resizable-box__container"></div></div></div>' ).window.document;

test( 'the Header editor lets logo height size the image instead of its inline core resize box', () => {
	const wrapper = resizableDocument.querySelector( '.editor-styles-wrapper .nb-header-row .components-resizable-box__container' );
	assert.equal( wrapper.style.width, '120px', 'Reproduce the core Logo default width independently of the Header height.' );
	const rule = resizableRules.find( item => wrapper.matches( item.selector ) );
	assert.ok( rule, 'The Header editor must release core Logo inline dimensions that otherwise cap and clip its image.' );
	// The component derives min/max heights from the core width range. Those
	// bounds can cap a wide logo at 232px or enlarge a tall logo above 30px.
	for ( const [ property, expected ] of [ [ 'width', 'auto' ], [ 'height', 'auto' ], [ 'max-width', '100%' ], [ 'min-width', '0' ], [ 'max-height', 'none' ], [ 'min-height', '0' ] ] ) {
		const declaration = rule.nodes.find( node => node.type === 'decl' && node.prop === property );
		assert.ok( declaration );
		assert.equal( declaration.value, expected );
		assert.equal( declaration.important, true, `${ property } must override the resize component's inline dimensions.` );
	}
} );

test( 'the resize-box reset preserves core Logo sizing outside Header editor rows', () => {
	assert.ok( resizableRules.length > 0 );
	const standalone = resizableDocument.querySelector( '.editor-styles-wrapper > .wp-block-site-logo .components-resizable-box__container' );
	const frontendWrapper = resizableDocument.querySelector( 'body > .nb-header-row .components-resizable-box__container' );
	resizableRules.forEach( rule => {
		assert.equal( standalone.matches( rule.selector ), false );
		assert.equal( frontendWrapper.matches( rule.selector ), false );
	} );
	frontend.walkRules( rule => assert.equal( rule.selector.includes( '.components-resizable-box__container' ), false, 'Frontend logo sizing does not depend on editor wrappers.' ) );
} );
