const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const path = require( 'node:path' );
const sass = require( 'sass' );
const postcss = require( 'postcss' );
const { JSDOM } = require( 'jsdom' );

// Compile the shipped entry point, including the real shared mixins. Matching
// its selectors against core markup checks both integration and override gates.
const stylesheet = postcss.parse( sass.compileString(
	"@import 'mixins'; @import 'style';",
	{
		loadPaths: [ path.resolve( __dirname, '../../base-styles' ), __dirname ],
		silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
	}
).css );

const contextualDeclarations = ( html, target ) => {
	const element = new JSDOM( html ).window.document.querySelector( target );
	assert.ok( element );
	const declarations = {};
	stylesheet.walkRules( rule => {
		if ( ! rule.nodes.some( declaration => /^var\(--sm-current-(bg|fg1)-color\)$/.test( declaration.value ) ) ) {
			return;
		}
		// This project's jsdom predates :where(). Removing its specificity
		// wrapper preserves matching; actual cascade precedence is checked live.
		if ( element.matches( rule.selector.replace( /:where\(([^)]+)\)/g, '$1' ) ) ) {
			rule.walkDecls( declaration => {
				if ( /^var\(--sm-current-(bg|fg1)-color\)$/.test( declaration.value ) ) {
					declarations[ declaration.prop ] = declaration.value;
				}
			} );
		}
	} );
	return declarations;
};

const overlay = ( { context = 'sm-color-signal-3', classes = '', navigation = '', nested = '' } = {} ) =>
	`<div class="${ context }">${ nested }<nav class="wp-block-navigation ${ navigation }"><div id="target" class="wp-block-navigation__responsive-container is-menu-open ${ classes }"></div></nav>${ nested ? '</div>' : '' }</div>`;

test( 'open navigation inherits both contextual tokens in frontend and editor markup', () => {
	for ( const context of [ 'sm-color-signal-0', 'sm-color-signal-1', 'sm-color-signal-3' ] ) {
		assert.deepEqual( contextualDeclarations( overlay( { context } ), '#target' ), {
			'background-color': 'var(--sm-current-bg-color)',
			color: 'var(--sm-current-fg1-color)',
		} );
	}
} );

test( 'named and custom overlay choices independently keep their foreground or surface', () => {
	for ( const classes of [ 'has-background has-contrast-background-color', 'has-background' ] ) {
		assert.deepEqual( contextualDeclarations( overlay( { classes } ), '#target' ), { color: 'var(--sm-current-fg1-color)' } );
	}
	for ( const classes of [ 'has-text-color has-base-color', 'has-text-color' ] ) {
		assert.deepEqual( contextualDeclarations( overlay( { classes } ), '#target' ), { 'background-color': 'var(--sm-current-bg-color)' } );
	}
} );

test( 'custom overlay parts, closed navigation and contexts without Color Signal keep core behavior', () => {
	assert.deepEqual( contextualDeclarations( overlay( { classes: 'disable-default-overlay' } ), '#target' ), {} );
	assert.deepEqual( contextualDeclarations( overlay( { context: '' } ), '#target' ), {} );
	assert.deepEqual( contextualDeclarations( overlay().replace( 'is-menu-open', '' ), '#target' ), {} );
} );

test( 'normal navigation colors do not replace the overlay context; inactive containers pass it through', () => {
	assert.deepEqual( contextualDeclarations( overlay( { navigation: 'has-text-color has-background', nested: '<div class="wp-block-columns">' } ), '#target' ), {
		'background-color': 'var(--sm-current-bg-color)',
		color: 'var(--sm-current-fg1-color)',
	} );
} );

const social = ( classes = '', context = 'sm-color-signal-3' ) =>
	`<div class="${ context }"><ul class="wp-block-social-links ${ classes }"><li id="target" class="wp-social-link wp-social-link-wordpress"></li></ul></div>`;

test( 'logos-only icons inherit foreground without adding a surface', () => {
	assert.deepEqual( contextualDeclarations( social( 'is-style-logos-only' ), '#target' ), { color: 'var(--sm-current-fg1-color)' } );
} );

test( 'filled and pill icons receive a contrasting contextual foreground/surface pair', () => {
	for ( const classes of [ '', 'is-style-default', 'is-style-pill-shape' ] ) {
		assert.deepEqual( contextualDeclarations( social( classes ), '#target' ), {
			color: 'var(--sm-current-bg-color)',
			'background-color': 'var(--sm-current-fg1-color)',
		} );
	}
} );

test( 'social foreground/background overrides are independent and unsignalled brands stay intact', () => {
	assert.deepEqual( contextualDeclarations( social( 'has-icon-color' ), '#target' ), { 'background-color': 'var(--sm-current-fg1-color)' } );
	assert.deepEqual( contextualDeclarations( social( 'has-icon-background-color' ), '#target' ), { color: 'var(--sm-current-bg-color)' } );
	assert.deepEqual( contextualDeclarations( social( 'has-icon-color has-icon-background-color' ), '#target' ), {} );
	assert.deepEqual( contextualDeclarations( social( 'is-style-logos-only has-icon-color' ), '#target' ), {} );
	assert.deepEqual( contextualDeclarations( social( '', '' ), '#target' ), {} );
} );
