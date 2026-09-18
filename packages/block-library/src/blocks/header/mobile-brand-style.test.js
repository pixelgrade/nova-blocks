const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const sass = require( 'sass' );
const postcss = require( 'postcss' );
const { JSDOM } = require( 'jsdom' );

const css = postcss.parse( sass.compileString(
	'@import "functions"; @import "mixins";\n' + fs.readFileSync( path.join( __dirname, 'style.scss' ), 'utf8' ),
	{
		loadPaths: [ path.resolve( __dirname, '../../../../base-styles' ), __dirname ],
		silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions' ],
	}
).css );
const rules = [];
css.walkRules( rule => rules.push( rule ) );
const value = ( rule, property ) => rule?.nodes.find( node => node.type === 'decl' && node.prop === property )?.value;
const brandRule = rules.find( rule => rule.selector === '.nb-header--mobile .nb-header__mobile-brand' );

test( 'mobile branding paints in front of the positioned Header background', () => {
	assert.ok( brandRule, 'The generated modern branding clone needs an explicit foreground layer.' );
	assert.equal( value( brandRule, 'position' ), 'relative' );
	assert.equal( value( brandRule, 'z-index' ), '1' );
	const background = rules.find( rule => rule.selector === ':where(.nb-header-background):before' );
	assert.ok( background, 'Verify the real compiled Header background layer.' );
	assert.equal( value( background, 'position' ), 'absolute' );
	assert.equal( value( background, 'z-index' ), undefined, 'The existing automatic background stack level remains intact.' );
	assert.equal( value( background, 'opacity' ), 'var(--header-background-opacity, 1)', 'Transparent and Solid keep their existing opacity policy.' );
} );

test( 'the foreground layer is scoped to mobile branding and preserves menu and cart roles', () => {
	assert.ok( brandRule );
	const document = new JSDOM( '<header class="nb-header--mobile"><div class="nb-header__mobile-brand"></div><div class="menu-item--cart"></div></header><header class="nb-header--main"><div class="nb-header__mobile-brand"></div></header><button class="c-menu-toggle"></button>' ).window.document;
	assert.equal( document.querySelector( '.nb-header--mobile .nb-header__mobile-brand' ).matches( brandRule.selector ), true );
	for ( const selector of [ '.menu-item--cart', '.c-menu-toggle', '.nb-header--main .nb-header__mobile-brand' ] ) {
		assert.equal( document.querySelector( selector ).matches( brandRule.selector ), false );
	}
	const mobile = rules.find( rule => rule.selector === '.nb-header--mobile' && value( rule, 'z-index' ) );
	const menu = rules.find( rule => rule.selector === '.c-menu-toggle' && value( rule, 'z-index' ) );
	assert.equal( value( mobile, 'z-index' ), '2000' );
	assert.equal( value( menu, 'z-index' ), '2300', 'The menu toggle remains above the mobile Header stacking context.' );
} );
