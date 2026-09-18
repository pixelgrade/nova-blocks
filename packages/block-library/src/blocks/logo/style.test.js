const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const sass = require( 'sass' );
const postcss = require( 'postcss' );
const { JSDOM } = require( 'jsdom' );
const specificity = require( 'specificity' );

const compile = source => sass.compileString(
	'@import "functions"; @import "mixins";\n' + source,
	{
		loadPaths: [ path.resolve( __dirname, '../../../../base-styles' ), __dirname ],
		silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions' ],
	}
).css;
const displayRules = css => {
	const rules = [];
	postcss.parse( css ).walkDecls( 'display', declaration => {
		if ( declaration.parent.selector.includes( '.site-info' ) ) {
			rules.push( { selector: declaration.parent.selector, display: declaration.value, important: declaration.important } );
		}
	} );
	return rules;
};
const weight = selector => specificity.calculate( selector )[0].specificityArray;
const greaterThan = ( left, right ) => {
	for ( let index = 0; index < left.length; index++ ) {
		if ( left[index] !== right[index] ) {
			return left[index] > right[index];
		}
	}
	return false;
};

test( 'explicit local text beats Patch hiding in frontend and editor without changing inherited text', () => {
	const logo = displayRules( compile( fs.readFileSync( path.join( __dirname, 'style.scss' ), 'utf8' ) ) );
	const explicit = logo.find( rule => rule.display === 'block' && rule.selector.includes( '.nb-logo--site-text-explicit' ) );
	assert.ok( explicit, 'The compiled Logo CSS must restore explicitly selected text.' );
	assert.equal( !! explicit.important, false, 'Local text uses scoped specificity rather than an important override.' );

	// This is the measured cross-repo skin contract, independent of load order.
	const patchSelectors = [
		'.is-style-anima-patch-header .c-logo + .site-info',
		'.editor-styles-wrapper .is-style-anima-patch-header .c-logo + .site-info',
	];
	const document = new JSDOM( '<div class="editor-styles-wrapper"><header class="is-style-anima-patch-header"><div class="c-branding site-branding nb-logo--site-text-explicit"><div class="c-logo site-logo"></div><div class="site-info"></div></div></header></div>' ).window.document;
	const info = document.querySelector( '.site-info' );
	assert.equal( info.matches( explicit.selector ), true );
	patchSelectors.forEach( selector => {
		assert.equal( info.matches( selector ), true, 'The fixture reproduces the Patch hiding selector.' );
		assert.equal( greaterThan( weight( explicit.selector ), weight( selector ) ), true, 'Explicit text must win regardless of theme CSS order.' );
	} );
	info.parentElement.classList.remove( 'nb-logo--site-text-explicit' );
	assert.equal( info.matches( explicit.selector ), false, 'Inherit and No text must retain the theme skin policy.' );
} );

test( 'explicit title and tagline undo the global visually hidden text rule only inside their Logo', () => {
	const css = postcss.parse( compile( fs.readFileSync( path.join( __dirname, 'style.scss' ), 'utf8' ) ) );
	const restores = [];
	css.walkRules( rule => {
		if ( rule.selector.includes( '.nb-logo--site-text-explicit' ) ) {
			const declarations = {};
			rule.walkDecls( declaration => { declarations[declaration.prop] = declaration.value; } );
			if ( declarations.position === 'static' && declarations['clip-path'] === 'none' ) {
				restores.push( rule.selector );
			}
		}
	} );
	assert.ok( restores.length > 0, 'Explicit text must remove absolute positioning and clip-path hiding applied when global header text is disabled.' );

	const document = new JSDOM( '<div class="c-branding site-branding nb-logo--site-text-explicit"><div class="site-info"><p class="site-title">Title</p><p class="site-description">Tagline</p></div></div><p class="site-title" id="other-title">Unrelated title</p>' ).window.document;
	[ '.site-title', '.site-description' ].forEach( globalSelector => {
		const text = document.querySelector( '.site-info ' + globalSelector );
		const matching = restores.flatMap( selector => selector.split( ',' ) ).filter( selector => text.matches( selector ) );
		assert.ok( matching.length > 0, 'Restore each explicitly requested text type.' );
		matching.forEach( selector => assert.equal( greaterThan( weight( selector ), weight( globalSelector ) ), true, 'Local text beats the generated global hiding rule even when that rule loads later.' ) );
	} );
	const otherTitle = document.querySelector( '#other-title' );
	assert.equal( restores.some( selector => otherTitle.matches( selector ) ), false, 'A local Logo choice must not change another identity.' );
	document.querySelector( '.nb-logo--site-text-explicit' ).classList.remove( 'nb-logo--site-text-explicit' );
	assert.equal( restores.some( selector => document.querySelector( '.site-info .site-title' ).matches( selector ) ), false, 'Inherited text retains the global hiding policy.' );
} );
